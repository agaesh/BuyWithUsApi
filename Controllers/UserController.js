const { fire } = require('../firebase');
const { getFirestore, collection, getDocs, getDoc, setDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, doc } = require('firebase/firestore');
class UserController{
    async fetchUser(req,res){
        try{
        const collectionRef = collection(fire, "users");
        let snapshot = null;
  
        if(!req.query === undefined){
          const { name, email, page = 1, pageSize = 100 } = req.query;  // Default pageSize of 100 users per page
            let userQuery = query(collectionRef, limit(pageSize));  
            if (email) {
              userQuery = query(userQuery, where("email", "==", email));
            }
            if (name) {
              userQuery = query(userQuery, where("name", "==", name));
            }
            snapshot = await getDocs(userQuery);
        }else{
            snapshot = await getDocs(collectionRef)
        }
       
        // Fetch the documents
        let response = [];
        snapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
    
        res.json({ users: response });
      } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).send("Error fetching documents");
      }
    }
    async CreateUser(req,res){
        try {
          const {email,password,confirmpass} = req.body
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
    }

    async UpdateUser(res,req){
        const doc = doc(fire, "users",req.body.id)
        const docSnapShot = await getDoc(doc);

        if(docSnapShot.exists()){
            const data = doc.data();
             // Assuming you want to update the user's information (e.g., name, email)
            const updatedData = {
                ...data, // retain existing data
                name: req.body.name || data.name, // Update fields if provided in the request
                email: req.body.email || data.email
            };
        // Now, update the user data in Firestore
        try {
            await updateDoc(userRef, updatedData); // Update the document
            res.status(200).send({ message: "User updated successfully" });
            } catch (error) {
                console.error("Error updating user:", error);
                res.status(500).send({ message: "Error updating user data" });
            }
        } else {
            res.status(404).send({ message: "User not found" }); // Document doesn't exist
        }
    }

    async DeleteUser(req,res){
        const id = req.body.id;  // Correct way to access route parameter
        try {
          const docRef = doc(fire, "users", id);  // Reference to the document
          const docSnapshot = await getDoc(docRef);  // Get the document snapshot
      
          if (!docSnapshot.exists()) {
            return res.status(404).send({ error: "Document not found" });  // Document doesn't exist, return 404
          }
      
          // Delete the document
          await deleteDoc(docRef);
      
          res.status(200).send({message: "Document deleted successfully"});
      
        } catch (error) {
          console.error("Error deleting document:", error);
          res.status(500).send({ error: "Failed to delete document" });  // Error handling
        }
    }     
}
module.exports = UserController