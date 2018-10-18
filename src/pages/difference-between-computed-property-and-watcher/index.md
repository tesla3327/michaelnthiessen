---
title: Computed props and watchers — what's the difference?
date: 2018-10-30
---

## What is a watcher?
When building components in Vue, we often need to respond to changes in our props.

A [watcher](https://vuejs.org/v2/guide/computed.html) -- or watched prop -- let's us **track a property** on our component and **run a function whenever it changes**.

For example, if the prop `colour` changes, we can decide to log something to the console:
```js
export default {
  name: 'ColourChange',
  props: ['colour'],
  watch: {
    colour()
      console.log('The colour has changed!');
    }
  }
}
```

You can put a watcher on any reactive property. This includes **computed props**, **props**, as well as data that is specified inside of `data()` on your Vue component.

They're really useful for **creating side effects** -- things that don't update your application's state immediately.

If you need to fetch data or do some other **ansychronous action**, watched props are really good for that. Or maybe you need to interact with an imperative browser API, such as `localstorage`. Because watchers aren't expected to be pure functions, we can do all sorts of things like this with them!

<!-- - does not create a new property
- can only react to changes in a single prop
- can be asynchronous, have side effects, does not return anything
- can do the same things that a computed property can do, but not nearly as nice and less declaratively
- you can watch anything that is reactive -->

Watched props are really powerful, but many times we use a watcher when all we needed was a computed property.

## What is a computed prop?
Computed props let us compose new data from other data.

Let's say we have a component that takes a person's `firstName` and `lastName`. We can create `fullName` as a computed prop:

```js
export default {
  name: 'FullName',
  props: ['firstName', 'lastName'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
```

Because computed props are **reactive**, whenever `firstName` or `lastName` are changed, `fullName` will be recomputed and will always be up to date.

Already we can see here an advantage of computed props over watchers (at least in this case). Composing this data together *can* be done with watchers, but it's much cleaner and **more declarative** using computed props:
```js
export default {
  name: 'FullName',
  props: ['firstName', 'lastName'],
  data() {
    return {
      fullName: this.firstName + ' ' + this.lastName,
    };
  },
  watched: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  }
}
```

This is a fairly simple example -- computed props can depend on as many other properties as you need them to. You can even watch other computed props, as well as reactive data in `data()`!

Computed properties are required to be **pure functions**. This means that they return a new value, but aren't allowed to change anything, and they must be synchronous.

Once we've created our computed prop, we can access it like we would any other prop. This is because computed props are reactive properties, along with regular props and data.

Now that we've covered how to use watchers and computed props, **where do we use them?**

<!-- - more declarative than watch
- "compose new data derived from other data"
- should be pure: return a value, synchronous, no side-effects
- creates a new reactive property
- can react to changes in multiple props (including other computed props)
- you can react to changes in a computed prop -->

## Common use cases for a watcher
The most common use case for a watched prop is in **creating side effects.**


- side effects
- update state that can't be a computed prop

## Examples of using a watched property

## Common use cases for computed props
- easier access to nested data
- "inject" variables into the `<template>`
- value/prop that depends on one or more props

## Examples of using a computed property


## Main differences
- more declarative than watch
- "compose new data derived from other data"
- should be pure: return a value, synchronous, no side-effects
- creates a new reactive property
- can react to changes in multiple props (including other computed props)
- you can react to changes in a computed prop

## How to decide which to use
- most of the time you can replace an instance of watch with computed prop
- try to use a computed prop, if it doesn't work, use a watcher
- computed props are generally better since they are cached

The watchers can often be confused with `computed` properties, because they operate in a similar way. It's even trickier to know when to use which one.

But I've come up with a good rule of thumb.

**Watch is for side effects. If you need to change state you want to use a computed prop instead.**

A **side effect** is anything that doesn't effect your state. **State** is anything inside of `data` or a computed prop.

Common examples are:
- Fetching data
- Manipulating the DOM
- Using a browser API, such as local storage or audio playback

None of these things affect your component directly, so they are considered to be *side effects*.

If you aren't doing something like this, you'll probably want to use a computed prop. Computed props are really good for when you need to **update a calculation in response to something else changing**.

However, *there are* cases where you might want to use a watcher to update something in your `data`. 

Sometimes it just doesn't make sense to make something a computed prop. If you have to update it from your `<template>` or from a method, it needs to go inside of your `data`. But then if you need to update it in response to a property changing, you *need* to use the watcher.

![](https://media.giphy.com/media/Bc3SkXz1M9mjS/giphy.gif)

**NOTE**: Be careful with using a `watch` to update state. This means that both your component and the parent component are updating -- directly or indirectly -- the same state. **This can get very ugly very fast.**

## Common hangups with watched props
- watching nested data

## Common hangups with computed props
- computed props are lazily evaluated (only executed when you use them)
- computed props are cached, which also can give a performance boost