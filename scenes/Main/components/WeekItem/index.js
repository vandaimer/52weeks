import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import * as actions from '../actions';

class WeekItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeposited : false
    };
  }

  wasDeposited = () => {
    const isDeposited = !this.state.isDeposited;
    const value = parseInt(this.props.label);
    const howDeposited = isDeposited ? value : -1 * value;

    this.props.addDeposit(howDeposited);
    this.setState({ isDeposited });
  }

  render() {
     return (
       <View style={[(this.state.isDeposited) ? styles.itemListDeposited : styles.itemList]}>
          <Text style={styles.text}>Depositar {this.props.label}</Text>
          <View style={styles.command}>
            <Button
                  onPress={this.wasDeposited}
                  title="Depositado"/>
          </View>
       </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(WeekItem);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 16,
    padding: 16,
  },
  itemList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
    borderBottomWidth: 1,
  },
  itemListDeposited: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
    borderBottomWidth: 1,
    backgroundColor: 'green'
  },
  command: {
    width: 100,
    margin: 16,
    height: 35,
    marginTop: 25,
    alignItems: "center",
  }
});
