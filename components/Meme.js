import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useMemo} from 'react';
import { StyleSheet, Text, View, ScrollView, Image ,Button, useWindowDimensions, Alert,  Platform} from 'react-native';


const Meme = ({currentMeme, setCurrentMeme, createThreeButtonAlert, window}) => {
    
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: currentMeme ? 0 : '100%',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            zIndex: 1000,
            overflow: 'hidden',
            transition: 'left 1.5s ease',
            alignItems: 'center'
          }}>
                 <View style={styles.modalPageHeader}>
                   <Text style={{ color: 'white',
            fontSize: 25, margin: 5}} onPress={() => setCurrentMeme(false)}>{'<'}Back</Text>
                 </View>
         
                 <Image style={{
                   height: '50%',
                   resizeMode: 'contain',
                   width: window.width
                 }} source={{uri:currentMeme.url}}/>
         <View  style={{marginVertical: 50, width: '50%', height: 50, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                 <Text style={{width: '100%', textAlign:'center', marginVertical: 15}} onPress={() => createThreeButtonAlert(currentMeme.url)}>DOWNLOAD</Text>
                 </View>
                 </View>
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

  
  export default Meme