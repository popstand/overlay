export default class OverlayImage extends createjs.Container {

  constructor() {
    super();
    console.log("OverlayImage constructor");
    this._bitmap = new createjs.Bitmap('../Assets/Images/bfd.png');
    //this._bitmap.x = 0;
    //this._bitmap.y = 0;
    this._selected = false;
    this._border = null;

    this.mouseChildren = false;

    this.render();
  }

  render() {
    console.log("OverlayImage render");
    this.addChild(this.getBitmap());
    this.addListeners();
    //console.log(this.bitmap);
  }

  getSelected() {
    return this._selected;
  }

  setSelected(_trueOrFalse) {
    this._selected = _trueOrFalse;
  }

  getBitmap() {
    return this._bitmap
  }

  setBitmap(_bitmap) {
    this._bitmap = _bitmap
  }

  addListeners() {
    this.on("click", function(event) {
        // do stuff...
        //evt.remove(); // removes this listener.
        console.log("overlay clicked");
        if(this.getSelected()) {
          this.undoSelection()
        } else {
          this.doSelection();
        }
    });

    this.on("mousedown", function(event) {
      console.log("overlay mouse down", event);
    })

    this.on("pressmove", function(event) {
      event.target.x = event.stageX;
      event.target.y = event.stageY;
    });

    this.on("pressup", function(evt) { console.log("up"); })
  }

  doSelection() {
    console.log("doSelection()");
    this.setSelected(true);

    // draw a border around this shit show it was selected
    this.addBorder();
  }

  undoSelection() {
    console.log("undoSelection()");
    this.setSelected(false);

    this.removeBorder();
  }
  // changeOpacity(level) {
  //   this._bitmap.alpha = level;
  // }

  addBorder() {
    console.log("drawBorder");
    let rect = new createjs.Shape();
    rect.graphics.beginStroke("red");
    rect.graphics.setStrokeStyle(5);
    let bm = this.getBitmap();
    console.log(bm.getBounds());
    let bounds = bm.getBounds();
    rect.graphics.drawRect(0, 0, bounds.width, bounds.height);
    //rect.x = 0;
    //rect.y = 0;
    this.setBorder(rect);

    this.addChild(this.getBorder())
  }

  removeBorder() {
    console.log("removeBorder");
    this.removeChild(this.getBorder())
  }

  setBorder(_border) {
    this._border = _border;
  }

  getBorder() {
    return this._border
  }

}
// tack on the methods of Containere to OverlayImage
export default createjs.promote(OverlayImage, "Container")
