let info_item = [{
    name: ' Giày Thể Thao XSPORT S REP',
    old_price: "",
    new_price: "1.000.000",
    src: 'img/sản phẩm 1.jpg'
},

{
    name: 'Giày Thể Thao Adidas',
    old_price: "",
    new_price: "5.000.000",
    src: 'img/sản phẩm 2.jpg'
},

{
    name: 'Giày Thể Thao Vans Old Skool',
    old_price: "",
    new_price: "4.000.000",
    src: 'img/sản phẩm 3.jpg'
},

{
    name: 'Giày Thể Thao XSPORT Yeezy',
    old_price: "",
    new_price: "3.000.000",
    src: 'img/sản phẩm 4.jpg'
},

{
    name: 'Giày Thể Thao XSPORT 1098',
    old_price: "",
    new_price: "32.000.000",
    src: 'img/sản phẩm 5.jpg'
},

{
    name: 'Giày Thể Thao Prophere 4',
    old_price: "",
    new_price: "9.000.000",
    src: 'img/sản phẩm 6.jpg'
},

{
    name: 'Giày Thể Thao Nike Air Max 97',
    old_price: "",
    new_price: "1.000.000",
    src: 'img/sản phẩm 7.jpg'
},

{
    name: 'Giày Thể Thao Prophere Rep',
    old_price: "",
    new_price: "1.000.000",
    src: 'img/sản phẩm 8.jpg'
},

{
    name: 'Giày Thể Thao Converse 1970',
    old_price: "",
    new_price: "100.000",
    data_newprice: "1-5",
    data_kindofitem: "fake",
    data_firm: "other",
    src: 'img/sản phẩm 9.jpg'
},

{
    name: 'Giày Thể Thao Puma Sneaker',
    old_price: "",
    new_price: "400.000",
    data_newprice: "1-5",
    data_kindofitem: "fake",
    data_firm: "other",
    src: 'img/sản phẩm 10.jpg'
},

{
    name: 'Giày Thể Thao XSPORT 1908',
    old_price: "",
    new_price: "4.000.000",
    data_newprice: "15-50",
    data_kindofitem: "auth",
    data_firm: "nike",
    src: 'img/sản phẩm 11.jpg'
},

{
    name: 'Giày Thể Thao XSPORT 19178',
    old_price: "",
    new_price: "1.500.000",
    data_newprice: "5-15",
    data_kindofitem: "rep",
    data_firm: "adidas",
    src: 'img/sản phẩm 12.jpg'
},



];














let a = '';
for (i = 0; i < info_item.length; i++) {

a += ` 
    <div class="col-lg-3 col-md-4 col-sm-6 sanpham" >
        <div class="product">
            <div class="imgbox">
            <a href="html/item.html"><img src="${info_item[i].src}" alt=""></a>

                <div class="details">
                    <a data-toggle="modal" data-target="#exampleModal${i}">Xem Nhanh</a>
                    <a href="html/item.html">Mua Ngay</a>
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


let b = '';
for (i = 0; i < 1; i++) {
b += `<div id="comment" style="padding: 0.7rem">
<div id="comment_1" style="width:5rem; left:50%; transform: translate(-50%)">
  <img src="img/chandung.png" alt="">
</div>
<div id="comment_2">
<br />
  <p>Mình mua giày ở shop cũng được 1 tuần, thấy các mẫu giày rất đẹp độc lạ,giá cả thì khỏi bàn rất phù hợp với mọi người , 
  nhân viên nhiệt tình tư vấn, chu đáo , đón tiếp niềm nở .Mua đúng dịp giảm giá sâu và có quá nhiều ưu đãi  thế là mình xách
   hẳn 2 đôi :)) . Chất lượng quá tuyệt các bạn ghé shop mua nhé.
  </p>
</div>
</div>`
}
for (i = 0; i < 1; i++) {
b += `<div id="comment" style="padding: 0.7rem">
<div id="comment_1" style="width:5rem; left:50%; transform: translate(-50%)">
  <img src="img/chandung.png" alt="">
</div>
<div id="comment_2">
<br />
  <p>Mình mới mua 1 đôi CONVERSE kiểu dáng không cầu kỳ mà rất thanh lịch, đơn giản và nhẹ nhàng. Phù hợp với nhiều loại trang phục. 
  Thiết kế với phong cách thể thao, cá tính, mạnh mẽ. Chất liệu vải cao cấp, màu sắc đa dạng, bền đẹp. 
   Mang đến cảm giác thoải mái rất đáng để các bạn mua..</p>
</div>
</div>`
}
for (i = 0; i < 1; i++) {
b += `<div id="comment" style="padding: 0.7rem">
<div id="comment_1" style="width:5rem; left:50%; transform: translate(-50%)">
  <img src="img/chandung.png" alt="">
</div>
<div id="comment_2">
<br />
  <p>
    Phải nói giày ở đây quá tuyệt vời các bạn ạ , mình mua 1 đôi ở đây gần 1 năm mà vẫn rất là okie , giày đi rất tốt, không bị hư hỏng gì
    mặc dù đôi này mình mua với giá khá thấp với lại còn khuyến mãi nữa, hi vọng đôi này hư nhanh nhanh để đến cơ sở mua 1 đôi nữa mà nghe chừng
    khó vì đi mãi có thấy hư hỏng đâu :((.
  </p>
</div>
</div>`
}
document.getElementById('main_4_1').innerHTML = b;


let c = '';
for (i = 0; i < 3; i++) {
c += `<div id="news" style="padding: 0.7rem">

<div id="news_1">
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</div>`
}

document.getElementById('main_5_1').innerHTML = c;





let modal_info_item='';
for(i=0;i<12;i++){
modal_info_item+=` <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <img src="img/sản phẩm ${i+1}.jpg" alt="">
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









// Carousel 
$('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
nav: true,
autoplay: true,
responsive: {
    0: {
        items: 1
    },
    600: {
        items: 2
    },
    900: {
        items: 3
    }
}
});

// 














