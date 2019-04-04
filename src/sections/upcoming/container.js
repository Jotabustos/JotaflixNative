import {connect} from 'react-redux'
import view from './view'
import { getMovies, getMoviesInPage } from '../../redux/upcoming/actions';

const mapStateToProps = state => ({
  movies: state.upcoming.movies,
  isLoading: state.upcoming.isLoading,
  page: state.upcoming.page
});

export default connect(
  mapStateToProps,
    { getMovies, getMoviesInPage }
)(view);