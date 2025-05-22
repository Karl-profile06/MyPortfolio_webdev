My Web Portfolio Link: https://karl-profile06.github.io/MyPortfolio_webdev/

Interactives:

1.Smooth Scrolling on Navigation Link Click

When I click on a navigation link (.navbar a), the page scrolls smoothly to the target section instead of jumping instantly. I achieved this by using requestAnimationFrame along with an easing function to create a smooth scroll animation. This effect is triggered by the click event on each navigation link, and I used e.preventDefault() to stop the default jump behavior that normally happens with anchor links.

2.Hover Effect on Sections When in View

When a section becomes visible on the screen while scrolling, it gets a hovered class. I did this by checking which section is currently in view during every scroll. The script adds the hovered class to the visible section and removes it from the others. This effect is triggered by the scroll event on the window.

3.Initial Hover Detection on Page Load

When the page loads, it automatically checks which section is already in view and highlights it by adding the hovered class. This is done by calling the addHoverEffect() function as soon as the DOMContentLoaded event fires.
