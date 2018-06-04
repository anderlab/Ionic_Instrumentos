import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage { 
	instrumento; // declaramos la variable
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.instrumento= this.navParams.get("item"); // le damos el valor a intrumento que sera el valor de "item"
  }

 

}
