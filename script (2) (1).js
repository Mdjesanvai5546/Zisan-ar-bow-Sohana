const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionBox = document.getElementById('questionBox');
const resultBox = document.getElementById('resultBox');

// No বাটনটি যাতে মাউস নিলেই বা টাচ করলেই পালিয়ে যায়
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// Yes বাটনে ক্লিক করলে সারপ্রাইজ আসবে
yesBtn.addEventListener('click', () => {
    questionBox.style.display = 'none';
    resultBox.style.display = 'block';
});