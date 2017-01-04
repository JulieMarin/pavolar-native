import CryptoJS from "crypto-js";
import base64 from 'base-64';

export function _customEncodeURIComponent(URI) {
  return encodeURIComponent(URI).replace(/'/g, "%27");
}

function _sortAndConcatPairs(params) {
  const sortedPairs = [];

  Object.keys(params).sort().forEach((key) => {
    sortedPairs.push(key + '=' + _customEncodeURIComponent(params[key]));
  })
  return sortedPairs.join('&');
}

function _computeHashAndEncode(encodedURI, securityToken) {
  const hash = CryptoJS.HmacSHA1( encodedURI, securityToken );
  return base64.encode(hash);
}

function generateSignature(params, securityToken = "SZM5K3BNRNDRW4CSY3TQHFHKZN2R52IHLSQUP53O") {
  const sorted = _sortAndConcatPairs(params);
  return _computeHashAndEncode(sorted, securityToken);
}

export { generateSignature };
