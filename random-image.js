function getRandomString() {
  const strings = [s1, s2, s3];
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

// Sử dụng hàm để lấy chuỗi ngẫu nhiên
const randomString = getRandomString();

console.log(randomString); // In chuỗi ngẫu nhiên ra màn hình console
