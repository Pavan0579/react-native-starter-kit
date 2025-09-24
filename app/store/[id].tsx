import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import Svg, { Path, Ellipse, Circle, Mask, Rect, Defs, LinearGradient, Stop, G, ClipPath, FeFlood, FeBlend, FeGaussianBlur, Filter } from 'react-native-svg';
import { useLocalSearchParams, router } from 'expo-router';
import { useThemeColor } from '@/hooks/use-theme-color';

const { width: screenWidth } = Dimensions.get('window');

const activities = [
  {
    id: 1,
    name: 'Event Branding',
    icon: 'star',
    backgroundColor: '#F1F1F1',
  },
  {
    id: 2,
    name: 'Imaging',
    icon: 'image',
    backgroundColor: '#F1F1F1',
  },
  {
    id: 3,
    name: 'SKU Review',
    icon: 'device',
    backgroundColor: '#F1F1F1',
  },
];

export default function StoreDetailScreen() {
  const { id } = useLocalSearchParams();
  const backgroundColor = useThemeColor({}, 'background');

  const handleBack = () => {
    router.back();
  };

  const handleCheckIn = () => {
    console.log('Check in pressed for store:', id);
    // Add check-in logic here
  };

  const StatusBarComponent = () => (
    <View style={styles.statusBarContainer}>
      <Text style={styles.timeText}>9:41</Text>
      <View style={styles.statusBarRight}>
        <View style={styles.signalBars}>
          <View style={[styles.signalBar, styles.bar1]} />
          <View style={[styles.signalBar, styles.bar2]} />
          <View style={[styles.signalBar, styles.bar3]} />
          <View style={[styles.signalBar, styles.bar4]} />
        </View>
        <Svg width="20" height="12" viewBox="0 0 20 12" fill="none">
          <Path d="M10.0085 8.13354C10.7119 8.13354 11.3954 8.31839 11.9977 8.67085L12.2417 8.81366C12.4267 8.92193 12.4593 9.17532 12.3076 9.32658L10.2241 11.4043C10.0961 11.5319 9.88863 11.5319 9.76066 11.4043L7.69055 9.33993C7.53954 9.18934 7.57101 8.93724 7.75445 8.82817L7.99574 8.68471C8.60353 8.32332 9.29573 8.13354 10.0085 8.13354Z" fill="#333333"/>
          <Path d="M10.0084 4.31684C11.7583 4.31684 13.4385 4.89736 14.8072 5.97241L15.0007 6.12434C15.1549 6.24547 15.1684 6.47371 15.0296 6.61214L13.7858 7.85254C13.6707 7.96727 13.4887 7.98045 13.3582 7.88349L13.2066 7.7708C12.2822 7.08376 11.1675 6.71523 10.0084 6.71523C8.84225 6.71523 7.72104 7.08835 6.79354 7.78327L6.64176 7.89699C6.51129 7.99474 6.32859 7.98187 6.21319 7.8668L4.9698 6.62686C4.83128 6.48872 4.84443 6.26106 4.99794 6.1397L5.19027 5.98765C6.56225 4.90301 8.25006 4.31684 10.0084 4.31684Z" fill="#333333"/>
          <Path d="M10.0085 0.5C12.7856 0.5 15.4414 1.47963 17.5435 3.27524L17.723 3.42851C17.868 3.55237 17.8765 3.77314 17.7415 3.90777L16.5017 5.14415C16.3816 5.26393 16.1896 5.27232 16.0594 5.16348L15.9059 5.03512C14.2508 3.65119 12.1764 2.89839 10.0085 2.89839C7.83317 2.89839 5.75208 3.65638 4.09453 5.04896L3.94096 5.17798C3.81082 5.28731 3.61842 5.27913 3.4981 5.15914L2.25846 3.92294C2.12364 3.78849 2.13194 3.5681 2.27649 3.44411L2.45523 3.29079C4.55996 1.48548 7.22309 0.5 10.0085 0.5Z" fill="#333333"/>
        </Svg>
        <View style={styles.batteryContainer}>
          <View style={styles.batteryFrame}>
            <View style={styles.batteryFill} />
          </View>
        </View>
      </View>
    </View>
  );

  const MapComponent = () => (
    <View style={styles.mapContainer}>
      <View style={styles.mapBackground}>
        {/* Map marker */}
        <View style={styles.markerContainer}>
          <Svg width="29" height="32" viewBox="0 0 29 32" fill="none">
            <Path
              d="M14.5 1C21.4036 1.00012 27 6.47723 27 12C27 15.2867 25.1133 18.2026 22.2002 20.0254C19.9831 21.4252 16.8234 23.6351 16.044 27.1953C15.945 27.6468 15.5628 27.9969 15.1006 27.9971C14.6382 27.9971 14.2553 27.647 14.1563 27.1953C13.3754 23.6286 10.206 21.417 7.98833 20.0176C5.08224 18.1943 3.20024 15.282 3.20024 12C3.20024 6.47715 8.59644 1 14.5 1Z"
              fill="#EA352B"
              stroke="white"
              strokeWidth="1"
            />
            <Ellipse cx="14.5" cy="12" rx="5" ry="5" fill="rgba(0,0,0,0.4)" />
          </Svg>
        </View>
      </View>
    </View>
  );

  const ActivityCard = ({ activity }) => (
    <View style={styles.activityCard}>
      <View style={[styles.activityIconContainer, { backgroundColor: activity.backgroundColor }]}>
        {activity.icon === 'star' && (
          <Svg width="54" height="54" viewBox="0 0 54 54" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.1787 45.9385C44.393 45.9385 47.8107 42.523 47.813 38.3087V38.3042V32.2292C45.0297 32.2292 42.7752 29.9747 42.773 27.1915C42.773 24.4105 45.0275 22.1537 47.8107 22.1537H47.813V16.0787C47.8175 11.8622 44.4042 8.44224 40.19 8.43774H40.1765H13.8245C9.60799 8.43774 6.19024 11.8532 6.18799 16.0697V16.072V22.3495C8.87449 22.255 11.1267 24.3565 11.2212 27.043C11.2235 27.0925 11.2257 27.142 11.2257 27.1915C11.228 29.9702 8.98024 32.2247 6.20149 32.2292H6.18799V38.3042C6.18574 42.5185 9.60349 45.9385 13.8177 45.9385H13.82H40.1787Z"
              fill="#FFDB55"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.8354 20.3918L29.2214 23.1976C29.3564 23.4721 29.6174 23.6633 29.9212 23.7083L33.0194 24.1606C33.7867 24.2731 34.0904 25.2136 33.5369 25.7513L31.2959 27.9338C31.0754 28.1476 30.9764 28.4558 31.0259 28.7596L31.5547 31.8421C31.6852 32.6048 30.8864 33.1853 30.2024 32.8253L27.4327 31.3696C27.1604 31.2256 26.8364 31.2256 26.5642 31.3696L23.7967 32.8253C23.1104 33.1853 22.3117 32.6048 22.4422 31.8421L22.9709 28.7596C23.0227 28.4558 22.9214 28.1476 22.7009 27.9338L20.4622 25.7513C19.9087 25.2136 20.2124 24.2731 20.9774 24.1606L24.0757 23.7083C24.3794 23.6633 24.6427 23.4721 24.7777 23.1976L26.1614 20.3918C26.5034 19.6988 27.4934 19.6988 27.8354 20.3918Z"
              fill="white"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}
        {activity.icon === 'image' && (
          <View style={styles.imagingIcon}>
            <Svg width="109" height="109" viewBox="0 0 109 109" fill="none">
              <G clipPath="url(#clip0_8_231)">
                <Rect x="-1" width="109" height="109" fill="#F1F1F1"/>
                <Circle cx="52" cy="45" r="25" fill="#FFCC2B"/>
                <Path d="M22.0546 44.4299C22.0812 28.1763 35.2791 15.0216 51.5326 15.0482C67.7862 15.0748 80.9409 28.2726 80.9144 44.5262C80.8878 60.7798 67.6899 73.9345 51.4363 73.9079C35.1828 73.8813 22.028 60.6835 22.0546 44.4299Z" stroke="#478FF7" strokeMiterlimit="10" strokeDasharray="12 12"/>
                <Path d="M82.386 63.4439H22V25.0759H82.386V63.4439Z" fill="#478FF7"/>
                <Circle cx="40" cy="38" r="4" fill="white"/>
                <Path d="M29.4513 63.4438L43.582 49.9278L49.2282 54.8742L62.548 41.8618L80.4131 63.4438" fill="white"/>
                <Rect x="71" y="21" width="25" height="16" fill="#FFCC2B"/>
                <Circle cx="79" cy="27" r="2" fill="white"/>
                <Path d="M74.1321 37.1748L80.0734 31.492L82.4474 33.5717L88.0478 28.1008L95.5592 37.1748" fill="#333333"/>
              </G>
              <Defs>
                <ClipPath id="clip0_8_231">
                  <Rect width="109" height="109" rx="8" fill="white"/>
                </ClipPath>
              </Defs>
            </Svg>
          </View>
        )}
        {activity.icon === 'device' && (
          <View style={styles.deviceIcon}>
            <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <Rect x="8" y="12" width="48" height="32" rx="4" fill="#478FF7"/>
              <Rect x="12" y="16" width="40" height="24" rx="2" fill="white"/>
              <Rect x="16" y="20" width="32" height="4" fill="#478FF7"/>
              <Rect x="16" y="26" width="24" height="2" fill="#478FF7"/>
              <Rect x="16" y="30" width="24" height="2" fill="#478FF7"/>
              <Rect x="16" y="34" width="16" height="2" fill="#478FF7"/>
              <Rect x="26" y="46" width="12" height="6" fill="#478FF7"/>
            </Svg>
          </View>
        )}
      </View>
      <Text style={styles.activityName}>{activity.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <StatusBarComponent />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M7 18L1 12L7 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Store-{id}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Location</Text>
        
        <MapComponent />
        
        <View style={styles.contactCard}>
          <Text style={styles.contactLabel}>Contact</Text>
          <Text style={styles.contactName}>Thomas James</Text>
          <Text style={styles.contactPhone}>+1 (602) 218-3333</Text>
        </View>

        <Text style={styles.sectionTitle}>Activities</Text>
        
        <View style={styles.activitiesContainer}>
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
        <Text style={styles.checkInButtonText}>Check In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 44,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333333',
    letterSpacing: -0.68,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1,
    width: 20,
    height: 14,
  },
  signalBar: {
    backgroundColor: '#333333',
    borderRadius: 1,
    width: 3,
  },
  bar1: { height: 5 },
  bar2: { height: 7 },
  bar3: { height: 10 },
  bar4: { height: 12 },
  batteryContainer: {
    width: 28,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFrame: {
    width: 25,
    height: 13,
    borderRadius: 3.5,
    borderWidth: 1,
    borderColor: '#333333',
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFill: {
    width: 21,
    height: 9,
    backgroundColor: '#333333',
    borderRadius: 1.33,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.2,
    flex: 1,
    textAlign: 'center',
    marginRight: 32, // Compensate for back button width
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.18,
    marginBottom: 16,
  },
  mapContainer: {
    height: 300,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  mapBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  markerContainer: {
    position: 'absolute',
  },
  contactCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 24,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#808080',
    letterSpacing: -0.12,
    marginBottom: 4,
  },
  contactName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#808080',
    letterSpacing: -0.14,
    marginBottom: 8,
  },
  contactPhone: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    letterSpacing: -0.18,
  },
  activitiesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  activityCard: {
    flex: 1,
    alignItems: 'center',
  },
  activityIconContainer: {
    width: 109,
    height: 109,
    borderRadius: 8,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  imagingIcon: {
    width: 109,
    height: 109,
    borderRadius: 8,
    overflow: 'hidden',
  },
  deviceIcon: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.12,
    textAlign: 'center',
  },
  checkInButton: {
    backgroundColor: '#2F80ED',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkInButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: -0.17,
  },
});
