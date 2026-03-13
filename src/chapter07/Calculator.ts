
/**
 * ヘルパ関数：指定ミリ秒だけ待機する
 * @param ms 待機時間(ミリ秒)
 * @returns 指定した時間が経過し完了したことを表すPromise
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 計算機クラス 
 */
export class Calculator {
    /**
     * 指定された回数だけ計算を行い、1回ごとに1秒待機する非同期メソッド
     * @param name 非同期処理名
     * @param count ループ回数
     * @param calcType 1: 加算, 2: 乗算
     * @returns 計算結果の合計値
     */
    public async calculateAndDelay(name: string, count: number, calcType: 1 | 2): Promise<number> {
        const calcName = calcType === 1 ? "加算" : "乗算";
        console.log(`[${name}] ${calcName}を開始します（回数: ${count}）...`);

        // 初期値のセット（加算なら0、乗算なら1）
        let total = calcType === 1 ? 0 : 1;
        for (let i = 1; i <= count; i++) {
            // 計算処理と結果の表示
            if (calcType === 1) {
                console.log(`  [${name}] ${total} += ${i} : ${total += i}`);
            } else {
                console.log(`  [${name}] ${total} *= ${i} : ${total *= i}`);
            }
            await sleep(1000);// 1秒間一時停止する
        }
        return total;
    }
}