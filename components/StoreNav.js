import React from 'react';
import { StyleSheet, Image, View, StatusBar, TouchableOpacity } from 'react-native'

function StoreNav({ navigation }) {

    return (
        <TouchableOpacity
            style={styles.touchop}
            onPress={() => navigation.navigate('Store')} >
            <Image
                style={styles.storenav}
                source={require('../assets/icons/coin_04d.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    storenav: {
        width: 40,
        height: 40,
        marginTop: 40,
        marginLeft: 320,

    },
    touchop: {
        width: '10%'
    }
})

export default StoreNav