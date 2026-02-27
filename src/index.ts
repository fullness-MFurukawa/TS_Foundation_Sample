import { Character } from "./chapter05/Character.js";

/**
 * インスタンスの生成例
 */
// 1. 勇者という「実体」を作る
const hero = new Character("勇者", 100);

// 2. 魔王という「別の実体」を作る
const boss = new Character("魔王", 500);

// それぞれ独立しているので、片方のHPが減っても、もう片方には影響しない
hero.takeDamage(20);
console.log(hero.hp); // 80
console.log(boss.hp); // 500 (魔王は無傷！)