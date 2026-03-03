/** 
 * 在庫切れ・不足を表す例外クラス 
 */
export class OutOfStockError extends Error {
    constructor(public productName: string, public currentStock: number) {
        // メッセージを親クラスに渡す
        super(`${productName}の在庫が不足しています（現在の在庫: ${currentStock}）`);
        this.name = "OutOfStockError";
    }
}