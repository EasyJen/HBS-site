# HBS-site

Healthtech Benefits Solutions corporate Hugo website for carriers, partners, and decision-makers. EasyOTC is featured as a product; its separate rep-facing site is not part of this repository.

## Local preview

Run `hugo server --bind 127.0.0.1 --port 1314` and open http://127.0.0.1:1314/.
Build static output with `hugo --minify`.

## Editing

- Page: `layouts/index.html`
- Branding and metadata: `hugo.yaml`
- Styles: `assets/css/main.css`
- Interactions: `assets/js/main.js`

Adapted from the prior corporate prototype stored in the Easy OTC project. The original remains intact. The existing stand-in image is concept imagery. No external theme is required.

Before public launch: confirm corporate claims and product capabilities, supply the approved partnership contact destination, replace the prototype-only contact notice, and set the production baseURL. No message is sent by the preview contact button.

This Mac also has a project-local Hugo executable (ignored by Git). Run `./start-local.sh` to use your installed Hugo or this local fallback. The current preview uses port 1314 so it can coexist with the separate product preview.
