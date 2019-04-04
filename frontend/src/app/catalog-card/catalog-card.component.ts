import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css']
})
export class CatalogCardComponent implements OnInit {

  avatar_img = "/assets/images/jetbrains.png";
  box_img = "assets/images/intellij.png";
  box_alt = "Intellij Boxshot";
  description = "Every aspect of IntelliJ IDEA is specifically designed to maximize developer productivity.\n" +
    "      Together, the powerful static code analysis and ergonomic design make development not only productive but also\n" +
    "      an enjoyable experience.";
  title = "Intelli-J";
  type = "Programming";

  constructor() {

  }

  ngOnInit() {
  }

}
