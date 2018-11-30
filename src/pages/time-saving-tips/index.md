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

If you want to learn more about the problems that Vuex solves, and how to use it in your app, check out [WTF is Vuex? A Beginner's Guide To Vue's Application Data Store](https://vuejsdevelopers.com/2017/05/15/vue-js-what-is-vuex/)

## Vue doesn't handle multiple root nodes -- yet
![](fragments.jpg)

Not all components make sense to have a single root node.

For example, if you're rendering a list of items, it could make way more sense to simple return the list of nodes as an array. Why unnecessarily wrap it in a `ol` or `ul` tag?

This is called a _fragment_.

Currently Vue doesn't support fragments, although there will be support for them in Vue 3.

It's something that React has had for awhile now, but it took a rewrite of the rendering system in order for them to implement this. Vue is in the same situation.

However, you can use functional components to get around this issue while we wait for Vue 3.0 to be released. You can read more about that in [Can A Vue Template Have Multiple Root Nodes (Fragments)?](https://vuejsdevelopers.com/2018/09/11/vue-multiple-root-fragments/)

## Validate your forms the easy way -- using Vuelidate
![](vuelidate.png)

At one of my previous jobs, I'm pretty sure my official job description was:

> Builds datatables and forms

It felt like all I was doing every day was building form after form after form.

But it makes sense. Forms are the main way that we get input from the user, and they are absolutely crucial to our applications working well. So we end up writing lots of them.

However, forms are also really tricky to build. On the surface it seems like they should be fairly straightforward to write. But as you start adding validation rules and other logic, it can quickly turn into a nightmare.

This is where Vuelidate comes in.

It's a library that makes it super easy to add custom validation, and does all the heavy lifting for you.

Learn how to setup Vuelidate by reading [Simple Vue.js Form Validation with Vuelidate](https://vuejsdevelopers.com/2018/08/27/vue-js-form-handling-vuelidate/)

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

##

https://scotch.io/tutorials/getting-started-with-vue-router
https://scotch.io/tutorials/how-to-write-a-unit-test-for-vuejs
https://scotch.io/tutorials/how-to-create-filters-in-vuejs-with-examples
https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care
https://alligator.io/vuejs/add-v-model-support/
https://alligator.io/vuejs/dynamic-styles/
https://alligator.io/vuejs/component-instancing/
https://alligator.io/vuejs/rest-api-axios/
https://alligator.io/vuejs/css-frameworks-vuejs/
https://alligator.io/vuejs/vue-async-components-load-error/
https://alligator.io/vuejs/passing-multiple-properties/
https://alligator.io/vuejs/common-gotchas/
https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/

- a bunch of my articles as well

