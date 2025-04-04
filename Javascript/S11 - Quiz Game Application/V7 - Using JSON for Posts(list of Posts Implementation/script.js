// The code given below is for one object refactor the code it for using the JSON Data.
let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
    image: "https://files.codingninjas.in/image2-28694.jpg",
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
    image: "https://files.codingninjas.in/oip-28704.jpg",
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
    image: "https://files.codingninjas.in/th-2-28706.jpg",
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
    image: "https://files.codingninjas.in/image1-28708.jpg",
  },
];

// This is a new Set to keep track of post IDs that have been liked
// This ensures that each post can be liked only once, and allows for quick lookup of liked posts
const likedPosts = new Set();

function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  postsData.forEach((post)=>{
   const postElement = document.createElement("div");
   postElement.classList.add("post"); 
          
  const authorElement = document.createElement("h3");
  authorElement.textContent = post.author;

  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  imageElement.alt = "Post Image";

  const likeButton = document.createElement("button");
  likeButton.textContent = `Like`;
  likeButton.classList.add("like-button");
    
      // Apply correct button state for liked posts
    if (likedPosts.has(post.id)) {
      likeButton.disabled = true;
      likeButton.style.backgroundColor = "red";
    }

    likeButton.addEventListener("click", () => {
      if (!likedPosts.has(post.id)) {
        likedPosts.add(post.id); // Track liked post
        likePost(post.id); // Update data & re-render
      }
    });
  
      //Change the background color of the button to red for all liked posts
      // Hint: You might need to iterate through the likedPosts Set and update button styles
    
  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment...";

  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";
  commentButton.classList.add("comment-button");
  commentButton.addEventListener(
    "click",
    () => {
      addComment(post.id,commentInput.value);
      commentInput.value = "";
    },
    { once: true }
  );

  const postFooter = document.createElement("div");
  postFooter.classList.add("post-footer");
  // Update the text content to reflect the current post's likes and comments using the loop parameter
  postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments-container");
  commentsContainer.style.display = "none";

  post.comments.forEach((comment) => {
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });

  postElement.appendChild(authorElement);

  postElement.appendChild(imageElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(likeButton);
  postElement.appendChild(commentInput);
  postElement.appendChild(commentButton);
  postElement.appendChild(postFooter);
  postElement.appendChild(commentsContainer);

  postFooter.addEventListener("click", () => {
    if (commentsContainer.style.display === "none") {
      commentsContainer.style.display = "block";
    } else {
      commentsContainer.style.display = "none";
    }
  });

  postsContainer.appendChild(postElement);
    });
// Iterate over each item in the postsData array using a forEach loop with a parameter
// Inside the loop, use the parameter to create and populate elements for each post
// Replace 'post1' with the parameter name to access each post's properties like author, content etc. 
  // Update the addComment function to take the current post's id and the comment input value as arguments
  
}

// Function to handle post liking
function likePost(postId) {
  // 1. Find the post in the postsData array by its ID
  // 2. Increment the likes count for the found post
  // 3. Re-render the posts to reflect the updated likes count
  // Hint: You might need to pass a postId parameter to identify which post to like
  const post = postsData.find((p) => p.id === postId);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

// Function to handle adding a comment
function addComment(postId,comment) {
  // 1. Find the post in the postsData array by its ID
  // 2. Add the new comment to the comments array of the found post
  // 3. Re-render the posts to reflect the updated comments
  // Hint: You might need to pass a postId parameter to identify which post to add the comment to
  if (!comment.trim()) return;

  const post = postsData.find((p) => p.id === postId);
  if (post) {
    post.comments.push(comment);
    renderPosts();
  }
}

renderPosts();
