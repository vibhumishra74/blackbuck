import { Image, StyleSheet, Text, View } from "react-native";



function Grid({data}){
    return <>
     <View style={styles.grid}>
        <View style={styles.grid_4}>

            <Image 
style={{height:100,width:"100%"}}
source={{
  uri: 'https://picsum.photos/200',
}}
/>
</View>
<View style={styles.gridLeft}>
<Text style={styles.sectionDescription}><Text style={styles.sectionTitle}> Title </Text> : {data.item?.headline?.print_headline ??' Title'}</Text>
<Text style={styles.sectionDescription}> <Text style={styles.sectionTitle}>snippet</Text> : {data.item.snippet??' Snippet'}</Text>
<Text > <Text style={styles.sectionTitle}>Pulish Date</Text>: {new Date(data.item.pub_date).toDateString()??' Date'}</Text>
  </View>
  </View>
  <View style={styles.borderBottom} />
    </>
}

export default Grid



const styles = StyleSheet.create({
  
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: '400',
    },
    borderBottom:{
      borderBottomColor: 'gray',
      borderBottomWidth: 2,
      width: '100%',
      height: 1,
      marginVertical: 5
    },
    grid:{
      display:'flex',
      flexDirection:'row',
      flex:1,
      alignItems:'center'
    },
    gridLeft:{
      flex:.6,
      marginLeft:10
    },
    grid_4:{
      flex:.4
    },
  });