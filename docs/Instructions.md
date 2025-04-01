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

## GitHub Setup
1. Create a GitHub OAuth App:
   - Go to GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Set Application name (e.g., "My Firebase Auth App")
   - Set Homepage URL (your Firebase project URL)
   - Set Authorization callback URL: Copy from Firebase Console (Authentication > GitHub provider section)
   - Click "Register application"
2. Configure GitHub provider in Firebase:
   - Go to Firebase Console > Authentication > Sign-in method
   - Enable GitHub provider
   - Copy the Client ID and Client Secret from your GitHub OAuth App
   - Paste them into the GitHub provider configuration in Firebase
   - Save the changes

### Note on Multiple Authentication Methods
If you try to sign in with GitHub using an email that's already associated with another authentication method (e.g., Google):
1. You'll receive an "account exists with different credential" error
2. In this case:
   - First, sign in with your existing authentication method
   - Then, you can link your GitHub account to your existing account
   - This allows you to use either authentication method to access your account

### Google Section
- Enable google option in Firebase Console
    + project-1086264189875
- 

## Authentication Middleware
The application includes a middleware that handles authentication and protects routes:

1. Protected Routes:
   - `/authenticated-page`
   - `/profile`
   - `/dashboard`
   - These routes require authentication to access
   - Unauthenticated users will be redirected to `/login`

2. Auth Routes:
   - `/login`
   - `/signup`
   - These routes are only accessible to unauthenticated users
   - Authenticated users will be redirected to `/authenticated-page`

3. Session Management:
   - The middleware uses a session cookie to track authentication state
   - The cookie is automatically set when signing in and removed when signing out
   - Session tokens expire after 1 hour and are automatically refreshed

4. Security Features:
   - Secure cookie flags enabled
   - Same-site cookie policy enforced
   - Protected against CSRF attacks
   - Public assets and API routes excluded from middleware

### Note on Multiple Authentication Methods
If you try to sign in with GitHub using an email that's already associated with another authentication method (e.g., Google):
1. You'll receive an "account exists with different credential" error
2. In this case:
   - First, sign in with your existing authentication method
   - Then, you can link your GitHub account to your existing account
   - This allows you to use either authentication method to access your account

### Google Section
- Enable google option in Firebase Console
    + project-1086264189875
- 