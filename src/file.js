


const [postImage, setPostImage] = useState(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    setPostImage(reader.result);
  };
  reader.readAsDataURL(file);
};
const handlePostSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('author', author);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('postImage', postImage);
    // Make an API call to store the new post data in the database
    // Redirect to the postView page
  };
  