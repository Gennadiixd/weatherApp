import React, {useEffect, useState} from 'react';
import DropDown from './components/dropdDown';
import debounce from '../../utils/debounce';

export default function WithDropDown() {
    const [debouncedQueryFunction, setDebouncedQueryFunction] = useState(null);
    const [suggests, setSuggests] = useState([]);

    useEffect(() => {
        setDebouncedQueryFunction(() => debounce(queryCities, 200));
    }, [])

    const queryCities = (query = '', signal) => {
        let api = `https://dev.pravilno.ru/cities/select2?q=${query}`
        fetch(api, {signal})
            .then(data => data.json())
            .then(cities => setSuggests(cities.results))
            .catch(console.log)
    }

    const renderSuggests = ({suggestsRef, suggests, onSelectSuggest}) => {
        return (
            <ul>
                {suggests.map((suggest, index) => (
                    <li
                        onClick={onSelectSuggest(index)}
                        key={suggest.id}
                        ref={el => suggestsRef.current[index] = el}
                        tabIndex="0"
                    >
                        {suggest.text}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div style={{marginTop: '3em'}}>
            <form>
                <DropDown
                    renderSuggests={renderSuggests}
                    getSuggests={debouncedQueryFunction}
                    suggests={suggests}
                />
                <DropDown
                    renderSuggests={renderSuggests}
                    getSuggests={debouncedQueryFunction}
                    suggests={suggests}
                />
                <DropDown
                    renderSuggests={renderSuggests}
                    getSuggests={debouncedQueryFunction}
                    suggests={suggests}
                />
            </form>
        </div>
    )
}
