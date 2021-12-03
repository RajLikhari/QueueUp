import { Component, Input, OnInit } from '@angular/core';

const myStorage = window.localStorage
declare var particlesJS: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }
  
  color = '#eaeef0'
  fontColor = 'black'
  buttonColor = '#28282B'
  buttonFontColor = 'white'
  borderColor = '#28282B'
  filter = 'none'
  onToggle(event:any){
    if(event.checked == true){
      this.color = '#28282B'
      particlesJS.load('particles-js', '../../assets/particles2.json', null);
      this.fontColor = '#eaeef0'
      this.buttonColor = '#eaeef0'
      this.buttonFontColor = 'black'
      this.borderColor = '#eaeef0'
      this.filter = 'brightness(0) invert(1)'
      myStorage.setItem('DarkMode', 'true')

    } else{
      this.color = '#eaeef0'
      particlesJS.load('particles-js', '../../assets/particles.json', null);
      this.fontColor = 'black'
      this.buttonColor = '#28282B'
      this.buttonFontColor = 'white'
      this.borderColor = '#28282B'
      this.filter = 'none'
      myStorage.setItem('DarkMode', 'false')



    }
  }

  
  modeCheck = false
  ngOnInit(): void {
    particlesJS.load('particles-js', '../../assets/particles.json', null);
    let mode = myStorage.getItem('DarkMode')
    if(mode == 'true'){
      this.color = '#28282B'
      particlesJS.load('particles-js', '../../assets/particles2.json', null);
      this.fontColor = '#eaeef0'
      this.buttonColor = '#eaeef0'
      this.buttonFontColor = 'black'
      this.borderColor = '#eaeef0'
      this.filter = 'brightness(0) invert(1)'
      myStorage.setItem('DarkMode', 'true')
      this.modeCheck = true

    } else{
      this.color = '#eaeef0'
      particlesJS.load('particles-js', '../../assets/particles.json', null);
      this.fontColor = 'black'
      this.buttonColor = '#28282B'
      this.buttonFontColor = 'white'
      this.borderColor = '#28282B'
      this.filter = 'none'
      myStorage.setItem('DarkMode', 'false')
      this.modeCheck = false

    }

  }

}
