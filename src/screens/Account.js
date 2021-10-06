import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CustomHeader from './CustomHeader';

const Account = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader Title="Home" isStack={false} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Accounts</Text>
            </View>
        </SafeAreaView>
      );
}

export default Account
