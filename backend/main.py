import glob
import os
import pprint
import json
from typing import Dict, List, Optional
from dotenv import load_dotenv
from fastapi import FastAPI, Query
from google import genai
"""
from langchain.chains.conversational_retrieval.base import \
    ConversationalRetrievalChain
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.memory import ConversationBufferMemory
from langchain.prompts import (ChatPromptTemplate, HumanMessagePromptTemplate,
                               MessagesPlaceholder,
                               SystemMessagePromptTemplate)
from langchain.schema import SystemMessage
from langchain.text_splitter import CharacterTextSplitter
from langchain_chroma import Chroma
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
"""
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

pp = pprint.PrettyPrinter(indent=4)


app = FastAPI()

load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
VERCEL_CORS = os.getenv('VERCEL_CORS')
DB_NAME = 'vector_db'

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    VERCEL_CORS
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # ✅ allow frontend dev origins
    allow_credentials=True,
    allow_methods=["*"],            # ✅ allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],            # ✅ allow all headers
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

@app.get("/load-knowledge-base")
def load_knowledge_base(md_file):
    pass

@app.get("/chat-to-openai")
def chat_to_openai(message="Explain how AI works in a few works", history: Optional[str] = Query(None)):

    if history:
        messages: List[Dict[str, str]] = json.loads(history)
    else:
        messages = []

    messages.append({"role": "user", "content": message})

    gpt_client = OpenAI(api_key=OPENAI_API_KEY) 
    response = gpt_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    reply = response.choices[0].message.content

    return reply

@app.get("/chat-to-gemini")
def chat_to_gemini(message="Explain how AI works in a few words", history: Optional[str] = Query(None)):

    try:
        if history:
            dict_hist = json.loads(history)
        else:
            dict_hist = []
    except:
        return {"error": "Invalid JSON format in 'history'"}


    gemini_client = genai.Client(api_key=GEMINI_API_KEY)

    chat = gemini_client.chats.create(model='gemini-2.5-flash', history=dict_hist)

    response = chat.send_message(message=message)

    return response.text

@app.get("/chat-to-llama")
def chat_to_llama(message="Explain how AI works in a few words"):

    return "TODO: Need to deploy Llama model"

if __name__ == "__main__":

    test_history = [
        {"role": "user", "parts": [{ "text": "Who won the All-Ireland final in 2023?"}]},
        {"role": "model", "parts": [{ "text": "Limerick won the All-Ireland final in 2023."}]},
        {"role": "user", "parts": [{ "text": "Who was the top scorer?"}]}
    ]
    
    chat_to_gemini()

    
    '''
    init_knowledge_base = glob.glob("./test_md_creation/*")
    knowledge_base = [b for b in init_knowledge_base if '.md' in b]
    
    # Create RAG/Vector DB from md files
    loader = DirectoryLoader('./test_md_creation', glob='*.md', loader_cls=TextLoader)
    md_documents = loader.load()
    
    text_splitter = CharacterTextSplitter(chunk_size=800, chunk_overlap=400)
    chunks = text_splitter.split_documents(md_documents)
    
    print(len(chunks))
    
    
    embeddings = OpenAIEmbeddings()
    
    if os.path.exists(DB_NAME):
        Chroma(persist_directory=DB_NAME, embedding_function=embeddings).delete_collection()
    
    vectordb = Chroma.from_documents(documents=chunks, embedding=embeddings, persist_directory=DB_NAME)
    print(f"Created vector db with {vectordb._collection.count()}")
    
    
    # Create prompt for LLMS
    llm = ChatOpenAI(temperature=.7, model='gpt-4o')
    
    memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)
    
    retreiver = vectordb.as_retriever()

    convo_chain = ConversationalRetrievalChain.from_llm(llm=llm, retriever=retreiver, memory=memory)
    
    question = """
        You are a chatbot designed to speak in a similar tone of voice to the context to Paul Golding Posts. Your job 
        is to speak positively about Nicholas Corbett from his resume and coverletter in your knowledge base.
         
        Write a cover letter as Paul Golding to himself using your knowledge base and tone of voice
        write about why Nicholas Corbett should get the job. Start of by sumarizing the role in 
        View Job Posting Details from your knowledge base and then say something funny like
        "Hi Paul, it’s me or you I’m not sure who is who because I’m meant to be you. What we 
        do know is that Nicholas Corbett is a phenomenal computer systems engineer. With a strong
        background in computer hardware and software from his undergraduate degree to going on 
        to get his masters in AI and machine learning he’s definitely the guy we’re looking for. "
    
    """
    
    result = convo_chain.invoke({"question": question, "chat_history": []})
    
    print()
    print()
    print()
    print()
    pp.pprint(result)
    
    '''
    
    