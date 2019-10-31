import React, {useEffect, useRef} from 'react';

export default function SuggestsField({
    onChooseElement,
    structure,
    suggests,
    onClose,
    setRefs
}) {
    const suggestsRef = useRef([]);

    useEffect(() => {
        document.addEventListener('click', onClose)
        return () => {
            document.removeEventListener('click', onClose)
        }
    })

    useEffect(() => {
        suggestsRef.current = suggestsRef.current.slice(0, suggests.length);
        setRefs(suggestsRef)
    }, [suggests]);

    return (
        <ul
            onClick={onChooseElement}
        >
            {suggests.map((suggest, index) => (
                <li
                    key={suggest[structure.fieldKey]}
                    ref={el => suggestsRef.current[index] = el}
                    tabIndex="0"
                >
                    {suggest[structure.fieldValue]}
                </li>
            ))}
        </ul>
    )
}

