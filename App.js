import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pageTwo: false
    }
  }
  onPressLearnMore = () => {
    console.log("you got me")
    return <PageTwo/>
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>This is an edit. Bitch.</Text>
          {/* <Button title="baby button" onPress={console.log("BABY")}>This is a button.</Button> */}
          {/* <View > */}
            <Text style={styleTwo.container}>Next page</Text>
          {/* </View> */}
          <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styleTwo = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#ABABAB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});