import React, { Component } from 'react';
import {
   SafeAreaView,
   View,
   StyleSheet,
   TextInput,
   Picker,
   TouchableOpacity,
   Dimensions,
   ScrollView
} from 'react-native';
import FontText from '../FontText';
import IconE from 'react-native-vector-icons/EvilIcons';
import NavigationService from '../../services/navigate';

export default class ProfileEditor extends Component {
   state = {
      gender: ''
   };
   constructor() {
      super();

      const isPortrait = () => {
         const dim = Dimensions.get('screen');
         return dim.height >= dim.width;
      };

      this.state = {
         orientation: isPortrait() ? 'portrait' : 'landscape'
      };
      // Event Listener for orientation changes
      Dimensions.addEventListener('change', () => {
         this.setState({
            orientation: isPortrait() ? 'portrait' : 'landscape'
         });
      });
   }
   render() {
      const show = () => (
         <View style={styles.editorBody}>
            <View style={{ marginTop: 10, borderBottomColor: 'white' }}>
               <View style={styles.editorRow}>
                  <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                     Tên
                  </FontText>
                  <TextInput
                     defaultValue="Lương Thành Thắng"
                     style={{
                        padding: 0,
                        fontSize: 15
                     }}
                  />
               </View>
               <View style={styles.editorRow}>
                  <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                     Địa chỉ
                  </FontText>
                  <TextInput
                     defaultValue="Đại học FPT, khu Công Nghệ Cao, quận 9, TP.HCM"
                     style={{
                        padding: 0,
                        fontSize: 15
                     }}
                  />
               </View>
               <View style={styles.editorRow}>
                  <FontText style={{ opacity: 0.5, fontSize: 12 }}>
                     Số điện thoại
                  </FontText>
                  <TextInput
                     defaultValue="0974049327"
                     style={{
                        padding: 0,
                        fontSize: 15
                     }}
                  />
               </View>
               <View
                  style={[
                     styles.editorRow,
                     { paddingHorizontal: 0, paddingHorizontal: '3%' }
                  ]}>
                  <FontText
                     style={{
                        opacity: 0.5,
                        fontSize: 12,
                        paddingHorizontal: '2%'
                     }}>
                     Giới tính
                  </FontText>
                  <Picker
                     style={{
                        height: 30
                     }}
                     selectedValue={this.state.gender}
                     onValueChange={itemValue =>
                        this.setState({ gender: itemValue })
                     }>
                     <Picker.Item label="Nam" value="Male" />
                     <Picker.Item label="Nữ" value="Female" />
                  </Picker>
               </View>
            </View>
            <View
               style={{
                  width: '100%',
                  alignItems: 'center'
               }}>
               <TouchableOpacity
                  onPress={() => NavigationService.navigate('ProfileDetails')}
                  style={{
                     height: 49,
                     width: '90%',
                     alignItems: 'center',
                     justifyContent: 'center',
                     backgroundColor: 'rgba(253,126,20,0.85)',
                     borderRadius: 10,
                     marginVertical: 20,
                     borderColor: 'white',
                     borderWidth: 2
                  }}>
                  <FontText style={{ color: 'white' }}>Lưu thay đổi</FontText>
               </TouchableOpacity>
            </View>
         </View>
      );
      return (
         <SafeAreaView style={styles.container}>
            <View style={styles.editorHeader}>
               <TouchableOpacity
                  style={{
                     width: 35,
                     height: 35,
                     justifyContent: 'center'
                  }}
                  onPress={() => NavigationService.navigate('ProfileDetails')}>
                  <IconE name="close" style={{ fontSize: 25 }} />
               </TouchableOpacity>
               <View
                  style={{
                     width: '80%',
                     alignItems: 'center',
                     justifyContent: 'center'
                  }}>
                  <FontText emphasis="bold">Sửa thông tin</FontText>
               </View>
            </View>
            {this.state.orientation == 'landscape' ? (
               <ScrollView>{show()}</ScrollView>
            ) : (
               show()
            )}
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   editorHeader: {
      width: '100%',
      height: 56,
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      paddingHorizontal: '5%',
      alignItems: 'center'
   },
   editorBody: {
      flex: 1,
      backgroundColor: '#f0eff4',
      justifyContent: 'space-between'
   },
   editorRow: {
      borderTopWidth: 0.5,
      borderTopColor: '#c9c9c9',
      paddingHorizontal: '5%',
      paddingTop: 15,
      paddingBottom: 12,
      backgroundColor: 'white'
   }
});
