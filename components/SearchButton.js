import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const searchButton = props => {

    this.getOffset = function(urlToCheck)
    {

        if ((urlToCheck[0] != "http:") || (urlToCheck[0] != "https:") || (urlToCheck[2] != "youtube.com")) 
        {
            alert("Devi inserire un url valido0000");
            return;
        }

        if (urlToCheck[3] == "user") 
        {
            return offset["user", urlToCheck[4]]
        } else {
            return offset["id", urlToCheck[4]]
        }
    }

    this.searchButtonHandler = function(url) {

        if (url == null)
        {   
            alert("Devi inserire un url valido");
            return;
        }

        urlToCheck = url.split("/");
        console.log(urlToCheck);
        offset = this.getOffset(urlToCheck);
        console.log(offset);

    }
    return(
        <Button
            color = '#c62828'
            icon = {{name: 'search', color: '#c62828', size: 40}}
            buttonStyle = {styles.main}
            onPress = {() => {this.searchButtonHandler(global.urlToSearch)}}
        />
    );
};

export default searchButton;

const styles = StyleSheet.create({
    main: {
        marginTop: 25,
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        alignSelf: 'center',
        paddingLeft: 18
    }
});