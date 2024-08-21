package com.scm.contactify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scm.contactify.entities.User;


public interface UserRepository extends JpaRepository<User,Integer>{

    public User findByEmail(String email);
}
