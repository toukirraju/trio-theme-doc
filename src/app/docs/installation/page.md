---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Quidem magni aut exercitationem maxime rerum eos.
---

`trio-theme` is a theming solution built on Tailwind CSS, specifically designed for React and Next.js projects. It allows you to easily configure dynamic color schemes, supporting both RGB and HEX formats, and provides flexibility with theme storage options in localStorage or cookies.

---

## Installation Guide

To start using `trio-theme`, make sure you have Tailwind CSS and React set up in your project. Follow these steps to install and configure `trio-theme` for use.

#### Step 1: Install Tailwind CSS (if not already installed)

If your project doesn’t already use Tailwind CSS, you’ll need to install and configure it. Run the following commands:


```bash 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Step 2: Install `trio-theme`
Add the trio-theme package to your project by running:
```bash
npm install trio-theme
```

## Tailwind Configuration
You can automatically set up your Tailwind configuration using:

#### For HEX color code
```bash
npx trio-theme
```
#### For RGB color code
```bash
npx trio-theme -rgb
```
This will update your tailwind.config.js file to include necessary settings for `trio-theme`

---

Alternatively, you can manually configure it as follows:
{% callout title="You should know!" type="warning" %}

You must set the content
{% b %}
./node_modules/trio-theme/\*\*/\*.{js,ts,jsx,tsx}
{% /b %}
to watch Tailwind on the trio-theme directory.

{% /callout %}

```js
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Include trio-theme
    './node_modules/trio-theme/**/*.{js,ts,jsx,tsx,}',
  ],
}
```

### Manual Configuration 
### HEX
Tailwind configuration using HEX values:
```js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
     // Include trio-theme
    "./node_modules/trio-theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        "primary": {
          "25": "var(--primary-25)",
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
          "950": "var(--primary-950)",
          "DEFAULT": "var(--primary-500)",
          "light": "var(--primary-light)",
          "dark": "var(--primary-dark)"
        },
        "secondary": {
          "25": "var(--secondary-25)",
          "50": "var(--secondary-50)",
          "100": "var(--secondary-100)",
          "200": "var(--secondary-200)",
          "300": "var(--secondary-300)",
          "400": "var(--secondary-400)",
          "500": "var(--secondary-500)",
          "600": "var(--secondary-600)",
          "700": "var(--secondary-700)",
          "800": "var(--secondary-800)",
          "900": "var(--secondary-900)",
          "950": "var(--secondary-950)",
          "DEFAULT": "var(--secondary-500)",
          "light": "var(--secondary-light)",
          "dark": "var(--secondary-dark)"
        }
      },
    },
  },
  plugins: [],
};

export default config;
```

### RGB
Tailwind configuration using RGB values:
```js
const config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary-500) / <alpha-value>)',
          25: 'rgb(var(--primary-25) / <alpha-value>)',
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          // Other shades...
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-500) / <alpha-value>)',
          25: 'rgb(var(--secondary-25) / <alpha-value>)',
          // Other shades...
        }
      }
    }
  }
}
```

{% callout title="Note" %}

Remember that `primary` and `secondary` shades are not changed directly in the `tailwind.config.js` to avoid theme malfunction.

{% /callout %}


---

This completes the installation of `trio-theme`. You’re now ready to use it!
