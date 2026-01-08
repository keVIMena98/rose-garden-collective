# Custom Fonts Directory

Place your custom font files (e.g., `.woff2`, `.ttf`, `.otf`) in this directory.

## How to use:

1.  Upload your font file here (e.g., `MyCustomFont.woff2`).
2.  In `/styles/globals.css`, uncomment the `@font-face` rule.
3.  Update the `src` URL to point to `/public/fonts/MyCustomFont.woff2`.
    *   *Note: Depending on the build system, you might need to reference it as just `/fonts/MyCustomFont.woff2` or import it.*

## Example CSS:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
```
