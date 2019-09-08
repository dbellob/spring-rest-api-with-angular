package com.davidbello.app.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 * @author David Bello
 *
 */

@Entity
@Table(name = "letter")
public class Letter {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "languaje_id", nullable = false)
	@JsonIgnore
	private Languaje languaje;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Languaje getLanguaje() {
		return languaje;
	}

	public void setLanguaje(Languaje languaje) {
		this.languaje = languaje;
	}

	@Override
	public String toString() {
		return "Letter [id=" + id + ", title=" + title + ", languaje=" + languaje + "]";
	}

}
