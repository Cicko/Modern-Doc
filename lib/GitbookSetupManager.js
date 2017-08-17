const gitbook_setup = require('gitbook-setup')
const ModernDocManager = require('./ModernDocManager.js')

const electron = require('electron')
const remote = electron.remote
var fs = require('fs.extra');
var shell = require('shelljs');
var exec = require('child_process').exec;
var path = require('path')
const mainProcess = remote.require('./main.js')

/*document.getElementById('createButton').addEventListener('click', _ => {

})
*/


export const createDoc = (config, callback) => {
    $('.dimmer.create.ui').addClass('active')
    var title = config.title;
    var author = config.author.split(",");
    var type = config.type;
    var template;
    if (type == "Other") {
      template = config.template;
    }
    else {
      template = type;
    }

    var info = {
      'name': title,
      'authors': author,
      'template': template,
      'deploys': config.currentDeploys
    }

    if (config.isPrivate) {
      info['private'] = 'yes';
      info['organization'] = config.organization;
    }
    else {
      info['private'] = 'no';
    }

    console.log(info);
    mainProcess.selectDirectory(function (dir_path) {
      callback(dir_path);
      gitbook_setup.create(info, function(err, fixedContent) {
        if (err) console.log(err);
        else {
          var wantedPath = path.join(dir_path, fixedContent.name)
          fixedContent['path'] = wantedPath;
          $('.dimmer.create.ui').removeClass('active')
          ModernDocManager.addDocument(fixedContent);
          setTimeout(() => {
            exec ('cd ..', (err, out) => {
              fs.mkdirp(wantedPath, function (err) {
                if (err) {
                  console.error(err);
                } else {
                  console.log('moved to ' + wantedPath)
                }
              });
              fs.rename(path.join(process.cwd(),info.name), wantedPath, () => {
                console.log("movido");
              });
            });
          },100);
        }
      })
    });
}


export const install = (path) => {
    $('.dimmer.install.ui').addClass('active')
    gitbook_setup.install(path, (err, message) => {
      if (message) $('.ui.indeterminate.text.loader').html(message);
      else if (err)  {
        console.log(err);
        $('.dimmer.install.ui').removeClass('active')
      }
      else if (!message && !err){
        $('.dimmer.install.ui').removeClass('active')
      }
    })
  }
