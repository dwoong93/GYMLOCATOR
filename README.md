## GYMLOCATOR
Try it out: https://gymlocator.netlify.app/

![responsiveness template](https://user-images.githubusercontent.com/84681965/129767361-96300cc8-e039-480b-947f-74e179629af2.png)


## Aim

The main motive behind this project would be to have a utility that could show me where the nearest gyms are.
Anytime Fitness is a hugely successful global fitness franchise that prides itself on convenience. With over sixty outlets in Singapore, people who move around the city state on a regular basis would often have felt that a simple website or tool to find a nearby club would save them the trouble of entering their query into a search bar. 


## UI/UX

Having a single-page design with minimal clutter would allow this project to be mobile-friendly.
The dark mode interface map allows for a more easy-on-the-eye experience in this digital age, there are also two light modes, should the user feel the need to have a light-mode feature for easy-of-use under the flaring sunlight. 
Taking inspiration from the Anytime Fitness colours, the elements of the interface adn the iconic Running Man logo are in two-toned purple.
All features can be hidden away into a small menu button on the side of the screen, making the interface very easy to use on smaller devices.
Icons such as the logo, map pins were made using Adobe Illustrator. The Hamburger icon used in the menu toggle was linked from Material Design, https://material.io/. The weather icons used were designed and made  by Alexey Onufriev, https://dribbble.com/onufriev/about. External font "Rubik" was from Google Fonts, https://fonts.google.com/?query=rubik. 

## Features

Features include map pins showing location and address of clubs, map pins showing nearest bus stops to clubs, 
2-hour weather forecast, view nearest clubs by housing estate/town, and three map tileLayer/ modes.  



## Technologies Used

This project utilised HTML, CSS, JavaScript, BootStrap 5.0 and Leaflet (map). The map library used was from https://leafletjs.com/. Additional m ap tile layers "One Map light and dark" were created by One Map SG and uploaded to https://leaflet-extras.github.io/leaflet-providers/preview/.

Anytime Fitness club address was taken from Anytime Fitness Singapore, coordinates were found on googlemaps.
Bus stop and fly-to coordinates were manually sourced from google maps.

These Data were then stored in Microsoft Excel and saved as CSV UTF-8.
The CSV was converted to geoJSON using <https://odileeds.github.io/CSV2GeoJSON/>, which was created by Stuart Lowe, ODI Leeds 2020. (MIT Licence).
 Weather API was taken from Data.gov.sg. 


## Testing Procedure

1) When the page is first loaded, the user should be able to see a translucent layer with a welcome text, prompting them to click or tap anythere to continue.
When clicked, the translucent layer will slide away, revealing the map interface with Club Pins on the map (Purple in color), a hidden side menu button (hamburger icon) on the left and a logo on the top left of the interface

2) When the user clicks or taps on the Club Pin, a popup bubble containing the Club Name, Address and Contact would appear. The Club Name should have all of it's letters capitalized. 

3) When the user hovers the mouse cursor over the menu button, it should glow and rotate slightly. A click on the button will reveal the menu with the "Town", "Filters" and "Map Style tab".

4) In the Town tab, click on any town, the map should pan and zoom in on the clicked town and the user should see an orange circle with the Club Pins that belong to the clubs in the Town. Clicking on "All Clubs" at the top of the list will zoom out of the town, showing the entire map. At this point, the circle should not be shown. 

5) Clicking on the "Filters" tab, the user should see "Show all clubs" checked by default. Unchecking "Show all Clubs would hide the Club Pins on the map. Checking or unchecking "Show nearest bus stops"  will show or hide smaller red map pins. Checking or unchecking "Show Weather Forecast (2 Hr)"  will show or hide weather icons. 

6) Leaving all the filters checked, click on different club pins. The information displayed for each map pin will be different for every club pin that is clicked on. Clicking on the red bus stop pin, the Bus Stop Name and Bus Stop Number should be displayed. The information displayed for each bus stop pin will be different for every pin that is clicked on.Clicking on the weather icon, the name of the area selected and two hour forecast should be displayed. The area name displayed for each area icon will be different for every pin that is clicked on, the weather status may or may not be the same as the others depending on the weather status and the weather icon should match the weather status text. 

7) Clicking on the "Filters" tab, the user should see the "One Map Dark(Default)" checked by default. Clicking on "One Map Light" will render in the bright version of the default map, the map pins that were showing before the switch should still be showing. Clicking on "Open Street Map" will render the Open Street Map.  

8) Hovering the mouse cursor over the "Running Man" logo on the top left for two seconds would trigger the logo to slide out to the left. When the browser is shrunken to small, the logo would not be shown to accomodate the lack of view space.  


## Deployment Procedure

GitHub Pages

1) Fork the project using the button on the top right of the Repository page
2) In the forked repository, click on "Settings" and navigate to the pages tab
3) Under the "Source" Section of "Pages" Click on the "Save" button
4) The project is now deployed via GitHub Pages
5) In the case that the images such as icons do not show up while using GitHub Pages, you may use Netlify to deploy the project

Netlify

1) Create an account on Netlify using your GitHub account
2) On the main landing page of your netlify account, click on "New site from Git"
3) Click on GitHub, a list of the projects in your linked GitHub account should appear
4) Click on the forked project to start the deployment
5) Once it has been deployed, rename the netlify link
6) The project is now deployed via netlify 
