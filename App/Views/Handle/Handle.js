export default class Handle extends createjs.Container {

  constructor() {
    super();
    console.log("Handle constructor");
    this._handle = this.createHandle();

    this.render();
  }

  render() {
    console.log("OverlayImage render");
    this.addChild(this.getHandle());
    this.addListeners();
    //console.log(this.bitmap);
  }

  addListeners() {

  }

  createHandle() {
    let handle = new createjs.Shape();
    handle.graphics.beginFill(selectedColor);
    handle.graphics.drawCircle(0, 0, 10);
    //handle.x = this.getBitmap().getBounds().width

    return handle;
  }

  // getters setters

  setHandle(_handle) {
    this._handle = _handle;
  }

  getHandle() {
    return this._handle;
  }

}
// tack on the methods of Containere to OverlayImage
export default createjs.promote(Handle, "Container")
