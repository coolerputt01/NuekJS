![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
---

# 💫 Welcome to **NuekJSv1.2.5**

*The JS component library for **Vanilla Lovers*** 🍦💻

> Based entirely on **Vanilla JavaScript** — built to be fast, minimal, and powerful.
> Powered by **NueJS**, the SSR framework written in Rust.
>
> **May GOD help us all** 🙏🙏🙏

---

### ⚙️ Installation

Run the following on bash to get started:

```bash
npm install nuekjs
```

Or use the available **CDN** https://cdn.jsdelivr.net/npm/nuekjs@latest/scripts/main.js:

Then create a simple static component for a test.

```html
<!-- CDN usage example -->
<script type="module">
  const nodeComponent = new NuekStaticComponent(componentContainer, nuekFilePath, optionalProps, loop, condition);
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
  let show = true;
  const nodeElement = new NuekStaticComponent("#app", "/components/Card.nuek", {
    title: "Hello",
    content: "This is from NuekJS!"
  }, 1,show);
</script>
```

---

### 🛠️ Use Cases

Please visit the docs for more information and the use and uses of this package.
---

Thanks for being here. That’s all you need to get started.
Let’s keep it **Vanilla** and keep it **clean**.
God bless you! ❤️🥹

---