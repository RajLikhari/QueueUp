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

    // let twitterPromise = new Promise((resolve, reject) => {
    //   this.http.post("twitterCall", body)
    //     .toPromise()
    //     .then(
    //       res=>{            
    //         var resultArray = Object.entries(res)
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
