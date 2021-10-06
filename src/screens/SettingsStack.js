import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import CustomHeader from './CustomHeader';

const SettingsStack = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader Title="Settings Stack" isStack={true} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Stack Boiii!</Text>
            </View>
        </SafeAreaView>
      );
}

export default SettingsStack
