var noseX = "";
var noseY = "";
var eyeX = "";
var eyeY = "";
function preload() {
    img = loadImage('https://i.postimg.cc/G3sj02WG/sunglasses.png');
    img1 = loadImage('https://i.postimg.cc/3J0FZxhS/mustache.png');

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
        eyeX = results[0].pose.rightEye.x - 60;
        eyeY = results[0].pose.rightEye.y - 60;
        noseX = results[0].pose.nose.x - 55;
        noseY = results[0].pose.nose.y + 15;
    }
}
function draw() {
    image(video, 0, 0, 600, 600);
    image(img, eyeX, eyeY, 300, 175);
    image(img1, noseX, noseY, 100, 75);

}
function takeSelfie(){
  save('you_with_your_sun_glasses_and_mustache.png');
}
