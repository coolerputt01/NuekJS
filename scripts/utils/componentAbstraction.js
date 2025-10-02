function styleRegexAbstraction(text , gRI) {
  if(!text.includes("<style>") && !text.includes("</style>")) return text;
  
  const regexExp = /<style>([\s\S]*?)<\/style>/gi;
  
  const componentContent =  text.replace(regexExp,(match,styleContent) => {
    
    if(match.includes("@scope")) return match
    
    let componentStyleContent = `
@scope (component) {
  :scope {
    ${styleContent}
  }
}`;
componentStyleContent = componentStyleContent.replace("@scope (component)", `@scope (component-${gRI})`)
const componentStyleTag = document.createElement("style");
componentStyleTag.textContent = componentStyleContent;
document.head.appendChild(componentStyleTag);
return '';
});
return componentContent;
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

export {styleRegexAbstraction,scriptAbstractionFix,handleProps}