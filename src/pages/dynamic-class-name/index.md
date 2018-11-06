---
title: How to Dynamically Add a Class in Vue
date: 2018-11-30
description:
---

Example of switching between themes throughout article

## Static Classes
- Add static classes using regular `class` binding
- Add dyanmic using `v-bind:class` or the shorthand `:class`
- These can be combined on the same component

## Using an Expression
- use any expression to set a single value

## Using the Array Syntax
- ternaries
- other useful expressions

`!class`, `class`, `someproperty && class`

## Using the Object Syntax
- You may have to surround in quotes if there are hyphens in your class name

## Using with Custom Components
- Same as above, but will be set on the root element

## Generateing Class Names Dyanmically
With array
- can generate class names on the fly because they are just strings

With object
- use special object syntax

## Using a computed prop to generate class names
- Clean up logic and prevent a bloated template





