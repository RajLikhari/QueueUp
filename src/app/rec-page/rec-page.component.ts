import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
const myStorage = window.localStorage

@Component({
  selector: 'app-rec-page',
  templateUrl: './rec-page.component.html',
  styleUrls: ['./rec-page.component.scss']
})
export class RecPageComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  RecommendationArray: any = []

  color = '#eaeef0'
  modeCheck = false
  onToggle(event:any){
    if(event.checked == true){
      myStorage.setItem('DarkMode', 'true')
      this.color = '#28282B'

    } else{
      myStorage.setItem('DarkMode', 'false')
      this.color = '#eaeef0'

    }
  }

  filter = 'none'
  scaleCheck = false
  onScale(event:any){
    if(event.checked == true){
      myStorage.setItem('GreyScale', 'true')
      this.scaleCheck = true
      this.filter = 'grayscale(100%)'

    } else{
      myStorage.setItem('GreyScale', 'false')
      this.scaleCheck = false
      this.filter = 'none'


    }
  }

  ngOnInit(): void {
    let mode = myStorage.getItem('DarkMode')
    let scale = myStorage.getItem('GreyScale')
    if(mode == 'true'){
      this.color = '#28282B'
      this.modeCheck = true
      myStorage.setItem('DarkMode', 'true')

    } else {
      this.color = '#eaeef0'
      this.modeCheck = false
      myStorage.setItem('DarkMode', 'false')
    }

    if(scale == 'true'){
      this.scaleCheck = true
      myStorage.setItem('GreyScale', 'true')
      this.filter = 'grayscale(100%)'

    } else {
      this.scaleCheck = false
      myStorage.setItem('GreyScale', 'false')
      this.filter = 'none'
    }

    const bodyToSend = {}
    try{
      let birthdayCall = new Promise((resolve, reject) => {
        this.http.post("https://queueup-back.herokuapp.com/Twitch", bodyToSend)
          .toPromise()
          .then(
            res => {
              this.RecommendationArray = res
              resolve(res)
            },
            msg=>{
              reject(msg)
            }
          )
        })
    } catch(error){
      this._snackBar.open("An Error has Occured", "Close")
    }
  }

}
