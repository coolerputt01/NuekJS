const main = document.querySelector('#main');

const filePath1 = "../fileComponents/components.nuek";
const filePath2 = "../fileComponents/components2.nuek"
const filePath3 = "../fileComponents/components3.nuek"

function generateRandInt() {
  return Math.floor(Math.random() * 10000) + 6352;
}

async function file_data(file){
  if(!file) {
    throw new Error("No component file detected...");
    return;
  }
  
  try {
    const response = await fetch(file);
    if(!response.ok){
      throw new Error("\nCouldn't read from *nuek File properly: try checking the component filePath");
    }
    var text = await response.text();
    if(!text.includes("<component>")){
      throw new Error(`Expected a component tag but couldn't see it in '${file}'`)
    }else if(!text.includes("</component>")){
      throw new Error(`Expected a closing component tag at '${file}'`)
    } else if(!text.includes("<component>") && !text.includes("</component>")){
      throw new Error(`No component tag found at '${file}'`)
    }
    const gRI = generateRandInt() ;
    console.log(gRI);
    let componentTag = document.querySelector("component");
    let configuredTag = document.createElement(`component-${gRI}`);
    
    while(componentTag.firstChild){
      configuredTag.appendChild(componentTag.firstChild);
    }
    componentTag.replaceWith(configuredTag);
    console.log(configuredTag)
    main.innerHTML += configuredTag;
    
  }catch(error) {
    console.error("An error occurred while reading *.nuek component: \n", error.message);
  }
}

  file_data(filePath1);
  file_data(filePath2);
  file_data(filePath3);