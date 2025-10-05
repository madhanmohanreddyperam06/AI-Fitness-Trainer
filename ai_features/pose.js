import * as poseDetection from 'https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

let detector, webcam, canvas, ctx;

async function initPoseDetection() {
  webcam = document.getElementById('webcam');
  canvas = document.getElementById('pose-canvas');
  ctx = canvas.getContext('2d');

  const model = poseDetection.SupportedModels.MoveNet;
  detector = await poseDetection.createDetector(model, { modelType: 'Lightning' });

  startDetection();
}

async function startDetection() {
  if (!detector) return;
  const poses = await detector.estimatePoses(webcam);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (poses.length > 0) drawPose(poses[0]);
  requestAnimationFrame(startDetection);
}

function drawPose(pose) {
  for (let kp of pose.keypoints) {
    if (kp.score > 0.4) {
      ctx.beginPath();
      ctx.arc(kp.x, kp.y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = 'lime';
      ctx.fill();
    }
  }
}

window.onload = async () => {
  await tf.setBackend('webgl');
  await tf.ready();
  initPoseDetection();
};
