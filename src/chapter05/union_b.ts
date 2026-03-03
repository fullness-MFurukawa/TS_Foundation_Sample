type Key = string | number;

function printKey(val: Key) {
    if (typeof val === "string") {
        // ここで引数valは確実にstringとみなされる（絞り込み）
        console.log(val.toUpperCase()); 
    } else {
        // ここで引数valは確実にnumberとみなされる
        console.log(val.toFixed(0));
    }
}