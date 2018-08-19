import {Ingrediants} from "../models/ingridients";


export class ShoppingListaSevices{
 private ingredients: Ingrediants[]=[];


 addItem(name:string, amount:number){
   this.ingredients.push(new Ingrediants(name,amount))
 }
  addItems(items: Ingrediants[]){
   this.ingredients.push(...items);
 }


}
