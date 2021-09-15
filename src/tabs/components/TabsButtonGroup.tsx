import React, {FC} from 'react';
import {Button} from "../../fields";
import {ITabsButtonProps} from "../interfaces";


export const TabsButtonGroup: FC<ITabsButtonProps> = (
    {
        dataButton,
        handle
    }
) => {
    return (
        <div className="tabs-button-group">
            {dataButton.map(
                (i: string, index: number) =>
                   (<Button key={index}
                            handle={() => handle(index)}>{i}</Button>)
            )
            }</div>
    );
};
