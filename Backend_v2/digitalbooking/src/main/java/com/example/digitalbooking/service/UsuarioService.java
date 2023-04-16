package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.DTOs.UsuarioDTO.UsuarioCreateDTO;
import com.example.digitalbooking.model.Rol;
import com.example.digitalbooking.model.Usuario;
import com.example.digitalbooking.repository.IRolRepository;
import com.example.digitalbooking.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private IRolRepository rolRepository;

    private PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario getUsuarioById(Integer id) throws ResourceNotFoundException {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Usuario no encontrado"));
        return usuario;
    }

    public Usuario addUsuario(UsuarioCreateDTO usuarioCreateDTO) throws BadRequestException{

        if(usuarioRepository.findOneByEmail(usuarioCreateDTO.getEmail()).isPresent()){
            throw new BadRequestException("El email utilizado ya se encuentra registrado");
        }

        Usuario usuarioACrear = new Usuario();

        if(usuarioCreateDTO.getNombre()==null){
            throw new BadRequestException("El usuario debe tener nombre");
        }
        usuarioACrear.setNombre(usuarioCreateDTO.getNombre());

        if(usuarioCreateDTO.getApellido()==null) {
            throw new BadRequestException("El usuario debe tener apellido");
        }
        usuarioACrear.setApellido(usuarioCreateDTO.getApellido());

        if(usuarioCreateDTO.getEmail()==null){
            throw new BadRequestException("El usuario debe tener email");
        }
        usuarioACrear.setEmail(usuarioCreateDTO.getEmail());

        if(usuarioCreateDTO.getEmail()==null){
            throw new BadRequestException("El usuario debe tener contrasenia");
        }
        String password = passwordEncoder.encode(usuarioCreateDTO.getContrasenia());
        usuarioACrear.setContrasenia(password);

        Rol rolUser = rolRepository.findByNombre("ROLE_USER");
        usuarioACrear.setRol(rolUser);

        return usuarioRepository.save(usuarioACrear);
    }

    public Usuario updateUsuario(Usuario usuarioUpdate, Integer id) throws ResourceNotFoundException{

        Usuario usuarioExistente = this.getUsuarioById(id);
        if(usuarioUpdate.getNombre()!=null){
            usuarioExistente.setNombre(usuarioUpdate.getNombre());
        }

        if(usuarioUpdate.getApellido()!=null) {
            usuarioExistente.setApellido(usuarioUpdate.getApellido());
        }

        if(usuarioUpdate.getEmail()!=null) {
            usuarioExistente.setEmail(usuarioUpdate.getEmail());
        }

        if(usuarioUpdate.getContrasenia()!=null) {
            usuarioExistente.setContrasenia(usuarioUpdate.getContrasenia());
        }

        if(usuarioUpdate.getRol()!=null) {
            Rol rol = rolRepository.findById(usuarioUpdate.getRol().getRolId())
                    .orElseThrow(()-> new ResourceNotFoundException("Rol no encontrado"));
            usuarioExistente.setRol(rol);
        }

        return usuarioRepository.save(usuarioExistente);
    }

    public void deleteUsuario(Integer id) throws ResourceNotFoundException {
        this.getUsuarioById(id); //Llama a metodo para corroborar si existe id en Base de Datos
        usuarioRepository.deleteById(id);
    }
}
