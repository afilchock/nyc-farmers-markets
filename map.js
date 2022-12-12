// Create a new Leaflet map
let farmersmarketMap;
farmersmarketMap = L.map("map");
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(farmersmarketMap);

farmersmarketMap.setView([40.7128, -74.0060], 12);

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

const fourthavesunsetparkMarket = L.marker([40.641435, -74.017815]).addTo(farmersmarketMap);
fourthavesunsetparkMarket.bindPopup("<b>4th Ave Sunset Park Greenmarket</b> <p>4th Ave bet 59th & 60th Sts</p>");

const cortelyouMarket = L.marker([40.640825, -73.965301]).addTo(farmersmarketMap);
cortelyouMarket.bindPopup("<b>Cortelyou Greenmarket</b> <p>Cortelyou & Rugby Rds</p>");

const urbanoasisMarket = L.marker([40.656255, -73.936608]).addTo(farmersmarketMap);
urbanoasisMarket.bindPopup("<b>Urban Oasis Farmers' Market</b> <p>681 Clarkson Ave.</p>");

const boroughparkgreenMarket = L.marker([40.633696, -73.989916]).addTo(farmersmarketMap);
boroughparkgreenMarket.bindPopup("<b>Borough Park Greenmarket</b> <p>14th Ave bet 49th & 50th Sts</p>");

const seedsfoodboxMarket = L.marker([40.667377, -73.908214]).addTo(farmersmarketMap);
seedsfoodboxMarket.bindPopup("<b>Seeds in the Middle Fresh Food Box</b> <p>213 Osborn Street</p>");

const isabahliaMarket = L.marker([40.657984, -73.901764]).addTo(farmersmarketMap);
isabahliaMarket.bindPopup("<b>Isabahlia Farm Stand Winter Market</b> <p>93 New Lots Ave., inside greenhouse</p>");

const eastnewyorkMarket = L.marker([40.665296, -73.886557]).addTo(farmersmarketMap);
eastnewyorkMarket.bindPopup("<b>East New York Farmers' Market</b> <p>Schenck Ave bet New Lots & Livonia Aves</p>");

const bensonhurstMarket = L.marker([40.609951, -73.999456]).addTo(farmersmarketMap);
bensonhurstMarket.bindPopup("<b>Bensonhurst Greenmarket</b> <p>81st St & 18th Ave</p>");

const boroughhallMarket = L.marker([40.693722, -73.990455]).addTo(farmersmarketMap);
boroughhallMarket.bindPopup("<b>Brooklyn Borough Hall Greenmarket</b> <p>Court & Montague Sts</p>");

const grahamaveMarket = L.marker([40.702345, -73.942381]).addTo(farmersmarketMap);
grahamaveMarket.bindPopup("<b>Graham Avenue Farmers' Market</b> <p>Cook St & Graham Ave</p>");

const fortgreeneparkMarket = L.marker([40.691707, -73.973539]).addTo(farmersmarketMap);
fortgreeneparkMarket.bindPopup("<b>Fort Greene Park Greenmarket</b> <p>Washington Park bet Dekalb Ave & Willoughby St</p>");

const projecteatsMarket = L.marker([40.662555, -73.90892]).addTo(farmersmarketMap);
projecteatsMarket.bindPopup("<b>Project EATS Rockaway Farm Stand & CSA pickup</b> <p>Rockaway Ave. & Livonia Ave.</p>");

const woodhullhospitalMarket = L.marker([40.700726, -73.941932]).addTo(farmersmarketMap);
woodhullhospitalMarket.bindPopup("<b>Woodhull Hospital Farmstand</b> <p>Broadway & Flushing Ave</p>");

const harvesthomekingsMarket = L.marker([40.655828, -73.943355]).addTo(farmersmarketMap);
harvesthomekingsMarket.bindPopup("<b>Harvest Home Kings County Hospital Farmers Market</b> <p>Clarkson Ave bet E 37th & 38th Sts</p>");

const cypresshillsMarket = L.marker([40.682391, -73.876616]).addTo(farmersmarketMap);
cypresshillsMarket.bindPopup("<b>Cypress Hills Farmstand</b> <p>Fulton & Richmond Sts</p>");

