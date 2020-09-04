import React from 'react';

import {
    View,
    TextInput,
    Button,
  } from 'react-native';

const Landing = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => { console.log("Landing")}} />
      </View>
    );
}

export default Landing;