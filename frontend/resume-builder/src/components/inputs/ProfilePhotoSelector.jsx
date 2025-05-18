import React, { useState, useRef } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update the image state
      setImage(file);
      
      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      if (setPreview) {
        setPreview(preview);
      }
      setPreviewUrl(preview);
    }
  };
  
  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    
    if (setPreview) {
      setPreview(null);
    }
    
    // Reset the file input
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <div className="relative w-24 h-24 mb-3">
        {(previewUrl || preview) ? (
          <>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img 
                src={previewUrl || preview} 
                alt="Profile Preview" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* ปุ่มถังขยะที่อยู่ขอบล่างขวาและทับซ้อนกับรูปเล็กน้อย */}
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600"
              title="Remove image"
            >
              <LuTrash size={16} />
            </button>
          </>
        ) : (
          <div 
            className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onChooseFile}
          >
            <LuUser size={32} className="text-gray-500" />
          </div>
        )}
      </div>
      
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
      
      <button
        type="button"
        onClick={onChooseFile}
        className="flex items-center text-sm text-purple-600 hover:text-purple-800"
      >
        <LuUpload size={16} className="mr-1" />
        {(previewUrl || preview) ? 'Change Photo' : 'Upload Photo'}
      </button>
    </div>
  );
};

export default ProfilePhotoSelector;