import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
 
const ShareScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Share Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('InviteScreen')}
            title="Go to Invite Screen"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
         
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default ShareScreen;
