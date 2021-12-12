import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import airpod from './container/assets/airpod.jpg';
import macbook from './container/assets/macbook.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const App = () => {
  return (
    <View style={{width: width, height: height, backgroundColor: '#ffff'}}>
      <View style={{padding: 30, alignItems: 'center'}}>
        <Text style={{fontWeight:'500'}}>My Cart</Text>
      </View>
      <View style={{padding: '7%', flex: 1}}>
        <Text style={{fontWeight: '600'}}>2 items</Text>
        <View style={styles.productItem}>
          <View style={{width: '15%'}}>
            <Image
              source={macbook}
              style={{width: 100, height: 100, resizeMode: 'contain'}}></Image>
          </View>
          <View
            style={{width: '44%', justifyContent: 'space-between', height: 65}}>
            <Text style={{fontWeight: '700', color: 'black'}}>
              Apple Macbook Pro 2020 M1
            </Text>
            <Text style={{fontWeight: '600'}}> $1,149.00</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Ionicons name="ios-add-circle-outline" color="#6f41e2" size={30} />
            <Text style={{color: '#6f41e2', fontWeight: '500'}}>1</Text>
            <MaterialCommunityIcons
              name="delete-circle-outline"
              color="#6f41e2"
              size={30}
            />
          </View>
        </View>
        <View style={styles.productItem}>
          <View style={{width: '15%'}}>
            <Image
              source={airpod}
              style={{width: 100, height: 100, resizeMode: 'contain'}}></Image>
          </View>
          <View
            style={{width: '44%', justifyContent: 'space-between', height: 65}}>
            <Text style={{fontWeight: '700', color: 'black'}}>
              Apple Airpods 2020
            </Text>
            <Text style={{fontWeight: '600'}}> $100.00</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Ionicons name="ios-add-circle-outline" color="#6f41e2" size={30} />
            <Text style={{color: '#6f41e2', fontWeight: '500'}}>1</Text>
            <MaterialCommunityIcons
              name="delete-circle-outline"
              color="#6f41e2"
              size={30}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 30,
            borderRadius: 20,
            marginVertical: 25,
            borderColor: '#6f41e2',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#ffff',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderWidth: 1.8,
              borderColor: '#6f41e2',
            }}>
            <Text style={{color: '#6f41e2'}}>Pickup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#6f41e2',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderWidth: 1.8,
              borderColor: '#6f41e2',
            }}>
            <Text style={{color: '#ffff'}}>Delivery</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical:15}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text>
            Delivery to 
          </Text>
          <Text style={{color:'#6f41e2'}}>
            Edit
          </Text>
          </View>
          
          <Text style={{fontWeight:'600',color:'black'}}>
            149, Sunset ave, Los Angeles, CA
          </Text>
        </View>
        <View style={{marginVertical:15}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text>
            Delivery service, Delivery by
          </Text>
          <Text style={{color:'#6f41e2'}}>
            Edit
          </Text>
          </View>
          
          <Text style={{fontWeight:'600',color:'black'}}>
            Fedex Express, Friday 28 July
          </Text>
        </View>
  
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:7}}>
          <Text>
            Subtotal
          </Text>
          <Text >
            $1,349.00
          </Text>
          </View>
          
          
     
     
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:7}}>
          <Text>
            Delivery
          </Text>
          <Text >
            $30.00
          </Text>
          </View>
          
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:7}}>
          <Text style={{fontWeight:'600',color:'black'}}>
           Total
          </Text>
          <Text  style={{color:'black',fontWeight:'600'}}>
            $1,379.00
          </Text>
          </View>
          
          
          <View
          style={{
            flexDirection: 'row',
            height: 40,
            borderRadius: 20,
            marginVertical: 25,
            borderColor: '#6f41e2',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}>
        
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#6f41e2',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius:5,
              borderWidth: 1.8,
              borderColor: '#6f41e2',
            }}>
            <Text style={{color: '#ffff'}}>Pay $1,379.00</Text>
          </TouchableOpacity>
        </View>



        
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  productItem: {
    alignItems: 'center',
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
});
