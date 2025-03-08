package com.erdem.portfolio.service;

import com.erdem.portfolio.entity.Mails;
import com.erdem.portfolio.repository.MailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailService {

    private final MailRepository mailRepository;

    @Autowired
    public MailService(MailRepository mailRepository) {
        this.mailRepository = mailRepository;
    }

    public List<Mails> getMails() {
        return mailRepository.findAll();
    }
    public Mails getMail(Long id) {
        return mailRepository.findMailByMailId(id);
    }
    public void createMail(Mails mail) {
        mailRepository.save(mail);
    }
    public Mails updateMail(Long id, Mails mail) {
        Mails oldMail = mailRepository.findMailByMailId(id);
        oldMail.setContent(mail.getContent());
        oldMail.setFirstName(mail.getFirstName());
        oldMail.setLastName(mail.getLastName());
        oldMail.setEmail(mail.getEmail());
        return mailRepository.save(oldMail);
    }
    public void deleteMail(Long id) {
        mailRepository.deleteById(id);
    }
}
