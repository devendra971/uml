// /*
// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

// const sections = [
//   { title: 'Academic Resources', url: '#' },
//   { title: 'Career Services,', url: '#' },
//   { title: 'Campus', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Local Community Resources', url: '#' },
//   { title: 'Social', url: '#' },
//   { title: 'Sports', url: '#' },
//   { title: 'Health and Wellness', url: '#' },
//   { title: 'Technology', url: '#' },
//   { title: 'Travel', url: '#' },
//   { title: 'Alumni', url: '#' },
// ];

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];

// const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'X', icon: XIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Blog() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="Blog" sections={sections} />
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} sx={{ mt: 3 }}>
//             <Main title="From the firehose" posts={posts} />
//             <Sidebar
//               title={sidebar.title}
//               description={sidebar.description}
//               archives={sidebar.archives}
//               social={sidebar.social}
//             />
//           </Grid>
//         </main>
//       </Container>
//       <Footer
//         title="Footer"
//         description="Something here to give the footer a purpose!"
//       />
//     </ThemeProvider>
//   );
// }

// */

// import React, { useState } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

// // import React, { useState, useEffect } from 'react';

// const sections = [
//   { title: 'Academic Resources', url: '#' },
//   { title: 'Career Services', url: '#' },
//   { title: 'Campus', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Local Community Resources', url: '#' },
//   { title: 'Social', url: '#' },
//   { title: 'Sports', url: '#' },
//   { title: 'Health and Wellness', url: '#' },
//   { title: 'Technology', url: '#' },
//   { title: 'Travel', url: '#' },
//   { title: 'Alumni', url: '#' },
// ];
 
// /*
// // yha se h


// // const topics = [
// //   { id: 1, name: 'Academic Resources' },
// //   { id: 2, name: 'Career Services' },
// //   { id: 3, name: 'Campus' },
// //   { id: 4, name: 'Culture' },
// //   { id: 5, name: 'Local Community Resources' },
// //   { id: 6, name: 'Social' },
// //   { id: 7, name: 'Sports' },
// //   { id: 8, name: 'Health and Wellness' },
// //   { id: 9, name: 'Technology' },
// //   { id: 10, name: 'Travel' },
// //   { id: 11, name: 'Alumni' },
// //   // Add more topics as needed
// // ];

// // const SubscriptionManager = () => {
// //   const [subscribedTopics, setSubscribedTopics] = useState([]);

// //   useEffect(() => {
// //     // Assuming we fetch the subscribed topics from a backend or local storage
// //     const storedSubscriptions = []; // Replace with actual fetch call or local storage retrieval
// //     setSubscribedTopics(storedSubscriptions);
// //   }, []);

// //   const handleSubscribe = (topicId) => {
// //     // Here you would typically make an API call to update the user's subscriptions
// //     setSubscribedTopics((prevSubscriptions) => [...prevSubscriptions, topicId]);
// //   };

// //   const handleUnsubscribe = (topicId) => {
// //     // Similarly, an API call to update the subscriptions
// //     setSubscribedTopics((prevSubscriptions) =>
// //       prevSubscriptions.filter((id) => id !== topicId)
// //     );
// //   };

// //   return (
// //     <div>
// //       <h2>Manage Subscriptions</h2>
// //       {topics.map((topic) => (
// //         <div key={topic.id}>
// //           <span>{topic.name}</span>
// //           {subscribedTopics.includes(topic.id) ? (
// //             <button onClick={() => handleUnsubscribe(topic.id)}>Unsubscribe</button>
// //           ) : (
// //             <button onClick={() => handleSubscribe(topic.id)}>Subscribe</button>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // //  export default SubscriptionManager;


// */
// // under htao uper se 
// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'X', icon: XIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

// const defaultTheme = createTheme();

// export default function Blog() {
//   const [allPosts, setAllPosts] = useState([
//     { id: 1, content: post1, replies: [] },
//     { id: 2, content: post2, replies: [] },
//     { id: 3, content: post3, replies: [] },
//   ]);

  
//   const isModerator = true;



//   const handleCreatePost = (newPost) => {
//     setAllPosts([...allPosts, { id: allPosts.length + 1, ...newPost }]);
//   };

//   const handleReplyToPost = (postId, replyContent) => {
//     const updatedPosts = allPosts.map((post) => {
//       if (post.id === postId) {
//         const replies = post.replies ? [...post.replies, { content: replyContent }] : [{ content: replyContent }];
//         return {
//           ...post,
//           replies,
//         };
//       }
//       return post;
//     });
//     setAllPosts(updatedPosts);
//   };
  

//   const handleDeletePost = (postId) => {
//     const updatedPosts = allPosts.filter((post) => post.id !== postId);
//     setAllPosts(updatedPosts);
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="Blog" sections={sections} />
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} sx={{ mt: 3 }}>
//             <Main
//               title="From the firehose"
//               posts={allPosts}
//               onCreatePost={(newPost) => handleCreatePost(newPost)}
//               onReplyToPost={handleReplyToPost}
//               onDeletePost={handleDeletePost}
//               allPosts={allPosts}
//               isModerator={isModerator}
//             />
//             <Sidebar
//               title={sidebar.title}
//               description={sidebar.description}
//               archives={sidebar.archives}
//               social={sidebar.social}
//             />
//           </Grid>
//         </main>
//       </Container>
//       <Footer
//         title="Footer"
//         description="Something here to give the footer a purpose!"
//       />
//     </ThemeProvider>
//   );
// }

