A website by > UDAYSHY CHUGH

# About
Diet Trackr is a diet companion website that helps users monitor their nutrition intake and make healthier eating habits. Users can lookup foods and recipes for nutritional info, and enter them into the meal tracker if they decide to eat it. When a user enters a food item into the meal tracker, Diet Trackr will automatically look up nutrition info and log the change in the user's profile. It features data visualization using SVG and a recipe lookup page that will select random recipes based on a variety of filters, such as dietary or calorie restrictions.

# Features
* Complete user database using WebSQL, with login and nutrition intake functionality
* Nutritional content lookup using USDA Food Composition API
* Recipe generator with numerous filtering options

# Endpoints
* Api used

https://api.nal.usda.gov/ndb/search/?format=json&q=${searchTerm}&sort=r&max=5&offset=0&api_key=${databasekey}
https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${databasekey}${ntCategories}&ndbno=${selectedItem.ndbno}
https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${databasekey}${ntCategories}&ndbno=${dbnum}
https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}&from=0&to=20&calories=${min}-${max}${diet}${health}