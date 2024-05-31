import React from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { profile } from "@/public/imageExport";
import { flatListItems } from "@/global-exports/flat-list-items";
import { sectionItems } from "@/global-exports/sectionList";

const Index = () => {
  return (
    //Main view component that wraps the other components
    <>
      <View>
        {/*The view component that wraps the column section of the views in the heading*/}
        <View>
          <Text>Hello, Devs</Text>
          <Text>14 Tasks today</Text>
        </View>
        <Image source={profile} style={{ alignSelf: "center" }} />
      </View>
      {/*the search bar component*/}
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Search"
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 8,
              margin: 10,
            }}
          />
        </KeyboardAvoidingView>
      </View>
      <View>
        <FlatList
          data={flatListItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.taskTitle}</Text>
              <Text>{item.taskQuantity}</Text>
              <Image source={item.image} />
            </View>
          )}
        />
        {/*ongoing task view*/}
        <View>
          <Text>Ongoing Tasks</Text>
          <View>
            <FlatList
              data={sectionItems}
              keyExtractor={(items) => items.sectionItem}
              renderItem={({ item }) => <Text>{item.sectionItem}</Text>}
            ></FlatList>
          </View>
        </View>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
