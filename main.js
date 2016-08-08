const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
  console.log("ready bitch");
  let windowOptions = {
    //width: 600,
    //height: 400,
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
