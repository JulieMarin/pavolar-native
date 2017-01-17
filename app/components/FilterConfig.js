import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const FilterConfig = ({toggleFilterModal}) => {
    return (
      <TouchableOpacity onPress={() => toggleFilterModal(true)}>
        <View>
          <Icon size={25} source={require('image!Sorting')} />
        </View>
      </TouchableOpacity>
    );
};

export default FilterConfig;
