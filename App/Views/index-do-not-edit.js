(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayImage = function (_createjs$Container) {
  _inherits(OverlayImage, _createjs$Container);

  function OverlayImage() {
    _classCallCheck(this, OverlayImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OverlayImage).call(this));

    _this.bitmap = new createjs.Bitmap('../Assets/Images/bfd.png');
    _this.selected = false;

    _this.render();
    return _this;
  }

  _createClass(OverlayImage, [{
    key: "render",
    value: function render() {
      this.addChild(this.bitmap);
      this.addListeners();
      console.log(this.bitmap);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      this.on("click", function (event) {
        // do stuff...
        //evt.remove(); // removes this listener.
        console.log("overlay clicked");
      });

      this.on("mousedown", function (event) {
        console.log("overlay mouse down", event);
      });

      this.on("pressmove", function (event) {
        event.target.x = event.stageX;
        event.target.y = event.stageY;
      });

      this.on("pressup", function (evt) {
        console.log("up");
      });
    }
  }]);

  return OverlayImage;
}(createjs.Container);
// tack on the methods of Containere to OverlayImage


exports.default = OverlayImage;
exports.default = createjs.promote(OverlayImage, "Container");

},{}],2:[function(require,module,exports){
"use strict";

var _OverlayImage = require("../Views/OverlayImage/OverlayImage");

var _OverlayImage2 = _interopRequireDefault(_OverlayImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  //your code here
  init();
});

var opacity = 1.0;

console.log(_OverlayImage2.default);

function init() {
  console.log("init called");
  var _electron$screen$getP = electron.screen.getPrimaryDisplay().workAreaSize;
  var width = _electron$screen$getP.width;
  var height = _electron$screen$getP.height;
  // inject the canvas with the right height and width
  //let width = 1000;
  //let height = 1000;

  $("body").append("<canvas id='demoCanvas' width='" + width + "' height='" + height + "'></canvas>");

  var stage = new createjs.Stage("demoCanvas");

  createjs.Ticker.addEventListener("tick", stage);

  //image
  var image = new _OverlayImage2.default();

  stage.addChild(image);

  stage.update();
}

function tick(event) {
  // Other stuff
  stage.update(event);
}

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

},{"../Views/OverlayImage/OverlayImage":1}]},{},[2]);
