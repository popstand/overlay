const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

  let windowOptions = {
    width: width,
    height: height,
    //fullscreen: true,
    //fullscreenable: true,
    frame: false,
    transparent: true,
    title: 'Layover'
  };
  let win = new BrowserWindow(windowOptions);

  win.setAlwaysOnTop(false)
  //win.maximize();

  win.loadURL(`file://${__dirname}/App/Views/index.html`)
})


// exports.openImage = () => {
//
// }
