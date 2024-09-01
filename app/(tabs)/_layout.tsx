import {Tabs} from 'expo-router';


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
