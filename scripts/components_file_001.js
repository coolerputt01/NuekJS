const main = document.querySelector('#main');

const filePaths = [
  "../fileComponents/components.nuek",
  "../fileComponents/components2.nuek",
  "../fileComponents/components3.nuek"
];

function generateRandInt() {
  return Math.floor(Math.random() * 10000) + 6352;
}

async function file_data(file) {
  if (!file) throw new Error("No component file detected...");
  
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read *.nuek file: ${file}`);
    
    let text = await response.text();
    
    if (!text.includes("<component>") || !text.includes("</component>")) {
      throw new Error(`Missing <component> or </component> tag in '${file}'`);
    }
    
    const gRI = generateRandInt();
    console.log(gRI);
    
    text = text
      .replaceAll("<component>", `<component-${gRI}>`)
      .replaceAll("</component>", `</component-${gRI}>`)
      .replace("@scope (component)", `@scope (component-${gRI})`);
    
    console.log(text);
    main.innerHTML += text;
  } catch (error) {
    console.error("Error reading *.nuek component:\n", error.message);
  }
}

filePaths.forEach(file_data);