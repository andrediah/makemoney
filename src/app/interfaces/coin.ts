import { CoinType } from "../enums/coin-type";

export interface Coin {
    coinId:number,
    type:CoinType,
    color:string
}
