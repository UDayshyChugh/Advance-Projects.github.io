var request = new XMLHttpRequest();
var autocomplete = []
var databasekey = "10SKlZqWe3IkC3ymxUWxzMrjgUfNFuixcuqY10gC";
var dbnum = `01009`;
var ntCategories = '&nutrients=205&nutrients=204&nutrients=208&nutrients=269';

function searchItem(searchTerm, cb) {
  var query = `https://api.nal.usda.gov/ndb/search/?format=json&q=${searchTerm}&sort=r&max=5&offset=0&api_key=${databasekey}`;
  console.log("Query: " + query);
  request.open('GET', query, true);
  request.onload = function () {
    var json = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      let dbnum = json.list.item[0].ndbno;
      console.log("Array output: " + json.list.item.map(e => formatTitle(e.name)));
    } else {
      console.log('Request timeout');
    }
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        if (typeof cb === 'function')
          cb(request.responseText);
      }
    }
  }
  request.send();
}

function getSuggestions(searchTerm = "chicken") {
  var query = `https://api.nal.usda.gov/ndb/search/?format=json&q=${searchTerm}&sort=r&max=5&offset=0&api_key=${databasekey}`;
  console.log("Query: " + query);
  request.open('GET', query, true);
  request.onload = function () {
    var json = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      let dbnum = json.list.item[0].ndbno;
      console.log("Array output: " + json.list.item.map(e => formatTitle(e.name)));
    } else {
      console.log('Request timeout');
    }
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        if (typeof cb === 'function')
          cb(request.responseText);
      }
    }
  }
  request.send();
}

function getNutrientData(dbnum) {
  var query = `https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${databasekey}${ntCategories}&ndbno=${dbnum}`;
  request.open('GET', query, true);
  request.onload = function () {
    var json = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      console.log(json.report.foods[0].nutrients.forEach(
        (element) => console.log(element.nutrient + ": " + element.value))
      );
    } else {
      console.log('Request timeout');
    }
  }
  request.send();
}


function formatTitle(text) { 
  text = text.split(',')[0] 
  return text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}