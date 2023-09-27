import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({children, custompress}) => {
  return (
    <TouchableOpacity onPress={custompress}>
      <View style={[sty.con]}>
        <Text style={sty.txt}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
const sty = StyleSheet.create({
  con: {
    height: 35,
    width: '60%',
   backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 75,
    marginVertical: 30,
    borderRadius: 30,
    borderWidth:1,
    borderColor:'black'
  },
  txt: {
    color: 'black',
    fontSize: 18,
  },
});
