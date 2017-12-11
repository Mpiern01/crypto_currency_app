import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  
  objectKeys = Object.keys;
  likedCoins = [];
  raw = [];
  liked = [];
  allcoins:any;

  constructor(private_data: DataProvider, private_storage: Storage, public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   let loader = this.loading.create({
    content:'Refreshing..',
    spinner: 'bubbles'
  }),
  
 

loader.present().then(() => {
  this.storage.get('likedCoins').then((val) => {
    
  });
  
  this._data.allcoins()
  .subscribe(res => {
    this.raw = res ['Data'];
    this.allcoins = res[Data];
    
    loader.dismiss();
    
    this.storage.get('likedCoins').then((val) => {
      this.liked = val;
      
    })
  })
});

}
}



