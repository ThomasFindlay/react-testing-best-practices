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

# Why should we write tests?

---
---
# Why should we write tests?

- Manual testing is time consuming and prone to human error.
- We can run automated tests as many times as we want.
- Tests can help find and fix bugs before they are shipped to the users.
- It's easy to break things. A good test suite makes it easier to refactor application, as tests will help to detect any regressions.
- Tests can serve as a code documentation.

---
layout: section
---
# Unit tests with Jest and React Testing Library

---
---

# Unit Testing Tips

- Test components in isolation.
- Mock API requests and any side-effects.
- Avoid shallow mounting - the speed trade-off just isn't worth it.
- Query elements just like a user would. Don't query by classes or ids. Tests should not be another consumer of your application.
- Avoid testing implementation details.
- Don't test third-party libraries.

---
layout: section
---
# E2E tests with Cypress and Cypress Testing Library

---
---

# E2E Testing Tips

- Avoid mocking API requests. E2E tests should test whether client and server work together in cohesion.
- 100% coverage shouldn't always be a must. Otherwise, you might start testing implementation details or try to test for near-impossible scenarios.
- Don't test happy paths only. Test *Pending*, *Error* and *Empty states* too.
- Re-use authentication logic to speed up your tests.

---
---
# Summary

- Automated tests can save a lot of time and reduce likeliness of shipping buggy software.
- Setup a CI/CD pipeline that automatically runs tests.
- You can also run tests automatically locally with Husky.
- Mock API requests in unit but not e2e tests.
- Don't make tests another consumer of your app.
- Tests should be maintained just like the production code.

---
---

# That's it

<div class="flex justify-between">
  <div>
    <h2 class="font-bold block mb-4">React - The Road To Enterprise</h2>
    <span class="mt-4 mb-4 text-purple-800 block">The Advanced React Book</span>
    <div class="flex items-start gap-4">
      <img class="w-42" src="/react-book-cover.png" />
      <div>
        <ul class="!mt-0 text-sm">
          <li class="">Local & Global State Management Patterns</li>
          <li class="">Scalable Project Architecture</li>
          <li class="">Performance Optimisation</li>
          <li class="">API handling with API Layer and React Query</li>
          <li class="">Advanced Component Patterns</li>
          <li class="">Testing & Security</li>
          <li class="">SSG, SSR and ISR with Next.js</li>
          <li class="">and much more!</li>
        </ul>
      </div>
    </div>
    <div class="bg-purple-100 mt-4 p-4 rounded-lg">
      <a class="text-sm inline-block no-underline !border-none text-purple-700" href="https://theroadtoenterprise.com/books/react-the-road-to-enterprise" target="_blank">
        https://theroadtoenterprise.com/books/react-the-road-to-enterprise
      </a>
    </div>
  </div>
  <div>
    <div>
      <h2 class="font-bold block">Get in Touch</h2>
      <ul class="p-4 rounded-2xl text-sm space-y-3 pl-0">
        <li class="list-none !ml-0"><span class="text-purple-700">The Road To Enterprise</span> <br />
          <a class="!border-none" href="https://theroadtoenterprise.com" target="_blank">https://theroadtoenterprise.com</a></li>
        <li class="list-none !ml-0">
          <span class="text-purple-700">Twitter</span> <br />
          <a class="!border-none" href="https://twitter.com/thomasfindlay94" target="_blank">https://twitter.com/thomasfindlay94</a></li>
        <li class="list-none !ml-0">
          <span class="text-purple-700">LinkedIn</span> <br />
          <a class="!border-none" href="https://www.linkedin.com/in/thomas-findlay/" target="_blank">https://www.linkedin.com/in/thomas-findlay/</a></li>
        <li class="list-none !ml-0"><span class="text-purple-700">Codementor</span> <br />
          <a class="!border-none" href="https://www.codementor.io/@thomas478" target="_blank">https://www.codementor.io/@thomas478</a></li>
      </ul>
    </div>
  </div>
</div>
