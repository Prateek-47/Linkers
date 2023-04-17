import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDzKLiq8C0PLwM1VxwAJNjcnfLuJeTacpY",
    authDomain: "linker-application.firebaseapp.com",
    projectId: "linker-application",
    storageBucket: "linker-application.appspot.com",
    messagingSenderId: "325188509923",
    appId: "1:325188509923:web:1254395410670ed48d25d6"
  };

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase storage service
const storage = getStorage(app);

// Function to handle image upload



export const checkImage = (file) => {
    let err = "";
    if(!file) {
        return err = "File does not exist.";
    }
//?1 mb
    if(file.size > 1024 * 1024){
         return (err = "File size must be less than 1 Mb.");
    }
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return (err = "Image must be jpeg or png.");
    }
    return err;
}


export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData();
        console.log(item)
        // Create a storage reference for the image file
        try {
            // Create a storage reference for the image file
            const uniqueId = Date.now(); // get a unique timestamp
            const storageRef = ref(storage, `images/${uniqueId}.jpeg`);
            
            const metadata = { contentType: 'image/jpeg' };
            // Upload the image file to Firestore
            await uploadBytes(storageRef, item);
            const secure_url = await getDownloadURL(storageRef);
            imgArr.push({url:secure_url});
            console.log('Image uploaded successfully!')
          } catch (error) {
            console.error('Error uploading image: ', error);
          }
        // if(item.camera){
        //     formData.append("file", item.camera);
        // }else{
        //     formData.append("file", item);  
        // }
        // formData.append('upload_preset','linkersprofile');
        // formData.append('cloud_name','dbhqhey2a');

        // const res = await fetch('https://api.cloudinary.com/dbhqhey2a/upload',{
        //     method: 'POST',
        //     body:formData
        // })

        
        // const data = await res.json();
        // imgArr.push({ public_id: data.public_id, url: data.secure_url });
        
      
    }
    return imgArr;
}