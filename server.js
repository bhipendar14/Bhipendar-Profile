import app from "./api/index.js";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n✅ Email server running on http://localhost:${PORT}`);
  console.log(`   POST /api/contact is ready\n`);
});
