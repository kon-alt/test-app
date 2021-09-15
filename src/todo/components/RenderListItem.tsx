import React, {FC} from 'react';
import {Paragraph} from "../../fields";

const RenderListItem: FC<any> = ({children}) => {
    return (
        <div className="todo-list__item">
            <Paragraph>{children}</Paragraph>
        </div>
    );
};

export default RenderListItem;
