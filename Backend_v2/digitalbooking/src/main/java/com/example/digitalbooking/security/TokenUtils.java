package com.example.digitalbooking.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.security.Key;
import java.util.*;

public class TokenUtils {

    private final static Key ACCESS_TOKEN_SECRET = Keys.secretKeyFor(SignatureAlgorithm.HS256);;
    private final static Long ACCESS_TOKEN_VALIDITY_SECOND = 2_592_000L;

    public static String createToken(Integer id, String nombre, String apellido, String email, Collection<? extends GrantedAuthority> roles) {
        long expirationTime = ACCESS_TOKEN_VALIDITY_SECOND*1000;
        Date expirationDate = new Date(System.currentTimeMillis()+expirationTime);

        Map<String, Object> extra = new HashMap<>();
        extra.put("id", id);
        extra.put("nombre", nombre);
        extra.put("apellido", apellido);
        extra.put("authorities", roles);

        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setSubject(email)
                .setExpiration(expirationDate)
                .addClaims(extra)
                .signWith(ACCESS_TOKEN_SECRET)
                .compact();
    }


    public static UsernamePasswordAuthenticationToken getAuthentication(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            String email = claims.getSubject();
            List<Map<String, String>> authorities = (List<Map<String, String>>) claims.get("authorities");

            Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
            for (Map<String, String> authority : authorities) {
                grantedAuthorities.add(new SimpleGrantedAuthority(authority.get("authority")));
            }

            return new UsernamePasswordAuthenticationToken(email, null, grantedAuthorities);
        } catch (JwtException e) {
            return null;
        }
    }

    public Integer getUsuarioId(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(ACCESS_TOKEN_SECRET)
                .build()
                .parseClaimsJws(token)
                .getBody();
        Integer usuarioId = (Integer) claims.get("id");
        return usuarioId;
    }


}
