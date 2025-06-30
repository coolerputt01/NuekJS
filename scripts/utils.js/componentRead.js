import throwError from './errorHandler.js';
import {styleRegexAbstraction , scriptAbstractionFix,handleProps} from './componentAbstraction.js';
import generateRandInt from './generateRandInt.js';

async function componentRead(selector,file,props = null) {
  if (!file) throw new Error("No component file detected...");
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read .nuek file: ${file}`);
    let text = await response.text();
    text = scriptAbstractionFix(text, file);
    text = styleRegexAbstraction(text);
    if(props!== null){
      text = handleProps(text, file, props);
    }
    text = throwError(text,file);
    
    const gRI = generateRandInt();
    
    text = text
      .replaceAll("<component>", `<component-${gRI}>`)
      .replaceAll("</component>", `</component-${gRI}>`)
      .replace("@scope (component)", `@scope (component-${gRI})`)
    
    selector.innerHTML += text;
  } catch (error) {
    console.error("Error reading .nuek component:\n", error.message);
  }
}

export { componentRead }