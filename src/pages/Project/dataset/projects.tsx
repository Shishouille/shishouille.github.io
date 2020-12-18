import React from "react";
import mainT from "../assets/images/tandemz/notes.png";
import questions from "../assets/images/tandemz/questions.png";
import calendar from "../assets/images/tandemz/calendar.png";
import quotation from "../assets/images/tandemz/quotation.png";
import message from "../assets/images/tandemz/message.png";
import filters from "../assets/images/tandemz/filters.png";

import mainTW from "../assets/images/theWander/main.png";
import add from "../assets/images/theWander/add.png";
import map from "../assets/images/theWander/map.png";

export interface Project {
  img: string;
  alt?: string;
  title: string;
  description: string | React.ReactNode;
  toPrevious?: string;
  toNext?: string;
  link?: string;
}

export const projectsData = {
  tandemz: [
    {
      img: mainT,
      alt: "Aperçu",
      title: "Présentation",
      description: (
        <>
          <h4>Mon rôle</h4>
          <p> Développeuse web full-stack</p>
          <h4>Ma mission</h4>
          <p>
            Epauler Nicolas Djambazian, CTO, au développement de nouvelles
            fonctionnalités en agile, selon les retours utilisateurs et la
            vision de l'entreprise.
          </p>
          <h4>Durée</h4>
          <p>6 mois</p>
          <h4>Technologies </h4>
          <p>
            NestJS - PostgreSQL - ReactJS - Typescript - Redux - Jest - Formik -
            React-JSS - Material-UI
          </p>
        </>
      ),
      toNext: "/projets/tandemz/2",
      link: "https://www.tandemz.io/",
    },
    {
      img: calendar,
      alt: "Calendrier",
      title: "Calendrier",
      description: (
        <>
          <p>
            Création de A à Z d'un calendrier synchronisé avec Google Agenda, de
            l'intégration au service.
          </p>
          <p>
            Gestion de la connection avec l'API Google (xOAuth2, tokens, lien
            d'authorisation) et de l'affichage des évènements.
          </p>
          <p>
            Gestion de l'ajout, suppression et déplacement des créneaux
            disponibles et occupés, qui s'adaptent selon la durée et le temps
            minimum entre chaque rendez-vous.
          </p>
          <p>
            Composant calendrier réutilisable au sein de l'application, avec ou
            sans synchronisation.
          </p>
          <p>
            Synchronisaton des créneaux de l'utilisateur avec son agenda, côté
            application et côté Google Agenda.
          </p>
        </>
      ),
      toPrevious: "/projets/tandemz/1",
      toNext: "/projets/tandemz/3",
      link: "https://www.tandemz.io/",
    },
    {
      img: quotation,
      alt: "Devis",
      title: "Devis",
      description: (
        <>
          <p>
            Création d'un formulaire à plusieurs étapes, comportant divers
            composants (slider, checkboxes, radio boxes, selects et multi
            selects), répartis sur quatre pages, avec plusieurs flux.
          </p>
          <p>
            Intégration des étapes entre chaque page, aussi bien pour
            l'interface que pour l'API.
          </p>
          <p>Intégration du responsive.</p>
          <p>Ajout de l'inscription puis connexion à la fin du formulaire.</p>
        </>
      ),
      toPrevious: "/projets/tandemz/2",
      toNext: "/projets/tandemz/4",
      link: "https://www.tandemz.io/",
    },
    {
      img: message,
      alt: "Messagerie",
      title: "Messagerie mail",
      description: (
        <>
          <p>
            Recherches sur le protocole IMAP, POP3 et SMTP, (mais surtout IMAP).
          </p>
          <p>Création de l'onglet de messagerie.</p>
          <p>
            Création d'un service à l'écoute des emails entrants d'une adresse
            mail globale, qui répartit les messages entrants et sortants dans
            l'application sous forme de messages entre l'utilisateur et le
            client.
          </p>
        </>
      ),
      toPrevious: "/projets/tandemz/3",
      toNext: "/projets/tandemz/5",
      link: "https://www.tandemz.io/",
    },
    {
      img: questions,
      alt: "Questionnaire",
      title: "Créateur de questionnaire",
      description: (
        <>
          <p>
            Le questionnaire est composé de trois types de questions : texte
            court, texte long et champs multiples. Les champs multiples ont à
            disposition un champs "autre" et "aucun des choix ci-dessus", mais
            également plusieurs options : autorise plusieurs réponses, et si
            oui, un maximum et minimum de choix possibles.
          </p>
          <p>
            Les composants intervenant lors de la création du questionnaire sont
            réutilisables et centralisés. Ils serviront pour la preview des
            réponses, les questions en elles-mêmes, et les questions addressées
            aux participants.
          </p>
        </>
      ),
      toPrevious: "/projets/tandemz/4",
      toNext: "/projets/tandemz/6",
      link: "https://www.tandemz.io/",
    },
    {
      img: filters,
      alt: "Filtres",
      title: "Et bien plus !",
      description: (
        <ul>
          <li>Système de notes sauvegardées en temps réel.</li>
          <li>Création de filtres via react-use-table</li>
          <li>Envoi de mails de rappels automatisés</li>
          <li>Export CSV des réponses de participants</li>
          <li>Ajout d'une interface pour les multi-panels</li>
          <li>Intégrations de modales aux comportements divers.</li>
        </ul>
      ),
      toPrevious: "/projets/tandemz/5",
      link: "https://www.tandemz.io/",
    },
  ],
  "the-wander": [
    {
      img: mainTW,
      alt: "Aperçu",
      title: "Présentation",
      description: (
        <>
          <h4>Mon rôle</h4>
          <p>Développeuse web front-end</p>
          <h4>Ma mission</h4>
          <p>
            Réaliser une carte interactive d'un univers communautaire où l'on
            peut rajouter son propre astre.
          </p>
          <h4>Durée</h4>
          <p>1 mois</p>
          <h4>Technologies</h4>
          <p>ReactJS - Redux - SaSS - Styled-Components - Symfony - MySQL</p>
        </>
      ),
      toNext: "/projets/the-wander/2",
      link: "https://youtu.be/MyKdYNduR9M?t=1112",
    },
    {
      img: map,
      alt: "carte",
      title: "Création de la carte",
      description: (
        <>
          <p>
            Il fallait simuler l'infini et gérer le panning et zooming, comme
            sur une carte. Cela a été possible grâce à la librairie
            react-pan-zoom, que l'on a un peu dévié de son utilisation basique.
          </p>
          <p>
            La navigation se fait en drag and drop, si celle-ci est activée, et
            le zoom au scroll. On peut se recentrer sur le soleil, qui est le
            point central de la carte.
          </p>
          <p>
            Au clic d'un astre, nous avons accès à ses informations, comme
            l'auteur, la description, les commentaires, les propriétés ou la
            photo.
          </p>
        </>
      ),

      toPrevious: "/projets/the-wander/1",
      toNext: "/projets/the-wander/3",
      link: "https://youtu.be/MyKdYNduR9M?t=1112",
    },
    {
      img: add,
      alt: "Ajouter une étoile",
      title: "Affichage des Astres, Utilisateurs et Commentaires",
      description: (
        <>
          <p>
            Les utilisateurs peuvent s'inscrire et se connecter pour échanger
            sur les nouveaux astres crées, avec un espace dédié pour écrire des
            commentaires.
          </p>
          <p>Affichage des ressources selon le rôle de l'utilisateur.</p>
          <p>
            Intégration du formulaire d'authentification, page profil, modales
            d'ajout, d'édition, lecture et suppression des astres.
          </p>
        </>
      ),
      toPrevious: "/projets/the-wander/2",
      link: "https://youtu.be/MyKdYNduR9M?t=1112",
    },
  ],
};
