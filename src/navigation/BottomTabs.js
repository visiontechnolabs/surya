// src/navigation/BottomTabs.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RedeemScreen from '../screens/RedeemScreen';     // ← NEW IMPORT
import SchemesScreen from '../screens/SchemesScreen';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

function ScanButton() {
    return (
        <TouchableOpacity style={styles.scanButton}>
            <View style={styles.scanIcon}>
                <Text style={styles.scanIconText}>⊞</Text>
            </View>
            <Text style={styles.scanText}>Scan</Text>
        </TouchableOpacity>
    );
}

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#E53935',
                tabBarInactiveTintColor: '#999',
                tabBarLabelStyle: styles.tabBarLabel,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.icon, focused && styles.iconActive]}>🏠</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Redeem"
                component={RedeemScreen}           // ← Changed from HomeScreen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.icon, focused && styles.iconActive]}>🎁</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Scan"
                component={HomeScreen}
                options={{
                    tabBarButton: () => <ScanButton />,
                }}
            />
            <Tab.Screen
                name="Schemes"
                component={SchemesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.icon, focused && styles.iconActive]}>🤝</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.icon, focused && styles.iconActive]}>👤</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        paddingBottom: 22,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#fff',
    },
    tabBarLabel: {
        fontSize: 11,
        fontWeight: '600',
    },
    icon: {
        fontSize: 24,
        opacity: 0.5,
    },
    iconActive: {
        opacity: 1,
    },
    scanButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#E53935',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    scanIcon: {
        marginBottom: 2,
    },
    scanIconText: {
        fontSize: 24,
        color: '#fff',
    },
    scanText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
    },
});