const main = document.querySelector('#main');

async function file_data(file){
  if(!file) {
    return;
  }
  
  try {
    const response = await fetch(file);
    if(!response.ok){
      throw new Error("Couldn't Read from *nuek File properly");
    }
    var text = await response.text();
    main.innerHTML = text;
    
  }catch(error) {
    console.error("An error occurred while reading *.nuek component: ", error);
  }
}


file_data("../fileComponents/components.nuek")