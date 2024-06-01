import React from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import { profile } from "@/public/imageExport";
import { flatListItems } from "@/global-exports/flat-list-items";
import { sectionItems } from "@/global-exports/sectionList";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-screens";

const Index = () => {
  return (
    //Main view component that wraps the other components
    <SafeAreaView style={{ backgroundColor: "#fef3c7" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.headerContentAlign}>
          {/*The view component that wraps the column section of the views in the heading*/}
          <View style={styles.columnFlex}>
            <Text style={styles.headerStyle}>Hello, Devs</Text>
            <Text>14 Tasks today</Text>
          </View>
          <Image source={profile} style={styles.profileImageSize} />
        </View>
        {/*the search bar component*/}
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "padding"}
          >
            <View
              style={[{ backgroundColor: "#fef3c7" }, { borderRadius: 10 }]}
            >
              <TextInput
                placeholder="Search"
                placeholderTextColor={"#000000"}
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  padding: 8,
                  margin: 10,
                }}
              />
              <SearchBar/>
            </View>
          </KeyboardAvoidingView>
        </View>
        {/*component of the FlatList of the categories*/}
        <View>
          {/*FlatList container*/}
          <View>
            <FlatList
              data={flatListItems}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => (
                <View style={styles.imageViewContainer}>
                  {/*FlatList first image container*/}
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle1}</Text>
                      <Text>{item.taskQuantity1}</Text>
                    </View>
                    <Image source={item.image1} style={styles.imageSize} />
                  </View>
                  {/*FlatList second image container*/}
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.miniTextContainer}>
                      <Text style={styles.mediumSize}>{item.taskTitle2}</Text>
                      <Text>{item.taskQuantity2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                </View>
              )}
              ListHeaderComponent={
                <Text style={{ fontSize: 20, fontWeight: 700, lineHeight: 24 }}>
                  Categories
                </Text>
              }
            />
          </View>
          {/*ongoing task view*/}
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 24,
                marginTop: 20,
              }}
            >
              Ongoing Tasks
            </Text>
            <View style={styles.centerList}>
              <FlatList
                data={sectionItems}
                keyExtractor={(items) => items.id}
                renderItem={({ item }) => (
                  <View style={styles.listContainer}>
                    <Text style={[styles.mediumSize, styles.leftText]}>
                      {item.sectionItem}
                    </Text>
                  </View>
                )}
              ></FlatList>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  headerContentAlign: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  listContainer: {
    width: 354,
    height: 128,
    borderRadius: 15,
    borderWidth: 1,
    left: 10,
    justifyContent: "center",
    gap: 10,
  },

  leftText: {
    left: 50,
    fontSize: 23,
  },
  centerList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },

  boldFont: {
    fontFamily: "Roboto-Bold",
  },

  imageViewContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
    flexWrap: "wrap",
    left: 1,
    top: 10,
  },
  lightFont: {
    fontFamily: "Roboto-Light",
  },

  miniTextContainer: {
    display: "flex",
    flexDirection: "column",
    width: 80,
    height: 35,
    left: 20,
  },

  imageSize: {
    width: 151,
    height: 132,
    left: 41,
  },

  headerStyle: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 38.4,
  },
  smallSize: {
    fontSize: 12,
  },
  mediumSize: {
    fontSize: 17,
    fontWeight: "bold",
  },
  largeFont: {
    fontSize: 24,
  },
  titleTask: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    justifyContent: "flex-start",
  },
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#fffbeb",
    borderRadius: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    borderRadius: 10,
  },
  flatListImage: {
    width: 186,
    height: 192,
    top: 249,
    left: 20,
    borderRadius: 15,
  },
  flatListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  ongoingTasks: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  ongoingTasksTitle: {
    fontSize: 20,
  },
  ongoingTasksList: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  ongoingTasksItem: {
    fontSize: 15,
  },
  profileImageSize: {
    width: 46,
    height: 45,
    borderRadius: 306,
  },
});
