import { isMobile } from "https://raw.githubusercontent.com/moncefplastin07/deno-is-mobile/master/mod.ts";
// from iPhone (mobile), source: https://deviceatlas.com/blog/mobile-browser-user-agent-strings
const safariIOsUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1"; 

// from android (mobile), source: https://deviceatlas.com/blog/mobile-browser-user-agent-strings
const chromeAndroidUserAgent = "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36";

// from windows (pc), source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent#Firefox_UA_string
const firefoxWindwosUserAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0";

console.log(isMobile(safariIOsUserAgent)    )    //=> true
console.log(isMobile(chromeAndroidUserAgent) )   //=> true

console.log(isMobile(firefoxWindwosUserAgent) )  //=> false
console.log(isMobile(null)      )                //=> false
console.log(isMobile('')     )