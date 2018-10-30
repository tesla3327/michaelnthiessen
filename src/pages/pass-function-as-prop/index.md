---
title: How to Pass a Function as a Prop in Vue
date: 2018-11-30
---
It's a pretty common question that newer Vue developers often ask.

You can pass strings, arrays, numbers, and objects as props.

But can you pass a function as a prop?

**While you can pass a function as a prop, this is almost always a bad idea. Instead, try using a feature of Vue that is more suited to your problem.**

If you keep reading you'll see what I mean.

In this article I'll show you:
- How to pass a function as a prop -- even though you shouldn't
- Why React and Vue are different when it comes to passing methods as props
- Why events or scoped slots might be better solutions
- How you can access a parent's scope in the child component

First, even though I probably shouldn't, I'll show you how to do it.

## Passing a function as a prop
Taking a function or a method and passing it down to a child component as a prop is relatively straightforward. In fact, it is exactly the same as passing any other variable:

```html
<template>
  <ChildComponent :function="myFunction" />
</template>
```
```js
export default {
  methods: {
    myFunction() {
      // ...
    }
  }
};
```

But as I said earlier, this is something you shouldn't ever be doing in Vue.

Why?

Well, Vue has something better...

## React vs Vue
If you're coming from React you're used to passing down functions all of the time.

In React you'll pass a function from a parent to a child component, so the child can communicate back up to the parent. Props and data flow down, and function calls flow up.

Vue, however, has a different mechanism for achieving child -> parent communication.

We use [events](https://vuejs.org/v2/guide/events.html) in Vue.

This works in the same way that the DOM works -- providing a little more consistency with browser than React does. Elements can emit events, and these events can be listened to.

So even though [it can be tempting](https://medium.com/front-end-hacking/passing-methods-as-props-in-vue-js-d65805bccee) to pass functions as props in Vue, it's considered an anti-pattern.

## Using events
Events are how we communicate to parent components in Vue.

Here is a short example to illustrate how events work.

First we'll create our child component, which emits an event when it is created:
```js
// ChildComponent
export default {
  created() {
    this.$emit('created');
  }
}
```

In our parent component, we will listen to that event:
```html
<template>
  <ChildComponent @created="handleCreate" />
</template>
```
```js
export default {
  methods: {
    handleCreate() {
      console.log('Child has been created.');
    }
  }
};
```

There is a lot more that can be done with events, and this only scratches the surface. I would highly recommend that you check out the [official Vue docs](https://vuejs.org/v2/guide/events.html) to learn more about events. Definitely worth the read!

But events don't solve _all_ of our problems.

## Accessing a parent's scope from the child component
Scoped slots are a more advanced topic, but they are also incredibly useful.

In fact, I would consider them to be one of the most powerful features that Vue offers.
