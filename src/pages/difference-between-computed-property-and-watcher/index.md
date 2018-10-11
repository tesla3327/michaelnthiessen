---
title: Computed props and watchers — what's the difference?
date: 2018-10-30
---

## What is a watcher?
- does not create a new property
- can only react to changes in a single prop
- can be asynchronous, have side effects, does not return anything
- can do the same things that a computed property can do, but not nearly as nice and less declaratively
- you can watch computed props

In Vue we can [watch for when a property changes](https://vuejs.org/v2/guide/computed.html), and then do something in response to that change.

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

These watchers let us do all sorts of useful things.

But many times we use a watcher when all we needed was a computed prop.

## What is a computed prop?
- more declarative than watch
- "compose new data derived from other data"
- should be pure: return a value, synchronous, no side-effects
- creates a new reactive property
- can react to changes in multiple props (including other computed props)
- you can react to changes in a computed prop

## Common use cases for a watcher
- side effects
- update state that can't be a computed prop

## Common use cases for computed props
- easier access to nested data
- "inject" variables into the `<template>`
- value/prop that depends on one or more props


## Main differences

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