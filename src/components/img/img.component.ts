import { Component, Input } from "@angular/core";

@Component({
  selector: "img-component",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent {
  @Input() imagePath: string;
}
