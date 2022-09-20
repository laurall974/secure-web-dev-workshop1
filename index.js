// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	let liste = filmingLocations.sort(function compareFn(a,b){return new Date(a.fields.date_debut) - new Date(b.fields.date_debut); });
	return liste.shift()
}
console.log('Filming location sorted by start date')
console.log(sortFilmingLocationsByStartDate())

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	let result = filmingLocations.filter( value => value.fields.annee_tournage == 2020 );
	return result.length
}
console.log('There are the number of filming locations in 2020 only : ' + getFilmingLocationsNumber2020())

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	let resultYear = filmingLocations;
	let year = 2016; //dataset start in 2016
	let result = new Object();
	while (resultYear.length != 0 ) {
		resultYear = filmingLocations.filter(value => value.fields.annee_tournage == year);
		result[year] = resultYear.length;
		year = year + 1;
	}

	return result
}
console.log('Filming location number per year :')
console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	let ardt = 75001;
	let result = new Object();
	while (ardt != 75021 ) {
		let resultArdt = filmingLocations.filter(value => value.fields.ardt_lieu == ardt);
		result[ardt] = resultArdt.length;
		ardt = ardt + 1;
	}
	return result
}
console.log('Filming location number per district : ')
console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	var tabFilmNames = []
	filmingLocations.forEach(function(element){
		if (!tabFilmNames.includes(element.fields.nom_tournage)){
			tabFilmNames.push(element.fields.nom_tournage)
		}
	})
	var tab = []
	tabFilmNames.forEach(function(element){
		var dict = {"film":element,"locations":0}
		filmingLocations.forEach(function(element1){
			if (element1.fields.nom_tournage == element){
				dict["locations"]++
			}
		})
		tab.push(dict)
	})
	const result = tab.sort(function(a,b){return b['locations']-a['locations']})
	return result
}
const result = getFilmLocationsByFilm()
console.log(result[0],result[result.length-1])


// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	return getFilmLocationsByFilm().length
}
console.log('Number of film : ' + getNumberOfFilms())

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	let result = new Array();
	let l = filmingLocations.filter(v => v.fields.nom_tournage == 'LRDM - Patriot season 2');
	let i = 0;
	while (i != l.length-1) {
		result.push(l[i].fields.adresse_lieu);
		i = i+1;
	}
	return result


}
console.log('TODO: All the filming locations of LRDM - Patriot season 2')
console.log(getArseneFilmingLocations())

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	let result = new Array();
	let l = filmingLocations.filter(v => v.fields.nom_tournage == favoriteFilmsNames);
	let i = 0;
	while (i != l.length-1) {
		result.push(l[i].fields.ardt);
		i = i+1;
	}
	return result
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
