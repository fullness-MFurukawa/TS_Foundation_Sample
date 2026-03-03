/** 
 * 在庫不足時の例外 
 */
export class OutOfStockError extends Error {
    constructor(public productName: string) {
        super(`${productName}の在庫が不足しています。`);
        this.name = "OutOfStockError";
    }
}

/** 
 * 注文上限超過時の例外 
 */
export class OverLimitError extends Error {
    constructor(public limit: number) {
        super(`一度に注文できるのは${limit}個までです。`);
        this.name = "OverLimitError";
    }
}