import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-preloader',
  templateUrl: './widget-preloader.component.html',
  styleUrls: ['./widget-preloader.component.css']
})
export class WidgetPreloaderComponent implements OnInit {
  @Input() preload: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
