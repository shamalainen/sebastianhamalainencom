---
title: "Weird iOS Button Rendering Fix"
date: 2018-07-29
type: "blog"
image: "../images/blog/apple-phone.jpg"
---

I launched my newly built website happily and everything seemed to be okay, but then I noticed that on IOS devices my contact form submit button is not rendering correctly, so I started to investigate.

It seems like, when you use radius, colors and borders it will not render correctly on IOS devices, but every other device will render it correctly.

Then I started to google and of course found the answer on [StackOverflow](https://stackoverflow.com/questions/5438567/css-submit-button-weird-rendering-on-ipad-iphone).

This is the code you need to add for it to work on IOS devices like it should.

```
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

and now it renders correctly! Happy **coding**!