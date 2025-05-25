# Full Stack CRUD Task Manager

This project is a full-stack web application for managing tasks. It features:

* Frontend built with **React**
* Backend API built with **Node.js** and **Express**
* **PostgreSQL** as the database
* RESTful CRUD operations

---

## 🔧 Project Structure

```
root/
│
├── backend/              # Node.js + Express server
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── frontend/             # React client app
│   ├── public/
│   ├── src/
│   ├── README.md
│   └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed
* PostgreSQL installed and running
* A PostgreSQL database named `taskdb`

---

## 🛠 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file with the following content:

```env
DATABASE_URL=postgresql://your-user-name:password@localhost:5432/database-name
```

4. Create the `tasks` table in PostgreSQL:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
```

5. Start the server:

```bash
npm start
```

The server will run on `http://localhost:5000`.

---

## 💻 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The React app will run on `http://localhost:3000`.

---

## 🔄 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| POST   | `/tasks`     | Create a new task |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

---

## 🧪 Features

* Add new tasks
* Mark tasks as completed
* Edit task title
* Delete tasks
* Responsive frontend using React
* PostgreSQL for reliable data storage

---

## 📦 Dependencies

### Backend

* express
* cors
* dotenv
* pg

### Frontend

* react
* react-dom
* react-scripts
* @testing-library/react

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author
TANMAY GUHA

Email:- tanmayguha15@gmail.com

---
