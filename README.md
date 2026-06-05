# FaceFit Barber FrontEnd - Web App for AI-Based Hairstyle Recommendation

"FaceFit Barber FrontEnd" is the frontend web application for the FaceFit Barber capstone project. This application helps users find suitable haircut styles based on their face shape by using camera capture, image upload, and AI-based face shape analysis.

The frontend allows users to capture or upload a face image, send it to the AI backend service, and display the predicted face shape along with personalized hairstyle recommendations.

![logoApp](./public/LogoApp.png)

## Main Features

* 📷 **Face Capture**: Uses webcam integration to capture the user's face image.
* 🖼️ **Image Upload**: Allows users to upload a face image from their device.
* 🧠 **AI Face Shape Analysis**: Sends the image to the AI backend service for face shape classification.
* ✂️ **Hairstyle Recommendations**: Displays hairstyle recommendations based on the detected face shape.
* 🖼️ **Hairstyle Preview Images**: Shows hairstyle images based on the recommendation result.
* 🧭 **Interactive UI**: Provides smooth routing and user-friendly page navigation.
* 📱 **Responsive Design**: Optimized for desktop and mobile devices.
* 🌐 **Vercel Deployment**: Deployed online using Vercel.

## Technologies Used

* React + Vite
* Tailwind CSS
* React Router DOM
* React Webcam
* Axios
* Vercel

## Project Structure

```text
FaceFit-Barber-FrontEnd/
├── public/
│   ├── LogoApp.png
│   └── hairstyles/
│       ├── blowout.png
│       ├── buzz-cut.png
│       ├── caesar-cut.png
│       ├── comma-hair.png
│       ├── crew-cut.png
│       └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ScanPage.jsx
│   ├── utils/
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

## Page Overview

### Home Page

The home page introduces the FaceFit Barber application and provides a call-to-action button that directs users to the scan page.

Main responsibilities:

* Display application branding.
* Show hero image and headline.
* Navigate users to the face scanning feature.

### Scan Page

The scan page is the main feature page where users can capture or upload a face image.

Main responsibilities:

* Access webcam using React Webcam.
* Capture image from camera.
* Upload image from local device.
* Send image data to the AI backend API.
* Display face shape prediction result.
* Display hairstyle recommendation and image preview.

### About Page

The about page explains the purpose of the FaceFit Barber application and the capstone project background.

## AI Backend Integration

This frontend is connected to the FaceFit Barber AI backend service. The backend receives the user image, runs the AI model, and returns the prediction result.

Production AI Backend:

```text
https://justblaisee-facefit-ml-service.hf.space
```

Main endpoint used by the frontend:

```text
/api/faces/analyze
```

Full API URL:

```text
https://justblaisee-facefit-ml-service.hf.space/api/faces/analyze
```

Example response:

```json
{
  "success": true,
  "faceShape": "Heart",
  "confidence": 0.637,
  "hairstyle": [
    "Textured Fringe",
    "Side Part",
    "Low Fade"
  ],
  "message": "Foto berhasil dianalisis"
}
```

## Environment Variable

Create a `.env` file in the root of the frontend project.

For production AI backend:

```env
VITE_API_URL=https://justblaisee-facefit-ml-service.hf.space
```

For local Express backend:

```env
VITE_API_URL=http://localhost:3000
```

For direct local FastAPI ML service:

```env
VITE_API_URL=http://127.0.0.1:8000
```

The frontend uses this environment variable to send the image to the backend:

```js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
```

## Hairstyle Image Mapping

Recommended hairstyle images are stored in:

```text
public/hairstyles/
```

Each hairstyle name returned from the backend is mapped to an image file in the frontend. For example:

```js
"Buzz Cut": "/hairstyles/buzz-cut.png"
```

This allows the application to display a visual preview of the recommended hairstyle.

## Prerequisites

* Node.js v18.x or higher
* npm

## Setup and Installation

### 1. Clone Repository

```bash
git clone https://github.com/raphael707/FaceFit-Barber-FrontEnd.git
cd FaceFit-Barber-FrontEnd
```

If this frontend is accessed from the main FaceFit Barber application repository as a submodule:

```bash
git clone --recurse-submodules https://github.com/raphael707/FaceFit-Barber-Application.git
cd FaceFit-Barber-Application/FaceFit-Barber-FrontEnd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file and add:

```env
VITE_API_URL=https://justblaisee-facefit-ml-service.hf.space
```

### 4. Run Development Server

```bash
npm run dev
```

Open the frontend URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build for Production

To build the frontend for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This frontend application is deployed using **Vercel**.

Vercel build settings:

```text
Framework Preset   : Vite
Build Command      : npm run build
Output Directory   : dist
Install Command    : npm install
```

Environment variable in Vercel:

```env
VITE_API_URL=https://justblaisee-facefit-ml-service.hf.space
```

After deployment, Vercel provides a production URL that can be accessed online.

## Relationship with FaceFit Barber Project

This repository is part of the FaceFit Barber capstone project.

Project flow:

```text
Frontend Repository
→ User interface, camera integration, image upload, and result display

Backend Repository
→ API routing, local backend integration, and ML service integration

Model AI Repository
→ AI model training, evaluation, and exported model files

Data Science Repository
→ Dataset preparation, analysis, and visualization
```

Application flow:

```text
User captures or uploads face image
→ Frontend sends image to AI backend
→ Backend preprocesses image
→ AI model predicts face shape
→ Backend returns prediction and hairstyle recommendations
→ Frontend displays the result to the user
```

## Notes

* Do not commit `.env` to GitHub.
* Make sure `VITE_API_URL` is correctly configured before running or deploying the frontend.
* The AI backend may take longer on the first request if the Hugging Face Space is inactive.
* Hairstyle image filenames in `public/hairstyles/` must match the mapping used in `ScanPage.jsx`.
* The frontend can be tested locally using either the deployed Hugging Face backend or the local backend service.

## Contributing

Feel free to fork this repository and submit a pull request.

For team collaboration, it is recommended to:

1. Create a new branch.
2. Commit changes clearly.
3. Push the branch.
4. Open a pull request.
5. Merge after review.

## License

MIT License - Use freely with attribution.

## Credits

Developed as part of a **Capstone Project** to innovate the barbershop and grooming experience through AI-based face shape analysis and personalized hairstyle recommendation.
