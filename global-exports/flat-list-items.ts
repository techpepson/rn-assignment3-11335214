//image and texts to be mapped on by flatlist

import { ImageSourcePropType } from "react-native";

interface FlatTypes {
  taskTitle1: string;
  taskQuantity1: string;
  image1: ImageSourcePropType;
  id: string;
  taskTitle2: string;
  taskQuantity2: string;
  image2: ImageSourcePropType;
}

export const flatListItems: FlatTypes[] = [
  {
    taskTitle1: "Exercise",
    taskQuantity1: "12 Tasks",
    image1: require("../assets/images/meditate-woman.png"),
    id: "1",
    taskTitle2: "Study",
    taskQuantity2: "12 Tasks",
    image2: require("../assets/images/learningMan.png"),
  },
];
