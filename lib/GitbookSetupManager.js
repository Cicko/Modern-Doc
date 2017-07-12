const gitbook_setup = require('gitbook-setup')
const ModernDocManager = require('./ModernDocManager.js')

const electron = require('electron')
const remote = electron.remote
const mainProcess = remote.require('./main.js')
document.getElementById('createButton').addEventListener('click', _ => {
  mainProcess.selectDirectory()
})

class GitbookSetupManager {
  static createDoc () {
      $('.dimmer.create.ui').addClass('active')
      var title = $('#title')[0].value;
      var type = actual_type_checked;
      console.log("Actual type checked: " + type);
      var template;
      if (type == "other") {
        template = $('#template_name')[0].value;
      }
      else {
        template = type;
      }

      var info = {
        'name': title,
        'template': template,
        'deploys': deployments
      }
      console.log(info);
      gitbook_setup.create(info, function(err, fixedContent) {
        if (err) console.log(err);
        else {
          ModernDocManager.addDocument(fixedContent);
          $('.dimmer.create.ui').removeClass('active')
          $('.ui.success.create.message.hidden').removeClass('hidden');
          setTimeout(() => {
            $('.ui.success.create.message').transition('fade');
          },5000);


        }
      })

  }


}


module.exports = GitbookSetupManager;
