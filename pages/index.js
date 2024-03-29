import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    link: {
        color: "blue",
    },
    textContainer: {
        alignItems: "center",
        marginTop: 16,
    },
    text: {
        alignItems: "center",
        fontSize: 24,
        marginBottom: 24,
    },
});

export default function App(props) {
    return (
        <View style={styles.container}>
            <Text accessibilityRole="header" style={styles.text}>
                React Native for Web & Next.js
            </Text>
            <Text
                style={styles.link}
                accessibilityRole="link"
                href={`/alternate`}
            >
                A universal link
            </Text>
            <View style={styles.textContainer}>
                <Text
                    accessibilityRole="header"
                    aria-level="2"
                    style={styles.text}
                >
                    Subheader
                </Text>
            </View>
            <Text>Calendar test</Text>
            <MyCalendar />
        </View>
    );
}

const MyCalendar = () => {
    const [selected, setSelected] = useState("");

    return (
        <Calendar
            onDayPress={(day) => {
                setSelected(day.dateString);
            }}
            markedDates={{
                [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: "orange",
                },
            }}
        />
    );
};
