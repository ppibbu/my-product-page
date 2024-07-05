// scripts.js

function showDetail(imgSrc, title, description) {
    document.getElementById('modal-img').src = 'images/' + imgSrc;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 当用户点击模态框外部时关闭模态框
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
