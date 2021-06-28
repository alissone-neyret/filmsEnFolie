import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    ActivityIndicator,
    Text,
} from "react-native";
import Recherche from '../Components/Recherche';

const Accueil = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Films en folie</Text>
            <Recherche />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titre: {
        fontSize: 30, 
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: 'purple',
        width: '100%',
        textAlign: 'center',      
      }
})
export default Accueil;