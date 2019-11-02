import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Button from '@material-ui/core/Button';
// import Speech from 'react-speech';
import GoogleMapReact from 'google-map-react';

const Home: React.FC = () => {

  const center = {
    lat: 37.8715,
    lng: -122.2730
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marina Navigator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
      <IonContent>
        <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyAcnohmySzY0Me649IBXFQok6W-VzLJUDM'}}
        defaultCenter={center}
        defaultZoom={11}
        >
        </GoogleMapReact>
      </IonContent>
      <Button variant="contained" color="secondary">
      Navigate Me
      </Button>
    </IonPage>
  );
};

export default Home;
