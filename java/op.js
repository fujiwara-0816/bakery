  window.addEventListener("load", () => {
    document.querySelector(".cloud-top").style.transform = "translate(-100%, -50%)";
    document.querySelector(".cloud-bottom").style.transform = "translate(100%, -50%)";
    setTimeout(() => {
      document.querySelector("#cloud").style.display = "none";
    }, 2000);
  });