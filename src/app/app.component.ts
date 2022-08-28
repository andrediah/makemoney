import { Component } from '@angular/core';
import { CoinType } from './enums/coin-type';
import { Coin } from './interfaces/coin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakeMoney';
  newAmount:number = 3;
  coinCounter:number=0;
  CurrentValue:number =0
  newCoinType:CoinType = CoinType.Dime;
  coins:Coin[] = [
    // {type: CoinType.Dime,coinId:1},
    // {type: CoinType.Nickle,coinId:2}
  ];
  CoinType = CoinType;


  enumKeys:any = Object.values(this.CoinType).filter(value => typeof value === 'number');

  // Object.keys(this.CoinType).filter(f => !isNaN(Number(f)));
  makeMoney():void{
    let newcolor:string = '';
    let newVal = 0
    //this.displayEdit = !this.displayEdit;
    switch (this.newCoinType){
      case CoinType.Dime:{
        newcolor = 'circleGreen'  
        newVal = .1     
        break;
      }
      case CoinType.Nickle:{
        newcolor = 'circleBlue'       
        newVal = .05     
        break;
      }
      case CoinType.Quarter:{
        newcolor = 'circleRed'       
        newVal = .25   
        break;
      }
      case CoinType.Penny:{
        newcolor = 'circleYellow'       
        newVal = .01  
        break;
      }      
    };

    while (this.newAmount > 0){
      console.log(newcolor);

      let newCoin:Coin = {
        coinId: this.getCoinId(),
        type : this.newCoinType,
        color : newcolor
      };
      this.CurrentValue += newVal;
      this.coins.push(newCoin);
      this.newAmount --;
    }
  }
  remove(coinId:number):void{
    let coin = this.coins.filter(c => c.coinId === coinId);
    let newVal = 0

    if (coin !== undefined){
      switch (coin[0].type){
        case CoinType.Dime:{
          newVal = .1     
          break;
        }
        case CoinType.Nickle:{
          newVal = .05     
          break;
        }
        case CoinType.Quarter:{
          newVal = .25   
          break;
        }
        case CoinType.Penny:{
          newVal = .01  
          break;
        }      
      };

      let idx: number = this.coins.findIndex(w => w == coin[0]);
      this.coins.splice(idx, 1);
      this.CurrentValue -= newVal;
    }


  }
  getCoinId(): number{
   return this.coinCounter++;
  }
  onSelectedCointType(value:string): void {
   
		this.newCoinType = +value;
	}
}
