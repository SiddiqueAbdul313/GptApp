import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import images from "../constants/images";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-around bg-zinc-100">
      <View className="space-y-2">
        <Text
          style={{ fontSize: wp(10) }}
          className="text-center font-bold text-zinc-800"
        >
          PowerMind
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center tracking-wider text-zinc-800 font-medium"
        >
          Power the future, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={images.chatImage}
          style={{ width: wp(70), height: wp(70) }}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-teal-300 mx-5 p-3 rounded-lg flex items-center justify-center"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text
          style={{ fontSize: wp(5) }}
          className="text-center text-black font-bold"
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
