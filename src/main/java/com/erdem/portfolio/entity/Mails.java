package com.erdem.portfolio.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@NoArgsConstructor
@Entity
@Setter
@Getter
public class Mails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mailId;

    @Nullable
    private String firstName;

    @Nullable
    private String lastName;

    @Nullable
    @Column(unique = true)
    private String email;

    @Nullable
    private String content;

    @CreationTimestamp
    private Timestamp createdAt;

    @Nullable
    public String getContent() {
        return content;
    }

    public void setContent(@Nullable String content) {
        this.content = content;
    }

    @Nullable
    public String getEmail() {
        return email;
    }

    public void setEmail(@Nullable String email) {
        this.email = email;
    }

    @Nullable
    public String getLastName() {
        return lastName;
    }

    public void setLastName(@Nullable String lastName) {
        this.lastName = lastName;
    }

    @Nullable
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(@Nullable String firstName) {
        this.firstName = firstName;
    }
}
