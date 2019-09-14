package com.example.demo.controller;

//import com.example.demo.config.AuthenticationBean;
import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.repository.CategoryDao;
import com.example.demo.repository.ProductDao;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
public class MainController {

    @Autowired
    ProductService productService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    ProductDao productDao;

//    @GetMapping(value="/basicauth")
//    public AuthenticationBean helloWorldBean()
//    {
//        return new AuthenticationBean("You are authenticated!");
//    }

    @GetMapping(value = "/products")
    public List<HashMap<String,Object>> sayHello()
    {
        return productService.getAllProducts();
    }

    @GetMapping(value = "/categories")
    public List<Category> showAllCategories()
    {
        return categoryService.getAllCategories();
    }

    @GetMapping(value="/rawproducts")
    public List<Product> showRawProducts()
    {
        return productDao.findAll();
    }
}
