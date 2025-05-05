import React, { useState } from "react";

function AddOrderPage() {
    const [inputFields, setInputFields] = useState([{name: '', type: 'input'}]);
    const [fieldType, setFieldType] = useState('input');

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newField = {name: '', type: fieldType};
        setInputFields([...inputFields, newField]);
    }

    const handleFieldTypeChange = (e) => {
        setFieldType(e.target.value);
    }

    return (
        //<h1>Add New orded offer</h1>
        <div className="App">
            <form>
                {/* {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Name'
                                value={input.name}
                                onChange={event => handleFormChange(index, event)}
                              />
                        </div>
                    )
                })} */}
                {inputFields.map((input, index) => {
                    return(
                        <div key={index}>
                            {input.type === 'input' && (
                                <input
                                name='name'
                                placeholder='Name'
                                value={input.name}
                                onChange={event => handleFormChange(index, event)}
                              />
                            )}
                            {input.type === 'radio' && (
                                <div>
                                    <label>Radio Option</label>
                                    <input
                                        type='radio'
                                        placeholder='Name'
                                        value={input.name}
                                        onChange={event => handleFormChange(index, event)}
                                  />
                                </div>
                            )}
                        </div>
                )})}
            </form>
            <button onClick={addFields}> Add More </button>
            
            <div>
                <label>Choose Field Type:</label>
                <select onChange={handleFieldTypeChange} value={fieldType}>
                    <option value="input">Input</option>
                    <option value="radio">Radio</option>
                    <option value="select">Select</option>
                </select>
            </div>

        </div>
    );
}

export default AddOrderPage;