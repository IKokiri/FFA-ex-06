import { Component, Input } from "@angular/core";

@Component({
  selector: "texto-component",
  templateUrl: "./texto.component.html",
  styleUrls: ["./texto.component.css"]
})
export class TextoComponent {
  @Input() texto = "";
}
