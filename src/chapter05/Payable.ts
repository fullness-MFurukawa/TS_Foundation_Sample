/**
 * 5-5. インターフェイス
 * 支払い(Payable)を定義するインターフェース
 */
export interface Payable {
    // 支払いを行う機能（契約）
    pay(amount: number): void;
}