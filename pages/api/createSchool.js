import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
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
    
    const values = [];
    const data = await query({ query: sqlQuery, values: [values] });

    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}