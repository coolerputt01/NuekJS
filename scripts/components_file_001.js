const main = document.querySelector('#main');

const filePath = "../fileComponents/components.nuek";

async function file_data(file){
  if(!file) {
    return;
  }
  
  try {
    const response = await fetch(file);
    if(!response.ok){
      throw new Error("\nCouldn't read from *nuek File properly: try checking the component filePath");
    }
    var text = await response.text();
    main.innerHTML = text;
    
  }catch(error) {
    console.error("An error occurred while reading *.nuek component: \n", error.message);
  }
}

for(var i = 0;i < 50;i++){
  file_data(filePath);
}