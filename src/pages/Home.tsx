import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToast, IonToolbar} from '@ionic/react';
import './Home.css';
import React, {useState} from "react";
import {play as playIcon} from 'ionicons/icons';

const Home: React.FC = () => {

    const [showToast, setShowToast] = useState(false);
    const handleClick = () => {
        setShowToast(true);
        setTimeout(()=>setShowToast(false), 1500);
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mon application</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonButton color="primary" onClick={handleClick}>
              <IonIcon icon={playIcon} slot ="start"></IonIcon>
              Click Moi
          </IonButton>
          <IonToast isOpen={showToast} message ="Mon message!" ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Home;
