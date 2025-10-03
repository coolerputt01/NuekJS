import throwError from './errorHandler.js';
import {htmlAbstractionHandler, styleRegexAbstraction, scriptAbstractionFix, handleProps } from './componentAbstraction.js';
import generateRandInt from './generateRandInt.js';

var nodeMap = new Map();
var nextTag = 0;

function findByDataId(container, id) {
  if(nodeMap.has(id)) {
    return nodeMap.get(id);
  }else{
    var node = container.querySelector(`[data-id="${id}"]`);
    if(node){
      nodeMap.set(id, node);
      return node;
    }
  }
}

async function dynamicComponentRead(container, file, prop={}) {
  if (!file) throw new Error("No component file found...");
  
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Couldn't read .nuek file: ${file}`);
    
    let text = await response.text();
    const gRI = generateRandInt();
    
    text = styleRegexAbstraction(text, gRI);
    text = scriptAbstractionFix(text, file);
    
    text = handleProps(text, file, prop);
    
    text = throwError(text, file);
   var prop_id = prop.id || String(nextTag++);
   
    text = htmlAbstractionHandler(text,gRI,prop_id);
    
    if(prop){
      let existingElement = findByDataId(container,prop_id);
      if(existingElement){
        existingElement.outerHTML = text;
      } else {
        const nodeElement = document.createElement("div");
        nodeElement.innerHTML = text;
        container.appendChild(nodeElement.firstElementChild);
      }
    }
  } catch (error) {
    console.error("Error reading .nuek component:\n", error.message);
  }
}

export { dynamicComponentRead };