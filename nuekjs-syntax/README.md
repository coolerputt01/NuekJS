# 🌟 NuekJS Syntax Highlighting

> Syntax highlighting, Emmet support, and file handling for `.nuek` and `.nuekjs` files — built for the NuekJS component framework.

---

## ✨ Features

- ✅ Full syntax highlighting using HTML grammar
- ✅ Emmet support (auto-completion like `<div`, `ul>li*3`, etc.)
- ✅ File extensions: `.nuek`, `.nuekjs`
- ✅ Lightweight — no overhead
- ✅ Treats `.nuek` like HTML by default

---

## 🧠 Enable Emmet for `.nuek` files

Emmet is not enabled by default for unknown languages.  
To turn it on for NuekJS files:

### ✅ Step-by-step (GUI way):

1. Press `Ctrl + ,` to open **VS Code Settings**
2. Search for: `emmet.includeLanguages`
3. Click **Edit in settings.json**
4. Add this block:

```json
"emmet.includeLanguages": {
  "nuekjs": "html"
}
