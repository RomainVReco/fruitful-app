-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 09 avr. 2024 à 15:59
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

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
  `idAdresse` int(11) NOT NULL,
  `adresse` varchar(150) DEFAULT NULL,
  `codePostal` varchar(5) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL,
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `adresse`
--

INSERT INTO `adresse` (`idAdresse`, `adresse`, `codePostal`, `ville`, `idUtilisateur`) VALUES
(1, '123 Main St', '12345', 'City1', 0),
(2, '456 Elm St', '67890', 'City2', 0),
(3, '789 Oak St', '13579', 'City3', 0),
(4, '321 Pine St', '24680', 'City4', 0),
(5, '654 Maple St', '98765', 'City5', 0),
(13, '202 Avenue Thiers', '33100', 'Bordeaux', 7);

--
-- Déclencheurs `adresse`
--
DELIMITER $$
CREATE TRIGGER `update_idAdresse` AFTER INSERT ON `adresse` FOR EACH ROW BEGIN
	UPDATE utilisateur SET idAdresse = NEW.idAdresse WHERE idUtilisateur = NEW.idUtilisateur;
END
$$
DELIMITER ;

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
  `idEvenement` int(11) NOT NULL,
  `nomEvenement` varchar(255) NOT NULL,
  `dateDebut` varchar(255) NOT NULL,
  `frequence` int(11) NOT NULL,
  `idTypeEvenement` smallint(6) NOT NULL,
  `idObjectif` int(11) DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idIcone` int(11) DEFAULT NULL,
  `estActif` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`idEvenement`, `nomEvenement`, `dateDebut`, `frequence`, `idTypeEvenement`, `idObjectif`, `idUtilisateur`, `idIcone`, `estActif`) VALUES
(2, 'Test_jambon', '05/05/2024', 3, 0, NULL, 7, 6, 0),
(3, 'Test_2', '09/05/2024', 4, 1, NULL, 7, 3, 0),
(4, 'Test_3', '28/03/2024', 7, 2, NULL, 7, 5, 1),
(7, 'Test_4', '30/12/2025', 3, 0, NULL, 7, 4, 1),
(10, 'Nouvelle tâche', '04/04/2024', 1, 0, NULL, 7, 8, 0),
(11, 'Exemple_4', '04/12/2025', 4, 0, NULL, 7, 8, 1);

-- --------------------------------------------------------

--
-- Structure de la table `icone`
--

CREATE TABLE `icone` (
  `idIcone` int(11) NOT NULL,
  `nomIcone` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `icone`
--

INSERT INTO `icone` (`idIcone`, `nomIcone`) VALUES
(0, 'logo-rasp.svg'),
(1, 'bicycle.svg'),
(2, 'binoculars.svg'),
(3, 'book.svg'),
(4, 'boombox.svg'),
(5, 'chat-dots.svg'),
(6, 'ev-station.svg'),
(7, 'airplane-engines.svg'),
(8, 'banane.png');

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
  `idTypeEvenement` smallint(6) NOT NULL,
  `nomTypeEvenement` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type_evenement`
--

INSERT INTO `type_evenement` (`idTypeEvenement`, `nomTypeEvenement`) VALUES
(0, 'Tâche'),
(1, 'Habitude'),
(2, 'Addiction');

-- --------------------------------------------------------

--
-- Structure de la table `unite_quantite`
--

CREATE TABLE `unite_quantite` (
  `idUnite` smallint(6) NOT NULL,
  `nomUnite` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `unite_quantite`
--

INSERT INTO `unite_quantite` (`idUnite`, `nomUnite`) VALUES
(1, 'heures'),
(2, 'minutes'),
(3, 'pas'),
(4, 'kilomètres');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL,
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

INSERT INTO `utilisateur` (`idUtilisateur`, `email`, `password`, `nom`, `prenom`, `genre`, `dateNaissance`, `idAdresse`, `telephone`, `estAbonne`, `newsletter`, `specialOffer`) VALUES
(2, 'test', 'password123', 'AYMARRE', 'Jean', 'Male', '1990-01-01', 1, '123-456-7890', 1, 0, 1),
(3, 'test', 'password456', 'AYMARRE', 'Jean', 'Female', '1985-05-15', 2, '987-654-3210', 0, 0, 1),
(4, 'test', 'password789', 'AYMARRE', 'Jean', 'Male', '1988-10-20', 3, '555-123-4567', 1, 0, 1),
(5, 'test', 'passwordabc', 'AYMARRE', 'Jean', 'Female', '1995-03-10', 4, '111-222-3333', 1, 0, 1),
(6, 'test', 'passwordxyz', 'AYMARRE', 'Jean', 'Male', '1980-12-25', 5, '999-888-7777', 0, 0, 1),
(7, 'test', 'test', 'BARRE', 'Raymond', NULL, NULL, 13, NULL, NULL, 0, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`idAdresse`);

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
  ADD PRIMARY KEY (`idEvenement`),
  ADD KEY `i_id_utilisateur` (`idUtilisateur`),
  ADD KEY `i_id_icone` (`idIcone`),
  ADD KEY `i_id_type_evenement` (`idTypeEvenement`) USING BTREE;

--
-- Index pour la table `icone`
--
ALTER TABLE `icone`
  ADD PRIMARY KEY (`idIcone`);

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
  ADD PRIMARY KEY (`idTypeEvenement`);

--
-- Index pour la table `unite_quantite`
--
ALTER TABLE `unite_quantite`
  ADD PRIMARY KEY (`idUnite`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idUtilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `idAdresse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `entree_agenda_evenement`
--
ALTER TABLE `entree_agenda_evenement`
  MODIFY `i_id_entree_agenda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `idEvenement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `icone`
--
ALTER TABLE `icone`
  MODIFY `idIcone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `objectif`
--
ALTER TABLE `objectif`
  MODIFY `i_id_objectif` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_evenement`
--
ALTER TABLE `type_evenement`
  MODIFY `idTypeEvenement` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `unite_quantite`
--
ALTER TABLE `unite_quantite`
  MODIFY `idUnite` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `entree_agenda_evenement`
--
ALTER TABLE `entree_agenda_evenement`
  ADD CONSTRAINT `entree_agenda_evenement_ibfk_1` FOREIGN KEY (`i_id_evenement`) REFERENCES `evenement` (`idEvenement`);

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `evenement_ibfk_1` FOREIGN KEY (`idTypeEvenement`) REFERENCES `type_evenement` (`idTypeEvenement`),
  ADD CONSTRAINT `evenement_ibfk_3` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`),
  ADD CONSTRAINT `evenement_ibfk_4` FOREIGN KEY (`idIcone`) REFERENCES `icone` (`idIcone`);

--
-- Contraintes pour la table `objectif`
--
ALTER TABLE `objectif`
  ADD CONSTRAINT `objectif_ibfk_1` FOREIGN KEY (`i_id_unite_quantite`) REFERENCES `unite_quantite` (`idUnite`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
