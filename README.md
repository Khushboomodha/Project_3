# Project_3
Air Quality Data Analysis and Visualization
Air Quality Data Analysis and Visualization

Code to find the Cordinates for City:
1729187567776

Line Chart to show levels of different pollutants amont Top 5 Popular cities.
To create dashboard we imported the library name Panel. The graph is populated on the local host browser. Screen Shot attached below:

The dataset includes the following columns for each 5 city:

City : Name of the city.
Latitude and Longitude : Geographical coordinates of the city.
AQI (Air Quality Index) : A numerical value representing overall air quality. The higher the AQI, the worse the air quality.
CO (Carbon Monoxide) : Measured in micrograms per cubic meter (µg/m³), this is a gas emitted from vehicles and industrial activities. High levels can lead to respiratory problems.
NO2 (Nitrogen Dioxide) : A gas that contributes to smog and acid rain, primarily produced by vehicles and power plants. It can irritate the lungs and reduce immunity to lung infections.
O3 (Ozone) : Ground-level ozone forms when pollutants emitted by cars and industries chemically react in sunlight. It is a major component of smog.
PM10 : Particulate matter with a diameter of 10 micrometers or smaller, which can be inhaled and cause respiratory issues.
PM2.5 : Finer particulate matter with a diameter of 2.5 micrometers or smaller. These particles penetrate deep into the lungs and are more harmful than PM10.
SO2 (Sulfur Dioxide) : Produced by burning fossil fuels, SO2 contributes to acid rain and respiratory problems.
Key findings from the above chart - Los Angeles had the highest spike in CO level in the year 2022 above 6000 and New York has its highest spike in Year 2024 of above 5000 resulting high AQI value resulting in most polluted cities

1729187812569

1729204132115

1729204171630

1729204221523

1729204260162

Based on most recent data collected from open weather API for a day:

1729209293612

Analysis for the above data:

Most Polluted City: Los Angeles
AQI : 5 (The highest among the cities, indicating the worst air quality)
CO : 1081.47 µg/m³ (Highest among all cities)
NO2 : 100.08 µg/m³ (Significantly higher than others)
PM2.5 : 104.74 µg/m³ (Extremely high, posing serious health risks)
SO2 : 13.71 µg/m³ (Higher than most cities)
Los Angeles suffers from high levels of various pollutants, especially particulate matter (PM2.5) and CO, making it the most polluted city in this dataset.

Least Polluted Cities: New York, Houston, Chicago, and Phoenix with AQI index of 2.
Create heatmap based on AQI value by importing Folium Lib. Screen Shot below:
The dataset contains columns such as City, Latitude and Longitude, AQI.

Cities with the Worst AQI (5):

Crestline
Ajijic
Palmdale
Adelanto
Hesperia
Pekin
These cities have the highest AQI values, indicating the worst air quality, which could have a significant impact on the health of their populations.

Cities with the Best AQI (1):

There are 130 cities with an AQI of 1, indicating excellent air quality. Here are a few examples:

Rahway
New Milford
Muna
Murray
Siloam Springs
These cities enjoy clean air and minimal pollution risks.

1729188198538

Bar chart displaying the top 5 cities in North America with the highest PM2.5 levels, based on randomly generated data, ranked from highest to lowest
Key Findings:

Durango has the highest PM2.5 **levels, with a value close to 500, **significantly higher than the other **cities.
Tepeapulco and Tlalancaleca also **show relatively high PM2.5 levels, **though they are notably lower than Durango.
Moyotzingo and Xalmimilulcocomplete the top 5, with PM2.5 levels ranging between 200 and 300.
Bar chart displaying the top 5 cities in North America with the lowest PM2.5 levels, based on randomly generated data, ranked from lowest to highest: Sunnyside, Waterloo, Altamont, Hermitage, and Oak Harbor.

1729210410625

Bar chart displaying the top 5 cities in North America with the highest PM2.5 levels, based on randomly generated data, ranked from lowest to highest
Key Findings:

Ensenada and Constitucion, both in **Mexico, show the lowest PM2.5 levels, **with Ensenada ranking first for the **cleanest air quality.
In Canada, Yellowknife, Williams **Lake, and North Battleford also enjoy **excellent air quality, with all three **cities having low PM2.5 AQI values. **North Battleford has the highest value **among the top 5, but it still reflects very good air quality.
1729210385071

The chart displays the countries with the highest average PM2.5 AQI levels, featuring 10 nations: Republic of Korea, Bahrain, Mauritania, Pakistan, Aruba, Kuwait, UAE, Senegal, India, and Saudi Arabia.
1729208096684

Air Quality Distribution across North America
1729211383427
