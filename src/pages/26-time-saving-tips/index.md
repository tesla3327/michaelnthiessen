---
title: 26 Time Saving Tips for Vue
date: 2019-01-15
description: "When writing Vue applications, we waste our time by doing things the wrong way, when we could have been doing it the right way from the start. That's why I put together this list of 26 articles that will help you save time, by teaching you how to avoid some common time-wasters."
---

We all hate wasting our time.

When writing Vue applications, we waste our time by doing things the _wrong_ way, when we could have been doing it the _right_ way from the start.

But it's hard to know what things we should be learning.

That's why I put together this list of **26 articles that will help you save time**, by teaching you how to avoid some common time-wasters.

And once you've gone through this list, you can share it with others so that you can help them save time too!

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
        <input type="submit" value="Get my FREE book now!" name="subscribe" id="mc-embedded-subscribe" class="button subscribe" />
      </div>
    </div>
  </form>
</div>

## 1. Use Vuex before it's too late
![](vuex.jpg)

If you're building a medium to large sized app, your state -- all the data you need to keep track of -- can get pretty complicated.

It's not just the amount of information you have to deal with either. The different interactions between your state and all of the different ways your state can change only add to this complexity.

Managing state is a difficult task! So many bugs and wasted time are due to very complicated state and logic.

That's why Evan You created Vuex to go along with Vue.

It's not necessary to use for small projects or projects with simple state. But for larger projects, it's absolutely essential.

