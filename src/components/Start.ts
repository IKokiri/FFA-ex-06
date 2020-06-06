import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <title-component title="Movie App"></title-component>
    <movies-component></movies-component>
  `
})
export class Start implements OnInit {
  pageTitle: string;
  constructor(private route: ActivatedRoute) {}
}
