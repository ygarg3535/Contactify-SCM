package com.scm.contactify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.contactify.entities.Contact;
import com.scm.contactify.entities.User;
import com.scm.contactify.repository.ContactRepository;

@Service
public class ContactServiceImpl implements ContactService{
    
    @Autowired
    private ContactRepository contactRepo;

    @Override
    public Contact save(Contact contact) {
        return contactRepo.save(contact);
    }

    @Override
    public Contact update(Contact contact) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public List<Contact> getAll() {
        return contactRepo.findAll();
    }

    @Override
    public Contact getById(Long id) {
        Optional<Contact> contact = contactRepo.findById(id);
		return contact.get();
    }


    @Override
    public boolean deleteContactById(Long id) {
        Contact contact = contactRepo.findById(id).get();
        contactRepo.delete(contact);
        return true;
    }

    @Override
    public List<Contact> getByUser(User user){
        return contactRepo.findByUser(user);
    }
    
}
