---
title: How to pass data between components in Vue
date: 2018-11-20
---

Understanding how to get data between different components in your Vue app can be incredibly frustrating.

This is especially true if you're new to Vue, and haven't had experience with React or Angular before.

Here are some **basic principles** that will save you from big headaches in the future:
* **Data is passed down** through the component tree to child components
* **Events are emitted up** through the component tree to parent components
* Data that is common to two or more components needs to be put in a **common ancestor component** (usually the parent)

This alone might be enough to spark something that will let you get past the problem you're having.

If you're like most people though, you'll need a better explanation than some simple one-liners.

### What you will learn

By the end of the article you'll understand:
1. How to communicate from a **child to parent** component
1. How to communicate between **sibling components**
2. How to **access child component data** from the parent component
3. How to **share data** between components

I'll also touch on using the store pattern, and when it's a good idea to start thinking about using Vuex in your app.

So **keep reading and I'll unpack what each of these principles mean**, how to implement them, and how they'll save you time as you build your Vue app.

First, we'll begin by explaining these principles more thoroughly.

Then, we'll go through how to solve each of these problems using **real code examples**. (You can skip straight here if you're too impatient!)

## Principle #1 -- Data is passed down
> Data is passed down through the component tree to child components

When we build apps using Vue, what we are really doing is composing a tree of components.

The component at the very top is the root component, usually our `<App />` component. There are branches coming down made up of other Vue components. At the bottom of each branch are leaves. Each leaf is a DOM node, such as a `p`, `div`, or text node.

TK insert diagram

The way that data flows in Vue (and React), is that we **pass it down through props**.

Data **does not flow up**, it only flows down the tree. It can flow through as many levels and as many parts of the tree as we want, but only ever flows down.

Sort of like a waterfall -- or am I not allowed to use that word in software development?

