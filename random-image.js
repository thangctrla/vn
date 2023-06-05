// Tạo một phần tử div mới cho popup
let popup = document.createElement("div");

// Thêm nội dung và thuộc tính CSS vào phần tử div
popup.innerHTML = "<h1>Today's date is " + new Date() + "</h1>";
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
popup.style.color = "white";
popup.style.padding = "20px";
popup.style.borderRadius = "10px";
popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
popup.style.zIndex = "9999";

// Tạo một phần tử button cho nút "Close"
let closeButton = document.createElement("button");
closeButton.innerHTML = "Close";
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";
closeButton.style.backgroundColor = "transparent";
closeButton.style.color = "white";
closeButton.style.border = "none";
closeButton.style.cursor = "pointer";

// Xử lý sự kiện khi người dùng nhấp vào nút "Close"
closeButton.addEventListener("click", function() {
  document.body.removeChild(popup);
});

// Gắn nút "Close" vào phần tử div
popup.appendChild(closeButton);

// Gắn phần tử div vào body của trang web
document.body.appendChild(popup);
