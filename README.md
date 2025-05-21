My Web Portfolio Link: https://karl-profile06.github.io/MyPortfolio_webdev/

Interactives:

1. Smooth Scrolling on Navigation Link Click
What: When I click on a navigation link (.navbar a), it scrolls smoothly to the section instead of jumping right away.
How: I used requestAnimationFrame with an easing function to animate the scroll.
Trigger: Happens on the click event of the nav links.
Prevention: I used e.preventDefault() to stop the default jump behavior.

2. Hover Effect on Sections When in View
What: When a section is visible on the screen while scrolling, it gets a hovered class.
How: On every scroll, my script checks which section is currently in view and adds or removes the class.
Trigger: Happens on the scroll event of the window.

3. Initial Hover Detection on Page Load
What: When the page loads, it checks which section is already in view and highlights it with the hovered class.
How: It runs the addHoverEffect() function on DOMContentLoaded.
