import React from 'react';
import { View, Text, Image } from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import * as Assets from 'assets';
import styles from './styles';

export default ({ userName, imageSource, likesCount, commentsCount, date }) => (
  <View style={styles.mainContainerStyle}>
    <View style={{ padding: 15, alignSelf: 'center'}}>
      <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
        {userName}
      </Text>
    </View>
    <CachedImage 
      style={{ height: 300}}
      source={{uri: imageSource}}
      defaultSource={Assets.placeholder}
      fallbackSource={Assets.placeholder}      
      />
    <View style={styles.bottomContainerStyle}>
      <View style={{ flexDirection: 'row'}}>
        <Image source={Assets.iconHeart}/>
        <Text style={{ marginLeft: 2 }}>
          {likesCount}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 60}}>
        <Image source={Assets.iconComments}/>
        <Text style={{ marginLeft: 2, color: '#0080ff' }}>
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
