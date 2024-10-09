import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useMediaQuery } from "@react-hook/media-query";
import { useNavigate } from "react-router-dom";
import "../index.css";

const ConfidentialPolitic = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const navigate = useNavigate();

  // Fonction pour naviguer vers la page d'accueil et remonter en haut
  const handleGoHome = () => {
    navigate("/"); // Naviguer vers la page d'accueil
    window.scrollTo(0, 0); // Remonter en haut de la page
  };

  return (
    <div className={isMobile ? "mt-[4rem]" : "mt-[8rem] bottomElement"}>
      <div className="w-full flex justify-center">
        <div className="container p-4 bg-white shadow-md rounded-lg text-jet max-w-[90%] mx-2">
          <motion.div variants={isMobile ? {} : textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Politique de Confidentialité
            </h2>
          </motion.div>
          <div className="space-y-6">
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Date d’entrée en vigueur : <strong>29/06/2024</strong>
              </h2>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p>
                Bienvenue sur mon portfolio. <br></br>
                <br></br>La protection de vos données personnelles est une
                priorité. <br></br>
                <br></br>Cette politique de confidentialité décrit les types
                d’informations que je collecte sur vous lorsque vous visitez mon
                site web, comment ces informations sont utilisées et partagées,
                et comment elles sont protégées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Informations Collectées
              </h2>
              <p>Je peux collecter et traiter les informations suivantes :</p>
              <ul className="list-disc list-inside pl-4">
                <br></br>
                <li>
                  <strong>Informations personnelles :</strong> Votre nom,
                  adresse e-mail, numéro de téléphone, ou toute autre
                  information que vous fournissez volontairement.
                </li>
                <br></br>
                <li>
                  <strong>Données de navigation :</strong> Informations sur
                  votre visite, y compris l’adresse IP, le type de navigateur,
                  les pages visitées, la durée de la visite, et autres données
                  statistiques.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Utilisation des Informations
              </h2>
              <p>Les informations collectées peuvent être utilisées pour :</p>
              <br></br>
              <ul className="list-disc list-inside pl-4">
                <li>Répondre à vos demandes et questions.</li>
                <br></br>
                <li>Améliorer le contenu et la fonctionnalité du site.</li>
                <br></br>
                <li>
                  Envoyer des mises à jour ou des informations relatives à mon
                  portfolio.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Partage des Informations
              </h2>
              <p>
                Je ne vends, n’échange ni ne loue vos informations personnelles
                à des tiers. <br></br>
                <br></br>Je peux partager vos informations avec des tiers de
                confiance uniquement pour les raisons suivantes :
              </p>
              <ul className="list-disc list-inside pl-4">
                <br></br>
                <li>
                  Si cela est nécessaire pour fournir un service que vous avez
                  demandé.
                </li>
                <br></br>
                <li>Si la loi l’exige.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Sécurité des Données
              </h2>
              <p>
                Je prends des mesures appropriées pour protéger vos informations
                personnelles contre l’accès non autorisé, la divulgation ou la
                destruction. <br></br>
                <br></br>Cependant, aucune méthode de transmission sur Internet
                ou de stockage électronique n’est totalement sécurisée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
              <p>
                Mon site peut utiliser des cookies pour améliorer votre
                expérience utilisateur. <br></br>
                <br></br>Les cookies sont de petits fichiers stockés sur votre
                appareil qui nous aident à analyser l’utilisation du site.{" "}
                <br></br>
                <br></br>Vous pouvez configurer votre navigateur pour refuser
                les cookies, mais cela peut affecter certaines fonctionnalités
                du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Liens vers des Sites Tiers
              </h2>
              <p>
                Mon portfolio peut contenir des liens vers d’autres sites web.
                Je ne suis pas responsable des pratiques de confidentialité de
                ces sites. <br></br>
                <br></br>Je vous encourage à lire les politiques de
                confidentialité de chaque site que vous visitez.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Droits des Utilisateurs
              </h2>
              <p>
                Conformément à la réglementation applicable, vous avez le droit
                de :
              </p>
              <ul className="list-disc list-inside pl-4">
                <br></br>
                <li>Accéder à vos données personnelles.</li>
                <br></br>
                <li>Demander la rectification de vos données inexactes.</li>
                <br></br>
                <li>Demander la suppression de vos données.</li>
                <br></br>
                <li>
                  Vous opposer au traitement de vos données pour des motifs
                  légitimes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Modifications de cette Politique
              </h2>
              <p>
                Je peux mettre à jour cette politique de confidentialité de
                temps à autre. <br></br>
                <br></br>Toute modification sera publiée sur cette page avec une
                nouvelle date d’entrée en vigueur. <br></br>
                <br></br>Je vous encourage à consulter cette page régulièrement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                Si vous avez des questions ou des préoccupations concernant
                cette politique de confidentialité, n’hésitez pas à me
                contacter.
              </p>
            </section>
            <br></br>
            <br></br>
            <div className="flex justify-center mt-8">
              <button
                onClick={handleGoHome}
                className="px-6 py-3 text-timberWolf font-medium greenButtonML rounded-md shadow transition-colors duration-300"
              >
                Retour à la page principale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialPolitic;
