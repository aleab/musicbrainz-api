import * as crypto from 'crypto';

module.exports = function md5(str: string) {
  return crypto.createHash('md5').update(str).digest('hex'); // lgtm [js/insufficient-password-hash]
};
