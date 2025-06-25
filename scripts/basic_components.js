document.addEventListener("DOMContentLoaded",console.log("Hello World!"));

const main_container = document.querySelector('#main');

function html_data(){
  var html_content = `<p>Utility Tests.....<p>`;
  return html_content;
}
main.innerHTML = html_data();