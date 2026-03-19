
/**
 * 本を著すインターフェイス
 */
export interface Book {
    title: string;
    price: number;
    author: string; // 本だけの特有プロパティ
}

/**
 * 家電を表すインターフェイス
 */
export interface Appliance {
    name: string;
    price: number;
    warrantyPeriod: number; // 家電だけの特有プロパティ
}

const myBook: Book = { title: "TypeScript入門", price: 3000, author: "山田 太郎" };
const myAppliance: Appliance = { name: "ドライヤー", price: 5000, warrantyPeriod: 1 };