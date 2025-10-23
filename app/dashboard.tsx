import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Circle, Path, Stop } from 'react-native-svg';
import { Heading1, Heading2, BodyLargeSemibold, LabelMedium, spacing, colors } from '@/design-system/components';

const { width: screenWidth } = Dimensions.get('window');

const months = [
  { name: 'Apr', year: '2024', active: true },
  { name: 'May', year: '2024', active: false },
  { name: 'Jun', year: '2024', active: false },
  { name: 'Jul', year: '2024', active: false },
  { name: 'Aug', year: '2024', active: false },
];

const stores = [
  {
    id: 1,
    name: 'Store -1',
    lastVisit: 'Last visit on April 1, 2024 5pm',
    completed: true,
    visits: '2 / 2',
  },
  {
    id: 2,
    name: 'Store - 2',
    lastVisit: 'Last visit on April 3, 2024 10am',
    completed: true,
    visits: '2 / 2',
  },
  {
    id: 3,
    name: 'Store - 3',
    lastVisit: 'Yet to visit',
    completed: false,
    visits: '1 / 2',
  },
  {
    id: 4,
    name: 'Store - 4',
    lastVisit: 'Yet to visit',
    completed: false,
    visits: '0 / 2',
  },
];

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('Monthly Visit');

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

  const CircularProgress = ({ progress = 60 }) => (
    <View style={styles.progressContainer}>
      <Svg width="144" height="144" viewBox="0 0 144 144">
        <Circle
          cx="72"
          cy="72"
          r="66"
          stroke="#E9E9FF"
          strokeWidth="12"
          fill="none"
        />
        <Circle
          cx="72"
          cy="72"
          r="66"
          stroke="url(#gradient)"
          strokeWidth="12"
          fill="none"
          strokeDasharray={`${progress * 4.14} 414`}
          strokeLinecap="round"
          transform="rotate(-90 72 72)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#125DCE" />
            <Stop offset="100%" stopColor="#2F80ED" />
          </linearGradient>
        </defs>
      </Svg>
      <View style={styles.progressTextContainer}>
        <Text style={styles.completedText}>Completed</Text>
        <Text style={styles.progressNumber}>6</Text>
        <Text style={styles.targetText}>Target: 10</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.neutral.white} />
      <StatusBarComponent />

      <View style={styles.header}>
        <Heading1 color={colors.neutral.dark}>StoreScan</Heading1>
        <View style={styles.headerRight}>
          <View style={styles.notificationContainer}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M14.3887 20.8572C13.0246 22.3719 10.8966 22.3899 9.51941 20.8572"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M3 12H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M3 6H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M3 18H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.monthsContainer}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.monthCard,
                month.active && styles.monthCardActive,
                { backgroundColor: month.active ? colors.primary.blue : colors.neutral.lighter }
              ]}
            >
              <Text style={[
                styles.monthText,
                { color: month.active ? colors.neutral.white : colors.primary.darkBlue }
              ]}>
                {month.name}
              </Text>
              <Text style={[
                styles.yearText,
                { color: month.active ? colors.neutral.white : colors.primary.darkBlue }
              ]}>
                {month.year}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tabContainer}>
          {['Activity', 'Monthly Visit', 'Visit History'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        <CircularProgress />

        <View style={styles.visitsHeader}>
          <Heading2 color={colors.neutral.dark}>Visits</Heading2>
          <LabelMedium color={colors.neutral.medium} style={{ marginTop: spacing.sm }}>April, 2024</LabelMedium>
        </View>

        <View style={styles.storesList}>
          {stores.map((store) => (
            <TouchableOpacity
              key={store.id}
              style={styles.storeCard}
              onPress={() => router.push(`/store/${store.id}`)}
            >
              <View style={styles.storeIconContainer}>
                {store.completed ? (
                  <View style={styles.completedIcon}>
                    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <Path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                  </View>
                ) : (
                  <View style={styles.pendingIcon}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2498 12.5005C21.2498 17.6095 17.1088 21.7505 11.9998 21.7505C6.89076 21.7505 2.74976 17.6095 2.74976 12.5005C2.74976 7.39149 6.89076 3.25049 11.9998 3.25049C17.1088 3.25049 21.2498 7.39149 21.2498 12.5005Z"
                        stroke="#F49B17"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M15.4314 15.4429L11.6614 13.1939V8.34692"
                        stroke="#F49B17"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                )}
              </View>
              <View style={styles.storeInfo}>
                <BodyLargeSemibold style={[store.completed && { textDecorationLine: 'line-through' }]}>
                  {store.name}
                </BodyLargeSemibold>
                <LabelMedium color={colors.neutral.medium}>{store.lastVisit}</LabelMedium>
              </View>
              <View style={styles.visitBadge}>
                <Text style={styles.visitText}>{store.visits}</Text>
                <Text style={styles.visitLabel}>Visits</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral.white,
  },
  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    height: 44,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.neutral.dark,
    letterSpacing: -0.68,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1,
    width: 20,
    height: 14,
  },
  signalBar: {
    backgroundColor: colors.neutral.dark,
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
    borderColor: colors.neutral.dark,
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFill: {
    width: 21,
    height: 9,
    backgroundColor: colors.neutral.dark,
    borderRadius: 1.33,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: colors.status.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.neutral.white,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: -0.08,
  },
  menuButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  monthsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing['2xl'],
  },
  monthCard: {
    width: 54,
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
  },
  monthCardActive: {},
  monthText: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: -0.17,
  },
  monthTextActive: {},
  yearText: {
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: -0.1,
  },
  yearTextActive: {},
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing['2xl'],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.light,
  },
  tab: {
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.neutral.medium,
    letterSpacing: -0.17,
  },
  tabTextActive: {
    color: colors.neutral.dark,
    fontWeight: '700',
  },
  tabIndicator: {
    width: 92,
    height: 2,
    backgroundColor: colors.neutral.dark,
    marginTop: spacing.md,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: spacing['2xl'],
    position: 'relative',
  },
  progressTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  completedText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.neutral.black,
    letterSpacing: -0.12,
  },
  progressNumber: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.neutral.black,
    letterSpacing: -0.2,
    marginVertical: spacing.sm,
  },
  targetText: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.neutral.light,
    letterSpacing: -0.1,
  },
  visitsHeader: {
    marginBottom: spacing.lg,
  },
  storesList: {
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.xl,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.neutral.light,
    gap: spacing.md,
  },
  storeIconContainer: {
    width: 24,
    height: 24,
  },
  completedIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  visitBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 39,
  },
  visitText: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.neutral.black,
    letterSpacing: -0.1,
  },
  visitLabel: {
    fontSize: 8,
    fontWeight: '400',
    color: colors.neutral.medium,
    letterSpacing: -0.08,
    marginTop: spacing.xs,
  },
});
