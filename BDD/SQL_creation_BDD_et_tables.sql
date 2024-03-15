DROP DATABASE IF EXISTS fruitful;

CREATE DATABASE fruitful CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE fruitful;

CREATE TABLE adresse(
    i_id_adresse INT NOT NULL AUTO_INCREMENT,
    s_adresse VARCHAR(150),
    s_code_postal VARCHAR (10),
    s_ville VARCHAR (50),
    s_pays VARCHAR (20),
    PRIMARY KEY (i_id_adresse)
) ENGINE=INNODB ;

CREATE TABLE utilisateur(
    i_id_utilisateur INT NOT NULL AUTO_INCREMENT,
    s_email VARCHAR (50) NOT NULL,
    s_mot_de_passe VARCHAR (30) NOT NULL,
    s_nom VARCHAR (30),
    s_prenom VARCHAR (30) NOT NULL,
    s_genre VARCHAR (20),
    d_date_naissance DATE,
    i_id_adresse INT,
    s_telephone VARCHAR (15),
    s_est_abonne BOOLEAN,
    PRIMARY KEY (i_id_utilisateur),
    FOREIGN KEY (i_id_adresse) REFERENCES adresse (i_id_adresse)
) ENGINE=INNODB ;

CREATE TABLE unite_quantite(
    i_id_unite_quantite SMALLINT NOT NULL AUTO_INCREMENT,
    s_nom_unite VARCHAR (20),
    PRIMARY KEY (i_id_unite_quantite)
) ENGINE=INNODB;

CREATE TABLE type_evenement(
    i_id_type_evenement SMALLINT NOT NULL AUTO_INCREMENT,
    s_nom_type_evenement VARCHAR (20),
    PRIMARY KEY (i_id_type_evenement)
)  ENGINE=INNODB;

CREATE TABLE icone(
    i_id_icone INT NOT NULL AUTO_INCREMENT,
    s_url VARCHAR (200),
    PRIMARY KEY (i_id_icone)
)  ENGINE=INNODB;

INSERT INTO type_evenement (s_nom_type_evenement) VALUES
    ('Habitude'),
    ('Tâche'),
    ('Addiction');

INSERT INTO unite_quantite (s_nom_unite) VALUES
    ('heures'),
    ('minutes'),
    ('pas'),
    ('kilomètres');

CREATE TABLE objectif(
    i_id_objectif INT NOT NULL AUTO_INCREMENT,
    s_nom_frequence VARCHAR (20),
    d_quantite_objectif DECIMAL(10,2),
    i_id_unite_quantite SMALLINT,
    PRIMARY KEY (i_id_objectif),
    FOREIGN KEY (i_id_unite_quantite) REFERENCES unite_quantite (i_id_unite_quantite)
)  ENGINE=INNODB;

CREATE TABLE evenement(
    i_id_evenement INT NOT NULL AUTO_INCREMENT,
    s_nom_evenement VARCHAR (20),
    i_id_type_evenement SMALLINT NOT NULL,
    i_id_objectif INT(11),
    i_id_utilisateur INT(11),
    i_id_icone INT(11),
    PRIMARY KEY (i_id_evenement),
    FOREIGN KEY (i_id_type_evenement) REFERENCES type_evenement (i_id_type_evenement),
    FOREIGN KEY (i_id_objectif) REFERENCES objectif (i_id_objectif),
    FOREIGN KEY (i_id_utilisateur) REFERENCES utilisateur (i_id_utilisateur),
    FOREIGN KEY (i_id_icone) REFERENCES icone (i_id_icone)
)  ENGINE=INNODB;

CREATE TABLE entree_agenda_evenement(
    i_id_entree_agenda INT NOT NULL AUTO_INCREMENT,
    d_date TIMESTAMP NOT NULL,
    i_id_evenement INT NOT NULL,
    d_quantite_realisee DECIMAL(10,2),
    b_objectif_atteint BOOLEAN,
    s_notes TEXT(200),
    PRIMARY KEY(i_id_entree_agenda),
    FOREIGN KEY (i_id_evenement) REFERENCES evenement (i_id_evenement)
)  ENGINE=INNODB;
