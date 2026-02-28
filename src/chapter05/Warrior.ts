import { Character } from "./Character.js";
/**
 * 5-3. クラスの継承
 * 戦士を表すクラス
 */
export class Warrior extends Character{
    // 武器を表すプロパティ
    private _weapon: string;

    /**
     * コンストラクタ
     * @param name 名前
     * @param hp 体力
     * @param weapon 武器
     */
    constructor(name: string, hp: number, weapon: string) {
        // 親クラスのコンストラクタを呼び出して、親の部分を完成させる
        super(name, hp); 
        // 子クラス独自の初期化を行う
        this._weapon = weapon; 
    }

    /**
     * 親クラスのattack()メソッドを戦士専用に書き換える
     */
    public override attack(): void {
        console.log(`${this._weapon}を使って攻撃した!`);
    }        
}