import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const debounce = (cbf, delay) => {
    let timer;
    let controller;
    let signal;
    return (query) => {
        if (signal) {
            controller.abort();
        }

        controller = new AbortController();
        signal = controller.signal;

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => cbf(query, signal), delay);
    }
}

export default function DropdDown() {
    const [suggests, setSuggests] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [debouncedQueryFunction, setDebouncedQueryFunction] = useState(null)

    useEffect(() => {
        setDebouncedQueryFunction(() => debounce(queryCities, 200));
        document.addEventListener('click', console.log)
    }, [])

    const queryCities = (query = '', signal) => {
        let api = `https://dev.pravilno.ru/cities/select2?q=${query}`
        fetch(api, {signal})
            .then(data => data.json())
            .then(cities => setSuggests(cities.results))
    }

    const openDropdown = (e) => {
        e.stopPropagation();
        if (e.target.value) {
            setIsOpen(true)
        }
    }

    const closeDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(false)
    }

    const onChooseElement = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation()
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
            {isOpen && (
                renderSuggests()
            )}
        </div>
    )
}
