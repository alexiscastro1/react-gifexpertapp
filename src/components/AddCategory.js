import React, {useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handelInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // esto es para que no se renderize todo el formulario

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handelInputChange }
            />
        </form>
    )
}


// para que sea obligatorio la importacion de la propiedad
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
