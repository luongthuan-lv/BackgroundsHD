import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';


export default function Picture({ navigation }) {


  const [mang, setMang] = useState();


  //   fetch('https://www.flickr.com/services/rest', {
  // method: 'POST',
  // body: new URLSearchParams({
  // api_key: '24bf810575bc5bfbe2aef1ed6cd4517b',
  // user_id: '184057905@N03',
  // extras: 'views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
  // format: 'json',
  // method: 'flickr.favorites.getList',
  // nojsoncallback: '1',
  // per_page: '10',
  // page: '0',
  // }).toString(),
  // headers: {
  // "Content-Type": "application/x-www-form-urlencoded"
  // }
  // })
  // .then(response => response.text())
  // .then(json => alert(json))

  // truyền địa chỉ truy cập
  fetch('https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=d563ba7735076d92449b15bb29d210eb&user_id=187015156%40N07&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1')

    // phương thức nạp dữ liệu kiểu json
    .then(response => response.json())

    .then(json => setMang(json.photos.photo))
  return (
    <View style={styles.container}>
      <FlatList  // Hiện thị một list dữ liệu, nhược điểm không xếp so le được các hình có kích thước khác nhau
        style={{ marginTop: 20 }}
        data={mang} // tham số Data: mảng dữ liệu đầu vào
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => // item dùng để truy cập dữ liệu bên trong function và trả về một thành phần của dữ liệu
          <View
            style={{ width: 162, height: 112, borderWidth: 1, borderRadius: 5, margin: 5, borderColor: '#fff' }}>
            <TouchableOpacity onPress={() => {
              //sử dụng câu lệnh navigation.navigate để chuyển sang màn hình Photo
              navigation.navigate('Photo', {
                //truyền các  tham số title,...
                title: item.title,// trả về title của bức ảnh
                duongdan_l: item.url_l,
                duongdan_c: item.url_c,
                duongdan_z: item.url_z,

                width_l: item.width_l,
                height_l: item.height_l,

                width_c: item.width_c,
                height_c: item.height_c,

                width_z: item.width_z,
                height_z: item.height_z,




              }, console.log(item.url_l + '----' + item.height_l));

            }}>
              <Image style={{ width: 160, height: 110, borderRadius: 5 }}
                source={{ uri: item.url_l }} />

            </TouchableOpacity>
            <View style={styles.row} >
              <Image source={require('../assets/eye.png')} style={styles.icon} />
              <Text style={styles.txt}>{item.views}</Text>
            </View>
          </View>
        }
        keyExtractor={item => item.id}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    position: 'absolute',
    width: 160,
    height: 20,
    bottom: 0,
    backgroundColor: 'white',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  icon: {
    width: 15,
    height: 15,
    position: 'absolute',
    bottom: 2,
    right: 0,
    left: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    left: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  }
});
