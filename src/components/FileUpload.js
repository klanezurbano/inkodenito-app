import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [image, setImage] = useState('');

  function handleFileUpload() {
    // hard-coded values just to make it work
    const token = '2|PuvegrBwXswEBb8v3Op1MwvTvLWDw6j2GTpC6Re3';
    const title = 'Sample Recipe From Frontend';
    const description = 'lorem ipsum';
    const prep_time = 60;
    const cooking_time = 300;
    const serving_size = 5;
    const category_ids = [2,3];

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("prep_time", prep_time);
    formData.append("cooking_time", cooking_time);
    formData.append("serving_size", serving_size);
    category_ids.forEach((item) => formData.append('category_ids[]', item));

    axios.post('http://127.0.0.1:8000/api/recipe', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
      }
    }).then(response => console.log(response.data));
  }

  return (
    <>
      <input type="file" onChange={(e) => setImage(e.target.files[0])}/>

      <button onClick={handleFileUpload}>Submit</button>
    </>
  );
}

export default FileUpload;