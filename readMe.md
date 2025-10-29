![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
---

#  Welcome to **NuekJS1.3 🔥**

*The JS component library for **Vanilla Lovers and Framework ones too lol*** 

> A JS SSR framework built to help build efficient frontend systems.
> Inspired by **NueJS**, the SSR framework written in Rust.
> **May GOD help us all** 🙏🙏🙏

---

### ⚙️ Installation

Nuek was built to work with CDN which I highly recommend 🌝, but in a large codebase where you actually use a js bundler like Vite you can run the command below.

```bash
npm install nuekjs
```

Or use the available **CDN** https://cdn.jsdelivr.net/npm/nuekjs@latest/scripts/main.js:

Then create a simple static component for a test.

```html
<!-- CDN usage example -->
<script type="module">
  const nodeComponent = new NuekStaticComponent(componentContainer, nuekFilePath, optionalProps, loop, condition,ssr);
</script>
```

---

### Component Setup (`.nuek` files)

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

### Usage in HTML

```html
<!-- Import your .nuek component like this -->
<script type="module">
  let show = true;
  //The last parameter is false because I'm not using SSR btw.
  const nodeElement = new NuekStaticComponent("#app", "/components/Card.nuek", {
    title: "Hello",
    content: "This is from NuekJS!"
  }, 1,show,false);
</script>
```

---

### 🛠️ Use Cases

Please visit the docs for more information and the use and uses of this package, at least for now.
---

Thanks for being here. That’s all you need to get started.
Let’s keep it **Vanilla** and keep it **clean**.
God bless you! ❤️🥹

---