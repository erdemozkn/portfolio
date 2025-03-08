package com.erdem.portfolio.repository;

import com.erdem.portfolio.entity.Mails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MailRepository extends JpaRepository<Mails, Long> {
    Mails findMailByMailId(Long id);
}
