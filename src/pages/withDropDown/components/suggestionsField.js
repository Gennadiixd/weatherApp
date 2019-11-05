import React, {useEffect, useRef} from 'react';

export default function SuggestsField({
    renderSuggests,
    onSelect,
    suggests,
    onClose,
    setRefs,
}) {
    const suggestsRef = useRef([]);

    useEffect(() => {
        document.addEventListener('click', onClose);
        return () => {
            document.removeEventListener('click', onClose);
        }
    })

    useEffect(() => {
        suggestsRef.current = suggestsRef.current.slice(0, suggests.length);
        setRefs(suggestsRef);
    }, [suggests]);

    const onSelectSuggest = (index) => () => {
        onSelect(suggests[index]);
    }

    return (
        renderSuggests({suggestsRef, suggests, onSelectSuggest})
    )
}

