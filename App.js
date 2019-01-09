import React, { Component } from "react";
import {
  View,
  Linking,
  Text,
  StyleSheet,
  WebView,
  TouchableOpacity,
  Button
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { KeyboardSpacer } from 'react-native-keyboard-spacer';

class HomeScreen extends Component {
  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          //ignoreSslError={true} 
          source={{ uri: 'https://guineeinnovations.com' }}
          style={{ marginTop: 5 }}
          userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 100,
          }}
          onPress={() => { Linking.openURL('https://m.me/guineeinnovations') }}
        >
          <Icon name="md-chatboxes" size={30} color="#01a699" />
        </TouchableOpacity>
      </View>

    );
  }
}
class InformationScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, textAlign: 'center', margin: 10 }}>
          GUINEE-dkdjldkjsd regroupe toutes les informations sur les innovations Guinéennes.</Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
          Contact:</Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
          00224 625 27 22 90
        </Text>
      </View>
    );
  }
}

  const AppNavigator =createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      )
    }
  },
  Information: {
    screen: InformationScreen,
    navigationOptions: {
      tabBarLabel: 'A propos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="about" color={tintColor} size={24} />
      )
    }
  }
}, {
    initialRouteName: 'Home',
    // order: ['Settings', 'Home'],
    activeTintColor: 'white',
    shifting: true
  })

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});