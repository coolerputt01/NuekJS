const main = document.querySelector('#main');

const filePaths = [
  "../fileComponents/components.nuek",
  "../fileComponents/components2.nuek",
  "../fileComponents/components3.nuek"
];

function generateRandInt() {
  return Math.floor(Math.random() * 10000) + 6352;
}

function throwError(text,file){
  if (!text.includes("<component>") || !text.includes("</component>")) {
  throw new Error(`Missing <component> or </component> tag in '${file}'`);
}else if(!(text.includes("<style>") && text.includes("@scope"))){
  throw new Error(`Scope style not found in '${file}'`)
}else if(text.includes("@scope(component)")){
  console.warn(`Rewrite this "@scope(component)" with this "@scope (component)"`);
  let textPos = text.indexOf("@scope");
  let formattedText = text.slice(0,textPos+ "@scope".length) + ' ' + text.slice(textPos + "@scope".length);
  return formattedText
}
return text
}

async function file_data(file) {
  if (!file) throw new Error("No component file detected...");
  
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read .nuek file: ${file}`);
    
    let text = await response.text();
    text = throwError(text,file);
    
    const gRI = generateRandInt();
    
    text = text
      .replaceAll("<component>", `<component-${gRI}>`)
      .replaceAll("</component>", `</component-${gRI}>`)
      .replace("@scope (component)", `@scope (component-${gRI})`)
    
    main.innerHTML += text;
  } catch (error) {
    console.error("Error reading .nuek component:\n", error.message);
  }
}

filePaths.forEach(file_data);