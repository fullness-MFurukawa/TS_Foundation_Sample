/**
 * タイマーを表す型エリアス
 */
export type Timer = {
    readonly id: string;     // 読み取り専用プロパティ
    seconds: number;         // 数値型のプロパティ
    label?: string;          // 省略可能なプロパティ（?）

    start(): void;           // メソッド（戻り値なし）
    stop(force: boolean): boolean; // 引数と戻り値があるメソッド
};