var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000, function () {
    console.log('Server started');
});

var images = [
    "https://media.foody.vn/res/g17/169399/prof/s480x300/foody-mobile-lau-cua-khoi-jpg-205-636229387604727065.jpg",
    "https://media.foody.vn/res/g27/261032/prof/s480x300/foody-mobile-mi-gia-jpg-865-636304474626002308.jpg",
    "https://media.foody.vn/res/g10/97518/prof/s480x300/foody-mobile-cr-hp-jpg-396-636283668826118715.jpg",
    "https://media.foody.vn/res/g15/145394/prof/s480x300/foody-mobile-chago-jpg-842-635761777666543784.jpg",
    "https://media.foody.vn/res/g12/117809/prof/s480x300/foody-mobile-nom1-jpg-295-635860472691593140.jpg",
    "https://media.foody.vn/res/g23/225646/prof/s480x300/foody-mobile-jpg6d52be3899dce94f3-199-636311561679474647.jpg",
    "https://media.foody.vn/res/g66/659068/prof/s480x300/foody-mobile-1343-jpg-138-636304551083977293.jpg",
    "https://media.foody.vn/res/g14/139131/prof/s480x300/foody-mobile-oc3-jpg-785-635748845934075566.jpg",
    "https://media.foody.vn/res/g12/117880/prof/s480x300/foody-mobile-koh-jpg-749-636197529514942659.jpg",
    "https://media.foody.vn/res/g20/198641/prof/s480x300/foody-mobile-minh-phat-jpg-345-636109311725011900.jpg",
    "https://media.foody.vn/res/g1/9921/prof/s480x300/foody-mobile-tra-jpg-314-635938225731161297.jpg",
    "https://media.foody.vn/res/g64/633155/prof/s480x300/foody-mobile-quang-jpg-912-636223395740450730.jpg",
    "https://media.foody.vn/res/g10/99240/prof/s480x300/foody-mobile-c1-jpg-740-635772132567207699.jpg",
    "https://media.foody.vn/res/g8/72805/prof/s480x300/foody-mobile-br-chi-jpg-780-635881901173989629.jpg"
];

var products = [
    "Cam",
    "Quýt",
    "Mận",
    "Đào",
    "Táo",
    "Lê",
    "Dứa",
    "Dưa hấu",
    "Đu đủ",
    "Xoài",
    "Mía",
    "Vải",
    "Nhãn",
    "Hồng",
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = [];
for (var i = 1; i <= images.length; i++) {
    arr.push({
        id: i,
        name: products[i],
        price: 100000 * i,
        image: images[i],
        description: "Chưa có mô tả",
        cateId: getRandomInt(1, products.length)
    });
}

app.get('/product/:minID', function (req, res) {
    setTimeout(function () {
        var minID = parseInt(req.params.minID) * 5;
        var maxID = minID + 5;
        var result = arr.filter(function (e, i) {
            return (i >= minID) && (i <= maxID);
        });
        res.send(result);
    }, 3000);
});

app.get('/api/product/:minID', function (req, res) {
    var minID = parseInt(req.params.minID) * 5;
    var maxID = minID + 5;
    var result = arr.filter(function (e, i) {
        return (i >= minID) && (i <= maxID);
    });
    res.send(result);
});


// Return all cate
var cates = [
    "Máy tính",
    "Điện thoại",
    "Ti vi",
    "Điều hoà",
    "Máy giặt",
    "Máy rửa bát",
    "Phụ kiện",
];

var arrCate = [];
for (var j = 1; j <= cates.length; j++) {
    arrCate.push({cateId: j, cateName: cates[j], cateImage: images[j]});
}

app.get('/api/cates', function (req, res) {
    res.send(arrCate);
});

app.get('/api/products', function (req, res) {
    res.send(arr);
});







