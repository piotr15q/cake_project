package com.cake.cake.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    private List<FormField> fields;
}
