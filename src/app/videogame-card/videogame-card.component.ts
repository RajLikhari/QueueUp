import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogame-card',
  templateUrl: './videogame-card.component.html',
  styleUrls: ['./videogame-card.component.scss']
})
export class VideogameCardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() gameName:any
  @Input() gameCoverArt: any

  twitterArray: any = []
  valueToCheck = false
  buttonVal = true

  showText = false
  changeValue(){
    var body = {
      keyword: this.gameName
    }

    let igdbCall = new Promise((resolve, reject) => {
      this.http.post("https://queueup-back.herokuapp.com/twitterCall", body)
       .toPromise()
       .then(
         res => {
          console.log(res)
         },
         msg=>{
           reject(msg)
         }
       )
     })

    // let twitterPromise = new Promise((resolve, reject) => {
    //   this.http.post("https://queueup-back.herokuapp.com/twitterCall", body)
    //     .toPromise()
    //     .then(
    //       resp =>{            
    //         var resultArray = Object.entries(resp)
    //         var grabText = resultArray[0][1]
    //         try{
    //           for(let i = 0; i < 5; i++){
    //             this.twitterArray.push(grabText[i]['text'])
    //           }
    //           this.valueToCheck = true
    //           this.buttonVal = false
    //         } catch(error){
    //           this.showText = true
    //           this.buttonVal = false
    //         }
    //         resolve(res)
    //       },
    //       msg=>{
    //         reject(msg)
    //       }
    //     )
    // })
  }
  ngOnInit(): void {
    
  }



}
