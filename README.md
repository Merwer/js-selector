# js-selector
A randomization engine for picking from a list

# Usage

## Simple
To create a list with equal weight for picking each element:
```js
var selector = new JsSelector();
selector.loadList([
  {"value": "Item 1"},
  {"value": "Item 2"},
  {"value": "Item 3"}
]);

// Get a random item
selector.getItem();
```

## Weighted
To create a list with defined weights for picking each element:
```js
var selector = new JsSelector();
selector.loadList([
  {"value": "Item 1", "weight": 5},
  {"value": "Item 2", "weight": 4},
  {"value": "Item 3"} // Default weight = 1
]);

// Get a random item
selector.getItem();
```
