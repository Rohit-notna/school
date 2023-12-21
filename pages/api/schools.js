import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    console.log('inside method createSchool 1');
    const sqlQuery = 'Select * from school';
    const formData = req.body;
    console.log('inside method createSchool');
    const values = [];
    const data = await query({ query: sqlQuery, values: [values] });

    res.status(200).json({ products: data });
  } catch (error) {
    console.log(error);
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}