import React from "react";
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";

import {icons, COLORS, SIZES, FONTS} from '../constants'
import {CartQuantityButton, Header, IconButton} from '../components'

const Product = ({route, navigation}) => {


    //store the params from the home page

    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);

    React.useEffect(() => {
        let { item, currentLocation } = route.params;

        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })



    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }



    function renderHeader() {
        // return (
        //     <View style={{ flexDirection: 'row',paddingTop: 40 }}>
        //         <TouchableOpacity
        //             style={{
        //                 width: 50,
        //                 paddingLeft: SIZES.padding * 2,
        //                 justifyContent: 'center'
        //             }}
        //             onPress={() => navigation.goBack()}
        //         >
        //             <Image
        //                 source={icons.back}
        //                 resizeMode="contain"
        //                 style={{
        //                     width: 30,
        //                     height: 30
        //                 }}
        //             />
        //         </TouchableOpacity>

        //         {/* Food Name Section */}
        //         <View
        //             style={{
        //                 flex: 1,
        //                 alignItems: 'center',
        //                 justifyContent: 'center'
        //             }}
        //         >
        //             <View
        //                 style={{
        //                     height: 50,
        //                     alignItems: 'center',
        //                     justifyContent: 'center',
        //                     paddingHorizontal: SIZES.padding * 3,
        //                     borderRadius: SIZES.radius,
        //                     backgroundColor: COLORS.lightGray3
        //                 }}
        //             >
        //                 <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
        //             </View>
        //         </View>

        //         {/* <TouchableOpacity
        //             style={{
        //                 width: 50,
        //                 paddingRight: SIZES.padding * 2,
        //                 justifyContent: 'center'
        //             }}
        //         >
        //             <Image
        //                 source={icons.list}
        //                 resizeMode="contain"
        //                 style={{
        //                     width: 30,
        //                     height: 30
        //                 }}
        //             />
        //         </TouchableOpacity> */}

        //         <CartQuantityButton
        //             containerStyle={{
        //                 marginRight: 12
        //             }}
        //             quantity={3}
        //             onPress={() => navigation.navigate("Cart")}
        //         />
        //     </View>
        // )


        return (
            <Header
              title={restaurant?.name}
              containerStyle={{
                height: 48,
                marginHorizontal: SIZES.padding,
                marginBottom: 20,
              }}
              leftComponent={
                <IconButton
                  icon={icons.back2}
                  containerStyle={{
                    width: 42,
                    height: 44,
                    marginLeft: 5,
                    paddingRight: 2,
                    marginTop: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderRadius: 13,
                    borderColor: COLORS.darkgray,
                  }}
                  iconStyle={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.darkgray,
                  }}
                  onPress={() => navigation.goBack()}
                />
              }
              rightComponent={
                <CartQuantityButton 
                  quantity={3}
                  onPress={() => navigation.navigate("Cart")}
                />
              }
            />
        );
    }


    function renderProductInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            >
                {
                    restaurant?.menu.map((item, index) => (
                        <View
                            key={`menu-${index}`}
                            style={{ alignItems: 'center',paddingTop: 20 }}
                        >
                            <View style={{ height: 350 }}>
                                
                                {/* Food Image */}
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%",
                                    }}
                                />

                                {/* Quantity */}
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: +60,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                        onPress={() => editOrder("-", item.menuId, item.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>-</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                        onPress={() => editOrder("+", item.menuId, item.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Name & Description */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginBottom: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name} - {item.price.toFixed(2)} $</Text>
                                <Text style={{ ...FONTS.body3, textAlign: 'center' }}>{item.description}</Text>
                            </View>

                            {/* Calories */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        marginRight: 10
                                    }}
                                />

                                <Text style={{
                                    ...FONTS.body3, color: COLORS.darygray
                                }}>{item.calories.toFixed(2)} Cal</Text>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }


    function renderOrderDetails(){

        return(
            <View
                style={{
                    backgroundColor: COLORS.white,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 3,
                        borderBottomColor: COLORS.lightGray2,
                        borderBottomWidth: 1
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{getBasketItemCount()} items in Cart</Text>
                    <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 3
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={icons.pin}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={icons.master_card}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
                    </View>
                </View>

                {/* Order Button */}
                <View
                    style={{
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: SIZES.width * 0.9,
                            padding: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            borderRadius: SIZES.radius
                        }}
                        onPress={() => navigation.navigate("Cart")}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderProductInfo()}   
            {renderOrderDetails()}              
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Product;