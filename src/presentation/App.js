import React, {Component} from 'react';
import { Text, View, ScrollView} from 'react-native'
import { ListItem, Header } from 'components';
import data from '../data/Data.json';

export default class App extends Component {
  state = { items: [] };
  date = new Date();
 
  componentWillMount() {
   this.setState({ items: data });
  }

  render() {
    return (
      <View>
        <Header
          headerText="News"
        />
        <ScrollView>
        <For
          each="item"
          of={this.state.items}
        >
        <If condition={item.type === "photoPost"}>
          <ListItem
            key={item.identifier} 
            userName={item.userName}
            imageSource={item.imageURL}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
            date={this.date.toDateString()}
          />
        </If>
        </For>
         </ScrollView>
      </View>
    );
  }
}