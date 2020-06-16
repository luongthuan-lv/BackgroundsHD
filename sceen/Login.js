// import thư viện useState
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// nhớ thêm giá trị navigation ở function Login
export default function Login({ navigation }) {

  //Khai báo 2 biến state là name và pass với 2 phương thức lần lượt là setName và setPass
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  // Có thể gắn trực ở giá trị ở trong useState() hoặc gắn thông qua phương thức

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, marginBottom: 10, paddingLeft: 10, borderColor: 'green', borderWidth: 1, borderRadius: 10, width: 250 }}
        placeholder='Email Address'

        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={{ height: 40, marginBottom: 10, paddingLeft: 10, borderColor: 'green', borderWidth: 1, borderRadius: 10, width: 250 }}
        placeholder='PassWord'
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
        value={pass}
      />
      <Button
        title="Login"
        color="green"
        onPress={() => {
          //Http request dùng để lấy nội dung bằng cách gọi đơn giản nhất từ URL, ta chỉ cần đặt url đó trong fetch
          // truyền địa chỉ truy cập
          fetch('https://jsonplaceholder.typicode.com/posts/1', {
            // POST và GET dùng để lấy dữ liệu từ server
            // Nên sử dụng phương thức POST trong trường hợp cần tạo một tài nguyên: vd như đăng ký tài khoản.
            // Nên sử dụng phương thức GET trong trường hợp bạn cần lấy dữ liệu của một tài nguyên: vd như lấy dữ liệu hình ảnh,video,nội dung.
            method: 'POST',
            body: JSON.stringify({
              title: name,
              body: pass,
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            // phương thức nạp dữ liệu kiểu json
            .then(response => response.json())
            .then(json => {

              if (name == null || pass == null) {
                alert("Ban chua nhap tai khoan mat khau");
              } else {
                if (name == 'Admin' && pass == "admin") {
                  alert("Login thanh cong");

                  //sử dụng câu lệnh navigation.navigate để chuyển sang màn hình Picture
                  navigation.navigate('Picture');
                } else {
                  alert("Tai khoan va mat khau khong dung!");
                }
              }
            })
        }}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
