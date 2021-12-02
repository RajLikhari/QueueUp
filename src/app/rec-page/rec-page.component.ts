import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rec-page',
  templateUrl: './rec-page.component.html',
  styleUrls: ['./rec-page.component.scss']
})
export class RecPageComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  RecommendationArray: any = []
  ngOnInit(): void {
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
