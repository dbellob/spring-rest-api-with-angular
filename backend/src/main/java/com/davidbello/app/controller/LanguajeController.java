package com.davidbello.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.davidbello.app.repository.LanguajeRepository;
import com.davidbello.app.model.Languaje;
/**
 * 
 * @author David Bello
 *
 */

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class LanguajeController {

	@Autowired
	private LanguajeRepository languajeRepository;

	@CrossOrigin(origins = "*")
	@GetMapping("/languaje")
	public List<Languaje> getAllLanguajes() {
		return languajeRepository.findAll();
	}
}
