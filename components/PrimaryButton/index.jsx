import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity,ActivityIndicator } from 'react-native'
import { colors } from '../../constants/colors'
function PrimaryButton({ title, onPress,loading }) {
    return (
        <TouchableOpacity disabled={loading}  onPress={onPress} style={styles.button}>
            {/* <ImageBackground style={{ width: '100%', height: 48 }} source={require('../../assets/images/button.png')}> */}
            {loading? <ActivityIndicator style={{ alignSelf: 'center',
        paddingVertical: 10}} color={'white'} size={'large'} />: <Text style={styles.title}>{title}</Text>}
            {/* </ImageBackground> */}
        </TouchableOpacity>
    )
}

export default PrimaryButton
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.primary,
        borderRadius: 10
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        paddingVertical: 10



    }
})