import React, {Component} from 'react';
import image3 from'../assets/img/icon1.svg';
import image4 from'../assets/img/icon2.svg';
import image5 from'../assets/img/icon3.svg';
import image6 from'../assets/img/icon4.svg';


import '../assets/sass/base/_base.scss';

//import UsersList from '../components/UsersList';

class Home extends Component {
    render() {
        return (
            <div className="global">
                <div className="principal">Voici WeDev</div>
                <div className="second">  <h1>APPLICATION DE GESTION DE PROJET POUR LES DEVS </h1> </div> 
                <div className="third">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, 
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
                        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
                        Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</div>
                <div class="container">
                    <div class="row">
                        <div class="col"><img src={image3}/><p>Vos reporting centralisés</p></div>
                        <div class="col"><img src={image4}/><p>Le suivi de vos activités en temps réel</p></div>
                        <div class="col"><img src={image5}/><p>Un gain de temps pour le pilotage</p></div>
                        <div class="col"><img src={image6}/><p>Des utiliaires pour votre dev</p></div>
                    </div>
                </div>
            </div>
                
        
           
        );
    }
}

export default Home;