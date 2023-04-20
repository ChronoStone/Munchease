import React from "react";
import {
    View,
    Text,
    Platform
} from "react-native";

import {TextButton, LineDivider} from "../components"

import { LinearGradient } from 'expo-linear-gradient';

import {COLORS, FONTS, SIZES, icons} from "../constants"

const Footer = ({subTotal, shippingFee, total, onPress}) => {
    return(
        <View style={{paddingBottom: 15}}>
            {/* Shadow */}

            <LinearGradient
                start={{x:0, y:0}}
                end={{x:0, y:1}}
                colors={[COLORS.transparent, COLORS.gray2]}
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 0,
                    right: 0,
                    height: Platform.OS === 'ios' ? 200 : 50,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            />

            {/* Order Details */}

            <View
                style={{
                    padding: SIZES.padding*2,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* SubTotal */}
                <View
                    style={{flexDirection: 'row'}}
                >
                    <Text style={{flex: 1, ...FONTS.body3}}>
                        Subtotal
                    </Text>

                    <Text style={{...FONTS.h4}}>
                        {subTotal.toFixed(2)} $
                    </Text>
                </View>


                {/* Shipping Fee */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        marginBottom: SIZES.padding
                    }}
                >
                    <Text style={{flex: 1, ...FONTS.body3}}>
                        Order Discount
                    </Text>

                    <Text style={{...FONTS.h4}}>
                        {shippingFee.toFixed(2)} %
                    </Text>
                </View>


                <LineDivider/>

                {/* Total */}

                <View 
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding
                    }}
                >
                    <Text style={{flex: 1, ...FONTS.h2}}>
                        Total :
                    </Text>

                    <Text style={{...FONTS.h2}}>
                        {total.toFixed(2)} $
                    </Text>
                </View>

                {/* Order Button */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                >
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        width: '60%',
                        marginTop: SIZES.padding2,
                        marginRight: 15,
                        borderRadius: SIZES.radius2,
                        backgroundColor: COLORS.gray,
                    }}
                    label="Reset Session"
                />
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        width: '40%',
                        marginTop: SIZES.padding2,
                        borderRadius: SIZES.radius2,
                        backgroundColor: COLORS.primary
                    }}
                    label="Order"
                    onPress={onPress}
                />
                </View>

            </View>
        </View>
    )
}

export default Footer;