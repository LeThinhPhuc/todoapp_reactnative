import { View, Text,StyleSheet,TouchableOpacity ,Image, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
export const Task = (props) => {

    //tất cả các thuộc tính của Task sẽ được gán trong props

    const {number} = props; //lấy thuộc tính number trong props
    //xử lý nếu là số chắn thì màu  ... lẻ là màu ...
    const numberText = number < 10 ? `0${number}` : number;
    const numberBG = number % 2 == 0 ? (styles.even) : (styles.odd);

    return (
        <View>
            <View style = {styles.item}>
                                
                {/* checkbox */}
                <View style = {{marginRight : 10}}>
                    <CheckBox 
                    // thuộc tính của checkbox được lấy trong props 
                    isChecked = {props.isChecked} 
                    onClick={props.onClick}
                    />
                </View>
                
                {/* Phần số thứ tự */}
                <View style = {[styles.number,numberBG]}><Text>{numberText}</Text></View>

                {/* Phần nội dung */}
                <View style = {styles.content}>
                    <Text style = {{fontSize : 20}}>{props.content}</Text>
                    <Text style = {{fontSize : 20}}>Còn {props.day} ngày</Text>
                    
                </View>
                
                {/* Thùng rác */}
                <View style = {styles.delete}>
                    <TouchableOpacity
                    onPress={props.onDeleteTask}
                    >
                        <Image 
                        style={{ width: 30, height: 30 }}
                        source={{uri : 'https://cdn-icons-png.flaticon.com/512/3481/3481306.png'}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  )
};

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        backgroundColor  : '#fff',
        marginBottom : 15,
        height : 50,
        alignItems : 'center',
        paddingHorizontal : 10,
        borderRadius : 15,
    },
    //nếu số thứ tự của công việc là chắn thì số thứ tự đó có màu #55f253
    even : {
        backgroundColor : '#55f253'
    },
    //nếu số thứ tự của công việc là lẻ thì số thứ tự đó có màu #48cfef
    odd : {
         backgroundColor : '#48cfef'
    },
    //Style cho số thứ tự
    number : {
        width : 35, 
        height : 35,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10,
        borderRadius : 10
    },
    //style cho nội dung công việc
    content : {
        marginLeft : 10
    },
    //style cho nút xóa công việc
    delete : {
        flex : 1,
        alignItems : 'flex-end'
    }
});