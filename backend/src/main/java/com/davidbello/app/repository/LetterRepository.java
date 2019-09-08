package com.davidbello.app.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.davidbello.app.model.Letter;

/**
 * 
 * @author David Bello
 *
 */

@Repository
public interface LetterRepository extends JpaRepository<Letter, Integer> {
	List<Letter> findByLanguajeId(Long languajeId);
}