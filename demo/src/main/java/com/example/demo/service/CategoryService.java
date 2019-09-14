package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryDao categoryDao;

    public List<Category> getAllCategories()
    {
        return categoryDao.findAll();
    }
}
