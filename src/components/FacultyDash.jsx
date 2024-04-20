import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authContext } from '../context/AuthContextFunction';
import { appcolor } from '../constants';
import eventsIcon from '../assets/images/1.png';
import alumniIcon from '../assets/images/4.png';
import examsIcon from '../assets/images/5.png';
import idCardIcon from '../assets/images/6.png';
import timeTableIcon from '../assets/images/7.png';
import assignmentIcon from '../assets/images/8.png';
import pyqsIcon from '../assets/images/9.png';
import profileIcon from '../assets/images/10.png';

export default function FacultyDash({ navigation }) {
  const { setIsLoggedIn, authData, setAuthData } = useContext(authContext);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(authData);
      await AsyncStorage.setItem('auth-data', jsonValue);
    } catch (e) {
      console.error("Error saving value:", e);
    }
  };

  if (authData.success) {
    // alert(`${authData.member.role} successfully logged in`);
    storeData();
  }

  return (
    <View style={styles.container}>
    <View style={{padding:10}}>
      <View style={styles.nameCard}>
        <View>
          <Text style={styles.name}>Hello,</Text>
          <Text style={styles.name}>{ authData.member?.name}</Text>
          <Text style={styles.textMetaDetail}>ID:{ authData.member?.rollno} | FACULTY</Text>
        </View>
        <View>
          <Image source={{uri:authData.member?.imageurl?.url}} style={styles.imgAvatar} />
        </View>
      </View>
      </View>
      <ScrollView>
        <View style={styles.dashContent}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SendAssignments', { role: "FACULTY" })}>
              <View style={styles.itemWrapper}>
                <Image source={eventsIcon} style={styles.endItems} />
                <Text style={styles.text}>Send Assignments</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ManageAttendance', { role: "FACULTY" })}>
              <View style={styles.itemWrapper}>
                <Image source={eventsIcon} style={styles.middleItemActive} />
                <Text style={styles.text}>Manage Attendance</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.itemWrapper}>
              <Image source={examsIcon} style={styles.endItems} />
              <Text style={styles.text}>Results</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={alumniIcon} style={styles.endItems} />
              <Text style={styles.text}>Alumni Meet</Text>
            </View>
            <View>
              <Image source={examsIcon} style={styles.middleItem} />
              <Text style={styles.text}>Exams</Text>
            </View>
            <View>
              <Image source={idCardIcon} style={styles.endItems} />
              <Text style={styles.text}>ID Card</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={timeTableIcon} style={styles.endItems} />
              <Text style={styles.text}>Time Table</Text>
            </View>
            <View>
              <Image source={assignmentIcon} style={styles.middleItem} />
              <Text style={styles.text}>Assignment</Text>
            </View>
            <View>
              <Image source={pyqsIcon} style={styles.endItems} />
              <Text style={styles.text}>PYQs</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={profileIcon} style={styles.endItems} />
              <Text style={styles.text}>Profile</Text>
            </View>
            <View>
              <Image source={profileIcon} style={styles.middleItem} />
              <Text style={styles.text}>Results</Text>
            </View>
            <View>
              <Image source={profileIcon} style={styles.endItems} />
              <Text style={styles.text}>Results</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  nameCard: {
    width: '100%',
    height: 120,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  name: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
  },
  text: {
    color: 'black',
    fontFamily: 'NotoSans_Condensed-Regular',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  textMetaDetail: {
    color: 'black',
    fontFamily: 'NotoSans_Condensed-Regular',
    marginTop: 10,
    fontSize: 15,
  },
  imgAvatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  dashContent: {
    flex: 1,
  },
  itemWrapper: {},
  endItems: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  endItemsActive: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: appcolor,
  },
  middleItem: {
    height: 120,
    borderRadius: 10,
    width: 120,
    backgroundColor: "#ccc",
  },
  middleItemActive: {
    height: 120,
    borderRadius: 10,
    width: 120,
    backgroundColor: appcolor,
  },
  row: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 115,
  },
});