const brownsvilleMarket = L.marker([40.671977, -73.895248]).addTo(farmersmarketMap);
brownsvilleMarket.bindPopup("<b>Brownsville/ENY - Health & Hospitals East New York</b> <p>2094 Pitkin Ave.</p>");

const harvesthomeconeyislandMarket = L.marker([40.58667, -73.96615]).addTo(farmersmarketMap);
harvesthomeconeyislandMarket.bindPopup("<b>Harvest Home Coney Island Hospital Farmers' Market</b> <p>Ocean Pkwy bet Avenue Z & Shore Pkwy</p>");

const rbpopupMarket = L.marker([40.689879, -73.905298]).addTo(farmersmarketMap);
rbpopupMarket.bindPopup("<b>RB Pop Up Farm Stand</b> <p>215 Cooper St</p>");

const hattiecarthanMarket = L.marker([40.690036, -73.943557]).addTo(farmersmarketMap);
hattiecarthanMarket.bindPopup("<b>Hattie Carthan After Church Farmers' Market</b> <p>49 Van Buren St</p>");

const bayridgegreenMarket = L.marker([40.617278, -74.033588]).addTo(farmersmarketMap);
bayridgegreenMarket.bindPopup("<b>Bay Ridge Greenmarket</b> <p>95th St & 3rd Ave</p>");

const wyckoffhouseMarket = L.marker([40.64497, -73.920914]).addTo(farmersmarketMap);
wyckoffhouseMarket.bindPopup("<b>Wyckoff House Museum Farm Stand</b> <p>5816 Clarendon Rd</p>");

const flatbushjunctionMarket = L.marker([40.632886, -73.947698]).addTo(farmersmarketMap);
flatbushjunctionMarket.bindPopup("<b>Flatbush Junction Farmstand</b> <p>Nostrand & Flatbush Aves</p>");

const dominoparkMarket = L.marker([40.715385, -73.967441]).addTo(farmersmarketMap);
dominoparkMarket.bindPopup("<b>Domino Park Greenmarket</b> <p>15 River St</p>");

const kensingtonfarmstandMarket = L.marker([40.64511, -73.979882]).addTo(farmersmarketMap);
kensingtonfarmstandMarket.bindPopup("<b>Kensington Farmstand</b> <p>McDonald Ave & Albemarle Rd</p>");

const parkslopedowntoearthMarket = L.marker([40.672194, -73.983785]).addTo(farmersmarketMap);
parkslopedowntoearthMarket.bindPopup("<b>Park Slope's Down to Earth Farmers Market</b> <p>4th St & 5th Ave</p>");

const brownsvillepitkinMarket = L.marker([40.669264, -73.913554]).addTo(farmersmarketMap);
brownsvillepitkinMarket.bindPopup("<b>Brownsville Pitkin Farmstand</b> <p>Pitkin Ave & Thomas Boyland St</p>");

const bartelpritchardsqMarket = L.marker([40.661154, -73.980172]).addTo(farmersmarketMap);
bartelpritchardsqMarket.bindPopup("<b>Bartel-Pritchard Square Greenmarket</b> <p>Prospect Park W & 15th St</p>");

const hattiecarthancommunityMarket = L.marker([40.689511, -73.948039]).addTo(farmersmarketMap);
hattiecarthancommunityMarket.bindPopup("<b>Hattie Carthan Community Farmers Market</b> <p>Marcy Ave & Clifton Pl</p>");

const harvesthomebrowerparkMarket = L.marker([40.674007, -73.944544]).addTo(farmersmarketMap);
harvesthomebrowerparkMarket.bindPopup("<b>Harvest Home Brower Park Farm Stand</b> <p>Brooklyn Ave & Prospect Pl</p>");

const southwilliamsburgMarket = L.marker([40.706998, -73.961364]).addTo(farmersmarketMap);
southwilliamsburgMarket.bindPopup("<b>South Williamsburg Greenmarket</b> <p>Taylor St & Lee Ave</p>");

const rbhopeballfieldMarket = L.marker([40.697175, -73.916878]).addTo(farmersmarketMap);
rbhopeballfieldMarket.bindPopup("<b>RB HopeBall Field Farmers Market</b> <p>249 Grove St</p>");

