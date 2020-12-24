import React from 'react';
import PropType from 'prop-types';
import { block } from 'bem-cn';
import './comments.scss';
import icoClose from "../../assets/static/svg/close.svg";
import Icon from "../icon/icon";
import isNil from "lodash/isNil";

const cn = block('comments');
class Comments extends React.Component {
    static propTypes = {
        users: PropType.array.isRequired,
        currentUser: PropType.any,
        text: PropType.string
    };

    static defaultProps = {
        currentUser: null,
        text: ''
    };

    state = { text: '' };

    render() {
        const { comments, filmId, users, currentUser } = this.props;
        const disabled = isNil(currentUser);
        return (
            <div className={ cn() }>
                <h2 className={ cn('title') }>Комментарии</h2>
                <form className={ cn('form') }>
                    <textarea id="commentsText" disabled={ disabled } placeholder="Введите комментарий..." className={ cn('textarea', { disabled: disabled }) } value={ this.state.text }>{ this.state.text }</textarea>
                    <button disabled={ disabled} className={ cn('btn-publish', { disabled: disabled }) } type="submit">Опубликовать</button>
                </form>
                <section className={ cn('list') }>
                    {
                        comments.map((item) => item.filmId == filmId &&
                            <article className={cn('item')} key={ item.id }>
                                {
                                    item.userId === currentUser ? (<button className={cn('btn-close')} id={ item.id } type="button">
                                        <Icon className={cn('ico-close')} icon={icoClose} width="15px" height="15px"/>
                                    </button>) : null
                                }
                                <div className={cn('name')}>{ users[item.userId].name }</div>
                                <p className={cn('text')}>{ item.text }</p>
                            </article>
                        )
                    }
                </section>
            </div>
        );
    }
}
export default Comments;