import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-studentname',
  templateUrl: './studentname.component.html',
  styleUrls: ['./studentname.component.scss']
})
export class StudentnameComponent {
  stname: string = '';
  constructor(public activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe((param: any) => {
      this.stname = param.stname;
    })
  }
}
