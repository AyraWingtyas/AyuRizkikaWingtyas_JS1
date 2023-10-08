let isOn = true;
let isDaytime = false;

if (isOn) {
  console.log("The lamp is turned on");
} else {
  console.log("The lamp is turned off");
}

if (isOn && isDaytime) {
  console.log("The lamp is turned on during the daytime");
} else if (isOn && !isDaytime) {
  console.log("The lamp is turned on during the nighttime");
} else {
  console.log("The lamp is turned off");
}