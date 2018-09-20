---
title: "Renderless Components: 5 Crazy Experiments"
date: 2018-09-28
---

Renderless components let us do a lot of different things declaratively.

If you aren't already familiar with renderless components, you probably won't understand most of this article. Try reading [Adam Wathan's great primer](https://adamwathan.me/renderless-components-in-vuejs/) on the topic, but don't forget to come back!

These components let us do some pretty cool things -- without having to define them on the component itself.

Here are the 5 renderless components we'll look at:
1. **Event** -- Listen to events on the `window`
2. **State** -- Keep track of state without using `data`
3. **Watch** -- Do something when a value changes
4. **Log** -- Log a value to the console when it changes
5. **Interval** -- Refresh part of your component at regular intervals

## Event
If you want to listen to an event outside of your component, for example on the `window`, you have to write a decent amount of boiler plate code.

**What if you could add a component to your `template` in a single line that would take care of all that?**

Well, that's what we'll be building!

Using it is as simple as this:
```html
<Event event="click" @fired="handleClick" />
```

Anytime the `window` is clicked, it will call our method `handleClick`. Easy!

### Boilerplate is no fun
Normally, if you wanted to listen to an event on the `window` you would need to do these things in your component:
* Bind any methods to make sure they have access to `this` (our instance of the Vue component)
* Add event listeners after the component mounts
* Clean up event listeners before the component is destroyed

That boilerplate might look something like this:
```js
mounted() {
  // Bind context so we can access 'this'
  this.handleEvent = this.handleEvent.bind(this);

  // Attach event listener to the window
  window.addEventListener(
    this.event,
    this.handleEvent
  );
},

beforeDestroy() {
  // Clean up event listener
  window.removeEventListener(
    this.event,
    this.handleEvent
  );
},
```

You'd also need to do these things if you wanted to listen to events on _any_ element outside of your Vue component.

It's about 20 lines of code. Replacing it with a renderless component not only cleans it up, but makes it much more clear what our component is trying to do.

### Renderless to the Rescue
We'll start out simple with a very basic renderless component.

Instead of using scoped slots, we'll just return `null` from our `render` method. This component won't have any children, so no need to do anything fancy with scoped slots here.

```js
// Event.vue
export default {
  render() {
    // We don't need to render
    // anything with this component
    return null;
  }
}
```

Next, we'll need to add in our `event` prop:
```js
// Event.vue
export default {
  props: {
    event: {
      type: String,
      required: true,
    }
  },

  render() {
    // We don't need to render
    // anything with this component
    return null;
  }
}
```

We'll add in all of the boiler plate that we have from before. We'll start by adding our event handler:
```js
// Event.vue
export default {
  props: {
    event: {
      type: String,
      required: true,
    }
  },

  methods: {
    handleEvent() {
      // Fire an event so our parent
      // can do something in response
      this.$emit('fired');
    }
  },

  render() {
    // We don't need to render
    // anything with this component
    return null;
  }
}
```

All we want to do when the event is triggered is to emit our own event `fired` to our parent component.

Then we'll add the event listener when we mount:
```diff
  // Event.vue
  export default {
    props: {
      event: {
        type: String,
        required: true,
      }
    },

+   mounted() {
+     // Attach event listener to the window
+     window.addEventListener(
+       this.event,
+       this.handleEvent
+     );
+   },

    methods: {
      handleEvent() {
        // Fire an event so our parent
        // can do something in response
        this.$emit('fired');
      }
    },

    render() {
      // We don't need to render
      // anything with this component
      return null;
    }
  }
```

Because we use `this` in `handleEvent`, we need to bind the method first or we'll get [this is undefined errors](/this-is-undefined):

```diff
  // Event.vue
  export default {
    props: {
      event: {
        type: String,
        required: true,
      }
    },

    mounted() {
+     // Bind context so we can access 'this'
+     this.handleEvent = this.handleEvent.bind(this);

      // Attach event listener to the window
      window.addEventListener(
        this.event,
        this.handleEvent
      );
    },

    methods: {
      handleEvent() {
        // Fire an event so our parent
        // can do something in response
        this.$emit('fired');
      }
    },

    render() {
      // We don't need to render
      // anything with this component
      return null;
    }
  }
```

Finally, we need to make sure we clean up our event listener before the component is destroyed. Forgetting to do this leads to memory leaks, which can cause huge problems if you are reusing the component a lot!

```diff
  // Event.vue
  export default {
    props: {
      event: {
        type: String,
        required: true,
      }
    },

    mounted() {
      // Bind context so we can access 'this'
      this.handleEvent = this.handleEvent.bind(this);

      // Attach event listener to the window
      window.addEventListener(
        this.event,
        this.handleEvent
      );
    },

+   beforeDestroy() {
+     // Clean up event listener
+     window.removeEventListener(
+       this.event,
+       this.handleEvent
+     );
+   },

    methods: {
      handleEvent() {
        // Fire an event so our parent
        // can do something in response
        this.$emit('fired');
      }
    },

    render() {
      // We don't need to render
      // anything with this component
      return null;
    }
  }
```

That's it! We've built ourselves an awesome, declarative, renderless, event component!

### Finished Component
Here is the full source for the component:
```js
export default {  
  props: {
    event: {
      type: String,
      required: true,
    }
  },

  mounted() {
    // Bind context so we can access 'this'
    this.handleEvent = this.handleEvent.bind(this);

    // Attach event listener to the window
    window.addEventListener(
      this.event,
      this.handleEvent
    );
  },

  beforeDestroy() {
    // Clean up event listener
    window.removeEventListener(
      this.event,
      this.handleEvent
    );
  },

  methods: {
    handleEvent() {
      // Fire an event so our parent
      // can do something in response
      this.$emit('fired');
    }
  },

  render() {
    // We don't need to render
    // anything with this component
    return null;
  }
}
```

I also built a CodeSandbox if you wanted to play around with a live example.

If you click anywhere in the sandbox below it will display an alert. If you resize the window it will log it to the console in the sandbox.
<iframe src="https://codesandbox.io/embed/71qj6j0r31?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## State

## Watch

## Logging

## Interval


