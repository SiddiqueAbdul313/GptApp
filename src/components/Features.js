import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dummyData, icons, images, SIZES } from "../constants";

const Features = () => {
  return (
    <View>
      <Text style={{ fontSize: wp(6) }} className="font-semibold text-zinc-700 py-2">
        Features
      </Text>
    <ScrollView style={{ height: hp(60) }} className="space-y-4" showsVerticalScrollIndicator={false}>
      {dummyData.featuresData.slice(0,3).map((featureItem, index) => (
          <View className="p-4 rounded-lg space-y-2" style={{backgroundColor:featureItem.background}} key={index}>
          <View className="flex-row items-center space-x-1">
            <Image
            source={featureItem.image}
            style={{width:wp(6),height:wp(6),marginRight:SIZES.padding}}
            resizeMode="contain"
            />
            <Text
              className="font-semibold text-zinc-700"
              style={{ fontSize: wp(4), fontWeight: 700 }}
              >
              {featureItem.title}
            </Text>
          </View>
          <Text>{featureItem.description}</Text>
        </View>
      ))}
    </ScrollView>
      </View>
  );
};

export default Features;

const styles = StyleSheet.create({});
