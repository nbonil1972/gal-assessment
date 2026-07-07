const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for development
app.use(cors());

// Parse JSON body
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// POST /assessment - Save a new assessment
app.post('/assessment', async (req, res) => {
  try {
    const {
      companyName, firstName, lastName, email, responses
    } = req.body;

    // Validate minimal required fields
    if (!companyName || !firstName || !lastName || !email || !responses || !Array.isArray(responses)) {
      return res.status(400).json({ error: 'Missing required participant info or assessment responses.' });
    }

    const assessmentId = await db.saveAssessment(req.body);
    res.status(201).json({ success: true, assessmentId });
  } catch (err) {
    console.error('Error saving assessment:', err);
    res.status(500).json({ error: 'Internal server error while saving assessment.' });
  }
});

// GET /assessment - Return all assessments
app.get('/assessment', async (req, res) => {
  try {
    const assessments = await db.getAllAssessments();
    res.json(assessments);
  } catch (err) {
    console.error('Error fetching assessments:', err);
    res.status(500).json({ error: 'Internal server error while fetching assessments.' });
  }
});

// GET /assessment/:id - Return a single assessment
app.get('/assessment/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid assessment ID.' });
    }

    const assessment = await db.getAssessmentById(id);
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found.' });
    }

    res.json(assessment);
  } catch (err) {
    console.error('Error fetching assessment by ID:', err);
    res.status(500).json({ error: 'Internal server error while fetching assessment.' });
  }
});

// GET /dashboard - Return dashboard statistics
app.get('/dashboard', async (req, res) => {
  try {
    const stats = await db.getDashboardStats();
    res.json(stats);
  } catch (err) {
    console.error('Error fetching dashboard stats:', err);
    res.status(500).json({ error: 'Internal server error while fetching dashboard statistics.' });
  }
});

// Fallback for SPA or simple routing - serve index.html or admin.html as needed
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
