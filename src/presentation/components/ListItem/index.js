import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as Assets from 'assets';
import styles from './styles';

export default ({ userName, imageSource, likesCount, commentsCount, date }) => (
  <View style={{ height: 500 }}>
    <View style={{ height: 35, alignSelf: 'center'}}>
      <Text>
        {userName}
      </Text>
    </View>
    <Image 
      style={{ flex: 1}}
      source={{uri: imageSource}}/>
    <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Image />
        <Text>
          {likesCount}
        </Text>
      </View>
      <View>
        <Image />
        <Text>
          {commentsCount}
        </Text>
      </View>
      <View>
        <Image />
        <Text>
          {date}
        </Text>
      </View>
    </View>
  </View>
);
