package com.scm.contactify.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.contactify.config.JwtProvider;
import com.scm.contactify.entities.User;
import com.scm.contactify.repository.UserRepository;

@Service
public class UserServiceImplement implements UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public User registerUser(User user) {
		User newUser = new User();
		newUser.setEmail(user.getEmail());
		newUser.setName(user.getName());
		newUser.setPassword(user.getPassword());
		newUser.setCity(user.getCity());
		newUser.setAbout(user.getAbout());
		newUser.setPhoneNumber(user.getPhoneNumber());
		newUser.setId(user.getId());
		
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}

	@Override
	public User findUserById(Integer userId) throws Exception {
		Optional<User> user=userRepository.findById(userId);
		 if(user.isPresent()) {
			 return user.get();
		 }
		 
		 throw new Exception("user not exist with userId : " + userId);
	}

	@Override
	public User findUserByEmail(String email) {
		User user = userRepository.findByEmail(email);
		return user;
	}

	@Override
	public User findUserByJwt(String jwt) {
		String email = JwtProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		return user;
	}
	
	
}
