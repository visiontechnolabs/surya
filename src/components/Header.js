import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Color constants
const COLORS = {
    primary: '#da1d52',
    primaryDark: '#b8183f',
    secondary: '#ffca05',
};

export default function Header() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top > 0 ? insets.top : Platform.OS === 'ios' ? 44 : 24 }]}>
            <View style={styles.topBar}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoBox}>
                        <Text style={styles.logoText}>POLYCAB</Text>
                        <Text style={styles.logoSubtext}>EXPERTS</Text>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/100' }}
                        style={styles.avatar}
                    />
                    <View style={styles.onlineIndicator} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 100,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    logoContainer: {
        flex: 1,
    },
    logoBox: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
    logoText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    logoSubtext: {
        color: COLORS.secondary,
        fontSize: 9,
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: '#fff',
    },
});