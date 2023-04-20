const EventEmitter = require("events");

const emitter = new EventEmitter();
//register a listener
emitter.on("messageLogged", () => {
  console.log("my name is umesh sahoo");
});
emitter.on("messageLogged", () => {
  console.log("my name is priya kumari");
});
emitter.on("messageLogged", () => {
  console.log("my name is sayam da");
});
emitter.on("messageLogged", () => {
  console.log("my name is rishi bhaura");
});

//Raise an event
emitter.emit("messageLogged");
