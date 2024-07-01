import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, icon, type,value,onChangeText }) => {
    return (
        <View
            style={styles.input}>
            <Image source={icon} style={{ width: 24, height: 24 }}                 // use for Icon
            />
            <TextInput placeholder={placeholder}
                placeholderTextColor={"black"}
                secureTextEntry={type? true : false}         // agr p.w hai tu text hide honga
                 value={value}
                 onChangeText={(txt)=>{
                    onChangeText(txt);
                 }}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        height:50,
        width:'90%',
        borderRadius:40,
        backgroundColor:"white",
         paddingHorizontal:10,
         marginTop:40,
         elevation:10,
         alignSelf:'center',
         flexDirection:'row',
         alignItems:"center",
         paddingHorizontal:20
    }

})