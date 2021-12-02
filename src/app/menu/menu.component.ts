import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

const myStorage = window.localStorage;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {

  }

  openAccessOne(){
    this.dialog.open(DialogContent)
  }

  openAccessTwo(){
    this.dialog.open(DialogContentTwo)
  }


}

@Component({
 selector: 'dialog-content',
 templateUrl: 'dialog-content.html' 
})
export class DialogContent{
  constructor(public dialog: MatDialog) { }

  closeAccessOne(){
    this.dialog.closeAll()
  }

  enableAccessOne(){
    myStorage.setItem("accessOne", "True")
    myStorage.setItem("accessTwo", "False")
    this.dialog.closeAll()

  }

}

@Component({
  selector: 'dialog-contentTwo',
  templateUrl: 'dialog-contentTwo.html' 
 })
 export class DialogContentTwo{
   constructor(public dialog: MatDialog) { }
 
   closeAccessTwo(){
     this.dialog.closeAll()
   }
 
   enableAccessTwo(){
    myStorage.setItem("accessTwo", "True")
    myStorage.setItem("accessOne", "False")
    this.dialog.closeAll()


   }
 
 }