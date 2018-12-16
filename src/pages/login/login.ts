import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
  email = '';
  password = '';


  constructor(private fire: AngularFireAuth,
   public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  signUp(){
   let email = this.email;
   let password = this.password;
  //  console.log(email + " "+password );
   


     this.fire.auth.createUserWithEmailAndPassword(email, password)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
    email = '';
    password = '';
    
  }
  signIn(){

    let email = this.email;
    let password = this.password;
   //  console.log(email + " "+password );
    
 
 
      this.fire.auth.signInWithEmailAndPassword(email, password)
       .then((res: any) => console.log(res))
       .catch((error: any) => console.error(error));

   
  }

 

}
