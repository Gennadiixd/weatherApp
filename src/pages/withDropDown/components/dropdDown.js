import React, {useEffect, useState} from 'react';

import SuggestionsField from './suggestionsField';
import SuggestsIterator from '../../../utils/suggestsIterator';
import * as S from './styles';

export default function DropdDown({
    renderSuggests,
    getSuggests,
    suggests, 
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [refs, setRefs] = useState([]);
    const [current, setCurrent] = useState(-1);
    const [suggestsIterator, setSuggestsIterator] = useState(null);

    const setRefsFunction = (refs) => {
        if (refs.current && refs.current.length) {
            setCurrent(-1);
            setSuggestsIterator(new SuggestsIterator(refs, current, setCurrent, isOpen));
        }
        setRefs(refs);
    }

    const openDropdown = (e) => {
        e.nativeEvent.stopPropagation()
        if (e.target.value) {
            setIsOpen(true);
        }
    }

    const closeDropdown = (e) => {
        setIsOpen(false);
    }

    const onSelect = (e) => {
        setInput(e.text);
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
                suggestsIterator.next();
            } else if (e.key === 'ArrowUp') {
                suggestsIterator.prev();
            } else if (e.key === 'Enter') {
                setInput(e.target.innerText);
                closeDropdown(e);
            }
        }
    }

    return (
        <S.Container
            onKeyUp={keyHandler}
        >
            <input
                placeholder='введите ваш город'
                onChange={inputHandler}
                onClick={openDropdown}
                value={input}
            />
            {isOpen && (
                <SuggestionsField
                    renderSuggests={renderSuggests}
                    suggests={suggests}
                    onSelect={onSelect}
                    onClose={closeDropdown}
                    setRefs={setRefsFunction}
                />
            )}
        </S.Container>
    )
}