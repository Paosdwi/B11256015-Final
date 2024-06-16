document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止連結的默認行為
            const destination = this.href;
            document.body.style.opacity = 0; // 觸發淡出
            setTimeout(() => {
                window.location.href = destination; // 在淡出後轉到新頁面
            }, 500); // 淡出動畫持續時間
        });
    });
});
document.getElementById('mainPhoto').addEventListener('click', function() {
    // 检查是否已放大
    if (this.classList.contains('zoomed')) {
        this.classList.remove('zoomed'); // 缩小
        this.style.transform = 'scale(1)';
    } else {
        this.classList.add('zoomed'); // 放大
        this.style.transform = 'scale(2)'; // 或任何适合的放大比例
    }
});
