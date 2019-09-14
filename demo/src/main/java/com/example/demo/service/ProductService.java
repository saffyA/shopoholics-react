package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.repository.CategoryDao;
import com.example.demo.repository.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

@Service
public class ProductService {

    @Autowired
    ProductDao productDao;

    public List<HashMap<String,Object>> getAllProducts()
    {
        List<Product> products = productDao.findAll();
        List<HashMap<String,Object>> productMaps = new ArrayList<>();
        for(Product product : products)
        {
            HashMap<String,Object> productMap = new HashMap<>();
            productMap.put("id",product.getId());
            productMap.put("productName",product.getProductName());
            productMap.put("productPrice",product.getPrice());
            productMap.put("quantity",product.getQuantity());
            productMaps.add(productMap);
        }
        return productMaps;
    }
}