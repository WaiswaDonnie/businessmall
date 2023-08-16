import React, { useRef, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PhoneInput from "react-native-phone-number-input";

function CustomInput({ onChange, value, setValue, style, type, placeholder, autoFocus }) {
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);
    return (
        <>

            {type !== "phone" ?
                <TextInput autoFocus={autoFocus} keyboardType={type} placeholder={placeholder} secureTextEntry={type === "password" ? true : false} value={value}
                    onChangeText={onChange} style={[styles.input, style]} />

                :
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="UG"
                    layout="first"
                    // onChangeText={(text) => {
                    //     setValue(text);
                    // }}
                    onChangeFormattedText={onChange}
                    // withDarkTheme
                    // withShadow
                    containerStyle={styles.phoneInput}
                    textContainerStyle={{ backgroundColor: 'transparent',height:50 }}
                // textInputStyle={{backgroundColor:'transparent'}}
                />
            }
        </>
    )
}

export default CustomInput;
const styles = StyleSheet.create({
    input: {
        borderColor: '#717070',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    phoneInput: {
        borderColor: '#717070',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
        height: 53,
        backgroundColor: 'transparent',
        marginVertical: 5

    }

});