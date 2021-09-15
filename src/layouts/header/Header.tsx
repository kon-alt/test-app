import React, {FC} from 'react';
import './styles.scss';

interface IHeaderProps {
    title : string
}

const Header: FC<IHeaderProps> = ({title}) => {
    return (
        <div className="header">
            <h1 className="header__head">{title}</h1>
        </div>
    );
};

export default Header;
