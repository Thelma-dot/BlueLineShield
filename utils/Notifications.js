import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import * as Permissions from 'expo-permissions';

export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for notifications!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

export async function triggerMotionNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Motion Detected 🚨',
      body: 'Unusual activity detected near your camera feed.',
    },
    trigger: null,
  });
}
