let obj = JSON.parse($response.body);

obj = {
  "sid_in" : [

  ],
  "uid" : "5ddsq7",
  "hide" : "1",
  "pay1" : "1632748503",
  "udate_num" : "10000",
  "pay2" : "1632748503",
  "upoints" : "10000",
  "udate" : "1628913540",
  "pay3" : "0"
}

$done({body: JSON.stringify(obj)});