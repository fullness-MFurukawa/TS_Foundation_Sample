/**
 * 制約用のインターフェイス
 *  price(価格)を持っていること
 */
export interface HasPrice {
    price: number;
}

/**
 * extendsで制約をかけたジェネリクス関数
 * 価格を持つ商品なら何でも受け取り、割引をして元の型のまま返す
 */
export function applyDiscount<T extends HasPrice>(item: T, discountRate: number): T {
    // T は必ず price を持っているので、安全に計算できる
    item.price = item.price * (1 - discountRate);
    // 計算後、元のオブジェクトをそのまま返す
    return item;
}