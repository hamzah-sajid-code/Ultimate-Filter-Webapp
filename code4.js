var noseX = "";
var noseY = "";
function preload() {
    img = loadImage('https://i.postimg.cc/G3sj02WG/sunglasses.png');
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.hide();
    video.size(600, 600);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotTheValue);
}
function modelLoaded(){
    console.log('Successfully Loaded PoseNet')
}
function gotTheValue(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.rightEye.x - 60;
        noseY = results[0].pose.rightEye.y - 60;
    }
}
function draw() {
    image(video, 0, 0, 600, 600);
    image(img, noseX, noseY, 300, 175);


}
function takeSelfie(){
  save('you_with_your_sun_glasses.png');
}
