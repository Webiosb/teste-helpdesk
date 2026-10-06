package com.testehelp.helpdesk.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.testehelp.helpdesk.domain.Chamado;
import com.testehelp.helpdesk.repositories.ChamadoRepository;

@Service
public class ChamadoService {

private final ChamadoRepository repository;

public ChamadoService(ChamadoRepository repository) {
    this.repository = repository;
}

    public List<Chamado> findAll() {
        return repository.findAll();
    }

    public Chamado save(Chamado chamado) {
        return repository.save(chamado);
    }
}