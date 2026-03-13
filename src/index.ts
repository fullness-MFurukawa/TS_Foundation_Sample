import { Calculator } from "./chapter07/Calculator.js";

/**
 * 複数の計算タスクを並行して実行し、制御する非同期関数
 */
async function executeParallelTasks() {
    // 計算機クラスのインスタンスを生成する
    const calc = new Calculator();

    /**
     * 複数のPromiseオブジェクトを生成し配列に格納する
     * （この時点で各非同期処理は「実行状態」になる）
     */
    const promises = [
        calc.calculateAndDelay("スレッド-A", 5, 1), // 加算
        calc.calculateAndDelay("スレッド-B", 5, 2), // 乗算
    ];

    try {
        /**
         * awaitを付与して、Promise.all の状態が確定するまで待機する
         * すべてのPromiseが成功(Fulfilled)した場合、
         * 各タスクの結果が配列として変数 results に直接代入される
         */
        const results = await Promise.all(promises);
        
        // 待機が完了し、値を受け取った後に以下の行が実行される
        console.log("【Promise.all】全てのタスクが完了しました:", results);

    } catch (error) {
        /**
         * いずれか一つでも失敗(Rejected)した場合、即座にこのcatchブロックへ処理が移る
         */
        console.error("【Promise.all】エラーが発生したため中断されました:", error);
    }
}

// 非同期関数の実行
executeParallelTasks();