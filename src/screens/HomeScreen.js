import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, dummyData, icons, images, SIZES } from "../constants";
import Features from "../components/Features";
import LottieView from "lottie-react-native";

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyData.dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const clearMessages = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  return (
    <View className="flex-1 bg-zinc-100">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={images.FeaturesBot}
            style={{
              height: hp(SIZES.padding2 + 3),
              width: wp(SIZES.padding2 * 2),
              marginTop: SIZES.padding,
            }}
            resizeMode="contain"
          />
        </View>

        {/* features | messages */}
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              className="text-zinc-800 font-semibold ml-1"
              style={{ fontSize: wp(5) }}
            >
              Assistant
            </Text>
            <View
              style={{ height: hp(60) }}
              className="bg-zinc-300 rounded-lg p-4"
            >
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                  if (message.role == "assistant") {
                    if (message.content.includes("https")) {
                      // ai image
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 rounded-2xl bg-teal-200 rounded-tl-none">
                            <Image
                              style={{
                                width: wp(70),
                                height: wp(60),
                              }}
                              source={{ uri: message.content }}
                              resizeMode="cover"
                              className="rounded-2xl"
                              onError={(e) =>
                                console.log(
                                  "Error loading image:",
                                  e.nativeEvent.error
                                )
                              }
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // text
                      return (
                        <View
                          key={index}
                          style={{ width: wp(70) }}
                          className="bg-white rounded-xl p-2 rounded-tl-none"
                        >
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    // user input
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{ width: wp(70) }}
                          className="bg-teal-200 rounded-xl p-2 rounded-tr-none"
                        >
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* recording, clear and stop button */}
        <View className="flex justify-center items-center">
          {recording ? (
            <TouchableOpacity className="justify-center items-center">
              <LottieView
                source={images.RecordingIcon}
                autoPlay
                loop
                style={{ width: wp(30), height: wp(30) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={images.MicrophoneIcon}
                style={{ width: wp(10), height: hp(15) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              className="bg-teal-200 rounded-2xl absolute right-2 px-6 py-2"
              activeOpacity={0.8}
              onPress={clearMessages}
            >
              <Text className="text-teal-950 tracking-wider">Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              className="bg-teal-200 rounded-2xl absolute left-2 px-6 py-2"
              activeOpacity={0.8}
              onPress={stopSpeaking}
            >
              <Image
                source={images.StopRecordingIcon}
                style={{ height: wp(6), width: wp(6) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
