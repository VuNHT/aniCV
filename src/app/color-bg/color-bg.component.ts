import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-color-bg',
  templateUrl: './color-bg.component.html',
  styleUrls: ['./color-bg.component.scss']
})
export class ColorBgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public changeColor(color1, color2) {
    document.getElementById('change-color').style.borderBottomColor = color1;
    $('.btn-change').css("background-color", color1);
    $('.sub-btn-change').css("color", color1);
    $('.progress-bar').css("background-color", color2);


  }

}
