import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rec-page3',
  templateUrl: './rec-page3.component.html',
  styleUrls: ['./rec-page3.component.scss']
})
export class RecPage3Component implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) { }

  formGroup = this.fb.group({
    key: new FormControl(null),
    
  })

  formGroup2 = this.fb.group({
    game1: new FormControl(null),
    game2: new FormControl(null)
  })

  ngOnInit(): void {
  }

  GameArray: any = []
  processForm2(){
    if(this.formGroup2.value.game1 == null || this.formGroup2.value.game2 == null){
      this._snackBar.open("Please enter 2 games", "Close", {
        duration: 1000
      })
    } else {
      var bodyKey = {
        name1: this.formGroup2.value.game1,
        name2: this.formGroup2.value.game2
      }
      console.log(this.formGroup.value.key)
      let igdbCall = new Promise((resolve, reject) => {
        this.http.post("IGDBKeyRec", bodyKey)
         .toPromise()
         .then(
           res => {
             this.GameArray = res
             resolve(res)
           },
           msg=>{
             reject(msg)
           }
         )
       })
    }
  }

  KeyArray: any = []
  processForm(){
    if(this.formGroup.value.key == null){
      this._snackBar.open("Please Enter a Keyword", "Close")
    } else {
      var bodyKey = {
        query: this.formGroup.value.key
      }
      console.log(this.formGroup.value.key)
      let igdbCall = new Promise((resolve, reject) => {
        this.http.post("IGDBKey", bodyKey)
         .toPromise()
         .then(
           res => {
             this.KeyArray = res
             console.log(this.KeyArray)
             resolve(res)
           },
           msg=>{
             reject(msg)
           }
         )
       })

    }
  }

}
