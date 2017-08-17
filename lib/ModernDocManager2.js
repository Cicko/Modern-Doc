const fs = require('fs-extra');
const path = require('path');
const Tacks = require('tacks')
var Dir = Tacks.Dir
var File = Tacks.File



export const readDocs = () => {
  return ["hola","amigo","adios"]
}

class ModernDocManager {
  static addDocument (content) {
    if (!fs.existsSync(path.join(process.env.HOME, '.modern-doc','docs.json'))) {
      var docs = new Tacks(Dir({
        'docs.json': File(JSON.stringify(new Array(content),null, '\t'))
      }));
      docs.create(path.join(process.env.HOME, '.modern-doc'));
    }
    else {
      var docsPath = path.join(process.env.HOME, '.modern-doc','docs.json')
      var docsContent = require(docsPath);
      docsContent.push(content);
      fs.unlinkSync(docsPath);
      var docs = new Tacks(Dir({
        'docs.json': File(JSON.stringify(docsContent,null, '\t'))
      }));
      docs.create(path.join(process.env.HOME, '.modern-doc'));
    }
  }
}


//module.exports = ModernDocManager;
