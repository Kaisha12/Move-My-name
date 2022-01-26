difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results) {
  if (results.lenght > 0) {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.leftWristX;
    rightWrist = results[0].pose.rightWrist.x;
    diffrence = floor(leftWristX - rightWristX);

    console.log("leftWrist = " + leftWristX + "rightWristX = " + rightWristX + " diffrence = " + diffrence);
  }
}



function draw() {
  background('#969A97');

  document.getElementById("text_side").innerHTML = "Width And Height of a Square will be = " + difference + "px";
  fill('#F90093');
  text('Kaisha', 50, 400);
}