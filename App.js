import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './navigation/MainTabs';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import CameraScreen from './screens/CameraScreen';
import AlertScreen from './screens/AlertScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import SecurityMonitoringScreen from './screens/SecurityMonitoringScreen';
import SmartLockScreen from './screens/SmartLockScreen';
import EmergencyAlertsScreen from './screens/EmergencyAlertsScreen';
import VisitorManagementScreen from './screens/VisitorManagementScreen';
import MaintenanceSupportScreen from './screens/MaintenanceSupportScreen';
import SmartDevicesScreen from './screens/SmartDevicesScreen';






import { registerForPushNotificationsAsync } from './utils/Notifications';
import { ThemeProvider } from './ThemeContext';
import { ProfileProvider } from './ProfileContext'; 



const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <ThemeProvider>
              <ProfileProvider>
                
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true, title: 'Sign Up' }} />
    
          <Stack.Screen name="DashboardTabs" component={MainTabs} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Alert" component={AlertScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} options={{ title: 'My Profile' }} />
          <Stack.Screen name="SecurityMonitoring" component={SecurityMonitoringScreen} />
          <Stack.Screen name="SmartLock" component={SmartLockScreen} />
          <Stack.Screen name="EmergencyAlerts" component={EmergencyAlertsScreen} />
          <Stack.Screen name="VisitorManagement" component={VisitorManagementScreen} />
          <Stack.Screen name="MaintenanceSupport" component={MaintenanceSupportScreen} />
          <Stack.Screen name="SmartDevices" component={SmartDevicesScreen} />
          
          
         


        </Stack.Navigator>
      </NavigationContainer>
      
      </ProfileProvider>
    </ThemeProvider>
  );
}

