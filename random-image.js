// Tạo các phần tử DOM
const container = document.createElement("div");
container.className = "container";

const popup = document.createElement("div");
popup.className = "popup";

const popupContent = document.createElement("div");
popupContent.className = "popup-content";

const popupTitle = document.createElement("h2");
popupTitle.className = "popup-title";
popupTitle.textContent = "Awesome!";

const popupBody = document.createElement("p");
popupBody.className = "popup-body";
popupBody.textContent =
  "You just found my pastel gradient button.\nNow, let's see what else it does. :P";

// Gắn các phần tử vào DOM
popupContent.appendChild(popupTitle);
popupContent.appendChild(popupBody);
popup.appendChild(popupContent);
container.appendChild(popup);
document.body.appendChild(container);

// Áp dụng CSS bằng JavaScript
container.style.display = "flex";
container.style.webkitDisplay = "box";
container.style.mozDisplay = "box";
container.style.msDisplay = "flexbox";
container.style.webkitDisplay = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.alignContent = "center";
container.style.padding = "6%";
container.style.margin = "0";

popup.style.display = "flex";
popup.style.alignContent = "center";
popup.style.justifyContent = "center";
popup.style.backgroundColor = "#fff";
popup.style.borderRadius = "6px";
popup.style.padding = "3rem 2rem";
popup.style.boxShadow = "0 10px 40px -14px rgba(0,0,0,0.25)";
popup.style.textAlign = "center";

popupContent.style.display = "flex";
popupContent.style.flexWrap = "wrap";
popupContent.style.flexDirection = "column";

popupTitle.style.color = "#32325d";
popupTitle.style.fontSize = "1.8em";
popupTitle.style.lineHeight = "1.5em";
popupTitle.style.fontWeight = "900";
popupTitle.style.marginTop = "0";

popupBody.style.fontSize = "1.1em";
popupBody.style.lineHeight = "1.6em";
popupBody.style.color = "#6b7c93";
popupBody.style.fontWeight = "500";
popupBody.style.marginBottom = "2.1em";
popupBody.style.textAlign = "left";
