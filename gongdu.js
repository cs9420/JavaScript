let obj = JSON.parse($response.body);

obj = {
  "mes" : "领取成功",
  "num" : 10000
}

$done({body: JSON.stringify(obj)});