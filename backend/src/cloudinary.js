import {v2 as cloudinary} from 'cloudinary';
          
const cloudinary.config({ 
  cloud_name: Process.env.CLOUDINARY_NAME, 
  api_key: Process.env.CLOUDINARY_API, 
  api_secret: Process.env.CLOUDINARY_SECERET_KEY, 
});

module.exports=cloudinary;