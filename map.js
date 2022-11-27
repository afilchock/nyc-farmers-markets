// Create a new Leaflet map
let farmersmarketMap;
farmersmarketMap = L.map("map");
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(farmersmarketMap);

farmersmarketMap.setView([40.7128, -74.0060], 16);
const teensforfoodjusticeMarket = L.marker([40.670986, -73.908194]).addTo(farmersmarketMap);
teensforfoodjusticeMarket.bindPopup("<b>Teens for Food Justice Fresh Food Box & Farmstand at Brownsville Collaborative Middle School</b> <p>85 Watkins Street</p>");

const mccarrenparkMarket = L.marker([40.719219, -73.952479]).addTo(farmersmarketMap);
mccarrenparkMarket.bindPopup("<b>McCarren Park Greenmarket</b> <p>Union Ave bet Driggs and N 12th Sts</p>");

const edibleschoolyardnycfarmstandMarket = L.marker([40.590649, -73.969298]).addTo(farmersmarketMap);
edibleschoolyardnycfarmstandMarket.bindPopup("<b>Edible Schoolyard NYC's Farm Stand at PS 216</b> <p>E 1st St & Avenue X</p>");

const carrollgardensgreenMarket = L.marker([40.68106, -73.996528]).addTo(farmersmarketMap);
carrollgardensgreenMarket.bindPopup("<b>Carroll Gardens Greenmarket</b> <p>Carroll St bet Smith & Court Sts</p>");

const isabahliafarmstandMarket = L.marker([40.667554, -73.910207]).addTo(farmersmarketMap);
isabahliafarmstandMarket.bindPopup("<b>Isabahlia Farm Stand</b> <p>514 Rockaway Ave</p>");

const grandarmyplazagreenMarket = L.marker([40.663812, -73.962866]).addTo(farmersmarketMap);
grandarmyplazagreenMarket.bindPopup("<b>Grand Army Plaza Greenmarket</b> <p>Flatbush Ave. & Prospect Park W., at Prospect Park NW Entrance</p>");

const mcgolrickparkMarket = L.marker([40.725617, -73.944497]).addTo(farmersmarketMap);
mcgolrickparkMarket.bindPopup("<b>McGolrick Park's Down to Earth Farmers's Market</b> <p>Russell St. & Nassau Ave. (center of park)</p>");

const sixthavesunsetparkMarket = L.marker([40.647132, -74.004623]).addTo(farmersmarketMap);
sixthavesunsetparkMarket.bindPopup("<b>6th Ave Sunset Park Greenmarket</b> <p>44th St & 6th Ave</p>");

const rbbushwickMarket = L.marker([40.702811, -73.92539]).addTo(farmersmarketMap);
rbbushwickMarket.bindPopup("<b>RB Bushwick Farmers' Market at Maria Hernandez Park</b> <p>Knickerbocker Ave & Starr Ste</p>");

const redhookfarmstandMarket = L.marker([40.672524, -74.00871]).addTo(farmersmarketMap);
redhookfarmstandMarket.bindPopup("<b>Red Hook Farm Stand</b> <p>560 Columbia St</p>");