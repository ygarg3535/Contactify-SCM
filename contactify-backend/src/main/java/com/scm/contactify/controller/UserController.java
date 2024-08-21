package com.scm.contactify.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.scm.contactify.entities.User;
import com.scm.contactify.repository.UserRepository;
import com.scm.contactify.service.UserService;


@RestController
public class UserController {

    @Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	public List<User> getUsers() {
		
		List<User> users = userRepository.findAll();
		return users;
	}
	
	@GetMapping("/users/{userId}")
	public User getUserById(@PathVariable("userId") Integer id) throws Exception{
		
		User user = userService.findUserById(id);
		return user;
	}

	@GetMapping("/users/profile")
	public User getUserFromToken(@RequestHeader("Authorization") String jwt){

		User user = userService.findUserByJwt(jwt);
		user.setPassword(null);
		return user;
	}

}
