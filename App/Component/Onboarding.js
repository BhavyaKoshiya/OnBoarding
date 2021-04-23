import React, { useState } from "react";
import { useRef } from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions, Animated, TouchableOpacity } from "react-native";
import { ArrowIcon } from "../assets/icon";

const DeviceWidth = Dimensions.get('screen').width;

export function Paginator({
    data,
    scrollX,
    activeDotWidth,
    dotStyle,
}) {
    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {

                const inputRange = [(i - 1) * DeviceWidth, i * DeviceWidth, (i + 1) * DeviceWidth];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, activeDotWidth ? activeDotWidth : 20, 10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp'
                })

                return <Animated.View
                    style={[styles.dot, dotStyle, { width: dotWidth, opacity }]}
                    key={i.toString()}
                />
            })}
        </View>
    )
}

export function OnBoarding({
    data,
    activeDotWidth,
    previousButton,
    nextButton,
    buttonIcon,
    buttonStyle,
    buttonTextStyle,
    buttonIconStyle,
    onSkip,
    skipButtonStyle,
    skipTextStyle,
    onFinish,
    imageStyle,
    titleStyle,
    descriptionTextStyle,
    dotStyle
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const renderItem = ({ item }) => {
        console.log(typeof (item.description));
        return (
            <View>
                <Image
                    source={item.image}
                    style={[styles.image, imageStyle, { width: DeviceWidth, resizeMode: 'contain', }]}
                />
                <View style={{ flex: 0.3, width: DeviceWidth }}>

                    <Text style={[styles.title, titleStyle]}>{item.title}</Text>
                    {typeof (item.description) == 'string' ?
                        <Text style={[styles.description, descriptionTextStyle]}>{item.description}</Text>
                        : <item.description />
                    }
                </View>
            </View>
        );
    }
    const nextSlide = () => {
        if (currentIndex < data.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            onLastItemReached;
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
        } else {
            console.log('First Item');
        }
    }

    return (
        <View
            style={styles.container}
        >
            {onSkip &&
                <View style={{ flexDirection: 'row', width: DeviceWidth, justifyContent: 'flex-end', }}>
                    <TouchableOpacity style={[skipButtonStyle]}
                        onPress={onSkip}
                    >
                        <Text style={[{ color: '#493d8a', paddingTop: 20, paddingRight: 20, fontSize: 20, }, skipTextStyle]}>Skip</Text>

                    </TouchableOpacity>
                </View>
            }

            <View style={{ flex: 3 }}>
                <FlatList
                    data={data}
                    style={{ width: DeviceWidth }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false
                        })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    ref={slidesRef}

                />
            </View>
            <Paginator data={data} dotStyle={dotStyle} activeDotWidth={activeDotWidth} scrollX={scrollX} />

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', }}>

                {previousButton &&
                    <TouchableOpacity style={[styles.button, buttonStyle]}
                        onPress={prevSlide}
                    >
                        {buttonIcon &&
                            <Image source={ArrowIcon} style={[styles.buttonIcon, { marginRight: 10, }, buttonIconStyle]} />
                        }
                        <Text style={[styles.buttonText, buttonTextStyle]}>Prev</Text>
                    </TouchableOpacity>}

                {nextButton && currentIndex < data.length - 1 &&
                    <TouchableOpacity style={[styles.button, buttonStyle]}
                        onPress={nextSlide}
                    >
                        <Text style={[styles.buttonText, buttonTextStyle]}>Next</Text>
                        {buttonIcon &&
                            <Image source={ArrowIcon} style={[styles.buttonIcon, buttonIconStyle, { marginLeft: 10, transform: [{ rotate: '180deg' }] }]} />
                        }
                    </TouchableOpacity>
                }

                {currentIndex == data.length - 1 && onFinish &&
                    <TouchableOpacity style={[styles.button, buttonStyle]}
                        onPress={onFinish}
                    >
                        <Text style={[styles.buttonText, buttonTextStyle]}>Finish</Text>

                    </TouchableOpacity>
                }

            </View>
            <View style={{ height: 20 }} />
        </View >
    );
};

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 8,
    },
    buttonIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: '#fff'
    },
    buttonText: {
        alignSelf: "center",
        color: '#fff',
        fontSize: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#493d8a',
        borderRadius: 20,
        height: 50,
        width: '30%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center'
    },
    description: {
        color: '#62656b',
        textAlign: 'center'
    },

});