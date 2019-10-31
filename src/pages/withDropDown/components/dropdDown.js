import React, {useEffect, useState} from 'react';

import SuggestionsField from './suggestionsField';
import SuggestsIterator from './suggestsIterator';
import * as S from './styles';

export default function DropdDown({
    getSuggests,
    structure,
    suggests,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [refs, setRefs] = useState([]);
    const [current, setCurrent] = useState(-1);
    const [suggestsIterator, setSuggestsIterator] = useState(null);

    const setRefsFunction = (refs) => {
        if (refs.current && refs.current.length) {
            setCurrent(-1)
            setSuggestsIterator(new SuggestsIterator(refs, current, setCurrent, isOpen))
        }
        setRefs(refs)
    }

    const openDropdown = (e) => {
        e.nativeEvent.stopPropagation()
        if (e.target.value) {
            setIsOpen(true)
        }
    }

    const closeDropdown = (e) => {
        setIsOpen(false)
    }

    const onChooseElement = (e) => {
        setInput(e.target.innerText)
    }

    const inputHandler = (e) => {
        if (e.target.value) {
            openDropdown(e);
        } else {
            closeDropdown(e);
        }
        setInput(e.target.value);
        getSuggests(e.target.value);
    }

    const keyHandler = async (e) => {
        if (refs.current && refs.current.length) {
            if (e.key === 'ArrowDown') {
                suggestsIterator.next()
            } else if (e.key === 'ArrowUp') {
                suggestsIterator.prev()
            } else if (e.key === 'Enter') {
                setInput(e.target.innerText)
                closeDropdown(e)
            }
        }
    }

    return (
        <S.Container
            onKeyUp={keyHandler}
        >
            <input
                placeholder='введите ваш город'
                onClick={openDropdown}
                onChange={inputHandler}
                value={input}
            />
            {isOpen && (
                <SuggestionsField
                    suggests={suggests}
                    onChooseElement={onChooseElement}
                    onClose={closeDropdown}
                    structure={structure}
                    setRefs={setRefsFunction}
                />
            )}
        </S.Container>
    )
}