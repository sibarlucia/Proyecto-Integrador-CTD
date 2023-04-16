package com.example.digitalbooking.security.filter;

import com.example.digitalbooking.security.AuthCredentials;
import com.example.digitalbooking.security.TokenUtils;
import com.example.digitalbooking.security.UserDetailsImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collections;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {

        AuthCredentials authCredentials = new AuthCredentials();
        try{
            authCredentials = new ObjectMapper().readValue(request.getReader(),AuthCredentials.class);
        } catch (IOException e) {
        }

        UsernamePasswordAuthenticationToken usernamePAT = new  UsernamePasswordAuthenticationToken(
                authCredentials.getEmail(),
                authCredentials.getPassword(),
                Collections.emptyList()
        );

        return getAuthenticationManager().authenticate(usernamePAT);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        UserDetailsImpl userDetails =(UserDetailsImpl) authResult.getPrincipal();
        String token = TokenUtils.createToken(userDetails.getId(), userDetails.getNombre(), userDetails.getApellido(), userDetails.getUsername(), userDetails.getAuthorities());

        response.addHeader("Authorization","Bearer "+token);
        // Añadir el token al cuerpo de la respuesta
        PrintWriter writer = response.getWriter();
        writer.print("{\"token\": \"" + token + "\"}");
        writer.flush();

        super.successfulAuthentication(request, response, chain, authResult);
    }
}
