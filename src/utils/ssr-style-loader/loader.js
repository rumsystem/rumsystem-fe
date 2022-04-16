const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const code = fs.readFileSync(path.join(__dirname, './loader-template.js')).toString();

const loader = () => {};

const digest = (s) => {
  const sha1 = crypto.createHash('sha1');
  sha1.update(s);
  return sha1.digest('hex');
};

loader.pitch = function ssrStyleLoader(request) {
  const options = this.getOptions();
  const modulePath = JSON.stringify(`!!${request}`);
  const moduleHash = JSON.stringify(digest(modulePath));
  const tCode = code
    .replaceAll("'@@module-path@@'", modulePath)
    .replaceAll("'@@module-hash@@'", moduleHash)
    .replaceAll("'@@loader-options@@'", JSON.stringify(options ?? {}));
  return tCode;
};

module.exports = loader;
