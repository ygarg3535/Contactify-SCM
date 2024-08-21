package com.scm.contactify.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.scm.contactify.entities.Contact;
import com.scm.contactify.entities.User;
import com.scm.contactify.service.ContactService;
import com.scm.contactify.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class ContactController {
    
    @Autowired
    public ContactService contactService;

    @Autowired
    public UserService userService;

    @PostMapping("/save")
    public String saveContact(@RequestBody Contact contact,@RequestHeader("Authorization") String jwt){
        
        User user = userService.findUserByJwt(jwt);
        Contact newContact = new Contact();
        newContact.setName(contact.getName());
        newContact.setEmail(contact.getEmail());
        newContact.setDescription(contact.getDescription());
        newContact.setAddress(contact.getAddress());
        newContact.setCity(contact.getCity());
        newContact.setWebsiteLink(contact.getWebsiteLink());
        newContact.setLinkedinLink(contact.getLinkedinLink());
        newContact.setUser(user);
        newContact.setPhoneNumber(contact.getPhoneNumber());
        contactService.save(newContact);
        return "Saved Successfully";

    }

    @GetMapping("/contacts")
    public List<Contact> getContacts(@RequestHeader("Authorization") String jwt){
        User user = userService.findUserByJwt(jwt);
        return contactService.getByUser(user);
    }

    @DeleteMapping("/contacts/{id}")
    public String deleteContact(@PathVariable Long id){
        if(contactService.deleteContactById(id)){
            return "deleted";
        }
        return "Not deleted";
    }

    @GetMapping("/contacts/{id}")
    public Contact getContactById(@PathVariable Long id){
        return contactService.getById(id);
    }
}
