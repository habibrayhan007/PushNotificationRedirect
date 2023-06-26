import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Title from '../title/Title';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Title />
            <View>
                <Text>Details Screen</Text>
            </View>
        </View>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        height: '100%'
    }
});