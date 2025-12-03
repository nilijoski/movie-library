package com.github.group2.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public ResponseEntity<String> getUser(@AuthenticationPrincipal OAuth2User user) {
        try{
           String userInfo= user.getAttribute("login");
           if(userInfo!=null){
               return ResponseEntity.ok(userInfo);
           }
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return null;
    }
}
