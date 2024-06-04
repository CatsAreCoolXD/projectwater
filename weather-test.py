import python_weather
import os
import asyncio
import overpy
from geopy.geocoders import Nominatim

async def getweather():
    

    loc = Nominatim(user_agent="Geopy Library")

    getLoc = loc.geocode("İzmir")

    print(getLoc.address)

    print("Latitude = ", getLoc.latitude, "\n")
    print("Longitude = ", getLoc.longitude)

    
    osm = overpy.Overpass()
    weather = await client.get(input("In welke stad woon je?/n"))
    gebied = float(input("Hoeveel m2 is je dak?"))
    stadGrootte = float(219.3*1000)

    osm
    
    factor = gebied/stadGrootte

    print(f"Het gaat {weather.precipitation*30} mm regenen vandaag.")
    print(f"Jouw huis vangt {factor*weather.precipitation} mm water op")


if __name__ == '__main__':
  if os.name == 'nt':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
  
  asyncio.run(getweather())