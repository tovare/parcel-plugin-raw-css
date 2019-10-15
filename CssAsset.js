const { Asset } = require('parcel-bundler');

class CssAsset extends Asset {

  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  generate() {
    return {
      js: `module.exports = ${JSON.stringify(this.contents)}`,
    };
  }

}

module.exports = CssAsset;
