const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  console.log("ready bitch");
  let windowOptions = {
    width: width,
    height: height,
    //fullscreen: true,
    //fullscreenable: true,
    frame: false,
    transparent: true,
    title: 'Layover'
  }
  let win = new BrowserWindow(windowOptions);
  win.maximize();

  win.loadURL(`file://${__dirname}/index.html`)
})


// exports.openImage = () => {
//
// }
