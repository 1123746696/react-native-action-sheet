/*
 * (The MIT License)
 * Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
 * @providesModule ActionSheet
 * @flow-weak
 */
'use strict';


import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import Button from './button'
import Overlay from './overlay'
import Sheet from './sheet'
export default class Action extends Component{
    static Button = Button
    static propTypes ={
    cancelText: 'Cancel',
    }
    render() {
        return (
                <Overlay visible={this.props.visible}>
                <View style={styles.actionSheetContainer}>
                <TouchableOpacity
                style={{flex:1}}
                onPress={this.props.onCancel}>
                </TouchableOpacity>
                <Sheet visible={this.props.visible}>
                <View style={styles.buttonContainer}>
                {this.props.children}
                </View>
                <Button
                buttonStyle={{marginTop:10, borderRadius:7}}
                textStyle={{color:'#007cf9'}}
                onPress={this.props.onCancel}>{this.props.cancelText}</Button>
                </Sheet>
                </View>
                </Overlay>
                );
    }
}

var styles = StyleSheet.create({
                               actionSheetContainer: {
                               flex: 1,
                               padding: 10,
                               justifyContent: "flex-end",
                               backgroundColor: 'rgba(0, 0, 0, 0.5)',
                               },
                               buttonContainer: {
                               borderRadius:7,
                               overflow: 'hidden',
                               }
                               });
