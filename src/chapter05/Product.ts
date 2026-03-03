import { OutOfStockError } from "./OutOfStockError.js";

export class Product {
    // 【静的メンバ】全商品共通：一度に注文できる最大数
    public static readonly MAX_PURCHASE_LIMIT = 10;

    constructor(
        public name: string,
        private _stock: number
    ) {}

    /**
     * 商品を購入する
     */
    public purchase(quantity: number): void {
        // 全社共通ルールのチェック
        if (quantity > Product.MAX_PURCHASE_LIMIT) {
            throw new Error(`一度に注文できるのは${Product.MAX_PURCHASE_LIMIT}個までです。`);
        }

        // 在庫のチェック（個別データのチェック）
        if (quantity > this._stock) {
            // 独自例外をスロー
            throw new OutOfStockError(this.name, this._stock);
        }

        this._stock -= quantity;
        console.log(`${this.name}を${quantity}個購入しました。`);
    }

    public toString(): string {
        return `${this.name} [在庫: ${this._stock}]`;
    }
}