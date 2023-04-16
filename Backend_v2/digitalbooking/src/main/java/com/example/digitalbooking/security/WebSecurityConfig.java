package com.example.digitalbooking.security;

import com.example.digitalbooking.security.filter.JWTAuthenticationFilter;
import com.example.digitalbooking.security.filter.JWTAuthorizationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

import static java.util.Collections.singletonList;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    private final UserDetailsService userDetailsService;

    private final JWTAuthorizationFilter jwtAuthorizationFilter;


    public WebSecurityConfig(UserDetailsService userDetailsService, JWTAuthorizationFilter jwtAuthorizationFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtAuthorizationFilter = jwtAuthorizationFilter;
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authManager) throws Exception {

        JWTAuthenticationFilter jwtAuthenticationFilter = new JWTAuthenticationFilter();
        jwtAuthenticationFilter.setAuthenticationManager(authManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/login");

        return http
                .cors()
                    .and()
                .csrf().disable()
                .authorizeRequests()
                .requestMatchers(HttpMethod.POST,"/productos").hasAuthority("ROLE_ADMIN")
                .requestMatchers(HttpMethod.PUT,"/productos").hasAuthority("ROLE_ADMIN")
                .requestMatchers("/productos/random").permitAll()
                .requestMatchers("/registro").permitAll()
                .requestMatchers(HttpMethod.GET,"/ciudades").permitAll()
                .requestMatchers(HttpMethod.GET,"/ciudades/{id}").permitAll()
                .requestMatchers(HttpMethod.GET,"/categorias").permitAll()
                .requestMatchers(HttpMethod.GET,"/categorias/{id}").permitAll()
                .requestMatchers(HttpMethod.GET,"/caracteristicas").permitAll()
                .requestMatchers(HttpMethod.GET,"/caracteristicas/{id}").permitAll()
                .requestMatchers(HttpMethod.GET,"/politicaTipo").permitAll()
                .requestMatchers(HttpMethod.GET,"/polticaTipo/{id}").permitAll()
                .requestMatchers("/login").permitAll()
                .requestMatchers(HttpMethod.GET,"/productos").permitAll()
                .requestMatchers("/productos/{id}").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(jwtAuthenticationFilter)
                .addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    AuthenticationManager authManager(HttpSecurity http, PasswordEncoder passwordEncoder) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder())
                .and()
                .build();
    }

   @Bean
   CorsConfigurationSource corsConfigurationSource() {
       CorsConfiguration configuration = new CorsConfiguration();
       List<String> allowOrigins = Arrays.asList("*");
       configuration.setAllowedOrigins(allowOrigins);
       configuration.setAllowedMethods(singletonList("*"));
       configuration.setAllowedHeaders(singletonList("*"));
       //in case authentication is enabled this flag MUST be set, otherwise CORS requests will fail
       //configuration.setAllowCredentials(true);
       UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
       source.registerCorsConfiguration("/**", configuration);
       return source;
   }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
