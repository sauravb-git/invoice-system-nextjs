import { MongoClient } from "mongodb"; 

async function handler(req, res) {
 
  const client = await MongoClient.connect(
     `${process.env.DB_LINK+"invoice"}`,
    { useNewUrlParser: true }
  );

  if (req.body) {
    const invoice = {
      senderAddress: {
        street: req.body.senderStreet,
        city: req.body.senderCity,
        postalCode: req.body.senderPostalCode,
        country: req.body.senderCountry,
      },
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
      clientAddress: {
        street: req.body.clientStreet,
        city: req.body.clientCity,
        postalCode: req.body.clientPostalCode,
        country: req.body.clientCountry,
      },
      createdAt: req.body.createdAt,
      paymentDue: req.body.createdAt,
      paymentTerms: req.body.paymentTerms,
      description: req.body.description,
      status: req.body.status,
      items: req.body.items,
      total: req.body.total,
    };

    const db = client.db();
    const collection = db.collection("allInvoices");
    await collection.insertOne(invoice); 
    res.status(200).json({ message: "Invoice added successfully" }); 
    client.close();
  } 
}

export default handler;
