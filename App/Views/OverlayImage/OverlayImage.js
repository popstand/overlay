let selectedColor = '#FF0000';

export default class OverlayImage extends createjs.Container {

  constructor() {
    super();
    console.log("OverlayImage constructor");
    this._bitmap = new createjs.Bitmap('../Assets/Images/bfd.png');
    //this._bitmap.x = 0;
    //this._bitmap.y = 0;
    this._selected = false;
    this._border = this.createBorder();
    //this._handle = this.createHandle();

    // this is needed because the above bitmap is still null at this point
    // so it's better to wait a bit then set widths based on the image
    setTimeout(this.refreshElements.bind(this), 1000)

    //this.mouseChildren = false;

    this.render();
  }

  render() {
    console.log("OverlayImage render");
    this.addChild(this.getBitmap());
    this.addListeners();
    //console.log(this.bitmap);
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

    let handle = this.getHandle()

  }

  doSelection() {
    console.log("doSelection()");
    this.setSelected(true);

    // draw a border around this shit show it was selected
    this.addChild(this.getBorder());
    this.addChild(this.getHandle());
  }

  undoSelection() {
    console.log("undoSelection()");
    this.setSelected(false);

    this.removeChild(this.getBorder());
    this.removeChild(this.getHandle());
  }

  setAlpha(_alpha) {
    console.log("setAlpha", _alpha);
    this.getBitmap().alpha = _alpha;
  }
  // changeOpacity(level) {
  //   this._bitmap.alpha = level;
  // }

  createBorder() {
    let rect = new createjs.Shape();
    rect.graphics.beginStroke(selectedColor);
    rect.graphics.setStrokeStyle(5);
    let bm = this.getBitmap();
    console.log(bm);
    let bounds = bm.getBounds();
    console.log(bounds);
    rect.graphics.drawRect(0, 0, 100, 100);

    return rect;
  }


  createHandle() {
    let handle = new createjs.Shape();
    handle.graphics.beginFill(selectedColor);
    handle.graphics.drawCircle(0, 0, 10);
    //handle.x = this.getBitmap().getBounds().width

    return handle;
  }

  refreshElements() {
    // make sure the border is the right size
    let border = this.getBorder();
    let bounds = this.getBitmap().getBounds();
    border.graphics.clear();
    border.graphics.beginStroke(selectedColor);
    border.graphics.setStrokeStyle(5)
    border.graphics.drawRect(0,0,bounds.width,bounds.height);
    border.height = bounds.height

    // handle
    let handle = this.getHandle()
    handle.x = bounds.width
  }

  // getters setters

  setHandle(_handle) {
    this._handle = _handle;
  }

  getHandle() {
    return this._handle;
  }

  setBorder(_border) {
    this._border = _border;
  }

  getBorder() {
    return this._border;
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

}
// tack on the methods of Containere to OverlayImage
export default createjs.promote(OverlayImage, "Container")
