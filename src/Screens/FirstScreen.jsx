import * as React from "react";
import { Image, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily } from "../styles/GlobalStyle";

const FirstScreen = () => {
    return (
        <LinearGradient
            style={styles.FirstScreen}
            locations={[0, 1]}
            colors={['#00bfff', '#1e90ff']}
            useAngle={true}
            angle={180}
        >

            <Image
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../assets/Image1.png")}
            />

            <Text style={styles.posyanduJabung}>
                <Text style={styles.posyandu}>Posyandu</Text>
                <Text style={styles.jabung}> Jabung</Text>
            </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    imageIcon: {
        top: 250,
        left: "30%",
        width: 150,
        height: 150,
        position: "absolute",
        overflow: "hidden",
    },
    posyandu: {
        fontWeight: "500",
        fontFamily: FontFamily.interSemiBold,
    },
    jabung: {
        fontWeight: "800",
        fontFamily: FontFamily.interExtraBold,
    },
    posyanduJabung: {
        top: 420,
        left: "28%",
        fontSize: 24,
        letterSpacing: -1.3,
        textTransform: "capitalize",
        color: "#000",
        textAlign: "center",
        position: "absolute",
    },
    FirstScreen: {
        borderRadius: 0,
        flex: 1,
        width: "100%",
        height: 800,
        backgroundColor: "transparent",
        overflow: "hidden",
    },
});

export default FirstScreen;
