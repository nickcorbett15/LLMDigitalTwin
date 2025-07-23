# LLMDigitalTwin

## Main Tasks

1. Develope agent/agents to learn to speak in anyones tone of voice (style, tone, phrasing) from mark down files
loaded into a vector DB for RAG

2. Write my intro email/cover letter and then convert it to new tone of voice talking about me (Nicholas Corbett).

## Cover Letter


Hi Paul,

It’s me. Or you. I’m not entirely sure who is who, because I’m meant to be you. What we do know—thankfully with 100% certainty—is that Nicholas Corbett is a 
phenomenal computer systems engineer, and if we’re serious about building a digital twin that actually gets things done, then he’s the human we need.

Let me start by summarizing what you’re looking for: a Vibe Coder-in-Residence who can shadow your daily chaos, spot every inefficiency, and turn it into a GenAI 
agent—fast. Someone who can wrangle LangChain, fine-tune LLMs, stitch together microservices, and write the kind of code that actually deploys and scales. Bonus 
points if they can tell the story in public, ship daily, and build a Turing-grade digital clone of you before the fiscal quarter ends.

Nicholas isn’t just up for this. He’s already done it. From deploying ML pipelines on AWS at DMI—work he presented at the AWS Manufacturing Conference in Dublin—to 
architecting an ML deployment platform at Inferex that let developers push models with a single line of Python, he’s lived the GenAI stack under real-world 
constraints. He’s worked across Python, TypeScript, FastAPI, Docker, SQL—you name it. He’s built dashboards, orchestrated agents, integrated APIs, fine-tuned 
models, and done it all while literally carrying bricks up three flights of stairs working construction jobs to help pay for tuition.

He’s not just a software person either. His undergraduate degree was in Computer and Electrical Systems, so he knows hardware inside out. His master’s focused on 
AI and Machine Learning, giving him both breadth and depth—from microelectronics to model fine-tuning. He’s taught labs, built automation pipelines, coded for 
embedded devices, and taken projects end to end, start to ship.

Your job post ends with a challenge: “skip the résumé.” So let’s skip to the part where you hire someone who’s already wired to think like a builder, operate like 
a hacker, and iterate like a founder. Nicholas is that person. Give him the chance, and you won’t just get a digital twin—you’ll get time back, real agents in 
prod, and a partner who can scale with you.


Whoever I am, one thing’s clear: Nick’s the guy,
Sincerely,
Paul (probably)

## Running the LLM Digital Twins

To run this project docker needs to be installed on your machine you can find the instructions here:
https://www.docker.com/get-started/

You can find the instructions to run each component separatly or you can run the entire architecture.

### Entire Project


### Frontend

To run the frontend directly change to the front end directory in your terminal and run the following:

```docker build -t <my-image-name>  . ```

changing `<my-image-name>` to whatever you want to call the image. Then run the build image as a container
mapping the ports to available ports on your machine.

```docker run -d --name adllm-cont -p 5173:5173  adllm```

You can also run using docker compose within this directory for development purposes:

```docker-compose up --build```



## Architecture Decisions


Below is a simple digram of the app currently in development. The front end will have tabs to various
chatbots which you can interact with as well as a tab to add new Markdown files to include in the
shared vectorized RAG knowledge base. Additionally I hope to include an analysis tab to compare and
contrast the models metrics for speed and accuracy on said increased knowledge bases.

Initially I wrote code to connect to ChatGPTs API and also intend to connect to a dockerized deployment
of llama Metas open source LLM, so that users wont have to pay to have an api key for other various LLMs.

```
+-----------+       +----------+
| Frontend  |<----->| Backend  |
+-----------+       +----------+
                    /     |       \
                  /       |        \
                 v        v         v
        +-----------+ +-----------+ +-----------+
        |   GPT     | |  Gemini   | |  Llamma   |
        +-----------+ +-----------+ +-----------+
```


Containerization using Docker was chosen because it allows for portability and consistency across
different potential deployment environments should this project/code be expanded upon. Also having
components of the code containerized will make the transition to using container services such as
Kubernetes or cloud services like EKS on AWS or Azure Kubernetes Service for automating deployment and scaling.


### Frontend

Although a frontend app wasn't direclty asked for the project of developing an LLM to speak in
different tones of voice, having a frontend will allow users to interact with the LLM more easily as
well as show other skillsets I (Nicholas Corbett) have.

### Backend

Despoite the frontend being programmed in Typescript using Pythons FastAPI (and potentially FastMCP) was an
obvious choice for the backend because Python is the primary language for AI/ML and FastAPI can be used
to quickly develope APIs to connect to trained models.

### RAG

The LLMs used have no inherent 'knowlodge' of a new user or most peoples tone of voice (ChatGPT might be aware of
some famouse people tone of voice) when we write so designing a RAG to improve the LLMs knowledge  base was an
obvious choice.


## ENV for using ChatGPT or other APIS:

Create a .env file with the following API Keys:

```
CHATGPT_API_KEY='Your-CHATGPT-API-Key'
GEMINI_API_KEY='Your-Gemini-API-Key'
```

## Future Considerations


1. Only use information/posts from people before 2022 to capture the persons true essence rather than if they started using LLMs to make content.

2. Create a tab where users can 'facetime' by passing in an image of the person with the LLM trained in their tone of voice.

3.  Models/micro agents for different tasks can also be trained and containerized for deployment.


### Tasks


1. Train models options including different llms: llama2 (Meta free), chatgpt, grok, deepseek, claude (antrhopic), gemini(google), flowise,npx  etc

2. Dashboard for training/testing, dashboard for evaluation, dashboard for trained models and using them. Analyze for time, accuracy, etc

3. Add ability for mutlimodal models: images, text, videos etc

4. Transister chip developement code ( ASK ME ABOUT THIS PROJECT IM WORKING ON)
