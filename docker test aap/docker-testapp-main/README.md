# 🎓 XYZ University - Student Portal

<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

**A fully Dockerized student registration platform with MongoDB integration**

[Features](#-features) • [Quick Start](#-quick-start) • [API Documentation](#-api-documentation) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Docker Configuration](#-docker-configuration)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

XYZ University Student Portal is a modern web application that allows students to register and access educational resources. Built with Node.js, Express, and MongoDB, this application is fully containerized using Docker for easy deployment and scalability.

## ✨ Features

- 🔐 **User Registration** - Simple and secure student signup
- 📊 **MongoDB Integration** - Persistent data storage with MongoDB
- 🐳 **Fully Dockerized** - Easy deployment with Docker & Docker Compose
- 🎨 **Clean UI** - Responsive and user-friendly interface
- 🔄 **RESTful API** - Well-structured API endpoints
- 📦 **Mongo Express** - Built-in database management interface

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Docker** | Containerization |
| **Mongo Express** | Database admin interface |

## 📦 Prerequisites

Before running this application, make sure you have:

- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- Basic knowledge of Docker and Node.js

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd docker-testapp-main
```

### 2️⃣ Start MongoDB Services

Navigate to the public directory and start MongoDB with Mongo Express:

```bash
cd public
docker-compose -f mongodb.yaml up -d
```

This will start:
- **MongoDB** on `localhost:27017`
- **Mongo Express** on `localhost:8081`

### 3️⃣ Build and Run the Application

Return to the project root and build the Docker image:

```bash
cd ..
docker build -t student-portal .
```

Run the application container:

```bash
docker run -p 5000:5000 --network=public_default student-portal
```

### 4️⃣ Access the Application

- **Application**: [http://localhost:5000](http://localhost:5000)
- **Mongo Express**: [http://localhost:8081](http://localhost:8081)

---

## 📡 API Documentation

### Get All Users

```http
GET /getUsers
```

**Response:**
```json
[
  {
    "_id": "...",
    "email": "jane@email.com",
    "username": "Jane Doe",
    "password": "..."
  }
]
```

### Add New User

```http
POST /addUser
```

**Request Body:**
```json
{
  "email": "jane@email.com",
  "username": "Jane Doe",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "acknowledged": true,
  "insertedId": "..."
}
```

---

## 📁 Project Structure

```
docker-testapp-main/
├── 📄 Dockerfile              # Docker configuration for Node.js app
├── 📄 server.js               # Express server & API routes
├── 📄 package.json            # Node.js dependencies
├── 📂 public/                 # Static files
│   ├── 📄 index.html          # Frontend UI
│   ├── 📄 style.css           # Styling
│   └── 📄 mongodb.yaml        # Docker Compose for MongoDB
└── 📄 README.md               # Project documentation
```

---

## 🔧 Environment Variables

The application uses the following MongoDB connection string:

```javascript
mongodb://admin:qwerty@mongodb:27017/apnacollege-db?authSource=admin
```

**Default Credentials:**
- Username: `admin`
- Password: `qwerty`
- Database: `apnacollege-db`

> ⚠️ **Security Note**: Change these credentials in production!

---

## 🐳 Docker Configuration

### Dockerfile

The application uses Node.js 18 as the base image:

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

### Docker Compose (MongoDB)

```yaml
version: "3.8"
services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: qwerty

  mongo-express:
    image: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: qwerty
```

---

## 🎯 Usage Tips

1. **View Database**: Access Mongo Express at `http://localhost:8081` to view and manage your data
2. **Network Configuration**: Ensure the app container is on the same Docker network as MongoDB
3. **Port Conflicts**: If port 5000 is busy, change the mapping: `-p 3000:5000`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Made with ❤️ for learning Docker and MongoDB

---

## 🙏 Acknowledgments

- Node.js community
- MongoDB team
- Docker documentation
- Express.js framework

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

</div>
