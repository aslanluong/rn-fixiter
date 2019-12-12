import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMe from 'react-native-vector-icons/MaterialIcons';
import FontText from '../FontText';

import Item from './Item';
import {Icon} from 'react-native-ui-kitten';

export default class Revenue extends Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <View style={{alignItems: 'center'}}>
            <FontText emphasis="medium" style={{fontSize: 17, color: 'white'}}>
              Thu nhập
            </FontText>
          </View>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              justifyContent: 'center',
            }}
            // onPress={() => NavigationService.navigate('Tabs')}
          >
            <IconE name="refresh" style={{fontSize: 37, color: '#fff'}} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View
            style={{
              height: 170,
              paddingVertical: 20,
              backgroundColor: '#ecf0f1',
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Item
                titleDay="Ngày hôm qua"
                numberJobs="5 công việc"
                price="567.000 VND"
              />
              <Item
                titleDay="Ngày hôm trước"
                numberJobs="4 công việc"
                price="457.000 VND"
              />
              <Item
                titleDay="Ngày hôm kia"
                numberJobs="6 công việc"
                price="801.000 VND"
              />
            </ScrollView>
          </View>
          <View style={styles.formContainer}>
            <FontText emphasis="bold" style={{fontSize: 17}}>
              Truy cập nhanh
            </FontText>
            <View style={styles.fastMenu}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.iconFastMenu}>
                  <IconM name="bank-transfer" style={{fontSize: 37}} />
                </View>
                <FontText style={{fontSize: 17}}>Nạp tiền</FontText>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.iconFastMenu}>
                  <IconM name="bank" style={{fontSize: 30}} />
                </View>
                <FontText style={{fontSize: 17}}>Tài khoản ngân hàng</FontText>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.iconFastMenu}>
                  <IconM name="diamond-stone" style={{fontSize: 30}} />
                </View>
                <FontText style={{fontSize: 17}}>Tiền thưởng</FontText>
              </TouchableOpacity>
            </View>
            <View style={{paddingBottom: 50}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <FontText emphasis="bold" style={{fontSize: 17}}>
                  Lịch sử Ví tiền
                </FontText>
                <TouchableOpacity>
                  <FontText
                    emphasis="medium"
                    style={{fontSize: 17, color: '#3498db'}}>
                    Xem tất cả
                  </FontText>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                  borderBottomColor: '#b2bec3',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <FontText emphasis="medium" style={{fontSize: 17}}>
                    Phí dịch vụ
                  </FontText>
                  <FontText
                    emphasis="medium"
                    style={{fontSize: 14, color: '#b2bec3'}}>
                    10% doanh thu 1 phiên làm việc
                  </FontText>
                </View>
                <View
                  style={{
                    width: 115,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: -5,
                  }}>
                  <View>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 17, color: '#ff9501'}}>
                      -17.000
                    </FontText>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 16, color: '#b2bec3'}}>
                      Ví Fixit
                    </FontText>
                  </View>
                  <IconMe name="keyboard-arrow-right" style={{fontSize: 27}} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                  borderBottomColor: '#b2bec3',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <FontText emphasis="medium" style={{fontSize: 17}}>
                    Rút tiền về Ví Ngân hàng
                  </FontText>
                  <FontText
                    emphasis="medium"
                    style={{fontSize: 14, color: '#b2bec3'}}>
                    LUONG THANH THANG - VCB
                  </FontText>
                </View>
                <View
                  style={{
                    width: 115,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: -5,
                  }}>
                  <View>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 17, color: '#ff9501'}}>
                      -500.000
                    </FontText>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 16, color: '#b2bec3'}}>
                      Ví Fixit
                    </FontText>
                  </View>
                  <IconMe name="keyboard-arrow-right" style={{fontSize: 27}} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                  borderBottomColor: '#b2bec3',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <FontText emphasis="medium" style={{fontSize: 17}}>
                    Nạp tiền vào ví Fixit
                  </FontText>
                  <FontText
                    emphasis="medium"
                    style={{fontSize: 14, color: '#b2bec3'}}>
                    LUONG THANH THANG - VCB
                  </FontText>
                </View>
                <View
                  style={{
                    width: 115,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: -5,
                  }}>
                  <View>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 17, color: '#3DDC84'}}>
                      100.000
                    </FontText>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 16, color: '#b2bec3'}}>
                      Ví Fixit
                    </FontText>
                  </View>
                  <IconMe name="keyboard-arrow-right" style={{fontSize: 27}} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                  borderBottomColor: '#b2bec3',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <FontText emphasis="medium" style={{fontSize: 17}}>
                    Phí dịch vụ
                  </FontText>
                  <FontText
                    emphasis="medium"
                    style={{fontSize: 14, color: '#b2bec3'}}>
                    10% doanh thu 1 phiên làm việc
                  </FontText>
                </View>
                <View
                  style={{
                    width: 115,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: -5,
                  }}>
                  <View>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 17, color: '#ff9501'}}>
                      50.000
                    </FontText>
                    <FontText
                      emphasis="medium"
                      style={{fontSize: 16, color: '#b2bec3'}}>
                      Ví Fixit
                    </FontText>
                  </View>
                  <IconMe name="keyboard-arrow-right" style={{fontSize: 27}} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleContainer: {
    height: 56,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 0.5,
    backgroundColor: '#171f33',
  },
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  fastMenu: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  iconFastMenu: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: '#dfe6e9',
  },
});
