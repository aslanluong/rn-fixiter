import React, { Component } from 'react';
import {
   View,
   KeyboardAvoidingView,
   StyleSheet,
   Image,
   TextInput,
   TouchableOpacity
} from 'react-native';
import { FontText } from '../FontText';
import NavigationService from '../../services/navigate';
import { Button, Text, Icon, Input } from 'react-native-ui-kitten/ui';
// import Icon from 'react-native-vector-icons/Feather'

const ContIcon = style => (
   <Icon {...style} name="arrowhead-right-outline" style={{ marginLeft: -5 }} />
);
const CancelIcon = style => (
   <Icon {...style} name="close-circle-outline" style={{ marginLeft: -5 }} />
);
export default class ForgotPassword extends Component {
   state = {
      value: '+84 ',
      numberPhone: ''
   };
   render() {
      const VNFlag = style => <Icon {...style} name={'star'} />;
      return (
         <View style={styles.container}>
            <KeyboardAvoidingView style={styles.formContainer}>
               <View style={styles.logoContainer}>
                  <FontText
                     emphasis="bold"
                     style={{ fontSize: 20, marginBottom: '3%' }}>
                     ĐĂNG NHẬP
                  </FontText>
                  <Image
                     source={{
                        uri:
                           'https://img.icons8.com/officel/80/000000/guest-male.png'
                     }}
                     style={{ width: 100, height: 100, marginVertical: '2%' }}
                  />
                  <FontText emphasis="bold" style={{ fontSize: 16 }}>
                     Nhập số điện thoại
                  </FontText>
                  <FontText
                     emphasis="bold"
                     style={{ fontSize: 16, marginBottom: '2%' }}>
                     liên kết với tài khoản của bạn
                  </FontText>
                  <FontText style={{ opacity: 0.5 }}>
                     Chúng tôi sẽ gửi mã xác nhận về
                  </FontText>
                  <FontText style={{ opacity: 0.5 }}>
                     số điện thoại của bạn
                  </FontText>
               </View>
               <View style={styles.inputFormContainer}>
                  <Input
                     icon={VNFlag}
                     textStyle={{ padding: 0 }}
                     style={{ width: '90%' }}
                     label="Số điện thoại"
                     placeholder="0901234567"
                     onChangeText={numberPhone => {
                        this.setState({ numberPhone: numberPhone });
                     }}
                  // defaultValue={this.state.value}
                  />
               </View>
               <View>
                  <View style={styles.buttonContainer}>
                     <Button
                        TouchableOpacity
                        onPress={() => NavigationService.navigate('Login')}
                        appearance="outline"
                        icon={CancelIcon}
                        status="danger"
                        style={{ flexDirection: 'row-reverse' }}>
                        Trở về
                     </Button>
                     <Button
                        TouchableOpacity
                        onPress={() =>
                           this.props.navigation.navigate('Verification', {
                              numberPhone: this.state.numberPhone
                           })
                        }
                        appearance="outline"
                        icon={ContIcon}
                        status="info"
                        style={{ flexDirection: 'row-reverse' }}>
                        Tiếp tục
                     </Button>
                  </View>
               </View>
            </KeyboardAvoidingView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center'
   },
   formContainer: {
      // alignItems: 'center'
   },
   sloganText: {
      fontSize: 20,
      fontWeight: 'bold'
   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: '12%'
   },
   inputFormContainer: {
      width: '100%',
      alignItems: 'center'
   },
   phoneNumberInput: {
      width: '80%',
      fontSize: 16
   },
   logoVietNam: {
      width: 33,
      height: 30,
      marginHorizontal: '3%'
   },
   buttonContainer: {
      marginTop: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '15%'
   }
});
