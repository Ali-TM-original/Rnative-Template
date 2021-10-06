import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import {Icons} from "../assets"


const CustomHeader = ({Title , isStack, navigation}) => {
    return (
        <View style={{
            flexDirection:"row",height:50}}>
                <View style={{
                    flex:1,justifyContent:'center'}}>
                    {isStack?
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source={Icons.BackButtonIcon} resizeMode="contain" 
                            style={{
                                height:50, width:50, marginLeft:10,
                                }}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                            <Image source={Icons.Hamburger} resizeMode="contain"
                            style={{
                                height:50, width:50, marginLeft:10,
                                }}
                            />
                        </TouchableOpacity>
                    }
                </View>
                <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{alignItems:'center', fontSize:20,fontWeight:'bold'}}>{Title}</Text>
                </View>
                <View style={{flex:1}}>
                
                </View>

        </View>
    )
}

export default CustomHeader
