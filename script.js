const userLang = navigator.language || navigator.userLanguage; 

if (!userLang.startsWith('ru') && window.location.href.includes('index_en') == false) {
    window.location.href = 'index_en.html';
}

const sections = document.querySelectorAll(".container"); 

document.addEventListener("DOMContentLoaded", () => {
    sections[0].scrollIntoView({ behavior: "smooth" });});

let currentIndex = 0; // Текущий экран
let isScrolling = false; // Флаг для блокировки быстрого скролла

window.addEventListener("wheel", (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
        currentIndex++;
    } else {
        currentIndex--;
    }

    scrollToSection(currentIndex);
    document.body.style.backgroundPositionY = -window.scrollY * 0.5 + "px";
});


function scrollToSection(index) {
    currentIndex = index;
    if (index >= 0 && index < sections.length) {
        if (index === 0) {
            document.querySelector('header').style.backgroundColor = 'transparent';
            document.querySelector('header').style.boxShadow = 'none';
        }
        else {
            document.querySelector('header').style.backgroundColor = 'rgba(77, 77, 77, 0.5)';
            document.querySelector('header').style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
        }

        isScrolling = true; // Блокируем повторные скроллы
        sections[index].scrollIntoView({ behavior: "smooth" });

        setTimeout(() => { 
            isScrolling = false; 
        }, 100); // Разблокируем скролл через 100 мс
    }
}

function tiltImage(event) {
    const image = event.target;
    const bounds = image.getBoundingClientRect();
    
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    const rotateX = y * -20; // Наклон вверх-вниз
    const rotateY = x * 20;  // Наклон влево-вправо

    image.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt(event) {
    const image = event.target;
    image.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
}

function downloadRudi() {
    const userAgent = navigator.userAgent;

    if (userAgent.toLocaleLowerCase().includes("win")) {
        window.location.href = "https://www.dropbox.com/scl/fi/jru6gri8tkhp22hewhfhu/rudi_installer.exe?rlkey=3l71mmy3no3r01rcokswnieeo&st=3jstoc22&dl=1";
    } else if (userAgent.toLocaleLowerCase().includes("linux")) {
        window.location.href = "pages/rudiThanks";
    } else {
        alert('Ваша система не поддерживается');
    }

      
}
