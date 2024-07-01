import { StyleSheet, Text, TextInput, View,TouchableOpacity ,Image,SafeAreaView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomInput from './Common/CustomInput';
const Login = ({navigation}) => {

  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [bademail,setbademail]=useState(false);               // use for incorect email&password
  const [badpassword,setbadpasword]=useState(false);
  const validate=()=>{                          // form validation
    if(email==""){
      setbademail(true);
    } else {
      setbademail(false)
    }
    if(password==''){
      setbadpasword(true);
    } else {
      setbadpasword(false)
    }
  };
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
      <View>
        <Image source={require('../Image/top.png')} 
        style={styles.top}
        />
      </View>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.txt}>create your account</Text>

     <CustomInput  placeholder={"Enter Email"}
     
     icon={require('../Image/btn.png')}
     value={email}                           // form validation
     onChangeText={(txt)=>{
      setemail(txt)
     }}
     />
     {                                            // use for incorect text
      bademail===true&&(<Text style={styles.badtxt}>Enter valid email</Text>)
     }
     <CustomInput
     placeholder={"Enter Password"}
     icon={require('../Image/btn.png')}
     type={'password'}
     value={password}
     onChangeText={(txt)=>{
      setpassword(txt)
     }}
     />
     {
      badpassword===true&&(<Text style={styles.badtxt}>Enter valid password</Text>)
     }
        <TouchableOpacity>
        <Text style={styles.txt2}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
          navigation.navigate('SignUp')
         }}
        >
      
        </TouchableOpacity>
          <TouchableOpacity style={styles.btn}
           onPress={()=>{
            // navigation.navigate('SignUp')
            validate();
           }}
          >
            <Text style={styles.txt3}>SignIn</Text>
           
               <Image source={require('../Image/btn.png')}> 
               {/* <AntDesign name="arrowright" size={20}/> */}
               </Image>
          </TouchableOpacity>
      
      <View style={styles.btmcontainer}>
      <Image source={require('../Image/left.png')}/>
      <Text style={styles.txt4}>Don't have Account ?</Text>
      </View>  
       
     </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
  flex:1,
  
  backgroundColor:"#FFFFFF"
  },
  top:{
    width:"100%" 
  },
  title:{
   fontSize:hp(7),
    fontWeight:'700',
    color:'black',
    alignSelf:'center'
  },
  txt:{
    fontSize:hp(2.5),
    fontWeight:'500',
    marginTop:hp(1),
    color:'black',
    alignSelf:'center'
  },
  email:{
    height:hp(7),
    width:'90%',
    borderRadius:40,
    backgroundColor:"white",
     paddingHorizontal:hp(4),
     marginTop:hp(5),
     elevation:10,
     alignSelf:'center'
  },
  password: {
    height:hp(7),
    width:"90%",
    borderRadius:40,
    backgroundColor:"white",
     paddingHorizontal:wp(4),
     marginTop:hp(5),
     elevation:10,
     alignSelf:'center'
  },
  txt2:{
    fontSize:hp(2),
    alignSelf:'flex-end',
   marginRight:wp(15),
    marginTop:hp(2),
    color:'#BEBEBE'
  },
  lefticon:{
    
  },
  btn:{
  flexDirection:'row',
  justifyContent:'space-between',
    marginTop:hp(9),
    alignSelf:'flex-end',
    marginRight:wp(8)
 
  },
  btmcontainer:{
    flexDirection:'row',
    marginTop:hp(6.2)
  },
  txt3:{
    fontSize:hp(3),
    fontWeight:'700',
    marginRight:wp(4),
    color:'#262626'
  },
  txt4:{
    fontSize:hp(2),
    fontWeight:'500',
    marginTop:hp(13)
  },
  badtxt:{
    fontSize:15,
    color:'red',
    marginHorizontal:30,
    marginTop:10
  }
})


// container:{                                /// responsive diamension
//   flex:1,
  
//   backgroundColor:"#FFFFFF"
//   },
//   top:{
     
//   },
//   title:{
//    fontSize:responsiveFontSize(7),
//     fontWeight:'700',
//     color:'black',
//     alignSelf:'center'
//   },
//   txt:{
//     fontSize:responsiveFontSize(2.5),
//     fontWeight:'500',
//     marginTop:responsiveHeight(1),
//     color:'black',
//     alignSelf:'center'
//   },
//   email:{
//     height:responsiveHeight(7),
//     width:"90%",
//     borderRadius:40,
//     backgroundColor:"white",
//      paddingHorizontal:responsiveWidth(4),
//      marginTop:responsiveHeight(5),
//      elevation:10,
//      alignSelf:'center'
//   },
//   password: {
//     height:responsiveHeight(7),
//     width:"90%",
//     borderRadius:40,
//     backgroundColor:"white",
//      paddingHorizontal:responsiveWidth(4),
//      marginTop:responsiveHeight(5),
//      elevation:10,
//      alignSelf:'center'
//   },
//   txt2:{
//     fontSize:responsiveFontSize(2),
//     alignSelf:'flex-end',
//    marginRight:responsiveWidth(15),
//     marginTop:responsiveHeight(2),
//     color:'#BEBEBE'
//   },
//   lefticon:{
    
//   },
//   btn:{
//   flexDirection:'row',
//   justifyContent:'space-between',
//     marginTop:responsiveHeight(9),
//     alignSelf:'flex-end',
//     marginRight:responsiveWidth(8)
 
//   },
//   btmcontainer:{
//     flexDirection:'row',
//     marginTop:responsiveHeight(6.2)
//   },
//   txt3:{
//     fontSize:responsiveFontSize(3),
//     fontWeight:'700',
//     marginRight:responsiveWidth(4),
//     color:'#262626'
//   },
//   txt4:{
//     fontSize:responsiveFontSize(2),
//     fontWeight:'500',
//     marginTop:responsiveHeight(13)
//   }
// })