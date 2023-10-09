/* if, else, nested if */
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

/* switch */
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  default:
    console.log("It's the weekend!");
}

/* for statement */
for (let i = 1; i < 5; i++) {
  console.log("Iteration: " + i);
}

/* while, do while */
let i = 0;

while (i < 5) {
  console.log("Iteration: " + i);
  i++;
}

let o = 0;

do {
  console.log("Iteration: " + i);
  i++;
} while (i < 5);

/* function */
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function
greet("Ayu");
greet("Rkive");
