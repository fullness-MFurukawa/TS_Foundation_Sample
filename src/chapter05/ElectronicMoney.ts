import type { Payable } from "./Payable.js";
/**
 * 電子マネー決済クラス
 */
export class ElectronicMoney implements Payable {
    // 電子マネーサービス名
    private _serviceName: string;

    constructor(serviceName: string) {
        this._serviceName = serviceName;
    }

    public pay(amount: number): void {
        console.log(`${this._serviceName}で${amount.toLocaleString()}円を支払いました。`);
    }
}