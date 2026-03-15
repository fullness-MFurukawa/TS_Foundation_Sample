import type { Employee } from "./chapter06/Employee.js";

/**
 * Record<K, T> で新しい型を作成
 * 用途：従業員ID（文字列）をキーとして、従業員データ（Employee）を素早く検索できる辞書を作る
 */
type EmployeeMap = Record<string, Employee>;

// データベースから取得したデータを、検索しやすい辞書（マップ）形式で保持するイメージ
const employeesCache: EmployeeMap = {
    "E001": { 
        id: "E001", 
        name: "田中 太郎", 
        age: 30, 
        department: { id: "D01", name: "総務部" } 
    },
    "E002": { 
        id: "E002", 
        name: "鈴木 花子", 
        age: 25, 
        department: { id: "D02", name: "開発部" } 
    }
};

// IDを指定して従業員データを一瞬で検索する関数
function findEmployee(id: string) {
    // 辞書からキー(ID)を使って直接データを取り出す
    const emp = employeesCache[id];
    
    if (emp) {
        console.log(`✅ 見つかりました: [${emp.id}] ${emp.name} さん（${emp.department.name}）`);
    } else {
        console.log(`❌ ${id} の従業員は見つかりませんでした。`);
    }
}

// 検索の実行
findEmployee("E001");
findEmployee("E999"); // 存在しないID