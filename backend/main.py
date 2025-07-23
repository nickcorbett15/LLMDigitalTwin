from fastapi import FastAPI
from google import genai
from dotenv import load_dotenv
import os
import glob
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_chroma import Chroma
from langchain.memory import ConversationBufferMemory
from langchain.chains.conversational_retrieval.base import ConversationalRetrievalChain
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder, SystemMessagePromptTemplate, HumanMessagePromptTemplate
from langchain.schema import SystemMessage
import pprint

pp = pprint.PrettyPrinter(indent=4)


app = FastAPI()

DB_NAME = 'vector_db'

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

@app.get("/load-knowledge-base")
def load_knowledge_base(md_file):
    pass

@app.get("/chat-to-openai")
def chat_to_openai(messgae="Explain how AI works in a few works"):
    pass

@app.get("/chat-to-gemini")
def chat_to_gemini(message="Explain how AI works in a few words"):

    client = genai.Client(api_key="YOUR_API_KEY")

    response = client.models.generate_content(
        model="gemini-2.5-flash", contents="Explain how AI works in a few words"
    )
    
    return response.text

@app.get("/chat-to-llama")
def chat_to_llama(message="Explain how AI works in a few words"):
    pass

if __name__ == "__main__":
    
    load_dotenv()
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    
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
    
    question = '''
        You are a chatbot designed to speak in a similar tone of voice to the context to Paul Golding Posts. Your job 
        is to speak positively about Nicholas Corbett from his resume and coverletter in your knowledge base.
         
        Write a cover letter as Paul Golding to himself using your knowledge base and tone of voice
        write about why Nicholas Corbett should get the job. Start of by sumarizing the role in 
        View Job Posting Details from your knowledge base and then say something funny like
        "Hi Paul, it’s me or you I’m not sure who is who because I’m meant to be you. What we 
        do know is that Nicholas Corbett is a phenomenal computer systems engineer. With a strong
        background in computer hardware and software from his undergraduate degree to going on 
        to get his masters in AI and machine learning he’s definitely the guy we’re looking for. "
    
    '''
    
    result = convo_chain.invoke({"question": question, "chat_history": []})
    
    print()
    print()
    print()
    print()
    pp.pprint(result)