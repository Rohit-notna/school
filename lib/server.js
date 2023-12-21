import { query } from '../lib/db';

// ... (Other imports and configurations)

// Define the /submitForm endpoint to handle form submissions
app.post('/submitForm', async (req, res) => {
  const formData = req.body;
  const query = 'INSERT INTO submitForm (name, state, email, city, address, contactnumber) VALUES (?, ?, ?, ?, ?, ?)';


  try {
    // Call the query function to insert data into the database
    const results = await query({ query, values: formData });

    console.log('Form data inserted into MySQL:', results);
    res.status(200).send('Form data submitted successfully');
  } catch (error) {
    console.error('MySQL error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// ... (Other routes and server setup)

// Start the server
const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});