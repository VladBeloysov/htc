import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import FilmCard from '../film-card/film-card';
import Comments from '../comments/comments';

const cn = block('page-detail');
class PageDetail extends React.Component {
    static propTypes = {
        films: PropType.array.isRequired,
        comments: PropType.array.isRequired,
        users: PropType.array.isRequired,
        currentUser: PropType.any
    };

    static defaultProps = {
        currentUser: null
    };

    render() {
        const { films, comments, match, users, currentUser } = this.props;
        return (
            <div className={ cn() }>
                <FilmCard film={ films[match.params.id] }/>
                <Comments
                    comments={ comments }
                    filmId={ match.params.id }
                    users={ users }
                    currentUser={ currentUser }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { films: state.films, comments: state.comments, users: state.users, currentUser: state.currentUser };
};

export default connect(mapStateToProps)(PageDetail);