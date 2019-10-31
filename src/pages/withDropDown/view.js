import React, {useEffect, useState} from 'react';
import DropDown from './components/dropdDown';

const debounce = (cbf, delay) => {
    let timer;
    let controller;
    let signal;
    return (query) => {
        if (signal) {
            controller.abort();
            signal = null;
        }

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            controller = new AbortController();
            signal = controller.signal;
            cbf(query, signal);
        }, delay);
    }
}

export default function WithDropDown() {
    const [debouncedQueryFunction, setDebouncedQueryFunction] = useState(null)
    const [suggests, setSuggests] = useState([])
    const [structure, setStructure] = useState({
        fieldValue: 'text',
        fieldKey: 'id'
    })

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

    return (
        <div style={{marginTop: '3em'}}>
            <form>
                <DropDown
                    getSuggests={debouncedQueryFunction}
                    suggests={suggests}
                    structure={structure}
                />
                <DropDown
                    getSuggests={debouncedQueryFunction}
                    suggests={suggests}
                    structure={structure}
                />
                <DropDown
                    getSuggests={debouncedQueryFunction}
                    suggests={suggests}
                    structure={structure}
                />
            </form>
        </div>
    )
}
