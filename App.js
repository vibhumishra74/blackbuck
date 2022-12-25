
import React, { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  NetInfo,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import List from './components/List';
import Grid from './components/grid';
import useFetchdata from './components/useFetchdata';
import { Provider, useDispatch, useSelector } from "react-redux";
import reduxstore from './redux/store';
import CheckConnection from './components/CheckConnection';



const AppWrapper = () => {
  const {store,persistor} = reduxstore()
  return (
    <Provider store={store}> 
     <PersistGate loading={null} persistor={persistor}>
      <App />
     </PersistGate>
    </Provider>
  )
}


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
const [page,setPage] = useState(0);
let [list,setList] = useState(true)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let network = CheckConnection()
  // console.log('network',network)
  const fetdata = useFetchdata(page);
  const {data,Loading,errormsg} = fetdata
 

  const renderItem = (data) => (

      list? <List data={data} /> : <Grid data={data} />
  );


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.btncontainer}>
    
      <Text style={styles.sectionContainer}>NEWS</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setList(!list)}
      >
        <Text>{!list?'List ':'Grid '} View</Text>
      </TouchableOpacity>
      </View>
    
      <View style={Loading || errormsg ? styles.marginbottomtrue:styles.marginbottom}>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReachedThreshold={0.5}
        onEndReached={()=>setPage((pre)=>pre+1)}
        />
        {Loading && <ActivityIndicator />}
        {errormsg && network &&<Text>sometings went wrong...</Text>}
        {errormsg && !network &&<Text>Please turn on your moile data</Text>}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 20,
    textAlign:'center' ,
    fontWeight: '700'
  },
  marginbottom:{
    paddingHorizontal:5,
    marginBottom:120
  },
  marginbottomtrue:{
    paddingHorizontal:5,
    marginBottom:200
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height:40
  },
  btncontainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10
  }
});

export default AppWrapper;
