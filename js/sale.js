let info_item = [{
    name: 'Giày Thể Thao XSPORT Adidas V19',
    old_price: "2.000.000 đ",
    new_price: "1.000.000",
    src: '../img/sản phẩm 1.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Nike Air Force 1 Full SF',
    old_price: " 8.000.000 đ",
    new_price: "5.000.000",
    src: '../img/sản phẩm 2.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Adidas Alphabounce',
    old_price: "5.000.000 đ",
    new_price: "4.000.000",
    src: '../img/sản phẩm 3.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Adidas XPLR Rep',
    old_price: "4.000.000 đ",
    new_price: "3.000.000",
    src: '../img/sản phẩm 4.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Adidas Yeezy 700 V2 F1',
    old_price: "35.000.000 đ",
    new_price: "32.000.000",
    src: '../img/sản phẩm 5.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Beyond 2019',
    old_price: "10.000.000 đ",
    new_price: "9.000.000",
    src: '../img/sản phẩm 6.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Nike Air Jordan 1 F1',
    old_price: " 75.000.000 đ",
    new_price: "71.000.000",
    src: '../img/sản phẩm 7.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Adidas Yeezy boost',
    old_price: "1.500.000 đ",
    new_price: "1.000.000",
    src: '../img/sản phẩm 8.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Gucci Sneaker Rhyton',
    old_price: "150.000đ",
    new_price: "100.000",
    data_newprice: "1-5",
    data_kindofitem: "fake",
    data_firm: "other",
    src: '../img/sản phẩm 9.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Nike Air Jordan 1 F1',
    old_price: "600.000đ",
    new_price: "400.000",
    data_newprice: "1-5",
    data_kindofitem: "fake",
    data_firm: "other",
    src: '../img/sản phẩm 10.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Nike Superstar A76',
    old_price: "5.000.000đ",
    new_price: "4.000.000",
    data_newprice: "15-50",
    data_kindofitem: "auth",
    data_firm: "nike",
    src: '../img/sản phẩm 11.jpg'
},

{
    name: 'Giày Thể Thao Adidas Superstar Trắng mũi sò SF',
    old_price: "2.000.000đ",
    new_price: "1.500.000",
    data_newprice: "5-15",
    data_kindofitem: "rep",
    data_firm: "adidas",
    src: '../img/sản phẩm 12.jpg'
},



];














let a = '';
for (i = 0; i < info_item.length; i++) {

a += ` 
<div class="col-lg-3 col-md-4 col-sm-6 sanpham">
    <div class="product">
        <div class="imgbox">
        <a href="item.html"><img src="${info_item[i].src}" alt=""></a>

            <div class="details">
                <a data-toggle="modal" data-target="#exampleModal${i}">Xem Nhanh</a>
                <a href="item.html">Mua Ngay</a>
            </div>
        </div>

        <div class="info">
            <div style="padding-bottom: 15px">
                <h4>${info_item[i].name}</h4> 
                <div class="price_old">${info_item[i].old_price}</div>
                <div class="price_new">${info_item[i].new_price}</div>

            </div>
        </div>
    </div>
</div>

`
}

document.getElementById('newitem').innerHTML = a;
document.getElementById('hotitem').innerHTML = a;


let gallery = '';
for (i = 0; i < info_item.length; i++) {

gallery += `
<div class="col-lg-3 col-md-4 col-sm-6 sanpham">
    <div class="product">
        <div class="imgbox">
        <a href="item.html"><img src="${info_item[i].src}" alt=""></a>

            <div class="details">
                <a data-toggle="modal" data-target="#exampleModal${i}">Xem Nhanh</a>
                <a href="item.html">Mua Ngay</a>
            </div>
        </div>

        <div class="info">
            <div style="padding-bottom: 15px">
                <h4>${info_item[i].name}</h4> 
                <div class="price_old">${info_item[i].old_price}</div>
                <div class="price_new">${info_item[i].new_price}</div>

            </div>
        </div>
    </div>
</div>`
}

function load() {
document.getElementById("other_item").innerHTML = gallery;

$("#e").remove();
}





// Modal info item



let modal_info_item = '';
for (i = 0; i < 12; i++) {
modal_info_item += ` <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Chi Tiết Sản Phẩm</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-sm-6">
                    <img src="../img/sản phẩm ${i+1}.jpg" alt="">
                </div>
                <div class="col-sm-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <span>Chọn Size</span><br>
                    <select name="" id="" style="margin-bottom:12px">

                        <option value="" selected disabled>Chọn Size</option>
                        <option value="price_up">36</option>
                        <option value="price_down">37</option>
                        <option value="price_up">38</option>
                        <option value="price_down">39</option>
                        <option value="price_up">40</option>
                        <option value="price_down">41</option>
                        <option value="price_up">42</option>

                    </select>
                    <br>

                    <span>Chọn Số Lượng</span><br>
                    <input type="number" value="1" min="1" style="max-width:150px;margin-bottom:12px">

                    <button id="btn2">Thêm Vào Giỏ</button>
                </div>
            </div>
        </div>

    </div>
</div>
</div>`
}

document.getElementById('modal').innerHTML = modal_info_item;
