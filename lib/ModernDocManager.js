const fs = require('fs-extra');
const path = require('path');
var rimraf = require('rimraf');
const Tacks = require('tacks')
var Dir = Tacks.Dir
var File = Tacks.File



export const readDocs = () => {
  var docsPath = path.join(process.env.HOME, '.modern-doc','docs.json')
  var docsContent = require(docsPath).docs;
  return docsContent;
}


export const addDocument = (content) => {
    console.log("Added to doc.json")
    var docsJsonPath = path.join(process.env.HOME, '.modern-doc','docs.json');
    if (!fs.existsSync(docsJsonPath)) {
      fs.writeJsonSync(docsJsonPath, {docs: content})
    }
    else {
      var docsContent = require(docsJsonPath).docs;
      docsContent.push(content);
      console.log("CONTENT OF NEW DOCS.jSON")
      console.log(docsContent);
      fs.unlinkSync(docsJsonPath);
      fs.writeJsonSync(docsJsonPath, {docs: docsContent})
    }
}


export const removeDoc = (docPath) => {
  readDocs().map(doc => {
    if (doc.path == docPath) {
      rimraf(doc.path, function () { console.log('Deleted ' + doc.name); });
      var docsJsonPath = path.join(process.env.HOME, '.modern-doc','docs.json');
      var newDocs = require(docsJsonPath).docs.filter(function(el) {
          return el.name !== doc.name;
      });
      fs.unlinkSync(docsJsonPath)
      fs.writeJsonSync(docsJsonPath, {docs: newDocs})
    }
  });
}
