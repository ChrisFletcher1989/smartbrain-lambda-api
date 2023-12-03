const returnClarifaiRequestOptions = (imageUrl) => {
    const PAT ='0c1e3431a67a413db04239c90b89d1db';
    const USER_ID ='chrisfletcher';       
    const APP_ID ='smartbrain';
    const IMAGE_URL = imageUrl;
   const raw = JSON.stringify({
           "user_app_id": {
               "user_id": USER_ID,
               "app_id": APP_ID
           },
           "inputs": [
               {
                   "data": {
                       "image": {
                           "url": IMAGE_URL
                       }
                   }
               }
           ]
       });
       const requestOptions = {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Authorization': 'Key ' + PAT
         },
     body: raw
   };
   return requestOptions;
   }
  
  

  

const handleApiCallCeleb = async (req, res) => {
  const MODEL_ID2 = 'celebrity-face-recognition';

  try {
    const response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID2 + "/outputs", returnClarifaiRequestOptions(req.body.input));
    const data = await response.json();

    console.log("celeb", data);
    res.json(data);
  } catch (err) {
    res.status(400).json('unable to work with API2');
  }
};


module.exports = {
    
    handleApiCallCeleb

}