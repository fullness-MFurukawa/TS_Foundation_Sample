// 基本的なUnion型
type ID = string | number;

let userId: ID;
userId = "A-100"; // OK
userId = 12345;   // OK
// userId = true; // エラー（booleanは許可されていない）

// オブジェクトのUnion型（実務で多用）
type Success = { status: "ok"; data: string };
type Failure = { status: "error"; message: string };

type Result = Success | Failure; // 「成功」または「失敗」のどちらか