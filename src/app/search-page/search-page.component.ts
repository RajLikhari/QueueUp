import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.prod';
const API_URL = environment.apiUrl;
const myStorage = window.localStorage

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) { }
  
  //Setting up the form group
  formGroup = this.fb.group({
    genre: new FormControl(null, [Validators.required]),
    platform: new FormControl(null),
    multi: new FormControl(false)
  })

  color = '#eaeef0'
  modeCheck = false
  ngOnInit(): void {
    let mode = myStorage.getItem('DarkMode')
    if(mode == 'true'){
      this.color = '#28282B'
      this.modeCheck = true

    } else {
      this.color = '#eaeef0'
      this.modeCheck = false

    }
  }


  onToggle(event:any){
    if(event.checked == true){
      myStorage.setItem('DarkMode', 'true')
      this.color = '#28282B'

    } else{
      myStorage.setItem('DarkMode', 'false')
      this.color = '#eaeef0'

    }
  }


  RAWGData: any = []
  IGDBData: any = []

  processForm(){
    this.RAWGData = []
    this.IGDBData = []

    //Simple error checking
    if(this.formGroup.value.genre == null){
      this._snackBar.open("Genre must be given!", "Close")
    } else {
      var splitted = []
      try{
        splitted = this.formGroup.value.platform.split("~",2)
      } catch(error){
        splitted = [null, null]
      }

      //Creating body responses
      var bodyRAWG = {
        genre: this.formGroup.value.genre.toLowerCase(),
        multiplayer: this.formGroup.value.multi,
        platform: splitted[1]
      }
      var bodyIGDB = {
        genre: this.formGroup.value.genre,
        multiplayer: this.formGroup.value.multi,
        platform: splitted[0]
      }
      this.formGroup.reset

      //Handling for some difference in genres
      let rawgOff = false
      let igdbOff = false
      if(this.formGroup.value.genre == "Point-and-click" || this.formGroup.value.genre == "Simulator"
       || this.formGroup.value.genre == "Tactical" || this.formGroup.value.genre == "MOBA" || this.formGroup.value.genre == "Sport"){
        rawgOff = true
      }

      if(this.formGroup.value.genre == "Puzzle" || this.formGroup.value.genre == "Role-playing-games-rpg" || this.formGroup.value.genre == "Family" || this.formGroup.value.genre == "Platformer"){
        igdbOff = true
      }
      

      //API Calls (can be refined split on value)
      if(!rawgOff){
        let rawgCall = new Promise((resolve, reject) => {
          this.http.post("https://queueup-back.herokuapp.com/RAWGCall", bodyRAWG)
           .toPromise()
           .then(
             res => {
               this.RAWGData = res
               resolve(res)
             },
             msg=>{
               reject(msg)
             }
           )
         })
       }

      //API Calls (can be refined split on value)
      if(!igdbOff){
        let IGDBCall = new Promise((resolve, reject) => {
          this.http.post("https://queueup-back.herokuapp.com/IGDBCall", bodyIGDB)
          .toPromise()
          .then(
            res => {
              this.IGDBData = res
              resolve(res)
            },
            msg => {
              reject(msg)
            }
          )
        })        
      }
    }
  }

}
