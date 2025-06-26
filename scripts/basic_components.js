document.addEventListener("DOMContentLoaded",console.log("Hello World!"));

const main = document.querySelector('#main');

function html_data(name){
  var html_content = `<b>Utility Tests for ${ name }.....</b>`;
  return html_content;
}
main.innerHTML = html_data("Mrs Family");