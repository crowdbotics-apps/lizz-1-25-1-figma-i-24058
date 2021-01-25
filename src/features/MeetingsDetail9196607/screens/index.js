import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10416_89}>
        <View style={styles.View_10416_90} />
        <View style={styles.View_10416_91}>
          <Text style={styles.Text_10416_91}>Brandon Robertson</Text>
        </View>
        <View style={styles.View_10416_92}>
          <Text style={styles.Text_10416_92}>Points to discuss</Text>
        </View>
        <View style={styles.View_10416_93}>
          <Text style={styles.Text_10416_93}>11:30 - 12:30</Text>
        </View>
        <View style={styles.View_10416_94}>
          <Text style={styles.Text_10416_94}>25/02/2020</Text>
        </View>
        <View style={styles.View_10416_95}>
          <Text style={styles.Text_10416_95}>
            Carrer de Corsega 24, Barcelona
          </Text>
        </View>
        <View style={styles.View_10416_96}>
          <Text style={styles.Text_10416_96}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            ipsum id tellus aliquam libero ullamcorper suspendisse. Sed elit
            tempor, augue enim. Nec velit aliquam varius sem egestas felis sit.
            Sem ut at amet, tincidunt.
          </Text>
        </View>
        <View style={styles.View_10416_97}>
          <Text style={styles.Text_10416_97}>Create Tutorial Videos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8da/dd23/06630318531755189cdd21f66f55fcda"
          }}
          style={styles.ImageBackground_10416_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55d3/656e/a3fce5763653b3a183225b28a585a026"
          }}
          style={styles.ImageBackground_10416_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f0/4b17/e41fee34999421ca9247ddfac0533a8e"
          }}
          style={styles.ImageBackground_10416_100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7727/75ae/7d0d13bf5dfb97b7d877174a3475b144"
          }}
          style={styles.ImageBackground_10416_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a7e/73a9/99f3017516f7072b4f43a70c13591524"
          }}
          style={styles.ImageBackground_10416_102}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10416_89: {
    width: 375,
    minWidth: 375,
    height: 690,
    minHeight: 690,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10416_90: {
    width: 375,
    minWidth: 375,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(136, 177, 216, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34
  },
  View_10416_91: {
    width: 206,
    minWidth: 206,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 231
  },
  Text_10416_91: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_92: {
    width: 206,
    minWidth: 206,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 492
  },
  Text_10416_92: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_93: {
    width: 206,
    minWidth: 206,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 314
  },
  Text_10416_93: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_94: {
    width: 206,
    minWidth: 206,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 356
  },
  Text_10416_94: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_95: {
    width: 260,
    minWidth: 260,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 398
  },
  Text_10416_95: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_96: {
    width: 324,
    minWidth: 324,
    minHeight: 163,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 527
  },
  Text_10416_96: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_97: {
    width: 341,
    minWidth: 341,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 137
  },
  Text_10416_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10416_98: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 314
  },
  ImageBackground_10416_99: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 356
  },
  ImageBackground_10416_100: {
    width: 18.28125,
    minWidth: 18.28125,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.859375,
    top: 395
  },
  ImageBackground_10416_101: {
    width: 317,
    minWidth: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 464
  },
  ImageBackground_10416_102: {
    width: 28,
    height: 28,
    top: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
