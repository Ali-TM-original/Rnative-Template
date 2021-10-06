import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import CustomHeader from './CustomHeader';


const HomeStack = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader Title="Home Stack" isStack={true} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Stack Boiii!</Text>
            </View>
        </SafeAreaView>
      );
}


export default HomeStack
