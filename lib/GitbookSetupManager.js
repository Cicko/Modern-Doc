const gitbook_setup = require('gitbook-setup')
const ModernDocManager = require('./ModernDocManager.js')
var FileSaver = require('file-saver');

var file = new File("world.txt", {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(file);


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
          console.log("No entra aquí o que")
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
