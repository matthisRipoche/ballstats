import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const BlockHeroHome = () => {

  return (
    <section className="bloc-hero_home">
        <div className="wrapper">
            <div className="content">
                <h1>Bienvenue sur : <br /><span>Ballstats</span></h1>
                <div className="text">
                    <p>L’outil de gestion de statistique le plus optimiser.</p>
                    <p>Pour vous accompagner toute la saison !</p>
                </div>
                <div className="btns">
                    <a className="btn orange" href="/login">Connexion</a>
                    <a className="btn white" href="/register">Inscription</a>
                </div>
            </div>

            <div className="card">
                <p>Développé par Matthis Ripoche</p>
                <div className="presentation">
                    <div className="image_container">
                        <img src="/public/img/photomoi.png" alt="" />
                    </div>
                    <p>Développeur étudiant en <span>BTS SIO</span> à l’ESPL d’Angers</p>
                </div>
                <div>
                    <a href="https://github.com/matthisRipoche"><p><IoIosMail color="#ff7f50" /> https://github.com/matthisRipoche</p></a>
                </div>
                
                <FaGithub color="#ff7f50" />
            </div>
        </div>
    </section>
  );
};

export default BlockHeroHome;
