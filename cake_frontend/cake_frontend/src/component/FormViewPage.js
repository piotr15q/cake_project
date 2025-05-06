import React, { useEffect, useState } from "react";

function ViewFormPage() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/formfields/all")
            .then((response) => response.json())
            .then((data) => setFormData(data));
    }, []);

    return (
    <div>
        <h2>Podgląd formularza</h2>
        <form>
            {formData.map((field) => (
            <div key={field.id} style={{ marginBottom: "20px" }}>
                <label>{field.label}</label>
                {/* Renderowanie odpowiednich pól formularza */}
            </div>
        ))}
        </form>
        </div>
    );
}

export default ViewFormPage;