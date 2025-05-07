import React, { useEffect, useState } from "react";

function ViewFormPage() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/formfields/all")
            .then((response) => response.json())
            .then((data) => setFormData(data));
    }, []);

    const handleChange = (index, value) => {
        const updatedFormData = [...formData];
        updatedFormData[index].value = value;
        setFormData(updatedFormData);
    };

    const renderField = (field, index) => {
        switch (field.type) {
            case "text":
            case "number":
            case "date":                
            case "email":
            case "password":
                return (
                    <input
                        type={field.type}
                        placeholder={field.label}
                        //value={field.value}
                        //readOnly
                    />
                );

            case "textarea":
                return (
                    <textarea
                        //placeholder={field.label}
                        //value={field.value}
                        //readOnly
                    />
                );

            case "select":
                return (
                    <select 
                        value={field.value}
                        onChange={(e) => handleChange(index, e.target.value)}
                    >
                        {field.options && field.options.map((opt, i) => (
                            <option key={i} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                );

            case "radio":
            case "checkbox":
                return (
                    <div>
                        {field.options && field.options.map((opt, index) => (
                            <div key={index}>
                                <input
                                    type={field.type}
                                    name={`field-${field.id}`}
                                    value={opt}
                                    //checked={field.value === opt}
                                    //disabled
                                />
                                <label>{opt}</label>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    }

    return (
    <div>
        <h2>Podgląd formularza</h2>
        <form>
            {formData.map((field, index) => (
            <div key={field.id} style={{ marginBottom: "20px" }}>
                <label>{field.label}</label>
                {/* Renderowanie odpowiednich pól formularza */}
                {renderField(field, index)}
            </div>
        ))}
        </form>
        </div>
    );
}

export default ViewFormPage;