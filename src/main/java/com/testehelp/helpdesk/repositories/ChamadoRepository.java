package com.testehelp.helpdesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.testehelp.helpdesk.domain.Chamado;

public interface ChamadoRepository extends JpaRepository<Chamado, Integer> {
}