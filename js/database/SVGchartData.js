/*
 * Chart Data
 */
var chartContainer = document.querySelector('#chartContainer');
var charts = {
 pieCharts: [
  [
   document.querySelector('svg#pieChart1'),
   [
    {
     percent: 0.1,
     color: 'Coral',
     class: 'slice1'
    }, {
     percent: 0.65,
     color: 'CornflowerBlue',
     class: 'slice2'
    }, {
     percent: 0.25,
     color: '#00ab6b',
     class: 'slice3'
    }
   ]
  ],
  [
   document.querySelector('svg#pieChart2'),
   [
    {
     percent: 0.1,
     color: 'Coral',
     class: 'slice1'
    }, {
     percent: 0.65,
     color: 'CornflowerBlue',
     class: 'slice2'
    }, {
     percent: 0.25,
     color: '#00ab6b',
     class: 'slice3'
    }
   ]
  ],
  [
   document.querySelector('svg#pieChart3'),
   [
    {
     percent: 0.1,
     color: 'Coral',
     class: 'slice1'
    }, {
     percent: 0.65,
     color: 'CornflowerBlue',
     class: 'slice2'
    }, {
     percent: 0.25,
     color: '#00ab6b',
     class: 'slice3'
    }
   ]
  ],
  [
   document.querySelector('svg#pieChart4'),
   [
    {
     percent: 0.1,
     color: 'Coral',
     class: 'slice1'
    }, {
     percent: 0.65,
     color: 'CornflowerBlue',
     class: 'slice2'
    }, {
     percent: 0.25,
     color: '#00ab6b',
     class: 'slice3'
    }
   ]
  ],
  [
   document.querySelector('svg#pieChart5'),
   [
    {
     percent: 0.1,
     color: 'Coral',
     class: 'slice1'
    }, {
     percent: 0.65,
     color: 'CornflowerBlue',
     class: 'slice2'
    }, {
     percent: 0.25,
     color: '#00ab6b',
     class: 'slice3'
    }
   ]
  ]
 ],
 donutCharts: [
  [
   document.querySelector('svg#donutChart1'),
   90,
   20,
   "Coral",
   "rgba(0,0,0,0.75)",
   "black"
  ],
  [
   document.querySelector('svg#donutChart2'),
   90,
   40,
   "CornflowerBlue",
   "rgba(0,0,0,0.75)",
   "black"
  ],
  [
   document.querySelector('svg#donutChart3'),
   90,
   60,
   "#00ab6b",
   "rgba(0,0,0,0.75)",
   "black"
  ],
  [
   document.querySelector('svg#donutChart4'),
   90,
   80,
   "Coral",
   "rgba(0,0,0,0.75)",
   "black"
  ],
  [
   document.querySelector('svg#donutChart5'),
   90,
   100,
   "CornflowerBlue",
   "rgba(0,0,0,0.75)",
   "black"
  ]
 ]
};
