import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}


    allumer(){
      alert("lamp allume");
    }
  
    eteindre(){
      alert("lampe arrete");
    }

  }

 

