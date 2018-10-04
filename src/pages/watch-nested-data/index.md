---
title: How do you watch nested data in Vue?
date: 2018-10-30
---

### Methods, computed, watchers
https://css-tricks.com/methods-computed-and-watchers-in-vue-js/

First we'll give a quick refresher on **what a watcher actually is**.

Second, we have to take a slight detour and **clarify the distinction between computed props and watchers**.

Thirdly, we'll dive into **how you can watch nested data in arrays and objects**. Feel free to skip straight here if you need -- you can always come back to the first sections later on.

We'll also go through what you can do with `immediate` and `handler` fields on your watchers. This will take your watcher skills to the next level!

But first we have to make sure we have a good foundation.

## What is a watch method?
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

## Should you use watch or computed?
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

**NOTE**: Be careful with using a `watch` to update state. This means that both your component and the parent component are updating -- directly or indirectly -- the same state. **This can get very ugly very fast.**

## Watching nested data -- Arrays and Objects
So you've decided that you *actually* need a watcher.

But you're watching an array or an object, and it isn't working as you had expected.

**What's going on here?**

Let's say you set up an array with some values in it:
```js
const array = [1, 2, 3, 4];
// array = [1, 2, 3, 4]
```

Now you update the array by pushing some more values into it:
```js
array.push(5);
array.push(6);
array.push(7);
// array = [1, 2, 3, 4, 5, 6, 7]
```

Here's the question: has `array` changed?

Well, it's not so simple.

The *contents* of `array` have changed, but the variable `array` still points to the same Array object. The array container hasn't changed, but **what is inside of the array** has changed.

So when you watch an array or an object, Vue has no idea that **you've changed what's inside** that prop. You have to tell Vue that you want it to inspect inside of the prop when watching for changes.

You can do this by setting `deep` to `true` on your watcher:
```js
export default {
  name: 'ColourChange',
  props: {
    colours: {
      type: Array,
      required: true,
    },
  },
  watch: {
    colours: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler()
        console.log('The list of colours has changed!');
      }
    }
  }
}
```

TK `handler`

Now Vue knows that it should also keep track of what's inside the prop when it's trying to detect changes.

## Immediate
A watcher will only fire when the prop's value changes, but we often need it to fire once on startup as well.

Let's say we have a `MovieData` component, and it fetches data from the server based on what the `movie` prop is set to:
```js
export default {
  name: 'MoveData',
  props: {
    movie: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      movieData: {},
    }
  },
  
  watch: {
    // Whenever the movie prop changes, fetch new data
    movie(movie) {
      // Fetch data about the movie
      fetch(`/${movie}`).then((data) => {
        this.movieData = data;
      });
    }
  }
}
```

Now, this component will work wonderfully. Whenever we change the `movie` prop, our watcher will fire, and it will fetch the new data.

Our problem here is that when the page loads, `movie` will be set to some default value. But since the prop hasn't technically changed, the watcher isn't fired. This means that the data isn't loaded until we select a different movie.

So how do we get our watcher to fire immediately?

We set `immediate` to true:
```js
watch: {
  // Whenever the movie prop changes, fetch new data
  movie: {
    // Will fire as soon as the component is created
    immediate: true,
    handler(movie) {
      // Fetch data about the movie
      fetch(`/${movie}`).then((data) => {
        this.movieData = data;
      });
    }
  }
}
```

## Handler


