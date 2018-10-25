---
title: stuff
date: 2018-10-30
---

In CSS it's pretty easy to change things on `hover`. We just use the `:hover` [psuedo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover):

```css
.item {
  background: blue;
}

.item:hover {
  background: green;
}
```

In Vue it gets a [little](https://forum.vuejs.org/t/displaying-some-elements-on-hover/26974) [trickier](https://stackoverflow.com/questions/30911933/mouseover-or-hover-vue-js), because we don't have this functionality built in.

We have to implement most of this ourselves.

But don't worry, it's not that much work.

In this short article you'll learn:
- How to implement a **hover effect** in Vue
- How to **show an element** on mouseover
- How to dynamically **update classes** with a mouseover

## Listening to the right events
So, which events do we need to listen to?

We want to know when the mouse is hovering over the element. This can be figured out by keeping track of when the mouse _enters_ the element, and when the mouse _leaves_ the element.

To keep track of when the mouse leaves, we'll use the [mouseleave event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave).

Detecting when the mouse enters can be done with the corresponding [mouseenter event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter), but we won't be using that one.

The reason is that there can be significant performance problems when using `mouseenter` on deep DOM trees. This is because `mouseenter` fires a unique event to the entered element, as well as every single ancestor element.

What will we be using instead, you ask?

![](https://media.giphy.com/media/NFcyDseB3m9uU/giphy.gif)

Instead, we will use the [mouseover event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover).

The `mouseover` event works pretty much the same as `mouseenter`. The main difference being that `mouseover` bubbles like most other DOM events. Instead of creating a ton of unique events, there is only one.

## Let's hook things up
To hook everything up we will use [Vue events](https://vuejs.org/v2/guide/events.html) to listen for when the mouse enters and leaves, and update our state accordingly.

We will also be using the shorthand. Instead of using `v-on:event`, we can just write `@event`.

Here's how we hook it up:
```html
<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
  />
</template>
```
```js
export default {
  data() {
    return {
      hover: false,
    };
  }
}
```

Now the reactive property `hover` will always reflect if the mouse is hovering over the element or not!

## Showing an element when hovering
If you wanted to show an element based on the hover state, you can pair this with a [v-if directive](https://vuejs.org/v2/guide/conditional.html):

```html
<template>
  <div>
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      Hover me to show the message!
    </span>
    <span v-if="hover">This is a secret message.</span>
  </div>
</template>
```
```js
export default {
  data() {
    return {
      hover: false,
    };
  }
}
```

## Toggling classes when hovering
You can also do a similar thing to [toggle classes](https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax):
```html
<template>
  <div>
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
    >
      Hover me to change the background!
    </span>
  </div>
</template>
```
```js
export default {
  data() {
    return {
      hover: false,
    };
  }
}
```
```css
.active {
  background: green;
}
```

Although that works, it's not the best solution.

For something like this it's better to just use CSS:
```html
<template>
  <span>
    Hover me to change the background!
  </span>
</template>
```
```css
span:hover {
  background: green;
}
```

Vue isn't necessary at all to achieve this effect.

## Hovering over a Vue component
If you have a Vue component that you'd like to implement this behaviour with, you'll have to make a slight modification.

You can't listen to the `mouseover` and `mouseleave` events like we were doing before. If your Vue component doesn't [emit those events](https://vuejs.org/v2/guide/components-custom-events.html), there's nothing to listen to.

Instead, we can add the `.native` [event modifier](https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components) to listen to DOM events directly on our custom Vue component:
```html
<template>
  <my-custom-component
    @mouseover.native="hover = true"
    @mouseleave.native="hover = false"
  />
</template>
```
```js
export default {
  data() {
    return {
      hover: false,
    };
  }
}
```

## Conclusion

There you have it!

Achieving a mouseover effect in Vue JS requires only a little bit of code.

Now you can go and do all sorts of things when someone hovers over your Vue app.
