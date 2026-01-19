import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    ImageBackground,
    Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import Header from '../components/Header';
import { useState, useRef } from 'react';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width - 32;

// Color constants
const COLORS = {
    primary: '#da1d52',
    primaryDark: '#b8183f',
    primaryDarker: '#9a1435',
    secondary: '#ffca05',
    secondaryDark: '#e6b600',
};

export default function HomeScreen() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);
    const sliderRef = useRef(null);

    const referCards = [
        {
            id: 1,
            title: 'Refer a Friend',
            subtitle: 'Earn 500 Points',
            icon: 'people',
            gradient: ['#da1d52', '#b8183f'],
            hasButton: true
        },
        {
            id: 2,
            title: 'Fantasy League',
            subtitle: 'Win Exciting Prizes',
            icon: 'trophy',
            gradient: ['#ffca05', '#e6b600'],
            hasButton: true
        },
        {
            id: 3,
            title: 'Live Webinar',
            subtitle: 'Learn & Grow',
            icon: 'videocam',
            gradient: ['#da1d52', '#9a1435'],
            hasButton: true
        },
        {
            id: 4,
            title: 'Quick Survey',
            subtitle: 'Share Feedback',
            icon: 'clipboard',
            gradient: ['#ffca05', '#da1d52'],
            hasButton: true
        },
    ];

    const whatsNewItems = [
        {
            id: 1,
            image: 'https://picsum.photos/140/200?random=1',
            title: 'New Collection',
            tag: 'TRENDING'
        },
        {
            id: 2,
            image: 'https://picsum.photos/140/200?random=2',
            title: 'Smart Devices',
            tag: 'NEW'
        },
        {
            id: 3,
            image: 'https://picsum.photos/140/200?random=3',
            title: 'Best Sellers',
            tag: 'HOT'
        },
        {
            id: 4,
            image: 'https://picsum.photos/140/200?random=4',
            title: 'Exclusive',
            tag: 'LIMITED'
        },
    ];

    const topPicksCategories = [
        { name: 'Products', icon: 'cube-outline' },
        { name: 'Smart Home', icon: 'home-outline' },
        { name: 'Premium', icon: 'diamond-outline' },
        { name: 'New Launches', icon: 'rocket-outline' },
    ];

    const sliderImages = [
        {
            id: 1,
            image: 'https://picsum.photos/800/300?random=10',
            title: 'Premium Quality Products',
            subtitle: 'Explore our latest collection'
        },
        {
            id: 2,
            image: 'https://picsum.photos/800/300?random=11',
            title: 'Smart Home Solutions',
            subtitle: 'Transform your living space'
        },
        {
            id: 3,
            image: 'https://picsum.photos/800/300?random=12',
            title: 'Exclusive Deals',
            subtitle: 'Limited time offers'
        },
    ];

    const quickActions = [
        { id: 1, icon: 'scan-outline', label: 'Scan QR', color: '#da1d52' },
        { id: 2, icon: 'gift-outline', label: 'Rewards', color: '#ffca05' },
        { id: 3, icon: 'wallet-outline', label: 'Wallet', color: '#da1d52' },
        { id: 4, icon: 'receipt-outline', label: 'History', color: '#ffca05' },
    ];

    const handleSliderScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / (width - 32));
        setActiveSlide(slideIndex);
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
            >
                <View style={styles.content}>
                    {/* Enhanced Reward Card */}
                    <View style={styles.rewardCardContainer}>
                        <LinearGradient
                            colors={['#da1d52', '#b8183f', '#9a1435']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.rewardCard}
                        >
                            {/* Decorative Elements */}
                            <View style={styles.decorativeCircle1} />
                            <View style={styles.decorativeCircle2} />

                            {/* Header Section */}
                            <View style={styles.cardHeader}>
                                <View style={styles.welcomeContainer}>
                                    <Text style={styles.welcomeText}>Welcome back,</Text>
                                    <Text style={styles.userName}>Lalit! 👋</Text>
                                </View>

                                {/* Tier Badge */}
                                <TouchableOpacity style={styles.tierBadgeContainer}>
                                    <LinearGradient
                                        colors={['#ffca05', '#e6b600']}
                                        style={styles.tierCircle}
                                    >
                                        <View style={styles.tierInnerCircle}>
                                            <MaterialCommunityIcons name="shield-star" size={20} color="#fff" />
                                            <Text style={styles.tierText}>GOLD</Text>
                                        </View>
                                    </LinearGradient>
                                    <View style={styles.validBadge}>
                                        <Text style={styles.validText}>Valid till: NA</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* Tier Benefits Button */}
                            <TouchableOpacity style={styles.tierBenefitsButton}>
                                <LinearGradient
                                    colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.15)']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.tierBenefits}
                                >
                                    <FontAwesome5 name="crown" size={12} color="#ffca05" />
                                    <Text style={styles.tierBenefitsText}>TIER BENEFITS</Text>
                                    <Ionicons name="chevron-forward" size={16} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity>

                            {/* Balance Section */}
                            <View style={styles.balanceSection}>
                                <View style={styles.balanceCard}>
                                    <View style={styles.balanceHeader}>
                                        <Ionicons name="wallet" size={20} color="#ffca05" />
                                        <Text style={styles.balanceLabel}>Redeemable Balance</Text>
                                    </View>
                                    <View style={styles.balanceAmountContainer}>
                                        <Text style={styles.currencySymbol}>₹</Text>
                                        <Text style={styles.balanceAmount}>0</Text>
                                        <TouchableOpacity style={styles.redeemButton}>
                                            <Text style={styles.redeemButtonText}>REDEEM</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>

                    {/* Quick Actions */}
                    <View style={styles.quickActionsContainer}>
                        {quickActions.map((action) => (
                            <TouchableOpacity key={action.id} style={styles.quickActionItem}>
                                <View style={[styles.quickActionIcon, { backgroundColor: `${action.color}15` }]}>
                                    <Ionicons name={action.icon} size={24} color={action.color} />
                                </View>
                                <Text style={styles.quickActionLabel}>{action.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Enhanced Refer Section */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionTitle}>Earn More Points</Text>
                            <TouchableOpacity style={styles.seeAllButton}>
                                <Text style={styles.seeAllText}>See All</Text>
                                <Ionicons name="arrow-forward" size={14} color="#da1d52" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.referContentContainer}
                        >
                            {referCards.map((card) => (
                                <TouchableOpacity key={card.id} style={styles.referCard}>
                                    <LinearGradient
                                        colors={card.gradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={styles.referCardGradient}
                                    >
                                        <View style={styles.referIconContainer}>
                                            <Ionicons name={card.icon} size={28} color="#fff" />
                                        </View>
                                        <View style={styles.referCardContent}>
                                            <Text style={styles.referTitle}>{card.title}</Text>
                                            <Text style={styles.referSubtitle}>{card.subtitle}</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Enhanced What's New Section */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeaderRow}>
                            <View style={styles.sectionTitleRow}>
                                <Text style={styles.sectionTitle}>What's New</Text>
                                <View style={styles.newBadge}>
                                    <Text style={styles.newBadgeText}>4 NEW</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.seeAllButton}>
                                <Text style={styles.seeAllText}>See All</Text>
                                <Ionicons name="arrow-forward" size={14} color="#da1d52" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.whatsNewContainer}
                        >
                            {whatsNewItems.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.whatsNewCard}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.whatsNewImage}
                                        resizeMode="cover"
                                    />
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                                        style={styles.whatsNewOverlay}
                                    >
                                        <View style={styles.whatsNewTag}>
                                            <Text style={styles.whatsNewTagText}>{item.tag}</Text>
                                        </View>
                                        <Text style={styles.whatsNewTitle}>{item.title}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Enhanced Top Picks Section */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionTitle}>Top Picks for You</Text>
                            <TouchableOpacity style={styles.seeAllButton}>
                                <Text style={styles.seeAllText}>View All</Text>
                                <Ionicons name="arrow-forward" size={14} color="#da1d52" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.categoriesContainer}
                        >
                            {topPicksCategories.map((category, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.categoryChip,
                                        activeCategory === index && styles.categoryChipActive
                                    ]}
                                    onPress={() => setActiveCategory(index)}
                                >
                                    <Ionicons
                                        name={category.icon}
                                        size={16}
                                        color={activeCategory === index ? '#fff' : '#666'}
                                    />
                                    <Text style={[
                                        styles.categoryText,
                                        activeCategory === index && styles.categoryTextActive
                                    ]}>
                                        {category.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* Enhanced Image Slider */}
                        <View style={styles.sliderContainer}>
                            <ScrollView
                                ref={sliderRef}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onScroll={handleSliderScroll}
                                scrollEventThrottle={16}
                                contentContainerStyle={styles.sliderContent}
                            >
                                {sliderImages.map((item) => (
                                    <TouchableOpacity key={item.id} style={styles.sliderItem}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.sliderImage}
                                            resizeMode="cover"
                                        />
                                        <LinearGradient
                                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                                            style={styles.sliderOverlay}
                                        >
                                            <Text style={styles.sliderTitle}>{item.title}</Text>
                                            <Text style={styles.sliderSubtitle}>{item.subtitle}</Text>
                                            <TouchableOpacity style={styles.sliderButton}>
                                                <Text style={styles.sliderButtonText}>Explore Now</Text>
                                                <Ionicons name="arrow-forward" size={14} color="#fff" />
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                            {/* Pagination Dots */}
                            <View style={styles.paginationContainer}>
                                {sliderImages.map((_, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.paginationDot,
                                            activeSlide === index && styles.paginationDotActive
                                        ]}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>

                </View>
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
    content: {
        paddingTop: 16,
    },

    // Reward Card Styles
    rewardCardContainer: {
        marginHorizontal: 16,
        marginBottom: 20,
        borderRadius: 24,
        shadowColor: '#da1d52',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 12,
    },
    rewardCard: {
        borderRadius: 24,
        padding: 20,
        overflow: 'hidden',
    },
    decorativeCircle1: {
        position: 'absolute',
        top: -50,
        right: -50,
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    decorativeCircle2: {
        position: 'absolute',
        bottom: -30,
        left: -30,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    welcomeContainer: {
        flex: 1,
    },
    welcomeText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        fontWeight: '500',
    },
    userName: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 2,
    },
    tierBadgeContainer: {
        alignItems: 'center',
    },
    tierCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    tierInnerCircle: {
        alignItems: 'center',
    },
    tierText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 2,
    },
    validBadge: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
        marginTop: 6,
    },
    validText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '600',
    },
    tierBenefitsButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    tierBenefits: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 25,
        gap: 8,
    },
    tierBenefitsText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    balanceSection: {
        marginBottom: 20,
    },
    balanceCard: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 16,
        padding: 16,
    },
    balanceHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    balanceLabel: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        fontWeight: '500',
    },
    balanceAmountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        marginRight: 4,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
        flex: 1,
    },
    redeemButton: {
        backgroundColor: '#ffca05',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    redeemButtonText: {
        color: '#1a1a2e',
        fontSize: 12,
        fontWeight: 'bold',
    },

    // Quick Actions
    quickActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    quickActionItem: {
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

    // Section Styles
    sectionContainer: {
        marginBottom: 28,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
    newBadge: {
        backgroundColor: '#da1d52',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 12,
    },
    newBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    seeAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    seeAllText: {
        color: '#da1d52',
        fontSize: 14,
        fontWeight: '600',
    },

    // Refer Cards
    referContentContainer: {
        paddingHorizontal: 16,
    },
    referCard: {
        marginRight: 14,
        borderRadius: 18,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    referCardGradient: {
        width: 220,
        height: 100,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    referIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    referCardContent: {
        flex: 1,
    },
    referTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    referSubtitle: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.85)',
    },
    referArrow: {
        position: 'absolute',
        bottom: 12,
        right: 12,
    },

    // What's New
    whatsNewContainer: {
        paddingHorizontal: 16,
    },
    whatsNewCard: {
        width: 150,
        height: 220,
        marginRight: 14,
        borderRadius: 18,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    whatsNewImage: {
        width: '100%',
        height: '100%',
    },
    whatsNewOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        justifyContent: 'flex-end',
        padding: 14,
    },
    whatsNewTag: {
        backgroundColor: '#da1d52',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    whatsNewTagText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    whatsNewTitle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    // Categories
    categoriesContainer: {
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    categoryChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginRight: 12,
        borderWidth: 1.5,
        borderColor: '#E8E8E8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    categoryChipActive: {
        backgroundColor: '#da1d52',
        borderColor: '#da1d52',
    },
    categoryText: {
        fontSize: 13,
        color: '#666',
        fontWeight: '600',
    },
    categoryTextActive: {
        color: '#fff',
    },

    // Slider
    sliderContainer: {
        marginTop: 8,
    },
    sliderContent: {
        paddingHorizontal: 16,
    },
    sliderItem: {
        width: width - 32,
        height: 200,
        marginRight: 16,
        borderRadius: 20,
        overflow: 'hidden',
    },
    sliderImage: {
        width: '100%',
        height: '100%',
    },
    sliderOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60%',
        justifyContent: 'flex-end',
        padding: 20,
    },
    sliderTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    sliderSubtitle: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 13,
        marginBottom: 12,
    },
    sliderButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#da1d52',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 25,
        alignSelf: 'flex-start',
        gap: 8,
    },
    sliderButtonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        gap: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D0D0D0',
    },
    paginationDotActive: {
        width: 24,
        backgroundColor: '#da1d52',
    }
});