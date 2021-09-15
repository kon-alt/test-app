import React, {FC} from 'react';
import {IButtonProps} from "./interfaces";

export const Button:FC<IButtonProps> = (
    {children,
        handle,
        disabled
    }
    ) => <button disabled={disabled} onClick={handle}>{children}</button>

