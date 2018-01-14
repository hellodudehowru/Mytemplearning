import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoControl(){
    this.navCtrl.push(UsersPage);
  }

  gotoShopPage(){
    this.navCtrl.push(ShopPage);
  }

}
