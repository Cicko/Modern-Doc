const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// mainWindow is your instance of BrowserWindow
const electron = require('electron')
const dialog = electron.dialog


exports.selectDirectory = function (callback) {
  dialog.showOpenDialog(win, {
    properties: ['openDirectory']
  }, function(val) {
    if (!val) callback(null);
    else callback(val[0]);
  });
}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 900, icon:'src/img/logo.png'})

  // and load the index.html of the app.

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Disable menu bar
  win.setMenu(null);


  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
