import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
// import BouncingPreloader from 'react-native-bouncing-preloader';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import Swipeable from 'react-native-swipeable';
import NavigationService from '../../services/navigate';
import {Button, Icon as IconUI} from 'react-native-ui-kitten/ui';

const icons = [
  require('../../../assets/images/groove-joint-pliers.png'),
  require('../../../assets/images/hand-saw.png'),
  require('../../../assets/images/long-pliers.png'),
  require('../../../assets/images/pipe-wrench.png'),
  require('../../../assets/images/screwdriver.png'),
  require('../../../assets/images/pliers.png'),
];

export default class FindFixer extends Component {
  state = {
    found: false,
    gpsX: 30,
    gpsY: 30,
    stdot: false,
    nddot: false,
    rddot: false,
  };
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          gpsX: this.state.gpsX + 3,
          gpsY: this.state.gpsY + 3,
        }),
      200,
    );
    setInterval(
      () =>
        this.setState({
          gpsX: this.state.gpsX - 15,
          gpsY: this.state.gpsY - 15,
        }),
      200 * 5,
    );
    setInterval(() => {
      setTimeout(
        () =>
          this.setState({
            stdot: false,
            nddot: false,
            rddot: false,
          }),
        0,
      );
      setTimeout(
        () =>
          this.setState({
            stdot: true,
            nddot: false,
            rddot: false,
          }),
        250,
      );
      setTimeout(
        () =>
          this.setState({
            stdot: true,
            nddot: true,
            rddot: false,
          }),
        500,
      );
      setTimeout(
        () =>
          this.setState({
            stdot: true,
            nddot: true,
            rddot: true,
          }),
        750,
      );
    }, 1000);
    setTimeout(() => this.setState({found: true}), 5000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Icon
                  name="map-marker"
                  style={{fontSize: 20, color: '#fd7e14'}}
                />
              </View>
              <View style={{flex: 9}}>
                <FontText emphasis="medium">Nơi sửa chữa</FontText>
                <Text numberOfLines={1} style={{fontFamily: 'lato-light'}}>
                  Đại học FPT, khu Công Nghệ Cao, quận 9, TP.HCM
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
              borderBottomColor: '#e9e9e9',
              borderBottomWidth: 1,
            }}>
            <FontText emphasis="bold">Điều hoà phòng</FontText>
          </View>
          <View style={styles.details}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <FontText emphasis="medium">Thiết bị</FontText>
                </View>
                <View style={{flex: 5}}>
                  <FontText emphasis="light">Máy lạnh</FontText>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <View style={{flex: 2}}>
                  <FontText emphasis="medium">Mô tả sự cố</FontText>
                </View>
                <View style={{flex: 5}}>
                  <FontText emphasis="light">
                    Không điều chỉnh được nhiệt độ
                  </FontText>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <View style={{flex: 2}}>
                  <FontText emphasis="medium">Phí ước tính</FontText>
                </View>
                <View style={{flex: 5}}>
                  <FontText emphasis="light">
                    150.000đ + <FontText emphasis="medium">Tiền tip:</FontText>{' '}
                    50.000đ
                  </FontText>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.details}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <FontText emphasis="medium">Lưu ý cho thợ</FontText>
                </View>
                <View style={{flex: 5}}>
                  <FontText emphasis="light">
                    Gọi trước khi tới khoảng 10p
                  </FontText>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{uri: 'https://i.imgur.com/EIxVoYr.png'}}
          style={{
            width: '100%',
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}>
            {this.state.found == false ? (
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                }}>
                <View style={styles.searchingSpace}>
                  <View
                    style={{
                      height: this.state.gpsX,
                      width: this.state.gpsY,
                      borderRadius: this.state.gpsX / 2,
                      backgroundColor: 'rgba(66,133,244,0.3)',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: 16,
                        width: 16,
                        borderRadius: 8,
                        backgroundColor: '#4285F4',
                        borderWidth: 1,
                        borderColor: 'white',
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: 15,
                    alignItems: 'center',
                    overflow: 'hidden',
                    paddingBottom: 1,
                    width: '90%',
                  }}>
                  <FontText emphasis="medium" style={styles.titleText}>
                    Đang tìm kiếm thợ
                    {this.state.stdot ? (
                      <FontText>.</FontText>
                    ) : (
                      <FontText style={{fontSize: 23}}> </FontText>
                    )}
                    {this.state.nddot ? (
                      <FontText>.</FontText>
                    ) : (
                      <FontText style={{fontSize: 23}}> </FontText>
                    )}
                    {this.state.rddot ? (
                      <FontText>.</FontText>
                    ) : (
                      <FontText style={{fontSize: 23}}> </FontText>
                    )}
                  </FontText>
                  <Swipeable
                    rightActionActivationDistance={200}
                    rightContent={<View />}
                    onRightActionActivate={() =>
                      NavigationService.navigate('CreateRequest')
                    }>
                    <Button
                      appearance="outline"
                      icon={style => (
                        <>
                          <IconUI
                            {...style}
                            name="arrowhead-left-outline"
                            style={{marginLeft: -15}}
                          />
                          <IconUI
                            {...style}
                            name="arrowhead-left-outline"
                            style={{marginLeft: 0}}
                          />
                        </>
                      )}
                      status="danger"
                      style={{
                        width: '70%',
                        alignSelf: 'center',
                        flexDirection: 'row-reverse',
                        borderWidth: 0,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                      }}>
                      Trượt qua trái để huỷ
                    </Button>
                  </Swipeable>
                </View>
              </View>
            ) : (
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
                <FontText>Đã tìm thấy thợ!</FontText>
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
                    Bùi Văn Khánh{' '}
                  </FontText>
                  <Icon
                    name="shield-check"
                    style={{fontSize: 25, color: '#3ddc84'}}
                  />
                </View>
                <FontText>Chuyên môn: Sửa điều hoà phòng</FontText>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="star" style={styles.starIcon} />
                  <Icon name="star" style={styles.starIcon} />
                  <Icon name="star" style={styles.starIcon} />
                  <Icon name="star" style={styles.starIcon} />
                  <Icon name="star-half" style={styles.starIcon} />
                </View>
                <FontText style={{fontSize: 16}}>097 113 9999</FontText>
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
                    marginVertical: 10,
                  }}>
                  Tiếp tục
                </Button>
                <IconE
                  name="triangle-down"
                  style={{
                    fontSize: 100,
                    color: '#FFF',
                    marginTop: -30,
                  }}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  details: {
    paddingVertical: 10,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  searchingSpace: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foundContainer: {
    width: '80%',
    height: 295,
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
  starIcon: {
    fontSize: 29,
    color: '#ff9501',
  },
});
