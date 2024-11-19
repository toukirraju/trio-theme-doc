---
title: Usage
nextjs:
  metadata:
    title: Usage
    description: How can you use this theming system.
---

`trio-theme` provides a flexible and efficient way to manage themes in your Tailwind CSS and React application. With `ThemeProvider` and `ColorSchemeScript`, you can define custom shades, choose color formats, and set storage preferences to control how your theme is loaded and stored across sessions. This theming system is designed to work seamlessly with server-side rendering environments like `Next.js`, ensuring smooth theme transitions without flickering issues.

Below, you’ll find detailed documentation on setting up ThemeProvider and ColorSchemeScript, including customizable properties and default values.

---

## ThemeProvider

Wrap your application with `ThemeProvider` to apply theming globally. This component accepts a configuration that includes `shades`, `colorType`, and `storage` options.

#### Example Usage:

```jsx
import { ThemeProvider } from 'trio-theme';
function Demo() {
  return (
          <ThemeProvider
            config={{
              shades: [
                '25',
                '50',
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                '900',
                '950',
                'dark',
                'light',
              ],
              colorType: 'hex', // Use "rgb" for RGB format
              storage: 'cookie', // Default is "localStorage"
            }}
          >
            {children}
          </ThemeProvider>
        )}
```

#### Props
- `shades`: Specifies the color shades available in your theme. These should match the shades defined in your Tailwind CSS configuration. 
Example shades include "25", "50", "100", "200", etc.

- `colorType`: Defines the color format to use. Options are `hex` for HEX colors and `rgb` for RGB values.

- `storage`: Sets the storage method for saving theme settings across sessions. Options are `localStorage` (default) or `cookie`. Choose "cookie" for server-side rendering environments like Next.js to prevent theme flickering on page load.

---


## ColorSchemeScript

When using Next.js or another server-rendered environment, add ColorSchemeScript to ensure that the theme is set correctly before the initial render. This component synchronizes the theme mode with your storage preferences and eliminates flash or flicker when switching between themes.

#### Example Usage:

```jsx
<ColorSchemeScript 
  storage="cookie" 
  themeModeKey="theme-mode" 
  themeLocalStorageKey="trio-theme" 
  colorType="hex"
/>

```

#### Props

- `storage`: The storage mechanism for the theme, matching the storage option in `ThemeProvider`. Choose "localStorage" or "cookie" to ensure consistent theme persistence.

- `themeModeKey`: Key for storing the current theme mode (e.g., "dark", "light", or "system") in localStorage or cookies. The default value is `theme-mode`.

- `themeLocalStorageKey`: Key for storing the actual theme configuration, including colors and shades. The default key is `trio-theme`.

- `colorType`: Color format to use in the theme configuration, matching the value in ThemeProvider. Options are "hex" (default) or "rgb".

---


## Default Theme

The `ThemeProvider` and `ColorSchemeScript` also allow you to define a default theme, which will be loaded when the app is first run or if no theme is found in storage. This default theme can vary based on the `colorType` (either rgb or hex).



### HEX

If the colorType is set to "hex", you can define a default theme using HEX values for the color shades like so:

```jsx
import { ThemeProvider, ColorSchemeScript } from 'trio-theme';

<ThemeProvider
  config={{
    colorType: "hex", // Define the color type as hex
    shades: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "dark", "light"],
  }}
>
  <ColorSchemeScript
    colorType="hex"
    defaultTheme={{
      name: "default",
      mode: "system",
      shades: [
        {
          name: "primary",
          color: "#008080",
          shade: {
            "25": "#f5fcfc",
            "50": "#edfafa",
            "100": "#daf2f2",
            "200": "#a8e0e0",
            "300": "#7acccc",
            "400": "#32a6a6",
            "500": "#008080",
            "600": "#006d73",
            "700": "#00525e",
            "800": "#003d4d",
            "900": "#002838",
            "950": "#001724",
            "light": "#f5fcfc",
            "dark": "#00070d"
          }
        },
        {
          name: "secondary",
          color: "#0f6fff",
          shade: {
            "25": "#f7fdff",
            "50": "#f2fbff",
            "100": "#e8f7ff",
            "200": "#c4e9ff",
            "300": "#9ed7ff",
            "400": "#57a8ff",
            "500": "#0f6fff",
            "600": "#0b5fe6",
            "700": "#0848bf",
            "800": "#063599",
            "900": "#032373",
            "950": "#01144a",
            "light": "#f7fdff",
            "dark": "#01144a"
          }
        }
      ]
    }}
  />
  {children}
</ThemeProvider>

```

### RGB

If the colorType is set to "rgb", you can define a default theme using RGB values for the color shades like so:

```jsx
<ThemeProvider
  config={{
    colorType: "rgb", // Define the color type
    shades: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", '950', "dark", "light"],
  }}
>
  <ColorSchemeScript
    colorType="rgb"
    defaultTheme={{
      name: "default",
      mode: "system",
      shades: [
        {
          name: "primary",
          color: "0 128 128",
          shade: {
            "25": "245 252 252",
            "50": "237 250 250",
            "100": "218 242 242",
            "200": "168 224 224",
            "300": "122 204 204",
            "400": "50 166 166",
            "500": "0 128 128",
            "600": "0 109 115",
            "700": "0 82 94",
            "800": "0 61 77",
            "900": "0 40 56",
            "950": "0 23 36",
            "light": "245 252 252",
            "dark": "0 7 13"
          }
        },
        {
          name: "secondary",
          color: "15 111 255",
          shade: {
            "25": "247 253 255",
            "50": "242 251 255",
            "100": "232 247 255",
            "200": "196 233 255",
            "300": "158 215 255",
            "400": "87 168 255",
            "500": "15 111 255",
            "600": "11 95 230",
            "700": "8 72 191",
            "800": "6 53 153",
            "900": "3 35 115",
            "950": "1 20 74",
            "light": "247 253 255",
            "dark": "1 20 74"
          }
        }
      ]
    }}
  />
  {children}
</ThemeProvider>
```


