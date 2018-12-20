import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';


class PageTwo extends React.Component {
  render(){
    return (
      <View style={{alignItems: "center"}}>
        <Text>Deez nuts</Text>
      </View>
    )
  }
}


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      amount: 0
    }
  }
  render() {
    onPressLearnMore = () => {
      this.setState({
        amount: this.state.amount+1
      })
      console.log("you got me")
      return;
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>This is an edit. Bitch.</Text>
          <Text>Number of times pressed: {this.state.amount}</Text>
          <Text>This is an edit. Bitch.</Text>
          <Text>This is an edit. Bitch.</Text>
          <Text>This is an edit. Bitch.</Text>
          {/* <Button title="baby button" onPress={console.log("BABY")}>This is a button.</Button> */}
          {/* <View > */}
            {/* <Text style={styles.containerTwo}>Next page</Text> */}
          {/* </View> */}
          <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 2000,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    // flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#ABABAB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});