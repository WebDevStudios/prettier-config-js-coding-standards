<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# Prettier Support & Configration for WebDevStudios JavaScript Coding Standards

## How to Install

Install [`@webdevstudios/js-coding-standards`](https://github.com/WebDevStudios/js-coding-standards)

## Sublime Text 3

Install the PrettierJS package, and you can use this configuration:

```
{
  "auto_format_on_save": true,
  "auto_format_on_save_requires_prettier_config": true,
  "allow_inline_formatting": true,
  "prettier_options": {}, // Start off with nothing.
}
```

## Changlog

## 1.0.0

- Uses `@wordpress/prettier-config` as a base for automatically fixing
