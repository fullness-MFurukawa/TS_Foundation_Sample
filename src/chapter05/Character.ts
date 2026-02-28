/**
 * 5-3. アクセス修飾子
 * カプセル化を適用したゲームキャラクタークラス
 */
export class Character {
    
    /**
     * 内部保持用の変数名は慣習に従い「_」を付ける
     */
    // 名前を表すプロパティ(読取り専用)
    private _name: string  = "名無し";
    // 体力を表すプロパティ
    private _hp: number = 100;
    // 技の一覧を表すプロパティ
    private _skills: string[] = [];

    /**
     * _nameのゲッター
     */
    get name(): string {
        return this._name;
    }

    /**
     * _hpのゲッター
     */
    get hp(): number {
        return this._hp;
    }

    /**
     * _hpのセッター
     */
    set hp(value: number) {
        // セッターの中で値のチェックを行う
        if (value < 0) {
            this._hp = 0;
        } else {
            this._hp = value;
        }
    }

    /**
     * _skillsのゲッター
     */
    get skills(): string[] {
        return this._skills;
    }

    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     */
    constructor(name: string, hp: number) {
        this._name = name;
        this._hp = hp;
    }

    /**
     * 自己紹介をするメソッド
     */
    introduce(): void {
        console.log(`私は ${this._name}。体力は残り ${this._hp} です。`);
    }

    /**
     * ダメージを受けるメソッド
     * @param damage ダメージ
     */
    takeDamage(damage: number): void {
        this._hp -= damage; // 自分のHPを減らす
        if (this._hp < 0) this._hp = 0;
        console.log(`${this._name} は ${damage} のダメージを受けた！`);
    }
}   