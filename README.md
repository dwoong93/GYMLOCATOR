GYMLOCATOR
Try it out: 
https://dwoong93.github.io/GYMLOCATOR/

![responsiveness template](https://user-images.githubusercontent.com/84681965/129767361-96300cc8-e039-480b-947f-74e179629af2.png)


Aim

The main motive behind this project would be to have a utility that could show me where the nearest gyms are.
Anytime Fitness is a hugely successful global fitness franchise that prides itself on convenience. With over sixty outlets in Singapore, people who move around the city state on a regular basis would often have felt that a simple website or tool to find a nearby club would save them the trouble of entering their query into a search bar. 


UI/UX

Having a single-page design with minimal clutter would allow this project to be mobile-friendly.
The dark mode interface map allows for a more easy-on-the-eye experience in this digital age, there are also two light modes, should the user feel the need to have a light-mode feature for easy-of-use under the flaring sunlight. 
Taking inspiration from the Anytime Fitness colours, the elements of the interface adn the iconic Running Man logo are in two-toned purple.
All features can be hidden away into a small menu button on the side of the screen, making the interface very easy to use on smaller devices.
Icons such as the logo, map pins were made using Adobe Illustrator. The Hamburger icon used in the menu toggle was linked from Material Design, https://material.io/. The weather icons used were designed and made  by Alexey Onufriev, https://dribbble.com/onufriev/about. External font "Rubik" was from Google Fonts, https://fonts.google.com/?query=rubik. 

Features

Features include map pins showing location and address of clubs, map pins showing nearest bus stops to clubs, 
2-hour weather forecast, view nearest clubs by housing estate/town, and three map tileLayer/ modes.  



Technologies Used

This project utilised HTML, CSS, JavaScript, BootStrap 5.0 and Leaflet (map). The map library used was from https://leafletjs.com/. Additional m ap tile layers "One Map light and dark" were created by One Map SG and uploaded to https://leaflet-extras.github.io/leaflet-providers/preview/.

Anytime Fitness club address was taken from Anytime Fitness Singapore, coordinates were found on googlemaps.
Bus stop and fly-to coordinates were manually sourced from google maps.

These Data were then stored in Microsoft Excel and saved as CSV UTF-8.
The CSV was converted to geoJSON using <https://odileeds.github.io/CSV2GeoJSON/>, which was created by Stuart Lowe, ODI Leeds 2020. (MIT Licence).
 Weather API was taken from Data.gov.sg. 
