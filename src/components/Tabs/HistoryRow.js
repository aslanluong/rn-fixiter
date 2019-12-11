import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import FontText from '../FontText';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import NavigationService from '../../services/navigate';

export default class HistoryRow extends Component {
   // typeSource, itemName, status, time, fee
   render() {
      const { typeSource, itemName, status, time, feedback, fee } = this.props;
      return (
         <TouchableOpacity
            style={styles.rowContainer}
            onPress={() =>
               NavigationService.navigate('RequestDetails', { status: status })
            }>
            <View style={styles.rowIcon}>
               <Image style={{ width: 50, height: 50 }} source={typeSource} />
            </View>
            <View style={styles.rowContent1}>
               <FontText emphasis="bold">{itemName}</FontText>
               <FontText
                  style={{
                     fontSize: 13,
                     color:
                        status == 'Đã hoàn thành'
                           ? '#3ddc84'
                           : status == 'Đang thực hiện'
                           ? '#4285f4'
                           : status == 'Đang đặt lịch'
                           ? '#4285f4'
                           : '#a9a9a9'
                  }}>
                  {status}
               </FontText>
               <FontText style={{ fontSize: 13 }} emphasis="light">
                  {time}
               </FontText>
            </View>
            <View style={styles.rowContent2}>
               {status == 'Đã hoàn thành' ? (
                  <>
                     <FontText style={{ color: '#ff9501' }}>
                        {feedback}{' '}
                        <IconM
                           name="star"
                           style={{
                              color: '#ff9501',
                              fontSize: 15,
                              marginTop: 3
                           }}
                        />
                     </FontText>
                     <FontText>{fee}</FontText>
                  </>
               ) : (
                  <></>
               )}
            </View>
         </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({
   rowContainer: {
      width: '90%',
      marginTop: 15,
      padding: 15,
      borderWidth: 0.5,
      borderColor: '#c9c9c9',
      borderRadius: 10,
      backgroundColor: 'white',
      flexDirection: 'row'
   },
   rowIcon: {
      flex: 2,
      justifyContent: 'center'
   },
   rowContent1: {
      flex: 5,
      justifyContent: 'center'
   },
   rowContent2: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'flex-end'
   }
});
