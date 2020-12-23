import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_PAGE_ROUTE } from '../../constants/routes';
import { block } from 'bem-cn';

const cn = block('page-error');
class PageError extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={ cn() }>
                    <h1 className={ cn('header') }>
                        Такой страницы не существует :(
                    </h1>
                    <Link to={ MAIN_PAGE_ROUTE }>На главную страницу</Link>
                </div>
            </div>
        );
    }
}
export default PageError;