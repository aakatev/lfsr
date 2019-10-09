import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eea',
  templateUrl: './eea.component.html',
  styleUrls: ['./eea.component.css']
})
export class EeaComponent implements OnInit {
  r = [973, 301];
  s;
  t;
  i;

  constructor() { }

  ngOnInit() {
    this.run();
  }

  run() {
    // this.r = [973, 301];
    this.s = [1, 0];
    this.t = [0, 1]
    this.i = 1;
    do {
      this.i++;
      this.r[this.i] = this.r[this.i-2] % this.r[this.i-1];

      let q = (this.r[this.i-2] - this.r[this.i])/this.r[this.i-1];
      this.s[this.i] = this.s[this.i-2] - (q * this.s[this.i-1]);
      this.t[this.i] = this.t[this.i-2] - (q * this.t[this.i-1]);

    } while( this.r[this.i]!== 0 );
  }

  onR0Change(val) {
    // console.log(val);
    this.r[0] = Number(val);
    this.run();
  }

  onR1Change(val) {
    // console.log(val);
    this.r[1] = Number(val);
    this.run();
  }
}
