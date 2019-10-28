import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

//TODO: CDM suggests document.addEventListener('click', closeDropdown)
//TODO: CWU document.removeEventListener('click', closeDropdown)

const debounce = (cbf, delay) => {
    let timer;
    let controller;
    let signal;
    return (query) => {
        if (signal) controller.abort();

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            controller = new AbortController();
            signal = controller.signal;
            cbf(query, signal);
        }, delay);
    }
}

export default function DropdDown() {
    const [suggests, setSuggests] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [debouncedQueryFunction, setDebouncedQueryFunction] = useState(null)

    useEffect(() => {
        setDebouncedQueryFunction(() => debounce(queryCities, 200));
        document.addEventListener('click', closeDropdown)
    }, [])

    const queryCities = (query = '', signal) => {
        let api = `https://dev.pravilno.ru/cities/select2?q=${query}`
        fetch(api, {signal})
            .then(data => data.json())
            .then(cities => setSuggests(cities.results))
            .catch(console.log)
    }

    const openDropdown = (e) => {
        console.log(e.target.name);

        e.nativeEvent.stopImmediatePropagation()
        // e.stopPropagation();
        if (e.target.value || e.target.name === 'dropDownTrigger') {
            console.log(`$open <==================`);
            setIsOpen(true)
        }
    }

    const closeDropdown = (e) => {
        console.log(`$close <==================`);
        if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation()
        setIsOpen(false)
    }

    const toggleDropdown = (e) => {
        if (isOpen) {
            closeDropdown(e);
        } else {
            openDropdown(e);
        }
    }

    const onChooseElement = (e) => {
        e.stopPropagation();
        if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation()
        console.log(e.target)
    }

    const inputHandler = (e) => {
        if (e.target.value) {
            openDropdown(e);
        } else {
            closeDropdown(e);
        }
        setInput(e.target.value);
        debouncedQueryFunction(e.target.value);
    }

    const renderSuggests = () => {
        return (
            <ul
                onClick={onChooseElement}
            >
                {suggests.map((suggest) => {
                    return (
                        <li key={suggest.id}>
                            {suggest.text}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div>
            <input
                placeholder='введите ваш город'
                onClick={openDropdown}
                onChange={inputHandler}
                value={input}
            />
            <span
                onClick={toggleDropdown}
            >v</span>
            {isOpen && (
                renderSuggests()
            )}
        </div>
    )
}
