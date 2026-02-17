// イラスト
const targets = document.querySelectorAll(".anime");

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY; // スクロール方向
    lastScrollY = currentScrollY;

    if (entry.isIntersecting) {
      // 画面に入ったら必ず表示
      entry.target.classList.add("show");
    } else {
      // 上スクロール中 & 要素が上に抜けた場合だけ消す
      if (!scrollingDown && entry.boundingClientRect.bottom > window.innerHeight) {
        entry.target.classList.remove("show");
      }
      // 下に抜けた場合は消さない
    }
  });
}, { threshold: 0.35 });

targets.forEach(target => observer.observe(target));

// テキスト
