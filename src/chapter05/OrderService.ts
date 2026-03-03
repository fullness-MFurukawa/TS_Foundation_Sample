/**
 * 【非公開】このファイル内でのみ使用する定数
 */
const TAX_RATE = 0.1;
const LOG_PREFIX = "[OrderSystem]";

/**
 * 【非公開】外部には見せたくない補助的な関数
 */
function calculateTotal(price: number, quantity: number): number {
    return Math.floor(price * quantity * (1 + TAX_RATE));
}

/**
 * 【公開：メイン】注文サービス本体
 * 外部ではこのクラスのorder()メソッドを呼ぶだけで良い
 */
export default class OrderService {
    constructor(private _productName: string, private _price: number) {}

    public order(quantity: number): void {
        // 内部の非公開関数を利用
        const total = calculateTotal(this._price, quantity);
        
        console.log(`${LOG_PREFIX} 注文を受付ました。`);
        console.log(`商品: ${this._productName} / 数量: ${quantity}`);
        console.log(`合計金額（税込）: ${total}円`);
    }
}