import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';
// import { bold } from 'ansi-colors';

const value = 'Give us your feedback, Thank you!';

export default class Rate extends Component {
  ratingCompleted(rating) {
    // this.setState({
    //   rating: rating
    // });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            borderRadius: 2,
            borderColor: 'white',
            borderWidth: 0,
          }}>
          <Text
            style={[
              styles.titleText,
              {
                marginTop: 50,
                color: '#ff9051',
                fontSize: 32,
                fontWeight: 'bold',
              },
            ]}>
            Rate me, Thank you!
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            borderColor: 'black',
            borderWidth: 0,
          }}>
          <Text
            style={[
              styles.titleText,
              {marginTop: 30, color: '#ff9051', fontSize: 22},
            ]}>
            Please Swipe to Rate
          </Text>
          <Rating
            showRating
            imageSize={40}
            ratingTextColor="#ff9051"
            ratingColor="#ff9051"
            onFinishRating={this.ratingCompleted}
            style={{paddingVertical: 10}}
            startingValue={5}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'pink'
          }}>
          <Text
            style={{
              paddingLeft: 25,
              paddingRight: 25,
              fontSize: 18,
              color: 'black',
            }}>
            I hope to received your comments to improve our services,
            <Text style={{color: '#f1c40f', fontWeight: 'bold', fontSize: 25}}>
              Thank you!
            </Text>
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            padding: 20,
          }}>
          <View
            style={{
              flex: 6,
              borderColor: '#ff9051',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                height: '100%',
                fontSize: 18,
                // borderColor: 'gray',
                // borderWidth: 1,
                width: '90%',
              }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
          <View
            style={{
              flex: 4,
              // borderWidth: 1,
              height: '100%',
            }}>
            <Button
              style={{height: '100%', borderRadius: 2}}
              title="FEED BACK"
              color="#ff9051"
              onPress={() => Alert.alert('Thanks for your rating!')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingContainer: {
    paddingTop: 50,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  viewContainer: {
    flex: 1,
  },
});