![waterfall](https://media.giphy.com/media/gK99k8iMtKeJ2/giphy.gif)

What this means is that any data that we want **must either be in the component, or in a component that is higher up in the tree**. If it's higher up we can easily get the data to flow down into our component.

You may be wondering why we would ever keep data outside of a component. I mean, if the component needs some data, why not just keep that data right there in the component itself?

But we'll need to do this in order to solve each of our 4 problems. You'll see soon enough how this plays out.

Ok, so first principle down, but you can only do so much with just passing data down the tree.

## Principle #2 -- Events are emitted up
> Events are emitted up through the component tree to parent components

Alright, so we can pass data down the tree, but **how do we communicate up the tree**?

In Vue, we do this **using events**.

TK example of using events

This is similar to what we are already used to doing in Javascript. If you wanted to do something when a button is clicked, you attach a listener to watch for the `click` event on the button.

Same with Vue.

We attach listeners to watch for events that are emitted by our components.

TK insert diagram of emitting up a tree

This lets us communicate from a child component to a parent component, telling it that something happened. We can also pass data up from the child to the parent.

Now, this may seem like it directly contradicts Principle #1, but it doesn't. While data **flows** downwards, data from an event only happens at very specific times. It doesn't **flow** up at all.

There are lots of other ways that events can be used. They're a very central and important topic in Vue, so it's a good idea to some time and explore them further.

TK some other examples of how events can be used?

We can go down, and we can go up.

What else do we need to know?

## Principle #3 -- Common data needs to be in a common ancestor
Normally we try to keep data inside of the component that needs it.

But other times it's necessary to keep data *outside* of the component that needs it. This is the case when there is more than one component that will need access to the data.

Where do we put the data then?

We call a component an *ancestor* if it is higher in the component tree. This could be a parent, a parent's parent (grandparent), or a parent's parent's parent (great grandparent). I'm sure you get the idea.

TK diagram showing different ancestor nodes

The reason we need to think about ancestors has to do with Principle #1, passing data down through the tree:

**A component can receive data from any ancestor component**

TK diagram showing data flowing from any ancestor component

So if we have two components that need to share data, we just put that data inside of an ancestor that they share. We can then take that data and pass it down through props until it gets to both components!

But hold on a minute.

We want to make sure to put it as low in the tree as possible. Otherwise we'll be passing down tons of props through components that don't even use those props.

TK example of prop-drilling

This is called prop-drilling, and can become very tedious and clutter up your code. (There are a couple of ways around this, I'll show you one at the end of the article).

Guess what? We made it!

Now we just have to take these principles and apply them to solve our 4 problems.

## Problem #1 -- Communicating from a child to a parent
Using this method we can communicate up the tree to our parent components.

But this is **only scratching the surface** of what we can do with events. They are a very powerful and central feature in Vue. So it's a good idea to take the time to learn about them.

## Problem #2 -- How to communicate between sibling components
What if we wanted our `child` components to tell each other when one of their `grandchild` components was clicked? To do this we would need to communicate between siblings.

### Using an event bus
The natural tendency here is to think, "instead of emitting an event to the parent, how do I **emit an event to the sibling components?**"

It seems like a pretty logical next step, and the conclusion you'd arrive at is to create an event bus.

It's a pretty good solution, but I think **this is the wrong approach** for one single reason:

**It goes against the Vue philosophy of declarative, state-driven applications.**

You want your components to be based on state as much as possible, because it makes your components much easier to reason about. The whole reason why we have had this revolution in frontend frameworks like Vue, React, Preact, Angular, Elm, and many others, is **because they are state-driven and declarative**.

So if **not with an event bus**, how do we do this?

### State-driven communication
Converting something from imperative code like we're used to, into a state-driven and declarative way can be a little hard to get the hang of at first.

You have to really ask yourself what you're trying to represent, and think deeply about what's going on. It takes a bit of practice, but you'll get the hang of it.

(And by the way, when I mention *state* in Vue, I mean anything reactive, that is a computed prop or is in your `data`).

For example, our natural inclination is to have the `child` component emit an event to all of it's siblings when one of it's `grandchild` components is clicked. But what do we want those other sibling `child` components to do when they receive this event?

Let's say that we want to hide *all* `grandchild` components when any one of them gets clicked. At first we'll allow some `child` components to show a `grandchild` if they want, but as soon as one of them is clicked we'll hide them all.

Somewhere we'll need to keep track of a variable `hideAllGrandchildren`, which will initially be set to `false`. Once we detect a click, we set that to `true`, and all of our `child` instances will pick up on this and hide their `grandchild` components.

As we saw earlier, if all of our `child` components need access to the same data, we need to put it in the parent. So `hideAllGrandchildren` has to go inside of our `parent` component:

Now we need a way of detecting when a `grandchild` is clicked and then change `hideAllGrandchildren` to `true`. We have to make a few modifications to our `child` component:
```js
// child.vue
<template>
  <grandchild
    v-if="showGrandchild"
    @click="grandchildWasClicked"
  >
  </grandchild>
</template>
```
```js
// child.vue
export default {
  methods: {
    grandchildWasClicked() {
      // Emit an event saying a grandchild was clicked
      this.$emit('grandchild-clicked');
    }
  }
}
```

Currently our `parent` component doesn't pick up on this emitted event, so we'll have to change that:

Now when the app first loads, all the grandchildren will be shown. But if *any* of the `grandchild` components is clicked, the `child` component will communicate this up to the main `parent` component, which will then pass the info along to all of the other `child` components.

TK insert full source code; check for errors and add props

## Problem #3 -- How to access child component data from the parent component

## Problem #4 -- How to share data between components
Let's build a simple app where we have a single list, but we want to display it in two different components at the same time. The first component will display the list normally, but the second will reverse the list:

And our component tree will look like this:
TK insert diagram

## Vuex and the store pattern
At some point your app gets larger and larger, your logic gets more and more complicated, and passing data around gets trickier and trickier.

You start banging your head against your keyboard, wondering if you should've chosen React, or gone with Elm or even ReasonML (seems to be getting lots of hype, why not?).

![](https://media.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif)

Don't worry, many before you have run into these issues.

It's beyond the scope of this article, but once you get to this point you can expand into using the [store pattern](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch). You can roll your own, since it's not very complicated, or use the officially-supported Vuex library.

**Please don't rush into using Vuex immediately.**

Far too many people get burned by using a state management library like Vuex or Redux too early on, and using it for too many things. I made this mistake in the past with Redux, and things got real ugly, real fast.

So take it slow, and only use it when you need to. And only use it in the places you absolutely need it.

Less is more when it comes to Vuex.









