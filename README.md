# is mobile
Check if the request is from mobile browser or no, based on user agent
### import the module in your deno app
```js
import { isMobile } from 'https://deno.land/x/is_mobile@v1.0.0/mod.ts'
```
or from ``nest.land`` packages
```js
import { isMobile } from 'https://x.nest.land/is_mobile@v1.0.0/mod.ts'
```
#### Usage:
Pass the string of user agent from request headers as argument 
```js
// from iPhone (mobile), source: https://deviceatlas.com/blog/mobile-browser-user-agent-strings
const safariIOsUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1"; 

// from android (mobile), source: https://deviceatlas.com/blog/mobile-browser-user-agent-strings
const chromeAndroidUserAgent = "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36";

// from windows (pc), source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent#Firefox_UA_string
const firefoxWindwosUserAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0";

isMobile(safariIOsUserAgent)        //=> true
isMobile(chromeAndroidUserAgent)    //=> true

isMobile(firefoxUserAgent)          //=> false
isMobile(null)                      //=> false
isMobile('')                        //=> false
```
## Contribute with us from [``Here``](https://github.com/moncefplastin07/deno-is-mobile)