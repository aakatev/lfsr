import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-lfsr',
  templateUrl: './lfsr.component.html',
  styleUrls: ['./lfsr.component.css']
})
export class LfsrComponent implements OnInit {
  round: number = 0;
  p: Array<number> = [0, 1, 1];
  s: Array<number> = [1, 0, 0];
  f: number | string = 'n/a';
  out: string = "";

  constructor() { }

  ngOnInit() { 
    // const source = timer(0, 3000);
    // const subscribe = source.subscribe(val => {
    //   this.round = val;
    // });
  }

  onNextRound() {
    this.round ++; 
    this.shift();
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
