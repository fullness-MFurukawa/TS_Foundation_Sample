/**
 * 商品の在庫を確認する非同期関数
 * @param quantity 注文数
 * @returns Promiseオブジェクト
 */
export function checkStock(quantity: number): Promise<string> {
    /**
     * 商品在庫を確認するPromiseを返す
     */
    return new Promise((resolve, reject) => {
        console.log("--- 在庫確認を開始します ---");

        if (quantity <= 10) {
            // 成功時：状態を Fulfilled に変更し、成功メッセージを渡す
            resolve(`在庫あり：${quantity}個の注文を受け付けました。`);
        } else {
            // 失敗時：状態を Rejected に変更し、エラー理由を渡す
            reject("在庫不足：注文数が在庫上限を超えています。");
        }
    });
}