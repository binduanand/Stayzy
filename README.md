# 🏡 Stayzy - Stay Rental Platform


Stayzy is a vacation rental platform designed to allow users to search for, list, and manage properties. It features secure authentication, image storage with Cloudinary, and form validation using Joi. This platform allows hosts to list their properties and travelers to find the perfect place to stay.

🚀**Technologies Used:**

**-Node.js:** Backend server framework.

**-Express.js:** Web application framework for routing.

**-Bootstrap:** Frontend framework for styling the platform.

**-EJS:** Templating engine for rendering views on the server side.

**-MongoDB/Mongoose:** Database and ORM for managing stays and user data.

🚀**Features** 

-🔐**User Authentication:** Secure login and signup using Passport.js. 

-🖼️**Image Uploading:** Upload property images directly to Cloudinary.

-🔍**Search and Filter:** Search properties based on categories (e.g., mountain, beach, city, etc.).

-✅**Validation:** Input validation for stays using Joi.

-✨**Responsive Design:** Fully responsive UI using Bootstrap.

-💻**Server-Side** Rendering: Render dynamic content with EJS templates.

**🛠️ Installation** 

1. Clone the repository:
   git clone https://github.com/binduanand/Stayzy.git
   
3. Navigate to the project directory:
   cd stayzy
   
5. Install dependencies:
   npm install
   
7. Set up environment variables:
   
    Add the following:
   
    CLOUDINARY_CLOUD_NAME=your_name
   
    CLOUDINARY_API_KEY=your_key
   
    CLOUDINARY_API_SECRET=your_secret
   
    DB_URL=your_mongo_url
   
    SECRET=your_session_secret
   
8. Start the app:
   node app.js

## 💡 Usage

- Sign up or log in as a user.
- Add new stay listings with images, price, and location.
- Filter or search stays by category.
- Admin can delete listings and manage users.




