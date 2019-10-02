import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-lfsr',
  templateUrl: './lfsr.component.html',
  styleUrls: ['./lfsr.component.css']
})
export class LfsrComponent implements OnInit {
  round: number = 0;
  p: Array<number> = [1, 0, 0, 1];
  s: Array<number> = [1, 1, 1, 1];
  f: number | string = 'n/a';
  out: string = "";

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{}], 
      yAxes: [{
        ticks: {
          min: 0,
          max: 1,
          maxTicksLimit: 2
        }
      }] 
    }
  };
  public barChartLabels: Label[] = ['S3', 'S2', 'S1', 'S0'];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartDataSets[] = [{ 
    data: this.s, 
    label: 'Registers', 
    backgroundColor: 'rgba(34, 13, 140, 0.65)', 
    borderColor: 'rgba(85, 54, 236, 1)', 
    hoverBackgroundColor: 'rgba(34, 13, 140, 1)',
    hoverBorderColor: 'rgba(85, 54, 236, 0.8)',
    borderWidth: 2, 
    hoverBorderWidth: 3
  }];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public updateChart() {
    this.barChartData[0].data = [...this.s];
    this.barChartLabels.pop();
    this.barChartLabels.unshift(`S${this.round + 3}`);
  }

  constructor() { }

  ngOnInit() { }

  onNextRound() {
    this.round ++; 
    this.shift();
    this.updateChart();
  }

  shift() {
    this.f = this.feedback(this.p, this.s);
    this.s.unshift(this.f);
    this.out = this.out + this.s.pop()+" ";
  }

  feedback(p, s) {
    let f = 0;
    p.forEach((pI, i) => {
      f = (f + (pI * s[i]))%2
    });
    return f;
  }
}
