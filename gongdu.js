let obj = JSON.parse($response.body);

obj = {
  "mes" : "领取成功",
  "num" : 1000
}

$done({body: JSON.stringify(obj)});