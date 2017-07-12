const gitbook_setup = require('gitbook-setup')

class GitbookSetupManager {
  static createDoc () {
      $('.dimmer.create.ui').addClass('active')
      var title = $('#title')[0].value;
      var type = actual_type_checked;
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
      gitbook_setup.create(info, function(err) {
        if (err) console.log(err);
        else {
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
