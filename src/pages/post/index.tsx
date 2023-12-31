import React, { useEffect, useState } from 'react';

const NewPostPage = () => {
  const [showInput, setShowInput] = useState(false);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [showPost, setShowPost] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    setShowInput(true);
    setShowButton(false);
  };

  const handleCaptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCaption(event.target.value);
  };

  const handleImageUpload = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowInput(false);
        setShowPost(true);
    };

  return (
    <div>
      {showButton && <button onClick={handleButtonClick}>Criar novo post</button> }
      {showInput && (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Legenda" onChange={handleCaptionChange} />
          <input type="file" onChange={handleImageUpload} />
          <button type="submit">Publicar</button>
        </form>
      )}
      {showPost && (
        <div>
          <img src={image} alt="Post" />
          <p>@user.name:  {caption}</p>
        </div>
      )}
    </div>
  );
};

export default NewPostPage;