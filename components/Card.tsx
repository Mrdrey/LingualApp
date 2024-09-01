// Card.js
import React from 'react';
import { StyleSheet, 
    Text,
    View, 
    Image,
    TouchableOpacity,
    Pressable
} from 'react-native';


interface CardProps{
    title:string,
    description:string,
    image?:string
    style?:string
    onPress:any
}
const Card: React.FC<CardProps> = ({title,description,image,onPress})=>{
    return (
        <Pressable>
        <TouchableOpacity style={styles.card} onPress={onPress}>
             {Image && <Image source={{uri: image}} style={styles.cardImage}/>}
            <View style={styles.cardContent}>
               
                <View style={{width:270,}}>
                <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardDescription}>{description}</Text>
                </View>
                
                
            </View>
        </TouchableOpacity>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 15,
    
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    paddingLeft:12,
    paddingRight:10,
    paddingBottom:25,
    height:100,
    
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop:4,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign:'auto',
    
    
  },
});

export default Card;
