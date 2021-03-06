import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

import '../global.js';

const searchBarMain = props => {

    this.setUrl = function(urlToSet)
    {
        global.urlToSearch = urlToSet;
    }

    return(
        <View style = { styles.main }>

        <Text style = { styles.mainText }>Subs for:</Text>

        <TextInput 
            editable = {true}
            placeholder = {"Paste her a YouTube Channel url"}
            placeholderTextColor = {"#7f0000"}
            style = { styles.input }
            onChangeText = {(text) => this.setUrl(text) }
            selectTextOnFocus = {true}
            value = {global.urlToSearch}
        />

        </View>
    );
}

export default searchBarMain;

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        backgroundColor: '#b71c1c',
        height: 50,
        width: '100%',
        borderRadius: 3,
        fontSize: 20,
        textAlign: 'center',
        color: '#7f0000'
    },
    main: {
        marginTop: 180,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    mainText: {
        color: '#fff',
        fontSize: 28,
        marginBottom: 20,
    }
});