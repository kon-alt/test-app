import React, {FC, useEffect, useState} from 'react';
import {Button} from "../../fields";

interface ITodoButtonProps {
    buttonData: string[];
    handle: (event: number) => void;
}

const TodoButtonGroup: FC<ITodoButtonProps> = ({buttonData, handle}) => {
    const [isDisabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        isDisabled && setTimeout(() => setDisabled(false), 5000)
    }, [isDisabled])

    const handleClickButton = (index: number) => {
        index === 0 && setDisabled(true)
        handle(index)
    }
    return (
        <div className="todo-button-group">
            {
                buttonData
                    .map((i: string, index: number) =>
                        (<Button key={index}
                                 disabled={isDisabled && !index}
                                 handle={() => handleClickButton(index)}>{i}</Button>)
                    )
            }
        </div>
    );
};

export default TodoButtonGroup;
