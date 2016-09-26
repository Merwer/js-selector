/**
 * A selection engine used to randomly pick elements from a list
 */
function JsSelector() {
	"use strict";
	
	var _list;
	var _distribution = new SimpleDistribution();
	var _weightTotal = 0;
	
	var _getItem = function(weightVal) {
		console.log("Retrieving item by weight: " + weightVal);
		var copy = weightVal;
		var index;
		for(index = 0; copy > 0 && index < _list.length; index++) {
			copy -= _list[index].weight;
		}
		return _list[index - 1].value;
	}
	
	var _calculateWeightTotal = function() {
		_weightTotal = 0;
		for(var index = 0; index < _list.length; index++) {
			var weight = _list[index].weight;
			if(weight === undefined) {
				weight = 1;
			}
			_weightTotal += weight;
		}
	}
	
	this.loadList = function(list) {
		if(list === undefined) {
			// Error
		}
		_list = list;
		_calculateWeightTotal();
	}
	
	this.setDistribution = function(distribution) {
		if(distribution === undefined || typeof distribution.nextVal === undefined) {
			// Error
		}
		_distribution = distribution;
	}
	
	this.getItem = function() {
		var nextVal = _distribution.nextVal(_weightTotal) + 1;
		return _getItem(nextVal);
	}
}

function SimpleDistribution() {
	"use strict";
	
	this.nextVal = function(max) {
		return Math.floor((Math.random() * max));
	}
}