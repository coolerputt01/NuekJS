![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
---

# 💫 Welcome to **NuekJS**

*The JS component library for **Vanilla Lovers*** 🍦💻

> Based entirely on **Vanilla JavaScript** — built to be fast, minimal, and powerful.
> Powered by **NueJS**, the next-gen SSR framework written in Rust.
>
> **May GOD help us all** 🥹❤️💋🙏🙏🙏

---

### ⚙️ Installation

Run the following to get started:

```bash
npm install nuekjs
```

Or use the available **CDN** https://cdn.jsdelivr.net/npm/nuekjs@latest/scripts/main.js:

```html
<!-- CDN usage example -->
<script type="module">
  const component1 = new NuekComponent(componentSelector, nuekFilePath, optionalProps);
</script>
```

---

### 📁 Component Setup (`.nuek` files)

To begin, create `.nuek` files — each file contains a single self-contained component.

**Format:**

```html
<script>
  // JavaScript logic
</script>

<component>
  <!-- Your HTML here -->
</component>

<style>
  /* Component-specific CSS */
</style>
```

**⚠️ NOTE:** Please **strictly follow** the format above for consistent behavior.

---

### 💡 Usage in HTML

```html
<!-- Import your .nuek component like this -->
<script type="module">
  const myComponent = new NuekComponent("#app", "/components/Card.nuek", {
    title: "Hello",
    content: "This is from NuekJS!"
  });
</script>
```

---

### 🛠️ Use Cases

More examples and advanced patterns are coming soon...

---

Thanks for being here. That’s all you need to get started.
Let’s keep it **Vanilla** and keep it **clean**.
God bless you! ❤️🥹

---