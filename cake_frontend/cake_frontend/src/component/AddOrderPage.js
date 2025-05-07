import React, { useState } from "react";

function AddOrderPage() {
  const [inputFields, setInputFields] = useState([]);
  const [newType, setNewType] = useState("text");

  const addField = () => {
    const field = {
      //id: Date.now(),
      label: "Nowe pole",
      type: newType,
      value: "",
      options: ["Opcja 1", "Opcja 2"].filter(() =>
        ["radio", "checkbox", "select"].includes(newType)
      )
    };
    setInputFields([...inputFields, field]);
  };

  const handleLabelChange = (index, newLabel) => {
    const updated = [...inputFields];
    updated[index].label = newLabel;
    setInputFields(updated);
  };

  const handleOptionChange = (fieldIndex, optionIndex, value) => {
    const updated = [...inputFields];
    updated[fieldIndex].options[optionIndex] = value;
    setInputFields(updated);
  };

  const addOption = (fieldIndex) => {
    const updated = [...inputFields];
    updated[fieldIndex].options.push(`Opcja ${updated[fieldIndex].options.length + 1}`);
    setInputFields(updated);
  };

  const saveForm = async() => {
    const formToSave = {
      title: "Formularz użytkownika",
      fields: inputFields
    };
    try {
        const response = await fetch("http://localhost:8080/api/forms/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formToSave),
        });

        if (response.ok) {
            console.log("Formularz zapisany!");
        } else {
            console.log("blad zapisu formularza");
        }
    } catch (error) {
        console.error("blad zapisu formularza:", error);
    }
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
            //placeholder={field.label}
            value={field.value}
            onChange={(e) => {
              const updated = [...inputFields];
              updated[index].value = e.target.value;
              setInputFields(updated);
            }}
          />
        );

      case "textarea":
        return (
          <textarea
            //placeholder={field.label}
            value={field.value}
            onChange={(e) => {
              const updated = [...inputFields];
              updated[index].value = e.target.value;
              setInputFields(updated);
            }}
          />
        );

      case "select":
        return (
          <>
            <select>
              {field.options.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
            {field.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(index, i, e.target.value)}
              />
            ))}
            <button type="button" onClick={() => addOption(index)}>Dodaj opcję</button>
          </>
        );

      case "radio":
      case "checkbox":
        return (
          <>
            {field.options.map((opt, i) => (
              <div key={i}>
                <input type={field.type} name={`field-${index}`} />
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleOptionChange(index, i, e.target.value)}
                />
              </div>
            ))}
            <button type="button" onClick={() => addOption(index)}>Dodaj opcję</button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Dodaj pole formularza</h2>
      <select value={newType} onChange={(e) => setNewType(e.target.value)}>
        <option value="text">Tekst</option>
        <option value="number">Numer</option>
        <option value="date">Data</option>
        <option value="email">Email</option>
        <option value="password">Hasło</option>
        <option value="textarea">Textarea</option>
        <option value="select">Lista rozwijana</option>
        <option value="radio">Radio</option>
        <option value="checkbox">Checkbox</option>
      </select>
      <button type="button" onClick={addField}>Dodaj pole</button>
      <button type="button" onClick={saveForm}>Zapisz formularz</button>

      <form>
        {inputFields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: "20px" }}>
            <input
              type="text"
              value={field.label}
              onChange={(e) => handleLabelChange(index, e.target.value)}
              placeholder="Etykieta pola"
            />
            <br />
            {renderField(field, index)}
          </div>
        ))}
      </form>
    </div>
  );
}

export default AddOrderPage;
