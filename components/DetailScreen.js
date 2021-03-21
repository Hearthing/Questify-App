import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

import HomeBtn from './HomeBtn'

const DetailScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={require('../assets/images/bg_test1.png')}>

                <View style={styles.container}>
                    <HomeBtn navigation={navigation} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        flex: 1,
    }

})

export default DetailScreen