import {Text,TextInput,TouchableOpacity,View,Button,StyleSheet, Alert} from 'react-native'
import {useState} from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../config/firebase'
export const CreateAccount = ({navigation}) =>{
    const [gmail,setGmail]  = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    // xử lý tạo tài khoản
    const handleCreateAccount = () =>{
        if(gmail.slice(-10) != '@gmail.com') alert("Vui lòng nhập đúng gmail");
        if(password != confirmPassword) alert('Mật khẩu nhập lại không đúng');

        const auth = getAuth(app); //lấy đối tượng Auth của firebase Authentication thông qua app
        createUserWithEmailAndPassword(auth,gmail,password)// tạo tài khoản mới với gmail và password và lưu vào firebas thông qua auth
        //nếu thành công
        .then((userCredential) =>{
            // trả về 1 userCredential
            const username = userCredential.user;
            console.log("Signed up with : " + username.email);
            alert('Tài khoản tạo thành công');
        })
        // nếu thất bại
        .catch(error =>{
            alert(error.code);
        })
    }

    return (
        <View style = {styles.container}>
            {/* Phần input */}
            <View style = {styles.input}>

                {/* ô nhập gmail */}
                <TextInput 
                style = {styles.ip} 
                onChangeText={text => setGmail(text)} 
                placeholder='Nhập gmail'></TextInput>

                {/* Ô nhập password */}
                <TextInput 
                style = {styles.ip} 
                onChangeText={text => setPassword(text)} 
                secureTextEntry
                placeholder='Nhập mật khẩu'></TextInput>

                {/* Ô xác nhận password */}
                <TextInput 
                style = {styles.ip} 
                onChangeText={text => setConfirmPassword(text)} 
                secureTextEntry
                placeholder='Nhập lại mật khẩu'></TextInput>
                
            </View>
            {/* Phần nút */}
            <View>
                {/* Nút tạo tài khoản */}
                <TouchableOpacity
                style = {styles.createAccount}
                onPress={handleCreateAccount}>
                    <Text style = {{fontSize : 20}}>Tạo Tài khoản</Text>
                </TouchableOpacity>

                {/* nút quay trở lại màn hình login */}
                <Button title='Back' onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        marginTop : 50,
        alignItems : 'center'
    },
    //style tổng cho 2 ô input
    input : {
        marginTop : 30,
        alignItems : 'center',
    },

    //style chỉ tiết cho nhập gmail, mật khẩu, xác nhận mật khẩu
    ip :{
        marginTop : 30,
        backgroundColor : '#bbe6f3',
        width : 300,
        height : 70,
        borderRadius : 50,
        textAlign : 'center',
        fontSize : 20
    },
    //style cho nút tạo tài khoản
    createAccount : {
        marginTop : 20,
        marginBottom : 20,
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