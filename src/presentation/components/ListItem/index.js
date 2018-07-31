import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import * as Assets from 'assets';
import styles from './styles';

export default ({ userName, imageSource, likesCount, commentsCount, date }) => (
  <View style={{ flex:1, borderBottomWidth: 2, borderColor: '#0003'}}>
    <View style={{ padding: 15, alignSelf: 'center'}}>
      <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
        {userName}
      </Text>
    </View>
    <CachedImage 
      style={{ height: 300}}
      source={{uri: imageSource}}/>
    <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
      <View style={{ flexDirection: 'row'}}>
        <Image source={Assets.iconHeart}/>
        <Text>
          {likesCount}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 60}}>
        <Image source={Assets.iconComments}/>
        <Text>
          {commentsCount}
        </Text>
      </View>
      <View>
        <Text>
          {date}
        </Text>
      </View>
    </View>
  </View>
);
