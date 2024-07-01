import { Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight,
  responsiveWidth,
  responsiveFontSize
 } from 'react-native-responsive-dimensions'

 
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
             <Image source={require('../Image/Vector1.png')}
              style={styles.Vector1}
             />

             <Text style={styles.title}>Create Your Account</Text>
              
             <View>
              <TextInput placeholder='Username'
                 style={styles.password}        /></View>

               <View>
              <TextInput placeholder='Password'
                 style={styles.password}        /></View>
                 <View>
              <TextInput placeholder='Email'
                 style={styles.password}        /></View>
                 <View>
              <TextInput placeholder='Mobile'
                 style={styles.password}        /></View>

<TouchableOpacity style={styles.btn}
           onPress={()=>{
            navigation.navigate('Login')
           }}
          >
            <Text style={styles.txt3}>SignIn</Text>
               <Image source={require('../Image/btn.png')}/>
          </TouchableOpacity>
          <View style={styles.btmcontainer}>
      <Image source={require('../Image/Vector2.png')}/>
    <View style={{flexDirection:'column'}}>
    <Text style={styles.txt4}>Or create account using social media</Text>

<View style={styles.Icon}>
              <TouchableOpacity>
              <Image source={require('../Image/facebook.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../Image/Google.png')}/>
              </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('../Image/Twitter.png')}/>
             </TouchableOpacity>
             </View> 
    </View>
      </View>  
         
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'"#FFFFFF"'
  },
  Vector1:{
    width:"100%"
  },
  title:{
    fontSize:responsiveFontSize(3),
    fontWeight:'500',
    color:'black',
    alignSelf:'center'
  },
  password: {
    height:responsiveHeight(7),
    width:"90%",
    borderRadius:40,
    backgroundColor:"white",
     paddingHorizontal:responsiveWidth(4),
     marginTop:responsiveHeight(3),
     elevation:10,
     alignSelf:'center'
  },
  btn:{
    flexDirection:'row',
    justifyContent:'space-between',
      marginTop:responsiveHeight(6),
      alignSelf:'flex-end',
      marginRight:responsiveWidth(8)
   
    },
    btmcontainer:{
      flexDirection:'row',
   
    },
    txt3:{
      fontSize:responsiveFontSize(3),
      fontWeight:'700',
      marginRight:responsiveWidth(4),
      color:'#262626'
    },
    txt4:{
      fontSize:responsiveFontSize(2),
      fontWeight:'500',
      alignSelf:'center',
      marginLeft:responsiveWidth(-18),
      marginTop:responsiveHeight(13)
    },
  Icon:{
    flexDirection:'row',
    justifyContent:'space-between',
  marginHorizontal:responsiveWidth(3),
  marginTop:10
  }
})