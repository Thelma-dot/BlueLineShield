// navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from '../screens/DashboardScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ApplicationScreen from '../screens/ApplicationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MeScreen from '../screens/MeScreen';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home': iconName = 'home-outline'; break;
            case 'Services': iconName = 'construct-outline'; break;
            case 'Application': iconName = 'document-text-outline'; break;
            case 'Notification': iconName = 'notifications-outline'; break;
            case 'Me': iconName = 'person-outline'; break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Application" component={ApplicationScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
      
    </Tab.Navigator>
  );
}
