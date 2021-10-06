import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from './CustomHeader';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader Title="Home" isStack={false} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <TouchableOpacity 
            style={{marginTop:20}}
            onPress={()=> navigation.navigate('Home-Stack')}>
                <Text>Go to Stack Screen of Home page</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
      );
}

export default Home
