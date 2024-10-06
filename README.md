Here’s an updated version of your React app's `README.md` file with instructions for pulling the code, installing dependencies, and updating the `.env` file:

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 14.x or higher recommended)
- [npm](https://www.npmjs.com/) (Node package manager, typically installed with Node.js)
- [Git](https://git-scm.com/) (for pulling the project)

---

## Getting Started

### Step 1: Clone the Project

First, you need to pull the React app project from the GitHub repository.

1. Open your terminal.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/Gentle-wave/mini-agency.git
   ```

   Replace `your-username` and `your-react-repo` with the actual repository URL.

4. After cloning, navigate into the project directory:

   ```bash
   cd your-react-repo
   ```

---

### Step 2: Install Dependencies

Once you've cloned the project, you need to install the necessary dependencies.

Run the following command in the project root to install all Node.js dependencies:

```bash
npm install
```

---

### Step 3: Update Environment Variables

The project relies on a backend API, and you need to configure the correct base URL in the `.env` file.

1. In the root of the project, locate the `.env` file. If it doesn’t exist, create one.
2. Inside the `.env` file, find or add the following line:

   ```bash
   REACT_APP_BASEURL=http://192.168.112.126:8000
   ```

3. **Update the IP address** (`192.168.112.126`) to match your local machine’s IP address where the backend server is running. The backend should always be running on **port 8000**, but the IP address will depend on your local network configuration.

To find your local IP address:
- On **macOS/Linux**, you can run `ifconfig` in your terminal.
- On **Windows**, you can run `ipconfig` in the Command Prompt.

4. Save the `.env` file after making the changes.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

## Notes

- Make sure the backend is running on the IP address you set in the `.env` file.
- If you change the backend server's IP address, you will need to update the `REACT_APP_BASEURL` in the `.env` file accordingly.
