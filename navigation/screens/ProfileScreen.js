import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const EditProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('User');
  const [email, setEmail] = useState('example@gmail.com');
  const [instagram, setInstagram] = useState('unregistered');
  const [profileImage, setProfileImage] = useState('https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg');
  const [imageUrl, setImageUrl] = useState(profileImage);
  const [github, setGithub] = useState('unregistered');
  const [linkedin, setLinkedIn] = useState('unregistered');

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setProfileImage(imageUrl);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.header}>Profile</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      ) : (
        <View style={styles.row}>
          <Icon name="user" size={20} color="black" />
          <Text style={styles.name}>{name}</Text>
        </View>
      )}
      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Enter your Github"
          value={github}
          onChangeText={(text) => setGithub(text)}
        />
      ) : (
        <View style={styles.row}>
          <Icon name="github" size={20} color="black" />
          <Text style={styles.github}>{github}</Text>
        </View>
      )}
      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Enter your LinkedIn"
          value={linkedin}
          onChangeText={(text) => setLinkedIn(text)}
        />
      ) : (
        <View style={styles.row}>
          <Icon name="linkedin-square" size={20} color="black" />
          <Text style={styles.linkedin}>{linkedin}</Text>
        </View>
      )}
      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Enter your Instagram account"
          value={instagram}
          onChangeText={(text) => setInstagram(text)}
        />
      ) : (
        <View style={styles.row}>
          <Icon name="instagram" size={20} color="black" />
          <Text style={styles.insta}>{instagram}</Text>
        </View>
      )}
      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      ) : (
        <View style={styles.row}>
          <Icon name="envelope" size={20} color="black" />
          <Text style={styles.email}>{email}</Text>
        </View>
      )}
      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Enter image URL"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
        />
      ) : null}
      {isEditing ? (
        <Button title="Save" onPress={handleSaveProfile} />
      ) : (
        <Button title="Edit Profile" onPress={handleEditProfile} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
  },
  insta: {
    fontSize: 20,
    marginLeft: 10,
  },
  email: {
    fontSize: 20,
    marginLeft: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});

export default EditProfileScreen;