var noseX = "";
var noseY = "";
function preload() {
    img = loadImage('https://i.postimg.cc/8P3t8nNC/lipstick.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(495, 200);
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotTheValue);
}
function modelLoaded(){
    console.log('Successfully Loaded PoseNet')
}
function gotTheValue(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y + 40;
    }
}
function draw() {
    image(video, 0, 0, 400, 400);
    image(img, noseX, noseY, 100, 75);


}
function takeSelfie(){
  save('you_with_your_lipstick.png');
}
function lipstick(){
    window.location = 'index.html';
}