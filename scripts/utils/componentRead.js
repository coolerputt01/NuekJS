import throwError from './errorHandler.js';
import {styleRegexAbstraction , scriptAbstractionFix,handleProps} from './componentAbstraction.js';
import generateRandInt from './generateRandInt.js';
import serverRender from './serverRender.js';

async function componentRead(selector,file,props = null,ssr) {
  if (!file) throw new Error("No component file found...");
  if(selector === undefined){
    throw new Error("Selector not found at: ",file);
  }
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read .nuek file: ${file}`);
    let text = await response.text();
    const gRI = generateRandInt();
    text = scriptAbstractionFix(text, file);
    text = styleRegexAbstraction(text,gRI);
    if(props !== null){
      text = handleProps(text, file, props);
    }
    text = throwError(text,file);
    text = text.replaceAll("<component>", `<component-${gRI}>`)
      .replaceAll("</component>", `</component-${gRI}>`)
      
    if(ssr){
      text = serverRender(text);
    }
    
    selector.innerHTML += text;
  } catch (error) {
    console.error("Error reading .nuek component:\n", error.message);
  }
}

export { componentRead }