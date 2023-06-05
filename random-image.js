// Tạo phần tử div cho popup
let popup = document.createElement("div");

// Thêm nội dung và thuộc tính CSS vào phần tử div
popup.innerHTML = `
  <div class="container-popup">
    <div class="cookiesContent" id="cookiesPopup">
      <button class="close-popup">✖</button>
      <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
      <p>We use cookies for improving user experience, analytics and marketing.</p>
      <button class="accept-popup">That's fine!</button>
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
popup.querySelector(".container-popup").style.border = "0.5px solid #808080";
popup.querySelector(".container-popup").style.borderRadius = "10px";




popup.querySelector(".cookiesContent").style.width = "320px";
popup.querySelector(".cookiesContent").style.display = "flex";
popup.querySelector(".cookiesContent").style.flexDirection = "column";
popup.querySelector(".cookiesContent").style.alignItems = "center";
popup.querySelector(".cookiesContent").style.backgroundColor = "#fff";
popup.querySelector(".cookiesContent").style.color = "#000";
popup.querySelector(".cookiesContent").style.textAlign = "center";
popup.querySelector(".cookiesContent").style.borderRadius = "20px";
popup.querySelector(".cookiesContent").style.padding = "30px 30px 70px";

popup.querySelector(".close-popup").style.width = "30px";
popup.querySelector(".close-popup").style.fontSize = "20px";
popup.querySelector(".close-popup").style.color = "#c0c5cb";
popup.querySelector(".close-popup").style.alignSelf = "flex-end";
popup.querySelector(".close-popup").style.backgroundColor = "transparent";
popup.querySelector(".close-popup").style.border = "none";
popup.querySelector(".close-popup").style.marginBottom = "10px";

popup.querySelector("img").style.width = "82px";
popup.querySelector("img").style.marginBottom = "15px";

popup.querySelector("p").style.marginBottom = "40px";
popup.querySelector("p").style.fontSize = "18px";

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
