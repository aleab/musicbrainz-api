export class CookieJar {
  static deserialize: (_a: any, _b: any, cb: any) => void;
  static deserializeSync: () => CookieJar;
  static fromJSON: () => CookieJar;

  setCookie(_a: any, _b: any, _c: any, cb: any) { (typeof _c === 'function' ? _c : cb)(new Error('noop')); }
  setCookieSync() {/**/}
  getCookies(_a: any, _b: any, cb: any) { (typeof _b === 'function' ? _b : cb)(new Error('noop')); }
  getCookiesSync() { return []; }
  getCookieString(_a: any, _b: any, cb: any) { (typeof _b === 'function' ? _b : cb)(new Error('noop')); }
  getCookieStringSync() { return ''; }
  getCookieStrings(_a: any, _b: any, cb: any) { (typeof _b === 'function' ? _b : cb)(new Error('noop')); }
  getCookieStringsSync() { return ''; }
  serialize(cb: any) { cb(new Error('noop')); }
  serializeSync() { return this.toJSON(); }
  toJSON() { return { version: '', storeType: '', rejectPublicSuffixes: true, cookies: [] }; }
  clone(_a: any, cb: any) { (typeof _a === 'function' ? _a : cb)(new Error('noop')); }
  cloneSync() { return this; }
}

const fake = new CookieJar();

CookieJar.deserialize = function deserialize(_a, _b, cb) { (typeof _b === 'function' ? _b : cb)(new Error('noop')); };
CookieJar.deserializeSync = function deserializeSync() { return fake; };
CookieJar.fromJSON = function fromJSON() { return fake; };
