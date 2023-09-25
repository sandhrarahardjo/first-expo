import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { styles } from './profile.styles'
const EditProfileScreen = () => {
  const defaultSocialMedia = {
    name: '',
    github: '',
    linkedin: '',
    instagram: '',
    email: '',
  };

  const [socialMedia, setSocialMedia] = useState(defaultSocialMedia);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg');
  const [imageUrl, setImageUrl] = useState(profileImage);

  const [name, setName] = useState(socialMedia.name);
  const [github, setGithub] = useState(socialMedia.github);
  const [linkedin, setLinkedIn] = useState(socialMedia.linkedin);
  const [instagram, setInstagram] = useState(socialMedia.instagram);
  const [email, setEmail] = useState(socialMedia.email);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setSocialMedia({
      name,
      github,
      linkedin,
      instagram,
      email,
    });
    setProfileImage(imageUrl);
    setIsEditing(false);
  };

  const _renderEditComponent = () => (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your github"
        value={github}
        onChangeText={(text) => setGithub(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your linkedIn"
        value={linkedin}
        onChangeText={(text) => setLinkedIn(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your instagram"
        value={instagram}
        onChangeText={(text) => setInstagram(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
      />
    </>
  );

  const _renderViewComponent = () => (
    <>
      <View style={styles.row}>
        <Icon name="user" size={20} color="black" />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="github" size={20} color="black" />
        <Text style={styles.github}>{github}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="linkedin" size={20} color="black" />
        <Text style={styles.linkedin}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="instagram" size={20} color="black" />
        <Text style={styles.instagram}>{instagram}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="envelope" size={20} color="black" />
        <Text style={styles.email}>{email}</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.header}>Profile</Text>
      {isEditing ? _renderEditComponent() : _renderViewComponent()}
      {isEditing ? (
        <Button title="Save" onPress={handleSaveProfile} />
      ) : (
        <Button title="Edit Profile" onPress={handleEditProfile} />
      )}
    </View>
  );
};

export default EditProfileScreen;