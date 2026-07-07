const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'assessment.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open database:', err.message);
  } else {
    console.log('Connected to SQLite database at', dbPath);
    initDb();
  }
});

// Wrap db.run, db.get, db.all in Promises for clean async/await syntax
const run = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this); // exposes lastID and changes
    });
  });
};

const get = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const all = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

function initDb() {
  db.serialize(async () => {
    try {
      // Create Companies Table
      await run(`
        CREATE TABLE IF NOT EXISTS Companies (
          CompanyID INTEGER PRIMARY KEY AUTOINCREMENT,
          CompanyName TEXT NOT NULL,
          Industry TEXT,
          CompanySize TEXT,
          CreatedDate TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create Participants Table
      await run(`
        CREATE TABLE IF NOT EXISTS Participants (
          ParticipantID INTEGER PRIMARY KEY AUTOINCREMENT,
          CompanyID INTEGER REFERENCES Companies(CompanyID),
          FirstName TEXT NOT NULL,
          LastName TEXT NOT NULL,
          JobTitle TEXT,
          Email TEXT NOT NULL,
          Phone TEXT
        )
      `);

      // Create Assessments Table
      await run(`
        CREATE TABLE IF NOT EXISTS Assessments (
          AssessmentID INTEGER PRIMARY KEY AUTOINCREMENT,
          ParticipantID INTEGER REFERENCES Participants(ParticipantID),
          AssessmentDate TEXT DEFAULT CURRENT_TIMESTAMP,
          OverallScore INTEGER NOT NULL,
          MaturityLevel TEXT NOT NULL
        )
      `);

      // Create Responses Table
      await run(`
        CREATE TABLE IF NOT EXISTS Responses (
          ResponseID INTEGER PRIMARY KEY AUTOINCREMENT,
          AssessmentID INTEGER REFERENCES Assessments(AssessmentID),
          Question TEXT NOT NULL,
          Answer INTEGER NOT NULL,
          Score INTEGER NOT NULL
        )
      `);

      console.log('Database tables verified/created successfully.');
      await seedData();
    } catch (err) {
      console.error('Error initializing tables:', err);
    }
  });
}

/**
 * Seeds mock assessment records if the database is fresh
 */
async function seedData() {
  try {
    const assessCount = await get("SELECT COUNT(*) as count FROM Assessments");
    if (assessCount && assessCount.count <= 1) {
      console.log("Seeding initial mock data into database...");
      
      // Seed 1: Nova Software (High Performing)
      await saveAssessment({
        companyName: 'Nova Software',
        industry: 'Technology',
        companySize: '11-50',
        firstName: 'Alex',
        lastName: 'Rivera',
        jobTitle: 'Engineering Director',
        email: 'alex.rivera@novasoft.io',
        phone: '+1 (555) 432-8765',
        overallScore: 92,
        maturityLevel: 'High Performing',
        responses: [
          { question: "Our key business processes are documented.", answer: 5, score: 5 },
          { question: "People know exactly what they need to do.", answer: 5, score: 5 },
          { question: "Projects usually finish on time.", answer: 4, score: 4 },
          { question: "Manual work is kept to a minimum.", answer: 4, score: 4 },
          { question: "Problems are identified before affecting customers.", answer: 5, score: 5 },
          
          { question: "Departments work well together.", answer: 5, score: 5 },
          { question: "Responsibilities are clearly defined.", answer: 5, score: 5 },
          { question: "Communication is effective.", answer: 4, score: 4 },
          { question: "Employees receive regular training.", answer: 4, score: 4 },
          { question: "Performance is monitored.", answer: 5, score: 5 },

          { question: "Our tools make daily work easier.", answer: 5, score: 5 },
          { question: "Information is easy to access.", answer: 5, score: 5 },
          { question: "We avoid entering the same information multiple times.", answer: 4, score: 4 },
          { question: "Technology helps improve productivity.", answer: 5, score: 5 },
          { question: "Digital tools support our business goals.", answer: 5, score: 5 },

          { question: "Management decisions are based on reliable information.", answer: 4, score: 4 },
          { question: "Reports are available when needed.", answer: 5, score: 5 },
          { question: "Business indicators are monitored.", answer: 5, score: 5 },
          { question: "Information is accurate.", answer: 5, score: 5 },
          { question: "Important information is easy to find.", answer: 4, score: 4 },

          { question: "Customers receive timely responses.", answer: 5, score: 5 },
          { question: "Customer requests are tracked.", answer: 5, score: 5 },
          { question: "Service quality is consistent.", answer: 5, score: 5 },
          { question: "Customer feedback is collected.", answer: 4, score: 4 },
          { question: "Customer satisfaction is important to our business.", answer: 5, score: 5 }
        ]
      });

      // Seed 2: Traditions Baking Corp (Developing)
      await saveAssessment({
        companyName: 'Traditions Baking Corp',
        industry: 'Manufacturing',
        companySize: '51-200',
        firstName: 'Maria',
        lastName: 'Gomez',
        jobTitle: 'Operations Manager',
        email: 'm.gomez@traditionsbaking.com',
        phone: '+1 (555) 876-1234',
        overallScore: 54,
        maturityLevel: 'Developing',
        responses: [
          { question: "Our key business processes are documented.", answer: 3, score: 3 },
          { question: "People know exactly what they need to do.", answer: 4, score: 4 },
          { question: "Projects usually finish on time.", answer: 3, score: 3 },
          { question: "Manual work is kept to a minimum.", answer: 2, score: 2 },
          { question: "Problems are identified before affecting customers.", answer: 3, score: 3 },
          
          { question: "Departments work well together.", answer: 3, score: 3 },
          { question: "Responsibilities are clearly defined.", answer: 4, score: 4 },
          { question: "Communication is effective.", answer: 3, score: 3 },
          { question: "Employees receive regular training.", answer: 3, score: 3 },
          { question: "Performance is monitored.", answer: 3, score: 3 },

          { question: "Our tools make daily work easier.", answer: 3, score: 3 },
          { question: "Information is easy to access.", answer: 4, score: 4 },
          { question: "We avoid entering the same information multiple times.", answer: 2, score: 2 },
          { question: "Technology helps improve productivity.", answer: 3, score: 3 },
          { question: "Digital tools support our business goals.", answer: 4, score: 4 },

          { question: "Management decisions are based on reliable information.", answer: 3, score: 3 },
          { question: "Reports are available when needed.", answer: 3, score: 3 },
          { question: "Business indicators are monitored.", answer: 2, score: 2 },
          { question: "Information is accurate.", answer: 4, score: 4 },
          { question: "Important information is easy to find.", answer: 3, score: 3 },

          { question: "Customers receive timely responses.", answer: 4, score: 4 },
          { question: "Customer requests are tracked.", answer: 3, score: 3 },
          { question: "Service quality is consistent.", answer: 4, score: 4 },
          { question: "Customer feedback is collected.", answer: 2, score: 2 },
          { question: "Customer satisfaction is important to our business.", answer: 5, score: 5 }
        ]
      });

      // Seed 3: Swift Care Clinic (Needs Attention)
      await saveAssessment({
        companyName: 'Swift Care Clinic',
        industry: 'Healthcare',
        companySize: '1-10',
        firstName: 'Sarah',
        lastName: 'Patel',
        jobTitle: 'Founder & Lead Physician',
        email: 'sarah@swiftcare.md',
        phone: '+1 (555) 234-5678',
        overallScore: 32,
        maturityLevel: 'Needs Attention',
        responses: [
          { question: "Our key business processes are documented.", answer: 2, score: 2 },
          { question: "People know exactly what they need to do.", answer: 3, score: 3 },
          { question: "Projects usually finish on time.", answer: 2, score: 2 },
          { question: "Manual work is kept to a minimum.", answer: 1, score: 1 },
          { question: "Problems are identified before affecting customers.", answer: 2, score: 2 },
          
          { question: "Departments work well together.", answer: 2, score: 2 },
          { question: "Responsibilities are clearly defined.", answer: 3, score: 3 },
          { question: "Communication is effective.", answer: 2, score: 2 },
          { question: "Employees receive regular training.", answer: 2, score: 2 },
          { question: "Performance is monitored.", answer: 2, score: 2 },

          { question: "Our tools make daily work easier.", answer: 2, score: 2 },
          { question: "Information is easy to access.", answer: 2, score: 2 },
          { question: "We avoid entering the same information multiple times.", answer: 1, score: 1 },
          { question: "Technology helps improve productivity.", answer: 2, score: 2 },
          { question: "Digital tools support our business goals.", answer: 2, score: 2 },

          { question: "Management decisions are based on reliable information.", answer: 2, score: 2 },
          { question: "Reports are available when needed.", answer: 2, score: 2 },
          { question: "Business indicators are monitored.", answer: 1, score: 1 },
          { question: "Information is accurate.", answer: 3, score: 3 },
          { question: "Important information is easy to find.", answer: 2, score: 2 },

          { question: "Customers receive timely responses.", answer: 3, score: 3 },
          { question: "Customer requests are tracked.", answer: 2, score: 2 },
          { question: "Service quality is consistent.", answer: 3, score: 3 },
          { question: "Customer feedback is collected.", answer: 2, score: 2 },
          { question: "Customer satisfaction is important to our business.", answer: 4, score: 4 }
        ]
      });

      console.log("Mock data seeded successfully.");
    }
  } catch (err) {
    console.error("Failed to seed database:", err);
  }
}

/**
 * Saves a complete assessment in a transaction
 */
async function saveAssessment(assessmentData) {
  const {
    companyName, industry, companySize,
    firstName, lastName, jobTitle, email, phone,
    overallScore, maturityLevel, responses
  } = assessmentData;

  return new Promise((resolve, reject) => {
    db.serialize(async () => {
      try {
        await run('BEGIN TRANSACTION');

        // 1. Insert Company
        const compResult = await run(
          `INSERT INTO Companies (CompanyName, Industry, CompanySize) VALUES (?, ?, ?)`,
          [companyName, industry || null, companySize || null]
        );
        const companyID = compResult.lastID;

        // 2. Insert Participant
        const partResult = await run(
          `INSERT INTO Participants (CompanyID, FirstName, LastName, JobTitle, Email, Phone) VALUES (?, ?, ?, ?, ?, ?)`,
          [companyID, firstName, lastName, jobTitle, email, phone || null]
        );
        const participantID = partResult.lastID;

        // 3. Insert Assessment
        const assessResult = await run(
          `INSERT INTO Assessments (ParticipantID, OverallScore, MaturityLevel) VALUES (?, ?, ?)`,
          [participantID, overallScore, maturityLevel]
        );
        const assessmentID = assessResult.lastID;

        // 4. Insert Responses
        for (const resp of responses) {
          await run(
            `INSERT INTO Responses (AssessmentID, Question, Answer, Score) VALUES (?, ?, ?, ?)`,
            [assessmentID, resp.question, resp.answer, resp.score]
          );
        }

        await run('COMMIT');
        resolve(assessmentID);
      } catch (error) {
        run('ROLLBACK').catch(() => {});
        reject(error);
      }
    });
  });
}

/**
 * Retrieves all assessments (joined with Participant and Company details)
 */
async function getAllAssessments() {
  const query = `
    SELECT 
      a.AssessmentID, 
      a.AssessmentDate, 
      a.OverallScore, 
      a.MaturityLevel, 
      p.FirstName, 
      p.LastName, 
      p.Email, 
      p.JobTitle, 
      p.Phone, 
      c.CompanyName, 
      c.Industry, 
      c.CompanySize 
    FROM Assessments a 
    JOIN Participants p ON a.ParticipantID = p.ParticipantID 
    JOIN Companies c ON p.CompanyID = c.CompanyID 
    ORDER BY a.AssessmentDate DESC
  `;
  return await all(query);
}

/**
 * Retrieves a single assessment and its responses
 */
async function getAssessmentById(id) {
  const assessQuery = `
    SELECT 
      a.AssessmentID, 
      a.AssessmentDate, 
      a.OverallScore, 
      a.MaturityLevel, 
      p.FirstName, 
      p.LastName, 
      p.Email, 
      p.JobTitle, 
      p.Phone, 
      c.CompanyName, 
      c.Industry, 
      c.CompanySize 
    FROM Assessments a 
    JOIN Participants p ON a.ParticipantID = p.ParticipantID 
    JOIN Companies c ON p.CompanyID = c.CompanyID 
    WHERE a.AssessmentID = ?
  `;
  
  const responsesQuery = `
    SELECT ResponseID, Question, Answer, Score 
    FROM Responses 
    WHERE AssessmentID = ?
  `;

  const assessment = await get(assessQuery, [id]);
  if (!assessment) return null;

  const responses = await all(responsesQuery, [id]);
  assessment.responses = responses;
  
  return assessment;
}

/**
 * Retrieves dashboard statistics
 */
async function getDashboardStats() {
  const compCount = await get(`SELECT COUNT(*) as count FROM Companies`);
  const assessCount = await get(`SELECT COUNT(*) as count FROM Assessments`);
  const avgScoreVal = await get(`SELECT AVG(OverallScore) as avgScore FROM Assessments`);

  const latestQuery = `
    SELECT 
      a.AssessmentID, 
      c.CompanyName, 
      p.FirstName, 
      p.LastName, 
      a.OverallScore, 
      a.MaturityLevel, 
      a.AssessmentDate 
    FROM Assessments a 
    JOIN Participants p ON a.ParticipantID = p.ParticipantID 
    JOIN Companies c ON p.CompanyID = c.CompanyID 
    ORDER BY a.AssessmentDate DESC 
    LIMIT 5
  `;
  const latestAssessments = await all(latestQuery);

  return {
    totalCompanies: compCount ? compCount.count : 0,
    totalAssessments: assessCount ? assessCount.count : 0,
    averageScore: avgScoreVal && avgScoreVal.avgScore !== null ? Math.round(avgScoreVal.avgScore * 10) / 10 : 0,
    latestAssessments
  };
}

module.exports = {
  saveAssessment,
  getAllAssessments,
  getAssessmentById,
  getDashboardStats
};
