/**
 * 5-2.クラス宣言
 * ゲームキャラクターを表現する
 */
export class Character {
    // 名前を表すプロパティ(読取り専用)
    readonly name: string = "名無し";
    // 体力を表すプロパティ
    hp: number = 100;
    // 技の一覧を表すプロパティ
    skills: string[] = [];

    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     */
    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = hp;
    }

    /**
     * 自己紹介をするメソッド
     */
    introduce(): void {
        console.log(`私は ${this.name}。体力は残り ${this.hp} です。`);
    }

    /**
     * ダメージを受けるメソッド
     * @param damage ダメージ
     */
    takeDamage(damage: number): void {
        this.hp -= damage; // 自分のHPを減らす
        if (this.hp < 0) this.hp = 0;
        console.log(`${this.name} は ${damage} のダメージを受けた！`);
    }
}   