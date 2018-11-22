---
title: "Vue Error: Avoid Mutating a Prop Directly"
date: 2018-11-30
description:
---

Intro

![](error.png)

## How is this caused?


## Mutating props in Vue is an anti-pattern
Here is the error message in full:

> Error message: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.

The [docs also explain](https://vuejs.org/v2/guide/migration.html#Prop-Mutation-deprecated) what's going on here.

In Vue, we pass data down the the component tree using props. A parent component will use props to pass data down to it's children components. Those components in turn pass data down another layer, and so on.

Then, to pass data back up the component tree, we use events.

We do this because it ensures that each component is isolated from each other. From this **we can guarantee a few things that help us in thinking about our components**:
- Only the component can change it's own state
- Only the parent of the component can change the props

If we start seeing some weird behaviour, knowing with 100% certainty where these changes are coming from makes it much easier to track down.

Keeping these rules makes our components simpler and easier to reason about.

### Props are overwritten when re-rendering
And another thing to keep in mind.

When Vue re-renders your component -- which happens every time something changes -- it will overwrite any changes you have made to your props.

This means that even if you try to mutate the prop locally, Vue will keep overwriting those changes.

Not a very good strategy, even if you don't think that this is an anti-pattern.

## Modifying value in the component
But what if you really need to modify the value of a prop?

You _still_ don't mutate it.

Instead, you can use the always useful computed prop to solve the same problem.

I'll show you how.

### Simple example
We'll start with a simple example.

(the more complex one is further down the page, as you might have guessed)

In our `ReversedList` component we will take in a list, reverse it, and render it to the page:
```html
<template>
  <ul>
    <li v-for="item in list" />
  </ul>
</template>
```
```js
export default {
  name: 'ReversedList',
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  created() {
    // Mutating the prop :(
    this.list = this.list.reverse();
  }
};
```

This is an example of a component that, although functional, isn't written very well.

In fact, it isn't completely functional either. It will only reverse the initial list it is given. If the prop is ever updated with a new list, that won't be reversed 😕.

But, we can use a computed prop to clean this component up!
```html
<template>
  <ul>
    <li v-for="item in reversedList" />
  </ul>
</template>
```
```js
export default {
  name: 'ReversedList',
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  computed: {
    reversedList() {
      return this.list.reverse();
    }
  }
};
```

We setup the computed prop `reversedList`, and then swap that out in our `li` tag.

The functionality is also fixed now, as `reversedList` will be recomputed every time that `list` is updated.

We're just getting started though. Let's move on to something a little more complicated.

### The (more) complicated example
Okay, so you might have already known to use computed props like we just showed.




- data is good for props used for initialization
- computed is great because it will always stay up to date
- doesn't have to always modify the value

Example: Passing a list to child component, computed prop used to display list. Button on child reverses list. Demonstrates you can transform or pass-through in a computed prop.

## Trying to communicate with parents
- props flow down
- events flow up
- communicating with parent should be done with events

Short example of using events (can be taken from another post probably)

## Getting tripped up by v-model
https://stackoverflow.com/questions/42614242/avoid-mutating-a-prop-directly-in-vuejs-2

- brief explanation of v-model
- v-model also modifies the value that you pass it
Short example showing how this works under the hood

Example of how to fix this problem