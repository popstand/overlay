(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var selectedColor = '#FF0000';

var OverlayImage = function (_createjs$Container) {
  _inherits(OverlayImage, _createjs$Container);

  function OverlayImage() {
    _classCallCheck(this, OverlayImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OverlayImage).call(this));

    console.log("OverlayImage constructor");
    _this._bitmap = new createjs.Bitmap('../Assets/Images/bfd.png');
    //this._bitmap.x = 0;
    //this._bitmap.y = 0;
    _this._selected = false;
    _this._border = _this.createBorder();
    //this._handle = this.createHandle();

    // this is needed because the above bitmap is still null at this point
    // so it's better to wait a bit then set widths based on the image
    setTimeout(_this.refreshElements.bind(_this), 1000);

    //this.mouseChildren = false;

    _this.render();
    return _this;
  }

  _createClass(OverlayImage, [{
    key: 'render',
    value: function render() {
      console.log("OverlayImage render");
      this.addChild(this.getBitmap());
      this.addListeners();
      //console.log(this.bitmap);
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.on("click", function (event) {
        // do stuff...
        //evt.remove(); // removes this listener.
        console.log("overlay clicked");
        if (this.getSelected()) {
          this.undoSelection();
        } else {
          this.doSelection();
        }
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

      var handle = this.getHandle();
    }
  }, {
    key: 'doSelection',
    value: function doSelection() {
      console.log("doSelection()");
      this.setSelected(true);

      // draw a border around this shit show it was selected
      this.addChild(this.getBorder());
      this.addChild(this.getHandle());
    }
  }, {
    key: 'undoSelection',
    value: function undoSelection() {
      console.log("undoSelection()");
      this.setSelected(false);

      this.removeChild(this.getBorder());
      this.removeChild(this.getHandle());
    }
  }, {
    key: 'setAlpha',
    value: function setAlpha(_alpha) {
      console.log("setAlpha", _alpha);
      this.getBitmap().alpha = _alpha;
    }
    // changeOpacity(level) {
    //   this._bitmap.alpha = level;
    // }

  }, {
    key: 'createBorder',
    value: function createBorder() {
      var rect = new createjs.Shape();
      rect.graphics.beginStroke(selectedColor);
      rect.graphics.setStrokeStyle(5);
      var bm = this.getBitmap();
      console.log(bm);
      var bounds = bm.getBounds();
      console.log(bounds);
      rect.graphics.drawRect(0, 0, 100, 100);

      return rect;
    }
  }, {
    key: 'createHandle',
    value: function createHandle() {
      var handle = new createjs.Shape();
      handle.graphics.beginFill(selectedColor);
      handle.graphics.drawCircle(0, 0, 10);
      //handle.x = this.getBitmap().getBounds().width

      return handle;
    }
  }, {
    key: 'refreshElements',
    value: function refreshElements() {
      // make sure the border is the right size
      var border = this.getBorder();
      var bounds = this.getBitmap().getBounds();
      border.graphics.clear();
      border.graphics.beginStroke(selectedColor);
      border.graphics.setStrokeStyle(5);
      border.graphics.drawRect(0, 0, bounds.width, bounds.height);
      border.height = bounds.height;

      // handle
      var handle = this.getHandle();
      handle.x = bounds.width;
    }

    // getters setters

  }, {
    key: 'setHandle',
    value: function setHandle(_handle) {
      this._handle = _handle;
    }
  }, {
    key: 'getHandle',
    value: function getHandle() {
      return this._handle;
    }
  }, {
    key: 'setBorder',
    value: function setBorder(_border) {
      this._border = _border;
    }
  }, {
    key: 'getBorder',
    value: function getBorder() {
      return this._border;
    }
  }, {
    key: 'getSelected',
    value: function getSelected() {
      return this._selected;
    }
  }, {
    key: 'setSelected',
    value: function setSelected(_trueOrFalse) {
      this._selected = _trueOrFalse;
    }
  }, {
    key: 'getBitmap',
    value: function getBitmap() {
      return this._bitmap;
    }
  }, {
    key: 'setBitmap',
    value: function setBitmap(_bitmap) {
      this._bitmap = _bitmap;
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

var overlay = void 0;

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
  var overlay = new _OverlayImage2.default();

  stage.addChild(overlay);

  stage.update();

  console.log("after update");

  document.body.addEventListener('keydown', function (e) {
    console.log('keydown:' + e.keyCode);
    //let el = document.getElementById("mainImage");

    // leave if el is null
    //if (el == null) return;

    //let rect = el.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    //console.log(el.style.top);
    //let t = document.getElementById("mainImage").style.top;
    //let l = document.getElementById("mainImage").style.left;
    //= screenY + "px";
    //el.style.top = rect.top + 5 + "px";
    //l = l + 5; //= screenX + "px";

    var left = 37;
    var up = 38;
    var right = 39;
    var down = 40;
    var minus = 189;
    var plus = 187;

    console.log("opacity", opacity);
    //let opacity = 1.0;
    switch (e.keyCode) {
      case left:
        overlay.x = overlay.x - 5;
        break;
      case up:
        overlay.y = overlay.y - 5;
        break;
      case down:
        overlay.y = overlay.y + 5;
        break;
      case right:
        overlay.x = overlay.x + 5;
        break;
      case plus:
        if (opacity < 1) {
          opacity = opacity + 0.1;
          overlay.setAlpha(opacity);
        }
        break;
      case minus:
        if (opacity > 0) {
          opacity = opacity - 0.1;
          overlay.setAlpha(opacity);
        }
        break;

      default:
        console.log("keycode not handled");
        break;
    }
  });
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

},{"../Views/OverlayImage/OverlayImage":1}]},{},[2]);
