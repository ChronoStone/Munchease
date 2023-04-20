import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Animated,
    Modal,
    ScrollView
} from 'react-native'

import { SIZES, FONTS, COLORS, icons, constants } from "../constants";
import IconButton from "./IconButton";
import TextButton from "./TextButton";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';



const clients = [
    'Passenger',
    'Alanya Cafe',
    'Snack Salam',
];

const ModalSection = ({containerStyle, title, children}) => {
    return(
        <View
            style={{
                marginTop: SIZES.padding,
                ...containerStyle
            }}
        >
            <Text style={{...FONTS.h4}}> {title} </Text>
            {children}
        </View>
    )
}


const OrderModal = ({isVisible, onClose, onPress}) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current

    const [showOrderModal, setShowOrderModal] = React.useState(isVisible)

    const [payementMode, setPayementMode] = React.useState("")

    React.useEffect(() => {
        if(showOrderModal){
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false
            }).start();
        }else{
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false
            }).start(() => onClose())
        }
    }, [showOrderModal])


    const modalY = modalAnimatedValue.interpolate({
        inputRange : [0,1],
        outputRange : [SIZES.height, SIZES.height - 510]
    })



    function renderClients(){
        return(
            <ModalSection
                title= "Clients List"
                containerStyle={{
                    marginTop: 38
                }}
            >
                <SelectDropdown
                    data={clients}
                    // defaultValueByIndex={1}
                    // defaultValue={'Egypt'}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    defaultButtonText={' Select Client'}
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

            </ModalSection>

        )
    }



    function renderPayementMode(){
        return(
            <ModalSection
                title= "Payement Method"
                containerStyle={{
                    marginTop: 33
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: SIZES.radius2
                    }}
                >
                    {constants.payement_mode.map((item, index) => {
                        return(
                            <TextButton
                                key={`payement_mode-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color : item.id == payementMode ? COLORS.white : COLORS.darkgray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle={{
                                    width: "30%",
                                    height: 50,
                                    margin: 5,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    borderWidth: 1,
                                    borderColor: item.id == payementMode ? COLORS.lightGray : COLORS.lightGray3 ,                                  
                                    backgroundColor: item.id == payementMode ? COLORS.primary : COLORS.lightGray
                                }}
                                onPress={()=> {setPayementMode(item.id)}}
                            />
                        )
                    })}
                </View>
            </ModalSection>
        )
    }



    function renderPayementReference(){
        if(payementMode==2 || payementMode==3){
            return(
                <ModalSection
                    title= "Payement Reference"
                    containerStyle={{
                        marginTop: 30
                    }}
                >
    
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '85%',
                            height: 50,
                            marginTop: 15,
                            marginLeft: 5,
                            paddingHorizontal: 15,
                            backgroundColor: COLORS.lightGray2,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray3,
                        }}
                    >
                        <TextInput
                            style={{
                                flex: 1,
                                ...FONTS.body3
                            }}
                            placeholder={" Paste Here..."}
                            placeholderTextColor={COLORS.gray}
                            selectionColor={COLORS.darkgray}
                            showSoftInputOnFocus={false}
                        
                        />
                    </View>
                </ModalSection>
            )
        }
    }


    function renderFooter(navigation){
        return(
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    top:370,
                    left: 0,
                    right: 0,
                }}
            >
                <TextButton
                    buttonContainerStyle={{ 
                        height: 55,
                        width: "97%",
                        marginTop: 35,
                        borderRadius: SIZES.radius2,
                        backgroundColor: COLORS.primary
                    }}
                    label="Complete your Order"
                    onPress={onPress}
                />
            </View>
        )
    }


    return(
        <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            visible={isVisible}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7
                }}
            >
                { /* Transparent Background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowOrderModal(false)}
                >
                    <View 
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}
                    />                        
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position:"absolute",
                        left: 0,
                        top: modalY,
                        width: "100%",
                        height: "100%",
                        padding: 20,
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                >
                    {/* Header */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                        }}
                    >
                        <Text style={{flex: 1, ...FONTS.h3}}> 
                            Complete Order - C035
                        </Text>

                        <IconButton
                            containerStyle={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray,
                                width: 27,
                                height: 27
                            }}
                            onPress={() => setShowOrderModal(false)}
                        />
                    </View>

                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 250
                        }}
                    >

                        {/* Clients List */}
                        {renderClients()}  

                        {/* Payement Mode */}
                        {renderPayementMode()}

                        {/* Payement Reference */}
                        
                        {renderPayementReference()}                      

                        {/* Footer */}
                        {renderFooter()}

                        
                    </ScrollView>
                </Animated.View>

            </View>
        </Modal>
    )
}




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
      height: 48,
      marginTop: 15,
      backgroundColor: COLORS.lightGray2,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.lightGray3,
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
        paddingLeft: 6,
        ...FONTS.body3
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



export default OrderModal;