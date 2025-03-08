package com.erdem.portfolio.controller;

import com.erdem.portfolio.entity.Mails;
import com.erdem.portfolio.service.MailService;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Controller
public class MailController {

    private final MailService mailService;

    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/api/mail")
    public ResponseEntity<?> sendMail(@RequestBody Mails mail) {
        try {
            mailService.createMail(mail);
            return ResponseEntity.ok(Map.of("message", "Mail sent successfully"));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body(Map.of("message", e.getMessage()));
        }
    }
}
