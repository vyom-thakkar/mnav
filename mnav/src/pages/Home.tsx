import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
// import Speech from 'react-speech';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

const Home: React.FC = () => {

  const [latDest, setLat] = useState("...");
  const [lngDest, setLng] = useState("");

  const ApiKey = "AIzaSyAcnohmySzY0Me649IBXFQok6W-VzLJUDM";
  Geocode.setApiKey(ApiKey);
  Geocode.setLanguage("en");
  Geocode.enableDebug();
  const center = {
    lat: 37.779835,
    lng: -122.387681
  };

  const setPoints = {
    "muni stop" : "QJH5+QX SoMa, San Francisco, CA",
    "java house" : "QJJ6+HV SoMa, San Francisco, CA",
    "yacht club" : "QJH6+XR SoMa, San Francisco, CA",
    "pier forty building" : "QJJ6+QR SoMa, San Francisco, CA",
    "bike hut": "QJJ6+MW SoMa, San Francisco, CA",
    "city kayak" : "QJJ7+MF SoMa, San Francisco, CA"
  };

  const input = "city kAyak"

  Geocode.fromAddress(setPoints[input.toLowerCase()]).then(
    response => {
      setLat(response.results[0].geometry.location.lat);
      setLng(response.results[0].geometry.location.lng);
    }
  )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color = "secondary">
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
      <IonContent className="ion-text-center">
        Destination: {latDest} , {lngDest}
      </IonContent>
      <IonContent className="ion-padding">
        <GoogleMapReact bootstrapURLKeys={{key: ApiKey}}
        defaultCenter={center}
        defaultZoom={11}
        >
        </GoogleMapReact>
      </IonContent>
      <IonContent className="ion-text-center">
        <Button variant="contained" color="secondary">
        Navigate Me
        </Button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
