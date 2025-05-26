My Web Portfolio Link: https://karl-profile06.github.io/MyPortfolio_webdev/

Interactives:

1. Smooth Scrolling on Navigation Link Click
When I click on a navigation link (.navbar a), the page scrolls smoothly to the target section instead of jumping instantly. I achieved this using requestAnimationFrame with an easing function to animate the scroll. The effect is triggered by a click event on each navigation link, and I used e.preventDefault() to stop the default jump behavior that anchor links normally cause.

2. Hover Effect on Sections When in View
As I scroll through the page, whichever section is currently visible on screen gets a hovered class. This is checked during every scroll by comparing the scroll position with each section’s top offset and height. The effect is triggered by the scroll event on the window, which updates which section is active in view.

3. Initial Hover Detection on Page Load
When the page first loads, the script checks which section is already in view and immediately highlights it by adding the hovered class. This ensures that the correct section is visually emphasized even without any scrolling. This is done by calling the addHoverEffect() function once inside the DOMContentLoaded event.

4. Back to Top Button
A "Back to Top" button appears when I scroll down past a certain point (e.g., 300px). Clicking this button scrolls the page smoothly back to the top using window.scrollTo with the smooth behavior. The button is created dynamically via JavaScript and only appears when needed, enhancing navigation for long pages.

5. Active Navigation Link Highlighting
As I scroll through the page, the navigation link corresponding to the section in view becomes highlighted with an active class. This provides visual feedback to the user on where they are on the page. This logic runs during scroll and matches the scroll position to the section positions, just like the hover effect.
