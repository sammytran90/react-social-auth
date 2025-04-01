Setup

## Firebase setup

1. Create a new Firebase project at https://console.firebase.google.com/
2. Enable Google Authentication:
   - Go to Authentication > Sign-in method
   - Enable Google as a sign-in provider
   - Configure the OAuth consent screen if needed
3. Get your Firebase configuration:
   - Go to Project Settings (gear icon)
   - Under "General" tab, find your Web API Key
   - Copy the following values:
     - Web API Key
     - Auth Domain (project-id.firebaseapp.com)
     - Project ID
4. Configure environment variables:
   - Create or update `.env.development` file in the `code` directory
   - Add the following variables with your Firebase values:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-web-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     ```
   - Restart your Next.js development server after updating the environment variables

### Google Section
- Enable google option in Firebase Console
    + project-1086264189875
- 

