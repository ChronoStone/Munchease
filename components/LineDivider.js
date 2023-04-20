import React from 'react';
import {
    View,
} from 'react-native';

import {COLORS} from '../constants'


const LineDivider = ({lineStyle}) => {
    return(
        <View
            style={{
                height: 2,
                width: "100%",
                marginVertical: 15,
                backgroundColor: COLORS.lightGray3,
                ...lineStyle
            }}
        />
    )
}

export default LineDivider;