import { Image, StyleSheet, Text, View } from "react-native";


function List({data}){
   return <View>
            <Image 
style={{height:250,width:"100%"}}
source={{
  uri: 'https://picsum.photos/200',
}}
/>
<Text style={styles.sectionDescription}><Text style={styles.sectionTitle}> Title </Text> : {data.item?.headline?.print_headline ??' Title'}</Text>
<Text style={styles.sectionDescription}> <Text style={styles.sectionTitle}>snippet</Text> : {data.item.snippet??' Snippet'}</Text>
<Text > <Text style={styles.sectionTitle}>Pulish Date</Text>: {new Date(data.item.pub_date).toDateString()??' Date'}</Text>
      </View>
}

export default List


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
});