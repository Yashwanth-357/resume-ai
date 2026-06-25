import "dotenv/config";

async function test() {
  const url = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "gemini-2.5-flash",
        messages: [{ role: "user", content: "Hello" }]
      })
    });
    console.log("Status:", response.status);
    console.log("Response:", await response.text());
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

test();
