var getCoordinatesForPercent = function(percent) {
  var x = Math.cos(2 * Math.PI * percent);
  var y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};
var chartCreator = {
  pieChart: function(chartID, dataArray) {
    var cumulativePercent = 0;
    dataArray.forEach(slice => {
      chartID.setAttribute("viewBox", "-1 -1 2 2");
      var [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      var [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      var largeArcFlag = slice.percent > .5 ? 1 : 0;
      var pathData = [
        `M ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(' ');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('fill', slice.color);
      path.setAttribute('class', slice.class);
      chartID.appendChild(path);
    });
  },
  donutChart: function(chartID, percentage, chartSize, filledColor, unfilledColor, centerFill) {
    var svgns = "http://www.w3.org/2000/svg";
    chartID.setAttribute("width", chartSize);
    chartID.setAttribute("height", chartSize);
    chartID.setAttribute("viewBox", "0 0 " + chartSize + " " + chartSize);
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", chartSize / 2);
    back.setAttributeNS(null, "cy", chartSize / 2);
    back.setAttributeNS(null, "r", chartSize / 2);
    back.setAttributeNS(null, "fill", unfilledColor);
    chartID.appendChild(back);
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI * 2) / 100;
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (chartSize / 2) + (chartSize / 2) * Math.sin(startangle);
    var y1 = (chartSize / 2) - (chartSize / 2) * Math.cos(startangle);
    var x2 = (chartSize / 2) + (chartSize / 2) * Math.sin(endangle);
    var y2 = (chartSize / 2) - (chartSize / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
      big = 1;
    }
    var d = "M " + (chartSize / 2) + "," + (chartSize / 2) +
      " L " + x1 + "," + y1 +
      " A " + (chartSize / 2) + "," + (chartSize / 2) +
      " 0 " + big + " 1 " +
      x2 + "," + y2 +
      " Z";
    path.setAttribute("d", d);
    path.setAttribute("fill", filledColor);
    chartID.appendChild(path);
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (chartSize / 2));
    front.setAttributeNS(null, "cy", (chartSize / 2));
    front.setAttributeNS(null, "r", (chartSize * 0.34));
    front.setAttributeNS(null, "fill", centerFill);
    chartID.appendChild(front);
  }
};
