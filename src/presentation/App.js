import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native'
import { ListPhotoItem, ListMessageItem, Header } from 'components';
import data from '../data/Data.json';
import styles from './styles'

export default class App extends Component {
  state = { items: [], segmentSelected: "all" };
  date = new Date();
 
  componentWillMount() {
   this.setState({ items: data });
  }
  
  setSegmentToAll = () => {
    this.setState({ segmentSelected: "all" })
  }

  setSegmentToPhoto = () => {
    this.setState({ segmentSelected: "photo" })
  }

  setSegmentToMessage = () => {
    this.setState({ segmentSelected: "message" })
  }

  render() {
    return (
      <View>
        <Header
          headerText="News"
        />
        <View style={{ flexDirection: 'row', height: 40 }}>
          <TouchableOpacity 
            onPress={this.setSegmentToAll}
            style={this.state.segmentSelected === "all" ? styles.segmentBoxSelected : styles.segmentBox}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.setSegmentToPhoto}
            style={this.state.segmentSelected === "photo" ? styles.segmentBoxSelected : styles.segmentBox}>
            <Text>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.setSegmentToMessage}
            style={this.state.segmentSelected === "message" ? styles.segmentBoxSelected : styles.segmentBox}>
            <Text>Message</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <For
            each="item"
            of={this.state.items}
          >
            <Choose>
              <When condition={this.state.segmentSelected === "all"}>
                <If condition={item.type === "photoPost"}>
                <ListPhotoItem
                  key={item.identifier} 
                  userName={item.userName}
                  imageSource={item.imageURL}
                  likesCount={item.likesCount}
                  commentsCount={item.commentsCount}
                  date={this.date.toDateString()}
                />
              </If>
              <If condition={item.type === "messagePost"}>
                <ListMessageItem 
                  key={item.identifier} 
                  userName={item.userName}
                  userImage={item.imageURL}
                  commentsCount={item.commentsCount}
                  message={item.message}
                  date={this.date.toDateString()}
                />
              </If>
              </When>
              <When condition={this.state.segmentSelected === "photo"}>
                <If condition={item.type === "photoPost"}>
                  <ListPhotoItem
                    key={item.identifier} 
                    userName={item.userName}
                    imageSource={item.imageURL}
                    likesCount={item.likesCount}
                    commentsCount={item.commentsCount}
                    date={this.date.toDateString()}
                  />
                </If>
              </When>
              <When condition={this.state.segmentSelected === "message"}>
                <If condition={item.type === "messagePost"}>
                  <ListMessageItem 
                    key={item.identifier} 
                    userName={item.userName}
                    userImage={item.imageURL}
                    commentsCount={item.commentsCount}
                    message={item.message}
                    date={this.date.toDateString()}
                  />
                </If>
              </When>
            </Choose>
          </For>
          <View style={{ height: 100}}/>
         </ScrollView>
      </View>
    );
  }
}