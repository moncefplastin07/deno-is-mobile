// this Pattern source : https://gist.github.com/dalethedeveloper/1503252#the-98-solution
const mobileUserAgentRegExPattern =
  /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

/**
 * @description the visitor device is mobile or no from the User-Agent header
 * @param userAgentHeader string { string of User-Agent header } | null 
 * @returns {boolean}
 */
export const isMobile = (userAgentHeader: string | null): boolean => {
  return userAgentHeader
    ? mobileUserAgentRegExPattern.test(`${userAgentHeader}`)
    : false;
};
