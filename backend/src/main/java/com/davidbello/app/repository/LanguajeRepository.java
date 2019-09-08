package com.davidbello.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.davidbello.app.model.Languaje;

/**
 * 
 * @author David Bello
 *
 */

@Repository
public interface LanguajeRepository extends JpaRepository<Languaje, Long> {

}