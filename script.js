// Typing Effect for Hi! in Home Section

document.addEventListener("DOMContentLoaded", function() {
  const targetheaders = document.getElementsByTagName("h1");

  for (const i of targetheaders){
    let index = 0;
    let text = i.getAttribute("data-text");
    let n = text.length;
    function type() {
      if (index < n) {
        i.textContent = text.slice(0, index + 1) + "|";
        index++;
        setTimeout(type, 400);
      }
      else {
        i.textContent = text;
      }
    }
    type();
  }
});