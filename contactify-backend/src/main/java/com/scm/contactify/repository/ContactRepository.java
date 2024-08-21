package com.scm.contactify.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scm.contactify.entities.Contact;
import com.scm.contactify.entities.User;

public interface ContactRepository extends JpaRepository<Contact,Long> {
    
    List<Contact> findByUser(User user);
}
