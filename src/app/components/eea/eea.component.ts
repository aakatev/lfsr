import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eea',
  templateUrl: './eea.component.html',
  styleUrls: ['./eea.component.css']
})
export class EeaComponent implements OnInit {
  r = [3864, 3872];
  s = [1, 0];
  t = [0, 1]
  i = 1;

  constructor() { }

  ngOnInit() {
    do {
      this.i++;
      this.r[this.i] = this.r[this.i-2] % this.r[this.i-1];

      let q = (this.r[this.i-2] - this.r[this.i])/this.r[this.i-1];
      this.s[this.i] = this.s[this.i-2] - (q * this.s[this.i-1]);
      this.t[this.i] = this.t[this.i-2] - (q * this.t[this.i-1]);

    } while( this.r[this.i]!== 0 );
  }

}
