import React, {FC, useMemo, useState} from 'react';
import './style.scss';
import {TabsButtonGroup} from "./components/TabsButtonGroup";
import RenderTab from "./components/RenderTab";
import {Paragraph} from "../fields";
import List from "../todo";

const dataButton = [
    'Кнопка 1',
    'Кнопка 2',
    'Кнопка 3',
]

const renderTabsData = [
    {
        index: 0,
        component: <List/>
    }, {
        index: 1,
        component: <Paragraph>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает
            у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
            русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских
            времен.</Paragraph>
    }, {
        index: 2,
        component: <Paragraph>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
            более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код
            речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет
            сделать текст более привлекательным и живым для визуально-слухового восприятия.</Paragraph>
    },
]

const Tabs: FC<any> = () => {
    const [isIndex, setIndex] = useState<number>(0)
    const handleClickButton = (index: number): void => {
        setIndex(index)
    }
    return (
        <div className="tabs">
            <TabsButtonGroup dataButton={dataButton} handle={handleClickButton}/>
            <RenderTab>
                {renderTabsData[isIndex].component}
            </RenderTab>
        </div>
    );
};

export default Tabs;
