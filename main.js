mustacheX=0;
mustacheY=0;

function preload() {
  mustache = loadImage('https://i.postimg.cc/Hkbh0s5C/mustache.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() { image(video, 0, 0, 300, 300); image(mustache, mustacheX, mustacheY, 80, 35); }
