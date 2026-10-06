package com.testehelp.helpdesk.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testehelp.helpdesk.domain.Chamado;
import com.testehelp.helpdesk.services.ChamadoService;


@RestController
@RequestMapping("/chamados")
@CrossOrigin(origins = "http://localhost:5173")
public class ChamadoController {

    private final ChamadoService service;

    public ChamadoController(ChamadoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Chamado> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Chamado save(@RequestBody Chamado chamado) {
        return service.save(chamado);
    }
}