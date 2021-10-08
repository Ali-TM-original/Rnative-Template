import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import CustomHeader from './CustomHeader';


const Register = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader Title="Register Screen" isStack={true} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Register Screen</Text>
            </View>
        </SafeAreaView>
      );
}

export default Register
