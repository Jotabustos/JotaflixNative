import React, { Component } from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import _ from "lodash";
import { BASE_IMG_POSTER } from "../../config/imagePoster";

export default class view extends Component {
  render() {
    const { movie } = this.props;
    const source =
      movie && movie.poster_path
        ? { uri: `${BASE_IMG_POSTER}/${movie.poster_path}` }
        : null;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image source={source} style={styles.image} />
          <View style={styles.infoRow}>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{"Release"}</Text>
            <Text style={styles.value}>{movie.release_date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{"Ranking"}</Text>
            <Text style={styles.value}>{movie.vote_average}</Text>
          </View>
          <View style={styles.overviewRow}>
            <Text style={styles.overviewValue}>{movie.overview}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
