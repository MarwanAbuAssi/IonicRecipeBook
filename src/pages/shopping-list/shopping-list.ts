import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListaSevices} from "../../Services/ShoppingListaSevices";
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public shoppingListaSevices:ShoppingListaSevices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }
  onAddRecipe(form: NgForm){
    console.log(form.valid)
this.shoppingListaSevices.addItem(form.value.name,form.value.amount)

  }

}
