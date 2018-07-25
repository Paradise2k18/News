import React, {Component} from 'react';
import { Text, View} from 'react-native'
import { ListItem, Header } from 'components';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header
          headerText="News"
        />
        <ListItem 
          userName="Aye"
          likesCount="5"
          commentsCount="10"
          date="March"
        />
      </View>
    );
  }
}