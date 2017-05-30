var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started');
});

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var images = [
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_1-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_2-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_4-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_7-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_8-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_13-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_10-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_11-550.jpg",
    "http://media.van.vn/Thumbnail/XXL/ContentUpload//hungvv/tu_van/diem_danh_13_dien_thoai_thong_minh_tot_nhat_tren_the_gioi_3-550.jpg",
    "http://file.vforum.vn/hinh/2016/01/ccnwxg.jpg",
    "http://file.vforum.vn/hinh/2016/01/ccnwxr.jpg",
    "http://file.vforum.vn/hinh/2016/01/cco5og.jpg",
    "http://file.vforum.vn/hinh/2016/01/ccnuhx.jpg",
    "http://file.vforum.vn/hinh/2016/01/cco5oy.jpg",
    "http://file.vforum.vn/hinh/2016/01/cco1i5.jpg",
    "http://file.vforum.vn/hinh/2016/01/ccnwxv.jpg",
    "http://image.24h.com.vn/upload/4-2016/images/2016-12-21/1482307814-14823075738048-30.jpg",
    "http://image.24h.com.vn/upload/4-2016/images/2016-12-21/1482307814-14823075731581-32.jpg",
    "http://image.24h.com.vn/upload/4-2016/images/2016-12-21/1482307815-148230757369331-33.jpg",
    "http://image.24h.com.vn/upload/4-2016/images/2016-12-21/1482307815-148230757389480-34.jpg",
];

var products = [
    "SamSung Galaxy S6",
    "Passport BlackBerry",
    "Lumia 830",
    "iPhone 5S",
    "LG G4",
    "iPhone 6",
    "Samsung Galaxy Note 4",
    "Samsung Galaxy S6 Edge"
    "BlackBerry Classic",
    "Lumia 950 XL",
    "Motorola Pure",
    "HTC One A9",
    "Honor 7",
    "LG V10",
    "OnePlus X",
    "Nexus 5X",
    "Samsung Galaxy J5 Prime",
    "Oppo A39",
    "HTC Desire 628",
    "Asus ZenPhone 3 Max",
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = [];
for (var i = 1; i <= images.length; i++) {
    arr.push({
        id: i,
        name: products[i - 1],
        price: 100000 * i,
        image: images[i - 1],
        description: "Chưa có mô tả",
        cateId: getRandomInt(1, products.length)
    });
}

app.get('/product/:minID', function (req, res) {
    setTimeout(function () {
        var minID = parseInt(req.params.minID - 1) * 5;
        var maxID = minID + 5;
        var result = arr.filter(function (e, i) {
            return (i >= minID) && (i <= maxID);
        });
        res.send(result);
    }, 2000);
});

app.get('/api/product/:minID', function (req, res) {
    var minID = parseInt(req.params.minID - 1) * 5;
    var maxID = minID + 5;
    var result = arr.filter(function (e, i) {
        return (i >= minID) && (i <= maxID);
    });
    res.send(result);
});


// Return all cate
var cates = [
    "Điện thoại",
    "Máy tính"
];
var cateImages = [
    "http://www.freeiconspng.com/uploads/iphone-icon--mac-iconset--archigraphs-32.png",
    "http://www.freeiconspng.com/uploads/laptop-icon-9.png"
];

var arrCate = [];
for (var j = 1; j <= cates.length; j++) {
    arrCate.push({cateId: j, cateName: cates[j - 1], cateImage: cateImages[j - 1]});
}

app.get('/api/cates', function (req, res) {
    res.send(arrCate);
});

app.get('/api/products', function (req, res) {
    res.send(arr);
});







