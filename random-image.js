// Tạo phần tử div cho popup
let popup = document.createElement("div");

// Thêm nội dung và thuộc tính CSS vào phần tử div
popup.innerHTML = `
  <div class="container">
    <div class="cookiesContent" id="cookiesPopup">
      <button class="close">✖</button>
      <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
      <p>We use cookies for improving user experience, analytics and marketing.</p>
      <button class="accept">That's fine!</button>
    </div>
  </div>
`;

// Gắn popup vào body của trang
document.body.appendChild(popup);

// Áp dụng CSS bằng JavaScript
popup.querySelector(".container").style.fontFamily = "Roboto, sans-serif";
popup.querySelector(".container").style.padding = "0";
popup.querySelector(".container").style.margin = "0";
popup.querySelector(".container").style.backgroundColor = "#f5f5f5";
popup.querySelector(".container").style.display = "flex";
popup.querySelector(".container").style.justifyContent = "center";
popup.querySelector(".container").style.alignItems = "center";
popup.querySelector(".container").style.height = "100vh";

popup.querySelector(".cookiesContent").style.width = "320px";
popup.querySelector(".cookiesContent").style.display = "flex";
popup.querySelector(".cookiesContent").style.flexDirection = "column";
popup.querySelector(".cookiesContent").style.alignItems = "center";
popup.querySelector(".cookiesContent").style.backgroundColor = "#fff";
popup.querySelector(".cookiesContent").style.color = "#000";
popup.querySelector(".cookiesContent").style.textAlign = "center";
popup.querySelector(".cookiesContent").style.borderRadius = "20px";
popup.querySelector(".cookiesContent").style.padding = "30px 30px 70px";

popup.querySelector(".close").style.width = "30px";
popup.querySelector(".close").style.fontSize = "20px";
popup.querySelector(".close").style.color = "#c0c5cb";
popup.querySelector(".close").style.alignSelf = "flex-end";
popup.querySelector(".close").style.backgroundColor = "transparent";
popup.querySelector(".close").style.border = "none";
popup.querySelector(".close").style.marginBottom = "10px";

popup.querySelector("img").style.width = "82px";
popup.querySelector("img").style.marginBottom = "15px";

popup.querySelector("p").style.marginBottom = "40px";
popup.querySelector("p").style.fontSize = "18px";

popup.querySelector(".accept").style.backgroundColor = "#ed6755";
popup.querySelector(".accept").style.border = "none";
popup.querySelector(".accept").style.borderRadius = "5px";
popup.querySelector(".accept").style.width = "200px";
popup.querySelector(".accept").style.padding = "14px";
popup.querySelector(".accept").style.fontSize = "16px";
popup.querySelector(".accept").style.color = "white";
popup.querySelector(".accept").style.boxShadow = "0px 6px 18px -5px rgba(237, 103, 85, 1)";

// Gán sự kiện click cho nút đóng
popup.querySelector(".close").addEventListener("click", function () {
    popup.style.display = "none"
});
