import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexDataLabels
} from "ng-apexcharts";
import { Sale } from 'src/app/model/sale';
import { SaleSuccess } from './model/salesucess';

import { SalesService } from './servicos/sales.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;

  public label: string[] = [];
  public data: number[] = [];

  constructor(private service: SalesService) {
    this.service.getSummerBySeller().subscribe(
      (res: SaleSuccess[]) => {
        
        res.forEach(x => {
          this.label.push(x.sellerName);
          this.data.push(x.visited)
        });
        console.log(res)
        this.inicializaCharts(this.label);
      }
    )

  }

  ngOnInit() {


  }

  public inicializaCharts(nomes: string[]) {
    this.title = {
      text: 'Total de Visitas Por Vendedor'
    };

    this.series = [{
      name:'Qtd Visitas',
      data: this.data,
    }];
    this.chart = {
      type: 'bar',
      width: 450
    };
    
    this.xaxis = {
      categories: nomes,
    }

    this.plotOptions = {
      bar: {
        horizontal: true
      }
    }
  }

}
