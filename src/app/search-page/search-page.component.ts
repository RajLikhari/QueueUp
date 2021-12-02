import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  ngOnInit(): void {
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
      var splitted = this.formGroup.value.genre.split("~",1)

      //Creating body responses
      var bodyRAWG = {
        genre: this.formGroup.value.genre.toLowerCase(),
        multiplayer: this.formGroup.value.multi,
        platform: splitted[1]
      }
      var bodyIGDB = {
        genre: this.formGroup.value.genre,
        multiplayer: this.formGroup.value.multi,
        platform: splitted[1]
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
          this.http.post("RAWGCall", bodyRAWG)
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
          this.http.post("IGDBCall", bodyIGDB)
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
