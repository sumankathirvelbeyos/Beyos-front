import React from 'react';

const ImageUploader = ({ handleUploaderClose, handleDeleteProfilePicture }) => {
  const handleCancel = () => {
    handleUploaderClose();
  };

  return (
    <div className="image_uploader-ci">
      <div className="upload-overlay-ci">
        <div className="preview-container-ci">
          <button className="btn-ci" onClick={handleCancel}>Cancel</button>
          <button className="btn-ci" onClick={handleDeleteProfilePicture}>Delete Profile</button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
