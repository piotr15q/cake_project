package com.cake.cake.controller;

import com.cake.cake.model.Form;
import com.cake.cake.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
public class FormController {

    @Autowired
    private FormRepository formRepository;

    @PostMapping("/save")
    public ResponseEntity<Void> saveForm(@RequestBody Form form) {
        formRepository.save(form);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteForm(@PathVariable Long id) {
        if (formRepository.existsById(id)) {
            formRepository.deleteById(id);
            return ResponseEntity.noContent().build();  // 204 No Content
        } else {
            return ResponseEntity.notFound().build();  // 404 Not Found
        }
    }
}
