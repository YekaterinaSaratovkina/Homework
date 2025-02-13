import React, { useRef } from 'react'

const UncotrolledForm = () => {
    const descriptionRef = useRef(null);

    // useEffect(() => {
    //     console.log(descriptionRef.current);
    //     descriptionRef.current.focus();

    // }, [])

    const hendelSubmit = (event) => {
        event.preventDefault();
        console.log(descriptionRef.current.value);
        
    }
    return (
        <form onSubmit={hendelSubmit}>
            <div>
                <label htmlFor="description">Описание</label>
                <input type="text" ref={descriptionRef} />
            </div>
            <div>
                <label htmlFor="price">Цена</label>
                <input type="number" />
            </div>
            <button>Отправить</button>
        </form>
    )
}

export default UncotrolledForm