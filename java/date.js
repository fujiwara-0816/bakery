const dateScroll = document.getElementById("date-scroll");
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);

    const yyyy = d.getFullYear();
    const mm = ("0" + (d.getMonth() + 1)).slice(-2);
    const dd = ("0" + d.getDate()).slice(-2);
    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
    const labelText = `${mm}/${dd}<br>(${dayNames[d.getDay()]})`;

    const id = `date${i}`;

    dateScroll.innerHTML += `
      <input type="radio" name="date" id="${id}" value="${yyyy}-${mm}-${dd}" ${i === 0 ? "checked" : ""}>
      <label for="${id}">${labelText}</label>
    `;
  }
