import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  objectKeys = Object.keys;
  coins: Object;
  likedCoins = [];
  
  

  constructor(public navCtrl: NavController, private_data: DataProvider, private_storage: Storage) {
  this.storage.remove('likedCoins');
}

ionViewDidLoad() {

  
}

ionViewWillEnter(){
  this.refreshCoins;
}


refreshCoins(){

  this.storage.get('likedCoins').then((val) => {
    
    // If the value is not set, then
    if(!val) {
      this.likedCoins.push('BTC','ETH','IOT');
      this.storage.set('likedCoins', this.likedCoins);
    
      this._data.getCoins(this.likedCoins)
      .subscribe(res => {
        this.coins = res;
      })
    }
    // It's set
    else {
      this.likedCoins = val;
      
      this._data.getCoins(this.likedCoins)
      .subscribe(res => {
        this.coins = res;
      })
      
    }
    
  })
  
}

}
