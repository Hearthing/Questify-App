import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

function Store({ navigation }) {
    return (
        <ImageBackground
            style={styles.img}
            source={require('../assets/images/bg_test1.png')}>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.headerimg}
                        source={require('../assets/icons/coin_04d.png')} />
                    {/* <Text style={styles.headertxt}>Go Home</Text> */}

                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        flex: 1,
    },
    detailbtn: {
        marginTop: 50,
        color: 'black'
    },
    headerimg: {
        marginTop: 50,
        height: 100,
        width: 100,
    }
})

export default Store