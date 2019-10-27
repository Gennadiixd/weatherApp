import React, {useEffect, useState} from 'react';

export default function DropdDown() {
    const [suggests, setSuggests] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        queryCities()
    }, [])

    const queryCities = (query = '') => {
        let api = `https://dev.pravilno.ru/cities/select2?q=${query}`
        fetch(api)
            .then(data => data.json())
            .then(cities => setSuggests(cities.results))
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
        debouncedQuery(e.target.value)
    }

    const debounce = (cbf, delay) => {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => cbf(...args), delay);
        }
    }

    const debouncedQuery = debounce(queryCities, 3000)

    const renderSuggests = () => {
        return (
            <ul>
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
        <>
            <input
                placeholder='введите ваш город'
                onFocus={toggleDropdown}
                onBlur={toggleDropdown}
                onInput={inputHandler}
                value={input}
            />
            {isOpen && (
                renderSuggests()
            )}
        </>
    )
}
