function scopeStyle(text) {
  const styleRegex = /<style>([\s\S]*?)<\/style>/gi;
  
  return text.replace(styleRegex, (match, styleContent) => {
    // Remove any previous @scope wrapping (optional)
    if (styleContent.includes("@scope")) return match;
    
    return `<style>
@scope (component) {
  :scope {
    ${styleContent
      .trim()
      .split("\n")
      .map(line => `    & ${line.trim()}`)
      .join("\n")}
  }
}
</style>`;
  });
}