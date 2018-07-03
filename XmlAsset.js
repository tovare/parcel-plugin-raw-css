const { Asset } = require('parcel-bundler');

class XmlAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'xml';
  }

  parse(source) {
    this.xml = source;
  }

  generate() {
    return {
      js: `module.exports = ${JSON.stringify(this.xml)}`,
    };
  }
}

module.exports = XmlAsset;
