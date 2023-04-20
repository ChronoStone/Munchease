import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";

import {
  Header,
  IconButton,
  CartQuantityButton,
  StepperInput,
  Footer,
  OrderModal
} from "../components";


import { icons, images, SIZES, COLORS, dummyData, FONTS } from "../constants";

import { SwipeListView } from "react-native-swipe-list-view";

const Cart = ({ navigation }) => {


  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  const [emptyCart, setEmptyCart] = React.useState(false);

  const [showOrderModal, setShowOrderModal] = React.useState(false);

  // Handler

  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );

    setMyCartList(newMyCartList);
  }

  function clearCartHandler(){
    let newMyCartList = [...myCartList];
    newMyCartList=[];
    setMyCartList(newMyCartList);
    setEmptyCart(true);
  }

  function removeMyCartHandler(id) {
    let newMyCartList = [...myCartList];
    const index = newMyCartList.findIndex((cart) => cart.id === id);
    // splice meth to remove the item
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
    if(newMyCartList.length==0){
      setEmptyCart(true)
    }
  }

  // Render

  function renderHeader() {
    return (
      <Header
        title="My Cart"
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
              borderColor: COLORS.gray,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{
              width: 42,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 13,
              backgroundColor: COLORS.lightOrange,
            }}
            onPress={() => clearCartHandler()}
          >
            <Image
              source={icons.delete_icon}
              style={{
                width: 22,
                height: 22,
                tintColor: COLORS.black,
              }}
            />
      
          </TouchableOpacity>
        }
      />
    );
  }


  function renderEmptyCart(){
    return(
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom:280,
          left: 0,
          right: 0,
        }}
      >
        <Image
          source={images.empty_cart}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
          }}
        />

        <Text
          style={{
            marginTop: SIZES.padding2 * 1.5,
            color: COLORS.darkGray,
            ...FONTS.h2,
          }}
        >
          Your Cart is empty !
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            marginHorizontal: 35,
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          Looks like you haven't added anything to your cart yet.
        </Text>

      </View>
    )
  }


  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: 5,
          paddingHorizontal: SIZES.padding * 1.5,
          paddingBottom: 40,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray3,
              ...styles.cartItemContainer,
            }}
          >
            {/*Food image*/}
            <View
              style={{
                width: 90,
                height: 100,
                marginLeft: -10,
              }}
            >
              <Image
                source={data.item.image}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 10,
                }}
              />
            </View>

            {/*Food details*/}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ ...FONTS.h5, marginBottom: 5 }}>
                {data.item.name}
              </Text>
              <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
                ${data.item.price}
              </Text>
            </View>

            {/*Quantity*/}
            <StepperInput
              containerStyle={{
                height: 50,
                width: 115,
                backgroundColor: COLORS.white,
              }}
              value={data.item.qty}
              onAdd={() =>
                updateQuantityHandler(data.item.qty + 1, data.item.id)
              }
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id);
                }
              }}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{
              marginRight: 10,
            }}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Empty Cart Design */}
      {emptyCart && renderEmptyCart()}

      {/* Cart List */}
      {renderCartList()}

      {/* Order Details */}
      {!emptyCart && 
        <Footer
          subTotal={37.97}
          shippingFee={0}
          total={37.97}
          onPress={() => setShowOrderModal(true)}
        />
      }

      {/* Modal Section */}
      {showOrderModal  && 
        <OrderModal
          isVisible = {showOrderModal}
          onClose = {() => setShowOrderModal(false)}
          onPress={() => {
            navigation.navigate("Success");
            setShowOrderModal(false)}
          }
        />
      }


    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius2,
    paddingHorizontal: SIZES.radius2,
    borderRadius: SIZES.radius2,
  },
});

export default Cart;
