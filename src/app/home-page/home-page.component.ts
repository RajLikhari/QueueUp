import { Component, OnInit } from '@angular/core';


declare var particlesJS: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
   }


  ngOnInit(): void {
    particlesJS.load('particles-js', '../../assets/particles.json', null);

  }

}
