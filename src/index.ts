interface User { id: number; name: string; isActive: boolean; }
const responseJson = '{"id":1,"name":"Taro","isActive":true}';

// ✅ パース時にUser 型であると型アサーション(as)で明示する
const user = JSON.parse(responseJson) as User;

// User型として認識されるため、安全にアクセスできる（エディタの補完も効く！）
console.log(user.name);