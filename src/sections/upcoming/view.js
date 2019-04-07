import React, { Component } from "react";
import { Text, SafeAreaView, FlatList, RefreshControl } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { MovieCell } from "../../widgets";
import * as colors from "../../commons/colors";

export default class view extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
      page: 1
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  _onPress = movie => {
    console.log("Movieeee here", movie)
    Actions.Detail({movie})
  };

  _keyExtractor = (item, index) => `${item.id}`;

  _renderItem = ({ item, index }) => (
    <MovieCell movie={item} onPress={this._onPress} />
  );

  _renderNoResultsText = isLoading => {
    if (isLoading) {
      return null;
    }
    return <Text style={styles.noResults}>{"Sorry there are no results"}</Text>;
  };

  _refreshMoviesInPage = () => {
    this.props.getMovies(this.props.page);
  };

  _getNextPageMovies = () => {
    const newPage = this.state.page + 1;
    this.props.getMoviesInPage(newPage);
    this.setState({ page: newPage });
  };

  render() {
    const { movies, isLoading } = this.props;
    console.log("MOVIES HERE", movies);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={movies}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={2}
          ListEmptyComponent={_ => this._renderNoResultsText(isLoading)}
          refreshControl={
            <RefreshControl
              onRefresh={this._refreshMoviesInPage}
              refreshing={isLoading}
              tintColor={colors.white} // iOS
              colors={[colors.white]} // Android
            />
          }
          onEndReached={this._getNextPageMovies}
        />
      </SafeAreaView>
    );
  }
}
