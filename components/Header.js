import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { FONTS, COLORS , SIZES} from '../constants'

const Header = ({
    //props
    containerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent
}) => {
    return(
        <View 
            style={{
                height: 60,
                flexDirection: 'row',
                marginTop: 40,
                ...containerStyle
            }}
        >
            {
                leftComponent
            }

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View 
                    style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius
                    }}
                >
                    <Text style={{...FONTS.h3 }}>{title}</Text>
                </View>
            </View>

            {
                rightComponent
            }

        </View>
    )
}

export default Header;