$(document).ready(function () {
  //your code here
  init();
});

let opacity = 1.0;

import OverlayImage from '../Views/OverlayImage/OverlayImage';

console.log(OverlayImage);

function init() {
  console.log("init called");
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  // inject the canvas with the right height and width
  //let width = 1000;
  //let height = 1000;
  $("body").append(`<canvas id='demoCanvas' width='${width}' height='${height}'></canvas>`)

  let stage = new createjs.Stage("demoCanvas");

  createjs.Ticker.addEventListener("tick", stage);


  //image
  let image = new OverlayImage();

  stage.addChild(image);

  stage.update();

  console.log("after update");
  // document.body.addEventListener('keydown', function(e) {
  //   console.log('keydown:' + e.keyCode)
  //   let el = document.getElementById("mainImage");
  //
  //   // leave if el is null
  //   if (el == null) return;
  //
  //   let rect = el.getBoundingClientRect();
  //   console.log(rect.top, rect.right, rect.bottom, rect.left);
  //   console.log(el.style.top);
  //   //let t = document.getElementById("mainImage").style.top;
  //   //let l = document.getElementById("mainImage").style.left;
  //    //= screenY + "px";
  //    //el.style.top = rect.top + 5 + "px";
  //    //l = l + 5; //= screenX + "px";
  //
  //   let left = 37;
  //   let up = 38;
  //   let right = 39;
  //   let down = 40;
  //   let minus = 189;
  //   let plus = 187;
  //
  //   console.log("opacity", opacity);
  //   //let opacity = 1.0;
  //    switch (e.keyCode) {
  //      case left:
  //        el.style.left = "" + (rect.left - 5) + "px";
  //        break;
  //      case up:
  //        el.style.top = "" + (rect.top - 5) + "px";
  //        break;
  //      case down:
  //        el.style.top = "" + (rect.top + 5) + "px";
  //        break;
  //      case right:
  //        el.style.left = "" + (rect.left + 5) + "px";
  //        break
  //     case plus:
  //       if (opacity < 1) {
  //           opacity = opacity + 0.1;
  //           el.style.opacity = "" + opacity;
  //       }
  //       break;
  //     case minus:
  //       if(opacity > 0) {
  //         opacity = opacity - 0.1;
  //         el.style.opacity = "" + opacity;
  //       }
  //       break;
  //
  //      default:
  //        console.log("keycode not handled");
  //        break;
  //    }
  // });
}


function tick(event) {
    // Other stuff
    stage.update(event);
}



//const {console} = remote

//const main = remote.require('../../main.js')

// let button = document.createElement('button');
// button.textContent = "Open Image";
// //document.body.appendChild(button);
//
// // document.addEventListener("") = function(event) {
// //   console.log("onkeypress");
// //   console.log(event);
// // }
//
// button.addEventListener('click', () => {
//   //main.openImage()
//   console.log(dialog)
//
//   let filters = {
//     filters: [
//       {name: 'Images', extensions: ['jpg', 'png', 'gif']}
//     ]
//   };
//
//   dialog.showOpenDialog({
//     properties: ['openFile'],
//     filters: [
//       {name: 'Images', extensions: ['jpg', 'png', 'gif']}
//     ]
//   }, function(something) {
//     console.log("dialog callback called");
//     console.log(something);
//   })
//
// }, false)
