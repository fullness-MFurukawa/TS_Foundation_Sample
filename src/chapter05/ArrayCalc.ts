/**
 * 配列の計算を行うクラス
 */
export class ArrayCalc {
    /**
     * 配列が保持する値の合計を計算して返す
     * @param values 数値配列
     * @returns 合計
     */
    public summarize(values: number[]): number {
        let sum = 0;
        // 3回ループ（valuesが2個しかないと問題が起きる設計）
        for (let i = 0; i < 3; i++) {
            const val = values[i];
            // TypeScript/JSでは範囲外アクセスしてもエラーにならないため、明示的にチェック
            if (val === undefined) {
                throw new Error(`インデックス ${i} は範囲外です。`);
            }
            console.log(`values[${i}]=${values[i]}`);
            sum += val;
        }
        console.log("終了");
        return sum;
    }
}