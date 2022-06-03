import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WineList from './screens/WineList';
import WineDetail from './screens/WineDetail';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WineList"
        component={WineList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WineDetail"
        component={WineDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
