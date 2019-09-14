package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "productid")
    private int id;

    @Column(name = "productname")
    private String productName;

    @Column(name = "price")
    private float price;

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Column(name = "quantity")
    private int quantity;

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    @Column(name = "available")
    private boolean available;



    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoryid" ,referencedColumnName = "categoryid" , insertable = false, updatable = false)
    @JsonBackReference
    private Category category;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }


    @Column(name = "categoryid")
    private int categoryId;

    @Column(name = "imageurl")
    private String imageUrl;

    public Product(){}

    public Product(int id, String productName, float price, int quantity, boolean available, int categoryId, String imageUrl) {
        this.id=id;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.available = available;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}

