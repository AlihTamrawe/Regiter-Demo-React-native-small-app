import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Feather from 'react-native-vector-icons/Feather';

// import BannerSlider from '../component/BannerSlider';
// import {windowWidth} from '../utils/Dimensions';

// // import {freeGames, paidGames, sliderData} from '../model/data';
// import CustomSwitch from '../component/c';
// import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/car.png')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}