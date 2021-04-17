<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# Prettier Config for [WebDevStudios JavaScript Coding Standards](https://github.com/WebDevStudios/js-coding-standards)

------

**This package is DEPRECATED and no longer in use at WebDevStudios and will no longer be maintained.**

------

## How to Install

Install [`@webdevstudios/js-coding-standards`](https://github.com/WebDevStudios/js-coding-standards)

## Changlog

## 1.0.2

- Installs `@webdevstudios/prettier-config-coding-standards` so that you can now set your `package.json` `prettier` setting to `@webdevstudios/prettier-config-coding-standards` which dynamically load all prettier configs for all coding standard packages, depending on what you have installed

## 1.0.1

- Fix issue where configuration could format other code, not just JavaScript <sup>[PR](https://github.com/WebDevStudios/prettier-config-js-coding-standards/pull/1)</sup>

Note, this patch ensures that the config for JavaScript does not act as a config for example, CSS. But, given that some editor packages may have defaults, you may still get formatting from your editor. But, e.g. `prettier --write file.css` won't auto-format CSS code using this config.

See the PR for what JavaScript-ish files we process with this config.

## 1.0.0

- Uses `@wordpress/prettier-config` as a base, which currently explicitly uses:

```js
{
    useTabs: true,
    tabWidth: 4,
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    parenSpacing: true,
    jsxBracketSameLine: false,
    semi: true,
    arrowParens: 'always',
}
```

- Override `printWidth` from `@wordpress/prettier-config` to be `99000`, pretty big, because we don't explicitly have a rule for this internally
- Added `bracketSpacing` because `@wordpress/prettier-config` doesn't explicity set it
- Installed `https://github.com/Automattic/wp-prettier` so we can add `parenSpacing` support so `( true )` doesn't get auto-formatted to `(true)`
