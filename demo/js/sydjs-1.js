/* jslint browser: true, devel: true, node: false, rhino: false, indent: 2 */

var xmlns = "http://www.w3.org/2000/svg",
  stateG = document.getElementById("state"),
  pathG = document.getElementById("path");

var drawState = function (x, y) {
  var newCircle = document.createElementNS(xmlns, "circle");
  newCircle.setAttribute("cx", x);
  newCircle.setAttribute("cy", y);
  newCircle.setAttribute("r", "3");
  stateG.appendChild(newCircle);
};

var drawMove = function (x1, y1, x2, y2) {
  var newPath = document.createElementNS(xmlns, "path");
  newPath.setAttribute("d", "M " + x1 + "," + y1 + " A 1,1 0 0,0 " + x2 + "," + y2);
  pathG.appendChild(newPath);
};

(function () {
  var x1 = 100, y1 = 0, x2 = 0, y2 = 0;
  drawState(x1, y1);
  drawMove(x1, y1, x2, y2);
})();
