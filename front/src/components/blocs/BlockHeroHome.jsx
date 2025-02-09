import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
                <p className="top">Développé par <span>Matthis Ripoche</span></p>
                <div className="presentation">
                    <div className="image_container">
                        <img src="/public/img/photomoi.png" alt="" />
                    </div>
                    <p>Développeur étudiant en <span>BTS SIO</span> à l’ESPL d’Angers</p>
                </div>
                <div className="contact">
                    <a href="mailto:matthisripoche@gmail.com"><p><IoIosMail color="#ff7f50" /> Me contacter par mail</p></a>
                    <a href="https://github.com/matthisRipoche"><p><FaGithub color="#ff7f50" /> Mon Github</p></a>
                    <a href="https://fr.linkedin.com/in/matthis-ripoche-919a771a6"><p><FaLinkedin color="#ff7f50" /> Mon profil Linkedin</p></a>                
                </div>
                
                
            </div>
        </div>
    </section>
  );
};

export default BlockHeroHome;
