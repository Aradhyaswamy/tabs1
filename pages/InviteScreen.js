import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
 
const InviteScreen = ({navigation}) => {
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
             Invite Screen
          </Text>
          
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
          <Button
            onPress={() => navigation.navigate('ShareScreen')}
            title="Go to Share Screen"
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
 
export default InviteScreen;