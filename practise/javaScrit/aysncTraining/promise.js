global.XMLHttpRequest = require('xhr2');
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
  if(this.readyState == 4 && this.status == 200)
  {
     console.log(this.responseText); 
  }
};
xhttp.open('GET',"readme.txt",true);
console.log("Hello")
xhttp.send();