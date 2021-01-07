import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import FilmCard from '../film-card/film-card';
import Comments from '../comments/comments';
import { addComment, deleteComment } from "../../store/actions/index";

const cn = block('page-detail');
class PageDetail extends React.Component {
    static propTypes = {
        addComment: PropType.func.isRequired,
        deleteComment: PropType.func.isRequired,
        films: PropType.array.isRequired,
        comments: PropType.array.isRequired,
        users: PropType.array.isRequired,
        currentUser: PropType.number
    };

    static defaultProps = {
        currentUser: null
    };

    handleAddComment = (comment) => {
        const filmId = Number.parseInt(this.props.match.params.id);
        const userId = this.props.currentUser;
        this.props.addComment(filmId, userId, comment );
    };

    handleDeleteComment = (id) => {
        this.props.deleteComment(id);
    };

    render() {
        const { films, comments, match, users, currentUser } = this.props;
        return (
            <div className={ cn() }>
                <FilmCard film={ films[match.params.id] }/>
                <Comments
                    onCommentAdd={ this.handleAddComment }
                    onCommentDelete={ this.handleDeleteComment }
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

const mapDispatchToProps = { addComment, deleteComment };

export default connect(mapStateToProps, mapDispatchToProps)(PageDetail);