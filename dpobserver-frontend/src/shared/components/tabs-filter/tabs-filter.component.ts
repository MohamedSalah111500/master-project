import { NgIfContext } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs-filter',
  templateUrl: './tabs-filter.component.html',
  styleUrls: ['./tabs-filter.component.scss']
})
export class TabsFilterComponent implements OnInit {
  @Input('tabs')tabs: any;

  @Input('activeTab') activeTab: string | undefined;

  @Output('onTabClick') onTabClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  tabClick(text:string) {
    this.activeTab = text;
    this.onTabClick.emit(text);
  }

}
