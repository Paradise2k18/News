import React from 'react';
import { View, Text, Image } from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import * as Assets from 'assets';
import styles from './styles';

export default ({ userName, userImage, message, commentsCount, date }) => (
  <View style={{ borderBottomWidth: 2, borderColor: '#0003' }}>
    <View style={{ flexDirection: 'row'}}>
      <View style={{ width: 70, height: 70, marginTop: 15, marginLeft: 15 }}>
        <CachedImage
          style={{ flex: 1, borderRadius: 35 }}
          source={{ uri: userImage }}
          defaultSource={Assets.placeholder}
          fallbackSource={Assets.placeholder} 
        />
      </View>
      <View style={{ flex:1, padding: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex:1, fontWeight: 'bold', fontSize: 17, marginBottom: 10 }}>
            {userName}
          </Text>
          <Text>
            {date}
          </Text>
        </View>
        <View>
          <Text >
            {message}
          </Text>
        </View>
      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
      <Image source={Assets.iconComments}/>
      <Text style={{ marginLeft: 2, color: '#0080ff' }}>
        {commentsCount}
      </Text>
    </View>
  </View>
);
