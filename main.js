mustacheX = 0;
mustacheY = 0;
function preload(){
image_capture = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function draw(){
image(video, 0, 0, 300, 300);
image(image_capture, mustacheX, mustacheY, 50, 30)
}

function take_snapshot(){
    save("mustache.png");
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotResult(result){
    if(result.length > 0){
        console.log(result);
        mustacheX = result[0].pose.nose.x-185;
        mustacheY = result[0].pose.nose.y-110;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
    else{
        console.log("error");
    }
}