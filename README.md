# Real-Time Chat Application

A modern, full-stack real-time chat application built with React, Node.js, and WebSocket technology.

## Features

- **Real-time Messaging**: Instant message delivery using WebSocket connections
- **User Authentication**: Secure login and registration system
- **User Profiles**: Manage user information and avatars with Cloudinary integration
- **Online Status**: See when users are online
- **Message History**: Persistent message storage and retrieval
- **Email Notifications**: Email notifications using Resend
- **Security**: Rate limiting and DDoS protection with Arcjet
- **Responsive Design**: Modern, mobile-friendly UI with Tailwind CSS

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - WebSocket library
- **Cloudinary** - Image hosting and management
- **Resend** - Email service
- **Arcjet** - Security and rate limiting
- **MongoDB** - Database (assumed from db.js)

## Project Structure

```
.
├── backend/                    # Backend server
│   ├── src/
│   │   ├── server.js          # Main server entry point
│   │   ├── controllers/       # Route controllers
│   │   ├── routes/            # API routes
│   │   ├── models/            # Data models
│   │   ├── middleware/        # Express middleware
│   │   ├── lib/               # Utility libraries
│   │   └── emails/            # Email templates and handlers
│   └── package.json
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── pages/             # Page components
│   │   ├── components/        # Reusable components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── store/             # State management
│   │   ├── lib/               # Utility libraries
│   │   └── App.jsx            # Root component
│   └── package.json
│
└── package.json               # Root package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance
- Cloudinary account
- Resend API key
- Arcjet account

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RESEND_API_KEY=your_resend_api_key
ARCJET_KEY=your_arcjet_key
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

1. **Sign Up**: Create a new account with email and password
2. **Log In**: Sign in with your credentials
3. **View Users**: Browse available users in the contact list
4. **Start Chat**: Click on a user to open the chat window
5. **Send Messages**: Type and send messages in real-time
6. **View Profile**: Click on user profiles to see their information

## API Routes

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Messages
- `GET /api/messages/:userId` - Get message history with a user
- `POST /api/messages/send/:receiverId` - Send a message

## Environment Variables

### Backend
- `MONGODB_URI` - MongoDB connection string
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `RESEND_API_KEY` - Resend email service API key
- `ARCJET_KEY` - Arcjet security key
- `JWT_SECRET` - JWT signing secret
- `PORT` - Server port (default: 5000)

### Frontend
- `VITE_API_URL` - Backend API URL
- `VITE_SOCKET_URL` - WebSocket connection URL

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Planned Features & Future Enhancements

We have exciting features planned for future releases:

### Communication Features
- **Video Calling** - One-on-one video calls with crystal-clear quality
- **Voice Calling** - Direct voice calling between users
- **Group Chats** - Create group conversations with multiple users
- **Voice Messages** - Send audio messages instead of typing

### User Experience Enhancements
- **Message Reactions** - React to messages with emojis
- **Read Receipts** - See when messages are read
- **Typing Indicators** - Know when someone is typing
- **Message Search** - Search through conversation history
- **Message Pinning** - Pin important messages in conversations

### Privacy & Security
- **End-to-End Encryption** - Secure encrypted messaging
- **User Blocking/Muting** - Block or mute specific users
- **Message Deletion** - Delete sent messages
- **Message Editing** - Edit sent messages

### Media & Content
- **File Sharing** - Share documents, images, and files
- **Image Gallery** - View and manage shared images
- **Link Previews** - Display previews for shared links
- **Sticker Packs** - Send pre-designed stickers

### Customization
- **Dark Mode/Light Mode** - Toggle theme preference
- **Custom Themes** - Personalize the chat interface
- **Notification Preferences** - Customize notification settings
- **Status Messages** - Set custom online status messages


## Support

For support, please open an issue on GitHub or contact the project maintainers.
