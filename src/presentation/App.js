import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import { ListPhotoItem, ListMessageItem, Header } from 'components';
import SideMenu from 'react-native-side-menu';
import data from '../data/Data.json';
import styles from './styles'

export default class App extends Component {
  state = { items: [], segmentSelected: "all", isOpen: false, date : new Date().toDateString() };
 
  componentWillMount() {
   this.setState({ items: data });
  }
  
  setSegmentToAll = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    };
    this.setState({ segmentSelected: "all" });
  }

  setSegmentToPhoto = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    };
    this.setState({ segmentSelected: "photo" });
  }

  setSegmentToMessage = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    };
    this.setState({ segmentSelected: "message" });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  renderMenu = () =>  {
    return (
      <If condition={this.state.isOpen}>
        <View style={{ paddingTop: 28 }}>
          <View style={styles.menuContainerStyle}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
              Menu
            </Text>
          </View>
          <TouchableOpacity
            style={styles.menuContainerStyle} 
            onPress={this.setSegmentToAll}
          >
            <Text style={styles.menuTextSize}>
              All
            </Text>
          </TouchableOpacity >
          <TouchableOpacity 
            style={styles.menuContainerStyle} 
            onPress={this.setSegmentToPhoto}
          >
            <Text style={styles.menuTextSize}>
              Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuContainerStyle}
            onPress={this.setSegmentToMessage}
          >
            <Text style={styles.menuTextSize}>
              Message
            </Text>
          </TouchableOpacity>
        </View>
      </If>
    )
  }

  render() {
    return (
      <SideMenu 
        menu={this.renderMenu()}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View>
          <Header
            headerText="News"
          />
          <View style={{ flexDirection: 'row', height: 40 }}>
            <TouchableOpacity 
              onPress={this.setSegmentToAll}
              style={this.state.segmentSelected === "all" ? styles.segmentBoxSelectedLeft : styles.segmentBoxLeft}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={this.setSegmentToPhoto}
              style={this.state.segmentSelected === "photo" ? styles.segmentBoxSelectedCenter : styles.segmentBoxCenter}>
              <Text>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={this.setSegmentToMessage}
              style={this.state.segmentSelected === "message" ? styles.segmentBoxSelectedRight : styles.segmentBoxRight}>
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
                      date={this.state.date}
                    />
                </If>
                <If condition={item.type === "messagePost"}>
                  <ListMessageItem 
                    key={item.identifier} 
                    userName={item.userName}
                    userImage={item.imageURL}
                    commentsCount={item.commentsCount}
                    message={item.message}
                    date={this.state.date}
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
                      date={this.state.date}
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
                      date={this.state.date}
                    />
                  </If>
                </When>
              </Choose>
            </For>
            <View style={{ height: 100}}/>
          </ScrollView>
        </View>
      </SideMenu>
      
    );
  }
}