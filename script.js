document.getElementById('searchBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const loadingText = document.getElementById('loadingText');
    const resultContainer = document.getElementById('resultContainer');

    if (userInput.trim() === "") {
        alert("الرجاء إدخال سؤال أولاً!");
        return;
    }

    // إظهار رسالة التحميل
    loadingText.style.display = "block";
    resultContainer.innerHTML = "";

    setTimeout(() => {
        loadingText.style.display = "none";
        resultContainer.innerHTML = `<strong>مرحباً! أنا MINDORA AI.</strong><br>لقد استلمت سؤالك: "${userInput}"<br>الموقع يعمل الآن بنجاح تام على GitHub Pages!`;
    }, 1500);
});
