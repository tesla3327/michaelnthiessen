---
title: How to Avoid Mutating a Prop Directly
date: 2018-11-30
description:
---

Intro

## Mutating props in Vue is an anti-pattern
screenshot of error

https://vuejs.org/v2/guide/migration.html#Prop-Mutation-deprecated
- Whenever a component re-renders the mutations will be overwritten
- Can be replaced with data or computed prop

Error message: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.

## Modifying value in the component
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