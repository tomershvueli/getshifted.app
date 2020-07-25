const worlds = ["🌍", "🌏", "🌎"];
let worldIndex = 0;
const spinTheGlobeTimer = setInterval(spinTheGlobe, 1000);

spinTheGlobe();

function spinTheGlobe() {
  worldIndex = (worldIndex === worlds.length - 1) ? 0 : worldIndex + 1;
  document.getElementById("globe").innerHTML = worlds[worldIndex];
}