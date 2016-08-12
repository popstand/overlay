const electron = require('electron');
const remote = electron.remote;
const {dialog} = remote;
//const {console} = remote

const main = remote.require('./main.js')

let button = document.createElement('button');
button.textContent = "Open Image";
document.body.appendChild(button);

// document.addEventListener("") = function(event) {
//   console.log("onkeypress");
//   console.log(event);
// }

button.addEventListener('click', () => {
  //main.openImage()
  console.log(dialog)

  let filters = {
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif']}
    ]
  };

  dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif']}
    ]
  }, function(something) {
    console.log("dialog callback called");
    console.log(something);
  })

}, false)
