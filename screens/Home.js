import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../Assets/logo.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
import AsyncStorage from 'react-native';

export default function Home({ navigation }) {

    let obj = {};

    const clickToSave = (k) => {
        console.log(k)
    }

    const [data, setData] = useState([])
    const apiHandle = axios.create({
        baseURL: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b5ff00fe77184fc48cd5d4f102ce1990",
    });


        setDataMain = async (key, value) => {
            try {
                console.log(key,value)
                await AsyncStorage.setItem(key, JSON.stringify(value));

            } catch (error) { }
        }
    

        getDataMain = async (key) => {
            try {
                // console.log(key)
                const item = await AsyncStorage.getItem(key);
                  console.log(JSON.parse(item))
            } catch (error) {

            }
          }
          
          removeItem= async (key) => {
            try {
              await AsyncStorage.removeItem(key);
            } catch (error) {}
          }

    const getData = () => {
        apiHandle.get("").then((e) => {
            setData(e.data.articles)
        });
    }



    useEffect(() => {
        getData()

    }, [])

    const styles = StyleSheet.create({
        main: {
            marginVertical: 10,
            paddingBottom: 45
        },
        mainInner: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: "black",
            color: "white",
            paddingVertical: 10
        },
        header: {
            flexDirection: 'row',
            paddingVertical: 10
        },
        headerImgView: {
            marginHorizontal: 10
        },
        headertImgInner: {
            width: 50,
            height: 50,
            borderRadius: 60
        },
        headerText: {
            marginTop: 4,
            color: "white"
        },
        headerTextInner: {
            color: "white"
        },
        titleMain: {
            margin: 5
        },
        centerMainImg: {
            width: 360,
            height: 210,
            resizeMode: 'contain'
        },
        colorBlack: {
            color: "black"
        },
        button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10
        },
        navMain: {
            flexDirection: "row",
            marginVertical: 10,
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center"
        },
        navBtn: {
            marginHorizontal: 10,
            backgroundColor: "black",
            borderRadius: 10
        },
        navBtnTxt: {
            color: "white",
            padding: 10
        }

    })
    return (
        <>
            <View style={styles.navMain} >
                <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.navBtnTxt} >Home Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('saved')}>
                    <Text style={styles.navBtnTxt} >Saved Page</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        {data.map((d, k) =>
                            <View key={k} style={styles.main}>
                                <View style={styles.mainInner}>
                                    <View style={styles.header}>
                                        <View style={styles.headerImgView}>
                                            <Image
                                                style={styles.headertImgInner}
                                                source={logo}
                                            />
                                        </View>
                                        <View style={styles.headerText}>
                                            <Text style={styles.headerTextInner}>MK News</Text>
                                            <Text style={styles.headerTextInner}>{d.publishedAt.substring(12, 19) + ' ' + d.publishedAt.substring(0, 10)}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.titleMain}>
                                        <Text style={styles.headerTextInner}>{d.title}</Text>
                                    </View>
                                    <View>
                                        {(d.urlToImage) ? <Image style={styles.centerMainImg} source={{ uri: d.urlToImage }} alt="loading" /> : <Text style={{ color: 'white', alignContent: "center", alignSelf: "center", justifyContent: "center" }}>Loading...</Text>}
                                    </View>
                                    <View style={styles.titleMain}>
                                        <Text style={styles.headerTextInner}>{d.description}</Text>
                                    </View>
                                    <View style={styles.titleMain}>
                                        <TouchableOpacity style={styles.button} onPress={() => setDataMain(k,d)}>
                                            <Text style={styles.colorBlack} >CLICK HERE TO SAVE</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity style={styles.button} onPress={() => getDataMain(k)}>
                                            <Text style={styles.colorBlack} >CLICK HERE TO SAVE</Text>
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            </View>

                        )}
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    );
}





// MAIN WORK
{/* <View key={k} style={styles.main}>
                                <View style={styles.mainInner}>
                                    <View style={styles.header}>
                                        <View style={styles.headerImgView}>
                                            <Image
                                                style={styles.headertImgInner}
                                                source={logo}
                                            />
                                        </View>
                                        <View style={styles.headerText}>
                                            <Text style={styles.headerTextInner}>MK News</Text>
                                            <Text style={styles.headerTextInner}>{d.publishedAt.substring(12, 19) + ' ' + d.publishedAt.substring(0, 10)}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.titleMain}>
                                        <Text style={styles.headerTextInner}>{d.title}</Text>
                                    </View>
                                    <View>
                                        {(d.urlToImage) ? <Image style={styles.centerMainImg} source={{ uri: d.urlToImage }} alt="loading" /> : <Text style={{ color: 'white', alignContent: "center", alignSelf: "center", justifyContent: "center" }}>Loading...</Text>}
                                    </View>
                                    <View style={styles.titleMain}>
                                        <Text style={styles.headerTextInner}>{d.description}</Text>
                                    </View>
                                    <View style={styles.titleMain}>
                                        <TouchableOpacity style={styles.button} onPress={() => clickToSave(k)}>
                                            <Text style={styles.colorBlack} >CLICK HERE TO SAVE</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> */}