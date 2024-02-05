import { Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons'
export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{
            headerShown:false //Esconde o header das paginas
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({color,size})=> <MaterialIcons color={color} size={size} name="home" />
            }}/>
             <Tabs.Screen name="profile" options={{
                title: 'Profile',
                tabBarIcon: ({color,size})=> <MaterialIcons color={color} size={size} name="person" />
            }}/>
              <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: ({color,size})=> <MaterialIcons color={color} size={size} name="settings" />
            }}/>
        </Tabs>
    )
}