// dynamicComponentRead.js
import throwError from './errorHandler.js';
import { styleRegexAbstraction, scriptAbstractionFix, handleProps } from './componentAbstraction.js';
import generateRandInt from './generateRandInt.js';

var elementMap = new Map();
var nextTag = 0;
function findByDataId(root, id) {
  if(elementMap.has(id)) {
    return elementMap.get(id);
  }else{
    var element = root.querySelector(`[data-id="${id}"]`);
    if(element){
      elementMap.set(id, element);
      return element;
    }
  }
}

async function dynamicComponentRead(selector, file, prop={}) {
  if (!file) throw new Error("No component file found...");
  
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read .nuek file: ${file}`);
    
    let text = await response.text();
    const gRI = generateRandInt();
    
    // Inject styles and scripts
    text = styleRegexAbstraction(text, gRI);
    text = scriptAbstractionFix(text, file);
    
    // Inject props into the template
    text = handleProps(text, file, prop);
    
    // Error handling
    text = throwError(text, file);
   var prop_id = prop.id || String(nextTag++);
    text = text.replaceAll("<component>", `<component-${gRI} data-id="${prop_id}">`)
  .replaceAll("</component>", `</component-${gRI}>`)
  console.log(text);
    
    if(prop){
      let existing = findByDataId(selector,prop_id);
      console.log(existing);
      console.log(prop_id);
      if (existing){
        console.log("How about here?");
        existing.outerHTML = text;
      } else {
        const temp = document.createElement("div");
        temp.innerHTML = text;
        selector.appendChild(temp.firstElementChild);
      }
    }
  } catch (error) {
    console.error("Error reading .nuek component:\n", error.message);
  }
}

export { dynamicComponentRead };