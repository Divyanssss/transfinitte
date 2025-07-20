const express = require("express");
const supabase = require("../config/supabase");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    if (!email||!password||!name||!phone) {
      if (!email) {
        return res.status(400).json({
          error: "Email is required",
        });
      } else if (!password) {
        return res.status(400).json({
          error: "Password is required",
        });
      } else if (!name) {
        return res.status(400).json({
          error: "First name is required",
        });
      } else if (!phone) {
        return res.status(400).json({
          error: "Phone number is required",
        });
      }
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{
          first_name: name,
          phone: phone,
        },
      },
    });

    if (error) {
      return res.status(400).json({ error:error.message });
    } else {
      return res
        .status(200)
        .json({ message: "Check your email to confirm your signup" });
    }
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }

    res.status(200).json({
      message: "Login successful",
     
    });
  } catch (error) {
    console.error("Signin error:", error);
    
  }
});

router.post("/signout", async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Signout error:", error);
    
  }
});

module.exports = router;
