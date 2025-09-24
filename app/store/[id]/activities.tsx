import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Svg, { Path, Circle, Defs, RadialGradient, Stop } from 'react-native-svg';
import { useLocalSearchParams, router } from 'expo-router';
import { useThemeColor } from '@/hooks/use-theme-color';

const activities = [
  {
    id: 1,
    name: 'Event Branding',
    completed: true,
    icon: 'star',
  },
  {
    id: 2,
    name: 'Imaging',
    completed: false,
    icon: 'image',
  },
  {
    id: 3,
    name: 'Sku Review',
    completed: false,
    icon: 'device',
  },
];

export default function ActivitiesScreen() {
  const { id } = useLocalSearchParams();
  const backgroundColor = useThemeColor({}, 'background');

  const handleBack = () => {
    router.back();
  };

  const handleStartActivity = (activityId: number) => {
    console.log('Starting activity:', activityId);
    // Add activity start logic here
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
          <Path d="M10.0085 8.13354C10.7119 8.13354 11.3955 8.31839 11.9977 8.67086L12.2417 8.81367C12.4267 8.92194 12.4593 9.17532 12.3076 9.32658L10.2241 11.4043C10.0961 11.5319 9.88865 11.5319 9.76067 11.4043L7.69057 9.33994C7.53955 9.18934 7.57103 8.93724 7.75447 8.82818L7.99575 8.68471C8.60355 8.32333 9.29575 8.13354 10.0085 8.13354Z" fill="#333333"/>
          <Path d="M10.0084 4.31689C11.7584 4.31689 13.4385 4.89741 14.8072 5.97247L15.0007 6.1244C15.1549 6.24553 15.1684 6.47377 15.0296 6.6122L13.7858 7.8526C13.6707 7.96733 13.4887 7.98051 13.3582 7.88355L13.2066 7.77086C12.2822 7.08382 11.1675 6.71529 10.0084 6.71529C8.84227 6.71529 7.72105 7.0884 6.79355 7.78333L6.64177 7.89705C6.51131 7.9948 6.3286 7.98193 6.21321 7.86686L4.96981 6.62691C4.83129 6.48878 4.84444 6.26112 4.99795 6.13976L5.19029 5.9877C6.56226 4.90306 8.25008 4.31689 10.0084 4.31689Z" fill="#333333"/>
          <Path d="M10.0085 0.5C12.7856 0.5 15.4414 1.47963 17.5436 3.27524L17.723 3.42851C17.868 3.55237 17.8765 3.77314 17.7415 3.90777L16.5017 5.14415C16.3816 5.26393 16.1896 5.27232 16.0594 5.16348L15.9059 5.03512C14.2508 3.65119 12.1764 2.89839 10.0085 2.89839C7.83318 2.89839 5.75209 3.65638 4.09455 5.04896L3.94097 5.17798C3.81084 5.28731 3.61844 5.27913 3.49811 5.15914L2.25847 3.92294C2.12365 3.78849 2.13195 3.5681 2.2765 3.44411L2.45525 3.29079C4.55997 1.48548 7.22311 0.5 10.0085 0.5Z" fill="#333333"/>
        </Svg>
        <View style={styles.batteryContainer}>
          <View style={styles.batteryFrame}>
            <View style={styles.batteryFill} />
          </View>
        </View>
      </View>
    </View>
  );

  const CircularProgress = () => (
    <View style={styles.progressCard}>
      <View style={styles.progressContainer}>
        <Svg width="144" height="144" viewBox="0 0 144 144" fill="none">
          <Path d="M144 72C144 111.765 111.765 144 72 144C32.2355 144 0 111.765 0 72C0 32.2355 32.2355 0 72 0C111.765 0 144 32.2355 144 72ZM11.52 72C11.52 105.402 38.5978 132.48 72 132.48C105.402 132.48 132.48 105.402 132.48 72C132.48 38.5978 105.402 11.52 72 11.52C38.5978 11.52 11.52 38.5978 11.52 72Z" fill="#3C3B3B"/>
          <Path d="M72 5.76C72 2.57884 74.5831 -0.0239598 77.7541 0.230249C89.9664 1.20928 101.762 5.29237 112.001 12.1342C123.841 20.0456 133.07 31.2905 138.519 44.4468C143.969 57.6031 145.395 72.0799 142.617 86.0465C140.214 98.1248 134.761 109.352 126.818 118.68C124.755 121.102 121.088 121.088 118.839 118.839C116.589 116.589 116.614 112.958 118.639 110.505C124.99 102.812 129.36 93.6419 131.318 83.7991C133.652 72.0671 132.454 59.9066 127.876 48.8553C123.299 37.804 115.547 28.3583 105.601 21.7127C97.2566 16.1372 87.6823 12.7427 77.7514 11.794C74.5847 11.4915 72 8.94116 72 5.76Z" fill="url(#paint0_radial_8_539)"/>
          <Defs>
            <RadialGradient id="paint0_radial_8_539" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.8 -61.2) rotate(42.7688) scale(196.159)">
              <Stop stopColor="white"/>
            </RadialGradient>
          </Defs>
        </Svg>
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressNumber}>1/3</Text>
          <Text style={styles.completedText}>Completed</Text>
        </View>
      </View>
    </View>
  );

  const ActivityCard = ({ activity }) => (
    <View style={styles.activityCard}>
      <View style={styles.activityContent}>
        <View style={styles.activityIcon}>
          {activity.icon === 'star' && (
            <Svg width="47" height="47" viewBox="0 0 47 47" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.9704 39.9833C38.6383 39.9833 41.613 37.0105 41.615 33.3426V33.3387V28.0512C39.1925 28.0512 37.2303 26.0889 37.2283 23.6665C37.2283 21.246 39.1906 19.2818 41.613 19.2818H41.615V13.9942C41.6189 10.3243 38.6481 7.34767 34.9802 7.34375H34.9684H12.0324C8.3625 7.34375 5.38779 10.3165 5.38583 13.9864V13.9884V19.4521C7.72408 19.3699 9.68438 21.199 9.76663 23.5372C9.76858 23.5803 9.77054 23.6234 9.77054 23.6665C9.7725 26.085 7.81613 28.0473 5.39758 28.0512H5.38583V33.3387C5.38388 37.0066 8.35858 39.9833 12.0265 39.9833H12.0285H34.9704Z"
                fill="#FFDB55"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.2271 17.7485L25.4335 20.1906C25.551 20.4295 25.7781 20.5959 26.0425 20.6351L28.7391 21.0287C29.4069 21.1266 29.6713 21.9452 29.1896 22.4133L27.2391 24.3129C27.0471 24.4989 26.961 24.7672 27.0041 25.0316L27.4643 27.7145C27.5778 28.3784 26.8826 28.8836 26.2873 28.5703L23.8766 27.3032C23.6396 27.1779 23.3576 27.1779 23.1207 27.3032L20.7119 28.5703C20.1146 28.8836 19.4194 28.3784 19.533 27.7145L19.9932 25.0316C20.0383 24.7672 19.9501 24.4989 19.7582 24.3129L17.8097 22.4133C17.3279 21.9452 17.5923 21.1266 18.2581 21.0287L20.9548 20.6351C21.2191 20.5959 21.4483 20.4295 21.5658 20.1906L22.7701 17.7485C23.0678 17.1454 23.9295 17.1454 24.2271 17.7485Z"
                fill="white"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          )}
          {activity.icon === 'image' && (
            <Svg width="43" height="35" viewBox="0 0 43 35" fill="none">
              <Path d="M31.5554 17.7048C31.5554 25.3862 25.3284 31.6132 17.647 31.6132C9.96564 31.6132 3.73862 25.3862 3.73862 17.7048C3.73862 10.0234 9.96564 3.79639 17.647 3.79639C25.3284 3.79639 31.5554 10.0234 31.5554 17.7048Z" fill="#FFCC2B"/>
              <Path d="M1.03084 17.6161C1.04585 8.43931 8.49738 1.01212 17.6742 1.02713C26.851 1.04214 34.2782 8.49367 34.2631 17.6705C34.2481 26.8473 26.7966 34.2745 17.6198 34.2594C8.44302 34.2444 1.01582 26.7929 1.03084 17.6161Z" stroke="#478FF7" strokeMiterlimit="10" strokeDasharray="12 12"/>
              <Path d="M35.094 28.3516H1V6.68896H35.094V28.3516Z" fill="#478FF7"/>
              <Path d="M13.9238 14.197C13.9238 15.6246 12.7665 16.7818 11.339 16.7818C9.9115 16.7818 8.75427 15.6246 8.75427 14.197C8.75427 12.7695 9.9115 11.6123 11.339 11.6123C12.7665 11.6123 13.9238 12.7695 13.9238 14.197Z" fill="white"/>
              <Path d="M5.20694 28.3515L13.1852 20.7203L16.373 23.5131L23.8934 16.1663L33.9801 28.3515" fill="white"/>
              <Path d="M43.0001 13.52H28.6651V4.41187H43.0001V13.52Z" fill="#FFCC2B"/>
              <Path d="M34.0989 7.56875C34.0989 8.1689 33.6122 8.65557 33.0121 8.65557C32.4119 8.65557 31.9253 8.1689 31.9253 7.56875C31.9253 6.9686 32.4119 6.48193 33.0121 6.48193C33.6122 6.48193 34.0989 6.9686 34.0989 7.56875Z" fill="white"/>
              <Path d="M30.4339 13.5199L33.7884 10.3114L35.1287 11.4856L38.2907 8.39673L42.5317 13.5199" fill="#333333"/>
            </Svg>
          )}
          {activity.icon === 'device' && (
            <View style={styles.deviceIconContainer}>
              <View style={styles.deviceIcon} />
            </View>
          )}
        </View>
        <Text style={styles.activityName}>{activity.name}</Text>
      </View>
      {activity.completed ? (
        <View style={styles.completedIcon}>
          <Circle cx="15.5" cy="15.5" r="15.5" fill="#2F80ED"/>
          <Svg style={styles.checkIcon} width="17" height="17" viewBox="0 0 17 17" fill="none">
            <Path d="M13.6667 4.625L6.5625 11.7292L3.33334 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </View>
      ) : (
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => handleStartActivity(activity.id)}
        >
          <Text style={styles.startButtonText}>Start</Text>
          <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
            <Path d="M16.9583 10.2713H4.45833" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M11.9168 5.25092L16.9585 10.2709L11.9168 15.2917" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
      )}
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
        <Text style={styles.sectionTitle}>Activities</Text>
        
        <CircularProgress />

        <View style={styles.activitiesList}>
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </View>
      </ScrollView>
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
    marginRight: 32,
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
  progressCard: {
    height: 212,
    borderRadius: 13,
    background: 'linear-gradient(108deg, #61A1F7 4.85%, #3671C1 94.07%)',
    backgroundColor: '#61A1F7',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  progressTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressNumber: {
    fontSize: 32,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  completedText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#E9E9FF',
    textAlign: 'center',
    marginTop: 4,
  },
  activitiesList: {
    gap: 16,
    paddingBottom: 20,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  activityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  activityIcon: {
    width: 47,
    height: 47,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceIconContainer: {
    width: 47,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceIcon: {
    width: 37,
    height: 32,
    backgroundColor: '#478FF7',
    borderRadius: 4,
  },
  activityName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.14,
  },
  completedIcon: {
    width: 31,
    height: 31,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    position: 'absolute',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F80ED',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    gap: 8,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
});
