// src/screens/AccountScreen.js
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

// Color constants
const COLORS = {
    primary: '#da1d52',
    primaryDark: '#b8183f',
    primaryDarker: '#9a1435',
    secondary: '#ffca05',
    secondaryDark: '#e6b600',
};

export default function AccountScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

    const userData = {
        name: 'Lalit Kumar',
        phone: '+91 98765 43210',
        email: 'lalit.kumar@email.com',
        memberId: 'POL2024001234',
        tier: 'GOLD',
        tierColor: COLORS.secondary,
        pointsToNextTier: 4500,
        nextTier: 'PLATINUM',
        totalEarned: 12500,
        redeemedPoints: 7500,
        balancePoints: 5000,
        memberSince: 'Jan 2024',
        profileImage: 'https://i.pravatar.cc/150',
    };

    const getTierColor = (tier) => {
        switch (tier?.toLowerCase()) {
            case 'platinum':
                return '#6B7280';
            case 'gold':
                return COLORS.secondary;
            case 'silver':
                return '#9CA3AF';
            case 'blue':
                return '#2196F3';
            default:
                return COLORS.primary;
        }
    };

    const accountMenuItems = [
        { id: 1, title: 'My Profile', subtitle: 'Personal information', icon: 'person-outline', iconType: 'ionicon' },
        { id: 2, title: 'Bank Account Details', subtitle: 'Manage your bank accounts', icon: 'wallet-outline', iconType: 'ionicon' },
        { id: 3, title: 'UPI Details', subtitle: 'Manage UPI IDs', icon: 'phone-portrait-outline', iconType: 'ionicon' },
        { id: 4, title: 'KYC Documents', subtitle: 'PAN, Aadhaar & more', icon: 'document-text-outline', iconType: 'ionicon' },
    ];

    const activityMenuItems = [
        { id: 5, title: 'Passbook', subtitle: 'Transaction history', icon: 'book-outline', iconType: 'ionicon', badge: 'NEW' },
        { id: 6, title: 'Unsuccessful Scans', subtitle: 'View scan issues', icon: 'scan-outline', iconType: 'ionicon' },
        { id: 7, title: 'Unsuccessful Redemptions', subtitle: 'Failed transactions', icon: 'alert-circle-outline', iconType: 'ionicon' },
        { id: 8, title: 'My Orders', subtitle: 'Track your orders', icon: 'cube-outline', iconType: 'ionicon' },
    ];

    const benefitsMenuItems = [
        { id: 9, title: 'Points Structure', subtitle: 'How points are calculated', icon: 'calculator-outline', iconType: 'ionicon' },
        { id: 10, title: 'Membership Benefits', subtitle: 'Tier-wise benefits', icon: 'gift-outline', iconType: 'ionicon' },
        { id: 11, title: 'Claim My Benefits', subtitle: 'Redeem your rewards', icon: 'checkmark-circle-outline', iconType: 'ionicon' },
        { id: 12, title: 'Refer & Earn', subtitle: 'Invite friends, earn points', icon: 'people-outline', iconType: 'ionicon', highlight: true },
    ];

    const supportMenuItems = [
        { id: 13, title: 'Help & Support', subtitle: 'FAQs and contact us', icon: 'help-circle-outline', iconType: 'ionicon' },
        { id: 14, title: 'Terms & Conditions', subtitle: 'Read our policies', icon: 'document-outline', iconType: 'ionicon' },
        { id: 15, title: 'Privacy Policy', subtitle: 'Your data is safe', icon: 'shield-checkmark-outline', iconType: 'ionicon' },
        { id: 16, title: 'Rate Us', subtitle: 'Share your feedback', icon: 'star-outline', iconType: 'ionicon' },
    ];

    const renderMenuItem = (item, isLast = false) => (
        <TouchableOpacity
            key={item.id}
            style={[
                styles.menuItem,
                !isLast && styles.menuItemBorder,
                item.highlight && styles.menuItemHighlight
            ]}
            activeOpacity={0.7}
        >
            <View style={[
                styles.menuIconContainer,
                item.highlight && styles.menuIconContainerHighlight
            ]}>
                <Ionicons
                    name={item.icon}
                    size={22}
                    color={item.highlight ? '#fff' : COLORS.primary}
                />
            </View>
            <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>{item.title}</Text>
                <Text style={styles.menuSubtext}>{item.subtitle}</Text>
            </View>
            {item.badge && (
                <View style={styles.menuBadge}>
                    <Text style={styles.menuBadgeText}>{item.badge}</Text>
                </View>
            )}
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Sticky Header - OUTSIDE ScrollView */}
            <Header />

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                bounces={true}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <TouchableOpacity style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: userData.profileImage }}
                            style={styles.profileImage}
                        />
                        <View style={styles.editBadge}>
                            <Ionicons name="camera" size={12} color="#fff" />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>{userData.name}</Text>
                        <Text style={styles.profilePhone}>{userData.phone}</Text>
                        <View style={styles.memberIdContainer}>
                            <Ionicons name="card-outline" size={14} color="#888" />
                            <Text style={styles.memberId}>{userData.memberId}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.editProfileButton}>
                        <Ionicons name="create-outline" size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                {/* Enhanced Membership Card */}
                <View style={styles.cardContainer}>
                    <LinearGradient
                        colors={[COLORS.primary, COLORS.primaryDark, COLORS.primaryDarker]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.membershipCard}
                    >
                        {/* Decorative Elements */}
                        <View style={styles.decorativeCircle1} />
                        <View style={styles.decorativeCircle2} />
                        <View style={styles.decorativePattern} />

                        {/* Card Header */}
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.memberSinceLabel}>Member Since</Text>
                                <Text style={styles.memberSinceValue}>{userData.memberSince}</Text>
                            </View>

                            {/* Tier Badge */}
                            <View style={styles.tierBadgeContainer}>
                                <LinearGradient
                                    colors={[getTierColor(userData.tier), getTierColor(userData.tier) + 'CC']}
                                    style={styles.tierBadge}
                                >
                                    <MaterialCommunityIcons name="shield-star" size={24} color="#fff" />
                                    <Text style={styles.tierText}>{userData.tier}</Text>
                                </LinearGradient>
                            </View>
                        </View>

                        {/* Progress to next tier */}
                        <View style={styles.progressSection}>
                            <View style={styles.progressHeader}>
                                <Text style={styles.progressLabel}>Progress to {userData.nextTier}</Text>
                                <Text style={styles.progressPoints}>
                                    {userData.pointsToNextTier.toLocaleString()} pts needed
                                </Text>
                            </View>
                            <View style={styles.progressBarContainer}>
                                <View style={styles.progressBar}>
                                    <LinearGradient
                                        colors={[COLORS.secondary, COLORS.secondaryDark]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={[styles.progressFill, { width: '65%' }]}
                                    />
                                </View>
                            </View>
                            <View style={styles.tierProgressRow}>
                                <View style={styles.tierDot}>
                                    <View style={[styles.tierDotInner, { backgroundColor: getTierColor('silver') }]} />
                                    <Text style={styles.tierDotLabel}>Silver</Text>
                                </View>
                                <View style={styles.tierDot}>
                                    <View style={[styles.tierDotInner, { backgroundColor: getTierColor('gold') }]} />
                                    <Text style={styles.tierDotLabel}>Gold</Text>
                                </View>
                                <View style={styles.tierDot}>
                                    <View style={[styles.tierDotInner, { backgroundColor: getTierColor('platinum') }]} />
                                    <Text style={styles.tierDotLabel}>Platinum</Text>
                                </View>
                            </View>
                        </View>

                        {/* Points Summary */}
                        <View style={styles.pointsSummary}>
                            <View style={styles.pointsItem}>
                                <View style={styles.pointsIconContainer}>
                                    <Ionicons name="trending-up" size={18} color={COLORS.secondary} />
                                </View>
                                <Text style={styles.pointsValue}>{userData.totalEarned.toLocaleString()}</Text>
                                <Text style={styles.pointsLabel}>Total Earned</Text>
                            </View>

                            <View style={styles.pointsDivider} />

                            <View style={styles.pointsItem}>
                                <View style={styles.pointsIconContainer}>
                                    <Ionicons name="checkmark-done" size={18} color="#4CAF50" />
                                </View>
                                <Text style={styles.pointsValue}>{userData.redeemedPoints.toLocaleString()}</Text>
                                <Text style={styles.pointsLabel}>Redeemed</Text>
                            </View>

                            <View style={styles.pointsDivider} />

                            <View style={styles.pointsItem}>
                                <View style={styles.pointsIconContainer}>
                                    <Ionicons name="wallet" size={18} color={COLORS.secondary} />
                                </View>
                                <Text style={styles.pointsValue}>{userData.balancePoints.toLocaleString()}</Text>
                                <Text style={styles.pointsLabel}>Balance</Text>
                            </View>
                        </View>

                        {/* View Benefits Button */}
                        <TouchableOpacity style={styles.viewBenefitsButton}>
                            <Text style={styles.viewBenefitsText}>View Tier Benefits</Text>
                            <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* Account Settings Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="person" size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>Account Settings</Text>
                    </View>
                    <View style={styles.menuContainer}>
                        {accountMenuItems.map((item, index) =>
                            renderMenuItem(item, index === accountMenuItems.length - 1)
                        )}
                    </View>
                </View>

                {/* Activity Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="time" size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>Activity</Text>
                    </View>
                    <View style={styles.menuContainer}>
                        {activityMenuItems.map((item, index) =>
                            renderMenuItem(item, index === activityMenuItems.length - 1)
                        )}
                    </View>
                </View>

                {/* Benefits Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="gift" size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>Benefits & Rewards</Text>
                    </View>
                    <View style={styles.menuContainer}>
                        {benefitsMenuItems.map((item, index) =>
                            renderMenuItem(item, index === benefitsMenuItems.length - 1)
                        )}
                    </View>
                </View>

                {/* Support Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="help-buoy" size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>Help & Support</Text>
                    </View>
                    <View style={styles.menuContainer}>
                        {supportMenuItems.map((item, index) =>
                            renderMenuItem(item, index === supportMenuItems.length - 1)
                        )}
                    </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
                    <Ionicons name="log-out-outline" size={22} color={COLORS.primary} />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>

                {/* App Version */}
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>Version 2.5.0</Text>
                    <Text style={styles.copyrightText}>© 2024 Polycab Experts</Text>
                </View>

                {/* Bottom spacing */}
                <View style={{ height: 120 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 16,
    },

    // Profile Section
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    profileImageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 3,
        borderColor: COLORS.primary,
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileInfo: {
        flex: 1,
        marginLeft: 16,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
    profilePhone: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    memberIdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 6,
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    memberId: {
        fontSize: 12,
        color: '#888',
        fontWeight: '500',
    },
    editProfileButton: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: `${COLORS.primary}12`,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Membership Card
    cardContainer: {
        marginHorizontal: 16,
        marginBottom: 24,
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 12,
    },
    membershipCard: {
        padding: 20,
        position: 'relative',
        overflow: 'hidden',
    },
    decorativeCircle1: {
        position: 'absolute',
        top: -40,
        right: -40,
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    decorativeCircle2: {
        position: 'absolute',
        bottom: -30,
        left: -30,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    decorativePattern: {
        position: 'absolute',
        top: 60,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    memberSinceLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        fontWeight: '500',
    },
    memberSinceValue: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 2,
    },
    tierBadgeContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    tierBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
    },
    tierText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    // Progress Section
    progressSection: {
        marginBottom: 20,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    progressLabel: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        fontWeight: '500',
    },
    progressPoints: {
        color: COLORS.secondary,
        fontSize: 13,
        fontWeight: 'bold',
    },
    progressBarContainer: {
        marginBottom: 12,
    },
    progressBar: {
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    tierProgressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tierDot: {
        alignItems: 'center',
    },
    tierDotInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginBottom: 4,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    tierDotLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 10,
        fontWeight: '500',
    },

    // Points Summary
    pointsSummary: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    pointsItem: {
        flex: 1,
        alignItems: 'center',
    },
    pointsIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    pointsValue: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pointsLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 11,
        fontWeight: '500',
        marginTop: 2,
    },
    pointsDivider: {
        width: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginHorizontal: 8,
    },
    viewBenefitsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 14,
        gap: 8,
    },
    viewBenefitsText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: 'bold',
    },

    // Quick Actions
    quickActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        marginBottom: 28,
    },
    quickAction: {
        alignItems: 'center',
    },
    quickActionIcon: {
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    quickActionLabel: {
        fontSize: 12,
        color: '#333',
        fontWeight: '500',
    },

    // Sections
    sectionContainer: {
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },

    // Menu Items
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    menuItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    menuItemHighlight: {
        backgroundColor: `${COLORS.primary}08`,
    },
    menuIconContainer: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: `${COLORS.primary}12`,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    menuIconContainerHighlight: {
        backgroundColor: COLORS.primary,
    },
    menuTextContainer: {
        flex: 1,
    },
    menuText: {
        fontSize: 15,
        color: '#1a1a2e',
        fontWeight: '600',
    },
    menuSubtext: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    menuBadge: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
        marginRight: 8,
    },
    menuBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },

    // Toggle Container
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    toggleLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    // Logout Button
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 20,
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        gap: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    // Version
    versionContainer: {
        alignItems: 'center',
        paddingVertical: 16,
    },
    versionText: {
        fontSize: 13,
        color: '#999',
        fontWeight: '500',
    },
    copyrightText: {
        fontSize: 12,
        color: '#bbb',
        marginTop: 4,
    },
});