// src/screens/SchemesScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    StatusBar,
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

export default function SchemesScreen() {
    const [activeTab, setActiveTab] = useState('active');

    const activeSchemes = [
        {
            id: 1,
            title: 'ANNUAL LOYALTY PROGRAM',
            period: '01 Apr, 2026 to 31 Mar, 2027',
            isActive: true,
            tier: 'Gold',
            daysLeft: 245,
        },
        {
            id: 2,
            title: 'SUMMER BONUS SCHEME',
            period: '01 Jun, 2026 to 31 Aug, 2026',
            isActive: true,
            tier: 'Silver',
            daysLeft: 85,
        },
        {
            id: 3,
            title: 'FESTIVE REWARDS PROGRAM',
            period: '01 Oct, 2026 to 31 Dec, 2026',
            isActive: true,
            tier: 'Bronze',
            daysLeft: 150,
        },
    ];

    const pastSchemes = [
        {
            id: 4,
            title: 'ANNUAL LOYALTY PROGRAM 2025',
            period: '01 Apr, 2025 to 31 Mar, 2026',
            isActive: false,
            tier: 'Platinum',
            status: 'completed',
        },
    ];

    const schemes = activeTab === 'active' ? activeSchemes : pastSchemes;
    const count = schemes.length;

    const getTierColor = (tier) => {
        switch (tier?.toLowerCase()) {
            case 'platinum':
                return '#6B7280';
            case 'gold':
                return COLORS.secondary;
            case 'silver':
                return '#9CA3AF';
            case 'bronze':
                return '#CD7F32';
            default:
                return COLORS.primary;
        }
    };

    const getTierIcon = (tier) => {
        switch (tier?.toLowerCase()) {
            case 'platinum':
                return 'diamond';
            case 'gold':
                return 'trophy';
            case 'silver':
                return 'medal';
            case 'bronze':
                return 'ribbon';
            default:
                return 'star';
        }
    };

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
                {/* Page Title with Icon */}
                <View style={styles.titleContainer}>
                    <View style={styles.titleIconContainer}>
                        <MaterialCommunityIcons name="trophy-award" size={24} color={COLORS.primary} />
                    </View>
                    <View>
                        <Text style={styles.screenTitle}>My Schemes</Text>
                        <Text style={styles.screenSubtitle}>Track your rewards & programs</Text>
                    </View>
                </View>

                {/* Enhanced Segmented Control */}
                <View style={styles.segmentedControlContainer}>
                    <View style={styles.segmentedControl}>
                        <TouchableOpacity
                            style={[
                                styles.segmentButton,
                                activeTab === 'active' && styles.segmentButtonActive,
                            ]}
                            onPress={() => setActiveTab('active')}
                            activeOpacity={0.8}
                        >
                            <Ionicons 
                                name="flash" 
                                size={18} 
                                color={activeTab === 'active' ? '#fff' : '#666'} 
                            />
                            <Text
                                style={[
                                    styles.segmentText,
                                    activeTab === 'active' && styles.segmentTextActive,
                                ]}
                            >
                                Active
                            </Text>
                            {activeSchemes.length > 0 && (
                                <View style={[
                                    styles.segmentBadge,
                                    activeTab === 'active' && styles.segmentBadgeActive
                                ]}>
                                    <Text style={[
                                        styles.segmentBadgeText,
                                        activeTab === 'active' && styles.segmentBadgeTextActive
                                    ]}>
                                        {activeSchemes.length}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.segmentButton,
                                activeTab === 'past' && styles.segmentButtonActive,
                            ]}
                            onPress={() => setActiveTab('past')}
                            activeOpacity={0.8}
                        >
                            <Ionicons 
                                name="time" 
                                size={18} 
                                color={activeTab === 'past' ? '#fff' : '#666'} 
                            />
                            <Text
                                style={[
                                    styles.segmentText,
                                    activeTab === 'past' && styles.segmentTextActive,
                                ]}
                            >
                                Past
                            </Text>
                            {pastSchemes.length > 0 && (
                                <View style={[
                                    styles.segmentBadge,
                                    activeTab === 'past' && styles.segmentBadgeActive
                                ]}>
                                    <Text style={[
                                        styles.segmentBadgeText,
                                        activeTab === 'past' && styles.segmentBadgeTextActive
                                    ]}>
                                        {pastSchemes.length}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        {activeTab === 'active' ? 'Active Schemes' : 'Past Schemes'}
                    </Text>
                    <View style={styles.countBadge}>
                        <Text style={styles.countBadgeText}>{count} {count === 1 ? 'Scheme' : 'Schemes'}</Text>
                    </View>
                </View>

                {/* Content */}
                {count === 0 ? (
                    <View style={styles.emptyContainer}>
                        <View style={styles.emptyIconContainer}>
                            <LinearGradient
                                colors={['#f5f5f5', '#e8e8e8']}
                                style={styles.emptyIconGradient}
                            >
                                <Ionicons 
                                    name={activeTab === 'active' ? "flash-off" : "time-outline"} 
                                    size={48} 
                                    color="#bbb" 
                                />
                            </LinearGradient>
                        </View>
                        <Text style={styles.emptyTitle}>No {activeTab} schemes</Text>
                        <Text style={styles.emptySubtitle}>
                            {activeTab === 'active' 
                                ? 'Check back later for new schemes and programs' 
                                : 'Your completed schemes will appear here'}
                        </Text>
                        {activeTab === 'past' && (
                            <TouchableOpacity 
                                style={styles.switchTabButton}
                                onPress={() => setActiveTab('active')}
                            >
                                <Text style={styles.switchTabText}>View Active Schemes</Text>
                                <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
                            </TouchableOpacity>
                        )}
                    </View>
                ) : (
                    <View style={styles.schemesList}>
                        {schemes.map((scheme) => (
                            <TouchableOpacity 
                                key={scheme.id} 
                                style={styles.schemeCard} 
                                activeOpacity={0.9}
                            >
                                {/* Card Header */}
                                <View style={styles.cardHeader}>
                                    <View style={[
                                        styles.tierBadge,
                                        { backgroundColor: `${getTierColor(scheme.tier)}20` }
                                    ]}>
                                        <FontAwesome5 
                                            name={getTierIcon(scheme.tier)} 
                                            size={12} 
                                            color={getTierColor(scheme.tier)} 
                                        />
                                        <Text style={[
                                            styles.tierBadgeText,
                                            { color: getTierColor(scheme.tier) }
                                        ]}>
                                            {scheme.tier}
                                        </Text>
                                    </View>
                                    {scheme.isActive && scheme.daysLeft && (
                                        <View style={styles.daysLeftBadge}>
                                            <Ionicons name="time-outline" size={12} color="#666" />
                                            <Text style={styles.daysLeftText}>{scheme.daysLeft} days left</Text>
                                        </View>
                                    )}
                                    {!scheme.isActive && scheme.status === 'completed' && (
                                        <View style={styles.completedBadge}>
                                            <Ionicons name="checkmark-circle" size={14} color="#4CAF50" />
                                            <Text style={styles.completedText}>Completed</Text>
                                        </View>
                                    )}
                                </View>

                                {/* Card Content */}
                                <View style={styles.cardContent}>
                                    <View style={styles.schemeIconContainer}>
                                        <LinearGradient
                                            colors={[COLORS.secondary, COLORS.secondaryDark]}
                                            style={styles.schemeIconGradient}
                                        >
                                            <MaterialCommunityIcons 
                                                name="trophy-variant" 
                                                size={28} 
                                                color="#fff" 
                                            />
                                        </LinearGradient>
                                    </View>

                                    <View style={styles.schemeInfo}>
                                        <Text style={styles.schemeTitle}>{scheme.title}</Text>
                                        <View style={styles.periodContainer}>
                                            <Ionicons name="calendar-outline" size={14} color="#888" />
                                            <Text style={styles.periodText}>{scheme.period}</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Card Footer */}
                                <View style={styles.cardFooter}>
                                    <TouchableOpacity style={styles.detailsButton}>
                                        <Text style={styles.detailsButtonText}>View Details</Text>
                                        <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

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

    // Title Section
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

    // Segmented Control
    segmentedControlContainer: {
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    segmentedControl: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },
    segmentButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        gap: 8,
    },
    segmentButtonActive: {
        backgroundColor: COLORS.primary,
    },
    segmentText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#666',
    },
    segmentTextActive: {
        color: '#fff',
    },
    segmentBadge: {
        backgroundColor: '#E8E8E8',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    segmentBadgeActive: {
        backgroundColor: 'rgba(255,255,255,0.25)',
    },
    segmentBadgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666',
    },
    segmentBadgeTextActive: {
        color: '#fff',
    },

    // Section Header
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
    countBadge: {
        backgroundColor: `${COLORS.primary}12`,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    countBadgeText: {
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: '600',
    },

    // Empty State
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 40,
    },
    emptyIconContainer: {
        marginBottom: 20,
    },
    emptyIconGradient: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        lineHeight: 20,
    },
    switchTabButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: `${COLORS.primary}10`,
        borderRadius: 25,
    },
    switchTabText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '600',
    },

    // Scheme Cards
    schemesList: {
        paddingHorizontal: 16,
    },
    schemeCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
        overflow: 'hidden',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
    },
    tierBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    tierBadgeText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    daysLeftBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    daysLeftText: {
        fontSize: 12,
        color: '#666',
        fontWeight: '500',
    },
    completedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    completedText: {
        fontSize: 12,
        color: '#4CAF50',
        fontWeight: '600',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
        gap: 14,
    },
    schemeIconContainer: {
        shadowColor: COLORS.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    schemeIconGradient: {
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    schemeInfo: {
        flex: 1,
    },
    schemeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a1a2e',
        marginBottom: 6,
    },
    periodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    periodText: {
        fontSize: 13,
        color: '#888',
    },

    // Card Footer
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
    },
    detailsButtonText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '600',
    },
});