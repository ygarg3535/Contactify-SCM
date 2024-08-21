package com.scm.contactify.service;


import com.scm.contactify.entities.User;


public interface UserService{
	
	public User registerUser(User user);
	public User findUserById(Integer userId) throws Exception;
	public User findUserByEmail(String email);
	public User findUserByJwt(String jwt);
}
