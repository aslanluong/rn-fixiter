import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   SafeAreaView,
   Image,
   TouchableOpacity
} from 'react-native';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import FontText from '../FontText';
import NavigationService from '../../services/navigate';

export default class Profile extends Component {
   render() {
      return (
         <SafeAreaView style={styles.container}>
            <View style={styles.userContainer}>
               <View style={styles.userAvatar}>
                  <View
                     style={{
                        width: 60,
                        height: 60,
                        paddingTop: 7,
                        borderRadius: 30,
                        overflow: 'hidden',
                        backgroundColor: '#3ddc84'
                     }}>
                     <Image
                        style={{ width: 60, height: 60 }}
                        source={{
                           uri:
                              'https://www.pngrepo.com/png/17468/170/avatar.png'
                        }}
                     />
                  </View>
               </View>
               <TouchableOpacity
                  style={styles.userInfo}
                  onPress={() => NavigationService.navigate('ProfileDetails')}>
                  <FontText style={{ fontSize: 19 }}>
                     Thắng Lương Thành
                  </FontText>
                  <FontText
                     emphasis="medium"
                     style={{ fontSize: 13, marginTop: 10, color: 'gray' }}>
                     Thay đổi <IconS name="arrow-right" />
                  </FontText>
               </TouchableOpacity>
               <View style={styles.userOption}>
                  <FontText style={{ fontSize: 20 }}>
                     {/* <IconS name="star" style={{fontSize: 20}} /> */}
                  </FontText>
               </View>
            </View>
            <View style={styles.menuContainer}>
               <TouchableOpacity
                  onPress={() => NavigationService.navigate('ProfileDetails')}>
                  <View style={styles.menuRow}>
                     <IconS
                        name="heart"
                        style={{
                           fontSize: 20,
                           marginHorizontal: 20,
                           color: '#fd7e14'
                        }}
                     />
                     <FontText>Danh sách yêu thích</FontText>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => NavigationService.navigate('ProfileDetails')}>
                  <View style={styles.menuRow}>
                     <IconS
                        name="ban"
                        style={{
                           fontSize: 20,
                           marginHorizontal: 20,
                           color: '#fd7e14'
                        }}
                     />
                     <FontText>Danh sách chặn</FontText>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.menuRow} activeOpacity={0.3}>
                  <IconS
                     name="support"
                     style={{
                        fontSize: 20,
                        marginHorizontal: 20,
                        color: '#fd7e14'
                     }}
                  />
                  <FontText>Giúp đỡ</FontText>
               </TouchableOpacity>
               <TouchableOpacity style={styles.menuRow} activeOpacity={0.3}>
                  <IconS
                     name="settings"
                     style={{
                        fontSize: 20,
                        marginHorizontal: 20,
                        color: '#fd7e14'
                     }}
                  />
                  <FontText>Cài đặt</FontText>
               </TouchableOpacity>
               <TouchableOpacity style={styles.menuRow} activeOpacity={0.3}>
                  <IconS
                     name="share"
                     style={{
                        fontSize: 20,
                        marginHorizontal: 20,
                        color: '#fd7e14'
                     }}
                  />
                  <FontText>Mời bạn bè</FontText>
               </TouchableOpacity>
               <TouchableOpacity style={styles.menuRow} activeOpacity={0.3}>
                  <IconS
                     name="star"
                     style={{
                        fontSize: 20,
                        marginHorizontal: 20,
                        color: '#fd7e14'
                     }}
                  />
                  <FontText>Đánh giá ứng dụng</FontText>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => NavigationService.navigate('Login')}>
                  <FontText style={{ marginLeft: 20, marginTop: 15 }}>
                     Đăng xuất
                  </FontText>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f0eff4'
   },
   userContainer: {
      width: '100%',
      height: 92,
      backgroundColor: 'white',
      borderBottomWidth: 0.5,
      borderBottomColor: '#c9c9c9',
      flexDirection: 'row'
   },
   userAvatar: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
   },
   userInfo: {
      flex: 6,
      justifyContent: 'center'
   },
   userOption: {
      flex: 1,
      justifyContent: 'center'
   },
   menuContainer: {
      marginTop: 5
   },
   menuRow: {
      marginTop: 7,
      paddingVertical: 15,
      backgroundColor: 'white',
      flexDirection: 'row'
   }
});
