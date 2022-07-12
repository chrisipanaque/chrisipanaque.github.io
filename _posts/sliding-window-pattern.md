---
title: 'Master the Sliding Window Patter'
excerpt: 'Memorize it and solve problems like a king'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

We're going to start with the most basic pattern to become a king at problem solving.

The Sliding Window Pattern

Memorize this, practice it for 2 weeks, make room in your brain for this pattern to be permanently, like you know how to drive a car, you just know it.

Let's start with the definition of a window, then the definition of the action of sliding it.

### What is the Window?

The window is just a subarray within an array:

[image]

It can be any size:

[image]

## Why is it called a window and not a ___ ?

I don't know

## How can it slide?

It can slide left or right on a fixed size, or flexible size. As a king at problem solver, this is where you would write the code on how your window slides depending on the problem. 

[image]

## Identify when to use this pattern

When the problem involves calculating or finding something in subarrays of an array. Usually a required subarray size is given. This also includes sublists within a linkedlist.


## Example Problem #1
In this array, find the average number of all the subarrayof size 'k'.

Example input:
Array = [2, 4, -6, 1, -3, 8, 5]
k = 5

