import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import logo from "./assets/logo.png";
import film from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import jessica from "./assets/jessica.jpg";
import anne from "./assets/anne.jpg";
import mackenzie from "./assets/mackenzie.jpg";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light"></StatusBar>
      <ScrollView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={{ backgroundColor: "#1D1D1D", marginBottom: 10 }}>
          <Text style={styles.title}>Interstellar</Text>
          <View style={styles.infosMovie}>
            <Text style={styles.moreInfosMovie}>2014</Text>
            <Text style={styles.moreInfosMovie}>PG-13</Text>
            <Text style={styles.moreInfosMovie}>2h 49min</Text>
            <Text style={styles.moreInfosMovie}>Adventure, Drama, Sci-Fi</Text>
          </View>
          <View>
            <View style={styles.resume}>
              <Image style={styles.imageFilm} source={film} />
              <View style={styles.containerResume}>
                <Text style={styles.resumeText}>
                  A team of explorers travel trhough a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableOpacity>
                  <Text style={styles.button}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <View style={styles.infosRatingContainer}>
              <FontAwesome
                name="star"
                size={24}
                color="#E6B91E"
                marginBottom={5}
              />
              <Text style={styles.titleRatingContainer}>8.6/10</Text>
              <Text style={styles.underTitleRating}>1.1 M</Text>
            </View>
            <View style={styles.infosRatingContainer}>
              <FontAwesome
                name="star-o"
                size={24}
                color="#FDFDFD"
                marginBottom={5}
              />
              <Text style={styles.titleRatingContainer}>RATE THIS</Text>
            </View>
            <View style={styles.infosRatingContainer}>
              <Text style={styles.iconScore}>74</Text>
              <Text style={styles.smallTitleRating}>Metascore</Text>
              <Text style={styles.underTitleRating}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#1D1D1D",
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
        >
          <View style={styles.topBilledCast}>
            <Text style={styles.titleTopBilledCast}>Top Billed Cast</Text>
            <Text style={styles.seeAllCast}>SEE ALL</Text>
          </View>
          <ScrollView contentContainerStyle={{ gap: 10 }} horizontal={true}>
            <View>
              <Image style={styles.imageActor} source={matthew} />
              <Text
                style={styles.nameActor}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Matthew McConaughey
              </Text>
              <Text style={styles.nameMovieActor}>Cooper</Text>
            </View>
            <View>
              <Image style={styles.imageActor} source={anne} />
              <Text style={styles.nameActor}>Anne Hathaway</Text>
              <Text style={styles.nameMovieActor}>Brand</Text>
            </View>
            <View>
              <Image style={styles.imageActor} source={jessica} />
              <Text style={styles.nameActor}>Jessica Chastain</Text>
              <Text style={styles.nameMovieActor}>Murph</Text>
            </View>
            <View>
              <Image style={styles.imageActor} source={mackenzie} />
              <Text style={styles.nameActor}>Mackenzie Foy</Text>
              <Text style={styles.nameMovieActor}>Murph</Text>
            </View>
          </ScrollView>
          <Text style={styles.titleWorkers}>Director</Text>
          <Text style={styles.nameWorkers}>Christopher Nolan</Text>
          <Text style={styles.titleWorkers}>Writters</Text>
          <Text style={styles.nameWorkers}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: "#393939", padding: 10 },

  logo: { width: 60, height: 30 },

  title: {
    color: "white",
    fontSize: 36,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  infosMovie: {
    flexDirection: "row",

    gap: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  moreInfosMovie: { color: "#969696", fontSize: 12 },

  resume: { flexDirection: "row", paddingHorizontal: 10, marginBottom: 10 },

  imageFilm: { width: 100, height: 150, flex: 1 },

  containerResume: { flex: 2.5 },

  resumeText: {
    color: "#EAEAEA",
    paddingHorizontal: 15,
    lineHeight: 20,
    fontSize: 12,
  },

  button: {
    backgroundColor: "#0277BD",
    color: "#EFF6F9",
    textAlign: "center",
    marginLeft: 20,
    marginTop: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },

  ratingContainer: {
    flexDirection: "row",
  },

  infosRatingContainer: { flex: 1, alignItems: "center", marginVertical: 10 },

  titleRatingContainer: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },

  underTitleRating: { color: "#747474", fontSize: 12 },

  smallTitleRating: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 12,
  },

  iconScore: {
    backgroundColor: "#61C74F",
    padding: 2,
    color: "#FDFDFD",
    fontWeight: "bold",
    marginBottom: 5,
  },

  topBilledCast: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  titleTopBilledCast: { color: "#E5E5E5", fontSize: 20, fontWeight: "bold" },

  seeAllCast: { color: "#0277BD", fontWeight: "bold", fontSize: 12 },

  imageActor: {
    height: 180,
    width: 140,
    marginBottom: 10,
    objectFit: "contain",
  },

  nameActor: {
    width: 130,
    paddingHorizontal: 10,
    marginBottom: 5,
    color: "#DADADA",
    fontSize: 12,
  },

  nameMovieActor: {
    color: "#8B8B8B",
    marginBottom: 5,
    fontSize: 10,
    paddingHorizontal: 10,
  },

  titleWorkers: {
    color: "#DADADA",
    fontSize: 12,
    marginTop: 10,
  },

  nameWorkers: {
    color: "#8B8B8B",
    marginBottom: 5,
    fontSize: 10,
    marginBottom: 10,
  },
});
