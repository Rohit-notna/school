import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    console.log('inside method createSchool 1');
    const formData = req.body;
    const sqlQuery = `INSERT INTO school (name, address, city, state, contact_number, image, email_id)
      VALUES (
        '${formData.name}',
        '${formData.address}',
        '${formData.city}',
        '${formData.state}',
        '${formData.contact_number}',
        '${formData.image}',
        '${formData.email_id}'
      );
    `;
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