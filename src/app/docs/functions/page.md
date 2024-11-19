---
title: Utility
nextjs:
  metadata:
    title: Utilitis
    description: All utils function from trio-theme.
---

The `trio-theme` package comes with several utility functions to assist with color manipulation, shade generation, and class merging. Below is the detailed documentation for each utility function.

---

## cn

Combines class names into a single string, omitting falsy values. Useful for conditional class name management.

#### Usage
```javascript
import { cn } from 'trio-theme';

const classes = cn('bg-red-500', isActive && 'text-white', 'p-4');
console.log(classes); // "bg-red-500 text-white p-4" if `isActive` is true
```

---

## getColorPalette

Generates a color palette with shades based on a base color.

#### Parameters

- baseColor : A string representing the base color in HEX or RGB format.
- option (optional): An object with the following properties:
- colorType: "hex" or "rgb". Default is "hex".
- shades: An array of shade options (e.g., ["50", "100", "200", ...]).

#### Returns
An object containing shades with color values.

#### Usage

```js 
import { getColorPalette } from 'trio-theme';

const palette = getColorPalette('#ff5733', {
  colorType: 'rgb',
  shades: ['50', '100', '200', '300']
});

console.log(palette);
/*
{
  "50": "rgb(255, 235, 227)",
  "100": "rgb(255, 204, 191)",
  "200": "rgb(255, 153, 127)",
  "300": "rgb(255, 102, 63)"
}
*/

```
---
## hexToHSL
Converts a HEX color string to an HSL color string.
#### Parameters
- hex: A string representing a HEX color.
#### Returns
A string representing the color in HSL format.
#### Usage
```js
import { hexToHSL } from 'trio-theme';

const hslColor = hexToHSL('#ff5733');
console.log(hslColor); // "hsl(11, 100%, 60%)"

```

---
## hexToRgb
Converts a HEX color string to an RGB color string.
#### Parameters
- hex: A string representing a HEX color.
#### Returns
A string representing the color in RGB format.
#### Usage
```js
import { hexToRgb } from 'trio-theme';

const rgbColor = hexToRgb('#ff5733');
console.log(rgbColor); // "255, 87, 51"

```

---
## hexToRgba
Converts a HEX color string to an RGBA color string with an optional alpha value.
#### Parameters
- hex: A string representing a HEX color.
- alpha: A number between 0 and 1 representing the alpha value (optional).

#### Returns
A string representing the color in RGBA format.
#### Usage
```js
import { hexToRgba } from 'trio-theme';

const rgbaColor = hexToRgba('#ff5733', 0.5);
console.log(rgbaColor); // "255, 87, 51, 0.5"

```

---
## hslToHex
Converts an HSL color string to a HEX color string.
#### Parameters
- hsl: A string representing an HSL color.

#### Returns
A string representing the color in HEX format.
#### Usage
```js
import { hslToHex } from 'trio-theme';

const hexColor = hslToHex('hsl(11, 100%, 60%)');
console.log(hexColor); // "#ff5733"

```

---
## isHex
Checks whether a given string is a valid HEX color.
#### Parameters
- color: A string to validate.

#### Returns
A boolean indicating whether the string is a valid HEX color.
#### Usage
```js
import { isHex } from 'trio-theme';

console.log(isHex('#ff5733')); // true
console.log(isHex('rgb(255, 87, 51)')); // false

```

---
## isRgb
Checks whether a given string is a valid RGB color.
#### Parameters
- color: A string to validate.

#### Returns
A boolean indicating whether the string is a valid RGB color.
#### Usage
```js
import { isRgb } from 'trio-theme';

console.log(isRgb('rgb(255, 87, 51)')); // true
console.log(isRgb('#ff5733')); // false

```

---
## rgbToHex
Converts an RGB color string to a HEX color string.
#### Parameters
- rgb: A string representing an RGB color.

#### Returns
A string representing the color in HEX format.
#### Usage
```js
import { rgbToHex } from 'trio-theme';

const hexColor = rgbToHex('255, 87, 51');
console.log(hexColor); // "#ff5733"

```

---
## twMerge
Merges Tailwind CSS classes while resolving conflicts. Similar to clsx but with Tailwind-specific handling.
#### Usage
```js
import { twMerge } from 'trio-theme';

const mergedClasses = twMerge('bg-red-500', 'bg-blue-500', 'p-4');
console.log(mergedClasses); // "bg-blue-500 p-4"

```

---

These utility functions provide a comprehensive toolkit for managing colors and styles effectively in your `trio-theme` projects.
