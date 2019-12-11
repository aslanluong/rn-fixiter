import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../services/navigate';

export default class HeaderInfo extends Component {
   render() {
      return (
         <View style={styles.detailsContainerHeader}>
            <TouchableOpacity
               style={styles.detailsHeader}
               onPress={() => NavigationService.navigate('ProfileDetails')}>
               <View style={{ flex: 1, justifyContent: 'center' }}>
                  <FontText style={{ fontSize: 19 }}>
                     Hi, Lương Thành Thắng
                  </FontText>
                  <Text
                     style={{
                        fontFamily: 'lato-regular',
                        fontSize: 14,
                        width: '85%'
                     }}
                     numberOfLines={1}>
                     <Icon name="map-marker" /> Đại học FPT, khu Công Nghệ Cao,
                     quận 9, TP.HCM
                  </Text>
               </View>
               <View
                  style={{
                     width: 60,
                     height: 60,
                     paddingTop: 7,
                     borderRadius: 35,
                     overflow: 'hidden',
                     backgroundColor: '#3ddc84'
                  }}>
                  <Image
                     style={{ width: 60, height: 60 }}
                     source={{
                        uri: 'https://www.pngrepo.com/png/17468/170/avatar.png'
                     }}
                  />
               </View>
            </TouchableOpacity>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   detailsContainerHeader: {
      width: '100%',
      height: 90,
      paddingHorizontal: '5%',
      justifyContent: 'center',

      backgroundColor: 'white',
      borderBottomWidth: 0.5,
      borderBottomColor: '#c9c9c9',

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 11
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23
   },
   detailsHeader: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
   }
});
