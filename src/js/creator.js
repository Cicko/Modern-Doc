const gitbook_setup = require('gitbook-setup');
const GitbookSetupManager = require('../../lib/GitbookSetupManager.js')
var fs = require('fs-extra');

var other_type_checked = false;
var actual_type_checked = "book";
var server_deployment = false;
var deployments;
var servers;
var is_private;


function typeChanged (element_id) {
  actual_type_checked = element_id;
  if (element_id == "other") {
    $('.templateName').removeClass('disabled')
    other_type_checked = true;
  }
  else if (other_type_checked){
    other_type_checked = false;
    $('.templateName').addClass('disabled')
  }
}

function private (checked) {
  is_private = checked;
  if (checked)
    $('.organization').removeClass('disabled')
  else
    $('.organization').addClass('disabled')
}

$('.tabular.menu .item').tab();
$('.templateName').addClass('disabled')
$('.ui.radio.checkbox').checkbox();
$('select.dropdown').dropdown();

$('.help.icon.link')
  .popup()
;

$('.ui.fluid.search.dropdown.deploys').dropdown({
  onChange: (value, text, $selectedItem) => {
    deployments = value;
  },
  onRemove: (removedValue, removedText, $removedChoice) => {
    var index = deployments.indexOf(removedValue);
    if (index > -1)
      deployments.splice(index, 1);
  },
  allowAdditions: true
});

function createBook() {
  GitbookSetupManager.createDoc();
}

$('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
});
