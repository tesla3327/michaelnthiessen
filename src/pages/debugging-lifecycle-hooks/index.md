---
title: Debugging Lifecycle Hooks
---

- lots of screenshots

https://docs.google.com/document/d/1HoULhmvQDjOYZV9PL_erKFGto76G5vEFFuSdQQpR-Cw/edit

```js
window.LIFECYCLE_ORDER = [];

export default {
 created() {
   window.LIFECYCLE_ORDER.push(`[CREATED] ${this.$options.name}`);
 },

 mounted() {
   window.LIFECYCLE_ORDER.push(`[MOUNTED] ${this.$options.name}`);
 }
}
```

In the console you can then access this:
```js
LIFECYCLE_ORDER.forEach(el => console.log(el))
```

## Understanding when lifecycle hooks are called
- Ran into an issue where it seemed like `mounted` was being called a bunch of times
- No easy way to debug the order of when components go through different lifecycles
- Tried manually debugging, but time consuming to step through
- Adding `console.log` everywhere is tedious

## Solution
- Use a mixin to automatically log when the component is mounted/created/etc.
- But it get's mixed up with other log messages
- Add to an array
- Go into console to retrieve array

## More polish (?)
- Plugin settings to turn on/off lifecycles
- Integrate into dev tools, but this is a pretty niche problem to have

## Full plugin code ready to copy/paste
