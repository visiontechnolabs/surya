// src/screens/RedeemScreen.js
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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const COLORS = {
    primary: '#da1d52',
    primaryDark: '#b8183f',
    primaryDarker: '#9a1435',
    secondary: '#ffca05',
    secondaryDark: '#e6b600',
};

export default function RedeemScreen() {
    const points = {
        earned: 0,
        redeemed: 0,
        balance: 0,
        transferredFY: 0,
        reservedTDS: 0,
    };

    const canRedeem = points.balance >= 300;

    const handleRedemption = (method) => {
        if (!canRedeem) {
            // Show alert or modal about minimum points requirement
            alert('Minimum 300 points required for redemption');
            return;
        }
        // Handle redemption logic
        console.log(`Redeem via ${method}`);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            {/* Sticky Header */}
            <Header />

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                bounces={true}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Page Title */}
                <View style={styles.titleContainer}>
                    <View style={styles.titleIconContainer}>
                        <Ionicons name="gift" size={24} color={COLORS.primary} />
                    </View>
                    <View>
                        <Text style={styles.screenTitle}>Redemption</Text>
                        <Text style={styles.screenSubtitle}>Convert your points to rewards</Text>
                    </View>
                </View>

                {/* Points Summary Card */}
                <View style={styles.pointsCardContainer}>
                    <LinearGradient
                        colors={[COLORS.primary, COLORS.primaryDark, COLORS.primaryDarker]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.pointsCard}
                    >
                        <View style={styles.decorativeCircle1} />
                        <View style={styles.decorativeCircle2} />

                        <View style={styles.mainPointsSection}>
                            <View style={styles.balanceContainer}>
                                <View style={styles.balanceIconContainer}>
                                    <Ionicons name="wallet" size={28} color={COLORS.secondary} />
                                </View>
                                <View>
                                    <Text style={styles.balanceLabel}>Available Balance</Text>
                                    <View style={styles.balanceValueRow}>
                                        <Text style={styles.balanceValue}>{points.balance}</Text>
                                        <Text style={styles.balanceUnit}>points</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.pointsGrid}>
                            <View style={styles.pointsGridItem}>
                                <View style={styles.pointsGridIcon}>
                                    <Ionicons name="trending-up" size={18} color={COLORS.secondary} />
                                </View>
                                <Text style={styles.pointsGridValue}>{points.earned}</Text>
                                <Text style={styles.pointsGridLabel}>Earned</Text>
                            </View>

                            <View style={styles.pointsGridDivider} />

                            <View style={styles.pointsGridItem}>
                                <View style={styles.pointsGridIcon}>
                                    <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
                                </View>
                                <Text style={styles.pointsGridValue}>{points.redeemed}</Text>
                                <Text style={styles.pointsGridLabel}>Redeemed</Text>
                            </View>

                            <View style={styles.pointsGridDivider} />

                            <View style={styles.pointsGridItem}>
                                <View style={styles.pointsGridIcon}>
                                    <Ionicons name="swap-horizontal" size={18} color="#2196F3" />
                                </View>
                                <Text style={styles.pointsGridValue}>{points.transferredFY}</Text>
                                <Text style={styles.pointsGridLabel}>Transferred</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.tdsContainer}>
                            <View style={styles.tdsLeft}>
                                <MaterialCommunityIcons name="shield-lock" size={20} color="rgba(255,255,255,0.8)" />
                                <View style={styles.tdsTextContainer}>
                                    <Text style={styles.tdsLabel}>Reserved for TDS</Text>
                                    <Text style={styles.tdsValue}>{points.reservedTDS} points</Text>
                                </View>
                            </View>
                            <View style={styles.tdsInfoButton}>
                                <Ionicons name="information-circle" size={20} color="rgba(255,255,255,0.7)" />
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* Video Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Learn How to Redeem</Text>
                        <View style={styles.videoBadge}>
                            <Ionicons name="play" size={10} color="#fff" />
                            <Text style={styles.videoBadgeText}>VIDEO</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.videoCard} activeOpacity={0.9}>
                        <View style={styles.videoThumbnailContainer}>
                            <Image
                                source={{ uri: 'https://i.ytimg.com/vi/PtPhgLKGjXg/hq720.jpg' }}
                                style={styles.videoThumbnail}
                                resizeMode="cover"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.6)']}
                                style={styles.videoGradient}
                            />
                            <View style={styles.playButton}>
                                <LinearGradient
                                    colors={[COLORS.primary, COLORS.primaryDark]}
                                    style={styles.playButtonGradient}
                                >
                                    <Ionicons name="play" size={24} color="#fff" />
                                </LinearGradient>
                            </View>
                            <View style={styles.durationBadge}>
                                <Ionicons name="time-outline" size={12} color="#fff" />
                                <Text style={styles.durationText}>1:38</Text>
                            </View>
                        </View>
                        <View style={styles.videoInfo}>
                            <Text style={styles.videoTitle}>How to redeem points to get rewards?</Text>
                            <Text style={styles.videoDescription}>
                                Step-by-step guide to convert your points into cash or UPI transfer
                            </Text>
                            <View style={styles.watchNowContainer}>
                                <Text style={styles.watchNowText}>Watch Now</Text>
                                <Ionicons name="arrow-forward" size={14} color={COLORS.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Redemption Options */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Choose Redemption Method</Text>

                    <View style={styles.optionsRow}>
                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleRedemption('bank')}
                            activeOpacity={0.8}
                        >
                            <LinearGradient
                                colors={['#fff', '#FFF5F7']}
                                style={styles.optionGradient}
                            >
                                <View style={[styles.optionIconContainer, { backgroundColor: `${COLORS.primary}15` }]}>
                                    <MaterialCommunityIcons
                                        name="bank"
                                        size={32}
                                        color={COLORS.primary}
                                    />
                                </View>
                                <Text style={styles.optionLabel}>Bank Transfer</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleRedemption('upi')}
                            activeOpacity={0.8}
                        >
                            <LinearGradient
                                colors={['#fff', '#FFFBEB']}
                                style={styles.optionGradient}
                            >
                                <View style={[styles.optionIconContainer, { backgroundColor: `${COLORS.secondary}25` }]}>
                                    <MaterialCommunityIcons
                                        name="cellphone-nfc"
                                        size={32}
                                        color={COLORS.secondaryDark}
                                    />
                                </View>
                                <Text style={styles.optionLabel}>UPI Transfer</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Quick Stats */}
                <View style={styles.quickStatsContainer}>
                    <View style={styles.quickStatItem}>
                        <View style={[styles.quickStatIcon, { backgroundColor: '#E8F5E9' }]}>
                            <Ionicons name="checkmark-done" size={20} color="#4CAF50" />
                        </View>
                        <View>
                            <Text style={styles.quickStatValue}>1 point = ₹1</Text>
                            <Text style={styles.quickStatLabel}>Conversion Rate</Text>
                        </View>
                    </View>
                    <View style={styles.quickStatDivider} />
                    <View style={styles.quickStatItem}>
                        <View style={[styles.quickStatIcon, { backgroundColor: '#FFF3E0' }]}>
                            <Ionicons name="flash" size={20} color="#FF9800" />
                        </View>
                        <View>
                            <Text style={styles.quickStatValue}>Instant</Text>
                            <Text style={styles.quickStatLabel}>Transfer Time</Text>
                        </View>
                    </View>
                </View>

                {/* Note Section */}
                <View style={styles.noteContainer}>
                    <View style={styles.noteHeader}>
                        <View style={styles.noteIconContainer}>
                            <Ionicons name="information-circle" size={22} color={COLORS.primary} />
                        </View>
                        <Text style={styles.noteTitle}>Important Information</Text>
                    </View>

                    <View style={styles.noteCard}>
                        <View style={styles.noteSection}>
                            <Text style={styles.noteSectionTitle}>Redemption Rules</Text>
                            
                            <View style={styles.noteItem}>
                                <View style={styles.noteBulletContainer}>
                                    <View style={styles.noteBullet} />
                                </View>
                                <Text style={styles.noteText}>
                                    Minimum <Text style={styles.noteHighlight}>300 points</Text> required
                                </Text>
                            </View>

                            <View style={styles.noteItem}>
                                <View style={styles.noteBulletContainer}>
                                    <View style={styles.noteBullet} />
                                </View>
                                <Text style={styles.noteText}>
                                    Conversion: <Text style={styles.noteHighlight}>1 point = ₹1</Text>
                                </Text>
                            </View>

                            <View style={styles.noteItem}>
                                <View style={styles.noteBulletContainer}>
                                    <View style={styles.noteBullet} />
                                </View>
                                <Text style={styles.noteText}>TDS as per Income Tax guidelines</Text>
                            </View>
                        </View>

                        <View style={styles.noteDivider} />

                        <View style={styles.noteSection}>
                            <View style={styles.tdsInfoHeader}>
                                <MaterialCommunityIcons name="shield-alert" size={18} color={COLORS.secondary} />
                                <Text style={styles.noteSectionTitle}>Reserved Points for TDS</Text>
                            </View>

                            <View style={styles.noteItem}>
                                <View style={styles.noteBulletContainer}>
                                    <Text style={styles.noteDash}>–</Text>
                                </View>
                                <Text style={styles.noteText}>Reserved at every redemption for tax</Text>
                            </View>

                            <View style={styles.noteItem}>
                                <View style={styles.noteBulletContainer}>
                                    <Text style={styles.noteDash}>–</Text>
                                </View>
                                <Text style={styles.noteText}>Benefits {'>'} ₹20K/year → used for TDS</Text>
                            </View>

                            <View style={styles.noteItem}>
                                <View style={styles.noteBulletContainer}>
                                    <Text style={styles.noteDash}>–</Text>
                                </View>
                                <Text style={styles.noteText}>Below ₹20K → released at FY end</Text>
                            </View>

                            <View style={styles.panInfoContainer}>
                                <View style={styles.panInfoItem}>
                                    <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                                    <Text style={styles.panInfoText}>PAN: Standard tax rules</Text>
                                </View>
                                <View style={styles.panInfoItem}>
                                    <Ionicons name="alert-circle" size={16} color="#FF9800" />
                                    <Text style={styles.panInfoText}>No PAN: 20% reserve</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

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

    // Title
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
        gap: 12,
    },
    titleIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: `${COLORS.primary}12`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
    screenSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },

    // Points Card
    pointsCardContainer: {
        marginHorizontal: 16,
        marginBottom: 24,
        borderRadius: 24,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 12,
    },
    pointsCard: {
        borderRadius: 24,
        padding: 20,
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
        bottom: -20,
        left: -20,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    mainPointsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    balanceIconContainer: {
        width: 52,
        height: 52,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 13,
        fontWeight: '500',
    },
    balanceValueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    balanceValue: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
    },
    balanceUnit: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: '600',
    },
    redeemNowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        gap: 6,
    },
    redeemNowButtonDisabled: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    redeemNowText: {
        color: COLORS.primaryDark,
        fontSize: 13,
        fontWeight: 'bold',
    },
    redeemNowTextDisabled: {
        color: 'rgba(255,255,255,0.7)',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginBottom: 16,
    },
    pointsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    pointsGridItem: {
        flex: 1,
        alignItems: 'center',
    },
    pointsGridIcon: {
        marginBottom: 8,
    },
    pointsGridValue: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    pointsGridLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 2,
    },
    pointsGridDivider: {
        width: 1,
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginHorizontal: 8,
    },
    tdsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 12,
        padding: 12,
    },
    tdsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    tdsTextContainer: {
        gap: 2,
    },
    tdsLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
    },
    tdsValue: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tdsInfoButton: {
        padding: 4,
    },

    // Section
    sectionContainer: {
        marginBottom: 24,
        paddingHorizontal: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1a2e',
        marginBottom: 20
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: -10,
        marginBottom: 16,
    },
    videoBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    videoBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },

    // Video
    videoCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    videoThumbnailContainer: {
        height: 180,
        position: 'relative',
    },
    videoThumbnail: {
        width: '100%',
        height: '100%',
    },
    videoGradient: {
        ...StyleSheet.absoluteFillObject,
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }],
    },
    playButtonGradient: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 4,
    },
    durationBadge: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    durationText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    videoInfo: {
        padding: 16,
    },
    videoTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1a1a2e',
        marginBottom: 6,
    },
    videoDescription: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
        marginBottom: 12,
    },
    watchNowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    watchNowText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '600',
    },

    // Options
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    optionCard: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
    },
    optionGradient: {
        padding: 20,
        alignItems: 'center',
        minHeight: 160,
        position: 'relative',
    },
    optionIconContainer: {
        width: 64,
        height: 64,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    optionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a1a2e',
        marginBottom: 4,
        textAlign: 'center',
    },
    optionDescription: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    optionArrow: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: `${COLORS.primary}10`,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Quick Stats
    quickStatsContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    quickStatItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    quickStatIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quickStatValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
    quickStatLabel: {
        fontSize: 12,
        color: '#666',
    },
    quickStatDivider: {
        width: 1,
        backgroundColor: '#E8E8E8',
        marginHorizontal: 12,
    },

    // Note
    noteContainer: {
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    noteHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14,
    },
    noteIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: `${COLORS.primary}12`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
    noteCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 3,
    },
    noteSection: {
        marginBottom: 4,
    },
    noteSectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    noteItem: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingRight: 8,
    },
    noteBulletContainer: {
        width: 20,
        alignItems: 'center',
    },
    noteBullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.primary,
        marginTop: 6,
    },
    noteDash: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    noteText: {
        flex: 1,
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    noteHighlight: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    noteDivider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 16,
    },
    tdsInfoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    panInfoContainer: {
        marginTop: 12,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        padding: 12,
        gap: 8,
    },
    panInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    panInfoText: {
        fontSize: 13,
        color: '#555',
    },
});