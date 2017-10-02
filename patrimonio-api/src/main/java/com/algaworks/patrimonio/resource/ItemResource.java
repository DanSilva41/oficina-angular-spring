package com.algaworks.patrimonio.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.patrimonio.model.Item;
import com.algaworks.patrimonio.repository.ItemRepository;

@RestController // Essa anotação informa ao Spring MVC que esta classe é passível de atender requisições 
public class ItemResource {
	
	@Autowired // Dizer para o Spring fazer uma injeção de uma instância desta classe
	private ItemRepository itemRepository;
	
	@GetMapping("/itens")
	public List<Item> listar() {
		// Esse método retorna todos os Itens da minha base de dados
		return itemRepository.findAll();
	}
	
	@PostMapping("/itens")
	public Item adicionar(@RequestBody @Valid Item item) {
		return itemRepository.save(item);
	}
	
	// @RequestBody Informa ao Spring que as informações deste objeto estão vindo no corpo da requisição
}
