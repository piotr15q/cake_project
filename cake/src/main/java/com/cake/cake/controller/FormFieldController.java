package com.cake.cake.controller;

import com.cake.cake.model.FormField;
import com.cake.cake.repository.FormFieldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/formfields")
public class FormFieldController {
    
    @Autowired
    private FormFieldRepository formFieldRepository;
    
    @PostMapping("/save")
    public List<FormField> saveFormField(@RequestBody List<FormField> formFields) {
        return formFieldRepository.saveAll(formFields);
    }
    
    @GetMapping("/all")
    public List<FormField> getAllFormFields() {
        return formFieldRepository.findAll();
    }
}
