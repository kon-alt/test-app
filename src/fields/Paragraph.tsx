import React, {FC} from 'react';
import {IParagraphProps} from "./interfaces";

export const Paragraph: FC<IParagraphProps> = ({children}) => <p className="text">{children}</p>
