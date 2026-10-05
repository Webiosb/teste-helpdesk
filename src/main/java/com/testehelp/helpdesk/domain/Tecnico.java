package com.testehelp.helpdesk.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.testehelp.helpdesk.domain.enums.Perfil;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity 
public class Tecnico extends Pessoa{

    private static final long serialVersionUID = 1L;

    @OneToMany(mappedBy = "tecnico")
    private List<Chamado> chamados = new ArrayList<>();

    public Tecnico() {
        super();
        addPerfil(Perfil.TECNICO);
    }
    public Tecnico(Integer id, String nome, String cpf, String email, String senha, Set<Integer> perfis) {
        super(id, nome, cpf, email, senha, perfis);
    }
    
    public List<Chamado> getChamados() {
        return chamados;
    }
    public void setChamados(List<Chamado> chamados) {
        this.chamados = chamados;
    }
}

