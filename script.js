/* Năm ở chân trang tự cập nhật */
document.getElementById("year").textContent = new Date().getFullYear();

/* Bấm vào ảnh trong mục Hình ảnh để phóng to */
var box = document.getElementById("lightbox");
var big = box.querySelector("img");

document.querySelectorAll(".gallery a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (!box.showModal) return;          /* trình duyệt cũ: mở ảnh bình thường */
    e.preventDefault();
    big.src = link.href;
    big.alt = link.querySelector("img").alt;
    box.showModal();
  });
});

box.addEventListener("click", function () { box.close(); });
