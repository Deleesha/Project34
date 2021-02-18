const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;

function setup(){

    canvas = createCanvas(windowWidth/2,windowHeight/1.5)
    engine = Engine.create();
    world = engine.world;

    /*let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();

    let options = {
        mouse : canvasmouse
    };

    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);*/


    pendulum1 = new Pendulum(200,200,"white");
    sling1 = new Sling(pendulum1.body,{ x: 200 , y : 200});

    pendulum2 = new Pendulum(300,200,"white");
    sling2 = new Sling(pendulum2.body,{ x: 300 , y : 200});

    pendulum3 = new Pendulum(400,200,"white");
    sling3 = new Sling(pendulum3.body,{ x: 400 , y : 200});

    pendulum4 = new Pendulum(500,200,"white");
    sling4 = new Sling(pendulum4.body,{ x: 500 , y : 200});

    pendulum5 = new Pendulum(600,200,"white");
    sling5 = new Sling(pendulum5.body,{ x: 600 , y : 200});
}

function preload(){}


function draw(){
    
    background("lightBlue");

    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

/*function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, { x : mouseX , y : mouseY});
}*/