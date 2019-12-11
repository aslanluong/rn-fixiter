import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   SafeAreaView,
   TouchableOpacity,
   ScrollView
} from 'react-native';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import FontText from '../FontText';
import NavigationService from '../../services/navigate';

export default class ProfileDetails extends Component {
   render() {
      return (
         <SafeAreaView style={styles.container}>
            <ScrollView>
               <View style={styles.profileHeader}>
                  <TouchableOpacity
                     style={{ marginVertical: 20 }}
                     onPress={() => NavigationService.navigate('Tabs')}>
                     <IconS name="close" style={{ fontSize: 25 }} />
                  </TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                     <View
                        style={{
                           width: 80,
                           height: 80,
                           paddingTop: 10,
                           borderRadius: 40,
                           overflow: 'hidden',
                           backgroundColor: '#3ddc84'
                        }}>
                        <Image
                           style={{ width: 80, height: 80 }}
                           source={{
                              uri:
                                 'https://www.pngrepo.com/png/17468/170/avatar.png'
                           }}
                        />
                     </View>
                     <FontText style={{ fontSize: 17, marginTop: 10 }}>
                        Lương Thành Thắng
                     </FontText>
                  </View>
               </View>
               <View>
                  <View
                     style={{
                        marginHorizontal: '5%',
                        marginTop: 10,
                        fontSize: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                     }}>
                     <FontText emphasis="bold">Thông tin cá nhân</FontText>
                     <TouchableOpacity
                        onPress={() =>
                           NavigationService.navigate('ProfileEditor')
                        }>
                        <FontText style={{ color: '#4285f4' }}>Đổi</FontText>
                     </TouchableOpacity>
                  </View>
                  <View style={styles.profileBody}>
                     <View style={styles.profileRow}>
                        <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                           Tên
                        </FontText>
                        <FontText>Lương Thành Thắng</FontText>
                     </View>
                     <View style={styles.profileRow}>
                        <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                           Địa chỉ
                        </FontText>
                        <Text
                           style={{ fontFamily: 'lato-regular' }}
                           numberOfLines={1}
                           ellipsizeMode="tail">
                           Đại học FPT, khu Công Nghệ Cao, quận 9, TP.HCM
                        </Text>
                     </View>
                     <View style={styles.profileRow}>
                        <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                           Số điện thoại
                        </FontText>
                        <FontText>097 404 9327</FontText>
                     </View>
                     <View style={styles.profileRow}>
                        <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                           Ngày sinh
                        </FontText>
                        <FontText>27/01/1998</FontText>
                     </View>
                     <View style={styles.profileRow}>
                        <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                           Giới tính
                        </FontText>
                        <FontText>Nam</FontText>
                     </View>
                  </View>
               </View>
            </ScrollView>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f0eff4'
   },
   profileHeader: {
      width: '100%',
      height: 210,
      backgroundColor: 'white',
      paddingHorizontal: '5%'
   },
   profileBody: {
      marginTop: 5,
      width: '100%',
      backgroundColor: 'white'
   },
   profileRow: {
      borderTopWidth: 0.5,
      borderTopColor: '#c9c9c9',
      paddingHorizontal: '5%',
      paddingVertical: 5
   }
});
