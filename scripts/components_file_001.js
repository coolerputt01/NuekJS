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
}
  if(text.includes("<style>")){
  if(!(text.includes("<style>") && text.includes("@scope"))){
  throw new Error(`This is an internal bug or issue. Please Contact 'Coolerputt" to report the situation.'${file}'`)
}else if(text.includes("@scope(component)")){
  console.warn(`Internal Bug from ${file}`);
  let textPos = text.indexOf("@scope");
  let formattedText = text.slice(0,textPos+ "@scope".length) + ' ' + text.slice(textPos + "@scope".length);
  return formattedText
}else if(!text.includes("<style>") && text.includes("</style>")){
  throw new Error(`Missing <style> found in ${file}`);
}else if(text.includes("<style>") && !text.includes("</style>")){
  throw new Error(`Missing </style> found in ${file}`);
}
}else if(text.includes("<script")){
  if(!text.includes("</script>")){
    throw new Error(`Ending script <script> not found at ${file}`)
  }
}else if(text.includes("</style>") && !text.includes("<style>") ){
  throw new Error(`Style tag poorly configured at ${file}`)
}else if(!text.includes("<script") && text.includes("</script>")){
  throw new Error(`Script tag poorly configured at ${file}`)
}
return text
}

function styleRegexAbstraction(text) {
  if(!text.includes("<style>") && !text.includes("</style>")) return text;
  
  const regexExp = /<style>([\s\S]*?)<\/style>/gi;
  
  return text.replace(regexExp,(match,styleContent) => {
    
    if(match.includes("@scope")) return match
    
    return `<style>
@scope (component) {
  :scope {
    ${styleContent}
  }
}
</style>`;
  });
}

function scriptAbstractionFix(text,file){
  if(!text.includes("<script>") && !text.includes("</script>"))
  return text;
  
  if(!text.startsWith("<script")){
    console.warn(`Script tags should always start your .nuek component at ${file}`)
    return text;
  }
  const scriptEnd = text.indexOf("</script>");
  
  const scriptCode = text.slice(8, scriptEnd);
  const htmlPart = text.slice(scriptCode + 9);
  const scriptFix = document.createElement("script");
  scriptFix.textContent = scriptCode;
  document.body.appendChild(scriptFix);
  console.log(scriptFix)
  return text;
}

function handleProps(text, file, prop) {
  return text.replace(/{%\s*(\w+)\s*%}/g, (match, propName) => {
    if (prop[propName] !== undefined) {
      return prop[propName];
    } else {
      throw new Error(`Property '${propName}' not found in props in file ${file}'`);
      return "";
    }
  });
}

async function componentRead(file) {
  if (!file) throw new Error("No component file detected...");
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read .nuek file: ${file}`);
    let props = {
      name:"Hello",
      src:"/assets/icon/icon.png"
    }
    let text = await response.text();
    text = scriptAbstractionFix(text, file);
    text = styleRegexAbstraction(text);
    text = handleProps(text, file, props);
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

filePaths.forEach(componentRead);