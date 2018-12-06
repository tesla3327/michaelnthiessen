---
title: Time Saving Tips
date: 2018-12-20
---

Easily 100-200 words for each article:
- overview of the problem
- brief solution/hook
- sell the link

## Use Vuex before it's too late
![](vuex.jpg)

If you're building a medium to large sized app, your state -- all the data you need to keep track of -- can get pretty complicated.

It's not just the amount of information you have to deal with either. The different interactions between your state and all of the different ways your state can change only add to this complexity.

Managing state is a difficult task! So many bugs and wasted time are due to very complicated state and logic.

That's why Evan You created Vuex to go along with Vue.

It's not necessary to use for small projects or projects with simple state. But for larger projects, it's absolutely essential.

If you want to learn more about the problems that Vuex solves, and how to use it in your app, check out [WTF is Vuex? A Beginner's Guide To Vue's Application Data Store](https://vuejsdevelopers.com/2017/05/15/vue-js-what-is-vuex/) by [Anthony Gore](https://twitter.com/@anthonygore).

## Vue doesn't handle multiple root nodes -- yet
![](fragments.jpg)

Not all components make sense to have a single root node.

For example, if you're rendering a list of items, it could make way more sense to simple return the list of nodes as an array. Why unnecessarily wrap it in a `ol` or `ul` tag?

This is called a _fragment_.

Currently Vue doesn't support fragments, although there will be support for them in Vue 3.

It's something that React has had for awhile now, but it took a rewrite of the rendering system in order for them to implement this. Vue is in the same situation.

However, you can use functional components to get around this issue while we wait for Vue 3.0 to be released. You can read more about that in [Can A Vue Template Have Multiple Root Nodes (Fragments)?](https://vuejsdevelopers.com/2018/09/11/vue-multiple-root-fragments/) by [Anthony Gore](https://twitter.com/@anthonygore).

## Validate your forms the easy way -- using Vuelidate
![](vuelidate.png)

At one of my previous jobs, I'm pretty sure my official job description was:

> Builds datatables and forms

It felt like all I was doing every day was building form after form after form.

But it makes sense. Forms are the main way that we get input from the user, and they are absolutely crucial to our applications working well. So we end up writing lots of them.

However, forms are also really tricky to build. On the surface it seems like they should be fairly straightforward to write. But as you start adding validation rules and other logic, it can quickly turn into a nightmare.

This is where Vuelidate comes in.

It's a library that makes it super easy to add custom validation, and does all the heavy lifting for you.

Learn how to setup Vuelidate by reading [Simple Vue.js Form Validation with Vuelidate](https://vuejsdevelopers.com/2018/08/27/vue-js-form-handling-vuelidate/) by [Dobromir Hristov](https://twitter.com/@d_m_hristov).

## Build components that play nicely with each other
![](play_nicely.jpg)

The absolutely _worst_ feeling is realizing that you built your component the wrong way, and now you have refactor it completely.

You don't want to overengineer your code, but many times things like this can avoided from the start.

[Kevin Ball](https://twitter.com/@kball11) has written an article outlining several different things to keep in mind as you write your components to keep them playing nice with others.

Check out his article: [How To Build Vue Components That Play Nice](https://vuejsdevelopers.com/2018/06/18/vue-components-play-nicely/)

## Don't write one-off transitions -- make them reusable
![](transitions.jpg)

Transitions are a really cool feature in Vue. If you haven't had a chance to [check them out](https://vuejs.org/v2/guide/transitions.html), they're a really easy way to add nice animations into your app.

But you don't want to keep re-writing the same thing over and over again, do you?

In a great article, [Cristi Jora](https://twitter.com/@jora_cristi) shows us how we can write a component to make our transitions reusable. It also demonstrates some great concepts for how we can make our code more reusable, and can apply to other parts of your app as well.

Check out the article here: [Creating Reusable Transitions in Vue](https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/)

## Use vue-router to handle client-side routing
![](vue-router.png)

If you're doing client-side routing, hand-rolling your own solution isn't that difficult.

It's actually pretty simple to match routes, then swap between different components.

But just using `vue-router` is _so much easier_.

It's also an official Vue package, so you know it will always work really well with Vue.

And once you start dealing with:
* queries
* route params
* nested routes
* dynamic route matching
* transitions

...which you probably will, writing your own solution gets to be very cumbersome.

Instead, just check out this guide from [Ed Zynda](https://twitter.com/edzynda) on [Getting Started With Vue Router](https://scotch.io/tutorials/getting-started-with-vue-router)

## Create filters to reuse formatting
![](filters.jpg)

Formatting data to display on screen can get annoying.

If you're dealing with lots of numbers, percentages, dates, currencies, names, or anything else like that, you'll likely have functions that format that data for you.

Vue comes with this great feature called _filters_, which was inspired by Angular.

They let you easily encapsulate these formatting functions and use them in your template with a really clean syntax.

But don't just take my word for it.

Check out this very detailed article from [Rachid Laasri](https://twitter.com/rashidlaasri), which has tons of examples on how to write your own filters: [How to Create Filters in Vue.js with Examples](https://scotch.io/tutorials/how-to-create-filters-in-vuejs-with-examples)

## Don't be afraid of JSX -- it's extremely powerful
![](jsx.jpg)

A lot of people are intimidated by JSX.

I get it.

It has a weird syntax, and it can be difficult to wrap your head around how it's used.

But sometimes -- especially when writing higher-level reusable components -- a template just doesn't cut it. You need to take advantage of the full power of the `render` method.

And JSX is one of the easiest ways of doing that.

[Samuel Oloruntoba](https://twitter.com/Kayandra_X) has written a great introduction to JSX and why exactly it is great that Vue has support for it: [Using JSX with Vue and Why You Should Care](https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care)

## Add v-model support to custom components
![](https://media.giphy.com/media/8vwFqPVe0JhpyyIIl7/giphy.gif)

As web developers, our jobs revolve around getting data from inputs.

Vue gives us `v-model`, which is some syntactic sugar that creates a two-way data-binding for us. This is great for inputs, as it simplifies working with them a lot.

But did you know you can add `v-model` support to your own components?

[Joshua Bemenderfer](https://twitter.com/@tribex_) shows us how this can be done in [Adding v-model Support to Custom Vue.js Components](https://alligator.io/vuejs/add-v-model-support/).

## Understand how Vue component instances work
![](https://media.giphy.com/media/iywZ2e4SwSuwU/giphy.gif)

Vue has a very clever design to improve performance and reduce its memory footprint.

While not necessary, understanding how this works under the hood will only help you as you build more and more Vue components.

Besides, it's really interesting!

In this brief but very informative article by [Joshua Bemenderfer](https://twitter.com/@tribex_), learn how Vue creates component instances: [Understanding Vue.js Component Instancing](https://alligator.io/vuejs/component-instancing/).

## Learn how to use Axios for data fetching
![](https://media.giphy.com/media/2Faz1ANKPPUY4XhT2/giphy.gif)

Almost every app needs to fetch or post data.

The most popular library to help us do that these days is [Axios](https://github.com/axios/axios). It is really configurable, and makes working with external data _so_ much easier.

You can just use the browser's built-in `fetch` most of the time. But you'll probably end up writing a wrapper for it anyways, to make common cases more convenient to deal with.

Might as well just start off on the right foot and use axios from the beginning then!

Learn how to integrate `axios` into your Vue app by reading [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/) from [Joshua Bemenderfer](https://twitter.com/@tribex_).

## Use an off the shelf CSS framework
![](https://media.giphy.com/media/12ttoBXEqixfmo/giphy.gif)

Getting all of your CSS _just right_ can take an extraordinary amount of time.

My suggestion is to just use a CSS framework, where most of the work is already done for you.

All of the styling, colours, drop shadows, and aesthetic elements are already worked out. No need to learn graphic design! On top of that, they all come with tons of CSS styles to help you with layout, forms, and other common elements like buttons, popups, alert boxes, and so much more.

The best part is the variety.

There are tons of great ones to pick from:
- [Tailwind](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)
- [Foundation](https://foundation.zurb.com/sites/docs/)

And don't waste any time trying to figure out how to integrate them into your app. [Dave Berning](https://twitter.com/@daveberning) has written a great article to help get you started: [Integrating and Using CSS Frameworks with Vue.js](https://alligator.io/vuejs/css-frameworks-vuejs/).

## Show loading and error states on your async components
![](https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif)

You probably hear a lot about web performance these days -- and for good reason.

The easiest way to get your application bundle smaller is to split out the code into multiple, smaller, chunks. **Vue comes with first-class support for this**, which is really cool!

But the user's experience can suffer if we don't provide a good loading state while fetching the component. And we also want to show a good error state if something goes wrong.

Luckily, integrating these isn't too difficult.

[Joshua Bemenderfer](https://twitter.com/@tribex_) shows us exactly how this can be done in [Showing Loading & Error States with Vue.js Async Components](https://alligator.io/vuejs/vue-async-components-load-error/).

## Clean up your props for goodness sake!
![](https://media.giphy.com/media/3oKIPCSX4UHmuS41TG/giphy.gif)

Some components only require a few props, but others require passing many, many, props.

Eventually this can get pretty messy.

```html
<v-btn
  color="primary"
  href="https://michaelnthiessen.com"
  small
  outline
  block
  ripple
>
  Hello
</v-btn>
```

But there are several different ways that we can clean this up. Not only will this make our code easier to look at, but it will also be easier to understand, and modify in the future.

[Alex Jover Morales](https://twitter.com/@alexjoverm) has written an excellent article outlining the different ways you can clean up your props. Check it out: [Passing Multiple Properties to a Vue.js Component](https://alligator.io/vuejs/passing-multiple-properties/).

## Beware of some common pitfalls
![](https://media.giphy.com/media/oxyfEcT74rApq/giphy.gif)

Like any piece of technology, Vue has some areas that can catch you off guard.

I cannot tell you how many hours I wasted because I didn't understand some of these things. But learning them didn't take that long either.

If only I had known!

Instead of struggling through these gotchas like I did when I was learning Vue, you can avoid most of these.

Read [Common Vue.js Gotchas](https://alligator.io/vuejs/common-gotchas/) by [Joshua Bemenderfer](https://twitter.com/@tribex_), and save yourself a lot of frustration!

- a bunch of my articles as well

