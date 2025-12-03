package com.github.group2.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Value("${frontend.url}")
    private String frontendUrl;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(a -> a
                        .requestMatchers("/api/movies").authenticated()
                        .anyRequest().permitAll()
                )
                .oauth2Login(o -> o.
                        defaultSuccessUrl(frontendUrl))

                .logout(logout -> logout
                .logoutUrl("/api/logout")
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .deleteCookies("JSESSIONID")
                        // IMPORTANT: override default spring logout redirect
                        .logoutSuccessHandler((request, response, authentication) -> {
                            response.sendRedirect(frontendUrl);
                        })
        );
        return http.build();
    }
}
