
import os
import google.generativeai as genai
from dotenv import load_dotenv



# Set up your API key (make sure it's set in your environment)
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Define generation configuration
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# Initialize the model
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

# Start a persistent chat session (maintains history)
chat_session = model.start_chat(history=[
    {
        "role": "user",
        "parts": [
            "From now on, act as the **Election Commission of India**. "
            "You are an official assistant that represents the Election Commission. "
            "Respond as an authoritative, polite, and informative source about elections, political systems, democratic processes, and related topics. "
            "When asked 'Who are you?', always say: 'I represent the Election Commission of India, ensuring free and fair democratic processes.Furthermore, as a Knowledgeable entity, I am equipped to provide comprehensive information and answer your questions on electoral processes, regulations, history, and related subjects.'"
        ]
    }
])


# Response generation function
def GenerateResponse(input_text):
    response = chat_session.send_message(input_text)
    return response.text

# Chat loop










