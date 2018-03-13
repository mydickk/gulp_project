module.exports =[
{
	method:"get",
	url:"/user/getDeliveryAddress",
	data:{
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
	}
},
{
	method:"post",
	url:"/user/addDeliverAddress",
	data:{
	    "status": "0000",
	    "msg": "success",
	    "data": {
	    }
	}
},
{
	method:"get",
	url:"/equiment/getGoodsData",
	data:{
	    "status": "0000",
	    "msg": "success",
	    "data": {
	    }
	}
}
]