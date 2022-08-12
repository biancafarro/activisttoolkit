/* .js files add interaction to your website */

var factList = ["Earth's average temperature has risen about 1.8°F over the past 100 years and it will rise much more as long as CO2 emissions continue to increase at current rates.", 
"The years 1998, 2005, and 2007 are the warmest ever recorded according to historical weather data.",
"Climate change means more extreme weather. Over the last 60 years, heavy rain and snow storms have become 24% more frequent in the U.S. Warmer ocean waters also may make strong hurricanes even more powerful.",
"Nearly 40% of Earth's land surface has been converted for human use; as a result, large quantities of CO2 have been released into the atmosphere. At the same time, fewer trees are left to absorb it.",
"The last few decades have seen larger areas of the world enduring longer and drier droughts. One reason is that warmer soils lose their moisture faster, intensifying drought conditions.",
"Pollution is one of the biggest global killers, affecting over 100 million people.",
"Over 1 million seabirds and 100,000 sea mammals are killed by pollution every year.",
"People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer than people who live in less-polluted areas.",
"Every year 1.2 trillion gallons of untreated sewage, stormwater, and industrial waste are dumped into US water.",
]

var fact = document.getElementById("fact");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count += 1;
  if (count == factList.length) {
  count = 0;
  }
}
