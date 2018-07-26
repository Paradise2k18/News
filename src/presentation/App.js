import React, {Component} from 'react';
import { Text, View, ScrollView} from 'react-native'
import { ListItem, Header } from 'components';
import data from '../data/Data.json';

export default class App extends Component {
  state = { items: [] };
 
  componentWillMount() {
   this.setState({ items: data });
  }


  renderAlbums() {
    return this.state.items.map(item =>
        <ListItem
          key={item.identifier}  
          userName = {item.userName}
          likesCount = "5"
          commentsCount = {item.commentsCount}
          date = "March"
          imageSource= {item.imageURL} 
      />   
    );
  }

  render() {
    return (
      <View>
        <Header
          headerText="News"
        />
        <ScrollView>
         {this.renderAlbums()}
         </ScrollView>
      </View>
    );
  }
}