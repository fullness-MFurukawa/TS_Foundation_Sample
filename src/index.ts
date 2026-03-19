import { applyDiscount } from "./chapter06/HasPrice.js";
import type { Appliance, Book } from "./chapter06/Products.js";

const myBook: Book = { title: "TypeScript入門", price: 3000, author: "山田 太郎" };
const myAppliance: Appliance = { name: "ドライヤー", price: 5000, warrantyPeriod: 1 };

// ==========================================
// 割引を実行
// ==========================================

// ✅ 本を 20% オフにする
// 戻り値は「Book型」のまま返ってくる！
const discountedBook = applyDiscount(myBook, 0.2);

console.log(`📚 ${discountedBook.title} が ${discountedBook.price}円 になりました。`);
// 💡 Book型のままなので、本特有の author にもエラーなしでアクセスできる！
console.log(`（著者: ${discountedBook.author}）`);

// ✅ 家電を 10% オフにする
const discountedAppliance = applyDiscount(myAppliance, 0.1);
console.log(`🔌 ${discountedAppliance.name} が ${discountedAppliance.price}円 になりました。`);