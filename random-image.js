// Định nghĩa các chuỗi s1, s2, s3
var s1 = "Chuỗi 1";
var s2 = "Chuỗi 2";
var s3 = "Chuỗi 3";

// Hàm trả về một chuỗi ngẫu nhiên từ s1, s2, s3
function getRandomString() {
  const strings = [s1, s2, s3];
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

// Gọi hàm để lấy chuỗi ngẫu nhiên
const randomString = getRandomString();

// In chuỗi ngẫu nhiên ra màn hình
console.log(randomString);
