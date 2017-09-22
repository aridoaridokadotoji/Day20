import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  AsyncStorage,
  Switch,
  ScrollView,
  TouchableHighlight
} from "react-native";
import styles from "../style/mainStyles";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      complete: false,
      id: "",
      count: 0,
      tasks: []
    };
  }

  handleTextValueChange(value) {
    console.log("Change text");
    this.setState({
      textValue: value
    });
  }

  handleTextValueSave = () => {
    const { textValue, complete } = this.state;
    console.log(textValue, complete);
    if (!this.state.textValue) return;
    const count = this.state.count + 1;

    const tasks = [
      ...this.state.tasks,
      {
        id: Date.now(),
        complete: false,
        textValue: this.state.textValue
      }
    ];

    this.setState({
      tasks,
      count
    });
    console.log("Save", tasks);
    this.setState({
      textValue: ""
    });
  };

  pressCheck = value => {
    const { textValue, complete, id } = value;
    console.log("Check!", textValue, complete, id);
    let count = this.state.count;
    if (complete == false) {
      count = this.state.count - 1;
    } else {
      count = this.state.count + 1;
    }

    const tasks = this.state.tasks.map(t => {
      if (id !== t.id) return t;
      const tasks = { ...t, complete: !complete };
      return tasks;
    });
    this.setState({ tasks, count });
  };

  renderTasks() {
    const listItem = this.state.tasks.map((value, index) => {
      const { id, textValue, complete } = value;
      return (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              alignItems: "center",
              paddingTop: 15
            }}
          >
            <TouchableHighlight onPress={p => this.pressCheck(value)}>
              <View style={styles.checkStyle}>
                {complete ? <View style={styles.checked} /> : <View />}
              </View>
            </TouchableHighlight>

            <Text key={index} style={{ fontSize: 20, paddingLeft: 15 }}>
              {textValue}
            </Text>
          </View>
          <View style={styles.lineStyle} />
        </View>
      );
    });
    return listItem;
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headerStyle}>
          <Text style={[{ flex: 6 }, styles.txtStyle]}>Development</Text>
          <Text style={[{ flex: 1 }, styles.txtStyle]}>
            {this.state.count}
          </Text>
        </View>
        <View style={styles.borderStyle} />
        <View>
          {this.renderTasks()}
        </View>

        <View style={{ flexDirection: "row", marginLeft: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: "100", paddingRight: 15 }}>
            +
          </Text>
          <TextInput
            style={{ flex: 1, fontSize: 20 }}
            value={this.state.textValue}
            onChangeText={this.handleTextValueChange.bind(this)}
            onSubmitEditing={this.handleTextValueSave}
          />
        </View>
      </ScrollView>
    );
  }
}

/* const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  complete: {
    textDecorationLine: "line-through"
  } */

export default Main;
