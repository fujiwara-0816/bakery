document.getElementById("reserve-form").addEventListener("submit", function(e) {
  e.preventDefault(); // 本当の送信を止める
  document.body.innerHTML = `
    <div class="receipt">
      <h2>受付しました</h2>
      <p>ご予約ありがとうございます。</p>
    </div>
  `;
});