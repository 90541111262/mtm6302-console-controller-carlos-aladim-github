document.addEventListener('DOMContentLoaded', function() {
    const bgColorInput = document.getElementById('bg-color');
    const textColorInput = document.getElementById('text-color');
    const fontSizeInput = document.getElementById('font-size');

    bgColorInput.addEventListener('input', function() {
        document.body.style.backgroundColor = bgColorInput.value;
    });

    textColorInput.addEventListener('input', function() {
        document.body.style.color = textColorInput.value;
    });

    fontSizeInput.addEventListener('input', function() {
        document.body.style.fontSize = fontSizeInput.value + 'px';
    });
});
