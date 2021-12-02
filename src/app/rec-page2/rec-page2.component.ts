import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
          this.http.post("Birthyear", bodyToSend)
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

  ngOnInit(): void {
  }

}
