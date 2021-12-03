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

  scaleCheck = false
  cardColorOne = '#ADE292'
  cardColorTwo = '#A1A9FE'
  cardColorThree = '#A1A9FE'
  cardColorFour = '#AA1945'
  onScale(event:any){
    if(event.checked == true){
      myStorage.setItem('GreyScale', 'true')
      this.scaleCheck = true
      this.cardColorOne ='#28282B'
      this.cardColorTwo = '#28282B'
      this.cardColorThree = '#28282B'
      this.cardColorFour = '#28282B'

    } else{
      myStorage.setItem('GreyScale', 'false')
      this.scaleCheck = false
      this.cardColorOne = '#ADE292'
      this.cardColorTwo = '#A1A9FE'
      this.cardColorThree = '#A1A9FE'
      this.cardColorFour = '#AA1945'
    }
  }

  
  modeCheck = false
  ngOnInit(): void {
    particlesJS.load('particles-js', '../../assets/particles.json', null);
    let mode = myStorage.getItem('DarkMode')
    let scale = myStorage.getItem('GreyScale')
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

    if(scale == 'true'){
      myStorage.setItem('GreyScale', 'true')
      this.scaleCheck = true
      this.cardColorOne ='#28282B'
      this.cardColorTwo = '#28282B'
      this.cardColorThree = '#28282B'
      this.cardColorFour = '#28282B'

    } else {
      myStorage.setItem('GreyScale', 'false')
      this.scaleCheck = false
      this.cardColorOne = '#ADE292'
      this.cardColorTwo = '#A1A9FE'
      this.cardColorThree = '#A1A9FE'
      this.cardColorFour = '#AA1945'

    }

  }

}
