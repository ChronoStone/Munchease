import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { Header, IconButton, CartQuantityButton } from "../components";

export default function CodeScanner ({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet Scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      {renderHeader()}
      <View style={styles.container}>
        <Text style={{...FONTS.h3}}>Requesting for Camera Permission</Text>
      </View>
    </View>

    );
  }
  if (hasPermission === false) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
        }}
      >
        {renderHeader()}
        <View style={styles.container}>
          <Text style={{ margin: 10, ...FONTS.h3 }}>No access to Camera</Text>

          <TouchableOpacity
            style={{
              width: 150,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: 8,
            }}
            onPress={() => askForCameraPermission()}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Allow Camera</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }


  // Header rendering

  function renderHeader() {
    return (
      <Header
        title="Scanner"
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


  // Return the View
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      {renderHeader()}
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 500, width: 500 }}
          />
        </View>
        <Text style={styles.maintext}>{text}</Text>

        {/* {scanned && (
          <Button
            title={"Scan again ?"}
            onPress={() => setScanned(false)}
            color="tomato"
          />
        )} */}
        {(
          <TouchableOpacity
            style={{
              width: 200,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: 8,
            }}
            onPress={() => setScanned(false)}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Scan Again</Text>
          </TouchableOpacity>          
        )}

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
    marginVertical: 75,
  },
  maintext: {
    fontSize: 19,
    margin: 25,
    ...FONTS.h3
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 280,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: COLORS.primary,
  },
});

