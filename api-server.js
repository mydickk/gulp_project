var data = require('./mock/equiment');
var express = require('express');
var app = express();


// for (var i = 0; i < data.length; i++) {
// 	var res = data[i];
// 	switch(data[i].method)
// 	{
// 		case 'get':
// 			console.log(res)
// 			app.get(data[i].url, function (req, res) {
// 			  res.send(res);
// 			});
// 			break;
// 		case 'post':
// 			app.post(data[i].url, function (req, res) {
// 			  res.send(JSON.stringify(res));
// 			});
// 		  	break;
// 		case 'put':
// 			app.put(data[i].url, function (req, res) {
// 			  res.send(JSON.stringify(res));
// 			});
// 		 	break;
// 		case 'delete':
// 			app.delete(data[i].url, function (req, res) {
// 			  res.send(JSON.stringify(res));
// 			});
// 		 	break;
// 	}
// }

app.get('/equiment/get', function (req, res) {
   res.send('res');
 });

app.get('/equiment/post', function (req, res) {
   res.send('res');
 });


app.get("/equiment/indexAction", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send({
    "goods_id": "45",
    "name": "乒乓球拍",
    "price": "0.05",
    "sale_count": "15",
    "content": "<p style='text-align: center;width:100%'><img src='http://apps.source.qydw.net/1500370256.jpg' title='1500370256.jpg' alt='TB2HmUrXxtmpuFjSZFqXXbHFpXa_!!1049974789.jpg' style='text-align: center;width:100%;'/><br/></p><p style='text-align: center; width: 100%;''><img src='http://apps.source.qydw.net/1500371512.jpg' title='1500371512.jpg' alt='QQ截图20170718175128.jpg' style='width:100%'/></p>",
    "pic_list": [
        "http://apps.source.qydw.net/uploads/20170718/2017071500371543793624577300.jpg-wm",
        "http://apps.source.qydw.net/uploads/20170718/2017071500370066603918467642.jpg-wm",
        "http://apps.source.qydw.net/uploads/20170718/2017071500363561510400987465.jpg-wm",
        "http://apps.source.qydw.net/uploads/20170718/2017071500346968797732097608.png-wm"
    ],
    "group_info": {
        "group_id": "110",
        "start_time": "1500522720",
        "end_time": "1501041168",
        "group_price": "0.01",
        "group_count": "10",
        "is_group": "1",
        "group_join_count": "12"
    },
    "service_list": [
        {
            "id": "1",
            "title": "全场包邮",
            "remark": "全场商品包邮"
        },
        {
            "id": "2",
            "title": "支持退款",
            "remark": "商品发货之前支持全额退款"
        },
        {
            "id": "2",
            "title": "支持退款",
            "remark": "商品发货之前支持全额退款"
        },
        {
            "id": "2",
            "title": "支持退款",
            "remark": "商品发货之前支持全额退款"
        }
    ],
    "product_list": [
        {
            "pro_id": "140",
            "name": "乒乓球拍",
            "price": "0.01",
            "pic": "http://apps.source.qydw.net/uploads/20170718/2017071500347083528709473993.gif",
            "stock": "96",
            "group_price": "0.15",
            "spe_list": [
                "192",
                "193"
            ]
        },
        {
            "pro_id": "141",
            "name": "乒乓球拍加强版",
            "price": "0.01",
            "pic": "http://apps.source.qydw.net/uploads/20170718/2017071500347126033465872382.png",
            "stock": "99",
            "group_price": "0.01",
            "spe_list": [
                "194",
                "195"
            ]
        }
    ],
    "property_list": [
        {
            "name": "颜色",
            "list": [
                {
                    "cat_pro_value_id": "192",
                    "value": "蓝色"
                },
                {
                    "cat_pro_value_id": "194",
                    "value": "金色"
                }
            ]
        },
        {
            "name": "材质",
            "list": [
                {
                    "cat_pro_value_id": "193",
                    "value": "普通"
                },
                {
                    "cat_pro_value_id": "195",
                    "value": "加强"
                }
            ]
        }
    ],
    "property_pic": "http://apps.source.qydw.net/uploads/20170718/2017071500371543793624577300.jpg-th4NUlQ",
    "share_info": {
        "title": "乒乓球拍",
        "content": "乒乓球拍",
        "link": "http://m.qydw.net/equiment/index?id=45",
        "icon": ""
    }
});
});

app.get("/user/getDeliveryAddress", function (req, res) {
  res.send({
    	"status": "0000",
    	"msg": "success",
    	"data": {
        "lists": [
            {
                "delivery_id": "1",
                "consignee": "liujike",
                "mobile": "18102218037",
                "address": "北京市市辖区东城区科新路",
                "is_default": "1",
                "province": "110000",
                "city": "110100",
                "area": "110101",
                "province_city_area": "北京市市辖区东城区",
                "detail_address": "科新路"
            },
            {
                "delivery_id": "2",
                "consignee": "liujike",
                "mobile": "18102218037",
                "address": "北京市市辖区东城区科韵路10号",
                "is_default": "0",
                "province": "110000",
                "city": "110100",
                "area": "110101",
                "province_city_area": "北京市市辖区东城区",
                "detail_address": "科韵路10号"
            },
            {
                "delivery_id": "3",
                "consignee": "liujike",
                "mobile": "18102218037",
                "address": "北京市市辖区东城区科韵路10号",
                "is_default": "0",
                "province": "110000",
                "city": "110100",
                "area": "110101",
                "province_city_area": "北京市市辖区东城区",
                "detail_address": "科韵路10号"
            },
            {
                "delivery_id": "5",
                "consignee": "fdfdfds",
                "mobile": "18102218037",
                "address": "北京市市辖区东城区fdsaf",
                "is_default": "0",
                "province": "110000",
                "city": "110100",
                "area": "110101",
                "province_city_area": "北京市市辖区东城区",
                "detail_address": "fdsaf"
            }
        ]
	    }
	});
});


app.listen(3000);