package project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.models.PostEntity;
import project.service.PostServiceInter;

import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {

    @Autowired
    PostServiceInter postServiceInter;

    @PostMapping("/add")
    public PostEntity createPost(@RequestBody PostEntity post){
        return postServiceInter.createPost(post);
    }

    @GetMapping("/get")
    public List<PostEntity> getAllPosts(){
        return postServiceInter.getAllPosts();
    }

}
