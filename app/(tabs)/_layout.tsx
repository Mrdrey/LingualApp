import {Tabs} from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { StatusBar } from 'react-native';

export default function Tablayout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
          
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            
           
          }}
          
        />
     
        <Tabs.Screen
          name="courses"
          options={{
            title: 'Courses',
            
            
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            
          }}
        />
      </Tabs>
    )
}
