## Installation

1. Make sure you have node.
2. Install browser-sync:
```
npm install -g browser-sync
```
3. Run
```
browser-sync start --server --files **/*
```


## Looking around

`models.js` contains the data model for a restaurant -- with many tables, and parties assigned to reserved tables.

The `restaurant` directory contains a component for rendering a whole restaurant, given a width and a height.

The `table` directory contains the component for a table, including modals for booking and cancelling a booking.

The `modal` directory contains a tiny modal component.