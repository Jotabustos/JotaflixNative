import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { BASE_IMG_POSTER } from "../../config/imagePoster";
import styles from "./styles";

export default class view extends Component {
  _onCellTapped = () => {
    const { house } = this.props;
    this.props.onPress(house);
  };

  render() {
    const { movie } = this.props;
    const source =
      movie && movie.poster_path
        ? { uri: `${BASE_IMG_POSTER}/${movie.poster_path}` }
        : null;

    return (
      <TouchableOpacity
        onPress={() => this._onCellTapped()}
        style={styles.cell}
      >
        <Image source={source} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

view.defaultProps = {
  movie: {}
};
