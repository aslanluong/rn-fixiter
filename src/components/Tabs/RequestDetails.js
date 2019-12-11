import React, {Component} from 'react';
import {
  Alert,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconEn from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import Timeline from 'react-native-timeline-flatlist';
import FontText from '../FontText';
import NavigationService from '../../services/navigate';
import DatePicker from 'react-native-date-picker';

export default class RequestDetails extends Component {
  constructor() {
    super();
    this.doneTimeline = [
      {time: '09:00', description: 'Khách đã tạo yêu cầu sửa chữa'},
      {time: '09:05', description: 'Bạn đã xác nhận yêu cầu'},
      {time: '09:10', description: 'Đang trên đường đến'},
      {time: '09:30', description: 'Đã đến nơi sửa chữa'},
      {time: '10:25', description: 'Sửa xong/Xác nhận hoàn thành'},
    ];
    this.cancelTimeline = [
      {
        time: '11:20',
        description: 'Khách đã tạo yêu cầu sửa chữa',
        circleColor: '#ff9501',
        lineColor: 'red',
      },
      {
        time: '11:22',
        description: 'Bạn đã xác nhận yêu cầu',
        circleColor: '#a9a9a9',
        lineColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Đang trên đường đến',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Đã đến nơi sửa chữa',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Sửa xong/Xác nhận hoàn thành',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
    ];
    this.processTimeline = [
      {
        time: '11:17',
        description: 'Khách đã tạo yêu cầu sửa chữa',
        circleColor: '#ff9501',
      },
      {
        time: '11:20',
        description: 'Bạn đã xác nhận yêu cầu',
        circleColor: '#ff9501',
        lineColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Đang trên đường đến',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Đã đến nơi sửa chữa',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Sửa xong/Xác nhận hoàn thành',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
    ];
    this.calendarTimeline = [
      {
        time: '11:20',
        description: 'Khách đã tạo yêu cầu sửa chữa',
        circleColor: '#ff9501',
        lineColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Bạn xác nhận lịch sửa',
        circleColor: '#a9a9a9',
        lineColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Đang trên đường đến',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Đã đến nơi sửa chữa',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
      {
        time: '',
        description: 'Sửa xong/Xác nhận hoàn thành',
        lineColor: '#a9a9a9',
        circleColor: '#a9a9a9',
      },
    ];
  }

  state = {
    modalCancel: false,
    modalChat: false,
    modalCalendar: false,
  };

  setModalCancel(visible) {
    this.setState({modalCancel: visible});
  }
  setModalChat(visible) {
    this.setState({modalChat: visible});
  }
  setModalCalendar(visible) {
    this.setState({modalCalendar: visible});
  }

  render() {
    const {status} = this.props.navigation.state.params;
    const today = new Date();
    const next7days = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7,
    );
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              justifyContent: 'center',
            }}
            onPress={() => NavigationService.navigate('Tabs')}>
            <IconE name="close" style={{fontSize: 25}} />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <FontText emphasis="bold" style={{fontSize: 13}}>
              Phiên sửa chữa #FICRAA001
            </FontText>
            <FontText style={{fontSize: 12}}>11:17 - 09/12/2019</FontText>
          </View>
          {status == 'Đang đặt lịch' ? (
            <TouchableOpacity
              onPress={() => this.setModalCancel(true)}
              style={{
                borderColor: '#a9a9a9',
                borderWidth: 1,
                borderRadius: 7,
                paddingHorizontal: 7,
                paddingVertical: 5,
              }}>
              <FontText
                emphasis="medium"
                style={{fontSize: 13, color: '#DB4437'}}>
                Hủy
              </FontText>
            </TouchableOpacity>
          ) : (
            <View style={{width: 43}} />
          )}
        </View>
        <ScrollView style={styles.bodyContainer}>
          <Modal
            transparent={true}
            visible={this.state.modalCancel}
            onRequestClose={() => {
              this.setModalCancel(!this.state.modalCancel);
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  marginHorizontal: '5%',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  borderColor: '#a9a9a9',
                  borderWidth: 0.5,
                }}>
                <View
                  style={{
                    padding: 15,
                  }}>
                  <FontText
                    emphasis="bold"
                    style={{fontSize: 19, marginBottom: 20}}>
                    Bạn có muốn hủy yêu cầu sửa chữa?
                  </FontText>
                  <FontText style={{fontSize: 15, color: 'red'}}>
                    Lưu ý:
                  </FontText>
                  <FontText>
                    Việc hủy yêu cầu nhiều lần sẽ làm tăng thời gian tìm kiếm
                    thợ sửa chữa.
                  </FontText>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 56,
                    flexDirection: 'row',
                    borderTopColor: '#c9c9c9',
                    borderTopWidth: 0.7,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      borderRightColor: '#c9c9c9',
                      borderRightWidth: 0.7,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalCancel(!this.state.modalCancel);
                      }}
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontText>Không</FontText>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalCancel(!this.state.modalCancel);
                      NavigationService.navigate('RequestDetails', {
                        status: 'Đã hủy',
                      });
                    }}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <FontText>Đồng ý</FontText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            transparent={true}
            visible={this.state.modalChat}
            onRequestClose={() => {
              this.setModalChat(!this.state.modalChat);
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  marginHorizontal: '5%',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  borderColor: '#a9a9a9',
                  borderWidth: 0.5,
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '5%',
                    paddingLeft: '5%',
                    paddingVertical: 10,
                  }}>
                  <FontText style={{fontSize: 15}}>
                    Đang chat với:{' '}
                    <FontText emphasis="bold">Lương Thành Thắng </FontText>
                  </FontText>
                  <TouchableOpacity
                    onPress={() => this.setModalChat(!this.state.modalChat)}
                    style={{
                      width: 50,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <IconS name="close" size={23} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginHorizontal: '3%',
                    height: 360,
                    borderRadius: 10,
                    backgroundColor: '#e9e9e9',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 10,
                    }}>
                    <IconEn
                      name="triangle-left"
                      size={25}
                      style={{
                        marginRight: -10,
                        marginTop: -2,
                        color: '#4285F4',
                      }}
                    />
                    <FontText
                      style={{
                        backgroundColor: '#4285F4',
                        color: 'white',
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                      }}>
                      Chào Khánh!
                    </FontText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      marginVertical: 5,
                    }}>
                    <IconEn
                      name="triangle-right"
                      size={25}
                      style={{
                        marginLeft: -10,
                        marginTop: -2,
                        color: '#ccffcc',
                      }}
                    />
                    <View
                      style={{
                        backgroundColor: '#ccffcc',
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                      }}>
                      <FontText>Chào anh, em đang trên</FontText>
                      <FontText>đường đến ạ!</FontText>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                    }}>
                    <IconEn
                      name="triangle-left"
                      size={25}
                      style={{
                        marginRight: -10,
                        marginTop: -2,
                        color: '#4285F4',
                      }}
                    />
                    <FontText
                      style={{
                        backgroundColor: '#4285F4',
                        color: 'white',
                        paddingVertical: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                      }}>
                      Oke anh!
                    </FontText>
                  </View>
                </View>
                <View
                  style={{
                    paddingHorizontal: '5%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    placeholder="Nhập nội dung..."
                    style={{
                      fontFamily: 'lato-regular',
                      lineHeight: 45,
                      width: '90%',
                      paddingLeft: 15,
                      height: 45,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: '#c9c9c9',
                    }}></TextInput>
                  <TouchableOpacity>
                    <IconM name="send" size={25} color="#4285F4" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.statusContainer}>
            <FontText
              emphasis="bold"
              style={{
                fontSize: 18,
                color:
                  status == 'Đã hoàn thành'
                    ? '#3ddc84'
                    : status == 'Đang thực hiện'
                    ? '#4285f4'
                    : status == 'Đang đặt lịch'
                    ? '#4285f4'
                    : '#a9a9a9',
                marginBottom: 10,
              }}>
              {status}
            </FontText>
            {status == 'Đang đặt lịch' ? (
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <FontText emphasis="medium">Thời gian đã đặt: </FontText>
                <FontText emphasis="light">10/12/2019 - 13:45 </FontText>
                <FontText> (</FontText>
                <TouchableOpacity onPress={() => this.setModalCalendar(true)}>
                  <FontText style={{color: '#4285f4'}}>Thay đổi</FontText>
                </TouchableOpacity>

                <FontText>)</FontText>

                <Modal
                  transparent={true}
                  visible={this.state.modalCalendar}
                  onRequestClose={() => {
                    this.setModalCalendar(!this.state.modalCalendar);
                  }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        marginHorizontal: '5%',
                        backgroundColor: 'white',
                        borderRadius: 15,
                        borderColor: '#a9a9a9',
                        borderWidth: 0.5,
                        overflow: 'hidden',
                      }}>
                      <View
                        style={{
                          padding: 15,
                        }}>
                        <FontText
                          emphasis="bold"
                          style={{
                            fontSize: 19,
                            marginBottom: 10,
                            color: '#F56258',
                          }}>
                          Thời gian hẹn:
                        </FontText>
                        <FontText
                          style={{
                            marginBottom: 20,
                          }}>
                          Vui lòng chọn thời gian thợ có thể đến để sửa chữa
                          thiết bị của bạn.
                        </FontText>
                        <View style={{flexDirection: 'row'}}>
                          <DatePicker
                            style={{
                              width: 220,
                              height: 100,
                            }}
                            date={this.state.date}
                            locale="vn"
                            mode="date"
                            minimumDate={today}
                            maximumDate={next7days}
                            onDateChange={date => this.setState({date})}
                          />
                          <DatePicker
                            style={{
                              width: 130,
                              height: 100,
                            }}
                            date={this.state.date}
                            locale="vn"
                            mode="time"
                            minuteInterval={15}
                            onDateChange={date => this.setState({date})}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          height: 56,
                          flexDirection: 'row',
                          borderTopColor: '#c9c9c9',
                          borderTopWidth: 0.7,
                        }}>
                        <View
                          style={{
                            flex: 1,
                            borderRightColor: '#c9c9c9',
                            borderRightWidth: 0.7,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setModalCalendar(!this.state.modalCalendar);
                            }}
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#e9e9e9',
                            }}>
                            <FontText>Hủy</FontText>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            this.setModalCalendar(!this.state.modalCalendar);
                            NavigationService.navigate('RequestDetails', {
                              status: 'Đang đặt lịch',
                            });
                          }}
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#F56258',
                          }}>
                          <FontText style={{color: 'white'}}>Đặt lịch</FontText>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            ) : (
              <></>
            )}
            <FontText emphasis="light">
              {status == 'Đã hoàn thành'
                ? 'Chúc mừng bạn đã hoàn thành việc sửa chữa. Hãy xem đánh giá của khách hàng dành cho bạn!'
                : status == 'Đang thực hiện'
                ? 'Quá trình sửa chữa đang diễn ra, bạn có thể xem tiến độ công việc tại đây...'
                : status == 'Đang đặt lịch'
                ? 'Chúng tôi đang tìm kiếm thợ phù hợp với lịch hẹn của bạn...'
                : 'Quá trình sửa chữa thiết bị đã bị huỷ...'}
            </FontText>
          </View>
          {status == 'Đã hoàn thành' ? (
            <View style={styles.feedbackContainer}>
              <FontText
                emphasis="bold"
                style={{fontSize: 18, marginBottom: 10}}>
                Đánh giá của khách dành cho bạn!
              </FontText>
              <FontText emphasis="light" style={{marginBottom: 5}}>
                Đừng quên! Đạt được điểm đánh giá cao sẽ giúp bạn dễ dàng kết
                nối với nhiều khách hàng hơn.
              </FontText>
              <View style={{flexDirection: 'row'}}>
                <IconM name="star" style={styles.starIcon} />
                <IconM name="star" style={styles.starIcon} />
                <IconM name="star" style={styles.starIcon} />
                <IconM name="star" style={styles.starIcon} />
                <IconM name="star" style={styles.starIcon} />
              </View>
            </View>
          ) : status == 'Đang thực hiện' ? (
            <View
              style={{
                marginHorizontal: '5%',
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                height: 47,
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#c9c9c9',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  flex: 1,
                  borderRightColor: '#c9c9c9',
                  borderRightWidth: 1,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Đang gọi...', '', [], {
                      cancelable: true,
                    });
                  }}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ccffcc',
                    flexDirection: 'row',
                  }}>
                  <IconM name="phone" size={20} style={{marginRight: 5}} />
                  <FontText>Gọi cho khách</FontText>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setModalChat(!this.state.modalChat);
                }}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#b3d9ff',
                  flexDirection: 'row',
                }}>
                <IconM
                  name="android-messages"
                  size={23}
                  style={{marginRight: 5}}
                />
                <FontText>Chat với khách</FontText>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
          <View>
            <FontText
              emphasis="bold"
              style={{
                marginHorizontal: '5%',
                marginTop: 10,
                fontSize: 15,
              }}>
              Trạng thái phiên làm việc
            </FontText>
            <View style={[styles.timelineContainer]}>
              <Timeline
                style={{paddingLeft: 5}}
                data={
                  status == 'Đã hoàn thành'
                    ? this.doneTimeline
                    : status == 'Đang thực hiện'
                    ? this.processTimeline
                    : status == 'Đang đặt lịch'
                    ? this.calendarTimeline
                    : this.cancelTimeline
                }
                circleColor="#ff9501"
                circleSize={10}
                lineColor="#ff9501"
                lineWidth={4}
                showTime={false}
                renderDetail={rowData => (
                  <View
                    style={{
                      height: 30,
                      width: '95%',
                      marginTop: -14,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <FontText style={{fontSize: 13}}>
                      {rowData.description}
                    </FontText>
                    <FontText style={{fontSize: 13}}>{rowData.time}</FontText>
                  </View>
                )}
              />
            </View>
          </View>
          {status == 'Đã hoàn thành' ? (
            <View>
              <FontText
                emphasis="bold"
                style={{
                  marginHorizontal: '5%',
                  marginTop: 10,
                  fontSize: 15,
                }}>
                Thu nhập
              </FontText>
              <View style={styles.feeContainer}>
                <View style={styles.feeRow}>
                  <FontText>Tiền công sữa chữa</FontText>
                  <FontText>150.000đ</FontText>
                </View>
                <View style={styles.feeRow}>
                  <FontText style={{paddingLeft: 25}}>1 - Máy lạnh</FontText>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#c9c9c9',
                    marginBottom: 15,
                  }}
                />
                <View style={styles.feeRow}>
                  <FontText>Phí dịch vụ</FontText>
                  <FontText>-15.000đ</FontText>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#b9b9b9',
                    marginTop: 20,
                    marginBottom: 3,
                  }}
                />
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#b9b9b9',
                    marginBottom: 10,
                  }}
                />
                <View style={styles.feeRow}>
                  <FontText>Tổng cộng</FontText>
                  <FontText>135.000đ</FontText>
                </View>
              </View>
              <View>
                <FontText
                  emphasis="bold"
                  style={{
                    marginHorizontal: '5%',
                    marginTop: 10,
                    fontSize: 15,
                  }}>
                  Thông tin khách hàng
                </FontText>
                <View style={styles.fixerContainer}>
                  <View style={styles.fixerRow}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <View
                        style={{
                          width: 25,
                          height: 25,
                          paddingTop: 3,
                          borderRadius: 12.5,
                          overflow: 'hidden',
                          //   backgroundColor: '#F56258',
                          backgroundColor: '#3ddc84',
                        }}>
                        <Image
                          style={{width: 25, height: 25}}
                          source={{
                            uri:
                              'https://www.pngrepo.com/png/17468/170/avatar.png',
                          }}
                        />
                      </View>
                    </View>
                    <View style={{flex: 7}}>
                      <FontText>Lương Thành Thắng</FontText>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: '#c9c9c9',
                      marginVertical: 15,
                    }}
                  />
                  <View style={styles.fixerRow}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <IconM
                        name="phone"
                        style={{fontSize: 20, color: '#ff9501'}}
                      />
                    </View>
                    <View style={{flex: 7}}>
                      <FontText>097 999 0001</FontText>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: '#c9c9c9',
                      marginVertical: 15,
                    }}
                  />
                  <View style={styles.fixerRow}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <IconM
                        name="map-marker-outline"
                        style={{fontSize: 20, color: '#ff9501'}}
                      />
                    </View>
                    <View style={{flex: 7}}>
                      <Text
                        style={{fontFamily: 'lato-regular'}}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        Đại học FPT, Khu Công Nghệ Cao, HCM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : status == 'Đang thực hiện' ? (
            <View>
              <FontText
                emphasis="bold"
                style={{
                  marginHorizontal: '5%',
                  marginTop: 10,
                  fontSize: 15,
                }}>
                Thu nhập
              </FontText>
              <View style={styles.feeContainer}>
                <View style={styles.feeRow}>
                  <FontText>Thu nhập ước tính</FontText>
                  <FontText>150.000đ</FontText>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#c9c9c9',
                    marginBottom: 15,
                  }}
                />
                <View style={styles.feeRow}>
                  <FontText>Tiền tip</FontText>
                  <FontText>50.000đ</FontText>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#b9b9b9',
                    marginTop: 20,
                    marginBottom: 3,
                  }}
                />
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#b9b9b9',
                    marginBottom: 10,
                  }}
                />
                <View style={styles.feeRow}>
                  <FontText>Thu nhập tạm tính</FontText>
                  <FontText>165.000đ</FontText>
                </View>
              </View>
              <View>
                <FontText
                  emphasis="bold"
                  style={{
                    marginHorizontal: '5%',
                    marginTop: 10,
                    fontSize: 15,
                  }}>
                  Thông tin khách hàng
                </FontText>
                <View style={styles.fixerContainer}>
                  <View style={styles.fixerRow}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <View
                        style={{
                          width: 25,
                          height: 25,
                          paddingTop: 3,
                          borderRadius: 12.5,
                          overflow: 'hidden',
                          backgroundColor: '#3ddc84',
                        }}>
                        <Image
                          style={{width: 25, height: 25}}
                          source={{
                            uri:
                              'https://www.pngrepo.com/png/17468/170/avatar.png',
                          }}
                        />
                      </View>
                    </View>
                    <View style={{flex: 7}}>
                      <FontText>Lương Thành Thắng</FontText>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: '#c9c9c9',
                      marginVertical: 15,
                    }}
                  />
                  <View style={styles.fixerRow}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <IconM
                        name="phone"
                        style={{fontSize: 20, color: '#ff9501'}}
                      />
                    </View>
                    <View style={{flex: 7}}>
                      <FontText>097 999 0001</FontText>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: '#c9c9c9',
                      marginVertical: 15,
                    }}
                  />
                  <View style={styles.fixerRow}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <IconM
                        name="map-marker-outline"
                        style={{fontSize: 20, color: '#ff9501'}}
                      />
                    </View>
                    <View style={{flex: 7}}>
                      <Text
                        style={{fontFamily: 'lato-regular'}}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        Đại học FPT, Khu Công Nghệ Cao, HCM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  bodyContainer: {
    backgroundColor: '#f0eff4',
    flex: 1,
  },
  statusContainer: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 10,
    padding: 15,
  },
  feedbackContainer: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 10,
    padding: 15,
  },
  starIcon: {
    fontSize: 29,
    color: '#ff9501',
  },
  timelineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 5,
    paddingTop: 30,
    flexDirection: 'row',
  },
  feeContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 5,
    padding: 15,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  fixerContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 5,
    marginBottom: 10,
    padding: 15,
  },
  fixerRow: {
    flexDirection: 'row',
  },
});
