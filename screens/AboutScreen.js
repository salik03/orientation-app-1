import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


import bannerImage from '../assets/AboutUsBanner.png';
import salikImage from '../assets/salik.png';
import architImage from '../assets/archit.png';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container} >

      <Image source={bannerImage} style={styles.headerBanner} />


      <View style={styles.section}>
        <Text style={styles.heading}>About Us</Text>
        <Text>
          The Mobile Technologies Club at Bennett University is dedicated to exploring and innovating in the field of mobile technologies. Our mission is to create exciting and useful mobile applications that enhance the way people live, work, and play.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Vision</Text>
        <Text>
          Our vision is to be at the forefront of mobile technology innovation. We strive to empower our members with knowledge and skills to develop cutting-edge mobile applications that solve real-world problems. We aim to make a positive impact on society through our mobile tech initiatives.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>About the Team</Text>
        <Text>
          Meet the members of the Mobile Technologies Club who were responsible for creating this app:
        </Text>
        
        {/* Display Salik Uddin's image */}
        <View style={styles.teamMember}>
          <Image source={salikImage} style={styles.profileImage} />
          <Text>Salik Uddin</Text>
          <Text>Chairperson</Text>
          <Text>E21CSEU0428@bennett.edu.in</Text>
        </View>
        
        {/* Display Archit Ojha's image */}
        <View style={styles.teamMember}>
          <Image source={architImage} style={styles.profileImage} />
          <Text>Archit Ojha</Text>
          <Text>Technical Head</Text>
          <Text>E22CSEU0468@bennett.edu.in</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBanner: {
    width: '100%',
    height: 400, // Corrected height to match your 1600x400 image
  },
  section: {
    margin: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamMember: {
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default AboutScreen;
