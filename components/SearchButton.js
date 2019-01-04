import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const searchButton = props => {

    // Check if the url begin with http: or https:
    this.isValidHTTP = function(httpString)
    {
        if ((httpString == "http:") || (httpString == "https:"))
        {
            return true;
        }

        return false;
    }

    this.getOffset = function(urlToCheck)
    {

        offset = ["", ""];

        // Check if the url is a youtube url
        if ((!this.isValidHTTP(urlToCheck[0])) || (urlToCheck[1] != "") || (urlToCheck[2] != "www.youtube.com")) 
        {
            alert("Devi inserire un url valido");
            return false;
        }

        // Differentiate the case for call the right API
        if (urlToCheck[3] == "user") 
        {
            offset[0] = "user";
            offset[1] = urlToCheck[4];
            return offset
        } else {
            offset[0] = "channel";
            offset[1] = urlToCheck[4];
            return offset
        }

        return false
    }

    // This function chek if the url is correct and, if is correct, open the new page
    this.searchButtonHandler = function(url) {

        if (url == null)
        {   
            alert("Devi inserire un url valido");
            return;
        }

        urlToCheck = url.split("/");
        console.log(urlToCheck);
        offset = this.getOffset(urlToCheck);

        if (offset == false) {
            alert("Devi inserire un url valido");
            return
        }

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