import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useMemo} from 'react';
import { StyleSheet, Text, View, ScrollView, Image ,Button, useWindowDimensions, Alert,  Platform} from 'react-native';


const Feed = ({memes, setCurrentMeme, currentMeme}) => {
    return (
        <ScrollView style={{width: '100%',marginTop: 10,height: '100%',
      overflow: currentMeme ? 'hidden' : 'auto'}}>
        {memes && memes.length > 0 && memes.map(el => {
          return <View key={el.id} style={styles.memeItem}>
            <Image style={styles.memeItemImage} source={{uri: el.url}}/>
            <Text onPress={() => setCurrentMeme(el)} style={styles.memeItemTitle}>
              {el.name} fff
            </Text>
          </View>
        })}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  
    memeItem: {
      width: '100%',
      height: 220,
      marginVertical: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 7,
      overflow: 'hidden'
    },
    memeItemImage: {
      width: '100%',
      height: 180,
   },
   memeItemTitle: {
     fontSize: 20,
     overflow: 'hidden',
   },
   modalPage: {
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     backgroundColor: 'black',
     zIndex: 1000,
     overflow: 'hidden'
   },
   modalPageHeader: {
     height: 60,
     width: '100%',
     backgroundColor: 'rgba(255, 255, 255, 0.5)',
     justifyContent: 'center'
   },
   modalPageImage: {
     height: 500,
     width: '100%'
   }
  });

  export default Feed