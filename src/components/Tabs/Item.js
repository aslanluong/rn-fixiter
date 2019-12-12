import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontText from '../FontText';

export default class Item extends Component {
  render() {
    return (
      <View style={styles.crollViewItem}>
        <View style={styles.titleDay}>
          <FontText emphasis="medium" style={{fontSize: 17}}>
            {this.props.titleDay}
          </FontText>
          <FontText emphasis="light" style={{fontSize: 15}}>
            {this.props.numberJobs}
          </FontText>
        </View>
        <FontText emphasis="medium" style={{fontSize: 25}}>
          {this.props.price}
        </FontText>
        <TouchableOpacity
          style={{
            marginVertical: 10,
          }}>
          <FontText
            style={{
              fontSize: 15,
              color: '#3498db',
            }}>
            Xem chi tiết
          </FontText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleDay: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crollViewItem: {
    height: 130,
    width: 280,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
});
