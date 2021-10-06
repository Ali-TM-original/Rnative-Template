import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomHeader from './CustomHeader';


const Settings = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader Title="Settings" isStack={false} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setings</Text>
            <TouchableOpacity style={{marginTop:20}} onPress={()=>navigation.navigate("Settings-Stack")}>
                <Text>Go to Stack Screen of Settings page</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
      );
}
export default Settings
