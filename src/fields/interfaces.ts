import React from "react";

export interface IParagraphProps {
    children: JSX.Element | string;

}

export interface IButtonProps {
    children: JSX.Element | string;
    handle: (event: React.MouseEvent) => void | number | string;
    disabled?: boolean;
}
