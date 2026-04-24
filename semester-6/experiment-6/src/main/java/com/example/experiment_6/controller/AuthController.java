package main.java.com.example.experiment_6.controller;

import com.example.jwt.service.JwtService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> user) {

        String username = user.get("username");
        String password = user.get("password");

        // Dummy validation
        if ("admin".equals(username) && "password".equals(password)) {
            String token = jwtService.generateToken(username);

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return response;
        }

        throw new RuntimeException("Invalid credentials");
    }

    @GetMapping("/protected")
    public String protectedRoute() {
        return "✅ You accessed protected route!";
    }
}