import type { Timer } from "./Timer.js";

/**
 * キチンタイマーを表す型
 */
export const kitchenTimer: Timer = {
    id: "T-01",
    seconds: 180,
    start() {
        console.log("計測を開始します...");
    },
    stop(force) {
        console.log("停止しました。");
        return true;
    }
};