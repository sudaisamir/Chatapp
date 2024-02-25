
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

 
  const firebaseConfig = {
    apiKey: "AIzaSyA-NMAgI8Jav9jsBYaGPkPEFDiSy-nb8hs",
    authDomain: "smitproject-01.firebaseapp.com",
    projectId: "smitproject-01",
    storageBucket: "smitproject-01.appspot.com",
    messagingSenderId: "402609152402",
    appId: "1:402609152402:web:aac8529afbcd128425214b",
    measurementId: "G-G46L8ZKWJQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =  getAuth(app);
  const provider = new GoogleAuthProvider(); 
  const loginWithGooglebtn = document.getElementById("loginWithGooglebtn")
  // const logoutBtn = document.getElementById("loginWithGooglebtn")
  const logoutBtn = document.getElementById("logoutBtn")
  const currentPageName = window.location.pathname.split("/").pop(); 
  co
  const  onLoad = () =>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
        
        if(currentPageName !== "ChatApp.html" ){
        window.location.href = "ChatApp.html"
       
    }
     console.log(user)
      } else {
        if(currentPageName !== "mainindex.html" && currentPageName !=="" ){
        
        window.location.href = "/"
      }
      }
      console.log("User not Logged In!")
    });
  }
  onLoad()
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    });
  }

  
  loginWithGooglebtn && loginWithGooglebtn.addEventListener("click",signInWithGoogle) 

  const logout = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // ()
      });
        }
        logoutBtn && logoutBtn.addEventListener("click",logout)

        