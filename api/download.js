export default function handler(req, res) {
  const { filename, content } = req.query;

  if (!filename || !content) {
    return res.status(400).send("Missing filename or content");
  }

  // Decode the base64 content
  const decodedContent = Buffer.from(content, "base64").toString("utf-8");

  // Set headers for file download
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.setHeader("Content-Type", "text/plain");

  // Send the file content
  res.status(200).send(decodedContent);
}
