
export default class OverlayImage extends createjs.Container {

  constructor() {
    super();

    this.bitmap = new createjs.Bitmap('../Assets/Images/bfd.png');
    this.selected = false;

    this.render();
  }

  render() {
    this.addChild(this.bitmap);
    this.addListeners();
    console.log(this.bitmap);
  }

  addListeners() {
    this.on("click", function(event) {
        // do stuff...
        //evt.remove(); // removes this listener.
        console.log("overlay clicked");
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

}
// tack on the methods of Containere to OverlayImage
export default createjs.promote(OverlayImage, "Container")
