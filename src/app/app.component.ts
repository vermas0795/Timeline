import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService} from './services/app.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  Highcharts = Highcharts;
  chartOptions = {   
    chart: {
      type: 'bar'
    },
    title: {
       text: 'Historic World Population by Region'
    },
    subtitle : {
      //  text: 'Source: Wikipedia.org'  
    },
    legend : {
       layout: 'vertical',
       align: 'left',
       verticalAlign: 'top',
       x: 450,
       y: 100,
       floating: true,
       borderWidth: 1,
      
       backgroundColor: (
          ('#FFFFFF') || 
             '#FFFFFF'), shadow: true
       },
      xAxis:[{
        categories: ["Case A", "Case B","Case C", "Case D"],
        labels: {
          rotation: -90,
          x: -60,
          style: {
            fontSize: '10px',
            align: 'Right',
          }
        },
        tickWidth: 1,
        tickLength: 60,
  },
  {
     categories: ['Section A', 'Section B','Section A', 'Section B','Section A', 'Section B','Section A', 'Section B'],
     opposite: false,
      labels: {
        rotation: 0,
        x: 60,
        style: {
          fontSize: '10px',
          align: 'Right',
        }
      },
      tickWidth: 0,
  }],
    yAxis : {
      // categories: [2001, 2002, 2003, 2004, 2005, 2006,2007,2008, 2009, 2010,
      //   2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
       min: 0,
      title: {
          // text: 'Population (millions)', align: 'high'
       },
       labels: {
          overflow: 'justify'
       },
       
    },
    tooltip : {
       valueSuffix: ' millions'
    },
    plotOptions : {
       bar: {
          dataLabels: {
             enabled: true
          }
       },
       series: {
          stacking: 'normal'
       }
    },
    credits:{
       enabled: false
    },
    series: [{
      name: 'x',
      data: [1,8,9,16],
              stack: 'StackA'
  }, {
      name: 'y',
      data: [1,7,10,15],
      stack: 'StackA'
      },{
      name: 'x',
      data: [3,6,11,14],
              stack: 'StackB'
  }, {
      name: 'y',
      data: [4,5,12,13],
      stack: 'StackB'
      },
       {
         name: '',
         data: [0,0,0,0,0,0,0,0],
         showInLegend: false,
         stack: 'StackB',
         xAxis: 1            
      }
  ]
 };
    
}
