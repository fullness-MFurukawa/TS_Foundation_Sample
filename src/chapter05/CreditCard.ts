import type { Payable } from "./Payable.js";
/**
 * クレジットカード決済クラス
 */
export class CreditCard implements Payable {
    // クレジットカードのブランド名
    private _brand: string;
    /**
     * コンストラクタ
     * @param brand 
     */
    constructor(brand: string) {
        this._brand = brand;
    }

    // Payableで約束した通り、支払いの具体的な中身を記述
    public pay(amount: number): void {
        console.log(`${this._brand}カードで${amount.toLocaleString()}円を決済しました。`);
    }
}