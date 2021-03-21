import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

function HomeBtn({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image
                style={styles.homeimg}
                source={require('../assets/images/Questifylogo_test.png')} />

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    },
    homeimg: {
        marginTop: 0,
        marginLeft: 85,
        height: 30,
        width: 200,

    }
})

export default HomeBtn