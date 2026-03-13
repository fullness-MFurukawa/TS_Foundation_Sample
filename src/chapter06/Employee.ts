import type { Department } from "./Department.js";

/**
 * 6-3.Utitity Types
 * 従業員を表すインターフェイス
 */
export interface Employee {
    // 従業員Idプロパティ
    id: string;  
    // 従業員名プロパティ
    name: string;
    // 年齢プロパティ
    age: number;
    // 所属部署プロパティ
    department: Department;
}