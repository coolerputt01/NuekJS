function renameComponentInText(text, oldName, newName) {
  const oldScope = `@scope (${oldName})`;
  const oldTagOpen = `<${oldName}>`;
  const oldTagClose = `</${oldName}>`;
  
  // Replace manually using slice and indexOf
  const scopeStart = text.indexOf(oldScope);
  const tagOpenStart = text.indexOf(oldTagOpen);
  const tagCloseStart = text.indexOf(oldTagClose);
  
  if (scopeStart === -1 || tagOpenStart === -1 || tagCloseStart === -1) return text;
  
  // Reconstruct text
  return (
    text.slice(0, scopeStart) +
    `@scope (${newName})` +
    text.slice(scopeStart + oldScope.length, tagOpenStart) +
    `<${newName}>` +
    text.slice(tagOpenStart + oldTagOpen.length, tagCloseStart) +
    `</${newName}>` +
    text.slice(tagCloseStart + oldTagClose.length)
  );
}