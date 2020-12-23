import React from 'react';
import { block } from 'bem-cn';

const cn = block('page-detail');
class PageDetail extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={ cn() }>
                    Детальная страница
                </div>
            </div>
        );
    }
}
export default PageDetail;