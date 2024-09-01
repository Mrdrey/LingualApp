import {View,Text, StyleSheet} from 'react-native';

export default function SignIn(){
    return(
        <View style={styles.container}> 
            <Text>
                Hello
            </Text>

        </View>


    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    

});