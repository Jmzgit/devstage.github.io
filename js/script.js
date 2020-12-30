

Level Up Your Websites with Animate.css
Level Up Your Websites with Animate.css
Hudson Allen
August 09, 2017
16 Comments
85,374 Views
 Bookmark
Cool animations and clever microinteractions are all the rage right now. However, most developers know how long and tedious it can be to constantly write and rewrite CSS animations. It can start to feel like you're reinventing the wheel. Wouldn't it be nice to have a library of common animations that you can pull from anytime for any of your projects?

Table of Contents
Getting Started
Static Animations
Scroll Animations
Click Animations
Funky Animations
Conclusion
Enter Animate.cssA collection of "just-add-water CSS animations" created by Daniel Eden

With Animate.css, you can easily animate any element with only one line of code. But, if you need to get a little more fancy, it also offers quite a few customization options. In this tutorial, we'll learn how to use Animate.css by building a one page website. Let's get started!



Getting Started
There are two ways to get up and running with Animate.css. The first way is to download it from the official website. Once you've done this, all you have to do is add it to your project folder and link to it in your HTML.

*Note: Animate.css contains only one file! This minimizes load time and keeps everything simple.*

<head>
  <link rel="stylesheet" type="text/css" href="animate.css">
</head>
The second option for getting started is to use a CDN. You can find this here. Once you've got it, you can link to it just like before:

<head>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css">
</head>
And, that's it! No more setup is necessary to begin using all the awesome animations that come with Animate.css. All we have to do now is add some water...

Static Animations
The first thing we will do is a simple static animation that activates right when the page loads. Obviously, this animation will have to be at the top of the page - unless it repeats over and over. So, we'll start off with a full screen hero element and animate the text inside when the page is loaded. Here's the basic HTML we need:

<header>
  <h1>Animate.css</h1>
  <h2>Level Up Your Websites with Animate.css</h2>
</header>
Now, all we need to do to animate the two headings is give them the animated and bounceInDown classes. The first class is necessary to use any Animate.css animation. But, the second class is just one of many options we could use here. The official Github docs have a full list of animations you can use.

<header>
  <h1 class="animated bounceInDown">Animate.css</h1>
  <h2 class="animated bounceInDown">Level Up Your Websites with Animate.css</h2>
</header>
This is nice, but we can definitely expand on it. Let's add an arrow at the bottom of our hero that bounces continuously to let the user know they can scroll down. We'll give this element two classes: animated and bounce.

<header>
  <h1 class="animated bounceInDown">Animate.css</h1>
  <h2 class="animated bounceInDown">Level Up Your Websites with Animate.css</h2>
  <span class="animated bounce"></span>
</header>
As we have it right now, this animation will only happen once. However, there are three CSS properties you can use to control this animation. They are:

animation-duration
animation-delay
animation-iteration-count
For our purposes, we only need to use the first and the third to slow down the animation and make it infinite. Thus, our final markup for the first section look's like this:

*Note: Most of the CSS in these examples has been omitted for the sake of clarity. Check out the full demo for the arrow styles, etc.*

<header>
  <h1 class="animated bounceInDown">Animate.css</h1>
  <h2 class="animated bounceInDown">Level Up Your Websites with Animate.css</h2>
  <span class="animated bounce"></span>
</header>
And, here's the CSS that makes the magic happen ad infinitum:

/_ Make sure to use the animated class in your selector. Otherwise, the animation-duration won't work _/
header span.animated {
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}
And, here's a pen showing it all in action:



As you can see, it's super simple to do these static animations. In the next section, we'll add some complexity by using jQuery to dynamically trigger Animate.css.

Scroll Animations
The first type of dynamic animation we'll look at is a scroll animation. With a little bit of jQuery we can check to see if an element is in the viewport. Then, all we have to do is add our Animate.css classes to it. We'll use three blocks of text, each with an icon, to demonstrate this. Here's the markup:

<h2 class="new-section">Scroll Animations</h2>
<div class="scroll-animations">
  <div class="animated">
    <span>☎</span>
    <h3>Number One</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem pharetra a.</p>
  </div>
  <div class="animated">
    <span>♫</span>
    <h3>Number Two</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem pharetra a.</p>
  </div>
  <div class="animated">
    <span>☂</span>
    <h3>Number Three</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem pharetra a.</p>
  </div>
</div>
Now we can use jQuery to check see if the elements have been scrolled into view. In the code below, we are using the distance a user has scrolled, the height of the window, and the element's offset from the top to calculate this. For further explanation, you can look at this question on Stackoverflow. We then use the scroll event and this function to add the class fadeInLeft to our elements.

// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');
      }
    });
  });
});
