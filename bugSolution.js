The correct way to use `keyExtractor` in a FlatList is to provide a unique ID for each item in your data.  This is usually a field within each data object, such as an ID.

```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];

const App = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default App;
```
If you don't have a unique ID, you can use a library like `uuid` to generate one for each item.  Never use the index as a key, unless the order of your data will never change and you don't modify the array.