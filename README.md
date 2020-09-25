<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# Prettier Config for [WebDevStudios JavaScript Coding Standards](https://github.com/WebDevStudios/js-coding-standards)

## How to Install

Install [`@webdevstudios/js-coding-standards`](https://github.com/WebDevStudios/js-coding-standards)

## Changlog

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
