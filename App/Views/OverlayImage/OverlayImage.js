const bitmap = new createjs.Bitmap('../../Assets/images/bfd.png');


class OverlayImage extends createjs.Container {

  constructor() {
    this.super();

    this.render();
  }

  render() {

    this.addChild(bitmap);
    this.addListeners();
    console.log(bitmap);
  }

  addListeners() {
    this.on("click", function(event) {
        // do stuff...
        //evt.remove(); // removes this listener.
        console.log("bitmap clicked");
    });

    this.on("mousedown", function(event) {
      console.log("bitmap mouse down", event);
    })

    this.on("pressmove", function(event) {
      event.target.x = event.stageX;
      event.target.y = event.stageY;
    });

    this.on("pressup", function(evt) { console.log("up"); })
  }

}

export default createjs.promote(OverlayImage, "Container")
