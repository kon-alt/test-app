export interface ITabProps {
    children: JSX.Element;
}

export interface ITabsButtonProps {
    dataButton: string[];
    handle: (index: number) => void;
}
