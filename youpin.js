/**
 * 
 * reference: 
 * - https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
 * - https://pptr.dev/#?product=Puppeteer&version=v7.1.0&show=outline
 */

const fs = require("fs"),
  path = require("path"),
  { EOL } = require("os"),
  puppeteer = require("puppeteer"),
  iPhoneX = puppeteer.devices["iPhone X"];

// for debug only
const ENABLE_LOG = false;
const ENABLE_LOG_TO_FILE = true;

// config
const CONFIG = [
  {
    credential: {
      user: '15019872900',
      pass: '',
    },
    userDataDir: "D:\\temp\\youpin\\userdata-1",
  },
  {
    credential: {
      user: '18628333600',
      pass: '',
    },
    userDataDir: "/Users/yl.huang/Documents/lab/youpin/userdata-2",
  },
];
const CurrentConfig = CONFIG[process.argv.length > 2 ? process.argv[2] : 0];
// console.log(CurrentConfig)
const LogFilename = path.resolve(CurrentConfig.userDataDir, new Date().getTime() + '.txt');

// selector for html DOM elements
const HOME_SUBSCRIBEBUY_BUTTON = '[module_key="image_link_map"]>div>:nth-child(3)'
// const LOGIN_COUNTRYCODE = '#countrycode_value'
// const LOGIN_COUNTRYCODE_86 = '#countrycode_container [data-code="+86"]'
const LOGIN_USERNAME = '#username'
const LOGIN_PWD = '#pwd'
const LOGIN_BUTTON = '#login-button'
const ORDER_ATTEND_BUTTON = 'div.attend-btn'

// for debug only
process
  .on("uncaughtException", function (err) {
    console.error("Caught exception: " + err);
  })
  .on("unhandledRejection", err => {
    console.error("Caught exception: " + err);
  });

async function createPage() {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    userDataDir: CurrentConfig.userDataDir,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    //devtools: true,
    args: [
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--allow-running-insecure-content',
      '--autoplay-policy=no-user-gesture-required',
      '--window-size=375,900',
    ],
  }).catch(() => browser.close);

  const page = await browser.newPage();
  await page.emulate(iPhoneX);

  // emulate app
  page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'platform', { get: () => 'iPhone' })
  });
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MIOTWeex/2.0.5 (YouPin;4.10.1;)  MIOTStore/20191212 (YouPin;4.10.1;) APP/com.xiaomi.youpin APPV/4.10.1 iosPassportSDK/3.9.6 iOS/14.4/XiaoMi/MiuiBrowser/4.3/Shop/ios/iPhone10,1/4.5.41');
  await page.setExtraHTTPHeaders({
    'X-User-Agent': 'channel/youpin platform/youpin.ios'
  });

  return page;
}

//https://m.xiaomiyoupin.com/app/shop/ugg/subscribeBuy.html?actId=601f5ab4d6018000014e66ef&spmref=M_H5.2112.97890.2.11462387
(async () => {

  const page = await createPage();

  // event handlers

  // for debug only:
  page.on('requestfailed', request => {
    console.log(request.url(), '==>', request.failure().errorText);
  });
  page.on('requestfinished', async (request) => {

    if (!(ENABLE_LOG || ENABLE_LOG_TO_FILE)) {
      return;
    }

    const url = request.url();
    if (url.startsWith('https://m.xiaomiyoupin.com/mtop/act/orderspike')) {

      const response = await request.response();

      const resHeaders = response.headers();
      let resBody;
      if (request.redirectChain().length === 0) {
        resBody = await response.text();
      }

      const info = {
        url,
        reqHeaders: request.headers(),
        reqPostData: request.postData(),
        resHeaders,
        resBody,
      }

      if (ENABLE_LOG) {
        console.log(info);
      }

      if (ENABLE_LOG_TO_FILE) {
        const stream = fs.createWriteStream(LogFilename, { 'flags': 'a' });
        stream.once('open', function (fd) {
          stream.write(JSON.stringify(info, null, 2));
          stream.write(EOL)
          stream.write('--------------------');
          stream.write(EOL);
          stream.end();
        });
      }

    }

  });

  await page.setRequestInterception(true);
  page.on('request', request => {
    let url = request.url();
    if (url.includes('subscribeBuy.deb71068')
      || url.includes('youpin-lib10.min.js')
      || url.includes('login-en.js')
    ) { // interception

      let filename = new URL(url).pathname.split('/').pop();
      request.respond({
        status: 200,
        contentType: 'application/javascript',
        body: fs.readFileSync(filename),
      });

    } else if (url.startsWith('https://m.xiaomiyoupin.com/app/stat/visitv2')
      || url.startsWith('https://stat.youpin.mi.com')
    ) { // ignore stats

      request.respond({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          code: 0,
          message: 'ok',
        })
      })

    } else {
      request.continue();
    }
  })

  page.on('response', async (response) => {
    const request = response.request();
    const url = request.url()

    // https://account.xiaomi.com/pass/serviceLogin?sid=miotstore&_bannerBiz=miotstore&callback=https%3A%2F%2Fshopapi.io.mi.com%2Fapp%2Fshop%2Fauth%3Fsid%3Dmiotstore%26logid%3D1613358896.579642322%26sign%3D11711eb490f114a9ba365ee35f78647d%26followup%3Dhttps%253A%252F%252Fwww.xiaomiyoupin.com%252F
    if (url.startsWith('https://account.xiaomi.com/pass/serviceLogin')) {
      // special handler: login -- just run once when userDataDir enabled

      // avoid dead loop
      const referer = request.headers().referer;
      if (referer && referer.startsWith('https://account.xiaomi.com/pass/serviceLogin')) {
        return;
      }

      await page.waitForSelector(LOGIN_BUTTON, { visible: true });
      // await page.waitForTimeout(3 * 1000);

      await page.type(LOGIN_USERNAME, CurrentConfig.credential.user)
      // alternative:
      // await page.focus(LOGIN_USERNAME);
      // await page.keyboard.type(CurrentConfig.credential.user);

      // 1) login type: ticket
      // await page.$eval(LOGIN_COUNTRYCODE, ele => ele.textContent = '+86');
      // ...

      // 2) login type: credential
      await page.type(LOGIN_PWD, CurrentConfig.credential.pass)

      // submit login form
      await page.click(LOGIN_BUTTON)

    }
    // else if (url.startsWith('')) {

    // }

  })

  // end


  // process of subscribeBuy: load main page -> click subscribeBuy -> login if required (there is no token cookie) -> get subscribeBuy button and click
  // process of submit order: after subscribed -> count down -> get buy button and submit order
  await page.goto('https://m.xiaomiyoupin.com/main', { waitUntil: 'domcontentloaded' });

  // subscribeBuy -- 预约
  await page.waitForSelector(HOME_SUBSCRIBEBUY_BUTTON);
  // for debug only:
  // const content = await page.$eval(HOME_SUBSCRIBEBUY_BUTTON, ele => ele.outerHTML);
  // console.log(content);
  await page.click(HOME_SUBSCRIBEBUY_BUTTON);

  // wait for a while to load subscribeBuy.html page
  await page.waitForTimeout(10 * 1000);

  await page.waitForSelector(ORDER_ATTEND_BUTTON);
  await page.click(ORDER_ATTEND_BUTTON);

  /**
   * spike: spikeUrl will be generated randomly, 
   * such as /mtop/act/orderspike/ekips or /mtop/act/orderspike/spike
   * 
   * POST https://m.xiaomiyoupin.com/mtop/act/orderspike/spike?_=1613381965283
   * payload: [{},{"actId":"601f5ab4d6018000014e66ef"}]
   */
  // ...

})();
