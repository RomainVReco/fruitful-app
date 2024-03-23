-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 23 mars 2024 à 09:40
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

DROP DATABASE IF EXISTS fruitful;

CREATE DATABASE fruitful CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE fruitful;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `fruitful`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
  `i_id_adresse` int(11) NOT NULL,
  `s_adresse` varchar(150) DEFAULT NULL,
  `s_code_postal` varchar(10) DEFAULT NULL,
  `s_ville` varchar(50) DEFAULT NULL,
  `s_pays` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `adresse`
--

INSERT INTO `adresse` (`i_id_adresse`, `s_adresse`, `s_code_postal`, `s_ville`, `s_pays`) VALUES
(1, '123 Main St', '12345', 'City1', 'Country1'),
(2, '456 Elm St', '67890', 'City2', 'Country2'),
(3, '789 Oak St', '13579', 'City3', 'Country3'),
(4, '321 Pine St', '24680', 'City4', 'Country4'),
(5, '654 Maple St', '98765', 'City5', 'Country5');

-- --------------------------------------------------------

--
-- Structure de la table `entree_agenda_evenement`
--

CREATE TABLE `entree_agenda_evenement` (
  `i_id_entree_agenda` int(11) NOT NULL,
  `d_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `i_id_evenement` int(11) NOT NULL,
  `d_quantite_realisee` decimal(10,2) DEFAULT NULL,
  `b_objectif_atteint` tinyint(1) DEFAULT NULL,
  `s_notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `i_id_evenement` int(11) NOT NULL,
  `s_nom_evenement` varchar(20) DEFAULT NULL,
  `i_id_type_evenement` smallint(6) NOT NULL,
  `i_id_objectif` int(11) DEFAULT NULL,
  `i_id_utilisateur` int(11) DEFAULT NULL,
  `i_id_icone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `icone`
--

CREATE TABLE `icone` (
  `i_id_icone` int(11) NOT NULL,
  `s_url` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `objectif`
--

CREATE TABLE `objectif` (
  `i_id_objectif` int(11) NOT NULL,
  `s_nom_frequence` varchar(20) DEFAULT NULL,
  `d_quantite_objectif` decimal(10,2) DEFAULT NULL,
  `i_id_unite_quantite` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `type_evenement`
--

CREATE TABLE `type_evenement` (
  `i_id_type_evenement` smallint(6) NOT NULL,
  `s_nom_type_evenement` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type_evenement`
--

INSERT INTO `type_evenement` (`i_id_type_evenement`, `s_nom_type_evenement`) VALUES
(1, 'Habitude'),
(2, 'Tâche'),
(3, 'Addiction');

-- --------------------------------------------------------

--
-- Structure de la table `unite_quantite`
--

CREATE TABLE `unite_quantite` (
  `i_id_unite_quantite` smallint(6) NOT NULL,
  `s_nom_unite` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `unite_quantite`
--

INSERT INTO `unite_quantite` (`i_id_unite_quantite`, `s_nom_unite`) VALUES
(1, 'heures'),
(2, 'minutes'),
(3, 'pas'),
(4, 'kilomètres');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idClient` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `nom` varchar(30) DEFAULT NULL,
  `prenom` varchar(30) DEFAULT NULL,
  `genre` varchar(20) DEFAULT NULL,
  `dateNaissance` date DEFAULT NULL,
  `idAdresse` int(11) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `estAbonne` tinyint(1) DEFAULT NULL,
  `newsletter` tinyint(1) DEFAULT NULL,
  `specialOffer` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`idClient`, `email`, `password`, `nom`, `prenom`, `genre`, `dateNaissance`, `idAdresse`, `telephone`, `estAbonne`, `newsletter`, `specialOffer`) VALUES
(2, 'example1@example.com', 'password123', 'Smith', 'John', 'Male', '1990-01-01', 1, '123-456-7890', 1, NULL, NULL),
(3, 'example2@example.com', 'password456', 'Johnson', 'Emily', 'Female', '1985-05-15', 2, '987-654-3210', 0, NULL, NULL),
(4, 'example3@example.com', 'password789', 'Brown', 'Michael', 'Male', '1988-10-20', 3, '555-123-4567', 1, NULL, NULL),
(5, 'example4@example.com', 'passwordabc', 'Davis', 'Sarah', 'Female', '1995-03-10', 4, '111-222-3333', 1, NULL, NULL),
(6, 'example5@example.com', 'passwordxyz', 'Miller', 'Christopher', 'Male', '1980-12-25', 5, '999-888-7777', 0, NULL, NULL),
(7, 'test', 'test', 'LAPOINTE', 'Bobby', NULL, NULL, 10, NULL, NULL, 1, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`i_id_adresse`);

--
-- Index pour la table `entree_agenda_evenement`
--
ALTER TABLE `entree_agenda_evenement`
  ADD PRIMARY KEY (`i_id_entree_agenda`),
  ADD KEY `i_id_evenement` (`i_id_evenement`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`i_id_evenement`),
  ADD KEY `i_id_type_evenement` (`i_id_type_evenement`),
  ADD KEY `i_id_objectif` (`i_id_objectif`),
  ADD KEY `i_id_utilisateur` (`i_id_utilisateur`),
  ADD KEY `i_id_icone` (`i_id_icone`);

--
-- Index pour la table `icone`
--
ALTER TABLE `icone`
  ADD PRIMARY KEY (`i_id_icone`);

--
-- Index pour la table `objectif`
--
ALTER TABLE `objectif`
  ADD PRIMARY KEY (`i_id_objectif`),
  ADD KEY `i_id_unite_quantite` (`i_id_unite_quantite`);

--
-- Index pour la table `type_evenement`
--
ALTER TABLE `type_evenement`
  ADD PRIMARY KEY (`i_id_type_evenement`);

--
-- Index pour la table `unite_quantite`
--
ALTER TABLE `unite_quantite`
  ADD PRIMARY KEY (`i_id_unite_quantite`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idClient`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `i_id_adresse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `entree_agenda_evenement`
--
ALTER TABLE `entree_agenda_evenement`
  MODIFY `i_id_entree_agenda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `i_id_evenement` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `icone`
--
ALTER TABLE `icone`
  MODIFY `i_id_icone` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `objectif`
--
ALTER TABLE `objectif`
  MODIFY `i_id_objectif` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_evenement`
--
ALTER TABLE `type_evenement`
  MODIFY `i_id_type_evenement` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `unite_quantite`
--
ALTER TABLE `unite_quantite`
  MODIFY `i_id_unite_quantite` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `entree_agenda_evenement`
--
ALTER TABLE `entree_agenda_evenement`
  ADD CONSTRAINT `entree_agenda_evenement_ibfk_1` FOREIGN KEY (`i_id_evenement`) REFERENCES `evenement` (`i_id_evenement`);

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `evenement_ibfk_1` FOREIGN KEY (`i_id_type_evenement`) REFERENCES `type_evenement` (`i_id_type_evenement`),
  ADD CONSTRAINT `evenement_ibfk_2` FOREIGN KEY (`i_id_objectif`) REFERENCES `objectif` (`i_id_objectif`),
  ADD CONSTRAINT `evenement_ibfk_3` FOREIGN KEY (`i_id_utilisateur`) REFERENCES `utilisateur` (`idClient`),
  ADD CONSTRAINT `evenement_ibfk_4` FOREIGN KEY (`i_id_icone`) REFERENCES `icone` (`i_id_icone`);

--
-- Contraintes pour la table `objectif`
--
ALTER TABLE `objectif`
  ADD CONSTRAINT `objectif_ibfk_1` FOREIGN KEY (`i_id_unite_quantite`) REFERENCES `unite_quantite` (`i_id_unite_quantite`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
