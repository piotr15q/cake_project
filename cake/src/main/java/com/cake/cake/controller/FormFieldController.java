package com.cake.cake.controller;

import com.cake.cake.model.Form;
import com.cake.cake.model.FormField;
import com.cake.cake.repository.FormFieldRepository;
import com.cake.cake.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms/{formId}/fields")
public class FormFieldController {

    @Autowired
    private FormFieldRepository formFieldRepository;

    @Autowired
    private FormRepository formRepository;

    @PostMapping("/save")
    public ResponseEntity<Void> saveFormField(@PathVariable Long formId, @RequestBody List<FormField> formFields) {
        // Znajdź formularz po ID
        Form form = formRepository.findById(formId).orElse(null);
        if (form == null) {
            return ResponseEntity.notFound().build();
        }

        // Przypisz pola do formularza
        formFields.forEach(field -> field.setForm(form));  // Zassociuj pola z formularzem
        formFieldRepository.saveAll(formFields);  // Zapisz pola formularzy
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public List<FormField> getAllFormFields() {
        return formFieldRepository.findAll();
    }
}
