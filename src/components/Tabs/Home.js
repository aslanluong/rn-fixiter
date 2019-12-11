import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from 'toggle-switch-react';
import FontText from '../FontText';
import {Button, Icon as IconUI} from 'react-native-ui-kitten/ui';
import CountdownCircle from 'react-native-countdown-circle';
import NavigationService from '../../services/navigate';

export default class Home extends Component {
  state = {
    statusIsOn: false,
    autoAccept: false,
    gpsX: 60,
    gpsY: 60,
    found: false,
  };
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          gpsX: this.state.gpsX + 3,
          gpsY: this.state.gpsY + 3,
        }),
      150,
    );
    setInterval(
      () =>
        this.setState({
          gpsX: 60,
          gpsY: 60,
        }),
      150 * 9,
    );
    if (!this.state.found) {
      setInterval(() => {
        if (this.state.statusIsOn) {
          setTimeout(() => this.setState({found: true}), 4000);
        }
      }, 4000);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                statusIsOn: !this.state.statusIsOn,
                switchOn: false,
              })
            }
            style={[
              styles.outsidePowerBorder,
              {
                borderColor: this.state.statusIsOn
                  ? 'rgba(61,220,132,0.5)'
                  : 'rgba(219,68,55,0.5)',
              },
            ]}
            activeOpacity={0.5}>
            <View
              style={[
                styles.insidePowerBorder,
                {
                  borderColor: this.state.statusIsOn ? '#3ddc84' : '#DB4437',
                },
              ]}>
              <Icon name="power-standby" style={styles.powerIcon} />
            </View>
          </TouchableOpacity>
          <ToggleSwitch
            isOn={this.state.autoAccept}
            onColor="#4285F4"
            offColor="gray"
            label={
              <Icon
                name="flash"
                style={{fontSize: 30, color: 'rgba(61,220,132,0.7)'}}
              />
            }
            labelStyle={{
              color: 'black',
              fontSize: 16,
            }}
            size="medium"
            onToggle={isOn => {
              if (!this.state.found) {
                this.setState({autoAccept: isOn});
                if (!this.state.statusIsOn) this.setState({autoAccept: false});
              }
            }}
          />
        </View>
        <ImageBackground
          source={{uri: 'https://i.imgur.com/EIxVoYr.png'}}
          style={{
            width: '100%',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            {!this.state.statusIsOn ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <View
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 15,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <IconM
                    name="location-disabled"
                    style={{fontSize: 100, color: '#a9a9a9'}}
                  />
                </View>
              </View>
            ) : this.state.statusIsOn && !this.state.found ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: this.state.gpsX,
                    height: this.state.gpsY,
                    borderRadius: this.state.gpsX / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,153,221,0.3)',
                  }}>
                  <View style={styles.gpsIcon}>
                    <Image
                      source={{
                        uri: 'https://i.imgur.com/cqmOqHQ.png',
                      }}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={styles.foundContainer}>
                  <View
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: 65,
                      marginTop: -65,
                      backgroundColor: '#F56258',
                      overflow: 'hidden',
                      borderWidth: 4,
                      borderColor: 'white',
                    }}>
                    <Image
                      style={{width: 122, height: 122, marginTop: 15}}
                      source={{
                        uri: 'https://www.pngrepo.com/png/17468/170/avatar.png',
                      }}
                    />
                  </View>
                  <FontText>Đã tìm thấy khách hàng!</FontText>
                  <FontText>Cách bạn: ~1.8km</FontText>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FontText
                      emphasis="bold"
                      style={{
                        fontSize: 25,
                        justifyContent: 'center',
                      }}>
                      Lương Thành Thắng{' '}
                    </FontText>
                  </View>
                  <FontText style={{fontSize: 16}}>097 999 0001</FontText>
                  <FontText style={{fontSize: 16}}>
                    Thiết bị cần sửa:{' '}
                    <FontText emphasis="bold">Máy lạnh</FontText>
                  </FontText>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      width: '90%',
                      height: 100,
                      marginHorizontal: '5%',
                      marginVertical: 15,
                      borderWidth: 1,
                      borderColor: '#c9c9c9',
                      borderRadius: 10,
                      paddingVertical: 10,
                    }}>
                    <FontText
                      emphasis="bold"
                      style={{
                        marginTop: -25,
                        fontSize: 15,
                        backgroundColor: 'white',
                      }}>
                      Ghi chú dành cho thợ:{' '}
                    </FontText>
                    <FontText style={{padding: 10}}>
                      Thợ đến nhớ gọi trước 10p để chuẩn bị trà bánh.
                    </FontText>
                  </View>
                  {!this.state.autoAccept ? (
                    <View
                      style={{
                        width: '100%',
                        paddingHorizontal: '9%',
                        marginVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Button
                        TouchableOpacity
                        onPress={() => this.setState({found: false})}
                        appearance="outline"
                        icon={style => (
                          <IconUI
                            {...style}
                            name="arrowhead-left-outline"
                            style={{marginRight: -5}}
                          />
                        )}
                        status="danger"
                        style={{
                          flexDirection: 'row',
                          width: 125,
                        }}>
                        Từ chối
                      </Button>
                      <Button
                        TouchableOpacity
                        onPress={() =>
                          NavigationService.navigate('RequestDetails', {
                            status: 'Đang thực hiện',
                          })
                        }
                        appearance="outline"
                        icon={style => (
                          <IconUI
                            {...style}
                            name="arrowhead-right-outline"
                            style={{marginLeft: -5}}
                          />
                        )}
                        status="info"
                        style={{
                          flexDirection: 'row-reverse',
                          width: 125,
                        }}>
                        Chấp nhận
                      </Button>
                    </View>
                  ) : (
                    <View style={{height: 46}}>
                      {/* <FontText style={{fontSize: 19}}>
                        Đã chấp nhận yêu cầu sửa chữa...
                      </FontText> */}
                      <CountdownCircle
                        seconds={10}
                        radius={27}
                        borderWidth={7}
                        color="#3ddc84"
                        bgColor="#fff"
                        textStyle={{fontSize: 20}}
                        onTimeElapsed={() =>
                          NavigationService.navigate('RequestDetails', {
                            status: 'Đang thực hiện',
                          })
                        }
                      />
                    </View>
                  )}
                  <IconE
                    name="triangle-down"
                    style={{
                      fontSize: 100,
                      color: 'white',
                      marginTop: -20,
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  statusContainer: {
    paddingHorizontal: '20%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#171f33',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  powerIcon: {
    fontSize: 33,
    color: 'white',
  },
  gpsIcon: {
    borderRadius: 22,
    padding: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#0099dd',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  outsidePowerBorder: {
    width: 90,
    height: 55,
    borderWidth: 3,
    borderRadius: 30,
    paddingBottom: 1,
  },
  insidePowerBorder: {
    flex: 1,
    borderWidth: 4,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foundContainer: {
    width: '80%',
    height: 400,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    zIndex: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
