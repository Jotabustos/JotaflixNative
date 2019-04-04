import React, { Component } from "react";
import { Text, SafeAreaView, FlatList, RefreshControl } from "react-native";
import styles from "./styles";
import { MovieCell } from "../../widgets";

export default class view extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS HERE", props)
    this.state = {
      movies: [],
      isLoading: false,
      page: 1
    };
  }

  componentDidMount() {
   this.props.getMovies();
  }

  _onPress = house => {
    console.log("House pressed");
  };

  _keyExtractor = (item, index) => `${item.id}`;
  _renderItem = ({ item, index }) => (
    // onPress={this._onHouseTapped}
    <MovieCell movie={item} onPress={this._onPress} />
  );
  _renderNoResultsText = isLoading => {
    if (isLoading) {
      return null;
    }
    return <Text style={styles.noResults}>{"Sorry there are no results"}</Text>;
  };

  render() {
    const { movies, isLoading } = this.props;
    console.log("Movies here", movies)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={movies}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={2}
          ListEmptyComponent={_ => this._renderNoResultsText(isLoading)}
        />
      </SafeAreaView>
    );
  }
}
