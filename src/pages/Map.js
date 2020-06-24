import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, Text, StyleSheet } from 'react-native'
import * as Location from 'expo-location'



export default function Main() {
    const [Localizacao, setLocalizacao] = useState(null)

    useEffect(() => {   
        async function Mylocation() {
            var { granted } = await Location.requestPermissionsAsync()  

            if(granted) { 
                let { coords } = await Location.getCurrentPositionAsync({   
                    enableHighAccuracy: true, 
                })

                var { latitude, longitude } = coords 
                
                setLocalizacao({  //Insere a localização do usuario 
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        Mylocation(); 
    }, [])

    if (!Localizacao)  //verifica permissão
        return null
    
    return (  /* Criação do mapa informando a localização usuario */ 
        <MapView initialRegion={Localizacao} style={styles.map}>  
            <Marker 
                coordinate={{ latitude: Localizacao.latitude , longitude: Localizacao.longitude }} 
                title='Sua posicao'
            />
        </MapView>
    )
}


const styles = StyleSheet.create({//Estilo container
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {//estilo mapa
        flex:2,
        marginLeft: 3
    }
    
  });