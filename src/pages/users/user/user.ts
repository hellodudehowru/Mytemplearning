import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector:'page-user',
    templateUrl:'user.html'

})

export class UserPage implements OnInit{

    name : string;

    constructor(private navCtrl : NavController, private navParam : NavParams){
            
    }

    ngOnInit(){
        this.name = this.navParam.get('username');
    }

    goToRoot(){
        this.navCtrl.popToRoot();
    }


}