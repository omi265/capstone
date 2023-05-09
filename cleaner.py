import json

f = open('D:\Ashoka\Eighth Semester\Capstone\CrimeMap\cl_5.json')

data = json.load(f)

geojson = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry" : {
            "type": "Point",
            "coordinates": [d["long"], d["lat"]],
            },
        "properties" : {
            "name": d["area_name"],
            "cluster": d["cluster"]
            },
     } for d in data]
}

print(geojson)

output = open('geojson_5.json', 'w')
json.dump(geojson, output)

output.close()