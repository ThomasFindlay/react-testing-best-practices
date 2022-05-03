---
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
title: Best Practices for Testing React Apps 
# persist drawings in exports and build
drawings:
  persist: false

layout: intro

---
# Best Practices for Testing React Apps 

<span class="font-700 text-2xl">
  By Thomas Findlay
</span>
<!-- <div class="absolute bottom-10">
  <span class="font-700 text-indigo-700">
    By Thomas Findlay
  </span>
</div> -->

<div class="absolute bottom-10 right-10">
  <img class="w-32" src="/logo.png">
</div>

<style>
h1 {
  @apply text-indigo-700;
}
</style>


---
---
# About Me - Thomas Findlay

<div class="grid grid-cols-[2fr,1fr]">
  <ul>
    <li>Full-Stack Web & Mobile Developer with 10 years of programming experience</li>
    <li>Co-Owner of Findlay Web Tech</li>
    <li>Mentor & Consultant at Codementor.io</li>
    <li>The author of "React - The Road To Enterprise" & "Vue - The Road To Enterprise" books</li>
    <li>Technical Writer for Telerik and The Road To Enterprise blogs</li>
  </ul>
  <div>
    <img className="w-64" src="/about.jpg">
  </div>
</div>


---
layout: section
---

# What is Testing and why is it important?


---
layout: section
---
# Unit tests with Vitest and React Testing Library

---
---

# Pros and cons of unit tests

- Tests components in isolation

---
layout: section
---
# E2E tests with Cypress and Cypress Testing Library

---
---

# Pros and const of e2e tests

---
---
# Summary

---
---
# The End


- Twitter <br />
  https://twitter.com/thomasfindlay94

- LinkedIn <br />
  https://www.linkedin.com/in/thomas-findlay/

- Codementor <br />
  https://www.codementor.io/@thomas478

- The Road To Enterprise <br />
  https://theroadtoenterprise.com/blog

<div class="mt-8">
  <div class="mb-2">Full code examples:</div>
  <a class="leading-relaxed" target="_blank" rel="noreferrer" href="https://github.com/ThomasFindlay/react-advanced-london-managing-apis">https://github.com/ThomasFindlay/react-advanced-london-managing-apis</a>
</div>
<div class="mt-3">
  <div class="mb-2">Slides:</div>
  <a class="leading-relaxed" target="_blank" rel="noreferrer" href="https://react-advanced-london-slides.vercel.app/">https://react-advanced-london-slides.vercel.app/</a>
</div>

::right::

<div class="right-col mt-16">
  <span class="block mb-4"><span class="font-bold">React - The Road To Enterprise</span> (Coming Dec 2021)</span> 
  <span>Special gift for conference attendees</span>

  <span>35% OFF with code **REACTADVANCED**</span>

  <div class="flex items-center gap-4">
    <img class="w-48" src="/react-book-cover.png" />
    <img className="w-48 mt-4" src="/react-qrcode.png" />
  </div>
</div>

<!-- Pre-order and get 35% OFF with code  -->
<!-- __REACTADVANCED__ -->
<style>
  .right-col {
    @apply float-right
  }
</style>