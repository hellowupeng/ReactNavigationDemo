import React from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Andy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  })
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>Chat with {params.user}</Text>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);