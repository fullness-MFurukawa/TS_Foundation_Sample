import * as fs from 'fs/promises';

/**
 * 指定されたテキストファイルのデータを読み取った結果を返す
 * @param filePath テキストファイルパス
 * @returns 読み取った行
 */
export async function readFirstLine(filePath: string): Promise<string[]> {
    // 1. ファイル全体を読み込む（ここで待機）
    const fileContent: string = await fs.readFile(filePath, 'utf-8');

    // 2. 読み取ったテキストを改行で分割し、1行目だけを取り出す
    // ※ /\r?\n/ とすることで、Windows(CRLF)とMac/Linux(LF)どちらの改行にも対応できます
    const lines: string[] = fileContent.split(/\r?\n/);

    // 3. 1行の文字列を返す（呼び出し元には、これがPromiseの箱に入って届きます）
    //    undefined の場合は空文字を返す（厳格な型チェックへの対応）
    return lines;
}


// 1秒だけ待機するヘルパ関数
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 計算後に1秒待ってから結果を返す非同期関数
export async function calculateAndDelay(name: string, count: number, calcType: 1 | 2): Promise<number> {
    console.log(`  [${name}] 計算を開始します（回数: ${count}）...`);
    // 加算なら0、乗算なら1を初期値とする
    let total = calcType === 1 ? 0 : 1;
    for (let i = 1; i <= count; i++) {
        // 計算処理
        if (calcType === 1) {
            console.log(`  [${name}] ${total} += ${i} : ${total += i}`);
        } else {
            console.log(`  [${name}] ${total} *= ${i} : ${total *= i}`);
        }
        await sleep(1000);
    }
    return total;
}