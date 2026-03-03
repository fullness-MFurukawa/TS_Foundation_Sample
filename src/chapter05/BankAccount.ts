/**
 * 銀行口座を表すクラス
 */
export class BankAccount {
    // 静的プロパティ:全口座で共通の金利（%）
    public static interestRate: number = 0.01;
    // 静的プロパティ:発行された総口座数を管理（内部用）
    private static _totalAccounts: number = 0;

    // インスタンスプロパティ:口座ごとの固有データ
    // 口座番号
    public readonly accountNumber: string;
    // 口座名義人
    public readonly accountHolder: string;
    // 口座残高
    private _balance: number;

    /**
     * コンストラクタ
     * @param accountHolder 
     * @param initialDeposit 
     */
    constructor(accountHolder: string, initialDeposit: number) {
        this.accountHolder = accountHolder;
        this._balance = initialDeposit;

        // インスタンス化のたびに静的メンバをカウントアップ
        BankAccount._totalAccounts++;
        
        // 口座番号を自動生成（例：ACC001...）
        this.accountNumber = `ACC${String(BankAccount._totalAccounts).padStart(3, '0')}`;
    }

    // 静的メソッド:共通の金利を変更する
    public static updateInterestRate(newRate: number): void {
        if (newRate < 0) return;
        BankAccount.interestRate = newRate;
        console.log(`[システム] 金利が ${newRate}% に更新されました。`);
    }

    // 静的メソッド:現在の総口座数を取得する
    public static getTotalAccounts(): number {
        return BankAccount._totalAccounts;
    }

    // インスタンスメソッド:残高確認
    public getBalance(): number {
        return this._balance;
    }
}