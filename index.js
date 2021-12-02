const app = new PIXI.Application();
document.querySelector("#scene").appendChild(app.view);

// Inner radius of the circle
var radius;

// The blur amount
const blurSize = 28;

function anim(radius) {
    app.loader.add('grass', './img/full_hero.a083b77.png');
    app.loader.load(setup);

    function setup(loader, resources) {
        const background = new PIXI.Sprite(resources.grass.texture);
        app.stage.addChild(background);
        background.width = app.screen.width;
        background.height = app.screen.height;

        var circle = new PIXI.Graphics()
            .beginFill(0xFF0000)
            .drawCircle(radius + blurSize, radius + blurSize, radius)
            .endFill();
        circle.filters = [new PIXI.filters.BlurFilter(blurSize)];
        var bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
        var texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
        var focus = new PIXI.Sprite(texture);
        app.stage.addChild(focus);

        background.mask = focus;

        app.stage.interactive = true;
        app.stage.on('mousemove', pointerMove);


        function pointerMove(event) {

            document.querySelector('#circle').addEventListener('mouseenter', e => {
                document.querySelector('canvas').width = '100%';
            })
            document.querySelector('#circle').addEventListener('mouseleave', e => {
                document.querySelector('canvas').width = '800';


            })


            focus.position.x = event.data.global.x - focus.width / 2;
            focus.position.y = event.data.global.y - focus.height / 2;
        }
    }
}
anim(150)



$(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});
