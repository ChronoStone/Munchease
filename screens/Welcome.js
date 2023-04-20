import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";

import { TextButton } from "../components";

import { SIZES, FONTS, COLORS, images, icons } from "../constants";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';



const stores = [
    'Jersey store',
    'Nutrition stock',
    'Snacks shop',
];



const Welcome = ({ navigation }) => {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 100,
          paddingBottom: SIZES.padding * 2,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <KeyboardAwareScrollView
          keyboardDismissMode="on-dra g"
          contentContainerStyle={{
            flex: 1,
            paddingHorizontal: SIZES.padding * 1.7,
          }}
        >
          {/*App icon */}
          {/* <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              source={icons.logo_02}
              resizeMode="contain"
              style={{
                height: 100,
                width: 200,
              }}
            />
          </View> */}
  
          {/* Title and Subtitle */}
  
          <View
            style={{
              marginTop: SIZES.padding2,
              paddingTop: SIZES.padding2,
              alignItems: "center",
            }}
          >
            <Image
            source={icons.user}
            resizeMode="contain"
            style={{
                width: 100,
                height: 100,
            }}
            />

            <Text
                style={{
                    marginTop: SIZES.padding2 * 1.5,
                    ...FONTS.h2,
                }}
                >
                Welcome Mr.Sabih
            </Text>

            <Text
                style={{
                textAlign: "center",
                color: COLORS.darkgray,
                marginHorizontal: 20,
                marginTop: SIZES.base,
                ...FONTS.body3,
                }}
            >
                Please Choose a Store
          </Text>

                <SelectDropdown
                    data={stores}
                    // defaultValueByIndex={1}
                    // defaultValue={'Egypt'}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    defaultButtonText={'Select Store'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={COLORS.darkgray  } size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />


          </View>
  
        
          {/* Footer */}
  
          <View
            style={{
                marginTop: 300
            }}
          >
            <TextButton
              label="Continue"
              buttonContainerStyle={{
                height: 50,
                alignItems: "center",
                borderRadius: SIZES.radius2,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => navigation.navigate("Home")}
            />
  
            <View
              style={{
                marginTop: SIZES.padding,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.darkgray,
                  ...FONTS.body3,
                }}
              >
                By signing up, you agree to our
              </Text>
              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.body3,
                }}
              >
                Terms and Conditions
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  };



  const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 10,
    },
    header: {
      flexDirection: 'row',
      width,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
    saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
    viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: '10%',
      paddingBottom: '20%',
    },
  
    dropdown1BtnStyle: {
      width: '80%',
      height: 49,
      marginTop: 15,
      backgroundColor: COLORS.lightGray4,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.gray2,
    },
    dropdown1BtnTxtStyle: {
        color: COLORS.darkgray, 
        textAlign: 'left',
        ...FONTS.body3
    },
    
    dropdown1DropdownStyle: {
        backgroundColor: COLORS.lightGray,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    dropdown1RowStyle: {
        backgroundColor: COLORS.lightGray,
        borderBottomColor: COLORS.lightGray3,
        borderBottomWidth: 1.5
    },
    dropdown1RowTxtStyle: {
        color: COLORS.darkGray, 
        textAlign: 'left',
        paddingLeft: 6
    },
  
    dropdown2BtnStyle: {
      width: '80%',
      height: 50,
      backgroundColor: '#444',
      borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#444',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {
        backgroundColor: COLORS.lightGray, 
        borderBottomColor: COLORS.lightGray3,
        borderBottomWidth: 1.5
    },
    dropdown2RowTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
  });


  
  export default Welcome;
  