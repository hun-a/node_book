const url = require('url');

// string to url object
const curURL = url.parse('https://m.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

// url object to string
const curStr = url.format(curURL);

console.log('string of address: %s', curStr);
console.dir(curURL);

const querystring = require('querystring');
const param = querystring.parse(curURL.query);

console.log(param);
console.log('the value of query in request param: %s', param.query);
console.log('the original requested param: %s', querystring.stringify(param));