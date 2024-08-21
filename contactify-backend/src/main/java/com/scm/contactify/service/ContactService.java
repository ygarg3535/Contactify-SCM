package com.scm.contactify.service;

import java.util.List;

import com.scm.contactify.entities.Contact;
import com.scm.contactify.entities.User;

public interface ContactService {
    
    Contact save(Contact contact);
    Contact update(Contact contact);
    List<Contact> getAll();
    Contact getById(Long id);
    boolean deleteContactById(Long id);
    List <Contact> getByUser(User user);
}

