import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';

const renderJumbotron = () => (
  <View style={styles.jumbotron}>
    <Text style={styles.display4}>Postings</Text>
  </View>
);

const renderCardHeader = (post) => {
  const { id, title } = post;

  return (
    <View style={styles.cardHeader}>
      <Text>#{id}{title}</Text>
    </View>
  );
};

const renderCardBody = (post) => {
  const { body } = post;

  return (
    <View style={styles.cardBody}>
      <Text>{body}</Text>
    </View>
  );
};

const handleClick = (setModalDisplay, setSelectedPost, post) => {
  setModalDisplay(true);
  setSelectedPost(post);
};

const renderCard = (posts, setModalDisplay, setSelectedPost) => (
  <ScrollView style={styles.container}>
    {posts.slice(0, 15).map((post) => (
      <View style={styles.card} key={post.id}>
        {renderCardHeader(post)}
        {renderCardBody(post)}
        <TouchableOpacity style={styles.openButton} onPress={() => handleClick(setModalDisplay, setSelectedPost, post)}>
          <Text style={styles.openButtonText}>View More</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);

const renderModal = (isModalDisplayed, setModalDisplay, selectedPost) => (
  <Modal
    visible={isModalDisplayed}
    animationType="slide"
    transparent={true}
  >
    <View style={styles.modal}>
      <TouchableOpacity style={styles.closeButton} onPress={() => setModalDisplay(false)}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
      <Text style={styles.modalTitle}>{selectedPost.title}</Text>
      <Text style={styles.modalBody}>{selectedPost.body}</Text>
    </View>
  </Modal>
);

const usePostList = (setPosts) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30")
      .then(response => response.json())
      .then(result => setPosts(result));
  }, []);
};

const Postings = () => {
  const [posts, setPosts] = useState([]);
  const [isModalDisplayed, setModalDisplay] = useState(false);
  const [selectedPost, setSelectedPost] = useState({ id: '', title: '', body: '' });

  usePostList(setPosts);

  return (
    <View style={styles.container}>
      {renderJumbotron()}
      {renderCard(posts, setModalDisplay, setSelectedPost)}
      {renderModal(isModalDisplayed, setModalDisplay, selectedPost)}
    </View>
  );
};

export default Postings;
