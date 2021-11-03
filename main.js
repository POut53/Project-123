var noseX=0;
var simp="";
var noseY=0;
var diffrence=0;
var leftWristX=0;
var rigthWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500)
    canvas=createCanvas(500,500);
    canvas.position(500,150);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getPose)
}
function press(){
    simp=document.getElementById("text").value;
}
function draw(){
    background('yellow');
    text(simp,26,100);
    textSize(diffrence);
}
function modelloaded(){
    console.log("PoseNet is Initiaizied");
}
function getPose(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        diffrence=leftWrist - rightWrist;
        console.log(noseX,noseY);
    }
}

