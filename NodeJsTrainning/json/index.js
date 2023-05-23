const fs = require("fs");
const { parse } = require("path");
const bioData = {
  name: "vinod",
  age: 26,
  channel: "thapa technical",
};

//convert to json=>done
//dusre file me add karna
//read file
//again convert back to js obj ori
//console.log

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(JSON.parse(data));
});
