---
title: How to Implement a Mouseover or Hover in Vue
date: 2018-11-09
description: "In CSS it's pretty easy to change things on 'hover'. In Vue it gets a little trickier. In this short article you'll learn -- How to implement a hover effect in Vue, how to show an element on mouseover, and how to dynamically update classes with a mouseover."
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

But don't worry, it's not _that_ much work.

In this short article you'll learn:
- How to implement a **hover effect** in Vue
- How to **show an element** on mouseover
- How to dynamically **update classes** with a mouseover
- How to do this even on **custom Vue components**

But first I have something really awesome to share with you...

## Giving back to my 13,000+ monthly readers
Every day I'm astonished that so many of you are reading what I put on here. It's truly humbling, and you are the reason I am so motivated to keep writing.

So I wanted to thank you!

I have written a **144 page book** on solving some of the most common (and frustrating) problems that you'll encounter when writing Vue apps.

It covers everything from handling reactivity problems to understanding confusing errors.

Plus, you'll get to see how to implement some common behaviours (the right way), like changing classes dynamically.

The best part?

Even though I could charge money for this book, I'm giving it away to you for free!

<div class="cta">
  <img src="/front-cover.png" />
  <form
    action="https://michaelnthiessen.us7.list-manage.com/subscribe/post?u=aac07b28d06210ba964471dcf&amp;id=a98572f937"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
    noValidate
  >
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <label htmlFor="mce-EMAIL">Email Address </label>
        <input
          type="email"
          name="EMAIL"
          class="required email"
          id="mce-EMAIL"
        />
      </div>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response"></div>
        <div class="response" id="mce-success-response"></div>
      </div>
      <div aria-hidden="true" hidden>
        <input type="text" name="b_aac07b28d06210ba964471dcf_a98572f937" tabIndex="-1" value=""/>
      </div>
      <div className="clear">
        <input type="submit" value="Download my FREE book now!" name="subscribe" id="mc-embedded-subscribe" class="button subscribe" />
      </div>
    </div>
  </form>
</div>

## Listening to the right events
So, which events do we need to listen to?

We want to know when the mouse is hovering over the element. This can be figured out by keeping track of when the mouse _enters_ the element, and when the mouse _leaves_ the element.

To keep track of when the mouse leaves, we'll use the [mouseleave event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave).

Detecting when the mouse enters can be done with the corresponding [mouseenter event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter), but we won't be using that one.

The reason is that there can be significant performance problems when using `mouseenter` on deep DOM trees. This is because `mouseenter` fires a unique event to the entered element, as well as every single ancestor element.

What will we be using instead, you ask?!?

![](https://media.giphy.com/media/NFcyDseB3m9uU/giphy.gif)

Instead, we will use the [mouseover event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover).

The `mouseover` event works pretty much the same as `mouseenter`. The main difference being that `mouseover` bubbles like most other DOM events. Instead of creating a ton of unique events, there is only one -- making it much faster!

## Let's hook things up
To hook everything up we will use [Vue events](https://vuejs.org/v2/guide/events.html) to listen for when the mouse enters and leaves, and update our state accordingly.

We will also be using the shorthand of `v-on`.

Instead of writing `v-on:event`, we can just write `@event`.

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

Whenever you put your mouse over `Hover me to show the message!`, the secret message will appear!

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

As you can see, even though we can do it using Vue, we don't need it to achieve this effect.

## Hovering over a Vue component
If you have a Vue component that you'd like to implement this behaviour with, you'll have to make a slight modification.

**You can't listen to the `mouseover` and `mouseleave` events like we were doing before.**

If your Vue component doesn't [emit those events](https://vuejs.org/v2/guide/components-custom-events.html), then we can't listen to them.

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

Using `.native`, we listen for native DOM events instead of the ones that are emitted from the Vue component.

If this part is a little confusing, [check out the docs](https://vuejs.org/v2/guide/components-custom-events.html). They do a really great job of explaining how this works.

## Conclusion

There you have it!

Achieving a mouseover effect in Vue JS requires only a little bit of code.

Now you can go and do all sorts of things when someone hovers over your Vue app.
