const express = require('express');
const router = express.Router();
const { fire } = require('../firebase');
const { addDoc, collection, getDocs, getDoc, query, where, limit} = require('firebase/firestore');


router.get("/", async (req, res) => {
  try {
    const { name, email, page = 1, pageSize = 100 } = req.query;  // Default pageSize of 100 users per page
    const collectionRef = collection(fire, "users");

    // Start with an empty query
    let userQuery = query(collectionRef, limit(pageSize));

    // Apply filters if provided
    if (email) {
      userQuery = query(userQuery, where("email", "==", email));
    }

    if (name) {
      userQuery = query(userQuery, where("name", "==", name));
    }

    // Fetch the documents
    const querySnapshot = await getDocs(userQuery);
    let response = [];
    querySnapshot.forEach((doc) => {
      response.push({ id: doc.id, ...doc.data() });
    });

    res.json({ users: response });
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).send("Error fetching documents");
  }
});


// Route: Add a new user
router.post('/create', async (req, res) => {
  const {email,password,confirmpass} = req.body
  try {
    // Reference the 'users' collection in Firestore
    const usersCollection = collection(fire, 'users');

    // Add a document to the 'users' collection
    const docRef = await addDoc(usersCollection, {
      email,
      password,
      confirmpass,
      createdAt: new Date(),
    });

    res.status(201).send({ message: 'User added successfully', docId: docRef.id });
  } catch (error) {
    console.error('Error adding user: ', error);
    res.status(500).send({ error: 'Failed to add user' });
  }
});

module.exports = router;
