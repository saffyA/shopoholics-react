//package com.example.demo.config;
//
//import org.springframework.boot.autoconfigure.security.servlet.SpringBootWebSecurityConfiguration;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SpringSecurityConfigBasicAuth extends WebSecurityConfigurerAdapter {
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeRequests()
//                .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//                .antMatchers("/categories").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                //.formLogin().and()
//                .httpBasic();
//    }
//}
