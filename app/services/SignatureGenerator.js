import CryptoJS from "crypto-js";

function _customEncodeURIComponent(URI) {
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
  return btoa(hash);
}

class SGenerator {
  generateSignature(params, securityToken = "SZM5K3BNRNDRW4CSY3TQHFHKZN2R52IHLSQUP53O") {
    const sorted = _sortAndConcatPairs(params);
    return _computeHashAndEncode(sorted, securityToken);
  }
}

const SignatureGenerator = new SGenerator;

export { SignatureGenerator };
