---
title: Filters in Vue are Really Just Static Methods
---

Before we jump in, let's quickly review what exactly Vue's filters are, and what static methods are.

## Static Methods
- Quick overview
- Bound to component (class) and not the instance
- Can access static values that are defined in the module scope EXAMPLE

## Vue Filters
- Quick overview
- Bound to component (class) and not the instance
- Can access static values that are defined in the module scope EXAMPLE

## How do you use static methods properly?
- Should be pure and not have any side-effects (filters are good for this one, although they aren’t enforced that well in Vue)
- https://simpleprogrammer.com/static-methods-will-shock-you/
- They are methods that don’t know where they belong. They don’t use the state of the object (component), so they probably violate SRP
- Likely move this method to somewhere it actually belongs

## A better way to use static methods
- Real shitty static methods though, we can make better ones in several different ways EXAMPLES

EXAMPLE
- Converting currencies has nothing do with a shopping cart, so don’t put that method on the shopping cart component
- Can create a global filter, but globals are terrible
- Prevents webpack code splitting too
- Use javascript module to collect all pure functions that are related (eg. formatting dates, formatting currencies) so we keep our code organized properly.
