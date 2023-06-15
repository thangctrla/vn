// Tạo phần tử div cho popup
let popup = document.createElement("div");

// Thêm nội dung và thuộc tính CSS vào phần tử div
popup.innerHTML = `
  <div class="container-popup">
    <div class="cookiesContent" id="cookiesPopup">
      <button class="close-popup">✖</button>
      <img src="https://thangctrla.github.io/vn/maneki-neko.png" alt="cookies-img" />
      <span>
      <b>Dịch vụ giao hàng</b>
   
    <p>
    Từ 0 => 50k: <b>Miễn phí 1.2km</b>
    <br>Mỗi 50k giá trị đơn hàng tiếp theo <b>miễn phí thêm</b> 1.0km
    <br>
    <span  class="note-popup">* Với km tiếp theo cửa hàng sẽ phụ thu 5k/1km</span>
    </p>

    
    <p>Tính từ <a href="https://goo.gl/maps/z989yV79G56UA3D99">nhà văn hoá tổ dân phố 21</a>
   
    
    <br>
    Ship tối thiểu: 30k</p>
    </span><button class="accept-popup">Đồng ý</button>
    </div>
  </div>
`;

// Gắn popup vào body của trang
document.body.appendChild(popup);

// Áp dụng CSS bằng JavaScript
popup.querySelector(".container-popup").style.position = "fixed";
popup.querySelector(".container-popup").style.top = "50%";
popup.querySelector(".container-popup").style.left = "50%";
popup.querySelector(".container-popup").style.transform = "translate(-50%, -50%)";
popup.querySelector(".container-popup").style.zIndex = "9999";





popup.querySelector(".cookiesContent").style.border = "0.5px solid #808080";
popup.querySelector(".cookiesContent").style.width = "320px";
popup.querySelector(".cookiesContent").style.display = "flex";
popup.querySelector(".cookiesContent").style.flexDirection = "column";
popup.querySelector(".cookiesContent").style.alignItems = "center";
popup.querySelector(".cookiesContent").style.backgroundColor = "#fff";
popup.querySelector(".cookiesContent").style.color = "#000";
popup.querySelector(".cookiesContent").style.textAlign = "center";
popup.querySelector(".cookiesContent").style.borderRadius = "20px";
popup.querySelector(".cookiesContent").style.padding = "30px 30px";

popup.querySelector(".close-popup").style.width = "30px";
popup.querySelector(".close-popup").style.fontSize = "20px";
popup.querySelector(".close-popup").style.color = "#c0c5cb";
popup.querySelector(".close-popup").style.alignSelf = "flex-end";
popup.querySelector(".close-popup").style.backgroundColor = "transparent";
popup.querySelector(".close-popup").style.border = "none";
popup.querySelector(".close-popup").style.marginBottom = "10px";


popup.querySelector(".note-popup").style.fontSize = "10px";
popup.querySelector(".note-popup").style.color = "#838878";




popup.querySelector("img").style.width = "82px";
popup.querySelector("img").style.marginBottom = "15px";

popup.querySelector("b").style.fontSize = "25px";
popup.querySelector("a").style.textDecoration = "none";
popup.querySelector("a").style.color = "#ff070b";




popup.querySelector("p").style.marginBottom = "10px";
popup.querySelector("p").style.fontSize = "18px";
popup.querySelector("p").style.lineHeight = "30px";
popup.querySelector(".accept-popup").style.backgroundColor = "#ed6755";
popup.querySelector(".accept-popup").style.border = "none";
popup.querySelector(".accept-popup").style.borderRadius = "5px";
popup.querySelector(".accept-popup").style.width = "200px";
popup.querySelector(".accept-popup").style.padding = "14px";
popup.querySelector(".accept-popup").style.fontSize = "16px";
popup.querySelector(".accept-popup").style.color = "white";
popup.querySelector(".accept-popup").style.boxShadow = "0px 6px 18px -5px rgba(237, 103, 85, 1)";

// Gán sự kiện click cho nút đóng
popup.querySelector(".close-popup").addEventListener("click", function () {
  popup.style.display = "none"
});
// Gán sự kiện click cho nút đóng
popup.querySelector(".accept-popup").addEventListener("click", function () {
  popup.style.display = "none"
});
