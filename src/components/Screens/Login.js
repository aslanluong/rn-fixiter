import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   Image,
   TouchableOpacity,
   ImageBackground,
   Dimensions
} from 'react-native';
import FontText from '../FontText';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../services/navigate';
import { Button, Icon } from 'react-native-ui-kitten';

export default class Login extends Component {
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
      return (
         <ImageBackground
            source={require('../../../assets/images/bg.jpg')}
            style={styles.containerBackground}>
            <View style={styles.container}>
               <View style={styles.logoCointainer}>
                  <Image
                     source={{
                        uri:
                           'https://www.clipartwiki.com/clipimg/full/146-1460660_handyman-clipart-hardware-store-mr-fix-it-logo.png'
                     }}
                     style={{
                        width: 175,
                        height: 175,
                        marginBottom:
                           this.state.orientation == 'landscape' ? 0 : 50
                     }}
                  />
               </View>
               <View style={styles.buttonContainer}>
                  <Button
                     TouchableOpacity
                     onPress={() => NavigationService.navigate('LoginByPhone')}
                     icon={style => (
                        <Icon
                           {...style}
                           name="phone"
                           style={{ marginLeft: -5 }}
                        />
                     )}
                     status="warning"
                     style={{ width: '100%' }}>
                     Đăng nhập bằng số điện thoại
                  </Button>
                  {/* <Button
                     TouchableOpacity
                     onPress={() =>
                        NavigationService.navigate('Tabs')
                     }
                     icon={(style) => <Icon {...style} name="facebook" style={{ marginLeft: -5 }} />}
                     status="info"
                     style={{ width: "100%" }}
                  >
                     Đăng nhập bằng Facebook
                     </Button> */}
               </View>
               <View style={styles.buttonContainer}>
                  <Button
                     TouchableOpacity
                     onPress={() => NavigationService.navigate('Tabs')}
                     icon={style => (
                        <Icon
                           {...style}
                           name="facebook"
                           style={{ marginLeft: -5 }}
                        />
                     )}
                     status="info"
                     style={{ width: '100%' }}>
                     Đăng nhập bằng Facebook
                  </Button>
               </View>
            </View>
         </ImageBackground>
      );
   }
}

const styles = StyleSheet.create({
   containerBackground: {
      flex: 1,
      backgroundColor: 'blue'
   },
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.5)'
   },
   slogan: {
      marginBottom: 30
   },
   logoCointainer: {
      alignItems: 'center'
   },
   buttonContainer: {
      alignItems: 'center',
      paddingHorizontal: '15%',
      width: '100%',
      paddingVertical: '2%'
   },
   titleText: {
      fontSize: 16
   },
   button: {
      backgroundColor: '#fff',
      width: '100%',
      paddingHorizontal: '5%',
      borderWidth: 1,
      borderColor: '#F56258',
      height: 47,
      alignItems: 'center',
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'space-between'
   }
});
