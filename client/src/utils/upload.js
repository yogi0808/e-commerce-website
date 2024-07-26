import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Files
import { storage } from "./firebase";

// Upload Files to Fire Store
const upload = async (file, path) => {

    const date = new Date()

    const storageRef = ref(storage, `${path ? path : "images/"}` + (date + file.name));
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (e) => {
                reject("something went wrong!" + e.code)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL)
                });
            }
        );
    })
}

export default upload