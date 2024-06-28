import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useMediaQuery } from "@react-hook/media-query";

import "../index.css";

const LegalMentions = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={isMobile ? "mt-[4rem]" : "mt-[8rem] bottomElement"}>
      <div className="w-full flex justify-center">
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg text-jet">
          <motion.div variants={isMobile ? {} : textVariant()}>
            <h2 className={styles.sectionHeadText}>Mentions Légales</h2>
          </motion.div>
          <div className="space-y-6">
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Informations Générales
              </h2>
              <p>
                <strong>Nom du propriétaire</strong> : BOSSARD Tristan
              </p>
              <p>
                <strong>Ville</strong> : ANGERS
              </p>
              <p>
                <strong>Site Web</strong> : https://tristanbossard.netlify.app/
              </p>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Hébergement</h2>
              <p>
                <strong>Hébergeur</strong> : Netlify
              </p>
              <p>
                <strong>Adresse de l’hébergeur</strong> : 2325 3rd Street, Suite
                296, San Francisco, California 94107,
              </p>
              <p>
                <strong>Site web de l’hébergeur</strong> :
                https://www.netlify.com
              </p>
              <p>
                <strong>Adresse mail de l’hébergeur</strong> :{" "}
                <a href="mailto:support@netlify.com">support@netlify.com</a>
              </p>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Propriété Intellectuelle
              </h2>
              <p>
                Le contenu de ce site, incluant, sans s’y limiter, les textes,
                images, graphismes, logos, vidéos, et icônes, est la propriété
                exclusive de BOSSARD Tristan, sauf indication contraire.{" "}
                <br></br>
                <br></br>Toute reproduction, distribution, modification,
                adaptation, retransmission ou publication, même partielle, de
                ces différents éléments est strictement interdite sans l’accord
                exprès par écrit de BOSSARD Tristan.
              </p>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Limitation de Responsabilité
              </h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que
                possible et le site est périodiquement remis à jour, mais peut
                toutefois contenir des inexactitudes, des omissions ou des
                lacunes. <br></br>
                <br></br>Si vous constatez une lacune, erreur ou ce qui paraît
                être un dysfonctionnement, merci de bien vouloir le signaler à
                BOSSARD Tristan en décrivant le problème de la manière la plus
                précise possible (page posant problème, action déclenchant, type
                d’ordinateur et de navigateur utilisé, etc.).
              </p>
              <br></br>
              <p>
                Tout contenu téléchargé se fait aux risques et périls de
                l’utilisateur et sous sa seule responsabilité. <br></br>
                <br></br>En conséquence, BOSSARD Tristan ne saurait être tenu
                responsable d’un quelconque dommage subi par l’ordinateur de
                l’utilisateur ou d’une quelconque perte de données consécutive
                au téléchargement.
              </p>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Liens Hypertextes</h2>
              <p>
                Le site https://tristanbossard.netlify.app/ peut contenir des
                liens hypertextes vers d’autres sites web. <br></br>
                <br></br>Cependant, BOSSARD Tristan n’a pas la possibilité de
                vérifier le contenu des sites ainsi visités, et n’assumera en
                conséquence aucune responsabilité de ce fait.
              </p>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Protection des Données Personnelles
              </h2>
              <p>
                Aucune information personnelle de l’utilisateur du site
                https://tristanbossard.netlify.app/ n’est publiée à l’insu de
                l’utilisateur, échangée, transférée, cédée ou vendue sur un
                support quelconque à des tiers. <br></br>
                <br></br>Les bases de données sont protégées par les
                dispositions de la loi de protection des données.
              </p>
            </section>
            <br></br>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Droit Applicable</h2>
              <p>
                Tout litige en relation avec l’utilisation du site
                https://tristanbossard.netlify.app/est soumis au droit français.{" "}
                <br></br>
                <br></br>Il est fait attribution exclusive de juridiction aux
                tribunaux compétents de ANGERS.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
