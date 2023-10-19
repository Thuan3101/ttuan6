import { StatusBar } from 'expo-status-bar';
import {  Image,StyleSheet, Text, View,Pressable } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation })  {
  return (

    <View style={styles.container}>
      
    <View style={styles.h1}>
    <Image source={require("./image/phone.png")} 
        style={[styles.image]}></Image>
    </View>
      
    
    <Text style={styles.T1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
    
    <View style={styles.h2}>
    <Image source={require("./image/star.png")} style={[styles.image2]}></Image>
    <Image source={require("./image/star.png")} style={[styles.image2]}></Image>
    <Image source={require("./image/star.png")} style={[styles.image2]}></Image>
    <Image source={require("./image/star.png")} style={[styles.image2]}></Image>
    <Image source={require("./image/star.png")} style={[styles.image2]}></Image>
    <Text style={styles.T2}>(Xem 828 đánh giá)</Text>
    </View>

    <View style={styles.T3}>
    <Text style={styles.t3}>1.790.000 đ</Text>
    <Text style={styles.t4}>1.990.000 đ</Text>
    </View>

    <View style={styles.T4}>
    <Text style={styles.t5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
    <Image source={require("./image/dauchamhoi.png")} style={[styles.image3]}></Image>
    
    </View>
    
    <View style={styles.v5}>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('Trở lại')}>
        <Text style={styles.t6}>4 MAU-CHON MAU  </Text>
      </Pressable>


     </View>   
     <button style={styles.cm}> 
          <Text style={styles.t7}>        CHỌN MUA           </Text> 
      </button> 
        
      <StatusBar style="auto" />
    </View>
    
  );
}



function DetailsScreen({ navigation }) {
  return (

    <View style={styles.container}>
      <View  style={styles.vsl1}>
      <Image source={require("./image/phone.png")} style={styles.imgphone2}></Image>
       <p style={styles.tsl1}>Điện thoại VSMart Joy3- Hàng Chính Hãng</p>
      </View>
      <View  style={styles.vsl2}>
       <p style={styles.tsl1}>Select a color:</p>
       <Image source={require("./image/blue2.png")} style={styles.imgcolor}></Image>
       <Image source={require("./image/red.png")} style={styles.imgcolor}></Image>
       <Image source={require("./image/black.png")} style={styles.imgcolor}></Image>
       <Image source={require("./image/blue.png")} style={styles.imgcolor}></Image>
       
      </View>
 
      <Pressable style={styles.btn} onPress={() => navigation.navigate('VSMart Joy3')}>
        <Text style={styles.t6}>Trở lại</Text>
      </Pressable>

      <button style={styles.cm}> 
          <Text style={styles.t7}>        CHỌN MUA           </Text> 
      </button> 


 
       
    </View>
 
  
   );
 }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="VSMart Joy3" component={HomeScreen} />
        <Stack.Screen name="Trở lại" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  image:{
    width:301,
    height:361,
    left:40,
  },
  T1:{
    fontWeight:'bold',
    fontSize:18,
    marginTop: 20,
    marginLeft: 20,
  },
  image2:{
    width:23,
    height:25,
  },
  h2:{
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 20,
  },
  T2:{
    fontSize:15,
    marginTop: 5,
    marginLeft: 20,
  },
  T3:{
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 20,
  },
  t3:{
    fontWeight:'bold',
    fontSize:20,
    marginTop: 5,
    marginLeft: 20,
  },
  t4:{
    fontSize:20,
    color:'grey',
    marginLeft: 50,
    marginTop: 5,
    marginLeft: 50,
    textDecorationLine: 'line-through',
  },
  T4:{
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    color:'red',
  },
  t5:{
    fontSize:18,
    color:'red',
  },
  image3:{
    
    width:23,
    height:25,
    marginTop: 0,
    marginLeft: 20,
  },

  btn: {
    width: 350,
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 15,
    borderColor: 'black',
  },
  t6: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 6, // Điều chỉnh giá trị này để canh chỉnh chữ chính giữa button
    textAlign: 'center', // Để canh giữa văn bản trong button
    borderColor:'black',
    backgroundColor:'#DCDCDC',
    borderRadius: 15,
  },
  
cm:{
  width: 350,
  height: 40,
  backgroundColor:'red',
  marginTop: 20,
  marginLeft: 20,
  borderRadius: 15,
  
},
t7:{
  fontWeight:'bold',
  fontSize: 22,
  marginTop: 30,
  marginLeft: 20,
  color:'white',
},



txt4:{
  textAlign: 'center',
  marginTop: 15,
  fontSize: 20,
  color: "black",
  fontFamily:"time"
 },


 imgphone2:{
  height:120,
  width:100
 },
 vsl1:{
  flexDirection: "row",
 },
 tsl1:{
  marginTop:50
 },
 vsl2:{
  flexDirection:"column",
  
 },
 imgcolor:{
  height:100,
  width:100,
  marginLeft: 140

 },
 btn2 :{
  height: 50,
  width:330,
  backgroundColor: "blue",
  marginLeft: 30,
  borderRadius: 20,
 // borderColor:"black",
  borderWidth: 1,
  marginTop: 50,
  

 }




});
export default App;