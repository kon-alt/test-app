import React, {FC} from 'react';
import {ITabProps} from "../interfaces";



const RenderTab: FC<ITabProps> = ({children}) => {
    return (
        <div className="tabs__item">
            {children}
        </div>
    );
};

export default RenderTab;
