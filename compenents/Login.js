import * as React from 'react';
import {Text,View,StyleSheet,Button,TouchableOpacity,TextInput, ImageBackground, Alert} from 'react-native'
import { useState, useEffect} from 'react';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
export const Login = ({navigation}) =>{
    const [gmail,setGmail] = useState('');
    const [password,setPassword] = useState('');

    //xử xý đăng nhập
    const handleSignIn = () => {
        const auth = getAuth(auth); //lấy đối tượng Auth của firebase Authentication thông qua app
        signInWithEmailAndPassword(auth,gmail,password)//kiểm tra gmail và password trong firebase thông qua auth
        //nếu thành công
        .then((userCredential) =>{
            //sao khi thành công thì sẽ trả về userCredential(có dạng là một cái cái gì đó )
            //Sử dụng thuộc tính user để lấy lên đăng nhập
            const username = userCredential.user;
            console.log("Signed in with : " + username.email);
            setPassword('');
            navigation.navigate('ToDoList',[gmail]);
        })
        //nếu thất bại
        .catch(error =>{
            alert("Tài khoản sai hoặc chưa đăng kí" + "\n" + "Mã lỗi: " + error.code);
            console.log("Mã lỗi: " + error.code);
        })
    }

    return(
        <View>
            <ImageBackground>
                <Text style = {{textAlign : 'center',
                fontWeight : 'bold' ,
                fontSize : 30,
                marginTop : 100}}>Login</Text>

                <View style = {styles.input}>
                    
                    {/* Input gmail */}
                    <TextInput 
                    value = {gmail}
                    onChangeText={text => setGmail(text)} 
                    style = {styles.ip} placeholder='Tên đăng nhập(gmail)'></TextInput>

                    {/* Input password */}
                    <TextInput 
                    value={password}
                    secureTextEntry
                    onChangeText={text => setPassword(text)} 
                    style = {styles.ip} placeholder='Mật khẩu'></TextInput>

                    {/* Nút login */}
                    <TouchableOpacity style = {styles.login} onPress={handleSignIn}>
                        <Text style = {{fontSize : 30}}>Login</Text>
                    </TouchableOpacity>

                    {/* Nút tạo tài khoản */}
                    <TouchableOpacity 
                    style = {{marginTop : 20}}
                    onPress={() => navigation.navigate("CreateAccount")}
                    >
                        <Text style = {{textDecorationLine : 'underline'}}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    //style tổng cho 2 ô input
    input : {
        marginTop : 30,
        alignItems : 'center',
    },
    //style chỉ tiết cho 2 ô input
    ip :{
        marginTop : 30,
        backgroundColor : '#bbe6f3',
        width : 300,
        height : 70,
        borderRadius : 50,
        textAlign : 'center',
        fontSize : 20
    },
    //style cho nút login
    login : {
        marginTop : 30,
        backgroundColor : 'lightblue',
        textAlign : 'center',
        width : 150,
        height : 50,
        borderRadius : 50,
        alignItems : 'center',
        textAlign: 'center',
        justifyContent : 'center'
    }
});