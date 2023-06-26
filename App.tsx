import React, { useEffect } from 'react';
import { StyleSheet, View, Text, PermissionsAndroid, Platform } from 'react-native';
import { AppContainer } from './src/navigation/AppContainer';
import { requestUserPermission, notificationListener } from './src/utils/NotificationService';


const App = () => {

  useEffect(() => {

    if (Platform.OS == 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((res) => {
        console.log("Response:", res)
        if (!!res && res == 'never_ask_again') {
          requestUserPermission()
          notificationListener()
        }
      }).catch(error => {
        alert('something wrong')
      })
    } else {

    }

  }, [])


  return (
    <View style={styles.container}>
      <AppContainer />
    </View>


  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})