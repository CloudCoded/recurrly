import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/sign-in">Go to Sign In</Link>
    </View>
  );
};

export default SignUp;
