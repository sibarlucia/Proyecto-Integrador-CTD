package com.example.digitalbooking.security;

import com.example.digitalbooking.model.Usuario;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


//Creamos la clase UserDetailsImpl, que es la implementacion de la Interfaz UserDetails propia de Spring Security.
//La clase UserDetailsImpl basicamente seria la Clase usuario que va a utilizar Spring Security para manejar
//  lo referido a autenticacion.
public class UserDetailsImpl implements UserDetails {

    private final Usuario usuario;

    public UserDetailsImpl(Usuario usuario) {
        this.usuario = usuario;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority((usuario.getRol().getNombre())));
        return authorities;
    }

    @Override
    public String getPassword() {
        return usuario.getContrasenia();
    }

    @Override
    public String getUsername() {
        return usuario.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getNombre(){
        return usuario.getNombre();
    }

    public String getApellido(){
        return usuario.getApellido();
    }

    public Integer getId() {
        return  usuario.getUsuarioId();
    }


}
