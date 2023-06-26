import messaging from '@react-native-firebase/messaging';
import NavigationService from '../navigation/NavigationService';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
};

const getFcmToken = async () => {

    try {
        const newFcmToken = await messaging().getToken();
        console.log('The new generated token:', newFcmToken);
    }
    catch (error) {
        console.log(error, 'Error Raised');
    }
};

export async function notificationListener() {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage,
        );
        setTimeout(() => {
            NavigationService.navigate("DetailsScreen")
        }, 1200)
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage,
                );
                setTimeout(() => {
                    NavigationService.navigate("DetailsScreen")
                }, 1200)
            }
        });

    return unsubscribe;
}