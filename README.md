# React Native FlatList - Incorrect keyExtractor Bug

This repository demonstrates a common bug in React Native's FlatList component: using an incorrect `keyExtractor` function.

The `bug.js` file shows how using the index as the key can lead to issues when modifying the data array. The `bugSolution.js` file provides the correct implementation using a unique identifier for each item.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app.
4. Observe the initial rendering.
5. Add or remove an item from the data array. Observe the incorrect behavior of the FlatList.

## Solution

The solution involves using a unique identifier from each item in the data array for the key. This ensures that React Native can properly identify each item and update the list correctly.