import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';

function Main(props) {
  const {
    posts,
    title,
    onCreatePost,
    onReplyToPost,
    onDeletePost,
    isModerator,
  } = props;
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [replyContent, setReplyContent] = useState({});

  const handleCreatePost = () => {
    if (!newPostTitle || !newPostContent) return;
    onCreatePost({ title: newPostTitle, content: newPostContent });
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleReply = (postId) => {
    if (!replyContent[postId]) return;
    onReplyToPost(postId, replyContent[postId]);
    setReplyContent({ ...replyContent, [postId]: '' });
  };

  const handleDelete = (postId) => {
    onDeletePost(postId);
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {/* Create a new post form */}
      <Box mt={3} mb={3}>
        <Typography variant="h6" gutterBottom>Create a New Post</Typography>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Content"
          variant="outlined"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleCreatePost}>
          Create Post
        </Button>
      </Box>

      {/* Display existing posts */}
      {posts.map((post) => (
        <Box key={post.id} mt={3} mb={3}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          {isModerator && (
            <Button onClick={() => handleDelete(post.id)}>Delete</Button>
          )}
          {/* Reply form */}
          <Box mt={2} mb={2}>
            <TextField
              fullWidth
              placeholder="Your reply..."
              variant="outlined"
              value={replyContent[post.id] || ''}
              onChange={(e) =>
                setReplyContent({
                  ...replyContent,
                  [post.id]: e.target.value,
                })
              }
              sx={{ mb: 1 }}
            />
            <Button variant="contained" onClick={() => handleReply(post.id)}>
              Reply
            </Button>
          </Box>
          {/* Display replies */}
          {post.replies &&
            post.replies.map((reply, index) => (
              <Box key={index} mt={1} mb={1}>
                <ReactMarkdown>{reply.content}</ReactMarkdown>
              </Box>
            ))}
        </Box>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      replies: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  onCreatePost: PropTypes.func.isRequired,
  onReplyToPost: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  isModerator: PropTypes.bool.isRequired,
};

export default Main;
