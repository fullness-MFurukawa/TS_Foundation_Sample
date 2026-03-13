import { Calculator } from "./chapter07/Calculator.js";

// 計算機クラスのインスタンスを生成する
const calc = new Calculator();

/**
 * 複数のPromiseオブジェクトを生成し配列に格納する
 * この時点で各非同期処理は「実行状態」になる
 */
const promises = [
    calc.calculateAndDelay("スレッド-A", 5, 1), // 加算
    calc.calculateAndDelay("スレッド-B", 5, 2), // 乗算
];

/**
 * 2つのスレッド(非同期メソッド)を同時実行する
 */
Promise.all(promises)
    .then(
        // すべてのPromiseが成功(Fulfilled)した時に実行される
        (results) => {
            // resultsには、各Promiseの結果が配列で入る
            console.log("【Promise.all】全てのタスクが完了しました:", results);
        }
    )
    .catch(
        // いずれか一つでも失敗(Rejected)した時に実行される
        (error) => {
            console.error("【Promise.all】エラーが発生したため中断されました:", error);
        }
    );