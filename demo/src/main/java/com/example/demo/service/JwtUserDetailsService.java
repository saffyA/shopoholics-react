package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.model.UserDto;
import com.example.demo.repository.UserDao;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    UserDao userDao;

    @Autowired
    private PasswordEncoder bCryptEncoder;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username);
        if(user == null)
            throw new UsernameNotFoundException("Username not found");
        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),new ArrayList<>());
    }

    public User saveUser(UserDto userDto)
    {
        User user = convertToEntity(userDto);
        return userDao.save(user);
    }

    private User convertToEntity(UserDto userDto) {
        User user = modelMapper.map(userDto,User.class);
        user.setPassword(bCryptEncoder.encode(user.getPassword()));
        return user;
    }
}