If you want to learn more about the problems that Vuex solves, and how to use it in your app, check out [WTF is Vuex? A Beginner's Guide To Vue's Application Data Store](https://vuejsdevelopers.com/2017/05/15/vue-js-what-is-vuex/) by [Anthony Gore](https://twitter.com/@anthonygore).

_And here's an interesting fact_.

Evan You originally intended Vuex to be pronounced "vukes" &mdash; rhyming with "pukes". But so many people pronounced it as "view-ex" that he changed his mind 😂.

## 2. Understand how Vue component instances work
![](https://media.giphy.com/media/iywZ2e4SwSuwU/giphy.gif)

Vue has a very clever design to improve performance and reduce its memory footprint.

While not necessary, understanding how this works under the hood will only help you as you build more and more Vue components.

Besides, it's really interesting!

In this brief but very informative article by [Joshua Bemenderfer](https://twitter.com/@tribex_), learn how Vue creates component instances: [Understanding Vue.js Component Instancing](https://alligator.io/vuejs/component-instancing/).

## 3. Force Vue to re-render -- the right way
![](https://media.giphy.com/media/11BAxHG7paxJcI/giphy.gif)

In 99% of cases where something doesn't rerender properly, it's a reactivity problem.

So if you're new to Vue, you _definitely_ need to [learn as much as you can about reactivity](https://medium.com/js-dojo/reactivity-in-vue-js-and-its-pitfalls-de07a29c9407). I see it as being one of the biggest sticking points for new developers.

However, sometimes you need a sledgehammer to get things done and ship your code. Unfortunately, deadlines don't move themselves.

And _sometimes_, forcing a component to rerender is actually the best way to do it (but very very rarely). 

By far my most popular article, I've written about [the proper way to rerender a component](/force-re-render/).

## 4. Vue doesn't handle multiple root nodes -- yet
![](fragments.jpg)

Not all components make sense to have a single root node.

For example, if you're rendering a list of items, it could make way more sense to simple return the list of nodes as an array. Why unnecessarily wrap it in a `ol` or `ul` tag?

This is called a _fragment_.

Currently Vue doesn't support fragments, although there will be support for them in Vue 3.

It's something that React has had for awhile now, but it took a rewrite of the rendering system in order for them to implement this. Vue is in the same situation.

However, you can use functional components to get around this issue while we wait for Vue 3.0 to be released. You can read more about that in [Can A Vue Template Have Multiple Root Nodes (Fragments)?](https://vuejsdevelopers.com/2018/09/11/vue-multiple-root-fragments/) by [Anthony Gore](https://twitter.com/@anthonygore).

## 5. Validate your forms the easy way -- using Vuelidate
![](vuelidate.png)

At one of my previous jobs, I'm pretty sure my official job description was:

> Builds datatables and forms

It felt like all I was doing every day was building form after form after form.

But it makes sense. Forms are the main way that we get input from the user, and they are absolutely crucial to our applications working well. So we end up writing lots of them.

However, forms are also really tricky to build. On the surface it seems like they should be fairly straightforward to write. But as you start adding validation rules and other logic, it can quickly turn into a nightmare.

This is where Vuelidate comes in.

It's a library that makes it super easy to add custom validation, and does all the heavy lifting for you.

Learn how to setup Vuelidate by reading [Simple Vue.js Form Validation with Vuelidate](https://vuejsdevelopers.com/2018/08/27/vue-js-form-handling-vuelidate/) by [Dobromir Hristov](https://twitter.com/@d_m_hristov).

## 6. Build components that play nicely with each other
![](play_nicely.jpg)

The absolutely _worst_ feeling is realizing that you built your component the wrong way, and now you have refactor it completely.

You don't want to overengineer your code, but many times things like this can avoided from the start.

[Kevin Ball](https://twitter.com/@kball11) has written an article outlining several different things to keep in mind as you write your components to keep them playing nice with others.

Check out his article: [How To Build Vue Components That Play Nice](https://vuejsdevelopers.com/2018/06/18/vue-components-play-nicely/)

## 7. Don't write one-off transitions -- make them reusable
![](transitions.jpg)

Transitions are a really cool feature in Vue. If you haven't had a chance to [check them out](https://vuejs.org/v2/guide/transitions.html), they're a really easy way to add nice animations into your app.

But you don't want to keep re-writing the same thing over and over again, do you?

In a great article, [Cristi Jora](https://twitter.com/@jora_cristi) shows us how we can write a component to make our transitions reusable. It also demonstrates some great concepts for how we can make our code more reusable, and can apply to other parts of your app as well.

Check out the article here: [Creating Reusable Transitions in Vue](https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/)

## 8. Learn how to use Axios for data fetching
![](https://media.giphy.com/media/2Faz1ANKPPUY4XhT2/giphy.gif)

Almost every app needs to fetch or post data.

The most popular library to help us do that these days is [Axios](https://github.com/axios/axios). It is really configurable, and makes working with external data _so_ much easier.

You can just use the browser's built-in `fetch` most of the time. But you'll probably end up writing a wrapper for it anyways, to make common cases more convenient to deal with.

Might as well just start off on the right foot and use axios from the beginning then!

Learn how to integrate `axios` into your Vue app by reading [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/) from [Joshua Bemenderfer](https://twitter.com/@tribex_).

## 9. Use vue-router to handle client-side routing
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

## 10. Create filters to reuse formatting
![](filters.jpg)

Formatting data to display on screen can get annoying.

If you're dealing with lots of numbers, percentages, dates, currencies, names, or anything else like that, you'll likely have functions that format that data for you.

Vue comes with this great feature called _filters_, which was inspired by Angular.

They let you easily encapsulate these formatting functions and use them in your template with a really clean syntax.

But don't just take my word for it.

Check out this very detailed article from [Rachid Laasri](https://twitter.com/rashidlaasri), which has tons of examples on how to write your own filters: [How to Create Filters in Vue.js with Examples](https://scotch.io/tutorials/how-to-create-filters-in-vuejs-with-examples)

## 11. Make sure to avoid annoying errors and warnings
![Stapler in jello prank](https://media.giphy.com/media/jNmhFR8sdA9G0/giphy.gif)

As web development has gotten more complex, so have our tools. These days we have linters, editors, type checkers, and all sorts of things that save us time by telling us our mistakes (almost) as soon as we make them.

Vue also has really good warning and error messages, but if you keep getting them it can be annoying.

Why not just avoid them altogether?

One of the most common warnings I got when I was first learning Vue was this one:

![](../property-or-method-not-defined/error.png)

Luckily, I wrote an [entire article](/property-or-method-not-defined/) on what causes this, and more importantly, how to avoid it altogether!

## 12. Don't be afraid of JSX -- it's extremely powerful
![](jsx.jpg)

A lot of people are intimidated by JSX.

I get it.

It has a weird syntax, and it can be difficult to wrap your head around how it's used.

But sometimes -- especially when writing higher-level reusable components -- a template just doesn't cut it. You need to take advantage of the full power of the `render` method.

And JSX is one of the easiest ways of doing that.

[Samuel Oloruntoba](https://twitter.com/Kayandra_X) has written a great introduction to JSX and why exactly it is great that Vue has support for it: [Using JSX with Vue and Why You Should Care](https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care)

## 13. Figure out how to react to mouse hover
![](https://media.giphy.com/media/3o6ZsW5lgayQl1uX6w/giphy.gif)

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

I've written an in-depth article on using hover in Vue. It covers a lot of different things you'll want to know:
- How to implement a **hover effect** in Vue
- How to **show an element** on mouseover
- How to dynamically **update classes** with a mouseover
- How to do this even on **custom Vue components**

Check out the article: [How to Implement a Mouseover or Hover in Vue](/hover-in-vue/)

## 14. Add v-model support to custom components
![](https://media.giphy.com/media/8vwFqPVe0JhpyyIIl7/giphy.gif)

As web developers, our jobs revolve around getting data from inputs.

Vue gives us `v-model`, which is some syntactic sugar that creates a two-way data-binding for us. This is great for inputs, as it simplifies working with them a lot.

But did you know you can add `v-model` support to your own components?

[Joshua Bemenderfer](https://twitter.com/@tribex_) shows us how this can be done in [Adding v-model Support to Custom Vue.js Components](https://alligator.io/vuejs/add-v-model-support/).

## 15. Fix "this is undefined" error
![](https://media.giphy.com/media/xT9IgBWB7B8ga6NUv6/giphy.gif)

Perhaps one of the most common errors to run into is this one.

I used to run into this one _all_ of the time. But now I know exactly what I was doing wrong. It has do with the type of function you're using, and how you're using it.

But I won't get into that here.

Learn [how to fix the "this is undefined" error](/this-is-undefined/), and get on with your life!

## 16. Use an off the shelf CSS framework
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

## 17. Watching nested data in Vue
![](https://media.giphy.com/media/ywDAO6ONmOSVG/giphy.gif)

Watchers are a really great feature in Vue. They make adding side-effects really clean, and they're easy to use (like the rest of Vue).

Except when you try and use them on an array or object.

Nested data structures like arrays and objects are a little trickier to work with.

Just yesterday, I spent at least 30 minutes helping a co-worker figure out an issue with his Vue component.

Turned out to be an issue with nested data 🤦‍♂️.

Because it's such a common problem, I've written an in-depth article on [how to watch nested data](/how-to-watch-nested-data-vue/), which also goes into some of the more advanced features that watchers give you.

## 18. Show loading and error states on your async components
![](https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif)

You probably hear a lot about web performance these days -- and for good reason.

The easiest way to get your application bundle smaller is to split out the code into multiple, smaller, chunks. **Vue comes with first-class support for this**, which is really cool!

But the user's experience can suffer if we don't provide a good loading state while fetching the component. And we also want to show a good error state if something goes wrong.

Luckily, integrating these isn't too difficult.

[Joshua Bemenderfer](https://twitter.com/@tribex_) shows us exactly how this can be done in [Showing Loading & Error States with Vue.js Async Components](https://alligator.io/vuejs/vue-async-components-load-error/).

## 19. Clean up your props for goodness sake!
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

## 20. Don't confuse computed props and watchers
![](https://media.giphy.com/media/zQc8STzaOlJ3q/giphy.gif)

I know that most people don't accidentally write a computed prop when they meant to write a watcher.

That's just silly.

But I see lots of people who use a watcher when they should instead be using a computed prop. Or using a computed prop when a watcher would be a better fit.

Although they seem like they do similar things, watchers and computed props are actually quite different.

My rule of thumb: make it a computed prop!

However, if you want to know more, I wrote an article on [the differences between computed props and watchers](/difference-between-computed-property-and-watcher/).

## 21. Beware of some common pitfalls
![](https://media.giphy.com/media/oxyfEcT74rApq/giphy.gif)

Like any piece of technology, Vue has some areas that can catch you off guard.

I cannot tell you how many hours I wasted because I didn't understand some of these things. But learning them didn't take that long either.

If only I had known!

Instead of struggling through these gotchas like I did when I was learning Vue, you can avoid most of these.

Read [Common Vue.js Gotchas](https://alligator.io/vuejs/common-gotchas/) by [Joshua Bemenderfer](https://twitter.com/@tribex_), and save yourself a lot of frustration!

## 22. Learn the differences between props and data
![](https://media.giphy.com/media/qoAtIlmzKqVe8/giphy.gif)

Vue comes with two different ways of storing variables, props and data.

These can be confusing at first, since they seem like they do similar things, and it’s not clear when to use one vs the other.

The answer involves reactivity, naming collisions, and the direction of data flow (spoiler: it's down).

In my article on [the difference between props and data](/vue-props-vs-data/), I also go into detail on where you would use each one, and how you would use them together.

It's a really important topic to grasp, so make sure you understand it!

## 23. Properly call methods when the page loads
![](https://media.giphy.com/media/1SyXpUUfyAe1Yx8rUU/giphy.gif)

It's an extremely common pattern in web apps to perform some sort of logic as soon as the page is loaded. Often you're fetching data, or even manipulating the DOM somehow.

But there are a lot of _wrong_ ways of doing this with Vue.

Lucky for us, Vue gives us lifecycle hooks that let us do this in a really clean and simple way.

You can check out this [in-depth article](/call-method-on-page-load/) on how to do this the proper way. The article also goes deep into what lifecycle methods are, and how we can hook into them.

## 24. Understand how to pass a function as a prop
![](https://media.giphy.com/media/njYrp176NQsHS/giphy.gif)

Short answer: **you don't**.

But that's a hugely unsatisfying answer, so of course I'll expand on it.

This question comes up for 2 main reasons:

1. You want to communicate from the child to the parent
2. You need to abstract your component behaviour in a specific way

In React we pass functions around all the time, and that's how we would solve both of these problems. But Vue gives us two separate mechanisms for solving these two problems.

**These mechanisms are [events](https://vuejs.org/v2/guide/events.html) and [scoped slots](https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/)**.

If you want to learn how to use these to solve either of these problems, as well as the differences between how React and Vue work (and more!), check out this detailed article I wrote about it: [How to Pass a Function as a Prop in Vue](/pass-function-as-prop/)

## 25. Learn why mutating props is an anti-pattern
![Teenage Mutant Ninja Turtles](https://media.giphy.com/media/9JtCCeSviDLFNhYir6/giphy.gif)

This is an error you may have seen:

> Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop’s value.

Why is mutating a prop directly not allowed in Vue, and what do you do instead?

I've written [an entire article](/avoid-mutating-prop-directly/) on this subject. I also go into what causes this error, and how to avoid it.

The article also touches on how to avoid getting this error when using `v-model`, as there are some specific things that can be confusing there.

## 26. Dynamically add CSS classes
![](https://media.giphy.com/media/12P29BwtrvsbbW/giphy.gif)

Vue incorporates HTML and Javascript together in a really beautiful way, but we can't forget about CSS.

CSS is the thing that really makes our apps shine, and is very powerful in it's own right.

A very common pattern in web apps is to add and remove classes from elements based on the state of our application. We do this to show a button is disabled, to animate elements like loading spinners, and a ton of other things.

Vue gives us a lot of options in choosing how to dynamically add and remove CSS classes based on what's going on in our application. **Knowing what these options are gives you more tools, and you'll be able to write better code because of it**.

I wrote an article that covers all of the different ways you can [dynamically add and remove classes in Vue](/dynamically-add-class-name/). We go over array syntax and object syntax, using Javascript expressions to calculate the class, and adding dynamic classes to custom components (you don't need to add a custom `class` prop!). You can even generate your class names on the fly!

---

If you enjoyed this article, please share it with others who may enjoy it as well!

It really helps encourage me to keep writing stuff like this.

**Thanks!**
