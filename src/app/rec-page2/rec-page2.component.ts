import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
const myStorage = window.localStorage

@Component({
  selector: 'app-rec-page2',
  templateUrl: './rec-page2.component.html',
  styleUrls: ['./rec-page2.component.scss']
})
export class RecPage2Component implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) { }

  formGroup = this.fb.group({
    year: new FormControl(null),
    
  })



  RecommendationArray: any = []
  processForm(){
    if(this.formGroup.value.year == null){
      this._snackBar.open("Please Enter a Year", "Close")
    } else {
      this.RecommendationArray = []
      const bodyToSend = {
        year: this.formGroup.value.year
      }
      try{
        let birthdayCall = new Promise((resolve, reject) => {
          this.http.post("https://queueup-back.herokuapp.com/Birthyear", bodyToSend)
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

  color = '#eaeef0'
  fontColor = 'black'
  buttonColor = '#228B22'
  modeCheck = false
  ngOnInit(): void {
    let mode = myStorage.getItem('DarkMode')
    let scale = myStorage.getItem('GreyScale')
    if(mode == 'true'){
      this.color = '#28282B'
      this.modeCheck = true
      myStorage.setItem('DarkMode', 'true')
      this.fontColor = 'white'

    } else {
      this.color = '#eaeef0'
      myStorage.setItem('DarkMode', 'false')
      this.modeCheck = false
      this.fontColor = 'black'

    }

    if(scale == 'true'){
      this.scaleCheck = true
      myStorage.setItem('GreyScale', 'true')
      this.filter = 'grayscale(100%)'
      this.buttonColor = '#28282B'

    } else {
      this.scaleCheck = false
      myStorage.setItem('GreyScale', 'false')
      this.filter = "none"
      this.buttonColor = '#228B22'


    }
  }


  onToggle(event:any){
    if(event.checked == true){
      myStorage.setItem('DarkMode', 'true')
      this.color = '#28282B'
      this.fontColor = 'white'



    } else{
      myStorage.setItem('DarkMode', 'false')
      this.color = '#eaeef0'
      this.fontColor = 'black'


    }
  }

  scaleCheck = false
  filter = "none"
  onScale(event:any){
    if(event.checked == true){
      myStorage.setItem('GreyScale', 'true')
      this.scaleCheck = true
      this.filter = 'grayscale(100%)'
      this.buttonColor = '#28282B'

    } else{
      myStorage.setItem('GreyScale', 'false')
      this.scaleCheck = false
      this.filter = "none"
      this.buttonColor = '#228B22'


    }
  }
}
