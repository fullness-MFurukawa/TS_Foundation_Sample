/**
 * 商品の在庫を確認する非同期関数
 * @param quantity 注文数
 * @returns Promiseオブジェクト
 */
function checkStock(quantity: number): Promise<string> {
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

/**
 * 在庫確認プロセスを実行する非同期関数
 * 内部でawait を使用するため、関数宣言の先頭にasyncを付与する
 */
export async function processStockCheck() {
    try {
        /**
         * awaitを付与して関数を実行し、Promiseの状態が確定するまで待機する
         * 状態がFulfilled(成功)になると、resolve()関数に渡した値が変数messageに代入される
         */
        const message = await checkStock(5); 
        // 待機が完了し、値を受け取った後に以下の行が実行される
        console.log("成功通知:", message);
    } catch (error) {
        /**
         * 状態がRejected(失敗)になった場合、catchブロックへ処理が移る
         * 引数errorにはreject()関数に渡した値が入る
         */
        console.error("失敗通知:", error);
    } finally {
        /**
         * 成否に関わらず、状態確定後に必ず実行される
         */
        console.log("--- 在庫確認処理を終了します ---");
    }
}