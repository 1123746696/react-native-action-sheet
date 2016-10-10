/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict'

import React, { Component } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View,PixelRatio,
} from 'react-native';
export default class button extends Component{
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.button, this.props.buttonStyle]}
                onPress={this.props.onPress}>
                <Text style={[styles.buttonText, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    buttonText: {
        color: '#007cf9',
        alignSelf: 'center',
        fontSize: 16
    },
    button: {
        height: 49,
        backgroundColor: 'white',
        borderColor: '#eeeeee',
        borderBottomWidth: 1/PixelRatio.get(),
        alignSelf: 'stretch',
        marginBottom:1/PixelRatio.get(),
        justifyContent: 'center'
    }
});
