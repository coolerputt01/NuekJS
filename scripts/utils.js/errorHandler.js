export function throwError(text,file){
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