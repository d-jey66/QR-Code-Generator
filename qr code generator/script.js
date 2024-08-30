window.onload = function() {
    const imgBox = document.getElementById('imgBox');
    const img = document.getElementById('img');
    const text = document.getElementById('url');
};

function generate() {
    const imgBox = document.getElementById('imgBox');
    const img = document.getElementById('img');
    const text = document.getElementById('url');

    if (text.value.trim().length > 0) {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
        imgBox.style.display = 'block';
        text.value = '';
    } else {
        alert('Please enter a URL');
        imgBox.style.display = 'none';
    }
}
