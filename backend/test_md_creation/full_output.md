# Paul Godling Posts
# Feed post number 1
Context Degradation is [Still] a Problem
Perhaps we’ve been fooled into thinking that longer-context tools, like Gemini, are capable of better responses. But longer context is still problematic. It turns out that many of the things we thought were fixed, aren’t….
New research from Chroma (the vector DB folks) shows that even state-of-the-art models with million-token context windows suffer performance degradation as input length increases—even for simple tasks!!!
Key findings across 18 models:
- Performance drops are non-linear - Accuracy degrades unpredictably as context grows
- Semantic similarity matters - When questions don’t closely match relevant content, performance degrades faster
- Structure paradox - Models performed better on randomly shuffled text than logically ordered content
- Failure modes differ - Claude abstains when uncertain whereas GPT confidently hallucinates!
- Distractors compound problems - Related-but-wrong information degrades performance non-uniformly. Consider the sensitivity of this in the case of, say, processing logs for anomalies.
In other words, simply throwing more context at a problem isn’t the solution. Strategic context engineering—selecting what to include and how to structure it—remains critical. Prompt/context engineering (and input pre-processing) is far from dead.
Consider “AI Scientists” (e.g. like v2 AI Scientist by Sakana) that generate science papers by first analyzing research: If context degradation affects how models process experimental records, we risk silent biases or missed connections. Academic writing structure itself might hinder performance — this clearly needs systematic evaluation.
Bigger context windows are a tool, but not a solution. Success requires thoughtful context design, not context dumps.

# Feed post number 6
Work in the hottest field of AI: robotics foundation models…
Help shape the robotics frontier via our ADI Edge AI team based in Limerick, but accepting applications remotely.
We’re working on novel advancements in robotics foundation models, generalist policies, RL, spatial AI, perception, SLAM, advanced physics modeling, including tactile sensing, and a range of related robotics R&D fields.
Our sensors and signal chains are second to none and we’re actively building a comprehensive digital and AI stack to deliver full robotics solutions to some of the worlds most demanding customers.

# Feed post number 7
🚀 Why I’m passionate about Edge AI at Analog Devices
One of the reasons I returned to Edge AI is the diverse technical challenges, particularly here at
Analog Devices
.
Resource constraints fuel our team’s creativity and drive innovative collaboration between some of the most talented AI engineers in the industry. It’s truly a privilege to work alongside such talent!
Traditional approaches from LRM-world simply don’t translate to resource-constrained edge devices. Our global algorithms optimization team successfully leveraged knowledge distillation to harness large model capabilities, obtaining breakthrough few-shot learning for novel keyword detection. Our model surpasses state-of-the-art performance on key benchmarks.
🎯 We’re growing our team! If you’re passionate about pushing the boundaries of what’s possible in Edge AI and want to solve real-world problems with cutting-edge technology, we want to hear from you.
👉 Visit the ADI job board to explore opportunities and join our mission! —
https://lnkd.in/g75AbkDr
hashtag
#
EdgeAI
hashtag
#
AnalogDevices
hashtag
#
MachineLearning
hashtag
#
AIEngineering
hashtag
#
KnowledgeDistillation
hashtag
#
TechCareers
hashtag
#
Innovation
hashtag
#
Hiring
hashtag
#
ADI
hashtag
#
ArtificialIntelligence
hashtag
#
EmbeddedSystems
hashtag
#
TeamGrowth
hashtag
#
TechJobs

# Feed post number 10
Implicit Layers
At ADI in our Edge AI group, we are always looking for interesting architectures that are optimal for power and size constraints. One such possibility is implicit layers.
There is a nice tutorial on implicit layers here --
https://lnkd.in/gAWa6VnB
In many cases, the "rolling up" of traditional network layers into a recursive weight-tied system results in dramatically reduced network size (parameters) with results that are often within useful range of SOTA.
The system back-propagates through the equilibrium points of multiple feature resolutions simultaneously, using implicit differentiation to avoid storing intermediate states (requiring only O(1) memory consumption)
One application is Deep Equilibrium Nets (DEQ). I found a use case for sound separation with 30% reduction in parameters. The authors swap out the sequence model of Open-Unmix (UMX) and replace with a DEQ --
https://lnkd.in/gy6QxUnA
Of course, such findings -- and approaches -- are of interest for physical-edge AI applications.
The never-ending pool of architectural possibilities for AI systems is so vast that it's hard to figure out where to pay attention. In our group, we plan to tackle this using .... no surprises .... AI. Hope to post something soon.

# Feed post number 11
Robotics... come build the future with ADI...🚀🚀🚀
We have a number of openings in our robotics teams in Limerick.

# Feed post number 12
SLAM Handbook
Excellent and comprehensive source of SLAM info including discussions of hardware architectures and trends (eg using graph processors if/when SLAM modeled as factor graph)
Comes from Andrew Davison’s robotics lab at Imperial —
https://lnkd.in/gswgYn-5
https://lnkd.in/gE3tuAfg

# Feed post number 14
Diffusion as Projection
Just finished a paper I hadn’t seen before — “Interpreting and Improving Diffusion Models from an Optimization Perspective” (arXiv 2306.04848). Caught it after watching Russ Tedrake’s talk on dexterous manipulation with diffusion policies.
The authors show that a denoiser is *approximately* a projector: it learns the vector that pulls a noisy point straight back to the data manifold (i.e., the low-dimensional surface where real data lives—from images to robot action policies).
Viewing DDIM as plain gradient descent on squared Euclidean distance makes the reverse-diffusion story more intuitive than the usual score-matching view.

# Feed post number 15
Yes 👇
Detailed initial instruction pays!
“I keep telling devs to spend time preparing those initial instructions. Prompt engineering is important.”
And (sometimes or)—ask the LLM to reply initially with clarifying questions. Often works well.
And Wall St Journal declared: “Prompt engineering is dead”. And so did a prominent VC that prides itself on “AI insights”.

# Feed post number 16
As ever, good telco notes from
Dean Bubley
Re: AI not yet driving network access traffic. Would love to see breakdown of traffic patterns over time due to GenAI.

# Feed post number 18
Deep Algorithm Unrolling
Good overview of algorithm unrolling:
https://lnkd.in/ghjWA4Ji
At ADI, we’ve been doing "Physics AI" for quite a while. As we often work on the frontier of where physical signals meet intelligence, techniques like algorithm unrolling are useful.
Such methods offer more than just model efficiency — they provide a structured way to inject domain knowledge and physical priors directly into the learning process. This balance between interpretability and performance is particularly valuable at the physical edge, where we work under tight constraints (power, latency, bandwidth) and still want trustworthy outcomes.
We often explore physics-informed and model-based deep learning, and other hybrid methods where conventional DSP and learning-based techniques reinforce each other.
Why? The real world isn’t just noisy — it’s governed by structure, by physics. When you operate close to sensors and actuators, exploiting structure can lead to more sample-efficient, robust, and deployable AI.
One insight from this article that resonates: unrolled architectures don’t just perform well — they help with reasoning about failure modes, enable better diagnostics, and accelerate debugging, which are critical in industrial embedded systems.
We're entering an era where AI models don’t just need to learn — they need to know -- i.e. something concrete about the world. And that’s where unrolling gives us a powerful lever -- to tell the AI something about underlying physics.
hashtag
#
EdgeAI
hashtag
#
PhysicalIntelligence
hashtag
#
SignalProcessing
hashtag
#
ModelBasedLearning
hashtag
#
AlgorithmUnrolling
hashtag
#
InterpretableAI
hashtag
#
ADI
hashtag
#
EmbeddedAI

# Feed post number 21
Next frontier: App store for hardware IPs?
With EDA, logic/circuit designers became chip designers.
What if the next wave lets software engineers design chips?
(Massive opportunity for AI here.)
Of course, for AI acceleration, Mojo is headed in that direction via various silicon-lowering backends.
And we know that the “software mindset” is pushing new approaches to systems and hardware design—see practically everything from
Antmicro
Interesting work in the Agile Hardware group out of Stanford —
https://aha.stanford.edu/
Here’s a motivating vision from Prof. Mark Horowitz:
https://lnkd.in/gUAaAKGn

# Feed post number 22
Intelligence? Intelligent Edge?
Yi Ma's paper remains one of the most thought-provoking explorations of intelligence in recent literature.
His principle of parsimony suggests that intelligence—natural or artificial—emerges from distilling complex, noisy data into the simplest possible representations.
Rooted in classical ideas like Occam's Razor, Ma redefines this concept as a measurable and computable framework for learning.
This is the point—measurable and computable!
When I led the AI lab at art-dot-com, we faced a similar challenge: transforming the abstract notion of "I know it when I see it" (regarding art decor) into something computable. Tackling such questions often leads to productive and surprising outcomes.
Now, consider the additional dimension: does "Edge Intelligence" possess its own measurable and computable framework? What exactly constitutes the "Edge"?
If you're interested in exploring this further or have insights to share, I'd love to hear from you.
https://lnkd.in/gbMkzrvS

# Feed post number 23
Vibe Coding isn’t “Coding”
People are citing Dijkstra’s “foolishness of natural language programming” when criticizing GenAI coding tools. But that totally misses the point. (Category mistake.)
Dijkstra was warning against using English as the code itself—ambiguous, unsound, etc.
GenAI isn’t doing that. It’s translating intent into actual code. It’s not saying natural language is programming—it’s just making the intent-to-code loop faster.
GenAI isn’t replacing formal languages—it’s just helping you write them quicker.
Let’s stop pretending this is some deep philosophical violation that offends software gods. It’s just better autocomplete.
And it works.

# Feed post number 25
Vibe Prompting
Shopify’s recent memo is a signal flare for the rest of the tech industry. While many companies talk about using AI, Shopify is institutionalizing it.
I’ve seen this at a number of tech companies—an all-in approach to adopting AI.
If you haven’t reached the point of reflexively asking if AI can do a task, you haven’t understood what AI can do.
And who cares if it’s “just a token generator”? A computer’s just a bit shifter.
Some folks are still trying to do the heavy lifting with their prompts. Don’t!
Use the AI as much as possible—ie to help you formulate the question: “Don’t answer yet; tell me what I’m missing…” — or just dump raw data and see where you end up in the vast labyrinth of the model’s latent space.
Don’t forget, the model has “read” way more than you’ll read in a lifetime—an unfathomably large amount, so don’t try to fathom it. Just prompt! Go with the vibe.

# Feed post number 27
DeepSeek-R1 demonstrated complex reasoning abilities in LLMs via reinforcement learning without supervised fine-tuning, leading to behaviors such as self-verification and self-correction.  OpenVLThinker extends these concepts to VLMs, integrating similar iterative self-improvement strategies to enhance visual reasoning.

# Feed post number 28
Self organized compute. Includes regenerative models. Anything from M Levin’s YT channel is worth watching and contemplating. There’s a deep set of ideas in his work.

# Feed post number 29
Proposes unified definitions for human and artificial intelligence.
•
Distinguishes between artificial achievement/expertise and artificial intelligence.
•
Advocates for AI metrics to ensure good quality AI system evaluations.

# Feed post number 31
Using reasoning models to optimize GPU kernels—better than human engineers for many use cases.
How many other AI optimization tasks could be accelerated in a similar fashion?

# Feed post number 32
Long-Horizon Spatio-Temporal Memory for Robot Navigation
Very hard problem to solve. Fascinating how FMs continue to open up new frontiers in all fields, especially robotics.
And yes, yet another application for our old friend: RAG.
https://lnkd.in/gCJ9Bnnq

# Feed post number 33
https://lnkd.in/gbe6N6Js

# Feed post number 36
Fascinating report from
UP.Partners

# Feed post number 37
https://lnkd.in/gnMJK4wd
Perhaps two of the greatest thinkers of our time, thinking anew about intelligence.
Levin: “Working on a scenario where the solution reaches out to the problem as much as the problem reaches out to the solution”.
Reminiscent of Whitehead’s idea of lures?

# Feed post number 38
This fascinating paper explores how differentiable logic gates can be used to train cellular automata via gradient descent. Simple local update rules, optimized through differentiation, give rise to emergent complexity, much like how Friston’s Free Energy Principle suggests biological systems minimize surprise to maintain coherence. Both AI and nature seem to operate on the same imperative: iteratively refine internal models to align with external constraints.

# Feed post number 39
"agentic capabilities might be more of an alignment problem rather than a foundational capability issue."

# Feed post number 45
Clever discovery—using truncated token string for fine-tuning. A kind of approximation technique.

# Feed post number 49
This is a pathway to deeper GenAI interventions via prolonged research tasks.

# Feed post number 54
Interesting framework for developing Spiking NNs for FPGAs.

# Feed post number 55
Interesting benchmark paper for Embodied Agents (for Visual Tasks)
1,128 testing tasks across four environments

# Feed post number 56
Blink, and a new idea emerges, soon to become trend no doubt.
As I posted yesterday, moving reasoning to latent space heralds interesting opportunities, including for edge compute.

# Feed post number 59
Would be good to see trends of ARR growth against start-up size and investment. Such metrics should reveal something about the “upper bounds” on GenAI having a productivity impact.
Ideally, we want to see such metrics against non-AI startups—how is GenAI (like code gen, Deep Research, Operator, LLM-search etc) accelerating startups whose core product is not AI.

# Feed post number 60
Thinking "Quietly vs. Aloud" = Lower edge computer power?
A useful and fairly recent review of TinyML (see attached), which can have a variety of meanings, but oftens means close to the sensory edge of some system where ultra-low power is a major constraint.
As an aside, it was interesting to note the recent success (and likely trend) in performing reasoning in the latent space of a network (vs. in the output sample space [generated tokens], or "test-time" techniques) -- I will dig out the reference later, but something like LaTent Reasoning Optimization (LaTRO) framework.
I wonder what kinds of optimization techniques this opens up that would allow for a new generation of distilled reasoning models that can be deployed close to the "TinyML" edge.
Put simply (naively) -- Operating in the latent space could minimize the need for extensive token generation and processing, leading to faster inference times and lower energy consumption—critical factors for ULP devices. Latent space optimization techniques could also facilitate more effective model compression.
https://lnkd.in/giYy2j9b

# Feed post number 61
It was a distinct pleasure, privilege and honor to co-author this significant review paper with the talented
Mohsin Bilal
and his colleagues.
We hear a lot about LLMs, but the progress in foundation models for pathology is truly inspirational. Mohsin is a pioneer in this field.
After my mother passed from cancer, I went in search of opportunities to advance the field of oncology medicine. Via a mutual friend, I met Mohsin, a highly accomplished and humble expert in AI-first pathology.
We attempted to build upon an opportunity to innovate using mobile devices for histological analysis as a means to expand pathology access in regions with very low pathologist-to-population density.
We stayed in touch and eventually found another way to contribute to human betterment via this highly collaborative paper.
For my minor contribution to this work, I dedicate it to my mother and all the brave souls in the world battling or surviving cancer, especially in areas with limited access to treatment. Whilst AI and technology offer powerful levers in the pursuit of human flourishing and medicine, I consider my own contribution as negligible compared to that of the legions of care-givers who sacrifice so much in caring for the sick and elderly.

# Feed post number 62
Deep Research:
I’ve been using Deep Research (ChatGPT Pro) and Perplexity DS R1.
The results are highly dependent upon the quality of the research brief, obviously.
A useful pattern is uploading a research paper to provide the sampling bias, which in simple terms is the “cognitive framing” of the research. This tends to give better results, but my definition of better is hard to pin down. I also used O1 or Sonnet to produce a more detailed brief, but wasn’t sure how to structure the brief to get what I wanted.
This led me to realize, like so many things in life, attempting to codify a deeply formed autonomous habit, like following an extended line of thought, is hard. I actually found it tricky to figure out why some of the DR results weren’t what I was “looking for”.
This reminded me of a time that I led a team of engineers to explore art. A common problem was that typical art (decor) buyers couldn’t describe what they are looking for, but they could say, with little effort: “I know it when I see it”.
Our team actually spent years exploring the nature of “i know it when i see it” in an attempt to invent tech that could be used to help users find art from one the world’s largest online art collections.
There was no easy solution, only a complex hierarchy of techniques. But there were some key insights. One of them was that most people can relatively easily identify simpler things like the mood they wanted: calm, energetic, reflective, etc. This provided starting points with color schemes and aesthetics that could quicken the path to “I know it when I see it”.
We built AI “styleness” algorithms that assisted the cataloging.
It feels like something similar is required in order to create a set of “research styles” to guide the CoT recipes. The usual “dials” of intervention could be invoked—from fully automatic CoT (“curated”) to fully interactive, which would involve some tooling to modify and influence the CoT as it unfolds. Editing the CoT log is already an obvious next step—to fix the steps that don’t seem useful.
CoT-log editing (or interaction) would certainly be an interesting research and product design program.
My brief experience of DR is that, like other GenAI tools, it is a “force multiplier”. I had already stopped using Google (except Scholar)—searching via ChatGPT saves me a ton of time. This DR evolution of GenAI is saving me even more time, especially in finding and reading papers. I can’t quite say how much time, but it feels like what might have taken me a day is now compressed to a few hours. This is a rough sense, so take it with a pinch of salt.

# Feed post number 64
We’ve seen this many times now. A simple intervention in the CoT prompting can have significant impact on the results. The field of GenAI is still wide open for innovation.
By leveraging test-time scaling, even smaller models can achieve performance levels comparable to larger models without extensive retraining. This has all kinds of prospects.
With my own experiments with ChatGPT Pro Deep Research, it seems the case that some kind of personalization of the test-time process is likely to yield more productive reasoning tuned to my research style and goals. What that personalization process will look like is an interesting thing to ponder, but some kind of “meta-thinking” pattern.

# Feed post number 65
Future of personal companion robots?
Apple doing what they do well. Human interaction research. Design thinking.
"ELEGNT, a framework of expressive and functional movement design for non-anthropomorphic robot. We argue that robots should not only move to fulfill functional purposes and constraints but also move “elegantly” - using their movements to express intentions, attention, and emotions to their human counterparts during human-robot interactions (HRI)"

# Feed post number 67
Bend — A Parallel Language
https://higherorderco.com/

# Feed post number 68
Paper Title: "Multiscale echo self-attention memory network for multivariate time series (TS) classification"
Whilst consulting for ThousandEyes (Cisco), our team explored TS techniques for anomaly detection, especially under statistically-contaminated constraints (with multiple modes, common with network measurement stratification). A basis for featurization was the t-digest (robust quantile estimation, as used in elasticsearch, for example).
Now that I have turned my attention to edge ("far edge", or "sensor edge" -- ultra-low power), the constraints are more severe. Here my interest turned to "reservoir computing" (in the form of Echo-State Networks [ESN]).
This paper addresses a critical challenge in edge computing - how to efficiently process time-series sensor data with limited computational resources while maintaining high accuracy. The authors' combine ESNs with self-attention mechanisms, offering an architecture valuable for resource-constrained edge devices that need to classify complex sensor inputs.
ESNs' fixed-weight training enables minimal parameter updates - crucial for edge deployment.  Multi-head attention mechanism shows potential for edge optimization through pruning/quantization.
Strong performance on multimodal fusion (96.79% on UTD-MHAD combining depth and inertial data) suggests viability for edge NPU deployment.
Sensor Fusion Perspective: The architecture naturally handles varying sensor sampling rates and missing data while capturing temporal dependencies across modalities. The key innovation demonstrates that attention mechanisms, typically computationally expensive, can be efficiently combined with ESNs for high-accuracy sensor fusion at the edge. This represents a practical advance for deploying sophisticated sensor fusion algorithms on power-constrained edge devices.

# Feed post number 72
AI students in my network—multimodal foundation models for healthcare are one of the exciting frontiers of AI, especially given the complexity and challenges of giga-pixel images and the critical nature of AI safety in these applications. If you want to build large scale models that make a direct difference to people’s wellbeing, reach out to Muhammad and his team.
My recent interactions with Prof.
Mohsin Bilal
in this field revealed to me how vibrant and challenging this frontier truly is. It’s a privilege if you can find yourself pushing its boundaries.

# Feed post number 74
I do appreciate Mr. Molnar’s useful perspective. Of course, a model is just that—a model. All models are based on assumptions. The extent to which these stem from mindsets is interesting, although the meaning here is more the inductive bias than the intentionality of the use of the models.
That said, the choice of a particular model is often shaped not just by individual preferences or technical constraints but also by the culture of the company or team and the context in which decisions are made. A team with a culture that “values” explainability and cautious decision-making may favor statistical modeling or Bayesian approaches, while a culture oriented around rapid innovation or experimental agility might lean more toward machine learning or deep learning techniques. The team’s shared mindset—rooted in its values, experiences, and goals—creates a framework for how assumptions are negotiated, which trade-offs are deemed acceptable, and ultimately, how models are chosen and interpreted. This interplay between culture, mindset, and model choice reveals how deeply contextual and collaborative the act of modeling truly is.

# Feed post number 76
Can government be "fixed" by entrepreneurs? No.
By AI? Perhaps.
Since the fallout of the original dotcom bust, we have been told by luminaries that the biggest mistake in start-up world is to mistake a start-up for a scaled-down enterprise. Biz plans be damned!
Some commentators made entire careers out of this. Indeed, it was the basis for subsequent bubbles -- the giant startup machine feeding itself via all manner of meme-based ideas that supposedly only applied to start-ups: growth-hacking, embedded fintech etc.
Now, those same luminaries want us to believe that the reverse is true -- i.e. we can take start-up mechanics and apply them not just to scaled-up enterprises, but to entire bureaucracies and institutions.
I recall Sir John Harvey-Jones. He was the chairman of Imperial Chemical Industries (ICI) from 1982 to 1987 who later became famous for hosting the BBC television series "Troubleshooter". During his tenure at ICI, he made significant improvements to the company, doubling the share price and making ICI the first British company to achieve profits of over £1 billion. In other words, he was a true operator of scaled-up businesses. More so, he was a turnaround master.
In the TV show, he seemed to have useful interventions for a variety of companies, like Morgan Motor Company -- The Plus 8 was one of the few cars I ever desired.
However, when he attempted to "fix" the NHS, he admitted to complete failure. Not wishing to put words into his mouth: it was too complex.
In some areas of research, the plight of large orgs is attributed to Complexity. A maxim of Complexity is that it can only be "managed" with something of equal Complexity. Most management techniques are attempts at reductionism, not Complexity management, but Complexity ignorance. (Ironically, when I spoke with NHS innovation folks about using AI, I was told that anything related to Complexity would be rejected. This is despite the NHS formally recognizing its role in their organizational dynamics -- they even have a Wiki about it.)
With
Geoff McGrath
, I am exploring an approach that we call Cognitive Operations (CogOps). It is an earnest attempt to how AI might fundamentally transform biz ops, not merely as an adjunct via old mechanistic assumptions of automation (faster gears). Leaving aside all the criticisms and hype of AI, which Geoff and I will critically examine, our view is that AI is the only hope for managing Complexity. Indeed, there are theoretical justifications for this already if one views language as a Complex system (per the SFI's position) and attributes the success of LLMs via scaling laws as a possible fulfilment of the aforementioned maxim.
Of course, I have not said what CogOps is. You'll have to buy the book that Geoff and I are writing (Wiley). Whilst we plan to include theoretical justifications, much of the book will be a practitioner's guide to AI transformation, with an emphasis on real-time decisions and simulation/causality).

# Feed post number 77
AI Inclusivity: Recreating Moments
Whilst assisting O2 with their innovation labs and programs, what I liked about their marketing analysis was the recognition of a persona called (something like) "Silver-haired Surfers".
We explored an idea to offer a "comms suite", such as online email, or even a managed laptop, whereby a carer (e.g. a sibling) could easily manage the system remotely on behalf of an elder user. Anyone who's been through the "I can't remember my password" routine with a parent will know the drill. At the same time, we were working with the parent (Telefonica) to explore IoT devices related to home care.
Being open, the product idea was not so important as the methodology we planned to use--an early attempt to utilize "Lean" within the enterprise. The eventual use case (a different service altogether) is documented somewhere in a business book as an early example of "Lean Enterprise". (For those interested, this was the era in which I wrote the book Connected Services for Wiley, seeking to document how Telcos could reinvent themselves as "tech/internet companies".)
Meanwhile, I have been trying to encourage my father to write his memoirs, not as a piece of work, but rather as a structured process, possibly involving a carer. I set up a Google doc to attempt some kind of social experience (via co-authoring and prompting etc.)
Even this has proven too difficult for him.
My next thought is to return to an idea that
Ted Barnett
had once proposed--using audio to record memories. Ted and I had discussed the idea in a coffee shop in Oakland prior to the advent of GenAI. Of course, now we have GenAI, so the possibilities seem richer.
I'd be interested to hear from anyone who has attempted some kind of "chat agent" for this use case--helping senior folks to interact with as little friction as possible, including via voice. I also want to incorporate vignettes, such as photos and captions, to act as prompts--"What do you remember about this moment?"
When my mother was alive, I used to chat with my parents via Facetime whilst using Wikipedia/Google to look up aide memoires (about things from their past). For example, my father once rode a Matchless motorbike, so I tried to find the model and some descriptions (e.g. how it might have felt with the jam-pot suspension, or how it might have sounded). I tried to find the church in which they married and recite its history, etc.
It seems obvious that GenAI can somehow weave these ideas together and could provide a meaningful and valuable tool for "Silver-haired Surfers".

# Feed post number 78
This highlights what seems strikingly obvious—GenAI is a “force multiplier”. If true, this has lots of implications for its role in affecting productivity and replacing people. It might also cause pause when rethinking the role of AI in education.

# Feed post number 80
If you care about what thinking is, then it is perfectly reasonable to explore such subjects using whatever tools seem appropriate. In some cases, these tools might be computers and LLMs -- see Noah Goodman's work in which he lumps LLMs in the same category as brains in order to explore "the space of intelligences", not unlike, say, Michael Levin's work in "scale free cognition". In which case, it is very interesting. This line of enquiry has led to some interesting theories about thought processes.
If you care about a function whose inputs are text and outputs are some summary of text to some specification, then, yes, we have no need for consideration of the word "thinking". We can stick with "processing".
Also, it's not as if the world of engineering isn't replete with metaphors, many of them anthropomorphic. Let's not get hung up on the reproductive capabilities of software where a parent process can spawn children without going through labor.

# Feed post number 81
For any of my colleagues in KSA, you should attend this talk for inspiration and technical prowess. Mohsin is a pioneer in the computational pathology field where AI models, including new breeds of foundation models, can potentially deliver a range of new diagnostic modalities.

# Feed post number 83
Chain of Thought? What is it, really?
Well, nothing to do with transformers, as it turns out.
I only just discovered this wonderful body of research via Goodman:
https://lnkd.in/gF6sXPuM
"Even really big language models are not going to be able to learn all the relevant conditional distributions for the world, everything they might need. And equally true of even really smart people." – i.e. this emphasizes the need for reasoning as a way to go beyond memorized knowledge.
Goodman argues that with the advent of large language models (LLMs), we can now study the space of "intelligent things" more comprehensively, comparing LLMs to human cognition. This allows us to explore potential universal principles of intelligence, contingent features specific to humans, and functional demands shaping intelligence.
I am glad someone is taking this approach. I find the LLM-bashing "it's not actually intelligent" is a naively absurd dismissal of LLMs. I had this discussion with one of Chomsky's students, who agreed (despite Chomsky's "LLMs tell us nothing about language" position) that we can potentially learn about language (and cognition) from LLMs -- i.e. by having an open mind and asking the right questions. Such an attitude actually concurs with Chomsky's long-held position: "Discovery is the ability to be puzzled by simple things". To me, even if LLMs are "dumb", how do they do what they do -- what is actually happening and why? I am puzzled, as is Goodman -- and he has a program of work to follow up!
Goodman's talk includes a beautiful study of a "toy example" (Bayesian net) that is sampled to produce a training set for a transformer in order to mimic language pre-training. It turns out that properties of the density distribution reveal how Chain of Thought works. LLMs trained on data with local observation structure (similar to humans' limited view of the world) result in a process whereby longer search paths (i.e. like chain of thought) produce less bias than direct ones. This is independent, as it turns out via a mathematical proof, of the inductive bias of an attention mechanism.
It is a very inspiring lecture.

# Feed post number 84
Jason has walked the walk in tech organizations, from startup to spin-out to behemoths. His advice about leadership and culture is priceless.

# Feed post number 85
Good summary post by
Haziqa Sajid
about MoE.
It’s quite easy to build a demo MoE model (some small NN) and train it to combine, say, two simple regression models to make a mixed output—ie as an exercise.

# Feed post number 86
Stochastic parrots? More like dead parrots...
Do not be fooled by the vocal minority telling you that GenAI is *just* a stochastic parrot. They may have their reasons, but to those of us who look at GenAI via the lens of software engineering applied to enterprise problems, such pundits look more like the shopkeeper in the Monty Python sketch insisting upon the animation of a dead parrot.
When it comes to AI, especially GenAI, we need something better than a metaphor that claims AI models are *just* "stochastic parrots" or *just* "word guessing" machines.
Notice how those who object to the use of terms like "think" are comfortable with their own metaphors and similes, nothing to do with the real world of applied innovation.
A computer is *just* an "adder". Software is *just* "a dumb list of instructions" akin to a "recipe". And yet somehow we run the world on these dumb machines generating trillions in value. Why? Because the dominant underlying method is practical engineering, not punditry and metaphor production.
There has been a rash of pilot studies purporting to show that AI did not improve productivity. They are often meaningless single-cohort studies where the design of the experiment says whatever its designers want it to say, not unlike the swathes of irreproducible papers, many of which come from the fields of study from whence business metaphors come -- an industry in itself.
Like all tech, GenAI has pros and cons. However, these models are so unprecedented that it would be foolhardy not to take them seriously. For those who still don't viscerally appreciate the power, you are in serious disadvantage. No leader should leave it to some "professional manager" (keen to put AI in their job title) to make proclamations. You need to put everything down and get hands on until the light-bulb goes off. If it doesn't, you aren't looking properly or you need to reboot your imagination.
With any new tech, like GenAI, the question is not what's the ROI via some meaningless analysts study or "e-book" (barely a few pages long). You won't find answers in whitepapers. You will only find them via experiments.
If you cannot find a way, then you have failed.
But that is good!
It means you are on the innovation path.
The field of GenAI is software engineering, which is about practical experiments, not fads, themes or metaphors. You design an experiment and then meticulously, critically and dispassionately analyze the results, rinse and repeat. You get hands on whilst ignoring "themes du jour" like "AI Strategy", "Data Strategy" and so on.
If you extrapolate from where we are now, based upon recent rates of progress, you should be genuinely concerned that the much fabled "disruption" that managers still supposedly fear (see IBM's annual CEO survey) will, at last, emerge from the realm of metaphor to come eat your business for real.
[IBM survey --
https://lnkd.in/g6nHFJAV
]

# Feed post number 87
Inductive Biases and the Datasaurus
I was recently trying to explain to someone the problem with inductive biases. If we view, or model, the world in a certain way, we tend to see the world in that way. A favorite illustration of this is Anscombe's Quartet -- four different patterns all modeled using an identical straight line.
It led me to the discovery of this interesting
Autodesk
paper, a company whose blog posts I recently scoured whilst thinking about AI for managing large scale projects (e.g. construction) --
https://lnkd.in/gAWasuBD
They went way further than the quartet to search for a wide range of wildly different constellations of points -- including a dinosaur -- with identical statistical sketches via some model bias.
Enjoy!

# Feed post number 88
My New Multimodal "Reading" Habit = GenAI + Codespaces
My self-edification habit has evolved over the years from books and papers to including YouTube. The initial logic was: "Instead of reading so-and-so's book, let's see if so-and-so gave a talk"... most of the time, they had. For all of its faults, YouTube is a treasure trove of knowledge.
As I posted before, much of my reading also now routinely includes GenAI, including Perplexity (for "search"). I find that you get a much better response for certain dialogs or search if you use a more precise and detailed prompt. This takes discipline because it departs from well-formed search habits of typing a few keywords and picking a suggested string.
I do most of my self-learning at night via an iPad (with a keyboard attachment). A lot of my thinking involves computational problems, or -- and this is the most interesting evolution of "reading" -- can be construed as computational problems. GenAI can articulate using code all manner of problems and explanations.
Without python on the iPad (even though I've tried pythonista), I spin up a codespace online and can play with a notebook --
https://lnkd.in/gbtBz3FF
"Thinking and exploring in code" is, I believe, a skill that requires a certain mindset, what some might call "computational thinking", closely related to, although not the same as "algorithmic thinking". This is not a skill so easily replaced via GenAI -- i.e. as in the argument that junior devs will go the way of the Dodo.
That said, I had already noted that GenAI would sometimes offer a code explanation when I hadn't asked for one, albeit in a domain closely related to coding, such as data science explorations. Hence I think that for the discerning student with a certain attitude, they might well develop certain modes of thinking via repeated use of GenAI -- i.e. let's see what this problem looks like in python.
I am glad that co-pilot has now made its way into codespaces because its greatest use for me, who is not a developer but a frequent coder for data science and research purposes, is to "think aloud in code". The prompt-and-complete process, if you get the right tempo and set up the repo right, can almost feel like one is "in the state of flow" with a certain train of thought.
As a final observation, "algorithmic thinking" is more about knowing the different paradigms or inductive biases that exist in the world of problem solving. For example, once you understand control theory, you can think of problems via feedback loops and lags etc. Once you know about queuing theory, you can think of problems as resource allocation bottlenecks. Once you know about distributions, you can think of problems as sampling, and so on.
But even here, GenAI can help. I have had numerous chat sessions along the lines of: "given these characteristics..., what kind of problem is this?"
Or, one of the killer apps of GenAI, "how do I think about X as if it is Y".

# Feed post number 90
Very cool to see North America's first railway gigabit wireless infra coming from the UK's
Blu Wireless
via my long-time friend and colleague
Alan E Jones
with whom I have joint patents and publications from the "birth of digital wireless" era (GSM) -- and many fondly shared memories from the heady days of R&D in Motorola whilst it was still a powerhouse in cellular innovation.
I am also a train enthusiast, hailing from Swindon (home of Isambard Kingdom Brunel's steam railworks at the mid-point on the Bristol to Paddington line). It will be a great honor to ride the Caltrain whilst surfing the net on Alan's tech.

# Feed post number 92
Fake data = Fake Results:
This paper gives a decent analysis of in-context learning (ICL), more of which is needed as we all grapple with this strange new programming art called "prompt engineering".
https://lnkd.in/gHxhJZad
Off the bat, they contend that many previous claims (e.g. about the regressive nature of ICL) were false due to the use of unrealistic datasets. Exactly! How many papers do we see with some idealized (fake) dataset whilst thinking to ourselves: "Oh yeah -- how well will that work on *my actual data*?"
I have programmed a few examples from ICL papers only to find:
a. I couldn't even replicate their results
b. I couldn't get it to work with my data -- often made things worse
Anyhow, the authors wanted to drill into the nature of ICL and whether or not there is any meta-learning vs. retrieval (of memorized data).
1. The authors found that LLMs can effectively perform regression tasks on realistic datasets, even when feature names are anonymized. This does suggest genuine learning capability from ICL examples.
2. Increasing the number of examples generally shifts the model's behavior towards learning from those examples, away from relying on pre-existing knowledge.
3. Adding more named features to the prompt tends to boost the knowledge retrieval aspect of ICL, potentially allowing for fewer ICL examples to achieve acceptable performance.
4. LLMs can outperform traditional machine learning models (like Ridge regression and Random Forests) in few-shot learning scenarios, demonstrating their data efficiency.
5. Completely randomizing the ground truth values in ICL examples leads to poor performance, contradicting some previous studies that claimed output labels don't matter.
6. Improvement in performance when adding features doesn't always correlate with the actual importance of those features in the dataset, hinting at possible data contamination effects.
These findings provide a more nuanced view of how LLMs balance learning from ICL with leveraging pre-existing knowledge in regression tasks.

# Feed post number 93
“What is the impact of code data used in pre-training on a large variety of downstream tasks beyond code generation?”
This paper sought answers:
https://lnkd.in/gw2e_7_d
"In particular, compared to text-only pre-training, the addition of code results in up to relative increase of 8.2% in natural language (NL) reasoning."
As usual, I go looking for the nuggets:
1.  "...training on a higher quality synthetically generated code dataset results in a 9% and 44% increase in natural language reasoning and code performance"
2. Adding high quality code to the "cooldown" (when the data is given more preference to influencing the weights) improves reasoning
Sadly, there is no discussion of why it is that code makes a difference to reasoning. Of course, as we long-ago accepted with deep learning, the Why is often elusive and unnecessary in many respects.
Of course, we don't have to work that hard to speculate. Coding requires reasoning, as in what we might call "computational thinking". So one ought to expect that computational reasoning maps back to other forms of reasoning in the same way that mathematical reasoning seems to improve "logical thought", so to speak.
Moreover, and this lends weight to the nugget about synthetic code (and, relatedly, code quality), code has to work (esp. synthetic code, by design) and so it is relatively error free -- i.e. a kind of pristine "reasoning" dataset.
One thing the paper mentions is the use of "supplementary" coding data, like repo commit notes and, interesting to me, Jupyter notebooks. These often contain natural language commentary and further examples of related reasoning. It would be interesting to experiment with this within the context of domain-specific fine-tuning.

# Feed post number 95
Founder Mode? Is it real?
It is probably my age, but I am fed up with the endless meme-i-fication of systems.
And, you can't have it both ways. If folks who like memes insist upon the whole system 1/2 thinking paradigm (which itself is a meme - Kahneman even says so in his book), then you need to ask: "Do I believe in this idea merely because it seems plausible?" (In any case, TFAS and much of that field of research all fell through the giant chasm of the reproducibility crisis. Some of its architects even turned out to be frauds after fleecing corps of large consulting fees.)
What is a mode? Can people have modes?
Plus, how is this different from Steve Blank's original contention that start-ups aren't small versions of large corps that need "managers"? Moreover, during a bubble, he said something along the lines of: there are no rules, you have to invent them. Following "the rules" (manager mode?) will not work. Of course, the problem with Blank's thesis, and many like it (any of the ideas of Malcolm Gladwell) is that they offer no prescriptive techniques. They give the illusion of being right merely because they buck the trend.
And how is any of this different from the inductive biases problem that Christensen documented (although he didn't call it that) -- i.e. if you "follow the rules" versus "do the right thing", then you can kill your company? (And, again, "disruptive innovation" turned out to be statistically irrelevant and a post-hoc narrative that, by definition, could not be applied prescriptively.)
The only thing that resonated with me in "founder mode" was the idea that professional fakers can end up running, and ruining, companies. I worked somewhere where they hired in some "credentialed" person who used all the right memes (like "growth hacking") and literally ran the company into the ground, seemingly blind to their own incompetence (aided by a cadre -- "bubble" -- of like-minded meme worshippers who use that meme-speak that meme-lovers use.)
This seems to apply everywhere, like our entire political class of professional fakers. Supposedly, French demographer Emmanuel Todd gives an anthropological account of this but I believe the best account of the current moment is still McGilchrist's highly researched body of work on left-brain-ism. And here it is NOT a metaphor. He has done real research (with thousands of citations and his own studies) into the claim that we are accelerating a certain kind of cognitive development of our brains and decision support systems -- and culture -- that is highly literal. For my money, it makes sense -- folks who slavishly following some meme because it trended overnight and was mentioned in Hacker News or somewhere, even if it doesn't actually work. Actually, especially if it doesn't work because that's what motivates left-brained thinking to double-down on its original intention, a bit like cult membership or giant cos-play.

# Feed post number 96
Sadly, us AI folks are still weighing in on "what is art" with little qualification to do so, myself included, but why not...
In my defense, I spent years running an AI lab to analyze art images, the chief use case of which was decorating. As someone in the comments points out, there are important differences between decor and art. Somewhere I have a 100-slide deck (shorter version online) based upon multidisciplinary research as to why people decorate, which itself is hard to locate.
Of course, we already have technological mimicry. It's called reproduction printing. I don't suppose many would consider a printer to be an "artist", but I would contend that it is easier to draw parallels between some printer-based contraption we could imagine and GenAI than it is to draw parallels between transformer models and the phenomenon of art.
GenAI is a picture-making device at best. Even then, it is not that novel if one reads the recent research. It turns out that much of "GenAI" is really nearest-neighbor search with a bit of smash-up over a staggeringly large database of human creativity.
A good place to start with art is Alva Nöe's book "Strange Tools: Art and Human Nature".
https://lnkd.in/gTzRaqQg
The clue is in the title. He offers a more robust substantiation as to the uniquely human aspects of art than the sci-fi guy does. The human psyche and all that it suggests, such as experience, are considered integral to art. None of these exist inside a printer, or a simulation of a printer or a simulation of an artist. Although, this is not what diffusion is -- it is little more sophisticated than paint by numbers, but not much. Scale matters.
We should not confuse novelty with creativity. The novel use of combinatorial media, like language or pixels, has no relation to creativity.
We know exactly what makes up a Monet -- we have detailed "sub-pixel" scans. But they tell us nothing about Monet or how to understand his art by any reasonable philosophy, if, again, we are talking about art and not picture making.
So, despite knowing exactly the ingredients, we are bereft of any explanations as to the holistic enterprise. Some say this is due to emergence or some causal field that models cannot capture, but not stochastic sampling.
Interestingly, the pixel motif is used by Denis Noble as an idiom for exploring why, as he claims, genetics tells us little about disease. He likens it to staring at zoomed-in pixels of a few letters of Shakespeare and thinking we might understand Shakespeare. I think the same holds here, more literally of course.
There are some claims that LLMs are capturing complexity, due to their scale, but I have seen little research to confirm this view. Most of the attempts to locate emergence have failed.
I agree that the debate is perhaps futile (and an old one) and how we might use technology to enhance creativity is interesting. But then, what is creativity?

# Feed post number 97
I always thought the Snowflake bubble would burst, or melt?
I watched tons of data teams switch to it because it “fixed data” via all kinds of tenuous arguments. It typically won because some team could use it to leapfrog an in-house hadoop cluster sitting behind layers of red tape and outsourced ineptitude.
Using a potential ill-fitting analogy, the initial virtual warehouse concept felt a bit like putting a bigger engine in a car.
It doesn’t mean you can actually go faster if your driving still sucks or the rest of the car also needs an upgrade, or the roads are full of pot holes—ie “data” is really a stack and ecosystem problem.

# Feed post number 98
Descriptive != Explanatory
I’ve often seen folks get excited about “interpretation” of models, when what they mean is some description of feature weighting.
This paper gives excellent discussion of such topics, and more.

# Feed post number 100
Magic or Massive Datasets?
Some of the insights into “unreasonable effectiveness of data” here are fresh perspectives.
He ends with discussion of anticipated shift to a more bottom-up use of data from sources where it’s still available in abundance vs. text corpuses that have reached their limits.

# Feed post number 101
Socratic Self? Killer LLM Use Case?
My work involves constant learning of new ideas and synthesis.
I only recently thought to attempt socratic dialogue with an LLM after inspiration to do so by
Zak Golding
.
To my surprise, it is often an effective technique because the dialog will get to a point where I realize I haven't quite understood the topic.
It is better than asking for a list of Qs about a topic because it's a dialog -- i.e. it can "course correct".
What I found interesting was how often such dialogs would end up asking one of those "let's see if you really understand" kind of questions. Or, rather, the dialog would often shine a new light on the subject that provided the "ah-ha" learning opportunity.
I am going to try inserting this technique into my research workflow more often and observe any improvements to my learning process and productivity.
Of course, such a technique could also be exploited for LLM-reasoning tasks.
https://lnkd.in/gSNEfNpC

# Feed post number 105
Co-pilots are like Multivitamin Pills for Olympians
To get the "superhuman" benefits of using LLMs in the enterprise, you have to go beyond the "low-hanging fruit" of giving access to co-pilots, or deploying RAGs and expecting miracles.

# Feed post number 106
Math Reasoning >> Doing Math Puzzles
Fairly decent intro to SFT for math reasoning.
Note: this is not just an incidental capability and benchmark—it can be shown to enhance model reasoning in non-math problems.
https://lnkd.in/gHKQGmCz

# Feed post number 107
Pedagogical Friction: Painting by Numbers and Tasking by Tokens...
(Friday musing.)
There is a useful tension between learning and knowing. To know something, we often have to learn about it via some kind of friction and stick-slip motion.
Leaving aside the levels and ways of knowing to avoid philosophical meandering, to which I am prone, if I only ever did math by looking up the answers in the back of the book, then I would know very little. I would know the answers, but not the why -- the method.
Moreover, I would also miss crucial opportunities for noticing things, like maybe it's possible to notice the existence of primes before being told what they are.
I might miss that there are often many ways of getting to the same result, leading to a deeper kind of pattern awareness -- maybe the kind where creativity lures us towards an insight.
There is a sense in which GenAI short-circuits method by avoiding the friction of having to, say, read stuff and struggle over the meaning of a difficult step. The ah-ha moment is short-circuited and our thinking muscle atrophies.
As Michael Levin has pointed out in his breakthrough work in collective intelligence, the primary driver of intelligent action is stress. Now, I am pushing it too far to say that GenAI removes the stress (of learning) altogether. Holistically, there is still some stressor that causes the use of GenAI, but that stressor is at a system level, not the personal one -- i.e. maybe some task (and some employer, say) benefits, but not the individual—there’s no "personal growth".
For some products, adding a co-pilot presents these pedagogical risks. Users won't learn how to get maximum value from the product because they will never get past the level of supercharged "templatized" use. Moreover, if the templatization is coming from ubiquitous pre-trained models, then at what point do products all merge into a gray soup of sameness.
Of course, there is the flip side. With certain usage patterns, GenAI can accelerate learning. But it seems to be a force multiplier. If you are already well equipped with a critical mind and some kind of base pedagogical "self-awareness" and well-honed skills, then GenAI can get to insights quicker, versus only getting to answers via shortcuts.
I know that my own use amplifies certain kinds of research/workflows -- indeed, it can help moving up and down the ladder of abstraction with ease. And, the ability to fuse information that might not ordinarily exist in the same place is an LLM super-power.
But I remain convinced of my pet theory that the absence of pedagogical friction could be harmful, even deadly, to an enterprise. Remember the fad of "the learning organization"? There is still an argument that learning is all there is: an organization learns, or it dies.
You will never learn art painting by numbers. You will only learn picture making. The same might be true of tasking by tokens. You’ll only learning task doing, learning little.

# Feed post number 108
Innovation is Irreducible
There are aspects of organized life, such as building companies that innovate, that are irreducible. They cannot be decomposed to a series of atoms that contain sufficient meaning to explain the whole.
An artist could reduce a painting to a series of steps - "dip the paint in the red oil", "flick the brush softly across the fronds of the green branches to obtain the sensation of sunlight", but they would not, when followed, constitute the work of art in front of us.
This is related to the previous post I shared from Denis Noble and genes, or DNA. As he puts it, looking for (holistic) answers in genes is like looking for meaning in a passage of text by looking at the pixels of its letters displayed on a screen -- all you will get is pixels.
An organization cannot be reduced to corresponding steps either. Largely, this is for the same reason: Complexity and Emergence etc. Well, there is also the problem of measurement, but that's another topic.
At least by my meagre research, there aren't any good theories for how an organization actually works. There are theories about metaphors, like "disruption", and so on. There are some useful attempts to explain them via Complexity, but I am not convinced that these theories have explanatory powers, only descriptive ones.
Business metaphors (like "Re-engineering" or "Lean") are contagious and enticing, so much so that otherwise intelligent business leaders believe in them and follow them, often with almost no data whatsoever, only stories, called "case studies". To an extent, this would be like reading the ideas of Picasso and calling them a "case study" by which we can mimic Picasso, or even become him.
Of course, such metaphors have their place, such as providing inspirational tools or frameworks for thinking, but not for explaining.
And this is the reality into which many of these same leaders seem to believe that LLMs can soon take over as "sense-making" tools. Clearly, we are a long way from that.

# Feed post number 109
Smelly ML Code
This study identifies 22 code smells specific to machine learning applications, spanning data cleaning to model evaluation. Key takeaways with my own observations added:
1. ML code quality matters: Poor practices lead to silent errors and maintenance nightmares. This can impact biz agility and revenue optimization.
2. Mind the gap: Many data scientists lack software engineering know-how. This is made worse by idiomatic APIs that make it easy to write unreadable code.
3. Library design matters: Some smells stem from counterintuitive APIs. In my experience, many libs are inconsistent, which makes it harder to write modular code.
4. Context is king: Best practices may differ between development and production. Relatedly, the Facebook ML field guide is still a great intro to this.
5. Automation opportunity: ML-specific linting tools could be useful—or code generators. I’m thinking something like Aider, which my son raves about, if it were made cognizant of datasets and MLOps: could be a “game changer” —yes, I actually said that 😂

# Feed post number 112
Evals are Everything
“If you are building with LLMs, creating high quality evals is one of the most impactful things you can do. Without evals, it can be very difficult and time intensive to understand how different model versions might affect your use case” -- OpenAI Evals.
In my experience, it is still common to see folks get carried away with perceived success of their use case via eyeballing of data, especially those who are not so used to the mindset of rigorous testing (with edge cases).
Here are some promising open-source LLM evaluation frameworks in 2024:
1. DeepEval: Offers 14+ evaluation metrics for both RAG and fine-tuning use cases. Features include self-explaining metrics, modular components, Pytest integration, synthetic dataset generation, and real-time production evaluations[1][2].
2. MLFlow: It gets mentioned as one of the top ML evaluation frameworks in general, but my own experience was that its LLM features feel like a bit of an afterthought [2]. Using LLM-as-judge via this framework felt like a bit of a kludge.
3. OpenAI Evals: An open-source framework and registry of benchmarks for evaluating LLMs and LLM systems[2] -- but note that it is specifically tied to OpenAI models/APIs (for evals).
4. Evidently: A Python library supporting evaluations for LLM-based applications, including RAGs and chatbots. It allows users to compare model versions, design custom metrics, run automated checks, and monitor LLM applications in production[2]. It has good docs and a fairly active Discord.
5. Arize AI Phoenix: Evaluates LLM applications through observability into LLM traces, focusing on QA correctness, hallucination, and toxicity[2]. It has the usual suspects for evals, including LLM-as-judge. They have very good blogs with lots of practical examples.
These frameworks provide various tools and methodologies for assessing LLM performance, with DeepEval appearing to offer the most comprehensive suite of metrics, but Evidently has a very appealing approach with some good how-to guides --
https://lnkd.in/gjPBtk3Y
If there are others you have as favorites, please mention them in the comments.
Links:
[1]
https://lnkd.in/gCtvKfKE
[2]
https://lnkd.in/gksdvzh5
[3]
https://lnkd.in/gFBpGxuu
[4]
https://lnkd.in/g9dneDXt
[5]
https://lnkd.in/g5NpAG9b

# Feed post number 113
Interesting…

# Feed post number 114
Patterns in Primes?

# Feed post number 116
Want to Learn Compilers?
What a fantastic video and resource.
This young man has done a great service inventing a language, intermediate representation and assembler code that is expressive enough to build real apps, yet contained enough to provide an excellent pedagogical framework for learning one of the most important ideas ever conceived.
Even if you don’t want to learn compilers, the video is worth watching if you’re intrigued by how everything we do in life (using software) actually works.
https://lnkd.in/gcFGWVpa
https://lnkd.in/gSiWKJJH

# Feed post number 117
Theory of "LLM Mind"
Whilst there has been some work to ask if an AI has a "theory of mind" -- i.e. can it reason about the thoughts of another (although the Google paper I read seemed like a sleight-of-hand in finding a definition to suit a plausible LLM benchmark)... I notice an emergent mode of thought: "Theory of LLM Mind"
Others I have spoken with have noticed it too.
It is the editing of one's prompts along with a developing a sensitivity towards knowing where to expect hallucinations.
As I said in a previous post, if you tap keywords (google-style) into Perplexity, you can expect a kind of "average effort" response, as seen via an LLM's "probabilistic lens" (see the paper Embers of Autoregression).
To poke it into a more interesting (and, hopefully less dense) areas of its probabilistic "semantic" map, you need to be more precise or use artificial constructs ("be precise") to get more value. It often pays to ask the question and give it the WHY behind the question which helps it to condition the response. Of course, uploading a doc can be a useful approach (something you can't do in human conversation), but here the same issue applies -- it will focus on the abstract, say, and miss subtleties. Now, if you know what those subtleties are, then you can incorporate them into the prompt to get better results.
Recognizing BS in the response is essential for some use cases, like if you're trying to bootstrap quickly into a subject and need data. If I see a key stat, then I always CTRL-F it in the source. Many times, it is not there, or it is a conflation of one stat with another clause.
A colleague of mine building an agent system for an org says that they use a separate debug window to display reasoning steps (parsing XML tags out of Claude responses -- noting that Claude is fine-tuned using XML tags, so these can be useful in crafting prompts too). I somehow feel like this "meta-thinking" is the next step (in UX) and the Anthropic guys are probably already tuned into it.
This observation of self-editing and reflexively scanning for certain hallucinations patterns has implications, too many to discuss here. But one observation is the mental models we have about LLMs. In many cases, they are, perhaps, ill-fitting. As my colleague also said: you have to know you're querying an LLM, not really chatting to anyone, or even a "machine" (with any mechanistic expectations that might follow).
A related observation is that querying is a skill, one that seemingly involves experience and critical thinking. If a user lacks these skills, I don't think the LLM will make up for it: garbage-in garbage-out is still broadly applicable.

# Feed post number 118
This 👇
“The XY problem arises when someone attempts to solve problem X using solution Y but faces challenges. Instead of seeking help for problem X, they request support for solution Y”

# Feed post number 119
Warp Speed
I forgot to mention in my previous post about my "AI stack" that I also use Warp -- an AI-powered terminal window.
Same benefit applies: my muscle memory for infrequent CLI stuff is very weak, so I forget commands easily.
Warp has NL interface which seems to work well. It can also figure out when other stuff is going wrong and make suggestions.
Another time saver.
Warp

# Feed post number 120
Left-Brain-ism On The Rise
We need an account of what someone called "enshitification" (spelling?) of stuff. Without theories, we will have no solutions.
I have convinced myself, I would say somewhat utterly, that McGilchrist's theories are hard to deny -- the rise of the left brain. He is not talking metaphors or 80s pop psychology, but a biological reality triggered by stressors stemming from modernity. (His account is thousands of pages long, which is ironic in that so few might cope with such a lengthy argument.)
Recently, I have been receiving a spate of emails from the latest YC cohort. Without exception, they are all incoherent, like either GPT2 wrote them or there's something else going on -- certainly some kind of group think as they have one thing in common: no bother to mention the product or any CTA. Did I miss this lesson in genius from the VC hacks? (Ultra lean? Leave out the message altogether.)
The insanity of almost the entire political discourse and the complete lack of even vaguely coherent ideas is worrying. It seems plausible that left-brained "autism" will bring about nuclear war over things hard to make sense of.
The use of the word "autism" is not my innovation. McGilchrist claims that the left-brained-excess pathology manifests as a kind of societal autism.
If, like me, you are concerned with the state of things to the extent of wanting an account beyond the oft-heard claim that "people are stupid" (as in most of the political class, apparently), then I strongly recommend exploring Iain McGilchrist's work --
https://lnkd.in/gMKyTTKr

# Feed post number 121
My Google Search Now Close to Zero
Adopting Perplexity was the last piece of the puzzle in my AI (re)search stack, followed closely by Arc Browser.
Between ChatGPT, Claude and Perplexity, I have most of my (re)search tooling in place.
The artifact feature in Claude is critical. I use it often. But the game-changer was the introduction of projects. If set up correctly (with the right priming), the power of generative search can shift into turbo for some tasks.
Seems obvious that Perplexity and Claude should have account-federated cross-dialog. Things I do in P I want to continue in C. (Well, that sounds like a hack opportunity, if nothing else.)
Of course, you can chat in Perplexity -- actually, this is what makes it useful. Unlike the pithy prompt examples they stream in the UI, or what we might hitherto have become accustomed to via Google (keyword strings), the power of Perplexity in many of my use cases is that I can ask very expressive questions -- both to prime the search and to follow-up.
I use ChatGPT less and less. Claude does most of the job. ChatGPT still preferable for some code stuff (inc. execution) and parsing images (OCR etc.) -- it somehow seems more accurate, but I haven't A/B'd it.
I adopted Arc not for AI features, but for its browser UX with spaces. Browser tab and window management is a major limit for me. I had developed a good pattern in Chrome with tab-search (which somehow I discovered later in life), but needed something better. In-tab AI-search in Arc shows promise.
I hope that Apple will sort out a lot of workflow issues with their AI whatever feature. I doubt it. Their trajectory has drifted far from the ethos of the Mac when knowledge management, or just work, felt like the goal of the OS. They probably have an army of UX researchers, but not sure what they all do. (Granted, copy and paste between devices is a killer app.)
I'm not too fussed about Github co-pilot inside the IDE, but I do find code gen useful for no longer having to maintain "coding muscle memory" about many tasks. For novel tasks, or thing's I've forgotten, it's useful. If I try to write all my code with it via, say, comments-driven prompts, it gets kind of syrupy.
I believe, although it is hard to say definitively, that the rate at which I can work using GenAI has had some impact on my "working memory" (and def. episodic). Whilst it has "enhanced" it (a subject for another post), it also means I become saturated more often than without GenAI. The circular impact is that this makes using GenAI even more inevitable -- e.g. to quickly bootstrap back into a chain of thought (as in mine, not an LLM's). I worry about possible negative effects upon cognition in ways that will cancel out productivity gains in the long term.
Indeed, this latter point is one I have made before, more broadly. It seems a real danger to the "corporate collective mind", not just mine.

# Feed post number 123
Anomalous Anomalies
I've recently been working on some anomaly detection stuff.
The challenge is that the range of possible circumstances is large. Hence variations arise in expected performance. What might seem anomalous for one person seem of little interest to another.
This is not a new story, but a useful reminder -- where we really need AI to shine, as in solving hard problems, is in the land of "edge cases".
It reminds me of when I worked on a bag of problems related to boosting the sales of art online. Yes, AI/ML can penetrate the so-called "Low Hanging Fruit", but ultimately this is like oiling an old bicycle when what you really need is a flying car. The challenge was that when it comes to art, buyers will say: "I know it when I see it".
Humans seem good at "I know it when I see it" across a wide range of problems. On the other hand, by definition, an AI can never know what it isn't trained to see.

# Feed post number 125
In other words:
To realistically reproduce is merely to copy. Progress must include novelty.

# Feed post number 126
Two Enduring Fallacies about LLMs
Enterprise users of LLMs should be aware of what these models can and cannot do and be especially wary of hyperbolic claims rooted in unfounded optimism. Two fallacies remain widespread:
1. That prompt engineering will become unnecessary
2. That hallucinations will disappear
I recall an ecstatic VC (of some repute in his field) declaring "there is no such thing as prompt engineering". His claim was founded upon an optimistic assumption that went something like the following: we only manipulate our prompts because the models aren't yet "powerful" enough to understand what we want.
His assumption was the the so-called "scaling laws" would get us to the point of, well, what exactly?
As I pointed out to him at the time, unless LLMs can read minds and obtain omniscience, it will always be necessary to manipulate prompts in the same way that dialogue between humans is approximate.
Per Descartes astonishment, it is puzzling how humans can communicate using an infinitely-combinable symbol set. As we penetrate the world of LLMs, we are beginning to see the puzzle in action.
The second assumption the VC made, and many others, is that LLMs will one day stop hallucinating, also due to scaling. It is amazing how many pundits still make claims like: "fix hallucinations using [some technique]", invariably "using RAG", or, nowadays, "using knowledge graphs".
(By the way, it is worth considering, for the more philosophically inclined, what we mean by "a fact".)
For those who think that either of these methods can "fix" hallucinations, they ought to read the beautiful paper "Embers of Autoregression" to understand how the lumpy distribution of the training data distorts LLM outputs --
https://lnkd.in/g9TfUcCV
Moreover, a careful consideration of the paper, or its implications, will lead one to conclude something quite worrying -- you *cannot* know how and where the distortions will appear -- i.e. there is no set of unit tests with a knowable % coverage of all possible states.
Worse still, you cannot know -- definitively -- how a plausible mitigation (e.g. fine-tuning) will address the distortion. In some areas of the distribution, it might even make matters worse. Moreover, such weaknesses could very well be latent, only surfacing after product release. For many using LLMs in their products, they are only just discovering a reality of products -- users can and will do unexpected things with your product, like entering the "wrong" input string.
Of course, it is obvious in so many ways that hallucinations are not fixable. Yet, it is better to have someone research this and explain it using theory and empirical data. This is what the authors of this paper have done:
Extracting the key phrase from their abstract: "By employing results from learning theory, we show that LLMs cannot learn all of the computable functions and will therefore always hallucinate." --
https://lnkd.in/gjZjSWE6

# Feed post number 127
Crossing the “demo to production chasm” 👇
As usual, good sense from Snorkel. Not sure the replacement of larger models with smaller ones is true in all use cases.

# Feed post number 128
AI Strategy, or Story? Data Strategy, or Culture?
Grand strategies for data and AI sound plausible but can be hard to define, harder to implement. For example, consider the huge failure of IBM Watson Health despite its extensive "Data Strategy" (well documented in case studies).
Similarly, we do not have to travel too far to find negative retrospectives about "Big Data-", "Cloud-" or "Digital-Strategies". Decent studies have shown scant evidence for ROI across numerous programs. One reason might be that there is really no such as an X-Tech Strategy, only Business Strategy.
"Data Strategy" sounds plausible, because we are used to the "Strategy" metaphor, but it might be no more tangible than proposing a "food strategy" for a restaurant.
Of course, an org should implement robust DataOps and modern "Data Product" ideas. This is where "data quality" gets addressed, although the stark reality is that very few execs care about DQ, except when used to make excuses for project woes.
Data Strategy as an aspect of Business Strategy is a different beast. How might an org ensure that it has access to the right kind of proprietary data to gain a competitive advantage?
This might require an overt "data capture" strategy where the goal of a product is specifically to capture data, distinct from the common notion of data as a kind of by-product -- e.g. product analytics.
An example might be Gmail -- a means to capture data (and eyeballs) versus an overt innovator in the collaboration market.
Many AI capabilities are absorbed into existing digital strategy, such as automation as a mode of value engineering. However, a more strategic perspective might be to ask how might business strategy be uniquely modified by AI, assuming it offers unique and defensible advantages?
Clearly, in many cases, AI has an obvious impact on unit costs via automation. Such uses are not strategic, but tactical. Given the democratized nature of GenAI, such moves offer little competitive advantage. Notice how banks and telcos are rolling out GenAI programs. Considering the lack of innovation and speed for which these industries are known, this says a lot.
Often, "AI Strategy" is typically a claim about "doing something with GenAI", as demanded by execs who are feeling pressured by boards, peers, analysts (but seldom customers) to adopt GenAI. This ought to called an "AI story".
I have seen many projects built without modern DataOps in place -- i.e. relatively little data hygiene. The value of doing something with AI, even if sub-optimal, might be greater than the value of waiting to "fix data". There are many situations where the power of an LLM can make up for "data quality" issues, but these are often only apparent with experimentation. In which case, perhaps one has to think about "Data Culture", so to speak, not "Data Strategy".

# Feed post number 129
AI Impact: What do AI experts know? Or about science?
Using a weak analogy, I might not expect a metallurgist who knows about munitions to say anything useful about the politics or strategy of war.
Should we expect AI folks who know about algorithms to have anything useful to say about the economic or social impacts of AI? I am not sure. Very few of them discuss it critically. They mostly opine, often with barely disguised agendas.
Perhaps the same is true of comments about science. Whilst computer scientists do science, it does not follow necessarily that they are qualified to discuss broader philosophical aspects.
If we take Chomsky as an extreme critic of the lack of science, he has made claims that LLMs have *no* relation to science. He says that linguistics is fundamentally a study of biology and that LLMs do not penetrate this subject, nor even have theories about it.
The underlying assumptions of LLMs are within the realms of how might algorithms be used to process the information embedded within natural language via superficial statistical sampling and the assumptions of linear representation and superposition (via some manifold hypothesis).
Of course, many in his circle seem to be somewhat perturbed by Sutton's “Bitter Lesson” of AI, namely that despite attempts at analytical modeling of intelligent systems (namely biological ones), the only real progress (within some objective-function sense) has been via data-driven approximation. Hence we see highly functional "linguistic computing" (to use a lay phrase) emerge via data-driven techniques absent of any (biological) theory.
Chomsky’s example is perhaps hyperbolic in order to emphasize a methodological difference. His own analogy illustrates this point: aiming a camera at a tree and feeding video samples of falling leaves and fruit into a neural network might give rise to perfect predictions of acceleration due to gravity, but would not be capable of hypothesizing gravity.
Personally, I enjoy his remark, although from the viewpoint of education and the need to encourage curiosity. He has often remarked that discovery is the “ability to be puzzled by simple things” (as in why do apples fall). If so, then we need more folks to be puzzled, which might be different from, say, studying for exams.
We might legitimately ask how such discovery might be aided or harmed by AI. It will surely be both and so benefit from debate, not dogma.
Returning to the impact of AI, there are experts that have formulated cogent theories of its macro-effects. One such expert is Iain McGilchrist and one such discussion is contained in the video below, which is just a minor glimpse of a much deeper set of ideas developed by McGilchrist in his recent publications.
(p.s. I also believe that being puzzled by the origins and nature of left-brain division might lead to insights into intelligence, somewhat in the tradition of David Marr on Vision.)

# Feed post number 130
Is Your RAG a Step Backwards?
Excellent tutorial (below) from
Haziqa Sajid
in the all-important field of hybrid search—combining dense vectors with other field data types.
Anyone with existing search configurations will know that hybrid approaches are a necessity and can be very challenging compared to merely building some greenfield RAG demo.
In my experience, the real challenge is in ranking, which is the core of search.
Many folks implementing RAG are entering the world of search, albeit via generative approaches. The uninitiated are quickly finding out that relevance is everything. Moreover, they’re discovering an even more pressing issue: user intolerance of irrelevant or noisy results, which can easily kill the entire effort—users simply stop using the shiny new toys and revert back to legacy systems, many of which are sufficiently well optimized. Compared to such systems, naive implementations of LLM-backed solutions can seem like a backward step.

# Feed post number 131
LLMs Compared to Which humans?
Interesting perspective on the cultural context of “humans” in many LLM evaluations.
Some (distinctly WEIRD) folks in the comments getting upset with the acronym WEIRD without consulting the paper, the references or the origination of the term, which was a deliberate choice to emphasize the use of outlier groups (at global scale) in psychology studies whilst believing the results to be universal.
Henrich J., Heine S. J., Norenzayan A. (2010). The weirdest people in the world? Behavioral & Brain Sciences, 33, 61–83.

# Feed post number 132
Using LLMs to Refine Their Outputs -- "Like Humans"
This paper has some interesting findings. The principle one is that an LLM can indeed be used to iteratively refine its own outputs, as shown in the examples below (left are raw inputs, right are refined ones) --
https://lnkd.in/gC-VF7hf
Note that the same model is used for refinement, not a fine-tuned alternative. For some tasks, human-judged improvements are as high as 40% of samples.
I found the paper whilst descending the rabbit hole of LLM-based defeasible reasoning -- I noticed that one of the authors of the WIQA dataset authored the Self-Refine paper. (Note: sadly, the WIQA dataset was not used here.)
What I found interesting however, is not the results, but the methodological assumptions. These get to the root of a problem I have been writing an essay about, but not yet found time to finish (like most of my essays).
Some (notable) commentators had previously said that an LLM "editing itself" won’t work. Such comments were rooted within the autoregressive-training "reductionist" stance -- i.e. inevitable degradation, or collapse, due to increased randomness — “LLMs don’t understand”.
However, the methodological assumption of the paper began with noticing that *humans* often refine outputs from initial drafts, so why not configure LLMs to do the same — i.e. as if they *do* understand.
This human-analogy line of thinking did indeed lead to the development of an idea that proved useful.
Of course, whilst it doesn't validate the value of thinking in such terms, it seems interesting. We have seen other such attitudes generate useful ideas, like Chain of Thought "reasoning", which mimics human decompositional approaches to problem solving.
Why do I find this interesting? For two reasons. Firstly, we might need to revisit earlier attitudes about anthropomorphizing LLMs (e.g. see Shanahan's paper "Talking about LLMs" --
https://lnkd.in/gKAPkRpk
) to develop a more nuanced stance. Whilst talking about LLMs in human terms does cause issues, it can also produce seemingly interesting avenues of research.
Secondly, this attitude somewhat tallies with the way Micheal Levin has made breakthroughs in cell-based intelligence (and biological intelligence more generally) by reintroducing telos into scientific thinking -- i.e. to assume that biological objects *do* have a purpose --
https://lnkd.in/g5bJmF8c
This latter subject deeply interests me because it re-examines ways of knowing (epistemology) by stepping outside of deeply-rooted orthodoxies in knowledge production that might blind us to radically new discoveries (such as Levin's mind-blowing work in morphogenesis).
p.s. I hope to evaluate self-refine for defeasible reasoning in the near future.

# Feed post number 133
Only 4 in 10?
The 6/10 (who didn't confess, but likely also do it) are probably the smart ones.
It's no surprise that Gen-Z/Millennials are exploiting this "workaround". They are digitally-native and know how to access a plethora of alternative viewpoints, many of which dismantle orthodoxies like the various work-culture ideas spun by the knowledge-production industry and its publishing outlets.
Most tellingly, Gen-Z are not present (on Linked or in these publishing outlets) to participate in the "debate".

# Feed post number 137
ChatGPT can indeed interpret the potential varieties of meaning of the sample sentence according to word emphasis, so the problem here is understanding what was intended.
As explained in the many excellent writing guides, one would seek to remove ambiguity from the sentence. All of these variations can be rewritten to remove ambiguity. This would probably be a good start if the desire is to avoid misinterpretation of an ambiguous prompt.
But we already see this in various prompting strategies: some kind of decomposition into simpler chunks in order to elevate precision in some way.

# Feed post number 138
More semantics about semantics 😀
This seems like yet another gate-keeperey objection to the “improper” use of the term “semantics”.
Clearly, when some people talk of things like “semantic search”, they know what they mean. It has a meaning couched within the common use of that term in NLP-related search, often in contradistinction to “lexical search”. I guess that’s an objectionable usage of the word lexical too and should be called indexed encoded-string search? Heck, is it even a real search? Lookup? Wait, isn’t this all just semantics?
The fact that an underlying LLM has no instructions derived from some formal semantics rules used by linguists seems irrelevant to using terms like “semantic similarity” etc.
One might argue that the guy who fixes my fridge is not actually an engineer according to some puritanical definition. Indeed, in the UK, the snobby folks at the IEE tried to make it illegal to call one’s self an engineer without some official accreditation—a classic British attitude of “know your place”, well mocked by Monty Python, who, ironically, were all from elite educational backgrounds. The greater irony is that electrical engineers typically don’t work with engines. I’m sure that the IEE were keen to preserve the word’s classical origins: ingenious, which someone who fixes fridges clearly could never be.
The irony here seems to be that the use of the term semantics is objectionable, yet not the use of the words “know” or “comprehension” in relation to computer programs. Maybe we need a philosopher to weigh in on that semantic faux pas.
Happy times.

# Feed post number 139
LLM Explainability...
Following on from a previous post about intelligence as an expression of uncertainty, which is possibly a feature, not a bug, of LLMs (per the remarks via Professor Lee), I thought it helpful to post this paper about LLM explainability.
It offers a thorough survey of applicable techniques.
Explainability, per the paper, can be divided into different approaches according to what is being explained: the fine-tuning paradigm or the prompting paradigm.
Furthermore, each paradigm can be broken down into local and global explanations. Local is the explanation of a single prediction where global is an explanation of the model-scale mechanisms.
Of course, the particular type of explainability that one might seek is very use-case dependent. In many cases, a natural-language explanation is going to be required, as in getting the LLM to account for its prediction.
An obvious example of this is Chain of Thought. Clearly, as LLMs are increasingly deployed in acts of reasoning and decision-science within enterprises, it is important for the human operator to understand the basis of the reasoning.
In my research, I have been following the work done to produce inference graphs for the purposes of achieving defeasible reasoning -- i.e. beliefs that can be updated as more (specific) information becomes available. Some work has been done to show that such methods can augment human decision-making, helping, for example, to overcome cognitive biases (of many kinds).
In general, one can think of this as a key deployment for aiding decision science -- human wisdom + LLM "observability" -- i.e. because an LLM has a much wider body of knowledge and many more examples to bring to bear upon a given problem. But a human can still "join the dots" better than the LLM in terms of obtuse highly contextualized problem spaces.
Given how widespread cognitive biases supposedly are (per the Behavioral Economists' viewpoint), then we ought to expect that base models have inherited these cognitives biases. However, per what Lee said (see my previous post), this could be construed as an advantage in terms of operating in a space of greater creativity. This is perhaps why adaptive sampling methods are so important that allow the predictions to vary in temperature (randomness) according to how much creativity is useful within a given context window of the predicted outputs.
Anyway, here is the link to the paper --
https://lnkd.in/gcdKFY5f
Enjoy!

# Feed post number 140
Does Fine-tuning Increase Hallucinations? Perhaps...
From this paper:
https://lnkd.in/gMZUUwVg
"We demonstrate that large language models struggle to acquire new factual knowledge through fine-tuning, as fine-tuning examples that introduce new knowledge are learned significantly slower than those consistent with the model's knowledge."
Okay, this is what we expect, more or less. And then there's this:
👉  "However, we also find that as the examples with new knowledge are eventually learned, they linearly increase the model's tendency to hallucinate"
Uh-oh - fine-tuning can increase hallucinations!
What's the takeaway?
Anyone paying attention to LLMs should realize by now that your evaluation strategy and effective search for an optimal solution is vital to success. Following a formula, like "RAG + Fine-tuning = My-domain LLM" is merely a starting point. Experiments have consistently shown that "out of the box", such formulations can perform very badly even though they give the impression, upon initial inspection, of being incredibly powerful. Don't be fooled by "demo wow-factor-ness"!

# Feed post number 141
GPT-4o, Google Glass, Knowledge Graphs and Intentionality...
I remember when I interviewed to run Google Glass Labs (a planned offshoot of the main project) and sketched out a napkin design for what I called "Salient Computing" (I still have the napkin somewhere and will post it. Actually, it was a formula for saliency. Ever since I learned the power of dimensions in physics, I always try to write stuff out as an equation to force a first-principles take on what's involved.)
GPT-4o is more like how I positioned the future of Glass, based upon an essay I had written about Mobile Computing in the compendium book Thumb Culture --
https://lnkd.in/gDKReyn8
-- edited by
Stefan Bertschi
.
Of course, AI and low-power compute was not ready back then. As my interviewer (Mr Teller) remarked: "We struggle to get self-driving cars to recognize objects with racks of computers sitting in the trunk". Sure enough, when asked to do a "Fermi" sketch of compute power and so on, it was clear that Glass would have issues.
Funnily enough, I mentioned a use case of asking Glass about the ingredients in a product in real-time. Mr Teller asked why it might be necessary since we can just read the list of ingredients on the label with our own eyes. Perhaps now, he gets it.
Anyway, Glass was cancelled and my interview process suspended.
I returned to the idea years later via the start-up
Telos.ai
who were interested to solve the "Oracular-compute" problem from the backend -- i.e. what kind of system is needed to power such interfaces. Their inspiration was the UX seen in Minority Report. Architecturally, we ended up with an assumption that language models would provide the glue along with some kind of knowledge graph.
However, the problem of saliency turned out to be far harder to solve.
It involves taking a more philosophical perspective about knowledge and what philosophers call Intentionality. This is because how humans actually build mental models of the "real world" has little to do with formal methods like OOP etc. Indeed, even KGs fail because ontologies that one might construct in some kind of library-book fashion (like a taxonomy of foods) do not exist in the minds of actual people. (One gets a glimpse at this via the works of Searle in books like "Making the Social World".)
I mention philosophy because when we look at where fundamental scientific breakthroughs are happening, like the work out of Micheal Levin's lab (Xenobots and the state-space of morphology), breakthrough ideas only became possible when taking a step back to question certain philosophical underpinnings (in science, like teleology). Such side-step moves are probably still required to get to an AGI world of the kind imagined by the UX in Minority Report and other sci-fi worlds. If you look closely at these systems, the real trick is in achieving acts of saliency that happen deep in the long tail of contextual information distributions.

# Feed post number 142
No: prompt engineering is not dead!
There’s no escaping the need to tune prompts. This isn’t a defect in the technology, but a feature inherent to the “probabilistic lens” of training via the bottleneck of autoregression. (See my recent post about certainty vs. intelligence.)
Azure has a prompt optimizer in their RAG solution and it doesn’t solve problems by magic. In truth, it seems more like a marketing or product gimmick. In many cases, it makes matters worse. This is something I’ve routinely found with most PE optimizers, especially once one strays from the examples. This is assuming one can adequately evaluate the task, which is no trivial feat and perhaps the greatest challenge of optimization.
One has to keep in mind a maxim of using foundation models: benchmarks seldom correlate with use cases. This has been widely researched in the literature and is a commonly reported experience.
Also, contrary to a potential misreading of one of the comments below, although DSPy makes PE more like programming than hacking, it doesn’t remove the need for tuning prompts—it utilizes very little theoretical basis for doing so.
Many use cases are highly sensitive to prompt format and there’s no escaping this—see the paper “Embers of Autoregression” to understand why. And, if you cannot understand the paper, you probably might not understand LLMs sufficiently well to find adequate optimizations, other than hacks, when hitting any buffers in performance for a specific use case.
One has to grind through the work of evaluation over a potentially large search space of solutions and be wary of the click-bait that gets posted on linkedin. PE has been declared dead every week for the past few years.

# Feed post number 143
What is intelligence?
In my last post, I mentioned the view of Professor Lee (UC Berkeley EECS) that if uncertainty is the root of intelligence, then you cannot have both certainty and intelligence. This is at odds with some policy directions that hold a belief that AI systems must be explainable, or subjected to formal (provable) methods (e.g. for safety-critical use cases).
Professor Lee then arrives at a position where, due *solely* to his observation of LLMs, he believes that rationality is not the root of intelligence, but rather the emergence from an already-intelligent system rooted in prediction. He makes various claims leading up to this position, including the idea that an LLM is more System-1 than -2 within the dual-theory of cognition (e.g. per Kahneman).
(Note, however, that I pointed out in my post that I am skeptical of this view given that the dual-theory, even by Kahneman's standards, is a metaphor, and given that the ability for an LLM to mimic 1/2 outputs seems more related to its training, per the paper "Embers of Autoregression" -- i.e. what I call a "lenticular distortion" via the lens of probabilistic learning versus something more fundamental *within* the training data, reflective of human cognition.)
Note that this is why KGs and RAG can lessen hallucinations: the output probability is being constrained to a more certain prior. The irony here is that we are then somewhat back to rules-based "expert systems" and, in some regards, the uncertainty that Lee values gets eroded -- i.e. there is a world where you want "hallucinations" for some kind of emergent "intelligence" gain. In a sense, he is right, as in we probably need “AGI-LLMs” that can coin new words (per Shakespeare or Drake -- the rapper, not the sire) and invent novel semantic constructs (which need not mimic human cognition).
Anyway, a good overview of the "Intelligence is prediction" argument is nicely summarized in Nathan Taylor's post --
https://lnkd.in/g8NmFpe4
Taylor is clear that there is only intuitive reasoning all the way down (into the neo-cortex, per the work of Jeff Hawkins and his Thousand Brains idea).
There is alignment here with Frison's free-energy principle and Bayesian Brains, noting that Lee starts out with a Bayesian definition of uncertainty.
I also wanted to contrast this to the incredible work coming out of Michael Levin's lab exploring intelligence at an even more fundamental level, as in the intelligence of cellular action driven by "stress". Levin defines intelligence as the ability to navigate various spaces, and stress as the difference between where a person is and where they want to be. His concept of intelligence light-cones is quite instructive in this regard -
https://lnkd.in/g5bJmF8c

# Feed post number 144
Intelligence or Certainty: Pick One?
[Not really]
I watched this lecture by EECS Professor (Lee) --
https://lnkd.in/gCguy5t6
I ponder his core claims here whilst invoking the teleological analysis of LLMs in the paper "Embers of Autoregression" that explores ideas inferred from the nature of LLM training: next-word prediction. I call this the probabilistic lens because, like a lens, it exhibits distortion.
His claim is that uncertainty is necessary for intelligence. This is core because he wants to assert that the very power of LLMs lies in uncertainty. Hence, some ideas, like explainability or conformity to formal methods (e.g. for safety-critical systems) are in tension with LLMs -- hence the moniker: intelligence or certainty (not both). (Note: If true, then AI regulation is in opposition to LLM intelligence, which could have implications.)
Uncertainty here is meant via a Bayesian interpretation. If we are fully certain of the prior, then no observation will have any effect upon the posterior -- an absence of "intelligence".
I guess an information theoretic interpretation is also plausible, as in being predictable means no surprises (to learn from).
The speaker then draws parallels with Kahneman's System 1/2 thinking, saying that LLMs are more like System 1.
AFAIK, the dual-theory is essentially a metaphor. Even Kahneman says this: he calls 1/2 "fictitious characters".
It could still make sense. Lee mentions an LLM experiment to generate opposite views of a legal decision wherein the two accounts seemed equally *plausible*. Lee views this as a kind of feature, not a bug, as in creative options.
I guess in the world of idioms this could be aligned with the oft-quoted idea that intelligence is the ability to hold two opposing ideas in one's head.
However, I think the lens account is more apt. If two opposing outputs are equally probable (given the input), then we expect the LLM to generate them. They are necessarily plausible in the sense that LLMs generate semantically coherent outputs, which can fool a human into assuming plausibility: c follows b follows a.
However, via the probabilistic lens, frequent events with high probability outputs will mimic System 2, whereas lower frequency and/or low probability will mimic System 1. Is this fundamental to intelligence, or merely confirming a metaphor?
Well, the speaker believes the former, claiming that rationality is not the root of (human) intelligence, but an emergent property rooted in prediction.
This is also Jeff Hawkins' view -- homogeneity of the neo-cortex points to a universal model: namely prediction, as annotated well by Nathan Roberts here --
https://lnkd.in/g8NmFpe4
There is alignment also with the work of Michael Levin in "emergent minds", but I'll get to that in a later post.

# Feed post number 145
This poster begins with “AI is not hype” and proceeds to spew a pile of hype as if his readers are idiots 😂

# Feed post number 146
If someone isn’t already of the opinion that doing hard things is, well, hard work, then this probably disqualifies that person from doing hard things.

# Feed post number 147
Structured Reasoning via Code?
Going down the rabbit hole recently of structured LLM outputs, I explored this paper -- "Language Models of Code are Few-Shot Commonsense Learners" --
https://lnkd.in/gJkuwTUR
The authors offer research into “structured commonsense reasoning” - given NL input, generate a “reasoning graph”.
However, serialized graphs strongly deviate from NL pre-training tasks. But what if the pre-training task involves code generation?
“In this paper, [the authors] show that when structured commonsense reasoning tasks are framed as code generation tasks, pre-trained LMs of code are better structured commonsense reasoners than LMs of natural language, even when the downstream task does not involve source code at all.”
This is yet another example of the peculiarity of LLMs -- i.e. how the probabilistic modeling of code can enhance certain types of reasoning tasks.
Given my earlier post (about the paper "Embers of Autoregression"), we might not be too surprised. Of course, this would not work with machine-code, but only via the symbolic nature of higher-level languages in which variable and method names, along with doc strings, blend one kind of semantics (natural language) with another (coding patterns).
There is some adaptation required, which is the Code for Commonsense Generation (CoCoGen) approach, namely to represent various commonsense tasks, or structures, using code (i.e. a Python class).
These kinds of innovate approaches offer glimmers of hope as to where we might go with LLMs in solving more structured problems. Following on from my previous post about the (poor) prospects of LLMs solving real-life enterprise problems not already highly optimized (by digital dividends of "low hanging fruit" variety), it would seem that the better chances of getting an LLM to tackle a "rarer event" sample space is to add some structure. Of course, some are attempting this via knowledge graphs, but, lest we forget, this is only one example of a data structure that we might adapt for reasoning tasks.

# Feed post number 148
More market correction of the reality-distortion field (not of the Steve Jobs variety).

# Feed post number 149
Ted Shelton
makes a good point about not only focussing upon the LLMs in a wider system of components.
I guess it depends upon one's perspective. As an engineer, I would naturally incline towards meeting a specification via a systems design, which, as you say, typically involves many components. And, if they do the job, then one need not obsess with any particular component.
As a researcher, I am more interested in the core components and the frontiers of innovation. Obviously, the LLMs play a significant role and one can get further by understanding their nature, which in many cases is open to even non-AI-researchers via experiments (e.g. prompt hacking etc.)
There is a sense in which we might think in terms of computer-systems analogs, as in how processors are still the main engine despite myriad system-level innovations. One often characterizes computer problems in terms of their upper bounds, as in CPU-bound, memory-bound, IO-bound etc. For most real-world LLM-powered systems, they appear to be LLM-bound. This might explain why many folks obsess over the LLMs, a bit like some of us used to obsess over things like MIPs ratings of CPUs etc. Of course, the analogy is weak in many ways, but might provide some explanation as to the strong focus given to LLMs.

# Feed post number 150
The Emperor's Old Clothes
Having lambasted the "AI Pin", M Brownlee declares the Rabbit as "barely reviewable"...
https://lnkd.in/gyvdcQ8E
There is some weird reality distortion field in play, but not the one Steve Jobs imagined. This one includes selling an unusable product at a premium price whilst merely telling people how magical it is.
But, fear not... one left-brained AI maximalist reviewer corrected our naive view of magical: "This first iteration is ridden with flaws, but it truly is a magical device"
Huh?
Magical = "ridden with flaws" -- who knew?
I think he's confusing illusional for delusional.
Of course, there is an easy way to predict the success of these products. One only has to be a power user of ChatGPT whilst (honestly) observing the number of times it makes mistakes, which we gloss over because the chat user in "(re)search mode" is highly tolerant of such things -- the (unfinished) product obeys the Clayton Christensen principle of user's tolerating faults in return for some significant pay-off, which in this case is not having to waste time using the (awful) Google Search UX.
However, in "mobile task mindset", the user tolerance is very different and the same error rate is enough to kill a product (or the demo in the case of "The Pin").
Of course, the maximalists will say that Brownlee killed the product, such is the reality distortion field they occupy.

# Feed post number 151
"Usually this is where a public company CEO prophet like Elon Musk would unveil a new vision with a new product with seemingly infinite TAM" 🤣
One has to wonder what is the future of digital.
The crumbling UK empire switched from real engineering, like the things that Brunel used to make, to financial engineering, and then "token" financial engineering, as in legalized money laundering, if we're objective about it.
The US empire switched from real engineering, like putting man on the moon using a Kalman filter and a computer with less power than an Apple TV remote, to share-price engineering and then "token" share-price engineering, as in legalized ponzi-schemes and fake economies, like Uber, if we're also objective about it.
I am no expert, or even amateur, on matters of empire, but it doesn't seem like things are heading in the right direction. Crypto went full tilt and skipped any pretense of engineering, or even "token" engineering -- it literally sold tokens!

# Feed post number 153
LLMs and Low-Hanging Fruit
Following a reference in the previous video I posted about "What next" after LLMs, as in making them *really* work in the enterprise, I read: Embers of Autoregression: "Understanding Large Language Models Through the Problem They are Trained to Solve"
https://lnkd.in/gCJ8J5T7
The authors attempt what we think might have already been done, namely to figure out why LLMs work, as in what kind of behavior and performance should we expect from next-word-prediction (irrespective of how that is implemented -- e.g. self-attention).
They confirm what we might expect from a system that probabilistically models "the world" -- probability affects accuracy. This seems kind of obvious, but unless we grasp its implications, we will continue to believe, falsely, that hallucinations are errors.
They are only errors as judged by an external system with strong prior beliefs -- e.g. a system in which we know with 100% certainty, say, that the capital of France is Paris.
It is important to grasp that this "fact" is interpreted via a "lens" of probabilistic sampling of web-hosted language patterns.
The classic example of lenticular distortion is asking an LLM to pick a random number in [1...100]. We expect to see a uniform distribution. But, via the lens of web-hosted language patterns, we get a strong chance of picking the number 42 because it is so well copied-and-pasted in python code as a random seed.
The paper found that all LLM tasks are subject to these lenticular distortions. For example, "GPT-4’s accuracy at decoding a simple cipher is 51% when the output is a high-probability word sequence but only 13% when it is low-probability."
To make this clear, this would be like a python method producing an output whose correctness is not related to code per se, but how many times the method has been used.
What does this mean in more tangible terms? The authors are quite clear: "AI practitioners should be careful about using LLMs in low-probability situations".
As I have pointed out many times before, low-probability scenarios are where most business value is generated in modern economies. This is true both theoretically, as in the value of information is in relation to its surprise and asymmetries, which are precursors to competitive advantage, and practically, as in we instinctively know that this is how work is valued -- the level of innovation (novelty).
If the *current* value of LLMs is in optimizing high-probability situations, then the challenge is that this is where much digital optimization has already taken place, as in what managers love to call: "low-hanging fruit".
This tends to suggest that the value of GenAI is in reaching slightly higher fruit.
However, there is a disproportionate level of difficulty and cost in doing so because outside of the "low-hanging fruit" zone, things (e.g. data) are so poorly organized as to present themselves (to LLMs) as low-probability spaces.

# Feed post number 154
Large Language Models Are Poor Medical Coders:
Interesting analysis of LLMs for proposing medical billing codes from text. TL;DR = cannot be used for actual coding.
"Large language models (LLMs) have attracted significant interest for automated clinical coding. However, early data show that LLMs are highly error-prone when mapping medical codes."
I will leave the reader to survey the paper --
https://lnkd.in/gMcXviz2
I have reviewed countless AI start-ups via my role as both an AI researcher and via a number of related responsibilities. There is an "LLM for X" trend where X, in this case, would be "medical coding".
By now, we recognize that LLMs do not work out of the box, except in the one rare use case of oracle-bots -- e.g. ChatGPT -- where the key ingredient is a human in the loop -- HITL. It would be interesting to measure how many errors we tolerate in our use of such tools (if we notice all of them). I suspect the number is way higher than anyone might self report via mere introspection.
In the case of many "LLM for X" use cases, the outputs need to be accurate much, or even all, of the time. And it's not just a case of accuracy. Certain modes of error could be catastrophic -- i.e. you really need a metric to measure error-type rates, if they are detectable. It could be that the threshold for a certain error type is the critical limit for the entire system.
These measures are important *even with* HITL. In many real-world uses, errors can have a disproportionately negative influence on tool adoption, even if you coach folks to expect them and even if, despite the errors, the tool still saves time. Anyone who's worked with sales automation knows this -- sales folks see an error, particularly if major infractions, and quickly give up on a shiny new tool, or they just game it when being measured by tool or process compliance.
On has to wonder, then, what is happening in many of these "LLM for X" start-ups when they hit an upper bound on performance that falls short, especially those founded by non-AI folks. Do they have the technical ability to research potentially novel solutions or do they just wait for the next paper or LLM release in the hope that things get better?
Many end up applying some kind of "hack" and hope for the best. However, in some cases, these hacks make matters worse. I have routinely seen this when reproducing enhancements suggested by various research papers. It is yet another reminder that benchmarks seldom align with task-specific performance. So if the hack makes matters worse, you're back to having to find your own solutions.

# Feed post number 155
Chinese Room Argument Hardly Matters...
Having just read a very weak attempt at yet again disputing Searle's famous Chinese Room Argument (CRA), I would like to suggest that one of his other contributions to philosophy is far more valuable to the adoption of AI *in-real-life*.
That would be his book Rationality in Action:
https://lnkd.in/dcTAw35a
The book offers profound insights into the gap between what we tell ourselves about rational thought and how we actually go about being rational, or not.
As far as I can tell, much of what we tell ourselves about (free) markets, product theory and technological capability -- including the role of AI as an "automation agent" -- is based upon a rational assessment that simply doesn't hold in practice. This has always been my observation, yet I don't have the intellectual depth and training of someone like Searle who is so able to put such observations into well-formed arguments.
Despite having read the CRA many times and most of Searle's essays and books about theory of mind and computational analogs, I have to confess that it has had zero impact upon my life. Rationality in Action, on the other hand, is a tour de force in re-assessing how one thinks about life.

# Feed post number 156
Contrary to what is said here, there are lots of well-researched studies that show how bad "vanilla" RAG can also perform. (Well, there is no vanilla RAG anyway -- by now there is a long list of possible optimizations.)
If you want a real case study as an anecdote (vs. methodical research) -- see the Snorkel case study of a bank whose "vanilla" RAG achieved only 25% accuracy vs. an eventual 89% after various holistic tuning methods (inc. weak supervision via programmatic labeling).
https://lnkd.in/gYm5Sqaq
And, RAG does not solve hallucinations. There is no technology that can do this in practice because of the probabilistic modeling of facts that an LLM is performing, which degrades rapidly as you move into sparser regions of the input (and output) term distribution. And the challenge is that the scaling laws struggle to have any impact in these areas.
That said, in some fields, like medicine, where there is a large set of stable knowledge that covers a large set of medical tasks, deviating into any of these sparser regions becomes less likely. On the other hand, to do so could cause harm. This is the tension between high accuracies and good-enough ones.

# Feed post number 157
Google Actually *IS* Getting Worse: Do not adjust your browsers!
Many have felt, myself included, that Google search is increasingly sucky.
Well, it's deliberate:
https://lnkd.in/gdQDQz-d

# Feed post number 158
Going beyond LLMs...
By now, everyone in the field of applying LLMs to real-world problems knows of the peculiarities of using such models, especially the following:
1. The gap between ease of access to remarkable NLP power and getting acceptable task-level results (esp. without any human-in-the-loop)
2. The myriad research ideas (papers) to go from pre-trained to task-trained -- so many possible customizations that they're impossible to track
3. The need to know at least some data science and AI engineering if you want to bridge the gap in 1, which can easily extend to the need for NLP research to find optimal solutions
4. The gap between impressive benchmarks and actual task performance (assuming one knows how to evaluate it properly, which is not always obvious)
5. The issues of data quality actually do matter
For many, it is a rude awakening. Many folks claim "we have lots of data" and blithely think that throwing it into an LLM (e.g. via RAG) automatically extracts value. It does not. This is not just a tech problem, but often a design one, but I don't have time here to explain why.
To this end, we know we need to go beyond the oft-demonstrated duo of LLM + some library (like Langchain). But what does that world look like?
This video gives one of the better overviews of LLM shortcomings (in practical settings) and various architectural solutions going forward, many inspired by a cognitive-science view that is somewhat aligned with how people actually work versus how computers compute.
The speaker does lean-in quite a bit to knowledge graphs, although I am still not a big believer, having used them since Neo4j was released and in anger on recent large-scale projects attempting to solve "hyper-scale" observability in multi-enterprise collaborations (e.g. think of giga-projects in construction, like London's Jubilee Line). KGs are another area where demos and even PoCs look promising, but in-production realities can easily swamp success. I will share my reservations another time, but please enjoy this video:
https://lnkd.in/gQf5Thnf

# Feed post number 159
When AI Doesn't Work...Because of Red Dwarf-ism
[Friday musing.]
For me, 99% of the "People You Might Know" in LinkedIn are wrong. I don't know them and cannot even see how I might, except for alumni connections (although drastically from the wrong decade of graduation).
If I had to guess why, it's because they're using matrix factorization.
If, like me, you have a mix of closed and open networking habits, then the state-space will be very sparse using a naive MF approach. The so-called "Curse of Dimensionality" makes all points in the space look "the same". (I am simplifying, but you get the idea.)
But it doesn't matter for the point that I want to make. LI's use of AI, or its model, might be a much smarter tech than what I've suggested. I want to hone in on why the biggest challenge with *any* data-driven project is how to convert it into a meaningful product.
One can almost sense some localized decision making and logic with many data projects, which is part of a larger malady throughout technical communities and society at large, namely the preponderance of left-brainism -- i.e. the kind of thinking that allows local optimizations to make perfect sense without any holistic considerations.
In AI/ML, this is the difference -- which is typically a huge one -- between some evaluation metric (often wrongly selected) and a meaningful product. This is made worse by the "metrication" of all things: KPIs for design.
We have passed the notion that if you can't measure it, you can't manage it, to something like: it doesn't exist.
Many data-transformation projects fail because the task was understood to be generating some data with some kind of accuracy. Adoption, ease-of-use, habit formation, change management and a gamut of more holistic concerns were of no importance. Adoption was reduced to some banal KPI like dashboard visits.
No method can fix this. If you raise a generation on the notion of paying attention only to things that might appear in an exam, then this is the kind of attention you'll get in the workplace -- those non-exam things don't exist.
Hence why so many believe that AI can *actually* do so many magical things -- GenAI can "write" a cover letter, so it ticks the box and passes the exam. Benchmarks are "super-human" -- what more do we need?
It reminds me of the Red Dwarf episode in which Rimmer somehow mistook this revision timetable for the actual task at hand, leaving himself no time to do the actual revision, which wasn't the point anyway.
https://lnkd.in/gKxdsnz2

# Feed post number 160
Joint Embeddings -- But Why?
One of the most interesting developments for me in embeddings was when the idea of combining different "domains" (distributions) into a single embedding space arrived. A fantastic early example was the Starspace approach (via Facebook) which combined hash-tag embeddings with document embeddings.
I adapted it (during the XtoVec era) to build a model for next-best-action in digital marketing, mostly so that marketing folks could label touch points with hash-tags, which turns out to be the easiest way to maintain a "folksonomy" with little regard for formalisms etc.
This technique continues to deliver, more recently with the SANTA approach - Structure Aware DeNse ReTrievAl. This combines docs with structured text (e.g. JSON) --
https://lnkd.in/g_5VUwsE
Why do these approaches work? After all, they are taking what seem to be two different distributions and compressing them into the same latent space.
Well, hash-tags and JSON still use natural language whereby naming conventions are human interpretable.
These techniques are still valuable in chatbots where one is still interested in policy-directed dialogs as opposed to free-form. Indeed, I think we need to differentiate task-bots from oracle-bots.
Most use cases are going to be task-bots, which originally were solved using intent-based recognition. Early on, the intent logic still sat outside of the prompt sense-making logic, but innovators like Rasa figured out that both can be combined into a single embedding space (using something like Starspace).
It is no surprise then that ServiceNow has adopted a similar approach in their LLM efforts to combine NL and policy data, namely workflows.
However, it seems clear to me that at some point we will return to a more formal approach via the introduction of (Domain Specific Languages) DSLs, albeit possibly generated via LLMs, to specify workflows in ways more reliable than merely "hoping for the best" that disjoint distributions will align because structured representations happen to use appropriate naming conventions. Why not insist upon it?
In a way, this is what I was attempting with a hashtag folksonomy. There is a sense in which adding hashtags goes with a mental model of "indexing", which is kind of what we're hoping the tags to do in the embedding space. Over time, users will add tags that slowly evolve to resemble a "domain specific language" because users' mental models figure out that the tags are actually instructions to some downstream AI.

# Feed post number 161
LLMs are Many, Many, Many-Shot Learners:
Not a week goes by without yet another discovery of how in-context learning ("prompting") needs to be reconsidered.
By now, we should be used to this -- so many strategies and experiments have been offered, all with varying results and implications. The real challenge for many practitioners is which strategy to use, and when.
It has become apparent that the effective use of LLMs in orgs is largely limited by the ability to experiment. The idea that one merely deploys the latest model (GPT-N) because it "fixes everything" is a huge misconception. What you get is a better model in terms of leaderboard performance, but the objective of an organization is to solve meaningful business problems, not adopt shiny toys.
As such, this is not a "data science" problem per se, but also an engineering problem, perhaps predominantly so -- setting up a multitude of experiments that converge upon a solution. The search space can be huge, plus constantly evolving, unlike, say, the more familiar grid search of many kinds of statistical learning problems via built-in Sklearn convenience functions and the like.
This paper --
https://lnkd.in/g4-RZHVJ
-- reveals some interesting finds:
1. "Our analysis also reveals the limitations of next-token prediction loss as an indicator of downstream performance." -- i.e. leaderboards might not tell you much about your problem.
2. "Furthermore, maximum performance is often achieved only once the number of shots reaches up to hundreds of thousands of tokens"
3. "..we also introduce Unsupervised ICL where we prompt the model with *only problems* instead of problem-solution pairs”

# Feed post number 162
AI Winners?
There are two sets of use cases and/or market strategies: those were leaderboards and market reputation (via stock price) matter and those where they don't.
Where leaderboards and marketing prowess don't matter, as in the likely bulk of in-field use cases (vs. demos and oracle-bots) smaller models will eventually dominate and the marketplace model (i.e. Huggingface) will dominate with an increasingly wider set of model specializations.
Of course, if there is any theoretical breakthrough, which could come from anywhere, vs. the largely engineering-led frontier, then this will cause some kind of disruption.

# Feed post number 163
AI, on the other hand, is entirely about computers.

# Feed post number 165
Build Things That Actually Matter:
I posted about this before: Nike is losing because their brand is losing, especially in China where the "halo effect" of Western brand mythologies is wearing thin.
But this could well be the start of a wider trend, as in the break down of branding itself. Loyalty to brands doesn't deliver.
A close examination of some Gen-Z (and wider ethnographic) trends suggests that the marketing mechanism of propaganda (in its broadest sense) is breaking down.
The whole idea that you can sell a product via a story depended upon everyone buying into the same sets of mythologies, including the myth of satisfaction. However, the reality of these stories is that their goal is to transfer wealth by exploiting weaknesses (of the ego) -- fewer "users" actually believe that driving a certain brand of car is going to put a satisfying smile upon their face, per advertising messaging.
Now that you can max out on story telling and consumption via social media -- your whole life on Instagram via filters and the like -- many have seen that the "experience" doesn't deliver. Mental health issues are at an all time high across the board.
Longer term, this also doesn't bode well for the storification of technology: "Peloton is the Netflix of wellness", or whatever.
But this is probably a useful correction: we will have to build things that actually matter without the need for stories.
Those "sages" who have recently been advising that young people should learn the art of storytelling (not coding) are wrong. Young people should avail themselves of every creative tool going in order to learn problem solving via authenticity and impact. Build things that actually matter. Reach out and touch someone's life.

# Feed post number 166
Haixun Wang
makes a valuable argument about language homogenization, essentially due to the widespread use of the same compressive (embedded) representation of language and "common crawl" knowledge that makes its way into all of our communication pathways.
I have made similar arguments in the past, although more aimed at the dangers of homogenized thought (and therefore actions) within the context of enterprise communities, leading to an eventual collapse of some institutions due to a gradual decrease in performance, counter to intuitions of using AI interventions. This is not an anti-AI argument, but a caution against a lack of strategic deployment of a technology with potentially huge side effects, many yet to be recognized.
For example, I have argued that the use of AI in various modes of sales augmentation is potentially a zero-sum game. Sales is ultimately a communication regime related to information asymmetries of various kinds within a game-theoretic context. Whilst it is easy to imagine gaining an edge using AI against a human, it won't be long before the other side of the table is just another AI trained on the same data.
The impact of homogenization is not a new idea and was well explained as a voluntary reflex of many enterprise communities whose language conforms over time to an "allowed" (or preferred) set of idioms and communication patterns. This was well described by the grammarian Richard Mitchell in his book "Less Than Words Can Say" --
https://lnkd.in/gMFGKmDy
One aspect of his contention was that when words become compressed into normative communication patterns, then so does thought and, with it, competitiveness (as expressed via originality). (Of course, Tuft has made similar remarks regarding the use of Power Point.)
It is already easy to spot the use of GenAI in communications and for the homogenization to be apparent. There are also signs of anti-patterns, such as the negative reaction towards receiving messages that are clearly automated by AI, pretending to be human, causing a decline in engagement, counter to expectations of using "personalized" comms. Within Complex systems, we should expect such effects because of the tendency of leverage-point interventions to create the opposite effects to what is intuitively expected. If accelerated by AI, this could have a destabilizing effect upon some enterprises in the long run.
The irony, so to speak, is that the best use of AI in the enterprise is going to be in how original and exceptional it can be deployed. This remains as much as an innovation challenge as ever despite, or because of, the democratization of AI models.

# Feed post number 167
It seems like the adage: “80% of data science projects fail” was wrong. It seems more like 99% 😮
“Unfortunately, almost all of these [covid xray prediction] models were useless.
Many ultimately had problems with generalization.”

# Feed post number 169
AI Reality Check?
It would always have taken a while, but finally the reality gap between convincing demos and transformative solutions is becoming apparent.
Moreover, existing solution providers can easily embed AI. There are few entirely new applications that could capture new markets.
But a deeper issue is the mass of activity that GenAI has created via many overnight “AI experts” in which the outcome is highly lackluster due to lacking the actual-AI-expertise required to solve the deficits that prevent demos becoming high value solutions.
Also, the most obvious use case is chatbots, but they mostly replace search by generating answers. They do little else, so productivity gains are minimal. It’s a bit like going to work on a rocket, only to face all of the usual inflexible systems.
Of course, there are genuine AI breakthroughs to be had, but only available to those with investments in serious AI expertise.  Such skills remain rare.
“Umesh Padval, managing director at Thomvest Ventures, attributes the shrinking overall investment in AI to slower-than-expected growth. The initial wave of enthusiasm has given way to the reality, he says: that AI is beset with challenges — some technical, some go-to-market — that’ll take years to address and fully overcome”

# Feed post number 170
Humane: Smells like bullsh&t, probably is…
Some of the VC community are going into meltdown because Marques Brownlee dared to declare the Humane AI pin as the worst product he’s ever reviewed, possibly helping to kill it.
How dare he burst the bubble of the deluded.
These “sages” don’t seem to realize that voice-only products have been tried many times before and never work. It’s nothing to do with AI.
The demo was a farce, as is the product, as is the non-stop hype alternative reality that we’ve been asked to endure by talentless “AI expert” shills.
Adding AI to a concept and calling it a product is BS.
The era of BS is finally over. Good riddance.

# Feed post number 171
Reducing Problems to Image Recognition Problems
I was recently reviewing some of the network monitoring (e.g. network intrusion) approaches using Deep Learning (DL). It was very satisfying to see many efforts whereby the dataset is first converted into images via a variety of techniques, including t-SME (in order to preserve local/global feature relatedness in the pixel space).
I recall that this approach had proven unimaginably popular and successful by various students attending the fabulous Fast AI courses via
Jeremy Howard
In my own neck of the words, I read about how gunshot detectors had also used this approach to gain way better results than attempting more classical spectral analysis.
It never ceases to excite me how one problem can be converted into another in order to leverage a powerful model pre-trained with a rich dataset. Moreover, it is fascinating how feature representation in one domain can be used to recognize features in an entirely separate domain. How is it that, say, the features of objects like cats, dogs, cars, and so on, can be useful in recognizing the features of objects like network flow protocols?
Well, that’s the subject of another post, but the lesson here is to remain aware of such “tricks” and the surprising effectiveness of DL in finding patterns in all kinds of data.
Here is one of the projects (MAGNETO) that uses this method for network intrusion -
https://lnkd.in/g_b2Q_Gc
Two interesting side notes:
1. The authors used GANs to generate synthetic samples in a highly imbalanced dataset
2. These authors, who extended the work, got better results by dropping the convolution classifier in favor of random forest —
https://lnkd.in/g3vffSb3

# Feed post number 172
Real Transparency: Bring Your Own Model
I enjoyed reading this post by Steve Denton, which I referred to in my last post “(Not) Seeing like AI” —
https://lnkd.in/gfNqTq5q
In his exploration of top-down control (via “compression” of information) vs. bottom-up insights and freedom, Denton refers to the example of tension in controlling hate-speech and trolling using top-down policies. He posits a possible approach:
”Giving control of models to individuals who have authority over subsites (like Twitter comments in response to one’s own tweets) would provide an excellent way forward for public discourse on the internet.”
This is precisely the approach that I proposed for a “citizen journalism” platform for a large media agency whereby the community protection tools are both provably transparent (using cryptographic proofs) and pluggable — “Bring your own model” — a kind of federated approach with some universal oversight.
Is it easy to do? No. But then easy solutions are, by definition, of low value.
I would go further, which is to allow community/fractional ownership, but thus far such schemas have failed to gain traction (e.g. via the world of DAOs etc)

# Feed post number 173
Jobs was a genius, but it’s kind of sad that we have to continually regurgitate wisdoms that many others have sacrificed their lives in pursuit of, giving us far more significant inventions than shiny products.
No one actually thinks that an idea is 90% of the work. In fact, this has been understood since Aristotle and there are legions of scientists who have dedicated an entire lifetime of work in pursuit of a single idea.

# Feed post number 174
(Not) Seeing Like AI:
[Inspired by Steve Denton’s post —
https://lnkd.in/gfNqTq5q
]
In James Scott's book, 'Seeing Like a State,' he explores the shortcomings of mega-scale projects. The crux lies in the disparity between the abstract (e.g. KPIs) relied upon by authorities and the concrete: insights of those on the ground. It exposes how “centralization” struggles to capture the nuanced, yet vital, realities that matter. Of course, this is information theory: maximum surprise holds maximum information.
This is a sampling problem. This is a reductive view, but does offer useful lines of thought.
Over the coming months, I intend to explore these reasons through the lens of what does it take to use AI/ML to “solve” complex problems, especially with a real-time component. This frontier is where I have spent most of my career.
Increasingly, it is not data per se that offers competitive advantage, but decisions — a well-timed and appropriate decision can outwit competitors with access to the same data.
It is not AI/ML that matters either, but AI/ML “in-flight” — how models (and simulations) can be deployed as what systems-thinkers call “leverage points”. There is a huge difference between making language computable, per LLMs, and making organizations computable.
Per my earlier post about infotaxis, the work I was involved with via TelOS to make orgs computable held the belief that Complexity can only be met with Complexity. As I have also posted, this is, perhaps, how LLMs “work” — via scaling whereby they can reach the Complexity frontier of natural language (see  paper by the SFI —
https://lnkd.in/guBB9RiE
).
However, language in its broadest sense is that which is deployed by a community of users — not a scraped corpus. And, to be clearer still, there is no language as such, but languages — as many as there users and even orgs. In a sense, this is why we see a kind of “Simpson’s Paradox” — aggregate benchmarks not indicative of localized performance.
Recent research has shown the inefficient sampling of pre-trained LLMs, as in the log-linear relationship between performance (linear) and the (exponential) amount of data needed to “recover” a concept.
What, then, would more efficient sampling look like? In the world of signals, we have the Shannon-Nyquist limit: sampling rates >2x the highest harmonic in order to recover the signal.
Compressive Sensing has offered an alternative — context-selective compressed-sampling strategies that capture the data of interest in “violation” of the Nyquist rate by exploiting the inherent sparsity or compressibility of many signals or data sets in certain domains.
Such a strategy must exist in the sampling of enterprise projects. Without it, we cannot hope to penetrate the necessary nuances that will enable AI to “see” what matters despite the challenges of Complexity that dictate the current frontier of managing mega-scale projects.

# Feed post number 175
Insights, not Numbers!
Many are familiar with Richard Hamming's quote: "The purpose of computation is insights, not numbers."
We could well apply this to the world of dashboards. Or, perhaps, to a revised maxim: "The purpose of LLMs is insights, not words". Well, not quite, but no doubt many RAG solutions will end up on the scrap heap of yet-another-knowledge-management system once folks either detune from the potentially endless vanilla responses (i.e. lacking useful insights about sales, finance, whatever) or the data-quality issues in the "real world" versus the blogosphere and Langchain examples.
I like to read "old" research papers because, as with the above quote, they often reveal lost wisdoms or amazing prescience via a different mindset. It is tuning into the alternative mindset where the value of reading old papers often lies.
For example, I recently re-read an old Lotfi Zadeh paper (of "fuzzy logic" fame) who claimed that words had fuzzy orbits, or something to that effect -- i.e. he was explaining embeddings.
To wit, this paper expounding upon Hamming's quote, describes the importance of using "auxiliary models" --
https://lnkd.in/gMvC8aud
-- by which the author, Arthur M. Geoffrion, means the use of a simpler model, with *interpretability* to explain a more complex one (meaning any mathematical model, not a neural network, nor, necessarily, a black box).
As the author puts it: "Derive from the auxiliary model a set of tentative hypotheses concerning the general behavior of the solution of the full model," by which he means the "Why".
Remarkably, even the author cites his inspiration from an even earlier paper about "repro-models" -- Meisel, W.S. and D.C. Collins, "Repro-Modeling: An Approach to Efficient Model Utilization and Interpretation," IEEE Trans, on Systems, Man, and Cybernetics, Vol. SMC-3, No. 4, July 1973.
Today, we might call them "surrogate models".

# Feed post number 176
"LANGUAGE MODELING IS COMPRESSION"
Well, of course, as are all predictive models. Such insights have been well known in the world of information theory, but this paper actually uses LLMs to measure compression (via arithmetic coding of the encoded sequences):
"For example, Chinchilla 70B, while trained primarily on text, compresses ImageNet patches to 43.4% and LibriSpeech samples to 16.4% of their raw size, beating domain-specific compressors like PNG (58.5%) or FLAC (30.3%), respectively"
https://lnkd.in/gevCUh7Q

# Feed post number 177
Excellent Resource
A reminder that the excellent book "Data Driven Science & Engineering (Machine Learning, Dynamical Systems, and Control)" is freely available as a PDF online (v1) --
https://lnkd.in/g2c4b4Zr
If, like me, you come from an engineering background, including control theory, then you will appreciate the engineering-centric approach.
Even if you don't have an engineering background and prefer a more classical statistical-learning approach to ML (only one of the topics included), the engineering-centric approach, especially the opening chapters on SVD, PCA etc, offer a very solid exposition of these techniques.
Going further, the concept of compressive sensing is well worth an introduction:
"All of data compression relies on sparsity, whereby a signal is represented more efficiently in terms of the sparse vector of coefficients in a generic transform basis, such as Fourier or wavelet bases. Recent fundamental advances in mathematics have turned this paradigm upside down. Instead of collecting a high-dimensional measurement and then compressing, it is now possible to acquire compressed measurements and solve for the sparsest high-dimensional signal that is consistent with the measurements"

# Feed post number 178
Real-time-izing the Organization: CDC and the Outbox Pattern
This is one of the better articles about the so-called "Outbox Pattern" in micro-services, driven by Change-Data Capture -- i.e. how do we really solve the problem of per-service databases and inter-service messaging, but with sufficient information hiding (de-coupling) to not end up in the 7th hell of orchestration.
It is written by
Gunnar Morling
who also has a great presentation on the same topic and how Debezium can play a role --
https://debezium.io/
https://lnkd.in/g9be_qiE

# Feed post number 180
Real-Time Distributed Data Science:
It is the future of the "AI org" along with recognizing the infotaxis nature of organizational progress.

# Feed post number 181
“Can we train neural networks cheaply? This paper gives evidence that we might be able to. We just don’t know how.”
The “surprising” similarity of any model in finding a very low dimensional manifold through high dimensional (pixel) space that is basically common to all models, regardless of architecture.

# Feed post number 182
This 👉 “If you are trying to evaluate an LLM that is supposed to *go beyond* the functionality of the auto-evaluator, then auto evaluation very obviously makes absolutely no sense.”

# Feed post number 184
Agents? Where are they? Do they work?
Andrew Ng is one of the giants in AI, but he also has a massive interest in its commercial success regardless of underlying realities. Has he jumped the shark?
For something to be agentive, it has to have agency. There are no signs of this in LLMs. Moreover, referencing CoT as a method of "reasoning" is false. It has been shown incapable of reasoning within in a more rigorous and classical sense of planning (e.g. ability to solve problems like Blocks World). Even then, any success is most likely mimicking/memorizing solutions to common planning examples.
Moreover, there is no chain of thought: only successive approximate searches in which errors can easily compound quickly. There is only the (strong) illusion of planning.
The lesson from self-driving "Level 5" is that the *actual* ability to respond to novel events (plan) is *all* that matters. Apparently, it cannot be done and there is little theory to suggest it could, as in some extension of PAC learning to place an upper bounds on handling rare events. (Although, note that there has been some attempt at "PAC for Rare Events" in the anomaly detection literature.)
Moreover, there is a giant Emperor's New Clothes psychosis, which is the tendency for human evaluators (mostly YouTube AI influencers) to gasp in awe at an LLM output, but without subjecting it to the rigors of real-world assessment (because many of the influencers have no actual use case) -- and just look at how brittle the demos are in LangChain docs. Slight perturbations cause rapid degradation.
When I systematically researched the ability for LLMs to plan vacations for a client, initial results look convincing, as does much of GPT-4's outputs. However, 100% of the "plans" had defects of various kinds, none of which could be obviously solved, especially within the open-ended arena of unconstrained chat. As with most real-world cases, the performance of LLMs bares almost no resemblance to benchmarks. Even attempts at needle-stack testing in RAG can soon reveal how brittle the configuration is, and this is the most-lauded, most-cited, presumably most refined, use case there is for LLMs.
Bench marks are like measuring the pressure of tires and equating good pressure with the ability to win a Formula One championship.
Many of these issues arise because many of the influencers have never built a product. Hence why they confuse a *nominal* "plan" (e.g. vacation agenda) with something a *real* user wants under *battle-ready* conditions. For those who have never watched usability studies (e.g. via
usertesting.com
), it is hard to appreciate how the "average" user is seemingly an alien species in an alien product world compared to the pristine conditions of a dev lab.

# Feed post number 185
So, the solution to LLM grounding is to use another index of the same materials: Google.
However, as one the commentators writes:
"verifies with google search" is quote-checking, not fact-checking.

# Feed post number 187
Human error!
“After examining Sender Policy Framework (SPF)-specific configurations for 673 .edu domains and 928 .com domains that were using either Google or Microsoft email servers along with third-party spam filters, the researchers found that 88% of Google-based email systems were bypassed, while 78% of Microsoft systems were.”

# Feed post number 188
Apple now experiencing same headwinds as Nike -- Chinese switching to Chinese brands.

# Feed post number 189
Problem Solving is Selecting the Right Problem (vs an Arbitrary One)...
[Random Friday Musing.]
This should be obvious, but, alas, it is not.
Whenever I am talking to someone who asks if I can solve a problem for them, I typically ask whether or not it's the right problem to be solved.
We find ourselves thrown into contexts and react as if we have no other vantage point from which to examine it differently. Have you ever struggled with one of those A or B choices whilst secretly thinking: why do I have to make this choice at all? We are often trapped by arbitrariness.
Arbitrariness can run so deep that if you pick away as its layers you end up with nothing, like the entire rationale for a context is missing.
I say this as I reflect upon Peloton and its massive demise into obscurity. We fell for the mantra: "The Netflix of Fitness". We fell for the arbitrary nature of Hollywood-style pitching versus substance. Pick away at such assumptions and you will find nothing -- just exercise bikes (that often break).
Higgs, of Higgs Boson fame, one of the most important scientists of our age, said it well when he claimed that he would not have survived, never mind thrived, in today's academic world that has succumbed to arbitrariness with its paper-mill mentality and the arbitrary god of resume-stuffing.
The malady is well explained by the work of Iain McGilchrist in his book: "The Matter with Things", a book that is anything but arbitrary.

# Feed post number 190
LLM Reasoning -- a giant hallucination?
I finally read this: "Can Large Language Models Reason and Plan?" --
https://lnkd.in/g_84qAgd
It starts with a kind of jaundiced tone, which is always a pity in a paper.
If you have to say something like "An LLM is just a [your favorite reduction]" then you are not saying anything useful. As I have to keep explaining, engineering is about specifications, not fads, phrases-du-jour or other word salads.
In my opinion, a french fry is actually an optimal ketch-up delivery vehicle, but it's still just a fried potato.
If an LLM can perform a function to a specification, then it doesn't matter if you label that function with the word "reasoning". In many cases, including my own usage of the term, it often means "making sense of the prompts in a domain-specific way that is congruent with what the user intended".
Granted, the author gives a more technical definition from the planning literature, but then why not start with that?
Usefully, the author says something that ought to be obvious to an engineer:
"When all we are looking for are abstract plans, such as “wedding plans,” with no intention of actually executing said plans directly, it is easy to confuse them for complete executable plans."
This is indeed correct and here I have to side with the author when reacting to the myriad recent claims about "LLM Agents". As I have shown and posted about, it is trivially easy to get an agent to fail by perturbing even slightly idealized examples -- e.g. like many in langchain's docs. As I demonstrated with structured queries, the example in langchain's docs (which is trained with only 5 records related to music, about which we can assume LLMs know quite a bit) fails easily. A slight change in the prompt caused the example code to hallucinate about a non-existent JSON property in the vector records.
Ditto any of the CoT examples -- they deteriorate rapidly with perturbations. So, here the author makes a strong point (about LLMs verifying LLMs): "...while for many computational tasks (e.g. those in class NP), the verification is often of lower complexity than generation, that fact doesn’t seem particularly relevant for LLMs which are generating (approximately retrieving) guesses, rather than actually solving the problem with *guarantees*."
There is a point at which the narrowing of the approximation (reduction in temperature) and addition of guard-rails (hard-coded rules) to achieve performance guarantees converts the LLM back into a "good old-fashion expert system" (to paraphrase some of the author's concluding remarks).
The author's other remark about the "leakage" of human intervention (to get the desired results) is an important one. I see this often in LLM and langchain demos -- the LLM is actually failing and the shortfall is being made up for by human fiddling and disguised as "prompt engineering" -- well, yes, except for the next time it fails and no human is there to notice.

# Feed post number 191
Great field example of how eventual-consistency can fail in the real world, as in Uber sending more than one driver to collect the same passenger due to database inconsistencies.
https://lnkd.in/gTn2xZuA

# Feed post number 192
Verganti’s book on Design-Driven Innovation explains well the role of designers as interpreters of meaning stemming from roots in architecture and furniture design. If nothing, it’s worth a read to understand the genius of Arad and Starck in designing furniture.
The diagram below is merely explaining some straw-person proposal, not any real insight about design. What computers *do* and what they mean has nothing to do with how they work, so learning computer science has no use.
A french cook does not need to know how grapes are grown to understand what wine does to enhance flavor.

# Feed post number 193
When ML is not really ML...
I have been studying a number of "AI" use cases in healthcare (mostly UK's NHS) where it is obvious that the solution is likely some rudimentary decision tree. This is not a problem -- the maxim of using the simplest model possible is well understood (and worth reaffirming by reading the excellent Facebook Field Guide to ML for those who are new to the field).
But the claims for the KPIs are absurdly unrealistic, like reducing missed appointments by 40%, blah blah.
I can guarantee that what is really happening is that the model has a dominant feature that swamps all others in importance and could easily have been predicted with the simplest of all ML tools: critical thinking, or heuristics, or plain old design of experiments (a long lost art, it seems).
Once the process has been subjected to examination, an obvious answer has arisen, only via the sledge-hammer of a decision tree vs common sense. The providers of the solution claim a massive victory and then use it to sell their wares to other unsuspecting healthcare providers. Lo and behold, if they are already somewhat optimized in their process management, then the model delivers a meagre lift, if any.
Undoubtedly, many GenAI solutions will also be used to solve problems that really didn't exist in the first place.

# Feed post number 194
I would be highly skeptical of any meaningful or conclusive patterns of deployment and operations in GenAI this early in the game with the tech still evolving rapidly.
Besides, centralized vs. de-centralized DataOps question has never been resolved with traditional ML/data products. Like many "patterns", they are just that -- patterns, for which the exceptions are more interesting -- i.e knowing when and why to adopt a certain approach.
Interested to get
Andy McMahon
's take re: GenAI in banking.

# Feed post number 195
This 👉 “Businesses don't have time to build custom benchmarks, as a result they've preferred large models that score well on general benchmarks, unfortunately this poorly correlates with use case success.”

# Feed post number 196
Vector Store Start-ups -- do they have a future?
Read any book about distributed systems, like Kleppman's classic: "Designing Data Intensive Applications" and you will know the depths, vagaries and nuances of making data-at-scale work.
Work on any serious search project and you will also know about the gazzillion nuances, optimization strategies and trade-offs in building a scalable performance search system. And, the moment you go "off piste", which is just about every production project outside of "vanilla search", and the technicalities of building a performant system for a specific set of queries, often with counter-productive constraints, is a non-trivial exercise.
One only has to try search on so many products today to see how difficult it is -- try Slack search, try LinkedIn search -- and you will soon get the idea.
Go deep into the bowels of Lucene and you will find a treasure-chest of well-honed indexing techniques.
Enter vector stores start-ups, many of them opportunistically jumping on the ANN bandwagon and offering ANN-search as a "product". These might be great if all you really want to do is send open-ended Qs to a doc store, but even that doesn't work very well out of the box -- e.g. see the myriad solid case studies from
Snorkel AI
about getting something to actually work using data-driven optimizations of LLM-backed services:
https://lnkd.in/gzqYWVZ8
Moreover, recent work has shown that in many instances, the tried-and-tested BM25 index does better than dense vectors. This might have something to do with the increasing light being shone upon the ineffectiveness of dense vectors to truly encode semantic similarity. One only has to consult the burgeoning field of embeddings-optimization literature to see how the whole "king + man - queen" excitement doesn't hold under many conditions. And, all one should really care about is the actual "X + Y - Z" of the use case, not some idealized benchmark or wow-factor demo.
Many critical search queries involve aggregations. These require non-trivial implementations in a distributed system, which is probably why some of the vector stores don't support them. If they do, I suspect they are challenging to tune via any indexing optionality.
On the other hand, systems like Lucene and Solr have been in the "real-world" indexing game for a long time and now offer dense vector support. If nothing else, it is worth paying attention to what these communities say and do in terms of technical developments, trying to handle the constraints of multiple-indexing methods in a single platform.
Anecdotally, one suspects that they have a better chance of making real-world search work versus start-ups whose only advantage is speed-to-market with an ANN solution. But I remain open-minded of course, as any engineer should. There is no flag-waving in engineering, although I might be old-school in that regard.

# Feed post number 197
One constant of the web era:
There will always be new database offerings.

# Feed post number 198
Thank you
Andy McMahon
for this contribution to the literature. Very interesting.
To build upon your work:
The value of bespoke RAG eval platforms seems often to be in "speed to market" of including various eval functions, many of which are still emerging. This is versus, say, custom eval metrics in a more mature MLOps framework like MLFlow which many orgs might be using already for non-LLM systems --
https://lnkd.in/ggVQkeak
Moreover, if one needs to write custom evals anyway, as is often the case for bespoke LLM solutions, then "out of the box" evals could be the equivalent of "templating/scaffolding" that many systems use to attract initial users versus the learning curve of a more complete approach (whatever it might be).
One also has to decide what matters most. In some solutions, like Phoenix via
Arize AI
, the "openinference" aspect (i.e. for open telemetry observability schemas) is a potential plus point, say, versus the convenience of out-of-the-box eval functions --
https://lnkd.in/gvuAG2Cr
In full confession: I did not closely read Tonic Validate docs, so I speak loosely here of alternatives.

# Feed post number 199
In a paper posted to arXiv, Amazon presents Chronos
“a family of pretrained time series models based on language model architectures. Like large language models or vision-language models, Chronos is a foundation model, which learns from large datasets how to produce general representations useful for a wide range of tasks.”

# Feed post number 200
“Ship it” and other memes
“It shouldn’t come as a surprise, but writing documentation is hard; in fact, writing anything in a clear and concise manner is hard.”
Yes, the gulf between “getting started” docs and decent documentation is quite telling. This is despite the well-researched data about the imperative of good documentation.
Worse than poor docs is the tendency of some dev products to assume that every user is some software guru into the latest and greatest software paradigms. This is not true. Simple deduction of the distribution of users’ abilities should make this patently obvious.
I was an author of one of the earliest developer surveys (for Vision Mobile) which revealed that the quality of docs was the #1 concern for any dev-facing product. It remains so today.

# Feed post number 201
GenAI Microservices
I've been working on LLMOps stuff and general architectures for distributed LLM-backed systems, having worked on many commercial and experimental AI systems for a very long while.
We have so many great platforms now, like Apache Pulsar, that can help with micro-services orchestration via various patterns. There are interesting developments like Temporal with its durable execution model --
https://lnkd.in/gSM5JBc5
-- i.e. a new step in the services stack evolution.
Ultimately, this is how any LLM-service is going to get built -- i.e. on robust micro-services components. The systematization of LLM-flows to bring real-time NLP to the enterprise service stack is where the future lies.
Some new possibilities will soon emerge. For example, when I helped design the experimental TelOS system, we were experimenting with how to inject natural language annotations and messages into the stack along semi-formal subject-predicate-object relationships, couched within an event-sourcing kind of pattern. This was all so we could apply NLP to business processes, not docs per se.
This orchestration of business systems around natural language is a whole different deal to querying static documents which are largely process- and state-free. The semantic layer of systems like DBT Semantic Flow will help with querying data flows, but this paradigm can be taken a lot further to liberally introduce semantics to many business objects besides data models (metrics definitions).
Ultimately, users do not want to grok the meaning of documents (per RAG), but rather of the actual business -- and in real-time!

# Feed post number 208
More AI hackery
Here the author confuses his own subjective experience of using a chabot with its objective reality. There are no quantum effects in an LLM at the level of coarse-graining that we use them and at which they operate.
The issue here is the subjective experience of dealing with a model whose training data is so unfathomably large that it escapes human intuition. But there is no need to then subscribe to mystical notions of consciousness and projections of imagined quantum effects. There are none.
Even if one subscribes, as I currently and pensively do, to the Complex nature of the model and language, it still isn’t clear that there are any genuinely emergent properties in the sense of new laws beyond those the model has learned. Whilst it’s tempting to think of the model as just a “word guessing” machine, this in itself is a reductionist account to begin with.

# Feed post number 209
RAG != "Hello World!"
Previously I quipped that RAG is the "Hello World" of GenAI, as in anyone can build one with minimal skill and try their hand at GenAI.
However, that's where the analogy abruptly ends.
Despite the continual demo-hype claims for this approach and the misleading ease of getting started, the "hello world" version is an unconstrained system. The moment you enter constraints, like getting a particular kind of result you seek from the system (versus any old result to any old questions), it can evolve into a complex engineering and even data science task including advanced methods like weak supervision if you have a very complex set of documents.
For those folks who like survey papers and long lists of RAG research projects, this repo might help.
It provides an abundance of insights that are surveyed in the accompanying paper:
https://lnkd.in/gnc_6RJH
https://lnkd.in/gHtuhSEr

# Feed post number 210
LLM Complexity -- and Cosmology!
Many of the so-called mysteries of LLMs, like "weird" learning curves (in this article called "grokking") are "explainable" (within limits) if the underlying system is viewed as being Complex, per the claims about language made by the SFI --
https://lnkd.in/guBB9RiE
Note that a high-level expectation of a Complex system is proposed by the maxim that only a system of equal or greater Complexity can match it. To wit, the L in LLM is a necessary condition and perhaps one that cannot be reduced to an imagined pithy set of symbolic operations (if only we knew the secret).
We see similar occurrences in nature, as in suddenly grokking something, like a meme that is obvious to some, but not others, even if explained. My kids explained a Ryan Gosling one to me a few times before the lightbulb went off some time later -- without any further explanation (external information input).
I believe that there will be bigger breakthroughs once we approach LLMs via a wider set of considerations within what one might call a cosmology of language, keeping in mind that the models are capturing data as if it all exists in a single point of time, which it does not -- memes being a prime example.
If the system is evolutionary (with a small e), then we can also expect that one of the driving forces is noise, as in a productive rather than nuisance property -- e.g. driving accidental/creative discovery in state space, akin to its role in Friston's Free Energy Principle.
Hence a more cosmological research program would be welcomed in the world of LLMs. Indeed, if we are to make them "more human" or "more aligned", then we are kidding ourselves if we think we can do so without a deeper understanding of how language works versus a set of "guard-rail" rules, which one suspects is rather like damming the dike.
Indeed, if the above maxim is true, then we will need a guard-rails system as Complex as the model itself, but in a way that exhibits an awareness that is potentially unachievable by human engineering.

# Feed post number 213
DSPy = "Ruby on Rails" for LLMs?
If you've been around the block, you will remember the RoR craze, propelled by the same notions propelling many of today's LLM tools.
The craze then was the use of "Scaffolding" to build a website "at the speed of thought" -- I confess, the original demo was impressive and swept many into the RoR orbit for a while.
The logic of RoR was the use of opinionated coding idioms and leaning in to ideas like DRY (Do not Repeat Yourself) via declarative coding paradigms, naming conventions (like singular to plural for collections etc.) -- plus the integral use of migrations etc.
Of course, some of this came from the OOP world where ideas like abstraction and encapsulation were cemented.
Having played with DSPy for a while, I see many of the same idiomatic biases in an attempt to unify a task (prompt engineering) into a programmatic framework.
I am not convinced that the metaphors of NN training (forward pass) and compilation are the best fit for the PE task. But it is certainly an interesting recipe that is seemingly gathering momentum by researchers in standardizing on the development of various PE approaches -- i.e.building custom DSPy "optimizers" instead of lots of one-off PE code.
Clearly, the more we go down the "compiler" route and hand over control to optimized logic and synthetic data creation, the more we will need to implement commensurate debugging tools. This was my first instinct with DSPy -- to poke beneath the covers and see what it did -- and why.
Time will tell if this particular approach will last or go the way of RoRs.

# Feed post number 214
Knowledge Graph -- but do you really need a Graph DB?
TL;DR -- Understand your use case first before jumping into bed with a Graph DB and regretting it later!
There is a lot of noise about knowledge graphs as a method of "grounding" LLM-backed query systems, be they agentive or not.
I have built or overseen many KG systems in the wild, using everything from Neo4j to Neptune to polyglot data fabrics as "observability" platforms aimed at mega-projects like
NEOM
-- plus a variety of search-related use cases.
A common "anti-pattern" is to proceed with adopting a Graph DB and then suddenly seeing everything in the domain as a graph model. This has happened before. Once upon a time, there was OWL and in the naughties we built mobile content systems using ontologies.
Then Berners-Lee mentioned "linked data" and some of us went all in on RDF. But it largely fizzled out, in part because various "Big Data" ideas (inc. cheap compute) made it easier to continue building systems that didn't require maintenance of ontologies. Ditto LLMs in many cases. Indeed, LLMs can provide the "graph-like glue" if you rethink the approach (e.g. Transformers4Rec --
https://lnkd.in/g6Y5_pZN
)
Often, the power needed from a graph-like query is limited to very few hops in a graph, which can then be implemented by other means. Or, graph-analysis techniques can be used offline to build a different kind of index (than a Graph DB) -- e.g. what the folks at Uber Eats did to maintain what is effectively a dictionary of "synonyms" ("kebab" = "[Greek|Lebanese|Mediterranean|etc] cuisine".
As an example, DynamoDB can be indexed using an adjacency-list pattern. Indeed, the options for indexing DDB are probably way more than those commonly understood at first glance --
https://lnkd.in/gSvMcFTP
For many apps, this will get you far and with a lot more flexibility (and typically lower cost) than adopting a fully blown Graph DB. Moreover, in an LLM-query scenario, the domain will make a huge difference. If the problem space is, say, relating entities to parents (like sub-products to products -- a common biz-logic structure), then a shallow graph might suffice for grounding the LLM.
A common use case for LLMs is semantic search, which has a whole plethora of considerations. However, if you are already using, say, Apache Solr, as your main storage element (into which you can now load dense vectors), then you can build a materialized (data-driven) graph as an alternative index pattern --
https://lnkd.in/g2Kgnp2M
My point here is that you need to understand your use case really well and perhaps think about modeling the queries first, or even waiting to collect data and use a data-driven approach, before jumping head-first into Graph DB land where there are certain commitments that need to be understood.

# Feed post number 216
Race to the bottom?
What if AI enables and kills everything all at once?
It is well known that the video streaming industry has, to use an English sports idiom: "scored an own goal". None of them make money and probably never will. Why? Essentially due to an uneven distribution of capital towards Netflix, allowing them to reconfigure the unit economics.
Many gains are leveraged in this fashion: uneven distribution of capital to pursue ideas and buy customers. Indeed, we see it in play right now with the alleged amount of ads being purchased by Temu, pushing up the price of ads and most likely leading, sooner or later, to the demise of Amazon.
So, in a world where, allegedly, AI can democratize venture building, then what is left? Indeed, what if the reliance upon "signaling" also breaks down, a favorite weapon of Silicon Valley ventures: success via association, name-dropping etc, keeping in mind that many of these signals also have value due to uneven distribution (of access and certain kinds of knowledge).
There are also signs (see previous posts -- and the rise of Temu), that brand differentiation is also in decline -- why pay $300 for sneakers made in the same factory as ones available for $30? Paying for "story" (Air Jordan) looks like it might die too, thanks to a rising consciousness of how the world works.
One thing that I do hope AI kills: the absurdity of middle-man economics, although much of it is due to de-leveling the playing field via legalized-corruption: aka favorable (to the in-group) legislation.

# Feed post number 217
Education is the Meta-crisis?
The one constant is how little education gets discussed (outside of education circles) as central to societal flourishing. The typical instinct is to lean in to entrepreneurial methods to solve everything. Indeed, education is now almost entirely framed within the measurements of employability.
Serious claims are made as to the cause of systems decay being linked to a decline in educational attainment in the broader sense of thinkers not being able to move up the cognitive tree to navigate and synthesize its many intertwined abstractions and axioms.
Creativity is almost expunged.
As Whitehead said in his book “The Aims of Education”, the dominance of teaching inert ideas (ticking boxes against some canon) is an anti-education pattern.
https://lnkd.in/gXwgNYVe
https://lnkd.in/gnAmB4pn

# Feed post number 218
Yet Another LLM Prompting Language Thingy: LMQL
There will be more to come.
https://lmql.ai/

# Feed post number 220
Very true.

# Feed post number 222
The "Solo" LLM Innovator (and GIST Embeddings):
Early on, there was a sinking feeling for many that the world of LLMs would be locked up by those with the $$$ budgets to do fancy research at the pre-training level with a swarm of GPUs within reach.
However, those of us trying to build real LLM apps versus the endless demo-ware deluge, noticed an opportunity: many things don't work IRL. As I said in a previous post: "No LLM app survives contact with a real use case."
At some point, it is entirely possible to hit the buffers of performance and have nowhere left to go without innovating, meaning the creation of some novel approach to get over the hump. Therein lies many opportunities for diligent and determined innovators who need not be part of some academic or Big Tech research term.
To wit, an interesting example is the invention of GIST embeddings by
Aivin Solatorio
at the World Bank whose use cases are related to the research, data and analytics of the Knowledge for Change Program --
https://lnkd.in/g3nJqD3s
Embeddings can be tuned by fine-tuning a pre-trained LLM using the principles of contrastive learning via architectures like siamese or triplet networks. If one attempts to dissect this process, various issues immediately become obvious. One issue, for example, is that using a cosine function for similarity runs into the usual problems (where the cosine gradient flattens out) known as distortion in the signal-proc world. Hence the invention of the UAE approach (that does well in the leader boards and provides a base model for GIST).
What Alvin noticed was that the random selection of negative samples (within a batch) was sub-optimal, so he utilized a guide model to exclude negative samples that were insufficiently negative (below some threshold for the batch). For some key benchmarks (esp. STS) his revised approach provided gains.
The main point is that this work was innovated solely by Aivin (of course, building upon others, as we all do) outside of the big-budget teams. Not only is it an inspiration for the wider community, but a testament to the many ways in which the world of LLMs is still open to innovation -- and is likely to remain so, GPT-5 or not.

# Feed post number 223
My Mother
Cruelly, my mother was made to wear a D (for dunce) hat in class, a small school near the center of Reading, UK. Her mother used to pipe the filling inside of biscuits, made by Huntley & Parmers (est 1822), once a large biscuit maker and employer of the town.
My mother left school at 12, as was common back then, and had no real education to speak of. She was good at sums.
Whilst my father introduced me to certain worlds, being the first importer of medical ultrasound machines into England, it was my mother who gave me space by listening to any sorts of wanderings of mine with a patient non-judgmental ear and heart. She also let me fix things around the home, despite electrocuting myself often: tumble-dryer maintenance and whatnot.
I didn't realize until later in life how instrumental she had been in allowing my curiosity to grow until I was able to pursue all manner of subjects, weird and wonderful. She never said: "what job is that good for?"
When I ordered Carl Sagan's Cosmos from WH Smith book club for 50p, she never questioned if a child could read such a book. Her only dismay was that I had inadvertently stuck her with a promise to buy books at full price every month for a year, not realizing that 50p was a promo. She let me keep the book rather than return it.
I still remember reading the book and being pleased as punch that I could say deoxyribonucleic acid, talking about which I probably "drove her around the bend" (as she would say). I can still picture in my mind's eye the "green soup" in a flask from one of the book's illustration plates (below). I look back and think that ordering that book set me on a certain path.
I have recently been reading the heavy works of Whiteheadian cosmology, part of which is about his fascination for where ideas come from. My mother used to say: "I don't know where you get your ideas from." Neither, it seems, do any of us. But somehow I think that mothers are involved.
On international women's day, I remember my mum (RIP) 💚

# Feed post number 226
There is only TOTAL throughput/cost/efficiency:
I read this paper about how to consider the efficiency of a large-scale ML model and it says: "To this end, we show that it may also be possible to, perhaps unknowingly, misrepresent a model’s efficiency by only reporting favorable cost indicators. " --
https://lnkd.in/gJdGtVWn
These folks are late to the party. If one was an engineer through the years of DSPs, RISC vs. CISC, and so on, then the notion of selective benchmarking is well understood.
As I pointed out in my first book (about mobile systems), in real-time computing (or whatever constraint), the total architecture of a system really matters, which ultimately is all about queuing theory. No point in leaving yourself a few milliseconds to process data on ultra-fast DSPs because of poorly designed data buffering.
As it happens, the Quantum Computer folks are learning this too -- i.e. many of the purported "quantum advantages" only exist once you have initialized the qubits. Many QC algos come with a caveat, something like: "loading the data obliterates the QA speed-up". (And we have no solution for loading the data.)

# Feed post number 227
Prompt Engineering written by LLMs:
It makes perfect sense that this approach be a viable means by which to illicit the best responses from LLMs.
Put simply (in very reductive fashion), LLMs have an unfathomable search space across not only natural languages, but many machine syntaxes. As such, they ought to be able to "reason" in ways beyond human performance.
One point I repeatedly make in advice given to those embarking upon the LLM journey inside of enterprises is that the scale of an LLM's semantic space is beyond human intuition. It is no wonder that OpenAI's prompting best practices always suggests to start with zero-shot strategies.
However, there comes a point where you just assume that the model, due to its vastness, will have some semantic power to apply to nearly any language-related problem. One need not play with prompts to discover this fact, but merely take it for granted. Once you jump this mental barrier, you can easily take the step towards using the LLM to "talk to itself" in whichever way turns out to be optimal, even if it involves, say, strings of emojis.

# Feed post number 228
Whitehead on Education
Read his Twelve Principles of Education and then do an honest accounting of how many of these you recognize in today's KPI-obsessed schooling.
This is not a flippant remark. There are many decent and recent scholarly studies that point to the origins of our modern maladies as society and leadership "getting dumber" over time. This itself is a complex set of ideas, including, of course, Iain McGilchrist's claims that modernity has self-selected for left-brain-ism, as laid out in his magnum opus The Master and His Emissary --
https://lnkd.in/gC6siKK5
Arguments more from a pedagogical stance are well made in Taylor-Gatto's book: Dumbing Us Down --
https://lnkd.in/gK2nh7M2
(Note: the attached article also contains link to Sir Ken Robinson's widely seen TED talk about Creativity and Education -- A MUST WATCH)
https://lnkd.in/gXrsdVAQ

# Feed post number 229
Friday Musing (Early): Discovery of Ideas and The Astrolabe and Mothers:
I am a keen student of discovery of ideas -- where do they come from and how do they take root. To be clear, this is a mystery at many levels. Of late, I have been drawn to the field of Process Philosophy --
https://lnkd.in/g-bfPqHG
It was "founded", as it were, by Alfred Whitehead, a British mathematician. He has a remarkable collection of essays in the book The Aims of Education, which can be a hard read (due to his level of erudition) but full of profundity.
Whitehead talks of "lures" -- that ideas are "out there" (as if first-class facets of the cosmos) and some of them "call us" in order to percolate through the frontier of discovery. Operating at the frontier of knowledge is a fascinating endeavor and it is a mistake to compress its formulation into what is sometimes called "the scientific method".
When it comes to the history of science and discovery and interchange of ideas, then I found the attached article intriguing. Also, in the current climate wherein it seems that certain world views are irreconcilable, I was intrigued by a sentence in the abstract: "The astrolabe—today preserved in the Fondazione Museo Miniscalchi-Erizzo—stands out as a testimony to the contacts and exchanges among Arabs, Jews and Europeans in the medieval and early modern periods."
I have a particular fondness for the astrolabe for I vividly recall a strong moment of epiphany as a child when I looked at the emerging twilight stars and became aware, so to speak, that there is a world -- indeed a cosmos -- to be discovered. Not long after, I purchased Carl Sagan's Cosmos for 50p via the WH Smith book club associates (for those who remember) unaware that I had signed up to buy books at full price thereafter, earning ire from my parents. On the other hand, my mother never once asked something like "why are you reading this nonsense" and provided, in many ways, the critical space I needed to explore ideas.

# Feed post number 230
One issue is calling anything related to LLMs a "jail-break". It is only an illusion that a model of unfathomable size and complexity can be delimited in the way supposed by the various alignment concepts that have been proposed.
For those unfamiliar with the scope of the unfathomabiity read the original LLM survey paper ("Challenges and Applications of Large Language Models") or my summary of it here (for enterprises) --
https://lnkd.in/g7FZgcXK
For those unfamiliar with the Complex (capital C) nature of the models and why that is a necessary feature of LLMs that explains their power, read the paper by Sante Fe Institute --
https://lnkd.in/guBB9RiE

# Feed post number 231
I recently reviewed an AI application involved in employability ranking—I had  similar concerns to those researched in this paper; namely covert racial bias. This would also present problems in fintech apps where disparate impact concerns often require diligence about bias-by-proxy. A classic example is zip-code deselection.

# Feed post number 232
Language = Complex ==> LLMs Complex:
I've posted about this before, but the Complex nature of language is worth noting if we are to have realistic expectations of "taming" LLMs.
There is a maxim in CT that Complex systems can only be met with equally Complex systems.
This paper by multiple authors at the Sante Fe Institute is quite illuminating.

# Feed post number 233
In engineering, all we have are specifications. If a fridge meets them, then I can use a fridge. If I need to rename it "cooling platform", then so be it.
If GPT-4 can be used for, say, sentiment analysis, then I can reduce it to the specified constraints and compare it with anything else that can meet them.
And not all specifications are the same. It is entirely possible for many apps to not really bother with fully-blown LLMOps and roll-up such things as drift into a standard observability stack (e.g. as an alarm).

# Feed post number 234
From NL to Vector Meta-Data Search: How Langchain Does it...
Many RAG use cases, demos and apps focus on the vector-embeddings part, assuming that the primary use case is to ask Qs whose answers can be found in the vectorized content.
However, for many use cases, users will want to ask meta questions, like "How many contracts signed this month included a premium buy-back clause for our X-bar product?" To say it plainly: there is no text chunk that contains this answer. Rather, there are chunks about X-bar buy-back clauses and then there are the number of contracts, obtained by counting "hits" (or thereabouts) whilst filtering on some date field.
We assume that the date is in a meta field. Note that finding appropriate dates inside of contracts can be a very hard problem not solvable using raw LLM power via prompting, but that's another discussion.
Of course, there is the whole issue of information architecture, as in where should such meta fields be stored, but let's assume they are in the vector store.
Anyway, I went under the hood to see how Langchain's Self-Query feature works --
https://lnkd.in/g-7i39jz
The deconstruction is summarized in the attached image.
Note that even with their canned example (of only 5 simple records about songs -- presumably a concept well understood by LLMs) it is very easy to make the LLM hallucinate non-existent meta fields.
For a more detailed deconstruction -- check out a sample notebook that I made --
https://lnkd.in/gPSPM9xr
I did this as part of a wider LLMOps investigation for a client (comparing MLflow with Phoenix from
Arize AI
), assessing how quickly the potential complexity of managing various artifacts would mushroom if you need to call libs that require customization (which I found necessary as the naive self-query approach didn't work well enough for my doc-processing use case).
Per my previous post, this is yet another example of where the default libs can quickly fail, beyond trivial or canned examples, making it necessary to go beneath the covers to figure *how* to modify the mechanics, never mind the actual work of devising, testing and evaluating potential solutions.
For sure, deconstructing a lib like Langchain is where a non-coder would quickly run into difficulties (thinking about recent claims that no one need learn how to code).

# Feed post number 235
Sora "learned physics"...?
We can have this debate endlessly if we fail to define terms. And some of those eager to debate it claim to have a deep understanding of science, yet don't seem aware of the centrality of defining terms.
Did Big Blue "learn chess"?
The meaning of the word "learn" in machine learning has a technical definition with corresponding mathematical ideas. Any 101 course on ML covers these and various performance bounds like Probably Approximately Correct (PAC) learning.
It has nothing to do with how a person learns and especially nothing to do with how a person discovers. Indeed, the subject of discovery (of ideas, insights etc) has no agreed-upon definition or mechanism to begin with. Entire philosophies exist in order to penetrate it within a broader cosmological sense.
A computer can play chess, as in convert input states (chess positions) into output states (moves) via optimal decision-making pathways ("strategy").
Sora can product images that approximately animate objects subject to physics, as in laws of motion, momentum, collisions, ray tracing etc.
Now, pixel-level diffusion is probably an inefficient approach versus learning ray tracing and the mechanics of the physics engine inside of Real Engine, but that's another story.
The claim that the laws of physics are "emergent" properties, as in coarse-graining, from the learning process ought to be subject to proper empirical and theoretical inquiry, not speculation. I have not seen such inquiries, although the folks at Stanford refuted the claims of emergence made for LLMs.

# Feed post number 236
RAG is the "Hello World!" of GenAI
...in all ways imaginable.

# Feed post number 237
GenAI: Beware Benchmarks and BS!
Benchmarks make LLMs look impressive, such as QA performance. However, as with ALL data science -- and per the adage that no battle plan survives contact with the enemy -- no LLM survives contact with the use case.
BS is similar to benchmarks: cherry-picked demos that don't scale to any use case *in production*. Heck, even the trivial 5-document example for Langchain self-query doesn't work if you stray from canned Qs. And, if you dare go look in the code (which you will have to in order to fix it) good luck if you're not, after all, a programmer. Langchain is written using "professional python" (for want of a better description) where you'll have to know about abstract base classes, visitor patterns, parsers (for query parsing), operator overrides etc.
Actually, Self Query looks like a good idea and makes a fun demo, but probably isn't required for many use cases where a more structured query approach could be learned by operatives -- or just good old fashioned UX filters. And the lack of basic features in many stores, like aggregations, makes them pointless for many typical collection-level queries. (As I have said before, established search engines with performant dense vector support are probably a better bet than the newbie vector stores.)
Even if you look closely at some of the impressive use cases where accuracy went from a useless to a magical number, the devil is in the details. And details is the right word because many such use cases are highly specialized and narrowed to a certain set of performance constraints -- e.g. mostly answering a limited range of questions for which the LLM system can be holistically tuned --
https://lnkd.in/g_bdZSMK
In some cases, a large set of optimization techniques is needed, including non-trivial programmatic labeling via weak supervision.
What are the key challenges?
As Descartes said: language ought not to work. Why? Because of infinite expressiveness. So, the further you push the NL paradigm, the more expansive the input conditions. Moreover, this includes negative conditions -- i.e. inputs that are outside the imagined sample of legitimate requests.
Of course, we are led to believe that LLMs can be used to evaluate LLMs, but what about the discovery that the "are you sure?" hack actually caused performance degradation. This isn't how you'd run an LLM eval, but you get the point -- many evals are a kind of more structured attempt at "are you sure".
Then there's the tool chain. Whilst the blossoming of AI tools, libs and demos is impressive, many of them are highly flimsy and don't actually work when pushed. Moreover, all the power is in the LLM (see above challenges).
Conclusion: Deploying LLMs can take time, effort and more expertise than first imagined.

# Feed post number 239
Friday musing...
This 👇
"Evolution makes problem-solving machines... they don't take their past experiences too seriously... they don't overtrain on their priors...they have to solve problems from scratch..."
https://lnkd.in/gqJAaEqi

# Feed post number 240
This 👇

# Feed post number 241
GPUs dead?!
We should hold off before jumping to this conclusion, thanks to the "break-through" of 1-bit quantization by Microsoft in pre-training LLMs, building on the work by BitNet --
https://lnkd.in/g5NVyQYa
-- which introduces a BitLinear model layer as a drop-in replacement for nn.Linear in PyTorch.
To be clear, these approaches are using quantization (extreme form) at training time, not as a post-training compression step. Although, note that the full precision of I/O embeddings is preserved in order to obtain sufficiently meaningful sampling.
As the authors of the original paper stated: "Furthermore, BitNet exhibits a scaling law akin to full-precision Transformers, suggesting its potential for effective scaling to even larger language models while maintaining efficiency and performance benefits."
But it is fascinating, especially if the system is merely moving from "vertical" to "horizontal" (serial) encoding, like say the use of Manchester-encoding in a single-bit stream -- i.e. encoding is distributed over symbols versus within symbols.
Such discoveries in signal processing are not new. But it does speak to the possibility of new kinds of architectures if representational learning can be encoded serially (and distributed over trees).
This method had already been explored with so-called "Binarized NNs", although mostly for ConvNets --
https://lnkd.in/gig5D4zd
That paper even references discretization experiments from 2014 -
https://lnkd.in/gg_yq-3p

# Feed post number 242
“AI-washing is everywhere”
I’m glad an expert analyst and industry observer
Alan Quayle
said that about Segment. I remember when the Segment “AI” billboards appeared in SF overnight—indeed, nearly all the SF billboards suddenly said AI against companies hitherto not really known for AI features.
Of course, some rushed to include the lamest of all AI features, namely some kind of text box with a GenAI option. Invariably, these just produce lame content with zero to marginally above-zero value. As many have since learned, the distance between out-of-the-box GenAI “me too” features and real value-add product foundations can be deceptively large.
I strongly suspect many such features don’t get serious attention from customers, other than those also looking to AI-wash their own affairs.
AI-washing applies to even bigger orgs than Segment, with some orgs claiming that they’ve always been an AI company because there’s some AI somewhere in the product stack. But that’s as absurd and meaningless as saying “we’re a search company” because there’s a search widget on the website.

# Feed post number 243
LLMOps Observability -- Phoenix
It's NOT possible to get far with LLM apps without robust LLMOps end to end. LLM evaluation can be tricky and requires good tooling to both keep track of what's happening, which can get complex pretty quickly (esp. with chaining) and how well it's happening.
The Phoenix lib from
Arize AI
has some cool features and kind of what MLflow is missing in terms of a more polished attempt at making evals useful to a developer.
(That said, one thing many of these frameworks are missing is the recognition of the rise of Business Technologies (aka "Citizen Developers" or "Citizen Technologists") who are often the main instigators and experimenters inside of enterprises (as opposed to devs in smaller orgs). The docs are often too poor (esp. MLflow, which also doesn't keep up with OpenAI SDK releases -- likely the main API used by experimenters)).
Phoenix and MLflow offer similar idioms, as in feeding a columnar set of instrumentation points that could be consumed as, say, a Pandas DF. Evals can then be run over target columns -- e.g. to compare generated responses with any available ground truth column(s).
The Arize folks have also open-sourced OpenInference --
https://lnkd.in/gHpREETV
It is a set of observability tools compatible with the OpenTelemetry framework. You can see an example of an LLM span ("unit of work") here --
https://lnkd.in/gQSUg3te
As with other evals packages, Phoenix provides a number of (experimental) built-in LLM-eval routines, such as a QA evaluator (e.g. for RAG). Phoenix docs are quite good in that you can immediately see and play with the prompt -- e.g.  summarization here:
https://lnkd.in/g4Ym3zvU
They support a number of LLMs for eval, including, of course, GPT-4 (often a power-house for evals) via OpenAI or Azure. Naturally, Vertex is also supported along with Bedrock. Interestingly, they also support the DSPy model.
All of the models come with instrumentation plug-ins via the aforementioned OpenInference framework.
Last, but not least, Phoenix comes with a UI that allows exploration of traces, datasets and evals etc, including clustering.

# Feed post number 244
Are you sure? LLM: Apparently not sir!
Interesting research in the drop of accuracy from asking an LLM to validate its own outputs.
Yet another "strange" behavior that shows what kind of beast we are dealing with in the LLM world.

# Feed post number 245
Hype or just hard problem?
In fairness to Apple -- they never hyped driverless cars. They don't hype anything. They (usually) deliver great products.
Usually = those products are ready for prime-time, although the Vision Pro is possibly an exception. That would not be the first time -- remember the Apple Newton?
What we do know is that Apple has developed leading spatial computing using consumer-ready lidar and similar technologies.
The eye-tracking and AR alignment in the VP is astounding. I dare say this could also be used in vehicular applications.
As many have written about, with good evidence, self-driving requires "Level 5" AI that is simply not ready. It can be seen as an inverse-AI problem, as in the "out of sample" distribution is potentially all that matters because the end goal is not to drive, but rather not to crash.

# Feed post number 246
ChatExtract -- Mine Materials Data from Research Papers
This is a wonderful example of a sophisticated prompting-only strategy to accelerate research-paper mining.
There are literally 100s of such examples by now of how adopting a "programmatic" mindset for prompting strategies can produce quite remarkable results.
One of the reasons that many lay users remain unaware of this potential is that they fail, as do we all, to understand how large the datasets are that the LLMs have "read" during training. We have no intuitions for it.
If we were to liken this to programming, it's as if Python has a whole universe of hidden functions that we don't know about, like "extract_contract_date".
(Well, as it happens, date extraction can still be very tricky, even for GPT-4, and is one area where LLMs need a push. But, guess what? You can use LLMs to do that to via programmatic labeling functions.)
Due to the size of the models, there are an untold number of interpretive skills that the models might be cajoled into performing via prompting.
As an anecdote, I managed to design -- down to the chemical shopping list -- a duplicate of a famous fragrance worn by Cary Grant: the same model took me from aroma descriptions ("citrus", "woody")  to fragrance terminology ("top notes", "sillage", "Fougère") to scent design to chemical composition!
Of course, we must reign in our excitement somewhat. Sooner, or later (often sooner), the prompt fails and then the abstraction of "chatting to your data" becomes increasingly more programmatic in nature until, for some use cases, the ability to read papers about the latest instruction fine-tuning techniques becomes desirable.

# Feed post number 247
RAG data sizing and pricing...
Many folks are surprised when their RAG vector store seems to balloon -- e.g. running ChromaDB locally. This is because they mentally count data sizes using tokens, not vectors.
Moreover, vector stores don't just store vectors. They index them using a multitude of techniques like the Hierarchical Navigable Small Worlds approach -- i.e. the index also takes up disk space.
Tokens are deceptive because they are dimensionless -- a single token could be a range of byte sizes.
Moreover, the embeddings process is producing a single vector ("centroid") for a chunk of text. In some cases, the vector size will exceed the byte-size of the text.
Take the embeddings-small model for OpenAI, it has 1536 dimensions of representational space. Each dimension is a floating point number, so we end up with 12344 bytes per vector. A single string, like a question, could be just a few bytes by comparison. Whereas a large chunk of text (up to the ~8100 token limit) could be >12344 bytes.
For embeddings pricing, it is worth checking the OpenAI pricing guide, which is summarized for a per-document heuristic in the image attached.
Pinecone has a nice pricing tool to estimate costs of vector storage for your use case --
https://lnkd.in/gAfvdAzJ
But, to optimize embeddings storage, note the availability in the recent OpenAI embeddings API to pass in a dimensions parameter --
https://lnkd.in/g8kVzeym
This is because they now support the Matryoshka Representation Learning, which is a nested embeddings aperture. In many use cases, the lower dimensional vector will contain sufficient representational significance to still be useful. However, yet again it is all the more reason to set up a systematic LLMOps pipeline and environment to experiment with the many, many, parameters and permutations available for LLM system optimization, or what I have been calling Holistic Tuning -- .
https://lnkd.in/g8UdtPXz
Here's the Matryoshka Representation Learning paper --
https://lnkd.in/gHj4SV-W
Note that embeddings sizing and pruning can even be tuned to a use case, like recommenders --
https://lnkd.in/gWwkwh-j

# Feed post number 248
AI Vulnerabilities
Among other things, the report includes a major vulnerability in Triton Inference Server, as frequently offered by many strategic NVidia partners (besides Nvidia themselves).
Along with other vulnerabilities in the report, these indicate the increasing need to take red-teaming off AI systems seriously, especially considering the probabilistic nature of LLMs and the large attack surface with many blind spots.

# Feed post number 249
Well, it’s a strawman argument perhaps—I doubt he’s met even a single person who thinks they can’t use ChatGPT because of the term “prompt engineering”.
People cook french cuisine without being French or classically trained.
But there’s definitely a technique called prompt engineering in the programming of LLM-backed systems. It can even get highly sophisticated, like
https://lnkd.in/dd45TCai

# Feed post number 250
Another classical defeat of quantum computing:
“we can perform a classical simulation that is significantly more accurate and precise than the results obtained from the quantum processor”

# Feed post number 251
How large can you make a synthetic dataset?
Turns out pretty huge.

# Feed post number 252
LLMOps Tools? -- Prompt Engineering? -- Opportunities?
Any recommendations on best-in-class PE LLMOps tool chains?
The problem-space is methodical prompt-engineering eval as part of a wider set of "Holistic Tuning" tasks (see my previous post --
https://lnkd.in/g8UdtPXz
) within the rubric of a holistic AIOps, or LLMOps, context.
I've done lots of dev-time PE experiments, typically via a hand-crafted setup, albeit quite methodical -- I often find it easier to organize workflow in my own way initially before wasting time on tool selection and learning curves, never mind tooling idioms.
I am exploring ideal approaches for building this into the wider LLMOps pipeline and environment. The client is actually an Azure shop, but I have yet to explore fully the Azure LLMOps tool chain --
https://lnkd.in/dncDneks
I have been using the LLM features of MLFlow (self-hosted v2.10), but I find them to be very mediocre as if "we ought to include some LLMOps PE stuff" --
https://lnkd.in/d_bpxJgi
The experimental Prompt Engineering UI tool allows for evaluating a prompt via a UI panel and then submitting it as a run (i.e. to log the config to the tracking server). Admittedly, it abstracts away some of the LLMOps via the deployment server (unified API to LLMs specified via config.yaml), but that seems to mostly only be useful for securing credentials (i.e. managing keys).
The back and forth between the UI and running code could be made more seamless (e.g. with a code generator, or some such). Seems like a very bare bones product. Hence it signals the opportunities for specialists in this area.
That said, I am only talking about PE LLMOps. Putting this into a much bigger project with multiple optimization and evaluation approaches is a whole other level of complexity.
Any recommendations on PE LLMOps best practices and tool chains welcomed.

# Feed post number 254
AI -- There is no silver-bullet, (except for flashy demos)...
This is similar to findings via
Snorkel AI
and anyone building actual-enterprise systems vs. benchmarks or demos -- no silver-bullet. You need a composite of approaches, often under the rubric of what I have been calling "Holistic Tuning".
But the other actual-enterprise finding is as
Databricks
calls it in their MLFlow docs: “Determining the right model, prompt, or service that aligns with a project’s needs is no small feat"
And this can be tricky because there's often no trivially obvious search-grid to find an optimal, or even usable, system aligned with production-ready specifications. And many developers are fairly clueless about how to test their systems, hence why we see so many mistakes surfacing via IRL deployments (DPD, Air Canada, Chevrolet etc etc). Some seem to rely upon smoke testing with no real rigor to cross the hurdle from that into production readiness.

# Feed post number 255
Art as Knowing
https://lnkd.in/ggwp_ZSs
I have posted several times about the work of Alva Noë (e.g. Strange Tools) and his stance of "knowing" via art. It is at the heart of why GenAI "picture making" has only a superficial relationship to art. That said, we should not be overly dismissive of its potential for discovery. I have played with Midjourney in modes of discovery versus modes of production, but with only anecdotal insights.
More recently, I was reading the paper "Art and Psychological Well-Being: Linking the Brain to the Aesthetic Emotion" --
https://lnkd.in/gak7cD2f
This was in relation to music I'm attempting to compose for a video artwork by
James Pricer
, a genius in "computational art" --
https://lnkd.in/gwe679Eq
Inspired by how often Dr Levin, in his seminal work in morphogenesis, often notes the role of his graphic artist in interpreting abstract ideas, I am revisiting Jame's artwork with new eyes. The particular work I have discussed with him before is his CERN LIGO interpretation. CERN has an arts program, but I do not know enough to say if it helped with the science.
I remember the anecdote of the invention of silicon wafer fabrication (doping and etching), allegedly invented by an engineer in the "mind state" of art, manipulating oils on a canvas.
In my methodological field of interest (innovation labs), I am currently exploring an integrative R&D model that makes art, music and "world-building" (fiction) core to discovery, not tangential. It is part of a blueprint for "Cathedral Research" -- multi-generational projects -- I am conducting for a foundation.
As a basis, I have been exploring the dense field of Process Philosophy, which has its roots in Cosmology. I also study the work of mystics who made claims about the vital nature of the imagination.
(FYI - the deeper connection with Dr Levin's work is the existence of vital aesthetic forms (morph in morphogenesis) not unlike Platonic forms. In Process Philosophy, there is a concept of forms as "lures" from the future.)
Along the way, I recently bumped into work by my former colleague
Ivy Ross
and her associate
Susan Magsamen
via the article below, which is explored further in their recent book: "Your Brain on Art" --
https://lnkd.in/gwYxZ6JZ
It is fascinating to see the work of Susan's lab in the field of neuroaesthetics (perhaps similar to work I previously cited by Chatterjee, author of "The Aesthetic Brain"), a field that inspired our work in
art.com
labs in which we attempted to develop "computational aesthetics".
Via Susan's lab, I was excited to discover Impact Thinking, a "a consensus framework that applies rigorous brain science research methods to arts, architecture and music interventions by engaging a broad and multidisciplinary team" --
https://lnkd.in/gi5B-amV

# Feed post number 257
Objections of the form "Sora is not learning physics" are already well discussed in the "debate" between Chomsky and Norvig.
From a philosophical POV, it is not discovering the laws of physics, but simulating them, albeit indirectly through a hierarchy of representation.
This could be construed as an "emergent property", although I think it is still contentious to do so (and was refuted by a key Stanford paper). Along the way, the emergence idea was used as conjecture for the success of the scaling hypothesis.
That said, a legitimate perspective on the efficacy of Foundation Models is that they are Complex systems and hence fulfilling a principle in CT that Complexity can only be met with Complexity. If we believe, as some have argued, that language (and aesthetic expression) are a Complex system, then this argument makes sense.

# Feed post number 260
Open Source AI is Uniquely Dangerous, Say What?
IEEE Spectrum ran oppositional posts for and against open-source GenAI.
For --
https://lnkd.in/gKuQ9k7D
Against --
https://lnkd.in/gF2ytssQ
I will only comment on the "against" and welcome views, especially those of
Ajit Jaokar
who is involved in EU-related work.
The upshot of the against-argument is that we need gate-keepers, although gate-keepers never say that. The usual talking points are invoked: election meddling and protection of women (from deep fake exploitation). These are important, but we still need to justify positions with arguments, not scare tactics.
The talking point of terrorism is also invoked, as it has been for decades now to justify any draconian policy one chooses. One would like to see scholarly work about the actual risks of making chemical weapons.
A whole raft of seemingly draconian regulations are proposed, including legal obligations whose framing is such that no one without deep pockets (for lawyers) would want to venture into AI.
The framing of the article poses open source as oppositional to secure, which is the moniker used to described closed models. In general, these are not opposites. For example, Linux is highly secure *because* it is open source. One has to assume that such choice of language is also deliberate, or a lame attempt to avoid saying: "gate-kept" versus "not gate-kept".
In order to present arguments, other than talking-point scare stories, we'd need to explore use cases and then roll them up into assumptions about societal benefit, from economics to civility.
The argument about stifling of innovation is very real. It deserves proper scholarship, of which there is plenty. And the author ought to be obliged to consider it given his publicly-funded privileges. The proposed solution of invoking public-funded AI infrastructure is laudable, perhaps, but there is no discussion of how this actually might work.
It is probably the case that the bulk of LLM use cases will involve reasoning about documents. The economic value of this will be substantial.
A critical essential characteristic of LLMs is their non-determinism, which ultimately will affect the performance ceiling. It is critical that research and innovation can take place and it seems likely that the only way to succeed is via open source, which is not a mere output of a process, but central to the process itself.
This calls for urgent scholarship, as in the role of LLMs and GenAI in innovation at multiple scales of economic activity.

# Feed post number 262
Deep fakes attending zoom calls?
Yes, it's been happening for years 😂

# Feed post number 263
Slides from my previous post...
https://lnkd.in/gz4j5nJd
Apologies, but the slide link on my linked article for the backprop videos and slides was broken, thanks for pointing it out
Ajit Jaokar
Well, thankfully I noticed a few MathML export errors, so I fixed them first before uploading here.

# Feed post number 264
𝐗𝐞𝐧𝐨𝐛𝐨𝐭𝐬: 𝐓𝐡𝐞 𝐑𝐞𝐚𝐥 𝐅𝐮𝐭𝐮𝐫𝐞 𝐨𝐟 𝐀𝐈
(Two critical papers you *must* read.)
For my Friday musing, I point to Michael Levin, who will be known to many of you I am sure. I am somewhat late to his party, but it took me a while to lean into his dense body of work.
I should say that Dr Levin's work turned up for me via a multidisciplinary group I attend. This will not surprise those of you who know his work, which spans philosophy to computational biology to bio-hacking and his (in)famous Xenobots (biological "computers" made of frog cells) -- 🐸
I put "computers" in quotes because, well, this is where philosophy enters...
One of Levin's achievements is to rethink categories and plot them on a continuum, like machine --> controller --> organism --> mind.
Indeed, he redefines "mind", or rather "intelligence" via a cybernetics-inspired approach (see diagram), but in a way that makes intelligence, or competences, more empirically useful.
His philosophical work is not tangental or merely a display of polymathy in the way that, say, Chomsky pursues philosophy of science, political theory and linguistics with no real connection between them.
It arises from a deep study of morphogenesis and trying to figure out where do anatomical shapes come from -- how do some cells arrange themselves into a finger and others into an eye, and how do they know when to stop?
At its limits, some aspect of "shape-ness" might well exist via "natural law" in the way that math does, as in "where does math come from?"
This is why he has participated in many debates with others at the intersection of disciplines, such as Dr Segall of California Institute of Integrated Studies --
https://www.ciis.edu/
He compares Levin's works to the process philosophy of Whitehead, which he depicts as an "evolutionized" reading of Plato (and connects with primordial shapes, as in Platonic solids). Levin's work suggests that a top-down causation is a real and a testable phenomenon --
https://lnkd.in/gsAP3AUY
I stress that the importance of philosophy in his work is not mere thought experiment. His goal is always to find experiments.
Well, I hope I have whetted your appetite. As you penetrate his works, it becomes clear that we have the intellectual and experimental basis for approaches to AI that we are not seeing from the "Godfathers" who have somewhat topped out in their marvelous pursuit of gradient descent.
With AI, it is clearly time for something new -- and this could be it.
The papers:
The Computational Boundary of a “Self”: Developmental Bioelectricity Drives Multicellularity and Scale-Free Cognition --
https://lnkd.in/gVg8AZ8d
Technological Approach to Mind Everywhere: An Experimentally-Grounded Framework for Understanding Diverse Bodies and Minds --
https://lnkd.in/gVg8AZ8d

# Feed post number 265
X is *NOT* all you Need :)
I think we need to stop with the "is all you need" claims.
As everyone doing this stuff for real (as in enterprise vs. benchmarks), we know that the opposite is true. X is not all you need. You need a lot more, like "Holistic Tuning" of many components, potentially --
https://lnkd.in/g8UdtPXz
It has parallels to the inference-time voting mention in the ByteDance paper that proposes a method called Reinforced Fine-Tuning (ReFT) whereby once the model is "warmed up" using SFT, an RL loop takes over by sampling from a number of reasoning paths --
https://lnkd.in/gHXQPK-h
Note that I did point out the potential of ensemble (via weak supervision) at inference time to improve agent performance --
https://lnkd.in/gbrF_283

# Feed post number 266
Magic of Back Propagation: Autograd
I still see a lot of deep-learning explainers being pasted, so thought to add my minor contribution.
Why yet another explanation?
I go end-to-end (via 3 relatively short videos) from the first-principles of function approximation through simplified algebra and differential calculus to how Pytorch does it under the hood (aka Autograd) with *very simple* illustrated examples that are easier to follow --
https://lnkd.in/gdBDiGEf
I use simple metaphors of "sliders" to visually indicate the concept of parameters (weights) and mostly avoid the complexities of fully-blown perceptron equations until the very last minute (to avoid overly long diff. calc. chaining).
Much mystique surrounds backprop with folks often saying how it was "invented" like some magical breakthrough. However, it's a fairly obvious computational trick. The autograd part (how backprop is implemented) is also  easy to follow, if appropriately simplified. You can kind of toy with it via a pedagogical version (called "autodidactic"), although I would say this version still takes some figuring out if you're new to the idea --
https://lnkd.in/gKCDBmAg
Autograd had already been "invented" in applied math circles outside of the deep learning community and kind of went unnoticed for many years, so the fable goes, although I know that some labs (like Motorola Research, Chicago) were doing it prior to open publication of the famous Hinton paper.
That's because such computational tricks (and others, like Viterbi) were already a necessity for signal processing with limited compute. Moreover, backprop itself has a reputation for being "re-invented", but this is to be expected given how apparent the solution is once moving from theory to implementation.

# Feed post number 268
Why Kant Your LLM Reason?
This is great work (post below) of Geng et al., attempting to improve LLM reasoning solutions  via inspiration from Kantian transcendental philosophy.
Such "framework" approaches towards improving reasoning for enterprise use cases might be valuable. However, other solutions could be more pertinent. (Note that the experimental results of Geng's paper are "not very strong", per reviews in open review.)
This is not a commentary upon their work, whose novelty is highly commendable, but rather proposal of an alternative, *possibly* more reliable consideration.
In the Kantian sense, reasoning, as discussed in their paper, although flattened out to a less esoteric set of steps, is part of a wider philosophical venture.
It should not be confused with the much narrower and parochial meaning of “reasoning” within an enterprise co-pilot use case.
Within an engineering context, there is, or ought to be, a specification of what "reasoning" entails, along with constraints and test cases that span desired and outlier behaviors (sometimes called “fault conditions”).
Fault conditions are hard to specify in advance, given the non-deterministic (creative) use of language. But let's ignore that for this post.
Whatever the expected outputs are against test-case inputs are what defines the meaning of reasoning. Indeed, one need not use that word at all.
A narrower consideration of tasks can facilitate efforts to decompose the skill required to solve them into sub-skills. This is the approach taken by the team who devised Skill-IT, which takes an approach to "curriculum learning" in LMs --
https://lnkd.in/gr8uBdVb
This consists of two pieces. First, a method for automatically clustering data points into skills and computing dependencies between them. Second, a method for automatically generating skill curricula from the dependency graph.
Put simply, they find strategies for decomposing learning tasks in ordered sub-tasks, the same way a learner of linear equations would need to ascend the skills of addition, multiplication, algebra, linear equations (roughly speaking).
This allows the generation of skills for supervised fine-tuning with the hope that teaching an LLM to learn sub-skills makes it better at solving the main skill.
So, if the "reasoning" task is associated with, say, identifying tactical sales opportunities in complex solutions selling, then the first step is to break this down into sub-skills. An example might be: how to identify current contract conditions as suitable for approaching the client (e.g. end of service dates).
Naturally, such sub-skills can be combined in a weak-supervision sense, but that is not the main point. The point is that by instruction-tuning on the sub-tasks, the model performs the main task ("reasoning") much better. Moreover, the Skill-IT technique allows for the generation of the sub-skill instruction-training data automatically from an unstructured corpus.

# Feed post number 269
Pastiche Products, like Pastiche Art, like Pianos
I find many digital products are so meh, or even "meta" -- the usual copycat features via borrowed UX libs and motifs, assembled with great care for the craft, but not so much care for the customer. Pixel-perfect boredom.
I agree with
Andrew Ebling
that the joy of discovering apps has eroded. Somehow, we have broken the link with Apple's original creative-user milieu in which tools with novel UIs, like Bryce, were routinely built.
Data-driven decision making will only go so far, notwithstanding the *big lie* that much of what gets claimed as product-driven growth comes with a large CAC that is, somehow, factored out.
I spent years researching art whilst running an AI/R&D innovation lab for art-dot-com, who used to be the biggest seller of reproduction art.
During explorations into computational aesthetics, we discovered an interesting tongue-in-cheek study about what makes the ideal artwork according to common American taste.
Vitaly Komar and Alexander Melamid, two Russian-American artists, in collaboration with a market research firm, conducted a project called the "People's Choice" to create a pastiche of common American tastes in art. They incorporated the ingredients into an example image below.
This is emblematic of the kind of pastiche products obtained via catering for common tastes.
I had the pleasure of working with thinkers who would join me in attempting to rethink product interfaces for art __discovery__, combining science, intuition, customer research and magical thinking. They built entirely new interfaces from first-principles (even down to "the metal") versus rehashing existing component libs.
As with all my R&D projects, I try to focus the team on how to think, not what to think. Alas, many product teams seem to be the reverse. (Although, one cannot be blamed for the education system's core failing.)
It was amusing that much hand waving and even mouth-noises were used in the lab to describe ideas and yet somehow interpreted into meaningful designs and PoCs. And much humor -- I am a big believer in it as a creative force.
I was reminded of this experience by a recent discussion with a young full-stack engineer in which I tried to explain -- using noises and hand waving -- a radically new UI concept for a tool I have been thinking about: a tool for world-building.
Despite the many criticisms, even quite serious ones, of UX concepts seen in sci-fi shows, they are, in fact, a world unto themselves, often evoking a mood and sense of mystique, which is exactly what I am looking to achieve. The objective is to make the pleasure of using the tool a primary objective. Many world-building tools, as in, say, novel-writing apparatus, are designed with publishing in mind (in its broadest sense). Given that most novels remain incomplete, I wonder if this is like the many abandoned pianos whose players couldn't get past the tedium of scales and arpeggios.

# Feed post number 271
Thinking Anew (And Why not to Read Biz Books)
(A Friday Musing.)
If, like me, you strive to find news ways of thinking about the world, both for the joy of it and to inform new professional outlooks, then I highly recommend everything Iain McGilchrist has to say. He is a genius.
I consider him perhaps The Philosopher King of our time.
Be warned that there are no "cliff notes" of his ideas, as indeed there could and should not be. Many of his contentions are deeply profound and novel, digging from a deep well of multidisciplinary expertise and dazzling erudition.
His latest book, The Matter With Things, is a two-volume masterpiece spanning 1500 pages.
At the heart of his work lies a stunning claim: that we have misunderstood reality, in large part due to a dominance of left-brain thinking. Yes, hemispheric differences is indeed a real thing, although not what most of us, myself included, probably thought it was during its dismissal and disappearance from pop-psychology.
Which brings me to a related point, which is the gross distortion of many great ideas via the packaging of best-selling airport books. You might have noticed a common formula: "Here's some (behavioral) insight backed by modern science".
However, pick away at the threads of the "modern science" claims and they quickly fall apart. But the content never mattered. What mattered to the authors and the marketeers was the implied meaning of "backed by modern science", as in this is a *real* recipe for success, a *proven* one, arrived at by *infallible* thinking worthy of Descartes. Once you understand McGilchrist, you will see the many flaws in this line of thinking.
As an opener to McGilchrist's style and depth of thought, I link to one of his talks, this one about Opposites. It is a profound set of remarks that I believe extend into so many human outlooks and projects, including the design of products (you'll have to work to find that connection if you're not familiar with the history of design and its relationships with systems thinking).
Enjoy!
https://lnkd.in/ga4iVM_d

# Feed post number 272
Killer Apps in Vision Pros and Quantum Computers: A Reversal of Priorities
Yesterday, after a 10-year hiatus from listening to tech podcasts, and looking for some "light listening" whilst driving for a few hours, I revisited an old favorite: TWIT -- This Week In Tech (Episode 964) --
https://lnkd.in/g9dbxnVz
I mostly wanted to hear the word "on tech pundit street" about Vision Pro, allegedly at 140-160K of orders (>$600M) in the US.
I've always had a deep fascination with "augmented" modes of computation, having conducted PhD research into this field (3D compression using AI).
As everyone knows, the tipping point for AR/VR still hasn't arrived. The metaverse came and fizzled, again. Facebook rebranded to Meta 😳
Folks still ask what is the killer app? The TWIT guys talked about the killer app for VP, which, according to them, does not yet exist.
But, the history of VR has nothing to do with killer apps and everything to do with killer hardware or, as we might say, killer platforms.
For me, hyper-scale UX will be a breakthrough moment from which users will not want to return once experienced (yes, the whole McLuhan "fish don't know about water till beached" scenario, which I used to talk about ad nauseam). Apparently, VP is a step in that direction, so I look forward to trying.
The mistaken common belief was that VR would ride into our lives atop of Moore's Law. But optics does not follow Moore's Law. This has always been the key problem. (And, yes, low-power compute and battery tech, the latter also outside of Moore's Law, at least directly.)
Supposedly, reliable reviewers of the VP claim that there is a sense in which VP is the killer hardware that can make meaningful VR/AR apps possible. Hence the expectation that this initial release is largely about seeding developers with a cool product.
What's the connection with quantum computing? QC also does not ride Moore's Law. Indeed, it is an attempt to escape it.
But it isn't even clear that we are on any power curve yet. There are many QC technologies and techniques, not one -- it's not like everyone is innovating around TTL transistors and NAND gates. In a way, the QC guys are still trying to figure out what the "TTL transistor" is, as in scalable physical qubits.
In this case, the killer app is perhaps already known, as in a wide range of applications where the so-called quantum advantage could yield enormous breakthroughs in downstream tasks, including quantum simulation.
That said, many of these QA use cases often come with significant caveats (as in still having to load data using classic means whose processing time then swamps the throughput and threatens to nullify the QA). At the same time, breakthroughs in classic computer threaten to render many AI advantages moot. This is certainly the position of Meta who don't have a stake in QC. I guess they won't be re-branding anytime soon then.

# Feed post number 273
The Paradox of Need: Food or Water?

# Feed post number 274
Using graphs for entity alignment is absolutely a power move.
I did substantial research for a UK consumer start-up aiming to reboot the venue-reviews space (a kind of "Yelp 5.0").
Naturally, much of the content will be about food, which is a fascinating exercise in taxonomies.
My work involved approaches to semantic search and NL querying, which remains a hard problem when you want to return results (like venues) that are properly *ranked*.
Anyway, the use of graphs alongside LLMs is an absolute must in such cases.

# Feed post number 275
ServiceNow making bold statements that GenAI was a major driver of NNACV.
It would be great to see a deep-dive analysis of the claim by those closer to the business. For example, SN got into LLM pre-training via their collaboration on Starcoder.
One might compare this stance with how Bloomberg got into FM production via BloombergGPT. Yet, there's plenty of case studies now in highly accurate fin-doc processing achieved via holistic fine-tuning -- see my recent post on enterprise LLMs --
https://lnkd.in/g_bdZSMK
In other words, you don't need to pre-train a model like Bloomberg did. Indeed, this is generally the received wisdom at this moment in time, with a heavy emphasis upon data-centric AI, not model-centric. Players like SnorkelAI seem to get valuable performance for their clients using this approach whilst staying on the leading edge of various tuning strategies, which they bundle into what I call holistic tuning --
https://lnkd.in/g_bdZSMK
Starcoder once topped the coding leaderboard, but, like all leaderboards, today's winner is tomorrow's loser and we see lots of much better models topping the charts --
https://lnkd.in/g4qvsV4v
But the real question is to what extent did SN's journey into coding models enable them to innovate better? To what extent did it impact these revenue claims?
It is still not clear in many cases where highly effective product execution outweighs in-house technical contributions. There are many rumors that SN technical debt is high due to their complex roadmap with lots of legacy instances in the field.
Additionally, how did their data strategy play out given that SN instances are individually hosted for their clients. In other words, where is the training data coming from for their GenAI product execution?

# Feed post number 276
Quantum Advantage —> Quantum Skepticism
I spent a few months in the QC, or, more precisely, QAI weeds.
It’s an exciting field for two reasons:
1. The entirely different basis for physical computation than transistors—very interesting stuff like you’d expect: entanglement and superposition, plus novel algorithmic mapping to quantum effects, like interference.
2. Nearly every paper on QAI ends with some statement about how many problems are still to be solved—exciting because it’s fertile!
On the other hand, every paper also has some seemingly daunting caveat. Like the famous Grover’s Algorithm (which is a beautiful invention) for unsorted search in root-N time. Only problem is how you set up the qubits with the data, most likely from a classical system. The loading swamps the process and the quantum advantage is potentially lost 😞
Most of these caveats remain unsolved.
Moreover, the QA only arrives in most cases when you have upwards of a million qubits available to get the levels of parallelism that make QC so fast.
Today’s machines are ~1000 qubits.
The recent quantum excitement seems to be joy riding the GenAI hype wave. There’s this impression that we’ve broken some mystical computational barrier that gives the impression of unprecedented technological acceleration in all directions.
For those unfamiliar with GenAI’s origins, they are somewhat accidental. No one imagined that the trivially posed task of guessing missing words would scale to such semantic depths. Once discovered, then the pathway to progress was, and is, a fairly well known one: optimization. Of course, it’s fairly true to say that the whole AI community is now working on the same problem, so optimization is happening rapidly due to concentrated effort in a world of open source and liberated knowledge.
This is not true of QCs. There are relatively few working on it, even if well funded in some cases.
And there has been no breakthrough yet of the scalable-adoptable kind.
We aren’t dealing with computation, which in the classical world is highly optimized, most incredibly so via manufacturing and the miracle of Moore’s Law. We’re dealing with hard engineering on new frontiers where there are no engineering laws to exploit so readily and with scale.
Meta claims not to have a QC program because they think there’s still no sign of a pending breakthrough. The attached article, by a notable QC physicist says the same.
I don’t know.

# Feed post number 277
I used Tesseract extensively during my tenure at Prosper, tackling fin-doc processing pipelines. It worked well, once the image was suitably prepared. The dirty secret of many OCR solutions is that the grew out of the flatbed scanner context and so weren't configured to handle degraded inputs.
In our case, we allowed users to photograph documents on their mobiles and send them in without the aid of an app. This resulted in many degraded images with warping, rotation, noisy backgrounds, and so on.
I implemented from scratch a version of Microsoft's Stroke-Width-Transform (SWT) and adapted it specifically to recognize prominent text patterns in fin-docs, including checks. In the wider set-up, it enabled the flow to be rotation-invariant and handle quite significant warp. After all, warped characters still have some degree of statistical regularity.
Finally, once the image was prepared and key areas extracted, the job was handed over to Tesseract (which was locally trained on specific fonts). We used post-processing to generate confidence in certain strings, like names, because these were paramount to identification (related to Know Your Customer - KYC).
It would be interesting to play with this label studio tool for sure, if I had time.
Moreover, if I had time to revisit this project, I would probably push harder in transfer-learning with data augmentation to see how well the degradation use cases could be accommodated by visual transformers.

# Feed post number 278
Success with Enterprise LLMs
Inspired by my own projects and confirmation of anecdotal insights via substantially more examples via Snorkel AI's recent seminar, I share a brief guide to adopting LLMs in the enterprise.
Key ideas:
-- Enterprise co-pilots need complex domain-specific reasoning
-- Out of the box models don't get very far, but valuable starting point
-- Prompt engineering hits a performance limit (although surprisingly high in some cases -- e.g. Microsoft medical study)
-- Future of Enterprise AI is lots of models with different tunings
-- Model tuning should ideally be holistic per task, combining knowledge with instructional and human alignment, esp. to avoid degradations
-- Tuning requires data + functions + expertise + systematic methods
-- Functions can include use of LLMs as powerful feature builders
-- LLMs can open the door to new types of integration with unstructured data
-- RAG is not a solution to the above, only a means to extend reach
-- Out of box, RAG can perform really badly
-- Holistic tuning, including RAG, needs different LLM tunings (e.g. embeddings, instructional, alignment etc.)
-- Instructional tuning instrumental to reasoning competence, but requires data that is hard to come by. Newer techniques can synthesize from unstructured domain knowledge bases.
-- Non-holistic tuning can cause system vulnerabilities (e.g. Zulu hack)
-- Lots of ways to achieve instructional tuning -- constant innovation
-- Eventually, enterprise will need 100s of co-pilots, each carefully tuned. The pathway to scalable success in this regard remains unclear

# Feed post number 279
Using Chatbots to Learn via Micro-Learning & Self-Determination Theory
In product design, there are always bodies of research and theory that can inform an approach. In this regard, behavioral science is increasingly useful, especially when backed with empirical data.
For a start-up, I recently explored the groundwork for how to achieve patient-centric services using AI. Many parts of care involve learning, such as learning about a disease or learning how to cope with a disease or learning how to care for someone with a disease.
We have at our disposal GenAI. An instant use-case hit was natural language chat (NLC).
But what is NLC, exactly?
A feature of NLC that we have all experienced is in-the-moment exploration of a subject, whether it's "How do I make a spicy sauce for fish?" or "What did Heidegger mean by Dasein?" or "What's the code to load a CSV?"
These are examples of micro-learning (MiL) – small, focussed, asynchronous and learner-centered learning moments accessible via self-serve mechanisms. Of course, it's the miracle of ChatGPT.
It turns out that deliberate pursuit of MiL can boost learning in a number of ways --
https://lnkd.in/gTBiRduw
At the same time, learning involves motivation, especially where there's no extrinsic pressure, which is often the case in self-directed healthcare learning scenarios.
In behavioral science, Self Determination Theory suggests three psychological needs that satisfy intrinsic motivation: autonomy, competence, and relatedness (Ryan & Deci, 2000) --
https://lnkd.in/gnCaM5-g
)
An interesting study into the achievement of MiL (for students) and SDT via chatbots can be found in (Yin et al., 2021) --
https://lnkd.in/gY5hcPuD
This paper nicely brings together these areas of knowledge into a cohesive experimental study with some great insights.
My work has been an early attempt to codify this into a scalable technical/product approach for self-advocacy in healthcare, which is a valuable step in patient-centric care.
But MiL can be used in many scenarios. For example, it is effective in coaching sales teams versus making them attend courses or seminars, yet surprisingly underutilized. A key benefit is that a salesperson can engage with a learning moment "in the moment", such as following an awkward sales call or brushing up on the core messages of a product's GTM, etc.
If you'd like to know more about AI and MiL/STD, feel free to link and message me.

# Feed post number 280
Artificial Flowers aren’t Real Flowers
(A late-Friday musing.)
On this, we can all agree. That said, most (all?) of us couldn’t really define what a flower is to a satisfactory degree of veridicality.
I wonder why so many folks debate the meaning of intelligence, not artificial.
If we define an acceptable artifice, then we have something.
And we’re free to define the artifice however we want, unlike intelligence.
I’m not convinced that many modern commentators, myself included, have the philosophical insight and clarity to define intelligence to the extent that the meta debate can be properly conducted.
But many of us can define an artifice that meets whatever parochial needs it must.
What gets discussed here regarding intelligence, or dumbness, barely passes for punditry. Some dare to begin their declarations with “I think that intelligence is…” as if the “I” is remotely qualified.
Having recently read some of Michael Levin’s papers on morphogenesis and “collective intelligence”, I realize that the mystery of intelligence is even greater than first imagined.

# Feed post number 281
Frontiers of Information and the Critical Path?
In my first role as a research engineer in designing DSP solutions for Motorola, I learned the concept of the critical path. I saw one -- a long red chain of boxes on a giant Pert/Gantt chart. I thought it was a thing of beauty, if I am honest.
A maxim, at the time, was that planning resolution should be calibrated to desired accuracy -- i.e. if you want to deliver something to the nearest week, then you can't plan monthly, else you'll miss the target.
Later on, the uncertainty in path estimation and task completion, and -- of course, task meaning -- was acknowledged and along came various time-chunking iterative methods, like Agile.
The start-up world went all-in on critical paths because, as was noticed eventually, most paths ended up being longer than the time to sustainable revenue.
Concurrently, we increasingly use automation and other productivity tools to speed tasks up. GenAI is now one of them.
In regards to its adoption in some strategic sense, then surely one has to think about the nature of the critical path.
Say we can all code "at the speed of thought" or 10x. Then what? What will be the nature of the blocks that constitute the critical path?
In some sense, we already know this. They are often mental blocks. And the worst kind are due to uncertainty. This is an information problem, but its nature is not obvious for it is locked up in the ravels of Complexity.
My lay theory is that many of the overheads in orgs that give rise to so-called bureaucracy are collective-intelligence (CI) responses to uncertainty.
However, it is not a purely biological CI. It includes mechanisms, like software. Within the framing of morphogenesis, these hybrid intelligences do not have the right mechanisms to modulate growth. Hence any part of the system never knows when to stop growing.
There is no reason to assume that GenAI makes any difference. Therefore, we should still expect projects to reach the size of whatever mechanism that exists in markets to constrain projects. There is still some boundary condition for whatever constitutes the fundamental nature of the critical path. We do not escape it with GenAI. Indeed, I strongly suspect the emergence of instabilities (chaos) that will mean faster death of some CIs via the introduction of GenAI.

# Feed post number 282
Data "Storytelling" is a metaphor. No data "tells" a story. Only people can tell tales.
But, for that matter, "reporting" is also a metaphor. Dashboards do not report, nor are they reports per se. (Of course, let's leave aside that many dashboards do not report anything. They sit on a disk drive and never get seen, largely because they are not treated as products with some sense of outcome and measurement of effectiveness over a lifecycle.)
In either case, these metaphorical accounts are supposed to mean that the dashboard contains some structure that allows it to convey information to the user.
What is a story? Let's just stick with Aristotle's Poetics and the concept of beginning, middle and end. This means structure that takes a reader on a journey towards some kind of resolution. We can only hope that dashboards provide catharsis 😀
A report also contains structure.
Well, no use in splitting hairs here, so let's focus on the real issue.
All dashboards should have a design. And, despite claims to the contrary (due to the decline of Ideo) these designs can be teased out via design thinking, or similar exercises in aligning an object with its intended use as valued by its users.
I see no reason why a dashboard could not tell a story, as in:
In the beginning we had this sales campaign and it went through these stages in our EMEA region and we ended up with an increase in sales.
Sadly, such clarity is often hard to come by because most dashboards I have  seen inside of enterprises lack any conscious design effort. Construction is taken to mean a very lazy selection of widgets. People often make dashboards rather than design them.
Of course, there is a sense in which as Powerpoint has tended towards the elevation of form over content, so has Tableau. It will be exciting to see how far GenAI can help users bridge the gap between meaningful content and appropriate form.
One important lesson from stories is this -- when writing a book, authors are advised not to write the book about something, but for someone. If only dashboard makers stuck to this simple maxim.

# Feed post number 283
Collaborative Research Paper Authoring
Via membership of a multi-disciplinary science foundation, I recently discovered this online tool for collaborative paper authoring.
https://typst.app/

# Feed post number 284
Dense Vector DBs Obsolete?
Having done plenty of work in various semantic search use cases, this opinion of the CEO of SingleStore (MemSQL) always seemed like a real prospect to me:
“What we believe is that a vector-only database is a feature set and not a database that is going to be around in probably two maximum three years, because it adds a further layer of complexity in your AI stack and what you want to have an effective gen AI stack is to take complexity out, not add further complexity.”

# Feed post number 286
Using GPT to Generate Questions for Teaching:
I recently reviewed the following paper with a student who, prior to attending college, had clocked many hours as a voluntary exhibits guide at
Chabot Space & Science Center
--
https://lnkd.in/gX9BEMpH
The initial ambition of the student was to help volunteers (who are many, both at the center and at similar locales throughout the US) to build chatbots for the visiting children to continue interacting with exhibits outside of the center.
His initial research was concerned with how to make the experience engaging for children. This was a priority given that his goal was to bring science alive versus turning it into a "teaching moment" per se. He experimented with turning exhibits into characters with a personality.
The next challenge was how to embed a "teaching experience" versus merely infotainment. The referenced paper seemed useful as it showed a path for using LLMs to exploit Bloom's Taxonomy for learning.
The paper studied a multi-shot prompting technique to see how well GPT could formulate relevant and teachable questions aligned with Bloom's taxonomy. The paper evaluated the outputs versus human outputs in terms of (real) teacher responses. Conclusions were favorable towards the use of generated questions.
Following OpenAI's best practices however, our experiments attempted zero-shot and single-shot analysis prior to replicating the multi-shot approach.
Zero-shot did  indeed prove to be useful. We compared it to the multi-shot examples using the data in the paper --
https://lnkd.in/gk98RA9Z
a
Although only anecdotal, zero shot seemed useful as a baseline, although it often mis-classified questions.
Notably, as we ascended the taxonomy, the outputs tended to drift from the provided text towards LLM-provided knowledge. However, this is to be expected. Ascending the hierarchy is to increase abstraction, or deepen semantics vs literal recitation of data.
However, this could be construed as useful, as in prompting the teacher for new ideas about content and also forcing the student to research beyond the provided text.
cc:
Ajit Jaokar
Ahmer Mumtaz

# Feed post number 287
This is misguided advice from an investment banker 👎
Of course STEM will always be a valuable skill.
If we look right now at the frontiers of so many STEM fields, such as bio-pharmaceuticals, complexity, digital therapeutics, bio-enhancing, robotics, and so on, there is a dire shortage of people with the right STEM skills to penetrate these subjects.
We need people with all kinds of skill, including judgement and empathy.
AI will only enhance STEM, not replace it.
"Coding" is, at its core, instructing machines to do something. As the machines grow rapidly in complexity (not complication), new types of coding will become necessary. We are already seeing this in some fields where students are seeing the benefits of learning formal-proof tools like Lean as a new "mode" of intellectual exploration.
If we put credence, as I tend to, in the arguments of Iain McGilchrist, we need more "whole-brain" thinkers. Indeed, there is a credible argument that a overuse of GenAI in predominantly left-brained systems could accelerate their collapse due to an excess of literalism, or superficiality.

# Feed post number 288
Making an LLM Reason Better in Your Enterprise
Enterprise GenAI folks -- pay attention 👇
As I have posted about before, many enterprise use cases, to be valuable, require domain-specific reasoning (DSR) -- e.g. reasoning about sales in a large enterprise sales org.
As I also pointed out, *evaluating* the reasoning capabilities is probably a larger problem -- and one beyond most in-house AI folks tinkering with RAG etc.
In the first instance, we need reliable methods to achieve DSR. One method is supervised fine-tuning (SFT). This means we show a pre-trained model examples of how we want to reason. These examples are better if structured in a way amenable to fine-tuning. One such structure is Chain of Through (CoT), which means structuring examples in some kind of sequence -- i.e. problem decomposition. Here's one of the original examples showing how to decompose an arithmetic problem --
https://lnkd.in/gWH9wFNF
Within sales, for example, we might find ways to decompose how to identify whether a customer might be a suitable prospect for a solution offering. Perhaps one of the decomposed steps is related to region, another to type of customer, another to size of wallet, and so on. In other words, we are annotating the "thought process" a human might take with a certain line of reasoning.
There are various ways to improve this process. For example, if there is an element of data querying involved, it might help to embed SQL code into the CoT decomposition.
The challenge with SFT is generating enough examples of the various lines.
To this end, ByteDance propose a method called Reinforced Fine-Tuning (ReFT) whereby once the model is "warmed up" using SFT, an RL loop takes over by sampling from a number of reasoning paths. The policy rewards paths whose outputs are closest to the ground truth (in the training data) --
https://lnkd.in/gHXQPK-h
The researchers found that ReFT achieved better generalization for a specific domain, which in their case was mathematical reasoning (e.g. via MathQA dataset etc.)
I believe this approach could be extended at inference time using weak-supervision techniques, especially since the paper mentions inference-level boosting via majority voting.

# Feed post number 289
When to Trust GPT?
A recent article asks: "Emerging trends: When can users trust GPT, and when should they intervene?" --
https://lnkd.in/g7taFhmj
By Kenneth Church, the article discusses the use and trustworthiness of large language models like GPT, especially in educational settings.
It highlights the ease of use and highly attractive superficial credibility of LLM outputs, but cautions against their potential for spreading misinformation, because "It is easier to believe ChatGPT than to be skeptical. Fact-checking and web search are too much trouble".
This was evaluated anecdotally by asking students to write an essay. They were free to use ChatGPT and were warned extensively about hallucinations. Nonetheless: "many of the student essays contained misinformation that the students should have fact-checked".
The implications for the enterprise should be obvious. Indeed, for the first time I recently got to watch enterprise users try ChatGPT for a variety of ad-hoc use cases, such as slide summarization, extracting key ideas, evaluating responses for content type, etc.
Notably, most of the content being analyzed was NOT written by the users. It was 3rd-party content, subject to analyses for which ChatGPT was being evaluated.
In __no case__ were hallucinations absent. They were often buried, requiring scrutiny to spot. Some were ludicrous and potentially embarrassing.
Hence I advised, strongly, to make sure to check ALL outputs for errors.
Of course, I feared what this article demonstrates: despite knowing to be on the lookout for errors, many users won't.
Per the article's thrust, there are good reasons to skip checking. In the case of a student, this might be for the sake of getting an assignment done on time. However, time pressures are typically way more severe in the workplace along with other pressures to "hand in" work in order to tick various boxes.
The added challenge of fact-checking during "GPT crunching" can be substantial -- it is hard to spot errors, especially if they are buried in the outputs and obscured by what looks like plausible syntax. After all, LLMs almost never make syntax errors.
Church's suggestion: "... there need to be prohibitively high penalties in the court of public opinion for trafficking in misinformation."
Sadly, in many an enterprise, trafficking in bullsh*t is how many survive and some even thrive. Imposing such penalties might be problematic.
In his conclusion, Church ends with " If others are conservative with the truth and with fact-checking, then we will become conservative with belief. Credibility may disappear before chat bots go away."
In some cases, I fear there will be a tipping point of synthetic text "contamination" in some enterprise flows, sufficient to cause irrevocable degradation.

# Feed post number 290
For enterprise, the limitations of multi-turn, or even just accuracy, are significant for many use cases.
In business process automation, we’ve become accustomed to using deterministic APIs. Indeed, one can argue that the progress in the API economy has been in making APIs more performant over time.
The major issue with agents is that there are no obvious ways to detect many of the classes of errors, nor fix them.  Moreover, looking at the methods for evaluating LLMs, it’s clear that testing is very hard and in many cases has low coverage.
For consumer use, a human is always in the loop for any of these GPTs, so the margin for error is orders of magnitude more relaxed.

# Feed post number 291
Can an LLM tell your personality via chat? [Spoiler: Yes, and no.]
(Was that really a spoiler?)
Whilst working for a fintech org, I conducted R&D into the computational evaluation of personality (via psychometry) and attempted correlation with spending profiles. This was motivated by a teaser I had read from Visa wherein they claimed to have found such correlations.
It was therefore of interest to find a paper from earlier this year: "How Well Can an AI Chatbot Infer Personality? Examining Psychometric Properties of Machine-Inferred Personality Scores" --
https://lnkd.in/gTANve-b
It presents an analysis of the capabilities of AI chatbots in inferring personality traits via various psychometric properties of machine-inferred scores, including reliability, validity, and generalizability.
The paper found acceptable reliability in the personality scores inferred by the AI chatbot at both domain (i.e. the general personality "type", per the Big 5 of Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism) and facet levels -- more specific and nuanced aspects per domain
It also noted good convergent validity (it measured what it was supposed to in terms of traits) but relatively poorer discriminant validity, as in it could confuse traits.
Interestingly, the study found that machine-inferred scores showed some incremental validity over self-reported scores in certain analyses, indicating the potential of AI in capturing nuances of personality not reflected in traditional assessments.
Of course, given the potentially sensitive nature of attempting to utilize personality profiles, there are legitimate concerns about the interpretability and transparency of models. Whilst AI chatbots *could* potentially be a valuable tool in personality assessment, careful consideration and ongoing evaluation of their use is essential.

# Feed post number 295
A more formal study of the role that code has to play in agent-based LLM systems.
“This study has illuminated how code is essential to turning LLMs into intelligent agents and opens up a world of possibilities beyond traditional language comprehension.”

# Feed post number 296
Interesting work in training LLMs for semantics that are embedded in a document’s spatial and textual context.

# Feed post number 297
AI-Powered Teaching
I gave a brief NLP-introduction tutorial to an undergrad math student. It was socratic for the most part, trying to draw the student into offering possible solutions and explanations before assisting. The idea was to chart a path from words to numbers to algorithms, ending with predictions.
The socratic approach proved to be valuable as it allowed the student to make fundamental  connections with previous topics (e.g. probability). What I noticed is that this process helped the student to appreciate those topics in terms of "first principles" (e.g. word frequencies in a dictionary lead to probability distributions).
The lesson unfolded entirely ad-hoc using Excalidraw -
https://lnkd.in/gUEQAtdc
It  was the first time I used ChatGPT to assist in such a discussion, mostly to generate code samples on the fly (pasted into Collab). It offered a distinct advantage -- switching from math to code views of the same problem.
What I found useful was the ability to riff in different directions depending upon where the discussion was getting stuck, interesting -- or boring!
As an example, it became easier to cement the concept of embeddings by talking about sets of food items rather than words in the abstract. This also gave rise to the more general appreciation of set-to-set kinds of operations in deep learning.
It was also useful to jump into the OpenAI playground in legacy completion mode to peek at the underlying probabilities, watching them change as we altered the (con)text.
I got the idea to use Excalidraw after watching some YouTubers who use it for on-the-fly illustrations. For me, the hand-written style and simplicity somehow makes it easier to "think visually". Of course, I am sure other whiteboard tools are just as good.

# Feed post number 298
AI in Hospitality and Travel
Great table of technology-transformation potential. Notice how the strongest opportunities lean towards AI. Of course, surveys like this need to be taken with a pinch of salt, but can be directionally useful.
Taken from
https://lnkd.in/grSV_MTf

# Feed post number 301
Are Most Mental Models Just Stories?
Maybe this is the heuristic of all heuristics 😁 -- or we might call it the "Feynman Model". As we know, he advised thinkers to let go of labels or satisfying anecdotes, in preference of scrutinizing first principles, or the essence of a thing. Actually, he went further, which is to *question* the nature of a thing (given what quantum weirdness had shown).
The labels can lead to shaping of ideas in ways that can end up merely serving the label rather than illuminating any underlying principles.
There is a whole industry -- popular biz books -- built upon conjuring "mental models" from "laws" and turning them into life-changing principles by exploiting our love of stories. Many of them turn out to have no real basis.
Consider "Tipping Point", which is often recycled -- e.g. Paul Graham calls it "Thresholds" in his attempt to coin a term: "Superlinear". The common trick is to take a correlation, pretend it's a law and then present it as causation, or some kind of actionable insight.
Sudden change is akin to a phase change, which can be explained in physics via renormalization boundaries. The application of such principles to market dynamics or social changes, however, is largely metaphorical. Even when it is attributed to "emergence", it isn't clear if this is really happening, or is another metaphor for "things at scale". There is a tendency to use Complexity Theory ideas incorrectly as metaphors to explain, well, complex (or complicated) things.
The same applies to many of the models listed here. Take Butterfly Effect. A better interpretation might be "leverage" in Systems Thinking -- i.e. whatever intervention ("leverage point") you think of via exercising of common sense is almost always the wrong one. So the business lesson, if there is one, might be to let go of commonsense when considering leverage points.
Of course, this will also get compared with "measurement" principles in quantum mechanics and turned into yet another metaphor. I'm surprised there's no "Schrodinger's Cat" mental model or business law 😀
Wait -- I spoke too soon --
https://lnkd.in/gvUvaFeU
In general, many of the principles seen in physics and the natural world are only available as metaphors in business. They offer no predictive or actionable power. Some of them are not laws at all, like Occam's Razor, which has been shown via substantial criticisms not to hold under conditions that matter.
Perhaps the time has come to let go of heuristics. After all, they seek to facilitate decisions by letting go of information in order to for problems to fit the limited mind. Maybe in the AI age, our minds have expanded? Of course, I am being metaphorical, although not entirely flippant.

# Feed post number 303
AI: Finding Topological Structure
With AI, we attempt to find structure in data. One way is to posit a kind of structural template and see if it can be fitted to the data. This could include topology, which we can think of as geometric shapes that remain intact even if you stretch or deform them.
A related example is knowledge graphs, which have become increasingly popular as a means to "ground" AI with facts via nodes and their relationships. But here we mean the broader concept of Topological Data Analysis (TDA) which can be used to find and then characterize topological structure within data. Thanks to word embeddings, the technique can be used to find topology in textual data at various levels of hierarchy -- sentence to document.
A fairly recent summary is presented in these tutorial slides --
https://lnkd.in/gN2umZWH
Of course, a fascinating field of study right now is LLMs and variations upon the theme of Transformers. To that end, I found this paper quite illuminating:
https://lnkd.in/gmryvR7x
It proposes the "Persformer" where Pers here is in reference to Persistent Diagrams (see image) which are used to represent the persistence of various topological features across different scales.
The paper addresses how to operate directly upon PDs given that they are *not* vectors, but topologies -- i.e. not the typical encoding (in Hilbert space) expected by a Transformer.
What I find exciting about Persformer is the use of Saliency Maps (SM) that quantify the importance of PD points for a given classification task. This can be exploited for interpretability. I would love to revisit previous attempts of mine to classify artworks via "styleness" (within a décor context).
Per the authors: "To the best of our knowledge, this is the first method for interpretable topological machine learning that allows us to highlight the topological features that matter the most to Persformer on specific tasks"
It was built using a Pytorch lib called Giotto Deep --
https://lnkd.in/gEy7YYpw

# Feed post number 304
Recycled Punditry Doesn't Get Us Very Far...
We worry about AI condensing knowledge into shallow plateaus of "understanding".
Meanwhile, papers get published and end up in click-bait magazines like Business "Insider." The bait gets recycled here on LI with meanings condensed into a single quotation and, most likely, GPT-mangled summarizations. Posters weigh in with flimsy remarks absent of any context or task in mind.
And on it goes.
A common issue is confusing technical meanings with philosophical ones, or, as Aristotle so often complained, a failure to define terms.
A common confusion is the term *understanding*.
In philosophy of mind it has many meanings, all of which have been debated for millennia. In engineering, as in its inclusion in the phrase Natural Language Understanding, it has a technical definition localized to the specification of the system.
For example, if we press A1 on a vending machine, we hope that the machine "understands" that we want the product sitting in bay A1 -- a bag of peanuts, or whatever. If we draw a line on a graph to separate classes of points and program it into code, we can say, if we want, that the code "understands" classes. If we ask ChatGPT what is the capital of France, we hope it "understands" the instruction and meaning sufficiently well to give us Paris.
We can only interpret the meaning of "generalization" (which has technical meanings, although often not a very helpful ones) via some task. If we can use a LLM to tell us the sentiment of a passage of text and it does so with sufficient accuracy against our test data and specification, we can, if we so choose, *label* our system as "understanding" sentiment.
For 99.9999% of use cases, the engineering label, captured via some specification, is the only one that really matters. And, it has been the case for centuries, that some algorithmic mechanisms, or machines, can "outsmart" humans, if we want to use that term to describe superior performance at the task in hand. A calculator outsmarts most humans with arithmetic algorithms.

# Feed post number 305
AI will make us more technical, not less…
This idea (below) gets recycled with every amnesia cycle—replace “technical” with “liberal arts” people.
It reaches new heights with the absurd claim that now that AI has mastered language, we need folks who are good at language to run tech. What does this even mean?
There might be a skill related to writing prompts, but the same “thought leaders” also proposed a world where prompting skills will dissipate as models improve. (Of course, this is also a fiction.)
The claim goes further—the leaders of this tech-less future (of AI) must master “emotional intelligence”.
What does this even mean?
What a narrow conception of technical skill.
The unassailable history of technology tells us that our futures will need people with even greater technical skill, not less. If you want to bet your company’s future on being less technical, not more, good luck!
People hacking some task using an LLM to the level of yesterday’s coders is not the future. Technical people finding new ways to create new types of tools and methods that will leave the competition in the dust is the future. AI makes the discovery of next generation technical tools even more likely, so double down on “de-technicalizing” at your own peril.

# Feed post number 306
Self-Attention = SVM?
This paper attempts a forensic analysis of the self-attention mechanism underlying the success of LLMs --
https://lnkd.in/g8uvkiDq
It suggests that when considering the locally-optimal tokens for a given token set, the SA mechanism is strongly approximating a margin-classifier for that set -- i.e. to separate the optimal from the non-optimal tokens.
"Locally-optimal tokens", whilst mathematically defined in the paper, refers to specific tokens within a set of tokens that are considered to be the best or most suitable choices in a particular context or neighborhood -- i.e. for a given token set (like a sentence).
Critics of the paper suggested that the contrived experimental configuration used in the paper might not be entirely reflective of a practical LLM implementation. However, the authors seem to offer robust rebuttals to defend their findings --
https://lnkd.in/gZWXaC8W
The authors are unable to offer any easily-attained intuition regarding their findings because of the challenge of bridging the convex optimization of a margin-classifier (Support Vector Machine) to the non-convex softmax operation of the SA mechanism.

# Feed post number 307
Emergent Frontiers = Opportunities for 2024 and Beyond...
I don't engage in predictions, nor have annual outlooks, but, given the tradition, perhaps I might offer a few thoughts.
The metaphor of frontier gets used often in science, engineering and innovation. One of my favorite uses is that of Robert Laughlin's in his book "A Different Universe -- Reinventing Physics from the Bottom Down".
A quicker summary is available via this Emergence conference --
https://lnkd.in/gjgnVaq7
In short, due to Emergence, there are always frontiers to be explored (at different resolutions) even if the underlying mechanisms were to be "finalized" in some way (although, elsewhere, he posits that any "Final Theory" is still millennia away due to the energy required to make sufficiently powerful measurement apparatus).
Seen from another angle, Chomsky offers a similar encouragement via his refrain: "Discovery is the ability to be puzzled by simple things" -- the number of unsolved puzzles vastly exceeds the solved.
However, we need more frontiers-folk. In many tech domains, including AI, innovation typically means new ways of winning markets, which are mostly economic frontiers.
This causes a concentration of capital, and therefore puzzle-solving energy, along certain lines. In this regard, Sarah Hooker's paper -- "The Hardware Lottery" is insightful:
"This essay introduces the term hardware lottery to describe when a research idea wins because it is compatible with available software and hardware and not because the idea is superior to alternative research directions." --
https://lnkd.in/g_3Mqf-F
This has been discussed elsewhere within the context of declining innovation, which seems paradoxical. However, notice that we have been stuck with only 2 ways of using computers for decades: Microsoft's way or Apple's. We laud the innovation of these giants as if their roadmaps are *the* future, yet they are very narrow duopolist conceptions. The overall rate of innovation is way slower than what might be possible.
The Web3 "revolution" did not deliver. Decentralized turned out to be a marketing moniker versus a Kuhnian paradigm shift. The rate of innovation during the token-froth was largely illusory. Indeed, the route to winning markets was short-circuited -- we went straight from hype to revenue. Puzzles were of little interest. Indeed, the system thrived on mystification.
What alternatives are there to the hardware lottery? We see signs of new frontiers via the minds of puzzle-solvers like Patrick Coles who, having faced the noise limitations of quantum computation, asks: What if we embrace noise? And so, perhaps, begins a new paradigm -- Thermodynamic AI --
https://lnkd.in/g9BqcE5f
Embracing noise is not new in the Gibsonian sense of the future being present, yet unevenly distributed. Perhaps Gibson was unaware that he was describing Emergence and the existence of frontiers waiting to be discovered.

# Feed post number 308
Excellent post by
Haziqa Sajid
on transfer learning methods for knowledge graph building.

# Feed post number 309
AI Will Make Us Work More, Not Less...
...so says Professor Matteo Pasquinelli. This has been my suspicion for some time, but only based upon my anecdotal and amateur reading of operational management theory and practice.
What I like about his work is that he has systematically tried to develop a socio-economic theory and history of algorithms akin to various theories of machines that emerged in the era of Babbage.
Whilst it's easy to consider and debate (as happens frequently on LI) about the meaning of intelligence or AGI in the abstract, he gives critical historical insights into the contextual paradigms (e.g. intelligence tests) that gave rise to certain strands of technical thought and related technical activity.
A related essay is: "From algorism to algorithm: A brief history of calculation from the Middle Ages to the present day". It provides a useful grounding of his approach. He discusses not what algorithms are, but what they represent and mean --
https://lnkd.in/gbDNhkjG
This provides a useful background to his perspective in terms of considering AI as a development of a much longer set of human endeavors. If nothing else, his work is a useful reminder that AI is usually deployed as an economic tool, even if its theorists and developers don't necessarily consider it as such -- i.e. it is intended to optimize resources related to economic production.
https://lnkd.in/gBX5eu7z

# Feed post number 310
Chomsky vs. LLMs is not a Case of Won-Lost:
The author (below) begins and ends with an ad-hominem attack, doing himself no favors.
Saying NC has lost is a hard claim to make because there is a set of technical theories from NC and a set of philosophical claims, many made informally rather than technically supported.
The reference to Occam's Razor is ill-posed. NC has long argued that the pathway to discovery of any generative apparatus, if it exists, is to assume the most parsimonious explanation. This is the basis of his Merge thesis.
The symbolic paradigm mentioned was a historical development that suggested that the mind might be studied independently of the brain. That is not the same as saying the mind *is* symbolic in its essential nature.
It is a coarse-grained approach, which is a normal one in science, including biology. It's how drugs are developed and how sports medicine works, and so on. It's even how the cognitive folks work -- very few of them are attempting to explain the mind via quantum phenomenon despite credible arguments that renormalization (or coarse-graining) is not going to get us to the final account of the mind.
The enthusiasm for the approach was partly because we cannot do experiments on brains -- we have to study language in a variety of brain-independent ways, like observing child development and solving various puzzles. Modern medical imaging has changed that somewhat. Indeed, there are some studies that might well detract from NC's claim that language is (primarily) a system of thought (see video referenced below).
There is no Chomsky vs. Hinton ("Deep Learning") debate as framed -- i.e. in the sense of linguistics. The case made by NC is that any statistical-learning apparatus that can generate any learned sequence (e.g. Python or JSON) cannot possibly be a realistic model of the biological speech capacity. And so DL tells us little (he says nothing) about the mind.
This seems to be largely the case, although there are some interested studies attempting to make serious comparison between the brain and LLMs, like Ev Fedorenko (making use of imaging techniques to observe correlates)  --
https://lnkd.in/gE_prpte
The opposition to NC comes from many alternative accounts cognitive- or neural-linguistics rather than deep learning per se. There is a significant number of linguists opposed to the generative hypothesis. To be clear, NC repeatedly claims that his position is a minority one.
Perhaps Pinker's account is more helpful:
"My own view is that we need to create precise computational models of the language acquisition process – sentences in, grammar out – and see if they succeed in mastering the structure of any language whose sentences are fed into it, in a way that resembles the way children do it." --
https://lnkd.in/g3xKdbVr

# Feed post number 311
LLM Emergence via Renormalization: At What Level of Resolution?
Emergence has multiple interpretations and meanings, and its use in many contexts lacks rigor. Unpredictability via the effects of coarse-graining is only one aspect, the one the paper summarized below examines.
According to researchers at the SFI of Complexity, language is a Complex Adaptive System. Seen via this aspect, it might form a theoretical basis for the scaling hypothesis via the notion of a frontier of performance reached when one complex system interacts with another -- i.e. it takes complexity to "match" complexity.
However, when examined more closely, the SFI's notion of language as a CAS occurs at the scale of a "language community".
Here we might find emergence if we rethink our conception of LLMs. Whilst we think of ChatGPT as a single entity, as if we are chatting to a *single* person, the properties of ChatGPT are as if we can chat with multiple persons with different perspectives.
The scale of the model appears to have reached a frontier wherein the creative aspect of language can be exploited to generate novel perspectives. I don't mean creativity as in "creative spark", but as in outputs that we would not expect from a typical human author.
I find this mode of usage to be the most productive. ChatGPT "thinks nothing" of attempting to fuse one concept with another, even bridging one level of abstraction to another across disciplines. Whether the output is useful or not is another matter--and needs studying--but it is certainly very often comprehensible. There is no benchmark for it that I know of, but we could possible posit some measures. My suspicion is we might observe some kind of emergence at this scale, which is a level of renormalization above current LLM benchmarks.

# Feed post number 312
Nike is Wrong: Shift is in Chinese Taste, not Spending Power... 🇨🇳
Should US brands rethink innovation?
In Nike's recent announcements of a major restructuring, one of the reasons given is a decline in Chinese spending.
However, the decline is actually due to a lessening of brand relevance in China. Blaming it solely on economic decline is head-in-the-sand incompetence or the typical denial of China's ascendency that is common to such analyses.
Look at Musk's dismissal of Chinese EV makers, only to admit that they are now losing to BYD --
https://lnkd.in/gfFPNfmF
Chinese GenZ, and Chinese consumers in general, are switching to emerging local brands versus Western ones for a variety of reasons.
A good summary of these trends is an article by retail expert
Daniel André Langer
--
https://lnkd.in/gFxSUbWV
Many Western brands are failing to tailor their digital experiences to the Chinese market, with the exceptions of luxury leaders like Louis Vuitton and Chanel.
My interest in online luxury retailing stems from an analysis I did for one of the world's biggest digital-platform providers as to the future impact of three technologies in this arena: AI, Metaverse and Web3.
In many ways, China, especially WeChat, are ahead of the curve in the sophistication and convenience of some of their digital-first experiences. There is ample evidence for this if one looks at AI research papers applied to online consumer technologies -- many of them come from China.
I found this to be the case in another assignment I carried out into modern retail search practices.
There is another Chinese trend that seldom gets mentioned. Despite an authoritarian top-down structure, the opposite is true in terms of business organization where there is an increasing trend towards what one might call "Decentralized" models wherein those closest to the customer are responsible for innovation via a kind of "micro-enterprise" model.
This has been described well by
Simone Cicero
in his analysis of Haier’s Rendanheyi methodology --
https://lnkd.in/g7kjex2U
Simone's analysis is within the rubric of "Boundaryless" innovation --
https://boundaryless.io/
Quite opposite to common expectations of top-down dictates, the Chinese approach can be interpreted as one of the most efficient examples of market-led innovation that is highly reactive to localized market trends, unlike the Nike approach that might still be characterized as a top-down "big ideas" culture.
The trouble with top-down ideas is when senior management roles are occupied by mediocre thinkers wedded to classical concepts that are increasingly irrelevant. I'm not saying this is the case with Nike per se, but this mode of innovation is ingrained in many US companies and might not be as universal as once imagined.

# Feed post number 313
Mediocre algorithms replicate, exceptional algorithms plagiarize! 🤖💡
[That's an unsubtle riff on the Picasso classic.]
Following a recent post about increased noise in the algorithmic-grind of newsfeeds here on LI...
The reflexive use of GenAI images is often jarring and time-wasting, filling the feed with needless pixels. Posters cannot be blamed because, supposedly, engagement increases. So, in service of the algorithm, we feel obliged to stuff our posts with pixels.
Having spent years studying aesthetics in attempts to model it, I now see some reality to the theory that one mode of art appreciation is to be inspired by novelty and craft.
Paradoxically, and perhaps ironically, we seldom get either with GenAI in any artistic, or even illustrative, sense.
Yes, images are uniquely constructed and reflective of the prompt, but the typical Gen-kitsch aesthetic can dull any sense of meaning. They become like exuberant emojis. The shine of well-constructed pixels wears off quickly.
Many fail to convey any sense of mood that captures the post with appropriate artistic interpretation because they are often a kind of literal rendition of the subject matter -- you can "see" the prompt in the image like a kind of glitzy sign-language. GenAI does not turn a prompter into an artist.
It reminds me of when I worked with art curators. One of them would react to certain works of digital art with the retort: "looks like it's been made by an engineer". Now I see what she meant.
I have zero evidence as to which images work, and which don't, but my sense is to stick with abstract images. If the only purpose is to get more clicks via decorative adornment, then the image might better serve its purpose by decorating rather than depicting (badly). Attempts to render subjects into a synthetic hodgepodge of high-end clip-art will quickly become quite tiresome.
I guess this bodes well for artists.
Naturally, I feel obliged to add a kitsch image using the title of this post as the prompt.

# Feed post number 314
Framework for systematic LLM evaluation

# Feed post number 315
Any signal left in the noise?
It is obvious that many posts on LI are written by, or aided by, AI.
There are many tell-tale signs.
In full disclosure, I experimented with a few posts. I wrote the original text and only asked CG to insert emojis. Curiously, although not with much rigor of experimentation, those posts got about 4x impressions. However, I stopped using them.
Otherwise, everything I write is in my own words -- with many mistakes because I often write late at night and schedule for some time later. Annoyingly, LI does not allow editing of scheduled posts.
When I reference papers, I have typically read them, or at least skimmed if it is a review paper. I attempt to interpret relevant meanings for enterprise AI users (my intended audience, sort of) or find some insight that fits a strand of thought in my previous posts (e.g. about the difficulties in evaluating models IRL).
In a recent discussion, an associate told me that his posts were 100% AI generated by re-hashing AI-news articles. By some metrics, his LinkedIn success was greater than mine. Of course, this is anecdotal.
Via some objective functions, it might be better to follow his example.
I find that I have to scroll increasingly further in my feed to find content that is, to use the Shannon worldview, surprising. There is a definite pattern of rehashing with shallow commentary, plus many reposts contain very little annotations, almost like an FYI.
I read an account of how one start-up "stole" SEO keyword leverage from a competitor by scraping all of their posts and re-hashing and multiplying them using GenAI. By definition, there will be nothing surprising in the content. Indeed, one wonders what Google Search is making of synthetic content and whether or not their ad-machine benefits enough in the short term to threaten longer-term viability of the service.
Certainly this must be the case with LI -- stuffing the timeline means more time spent sifting it, with every 3rd post an ad.
Are we in danger of losing the signal amongst all the noise?

# Feed post number 316
Mobile Web Apps—Finally?
It’s been years since i paid attention to mobile apps, even though I wrote one the first mobile apps books. But this post caught my attention, although not for the reasons the author signifies.
Steve Jobs tried to tell us that the mobile web was all we needed. Apple went in a different direction once they realized the value of app stores.
Actually, it’s been possible to create browser-based apps since forever. Some of us did this on WindowsCE, if you can remember that (and things called PDAs) by hacking into the internals via ActiveX components.
The reason it didn’t happen is simple: there are only two consumer operating systems and they had their own view of the world of apps and mobile APIs.
It’s because these are the only shows in town that we incorrectly believe that their offerings must be the only possible ways of doing things.
Our entire world view is caught up in their roadmaps.
This is one of the ways that innovation is stymied at the macro level.
Of course, on the other hand, and relatively speaking, if what the author claims is true about PWAs, then perhaps a greater level of innovation is now possible amongst small startups and dev shops. Indeed, the era of uber-niche vertical cross-platform apps may have finally arrived.

# Feed post number 317
To fail to plan is to plan to use an LLM?
The fervor surrounding LLMs has led to a flurry of proposed use cases within the enterprise. I have written about some of them, such as sales --
https://lnkd.in/gv3jzT_F
Some use cases are energized by apparent displays of beyond-human performance. For example, it is claimed that ChatGPT can "out-perform" MBA graduates on some tasks.
These kinds of claims might lead one to assume that LLMs have some kind of business planning and reasoning ability that is generalizable to specific use cases, like, in the case of sales, win-loss analysis.
However, as I have posted before, this assumption is false.
Whatever the baseline "reasoning" capacity of an LLM might be, there is no guarantee that it will extend to a specific use case. Reasoning in sales, or any domain, requires domain-specific know-how sufficient to capture anticipated reasoning tasks. There is no evidence that fine-tuning and RAG will get you there.
Critically, any reasoning capacity will need evaluating with domain-specific test cases. There is no convincing way to scale such evaluation, nor measure it. Attempts have been made to evaluate pre-trained models, such as the PlanBench paper --
https://lnkd.in/gNdyTtSH
However, a more critical question is whether LLMs can reason at all. The PlanBench paper, written by experts in the use of AI-based planning and decision-making, suggests significant shortfalls. Evidence suggests that apparent reasoning capacities are more a reflection of memorized common-sense than any emergent reasoning capacity. This would strongly suggest that fine-tuned models would suffer a similar limitation.
In my previous analysis of using AI to assist enterprise sales, I had postulated that LLMs are only one component and that fairly sophisticated multi-model and MoE systems were needed backed by knowledge graphs and other "grounding" techniques (including causal graphs) --
https://lnkd.in/gv3jzT_F
In other words, making AI work as some kind of "Cognitive Sales Assistant" with a real competitive advantage versus a mere QA machine (via vector search) is a significant expert AI lift, very different to editing a few prompts for GPT-4.

# Feed post number 318
To those flippantly dismissive of “data-centric” AI—this what it looks like, at least in one important sense👇

# Feed post number 319
Business vs. Busyness vs. AI: What is "real" work?
(Caution: A Friday-free-thinking reflection.)
My suspicion: we will NOT see substantial org transformations via LLMs any time soon, except for verticals replaceable by effective NLP (e.g. conversational intelligence).
Otherwise, most LLM-automated tasks will produce little competitive advantage in a world where LLMs are commoditized. That leaves the competitive moat of proprietary data, but this too is probably largely overstated. It will be more like a narrow trench in most cases. The proprietary value is typically already built into the price of an org's goods.
Attempts could be made via a variety of theoretical frames to estimate some upper bounds of economic gains -- e.g. by considering LLM-assisted systems in terms of complexity frontiers. Or, one could potentially model gains via entropy and diversity, as in free-energy principles used to predict biological diversity. This assumes, perhaps reasonably, that an org can be modeled as a biological entity.
Of course, no one really knows how organizations work. We operate on "auto-pilot" (lack of meta-inspection) often accepting (and confusing) constitutive facts as "laws", leading to various falsehoods.
One such falsehood is the assumption that doing "busy work" (like slide-making) is largely "unproductive", or some kind of spandrel (between "real" work) and should be eliminated, or replaced by AI. However, it mostly appears this way only in retrospect -- we don't know in advance what will turn out to be useless vs. valuable "busy work". That's not how work proceeds. Moreover, "busy work" is probably more vital than we think.
Is it not the case that when we look back on our work, much of it seemed pointless in retrospect? This is because rational-thinking in practice is a different beast to logic. John Searle, famous for his Chinese Room experiment, gives a useful re-examination of what we consider to be "rational thinking in action" --
https://lnkd.in/dcTAw35a
In short, things we might deem "irrational", like "waste of time" tasks, are entirely rational at the time. Thus we continue to do them. We cannot do otherwise.
Whilst language appears to be the org's "operating system", replaceable by LLMs, it is not. The OS is our minds, including rationality-in-action. The emergence that happens in an org between many tasks, giving rise to "busy work" is far above the complex frontier of an LLM  and likely immune to the scaling hypothesis. It isn't even clear how to model it. Again, maybe biological diversity?
If we consider David Bohm's "Thought as a System" model, the "thinking" of the org is not encoded solely in language, but in our shared perception and mental models. These have no correlate in an LLM, especially because perception mechanisms rely upon parsimony and constraints -- the opposite of L-for-large LMs. There is no L in parsimony.

# Feed post number 320
Paying Attention:
Is the real "xRisk" that AI might make us dumber?
[My weekly Friday reflection.]
While much is said about the "intelligence" of AI, there is another question: how might AI impact human intelligence.
I saw a video clip of a college student using real-time transcription and LLMs to summarize a lecture.  One commentator lauded the student as "smart", perhaps because the presumed objective of classes is taking "good" notes, or being a "life hacker".
I know a student who forces himself to take hand-written notes -- more like scribbled reflections -- not for transcription, but for intellectual focus. Is that student being "smart"? Perhaps.
Per the Flynn effect, IQ increased for decades, mostly in the lower percentiles (better nutrition, education) but has recently been in decline, especially in the higher percentiles. No one knows why.
But if it is related to how we pay attention to things, per some theorists, then how an LLM "pays attention" to primary sources, translating them via a diffuse network of weights, might be worth pondering.
Flynn proposed that IQ changes were an effect of modernity, not biology. One example is students being "taught to the test". Another is the impact of what he called "scientific spectacles", by which he meant a kind of regularization of thought. An example might be "group think", amplified by digital.
McGilchrist explains this as an excess of left-brained attention. Although it was thought that hemispherical differences were bunkum, it turns out they are significant. Intelligence is largely driven by right-brained correlates as demonstrated via brain-injury research.
Thinking about thinking is a rare reflection. The "fast-thinking" folks tried to persuade us of this, although Aristotle had long ago made such remarks. One of my favorite scientists, David Bohm, in his book "Thought as a System" made similar remarks and that reflexive thinking leads inexorably to a preponderance of mechanistic "left-brained" attention of the kind that McGilchrist laments --
https://lnkd.in/gUe_Zcdt
Indeed, McGilchrist claims that it is making culture "autistic" --
https://lnkd.in/gC5WgJi7
In his book "The Master and His Emissary", McGilchrist argues that what we pay attention to affects how we think. He goes further, which is to suggest that the real crisis facing society is not xRisk AI, but an acceleration towards stupidity via excessive left-brained perception --
https://lnkd.in/gkDNeeXX
.
Increasingly, the attention mechanism is influenced by algorithms, UX patterns and digital "tram lines", all of which are left-brained in their origins and purpose -- converting attention into a business model.
But now we have a new algorithm: the Transformer, much of it trained on text whose arrangement was to influence other algorithms (SEO).
Ironically, it's core feature is called the self-attention mechanism.

# Feed post number 321
𝐆𝐨𝐨𝐠𝐥𝐞 𝐇𝐲𝐩𝐞 𝐁𝐮𝐛𝐛𝐥𝐞
There is much that can be said about this paper and the topic of emergence within the context of LLMs (and even language itself, per the SFI paper about language being a complex adaptive system)...
But, given the recent snafu of Google resorting to fraud in their advertisement/demo for Gemini, I am drawn to Tom's opening remarks:
"Did LLMs suddenly learn to do math when it reached 10B parameters (i.e., emergent math ability)? Back in 2022, 𝐆𝐨𝐨𝐠𝐥𝐞 𝐬𝐚𝐢𝐝 𝐘𝐄𝐒. This year's 𝐍𝐞𝐮𝐫𝐈𝐏𝐒 𝐁𝐞𝐬𝐭 𝐏𝐚𝐩𝐞𝐫 𝐬𝐚𝐲𝐬 𝐍𝐎......"
They said yes on the basis of some hyperbolic claim. One might conclude that hyperbole is part of their operating model. If so, are these the institutions we are supposed to put out trust in when it comes to regulated AI safety?

# Feed post number 322
Wonderful exposition of PyTorch internals and a fantastic contribution to AI knowledge via the brilliant
Christian Perone
Of course, for many, the abstractive power of pythonic PyTorch is "all you need" (to rehash the oft-used remark).
The fact that one can do 𝘮𝘺_𝘯𝘦𝘵𝘸𝘰𝘳𝘬.𝘣𝘢𝘤𝘬𝘸𝘢𝘳𝘥() and get back-prop via autograd "for free" is a truly productive step in the evolution of applied AI --
https://lnkd.in/gyk_RtYX
Incidentally, for beginners wondering how autograd works to some first order of technical approximation, I give a very introductory overview and simplification (with code) in part 3 of my series of videos on the wizardry of backprop --
https://lnkd.in/gdBDiGEf
That said, if one wants to innovate in AI architecture, optimization and experimentation at the algorithmic or computational level, then knowledge of internals is a necessity -- including all the way down to novel GPU kernel implementations. Hence Christians overview is a great resource.

# Feed post number 323
𝐂𝐨𝐥𝐨𝐫𝐥𝐞𝐬𝐬 𝐠𝐫𝐞𝐞𝐧 𝐋𝐋𝐌𝐬 𝐬𝐥𝐞𝐞𝐩 𝐟𝐮𝐫𝐢𝐨𝐮𝐬𝐥𝐲:
As per Aristotle: you can say anything you like if you fail to define terms.
The author below makes the claim that LLMs are databases, which some said about block chains and other non-database devices. Okay then, brains are databases. Of course, such metaphors are useless if one is trying to find a technical insight as to the unique nature of an object. Indeed, per Feynman, we should dispense with names altogether and resort to first principles.
Creativity has several *technical* meanings in language. The first is "creative capacity", or the support for an infinite number of novel sentences. This baffled Descartes -- how is it possible for humans to utter so many novel sentences with such a limited alphabet. Moreover, how does an infinity of variations remain comprehensible?
Chomsky has written on this subject extensively --
https://lnkd.in/gSKmiiHm
Karpathy's comment that all outputs of an LLM are "hallucinatory" is also a reductive comment, except to say that a facet of human speech is that it is appropriate to, although not dictated by, circumstances. In this sense, a hallucination could be any utterance inappropriate to circumstances, factually correct or not.
However, LLMs can produce novel sentences. So, in this sense, they are creative. Moreover, this creative capacity is highly useful. LLMs have encompassed language to at least the frontier of producing comprehensible sentences that often are appropriate to circumstances (aka "the context window"). They seldom produce grammatically viable violations like Chomsky's famous example: Colorless green ideas sleep furiously.
However, also per Chomsky, we know almost nothing about creativity, as in "creative spark" or "inspiration" etc. His only insight is his oft-made remark: "Discovery is the ability to be puzzled by simple things", as in those who ponder the nature of even a simple thing are often  those who attain major breakthroughs in science. So, certainly we do not expect LLMs to do that. However, it remains an open question as to whether or not they might be configured to "ponder", as in some kind of productive search through "thought space" as encoded by words.
Maybe this search is the future of quantum LLMs via some exponential advantage until such time as we figure out a more parsimonious approach.
A more insightful look at the possibilities in this direction might be gleaned by reading Yi Ma's paper: "On the Principles of Parsimony and Self-Consistency for the Emergence of Intelligence" --
https://lnkd.in/gbMkzrvS

# Feed post number 324
Why is there something and not nothing?
I thought to take the liberty of posting something different and challenging of a Friday.
This question has puzzled thinkers for millennia.
The linked paper attempts a new perspective via a rethinking of ontology.
The Nexus Ontology Theory presents a model integrating concepts from quantum physics and metaphysical ideas.
It suggests that the 'Nexus' serves as a fundamental entity, akin to quantum fields, but extends beyond into metaphysical realms.
The theory discusses 'Existence Wells' and 'Void Reversion,' proposing a dynamic between existence and non-existence, reminiscent of quantum fluctuations in the vacuum.
'Nexus Oscillations' might echo quantum superposition, indicating a state of being and non-being simultaneously. This model attempts to unify empirical physics with deeper philosophical questions about reality, causality, and consciousness, providing a unique perspective on the nature of existence.
https://lnkd.in/gEhvARs2

# Feed post number 325
No-code AI? No! It’s No-brains AI…
An analysis of well-cited AI studies that produced garbage results, sometimes due to obvious mistakes in training.
And enterprises think they don’t need AI experts because some enthusiast hacks a demo?
“A separate review in 2021 examined 62 studies using machine learning to diagnose COVID-19 from chest X-rays or computed tomography scans; it concluded that none of the AI models was clinically useful, because of methodological flaws or biases in image data sets”

# Feed post number 326
𝐓𝐰𝐨 𝐊𝐞𝐲 𝐆𝐨𝐭𝐜𝐡𝐚𝐬 𝐢𝐧 𝐀𝐬𝐬𝐞𝐬𝐬𝐢𝐧𝐠 𝐋𝐋𝐌𝐬 𝐟𝐨𝐫 𝐄𝐧𝐭𝐞𝐫𝐩𝐫𝐢𝐬𝐞 𝐔𝐬𝐞 𝐂𝐚𝐬𝐞𝐬:
There are two common traps for the unsuspecting observer of various LLM papers and claims.
"𝐁𝐞𝐲𝐨𝐧𝐝 𝐇𝐮𝐦𝐚𝐧" 𝐓𝐫𝐚𝐩 -- this claim is made often for some benchmark. I have already posted about the problem with such claims, namely that researchers have too many degrees of freedom in making such claims.
To the unsuspecting observer, it might be tempting to generalize the claim. For example, claims that LLMs outperform doctors (e.g. in empathetic response) are very *narrow* (or *broad*) claims that need careful scrutiny before making the mental leap: "AI is better than a doctor".
See this paper --
https://lnkd.in/gKwxuV56
𝐈𝐬𝐨𝐥𝐚𝐭𝐞𝐝 𝐂𝐥𝐚𝐢𝐦 𝐓𝐫𝐚𝐩 -- we are in an AI gold rush, which includes many researchers eager to publish papers and keep their contributions aloft. This leads to a rash of papers, many of which use headline-grabbing titles after finding yet another performance gain or trick.
For example, a recent paper claimed that using GPT-4 without fine-tuning can outperform fine-tuned LLMs in certain medical use cases --
https://lnkd.in/gBvifSHp
The claim was that the method used to "dig deeper" into the embedded medical expertise of the foundation model was generalizable to other subjects.
The trap here is to pay too much attention to the claim without digging into the details or considering alternative, often counteracting, claims. For example, it is incorrect, based upon the aforementioned paper, to assume that we can skip fine-tuning using a particular prompting strategy. Maybe, maybe not.
The overall lesson is to exercise extreme caution in overdetermining assessments by paying too much attention to single claims. Moreover, I repeat the same advice (ad nauseam) that there is no substitute for plenty of experiment PER USE CASE to solve a particular challenge. Even then, due to gaps in evaluation methods and many other factors, we cannot assume that the solution is stable.

# Feed post number 327
Do we need fine-tuning after all?
TL;DR = It depends. And herein lies the critical insight, which is that the only road to GenAI success is via hands-on experimentation, potentially tons of it!
[This has all kinds of implications for how to pursue GenAI efficiently in the enterprise, but I'll cover those in a later post.]
Those of us hands-on experimenting with the latest-and-greatest LLM optimizations, which unfold daily, develop a key insight: no one size fits all!
And, solutions can be HIGHLY configuration dependent.
And, in many regards, it feels like a black art, especially prompt engineering.
And, many of the optimization techniques described in papers do not generalize well. Some are *very hard* to reproduce even on the purported test data.
But let's get to the question of the day? Do we need fine-tuning?
The received wisdom is that it gives access to certain kinds of specialized data. Then along comes this paper:
https://lnkd.in/gBvifSHp
Here's they key excerpt from the abstract: "We find that prompting innovation can unlock deeper specialist capabilities and show that GPT-4 easily tops prior leading results for medical question-answering datasets".
And how did the team at Microsoft do it? "The prompt engineering methods we explore are general purpose, and make no specific use of domain expertise, removing the need for expert-curated content."
Of course, a generalist foundation model will NOT know anything proprietary, so let's not get overexcited here that FT is dead. But this paper highlights a more systematic method to "tune" what you get from an LLM using prompts.
More deeply, what does it tell us? As I stated earlier, LLM optimization is a rapidly evolving field with experimental results released daily. And, just like LLMs themselves, the frontier develops via experimentation. It is hard to even discern a set of heuristics at this point. So, as an enterprise, your ability to extract value from Foundation Models is correlated to your ability to experiment.

# Feed post number 328
Wonderful GPT minimalist codebase 🙏

# Feed post number 329
LLMs: Causation vs. Correlation -- Do they know the difference?
In the use of LLMs in the enterprise, a key question looms: Can they discern causation from correlation? This inquiry isn't just academic; in the quest for "actionable insights" in the enterprise, causation is really what decision-makers are seeking.
Researchers at the Max Planck Institute addressed two pivotal questions. First, is it inherently possible for LLMs to leap from observing correlations to understanding causation? And second, if this isn't naturally within their capabilities, can we  fine-tune to bridge this critical gap?
The findings from the Max Planck Institute are perhaps predictable. They underscore a significant limitation in causal analysis (with models up to June 2023).
The researchers devised a novel dataset (Corr2Cause) to test the ability of LLMs in discerning causal relationships from a web of correlational statements. The goal was to see if these models could accurately identify causal links among the variables presented.
Across 17 different models, each exhibited almost *random* performance. This demonstrates that pure causal reasoning remains elusive for current LLM architecture and scales.
Notably, even fine-tuning these models for causal reasoning tasks didn't yield any generalizability. The models performed well only with the textual patterns they were trained with. Alterations, even paraphrasing, caused the models' ability to infer causality to plummet.
A critical insight from this study is the difficulty in distinguishing genuine reasoning capabilities from mere memorization of training datasets. This challenge is compounded by the ever-expanding size of these datasets and their often opaque or unfathomable nature.
Causal relationships is still a frontier yet to be conquered and will be vital in building genuine "intelligent oracles" for enterprises that push the boundaries from productivity gain to performance gain (via insights).
https://lnkd.in/g3djNzYj

# Feed post number 330
Where does arithmetic come from?
Given the crazy speculation over the supposedly powerful Q* model that has great math skills, I thought a useful diversion is to consider the existence and nature of numbers, or, more precisely, arithmetic.
Also, given the focus on facts and hallucinations, we might ask why is 2+2=4 considered a fact? And, therefore, how does an LLM establish it as a fact?
Indeed, entire conferences have been held on this subject, or similar, like the Numerous Numerosity conference by SEMF --
https://lnkd.in/gUM3gxTZ
-- which included some wonderful lectures.
As a teaser to the content of the attached article:
"To unravel the mystery, we need to ask why addition and multiplication are [arithmetic's] fundamental operations. We recently posed this question and found that no satisfactory answer – one that met standards of scientific rigour – was available from philosophy, mathematics or the cognitive sciences."
This is a surprising statement perhaps.

# Feed post number 331
Of particular note to those interested in English degradation due to multilingual training:
"𝙇𝙞𝙢𝙞𝙩𝙚𝙙 𝙘𝙤𝙙𝙚 𝙖𝙣𝙙 𝙢𝙪𝙡𝙩𝙞𝙡𝙞𝙣𝙜𝙪𝙖𝙡 𝙙𝙖𝙩𝙖 𝙙𝙤 𝙣𝙤𝙩 𝙨𝙩𝙧𝙤𝙣𝙜𝙡𝙮 𝙙𝙚𝙜𝙧𝙖𝙙𝙚 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙥𝙚𝙧𝙛𝙤𝙧𝙢𝙖𝙣𝙘𝙚"
Of course, a key question is how to achieve non-English problem solving to the same degree as English-foundation models.

# Feed post number 332
Open Source Human Alignment:
Starling-7B is a model trained through Reinforcement Learning from AI Feedback (RLAIF). This model showcases the power of a new GPT-4 labeled pairwise-ranked dataset, Nectar, and achieves a 8.09 score in MT Bench (second only to GPT-4 itself) --
https://lnkd.in/dkY-ziUC
(MT Bench is a benchmarking tool that LLM-judges language models based on their helpfulness and harmlessness per human alignment preferences --
https://lnkd.in/dPMCpWe2
.)
The Starling-7B project employs instruction-set fine-tuning, a method where the model is fine-tuned on high-quality human-instruction data, improving its responses and overall performance. The data for Starling-7B comes from various LLM sources (inc. GPT-4) and is distilled for superior quality, enhancing the effectiveness of the model in chatbot applications.
The release includes the Nectar dataset, the Starling-RM-7B-alpha reward model, and the Starling-LM-7B-alpha language model on HuggingFace.
Of course: note some of the "fine print" -- "We also detected a tendency for the model to respond with excessive caution to certain benign prompts after initial RLHF, while still showing vulnerabilities to jailbreaking attempts".
See blog post from UC Berkeley:
https://lnkd.in/dkY-ziUC

# Feed post number 334
Google's NotebookLM -- any ideas?
I got access to Notebook LM. I thought it might be useful for me because I tend to write many of my notes (esp. paper summaries) as Google Docs wherein I will also embed ChatGPT links and links to my other docs.
I am struggling to figure out how to use it properly.
The UI feels like it was coded in a day and also fails (e.g. PDF uploads) without any user feedback.
Anyone else have access and any tips on productive usage?

# Feed post number 335
AWS GenAI, building on Eckerson's post:
A #3 might be semantic search, increasingly via knowledge-graph and dense vector (i.e. RAG, but with multi-field, inc. boolean) #4 would be a guard-rails to prevent hallucinations or exfiltration and #5 mitigation of adversarial attacks (e.g. reverse engineering, fake hallucinations, jail-breaking etc.)
The real task is making #1 #2 work.
One-shot and few-shot prompts, inc. "XofT" patterns largely incapable of consistently high accuracy within usable probability margins for many enterprise use cases. Hence ensemble techniques are required (e.g. LLM features fed to XGBoost) and here is where the AWS SageMaker ecosystem can excel.
For #3, innovation is being driven by Apache Solr in terms of dense-vector augmentation of multi-field indexes (which is key). AWS ES tends to lag. Azure is ahead here in things like semantic re-ranking. AWS has various KG solutions, including Neptune, but little innovation towards GenAI.
A new fine-tuning method gets released daily. No one-size fits all. For some use cases, domain-specific reasoning isn't guaranteed via naive FT, nor is alignment. Despite impression that these services are turn-key, this is far from true. Production-ready GenAI still an art that requires "beneath the hood" expertise.

# Feed post number 336
Fine-tuning? Tuning to what frequency?
The enterprise is beginning to focus on fine-tuning (FT) with the assumption that FT is equivalent to making PreTrainedGenericModel equivalent PreTrainedMyDomainModel.
Firstly, this is not true. It is more like PreTrainedGenericModel_MyDomainFlavor where the strength of that flavoring is unknown in most cases.
Oh dear -- sorry for this clumsy camel case!
But in what sense MyDomainFlavor?
The critical skill that an enterprise "Fine Tuner" (some job title I just invented) is going to need is how to fine-tune the models *reasoning* capabilities to add value to domain-specific problems -- MyDomainReasoningFlavor
What does this mean? It means we have to pay attention to how to improve domain-specific reasoning. However, in many cases (most), there are no "systems analysts" who know how to stipulate what domain-specific reasoning looks like, nor -- and this is critical -- how to assess it (in order to evaluate the models).
In many enterprise domains, knowledge is tacit, not codified. This is especially true where there is emphasis upon reporting versus causal analysis (i.e. going from data to insights).
Tacit knowledge is how most enterprises work. It is deeply ensconced in the culture and power dynamics. Hence why MyDomainFlavor models won't get you very far, except in a kind of spreadsheet-on-steroids way, which is most likely how LLMs will get adopted (versus something more transformative).

# Feed post number 338
The Future of Enterprise AI is Small Models (Mostly)
Here's a simple heuristic: if you want to create a mission-critical oracular-like bot for "MyOrgGPT" then there are probably good reasons to explore pre-training, especially if you want any kind of governance over the data sources used to train the model (notwithstanding the challenge of "unfathomable" nature of pre-train-sized datasets).
For various reasons (TBD), you might also want to explore how to do this on-premise using your own compute cluster.
You will also need a data strategy, which has nothing to do with data governance and running data inside an org. It means corporate strategy aimed solely at gaining data advantages -- e.g. how can we generate proprietary data (even as a first-class objective for a product that is not the main revenue stream).
If you want to solve highly valuable vertical problems, like, say, building a Competitive Intelligence analyzer for your enterprise sales team, then you will need to focus heavily on how to make the bot **reason** about your problem space. Note that I said REASON!
The misconception is that this means fine-tuning (and RAG, although fine-tuning is technically part of RAG when done faithfully to the original research in this field). It does NOT. Generally speaking, in a hand-waving fashion, FT-RAG improves the "QA ability" of a solution for a particular domain. It does not guarantee meeting a required threshold for reasoning.
Reasoning is likely to be the critical differentiator if you want to truly augment and/or transform a business function using GenAI. Generally speaking, to be competitive, you will want your enterprise AI not merely to discover facts ("our revenues are X" or "we lost the deal to Y") but to discover procedures, or actionable insights (well, there are no other kind of insights, but many don't seem to get this) -- "we can win this deal if we do X".
Also, the future of enterprise AI is not one big model (although one might be needed, as above), but a "mixture of experts", as in a swarm of smaller models working in concert. No one knows what this looks like in an enterprise setting -- yet. If you want to win with GenAI, you should find out.

# Feed post number 340
Actual AI revolution on the horizon?
The word revolution gets used as hyperbole, especially in relation to AI, more so GenAI.
Personally, I do not believe LLMs will revolutionize (macro) productivity or the workplace. Their best use case is operational efficiency, not innovation. Even then, it's basically a zero-sum game because the tech is highly democratized with the power being 99% in the model, not the deployment.
(A review of Complexity and kurtosis in relation to knowledge distribution in "corporate organisms"  would reveal that the nature of information dynamics ["collective intelligence"], where knowledge-based competitive gains arise, are invisible to LLMs. It isn't even clear what kind of AI system would make a difference (other than a Complex one, which LLMs do have going for them, or, potentially a "symbolic" one).
On the other hand, finding ways to conquer difficult engineering and science domains could propel an entire wave of innovative life-changing breakthroughs.
So, news of a dataset in fluid dynamics has me more excited than Common Crawl.

# Feed post number 341
LLM is a "World model"?
This is a metaphor (for pedagogic benefit) more than any claim that actually shines light on the unfathomable workings of LLMs.
Language itself "incorporates" a "world view", which is an idea that Galileo pondered, and found inexplicable (due to the disconnect between apparently infinite expressiveness and the paucity of alphabets). Of course, it had been studied since Aristotle and theorized about many times since, including the well-known Sapir-Whorf hypothesis, which would also suggest the reverse is also true: that LLMs could influence "world views".
The success of LLMs is solely due to experiment, not any theory of linguistics or  any theory of language learning. This is why it's so hard to drive meaningful innovation beyond scaling, which is an experimental method. There is no theory of scaling.
One of the better linguistics-rooted accounts tackles the subject from a Complexity Theory POV, relying upon the preceding argument that language is a complex system and hence why it is only computationally accessible via equally complex systems, per a maxim of CT --
https://lnkd.in/guBB9RiE
-- this would also (potentially) concur with the "emergence" claims made about LLMs.

# Feed post number 342
Bill Gates also said that the web is only for anoraked nerds and wouldn’t amount to much.
Ever since AI was conjured, the prediction of the forthcoming era of mass leisure has been just around the corner

# Feed post number 343
Quantum AI won't also give us "Stochastic parrots (SP)"?
Yet another invocation of the SP argument. The author claims true intelligence will only emerge from quantum AI because it is "AI on steroids" without considering that this could just yield a more sophisticated parrot.
The SP argument has little value, except to philosophers and pundits. It is supposed to suggest that models lack understanding.
Even from a philosophical POV, this argument is limited unless we define the meaning and scope of understanding. Humans also lack understanding, depending upon scope -- e.g. we cannot know the future. In many cases (e.g. reckless policy of useful-idiots) this is potentially way more problematic than an LLMs lacking "understanding".
LLMs arose not from any body of theory (e.g. linguistics, or even AI) from which we might derive useful insights into capabilities. They arose from (unexpected) experimental developments, a key feature of which is unfathomable datasets --
https://lnkd.in/g7FZgcXK
There has recently been some good work on trying to formalize the meaning of "understanding" in the NLU sense, deconstructing the "mimicry" aspect of the Turing Test (or Octopus Test) into something more productive for NLU experimenters (not theorists) --
https://lnkd.in/gKwxuV56
As for QAI, the same lack of theory for how "language understanding" works still applies. The author seems to think because LLMs are deterministic (aka "classical") and vague theories of intelligence (Penrose) are "quantum", this will automatically lead us to quantum advantages that are truly intelligent. The problem is that no one can make this claim based upon any theory, or even experimental evidence. The claims that microtubiles are "quantum devices" could be no more useful to the development of QAI than the artificial neuron was in unlocking "intelligence". Of course, it might inspire some developments that unlock a quantum advantage in building bigger stochastic parrots, the value of which is unknown, but if the QA is exponential, then perhaps it is worth $1 Trillion (as a hand-waving extrapolation of current AI valuations).
Of course, its value in broader terms is hard to assess.
There are some reasons to suppose that QAI interference might map to the composability of language --
https://lnkd.in/gHaqQ-uk
But the key question is will such theories develop as quickly or productively as our ability to experiment using quantum computers?
If not, then there is no reason to assume that QAI breakthroughs won't be due to experiment rather than theory, in which case our ignorance of the scope of "understanding" will remain intact and we will have built SPs with exponentially more power.

# Feed post number 344
Man landed on the moon using "dumb" tech:
The memory of the Apollo 11 navigation system used for the lunar landing was similar to the average Casio wrist watch (not Apple, which probably has ~100,000 times the processing power).
Much of the engineering work for the project was carried out without computers -- certainly no desktop ones. Some engineers used logarithm tables. And yet, it worked. It did the job -- spectacularly.
Moreover, it sparked the silicon industry that put the US at the frontier of IT where it has thus far remained.
All of the technologies involved in the lunar landing were "dumb".
Even if AI *actually* (?) is "dumb", one wonders what we might do with it in the spirit of moonshot projects.
https://lnkd.in/ghpZyeMs

# Feed post number 345
Do LLMs reinforce mental health stigmas?
Interesting study out of Paul G. Allen School of Computer Science of Engineering via the Behavioral Data Science Group.
"If you have ever considered using NLP for Mental Health applications, it’s vital to know what the models have inadvertently learned about people with mental health issues. In our EMNLP 2022 paper, we find that masked LMs capture societal stigma about gender in mental health."
https://lnkd.in/guGAS-9h

# Feed post number 346
LLMs: Beyond-human?
(And why it matters to enterprises.)
The paper "On Degrees of Freedom in Defining and Testing Natural Language Understanding" deconstructs the Turing Test (and revisions like Octopus Test) into a set of consistent principles for evaluating NLU --
https://lnkd.in/g7XhMfAJ
Why?
Lacking a common and more holistic framework for assessing NLU, researchers tend to overestimate or underestimate model capabilities. With too many degrees of freedom to frame and interpret tests, inaccurate assessments are made regarding claims like "beyond human".
I am posting because some of these assessments are wrongly guiding enterprise AI "strategy" or expectations.
Some benchmarks (e.g. Q&A) report beyond-human performance, but within narrow confines. However, it often causes enterprise leaders to hold more general beliefs about the beyond-human measures. This can lead to unrealistic expectations when extrapolating such claims to business *processes* (or even job roles) vs. benchmarks.
The issue is that the researchers (and benchmark authors) are too free to pick whatever evaluation methods they like. However, subtle reconfigurations could easily render the results significantly sub-par cf. humans. And this dependency is crucial for assessing NLU within a particular business context, especially mission-critical enterprise deployments.
Some claims are significant, such as GPT-4 beating doctors in soft skills --
https://lnkd.in/g-WnvBfR
Without a proper and consistent framing of the meaning of such claims in terms of NLU, false conclusions are easily made, like "AI is better than doctors" -- indeed, we see start-ups claiming this premise whilst pitching false analogies like "AI is the new stethoscope" (which, frankly, is meaningless).
Unconstrained NLU interpretation could impact enterprise LLM projects if motivations are aligned with generalized "beyond human" expectations. I know at least one case (directly) where a CEO extrapolated such assumptions to large functions within the enterprise, influenced by a board who sought such impacts upon their investments.
To combat these issues, the paper introduces a 'validity argument' framework, offering a structured approach to NLU test design and evaluation. This framework emphasizes a response-dependent interpretation of the Turing test, focusing on assessing NLU systems' genuine understanding of language and context, rather than mere linguistic mimicry.
Enterprises will have to interpret these tests, which at the moment, in the absence of consistent NLU-test interpretations, is a hard prospect. Indeed, this is one of the biggest dangers to enterprise AI deployment -- the power of LLMs and ease of experimentation leads to the false conclusion that zero expertise is needed to deploy AI. Good luck with such an approach!
---
Follow me if you want someone who understands the topics he posts about.

# Feed post number 347
Interactive (LLM) Fiction? At last?
For those who hark from the "multimedia" era, you will recall the enthusiasm for interactive or participatory narratives. It was touted as "the future of media".
Of course, like many ideas, it didn't materialize, despite various reboots (including VR).
Recently, a colleague and I researched various use cases for LLM-powered storytelling, both professional ("Hollywood") and consumer.
One discovery was the RecurrentGPT approach: Interactive Generation of (Arbitrarily) Long Text -- see paper by Zhou et al --
https://lnkd.in/gk-7Fdtk
As claimed in the abstract:
"...we also demonstrate the possibility of using RecurrentGPT as an interactive fiction that directly interacts with consumers".
However, any deep dive of interactive-narrative use case reveals a number of problems, many of which I won't divulge here as they are proprietary research.
But one key "finding" is so obvious that it almost need not be stated: fiction is a process of letting a story fill the imagination that (mostly) requires zero effort on the part of the reader. The reader doesn't have to do any work, other than read. Indeed, as any novelist will tell us, the skill of fiction writing essentially boils down to one thing: leveraging the reader's imagination (as effortlessly as possible -- i.e. don't get in the way of the reader).
What any novelist will also tell us is how hard this is to do well. As many writers will explain, the job ought to be called re-writing.
Hence the actual fiction writing-reading process doesn't immediately translate into any interactive LLM configuration -- and especially not into any chat interface. Indeed, in many GPT use cases it is painfully obvious that what's missing is a visual UX. After all, there's a reason computers adopted visual metaphor and migrated away from the terminal window.
Nonetheless, we still anticipate interactive-narrative tools at some point in the GenAI evolution -- something richer than what
character.ai
has to offer. How scalable it will be is a different question. And will it be a standalone experience or an adjunct to another service, like a game? Time will tell.

# Feed post number 348
The Dangers of Fake People: Societal Decay?
I believe this is one of the better conversations about GenAI impact. It isn't the usual xRisk conversation, but more a commentary on the potential degradation of societal cohesion as it becomes impossible to tell real from fake.
Personally, I find it very hard now to follow some contemporary issues on X where there is clearly a lot of manufactured content -- the level of vigilance required is exhausting. Community notes can assist. Indeed, for one of my clients I analyzed what an "open journalism" platform might look like that is radically open in some key senses (more so than X).
Similar arguments to Dennett’s have been made by other contemporary philosophers who are not fame-seekers, so to speak (as could be argued about Dennett despite his substantial academic bona fides).
For example, Hans-Georg Moeller's analysis about Profilicity is a well argued body of work about the trend in public discourse away from authenticity towards "profile flexing" (my words). This is evident on LI and we are all susceptible. There is clearly a lot of exaggerated content and claims --
https://lnkd.in/gg8NZ_Qw
This is to be expected of course. After all, "self marketing" and "self branding" are widely accepted ideas peddled by many mainstream popular business writers (originally by Tom Peters with his Brand You ideas and book as early as 97 --
https://lnkd.in/g45RZqXT
).
https://lnkd.in/gPsBa834

# Feed post number 350
GenAI as "Thought Partner" in Education
This is a great summary of various aspects of using GenAI in the classroom.
cc:
Ajit Jaokar
,
Aditya Jaokar
,
Sania Khan
“There’s now a real possibility that one could make educational software that works.”
My personal interest has been in how to teach computational math. This possibility is one of the easiest to imagine given the coding capabilities of LLMs. In my own research, I frequently find myself entering: "Give me code for ..."
Of course, I know how to code and have spent a lifetime in computation, so this back and forth between mathematical ideas and code is natural. But it feels obvious that this should be possible for the beginner, especially via intelligent re-purposing of the explosion of open source educational materials.
As I said in a previous post, we should take note of the fact that many developing countries are now catching up and overtaking "developed" ones in math prowess thanks to adoption of more progressive approaches, like computational math.
The possibility for non-linear highly-personalized learning seems the only way forward and warrants a total rethink of "grading" and evaluation. This is even more germane given the trend in recruitment towards skills-based evaluation.
https://lnkd.in/gXwCnbXu

# Feed post number 351
Hallucination benchmarks: Proceed with Caution:
As a reminder, an enterprise *must* evaluate the hallucination modes and risks for their __particular use case__ and system config, keeping in mind that the sensitivity of the config is hard to assess in many cases -- i.e. what performs well today might fail tomorrow if you breathe on the setup (okay, not quite, but I said that for emphasis -- 😀 )
It is *insufficient* to rely upon generic benchmarks as a basis for predicting hallucination rates. (Indeed, bench marks are problematic in many ways due to the degrees of freedom researchers have in interpreting them in their research papers -- most on this in a later post.)
Many of the prompt-engineering (PE) tuning approaches to lessening hallucinations (or, frankly using PE for anything) are problematic. I have found that attempts to replicate research papers with their own code and data are highly sensitive to config. In many (most!) cases I was unable to reproduce the paper's results whatsoever.
And, when I could, the method often had little to no impact on my use case (versus the idealized test case data) -- it did not generalize as claimed.
Now, was this because I made mistakes, the researchers did, or was the repo not in a good state, or some other cause?
Well, the key point is that I don't know because it takes a lot of time to figure out and debug -- and this is part of the reality of using LLMs in enterprise apps. When things don't work, there might not be an obvious solution and you have to keep trying many alternatives.
It's a much harder world to "debug" than the world many of use are used to.

# Feed post number 352
LLM context-window position sensitivity still evident in GPT-Turbo.
As posted before, enterprises need to be aware of these kinds of distortions when building solutions.
For example, a critical sales-intelligence question could return a sub-optimal answer merely because relevant data was buried in the source text.
The reason for these distortions are obvious: important information is often at the top or tail of an article. These assumptions don’t necessarily hold for lots of kinds of enterprise data that might get consumed by LLMs, especially if some pre-processing step flattened the ordering of significance.
Also, in some fields, like Competitive Intelligence, the critical insights are often the buried ones because they’re relevant to some CI-analysis thesis rather than the framing (and ordering) of the referencing article per se.
Bottom line: yet another reason to be diligent and systematic in enterprise LLM application evaluation, with additional relevance to document pre-processing strategies.

# Feed post number 353
LLMs and Data: Quality over Quantity (The Myth of More)
May Habib
deftly points out the particulars of how to think about data through a variety of LLM-related modalities.
It is a truism that enterprise data quality is vital when using LLMs and May points out different emphases across the workflow.
One aspect missing is the importance of data labeling, which is likely to be *the* most critical pre-processing step in many enterprise use cases.
As I have discussed in various articles in the Frontier AI Handbook, since we are dealing with natural language, the sources are likely to be, well, "messy". For example, consider the common lack of hygiene in CRM notes fields -- some sales folks are ultra-organized, some are not. There are other issues, like the tendency to use inconsistent phrases, acronyms and "sales slang" --
https://lnkd.in/gU4ydEQp
Folks will write whatever they want in any order -- that's how language works in free-form data fields. This will include highly heterogeneous content within close proximity -- e.g. perhaps a competitive intel claim alongside a pipeline status note.
In such cases, it is unrealistic to expect the LLM to do all the heavy lifting in terms of anything involving reasoning or causality, like "Which product has lowest pipeline coverage?"
It's feasible that the LLM could respond with a competitor's product recommendation ("hallucination") if the competitive intel data is hard to discriminate from the pipeline status. Data needs to be "well grounded".
The beauty of LLMs is their power to help discriminate data ("classify") but it is unrealistic in many enterprise settings to expect this to be solvable via a one- or few-shot prompt. Accuracy could be low and hard to fix via PE only. It will require more systematic labeling of data to build more tailored models, like a model aligned with competitive intel separate to a model aligned to pipeline status.
One approach to data labeling is something like weak supervision that can combine an array of labeling functions to arrive at a higher confidence discriminator than any single LLM function.
Such approaches are quite novel for most enterprises, but likely to be highly germane to any "AI specific" data-quality strategy.

# Feed post number 354
Quantum-Classical Hybrid Deep Learning: The Future of AI?
The paper, titled "Parallel Hybrid Networks: An Interplay between Quantum and Classical Neural Networks," presents a study on the integration of quantum neural networks (QNNs) and classical neural networks, specifically multi-layered perceptrons (MLPs), to create a hybrid architecture known as Parallel Hybrid Networks (PHNs) --
https://lnkd.in/gBTukQfd
(Note: for those unfamiliar with the basic principles of MLPs and back propagation -- the mode of learning -- see my post introducing a set of 3 short videos explaining the concept, math and computation in an accessible, yet holistic fashion --
https://lnkd.in/gdBDiGEf
I hope to make a similar set of videos about the basic of Quantum Computing in due course)
The rationale for the hybrid is for each to play to its strengths. The QNN is more akin to harmonic decomposition (Fourier circuit) and so good at searching the smoother parts of the distribution. Whereas the classical can "take over" in fitting non-harmonic features, addressing some limitations of the QNN.
The PHN trained to a lower mean squared error (MSE) loss than its elements, suggesting that adding the QNN improves the overall expressivity of the MLP.
Whilst this result is limited in its scope (the synthetic data distributions were fairly rudimentary), the more important finding is that the hybrid architecture is both possible and beneficial in some aspects. At this stage of the game in quantum machine learning, the frontier is still very much wide open for innovation and both theoretical and practical development.

# Feed post number 355
Good resource list about LLM evaluation from
Mahesh Deshwal

# Feed post number 356
A while ago I spent years working with licensed artworks from artists whilst running a research lab. To make adaptations for digital-art derivatives, we had to pay licensing fees.
In recent experiments with image models and upscaling techniques i was able to produce works in the exact style of living artists to the extent that i would not need those artists. In some cases the models understood which artist i was referring to.
Using that approach, I could return to the lab project and dispense with working with artists by merely feeding their works into the software.
The commentary below is accurate in explaining an ethical and legal issue that arises from using copyrighted work because copyright is the basis upon which artists and creators have economically organized. It has close ties to the nature and scale of artistic labor and creativity via artistic ingenuity. The basis is also widely accepted by society.
This organizing principle seems the critical observation rather than the point made by some that artists already “copy” via the process of inspiration.

# Feed post number 358
Adversarial LLM Attacks >> Jail Breaking
Jail-breaking LLMs is only one mode of attack.
In my brief overview of hallucinations in enterprise-LLM use cases, I point out the obvious possibility of causing adverse hallucinations. For example, an LLM-backed service could be made by an adversary to look as if it is leaking PII data whereas the data is only fake. This could cause reputation harm, as could many similar “hallucination attacks” (e.g. showing bias, unethical behavior etc.) --
https://lnkd.in/g9WKuSYp
We have to keep in mind that the adversary is not merely some hacker, but some hacker with an LLM which could be pre-trained or fine-tuned or misaligned in any number of nefarious ways. And, as most of the guardrails solutions and AI tool chain is open source, it too can be fed into any AI for any malicious purpose.
The defense against such adversaries isn't understood, and may never be due to the quasi-unfathomable nature of foundation models.
As has been pointed out in the great paper "The Challenges and Applications of LLMs", hyperscale datasets are unfathomable -- i.e. you can never know what's inside it. Moreover, LLMs are Complex Adaptive systems and so exhibit unpredictably unpredictable behaviors (Rumsfeld's infamous unknown unknowns) --
https://lnkd.in/gTJyzRSe
We have spent decades trying to make computation more deterministic. It should be recognized that Foundation Models are different beasts.

# Feed post number 360
Semantic Re-ranking: The Secret Sauce of Semantic Search?
Having spent a lot of time down in the weeds with semantic search, one of the greatest challenges is how to incorporate semantic steps in the re-ranking process.
It is interesting to see MS include semantic ranking in their offering alongside vector retrieval.
There are still other challenges, like multi-valued multi-field vector (dense-dense or dense-sparse) search, but a lot of interesting work has been done in this regard by the Apache Lucene folks --
https://lnkd.in/g8GEfn_S

# Feed post number 361
Digital Art (Creative Coding) with GenAI?
As a one-time avid user of Processing to make digital artworks (for the now defunct Klio platform built out of a lab that I ran), I am keen to try this framework - Spellburst by Hariharan Subramonyam and team.
I still use the Open Frame stack for a DIY digital installation in my hallway (which is actually disguised as a mirror) --
https://openframe.io/
I had already tried to generate various creative-code snippets using ChatGPT, but found it frustrating as an "artistic process" -- the loops from precept to concept to visualization and tinkering were too clunky.
Making a GPT for digital art is on my to-do list, although I feel that it really needs a GUI (like Nodes IO).
The node-based approach by Spellburst is certainly a popular approach amongst the mode hard-core creative coding platforms, or some of the innovations like Nodes IO:
https://nodes.io/
It's not necessarily an intuitive approach for an artist (vs. coder or tinkerer), but one that provides great flexibility and one that the team decided upon after interviewing creative coders.
It appears to be a wrapper around p5.js creative coding libs using Reactflow for node-based UI and various standard JS/Node tools for glue.
Alas, I cannot find a link to the actual tool, but the paper makes an interesting read --
https://lnkd.in/gYkPZFkQ

# Feed post number 363
Can AI *Revolutionize* Science?
I previously gave brief comment about the difference between inspiration (or creativity) and discovery via search (in its general sense). Certainly, actual scientific revolutions are strongly correlated with inspiration.
This was in reaction to this post --
https://lnkd.in/gub4j9RC
It would take essays worth of dialectic by actual philosophy-of-science scholars (not myself) to explain the scientific process in totality (vs. scientific method). Chomsky's anecdote serves to illustrate a key point: namely that pointing an AI-powered camera out of the window (to observe motion) is not "doing physics". He calls it "meter reading". And, it won't lead to the kind of discovery Chomsky refers to in his popular quote: "Discovery is the ability to be puzzled (by simple things)".
(Note that this is typically a lament against education approaches that seek to kill curiosity, which is presumably a precursor to being puzzled.)
Alternatively, as an example of (non-inspirational) discovery via search and the purported reasoning capabilities of LLMs, this paper is a comprehensive survey of ways in which LLMs can assist with scientific research across a smorgasbord of domain-specific examples --
https://lnkd.in/gKQDNzhk
This  paper is useful because it is chock-full of actual prompts that you can try for yourself, as indeed I did. I was not as convinced as the authors by many of the examples, but the mode of "accelerated" discovery is certainly on display in many of the examples. I did compare various prompts against merely searching in Google, even with its generative mode.
As to whether the purported reasoning (such as conjecture about interaction of given proteins) is likely to accelerate research in the hands of an expert, that needs to be ascertained by actual experts.

# Feed post number 364
The author is not comparing apples with apples, forgive the Newtonian pun 😀
When it comes to discovery of the kind that inspired Newton to contemplate the invisible force of gravity, this kind of creativity is largely held to be a mystery. Some even go so far as to claim it so: mysterianism.
Indeed, there is almost zero understanding of creativity. No wonder we still use the word inspiration (which roughly means to "breath life into"). This is perhaps a better word than discovery for these kinds of creative acts or serendipities.
Chomsky's anecdote is useful here: no amount of pointing an AI-powered camera at falling objects will give rise to a theory of gravity. Of course, some will argue otherwise.
When it comes to discovery via search (vs. inspiration), then AI has enormous potential, including dramatic impacts upon science. This is because there is a large category of problems that are intractable. AI has the potential to make them tractable, especially once combined with quantum algorithms.

# Feed post number 365
Evaluating LLMs: Possibly *the* most important topic in GenAI
Arvind and Sayash carry out various useful analyses of AI from a critical-thinking and research perspective. This contribution is a useful orientation into the world of evaluating LLMs. I previously posted a full-length survey paper which I have been analyzing and summarizing for a later post, especially contextualized to the very much open question of how to evaluate LLMs within the enterprise where a whole set of unique problems apply.
https://lnkd.in/grYJxY9K

# Feed post number 366
Linux Foundation formalizing activities and open standards in HPC.

# Feed post number 367
Clock speed so old hat
Remember tinkering with home computers. We marveled at the idea of breaking the MIPs barrier. Clock speeds were everything.
I also recall experiments in my early chip design career dealing in asynchronous circuits—how to tame race conditions!
It turns out that clocks might just be the fundamental limit of computation in a “limits of physics” kind of way.
“Physics dictates that in the absence of having an infinite amount of energy available to it, a clock can never have both perfect resolution and perfect precision at the same moment”.
Interesting research that indicates upper bounds on quantum computing.
https://lnkd.in/gxKDzE8u

# Feed post number 368
To use AI, Learn (and do) Sampling!
This is not statistics advice. It is practical business advice to cut through the BS of AI sales and marketing reports and "get real" about adoption.
The greatest confusion about enterprise AI here on LinkedIn is the multitude of conflicting opinions via the distortion of sales hype.
For example, some say you can't do anything in AI without first fixing data governance, quality etc.
Invariably, folks publish numbers to back their claims, such as "40% of the AI task is pre-processing" (I saw this today). Some claim to have studied it via sampling of their projects, or others via surveys.
Firstly, my advice is to ignore ALL surveys. In any case, my approach (to experiment) makes them mostly moot.
Secondly, if you're going to pay attention to numbers, keep in mind you're seeing a summary statistic of a (likely small) sample. Take pre-processing. The amount required will vary from ~0 to  ~100% of a project.
All that matters is where on that distribution YOUR project lies.
Or, flipping it on its head, why not find projects that lie somewhere favorable on the distribution of whatever summary statistic seems important.
If data prep sounds like it's going to be a ball ache, then avoid it -- find use cases that you can hack with the data you have. For example, rather than fret that the CRM is out of sync with the data warehouse -- a common malady -- just go grab a few records via manual report and start experimenting, or creating your own sample!
At this moment, experimentation is the antidote to the lack of AI strategy that pervades most enterprises (assuming an all-encompassing AI strategy is possible). Both are required and can be independently pursued until convergence becomes possible (i.e. experiments guided by strategy, or vice versa).
How to experiment? That I will address in a later post. There are a few tricks, especially to avoid PII or data leakage snafus etc.

# Feed post number 371
Searching for qubit error correction codes using RL.
There are two uses of ML in quantum computing: in the QC operation and research itself, and via quantum algorithms running on the QC.
This is an interesting example of the former. Without error correction, QCs cannot scale to the sizes needed to unlock the quantum advantage.

# Feed post number 372
Knowledge Networks?
If I see another post about "AI is a game changer", I will scream, or the same recycled start-up advice that is not advice (ad-visum) at all as we've already seen it 1000 times.
I don't want a "social" network. I want a knowledge network where the ranking of materials and people is aligned with mutual information gain and not profile gain and posturing.
I don't want to see the same "content" over and over, like the same AI announcement or AI research paper recycled by 100 folks who have nothing to say about the paper (other than what ChatGPT tells them about the abstract). Much of it is just flag-waving.
My timeline is stuffed with daily posters whose posts are empty. Yet, they are only doing what LI suggests: post daily, blah blah. LI's very own advice has devalued comments from commentary to "profile visibility".
Clearly, this is a race to the bottom. With more GenAI-generated posts, the descent will be accelerated via the rapid diffusion of unsurprising knowledge.
The entire edifice of social profiles needs to be deconstructed. I have to scroll for ages on the LI timeline to find anything surprising -- i.e. actual content. Who has time for this?
There is a wider danger of profilicity (seeing the world through profiles, not our own eyes and minds) -- the decline of authenticity. This is anathema to social and scientific progress.
I would pay for a timeline that had useful content and was not just a gigantic shop window for profilicity.
(Climbing off soap box.)

# Feed post number 374
GPT app store worthless?
Given how most folks making GPTs have boasted that it only took 10 minutes and that many of them are hitherto non-programmers with mediocre skill, it seems unlikely there’s any gold to be mined—it’s literally sitting on the ground waiting to be picked up.
Indeed, at what point will the “knowledge economy” become worthless?
Luckily, I still know how to fix various mechanical systems, so i’m ready for the “great pivot”. (I was going to end with a smiley, but realized it’s probably not that funny.)

# Feed post number 375
Back Propagation: Holistic Overview ("Soup to nuts")
As previously posted, I made a quick intro to back propagation, the "witchcraft" of AI and Deep Learning. Check out the article to understand the rationale for yet another explanation and to get the video links:
This is more holistic than most explanations, spanning:
High-level concept (video part 1) -- e.g. function approximation
The (gentle) math (video part 2) -- e.g. algebraic method
The low-level computation (video part 3) via Pytorch and Autograd
It's aimed at those wanting a technical appreciation but without overly technical or mathematical details. I also avoid classical neural notation as it often gets in the way.
p.s. I will post the slides in a later post.
hashtag
#
backpropagation
hashtag
#
deeplearning
hashtag
#
ai
hashtag
#
learning
Andrew Ebling
-- sorry it took so long to post, but hope it's still useful.

# Feed post number 377
More applications of quantum algorithms—using an eigen-solver for financial portfolio optimization.

# Feed post number 379
Very important study about LLM rule-following capabilities.

# Feed post number 380
"Hilbert space is a big place."
– Carlton Caves

# Feed post number 382
Silver Nanowire Networks to Overdrive AI Acceleration — Reservoir Computing

# Feed post number 383
R.I.P. Design Thinking?
That's a bit like saying R.I.P office rentals as and when WeWork finally dies.
I suspect Ideo's woes are uncorrelated with the death of design thinking, more with its success, as in who needs to be told how to do it any more. The same could be said more generally about "innovation" as a cultural practice.
What once seemed like a kind of magic that possessed certain companies, like Apple, has been somewhat demystified (and devalued) or even "templated".
That said, it is ironic that Ideo cannot "design-think" its way out of whatever it's doing wrong. Or maybe it's just not run very well. Or maybe it drank too much of its own Koolaid and drifted off into meta-land?
DT has also been devalued by many corporate champions who pivoted to DT during the DT boom, but never really delivered much besides sticky-note sessions (now "Miro Board sessions").
All this said, my anecdotal experience is that design is still not widely understood. Take dashboards. Most of them don't work because they are not designed. They are merely produced. It can often be hard to find a dashboard producer who asked a user what they wanted.
I have worked in orgs that recite customer-centric mission statements, yet are not really obsessed with delighting the customer. The whole empathy piece is missing, substituted by analytics. Taken to its extreme, many product folks don't even care why something works, just that the A/B test says it does.
Many aspects of design have become rituals, not unlike the lip service paid to Agile in many orgs -- all highly rehearsed by a certain kind of personality that excels in rituals and jargon, yet completely lacks both empathy and critical thinking.
Anyway, reading about Ideo in its early days is how I discovered ethnography, which has remained a critical part of the toolkit for many labs programs I have run that attempted to rethink product meaning.
Ideo, I salute you!

# Feed post number 384
Design Thinking is Dead? How Absurd.
If the decline of Ideo signals that DT is dead, then we are all imbeciles for ever believing it had any value, given its widespread adoption.
The historical criticism of DT has mostly come from professional designers who objected to the idea that their discipline could be demystified. This attitude has existed since priests got antsy about printing Bibles. (And all professions have a priesthood.)
Those who cite Ideo's decline as more evidence of the death of DT are obviously not Bayesians. A common reason for decline of an industry is that its functions have become diffuse. This is therefore the most likely determination of Ideo's decline.
Nor is their decline evidence that DT doesn't work. The decline of companies has been well explained and documented and is a different type of cognitive trap than failing to empathize with users of (Ideo's) products.
When Ideo started, design was sorely absent from most company's sensibilities. Donald Norman documented a long litany of design failures, such as doors that cannot be pulled, yet still have a handle.
DT has become widespread. In a way, Ideo did their job of making themselves redundant.

# Feed post number 386
The Turing Test is Irrelevant (to Innovation)
After Church-Turing's conjecture about computational limits, the comparison with intelligence became inevitable. Rather than define intelligence, Turing suggested assessing via observations. He regarded machines that think as "an absurdity" (his words). However, the imitation game appears to have no practical value.
As for consciousness, theories are so divergent as to offer no practical value either. I prefer Chomsky's "mysterianism", which is that we know everything about consciousness (via experience), but nothing about the physical. But this is of no practical value either.
The Transformer invention was driven by engineering experimentation, not any theory of intelligence, nor language. The breakthrough was a surprise and shows the value of access to large computational resource in pursuing innovation. We still don't know why it works, other than it does -- "AI is alchemy". Abstractly, it seems related to meeting the frontier of Complexity present in language --
https://lnkd.in/guBB9RiE
Any insistence that AI must remain within the limits of what is explainable are problematic. Such limitations are unscientific. Post-Newton, science is the explanation of theories, not the actual world, mostly via mathematics and its "unreasonable effectiveness".
(Note: explainable AI outputs is a separate topic with its own regulatory frameworks -- e.g. loan decisions.)
This have never been so evident as with Transformer research. Look at the explosion of research attempting to do what? To explain how Transformers work, not how language works! This does not invalidate linguistic research. Indeed, it may well yield secrets that usher new approaches. But, unlike in physics where large-scale engineering advances understanding (via measurement), Transformers have revealed little about language (thus far).
For societal benefit, especially solving the poly-crisis, we don't need theories of intelligence or consciousness, but tools that can penetrate large-scale organizational and scientific challenges. Transformers do not scale to such tasks.
It is unlikely that we will get far by going down the ladder of abstraction, or emergence, but rather up, akin to renormalization in physics. The scaling hypothesis, insofar as it stands, indicates that we need even more powerful machines. This presents many problems for scaling innovation, as had dogged the silicon industry.
Human creativity remains a deep puzzle, as does organizational behavior if operational management literature and all means of predicting organizational futures is anything to go by.
Transformers are capable of creative production (per core feature of language --
https://lnkd.in/gztUT5TU
) without any theory of creativity. How can such efforts be scaled to organizational and scientific frontiers in order to solve the poly-crisis?
Turing's imitation game has nothing to say about it.

# Feed post number 387
Evaluating LLMs
Slowly plowing through this 111-page survey: Evaluating Large Language Models: A Comprehensive Survey --
https://lnkd.in/ggj-Aq8k
Just in the Knowledge and Capability Evaluation section alone, the authors posit the following taxonomy of tasks and evaluation methods (see diagram).
Enterprises are a long way off being able to conduct this kind of evaluation for their own "MyOrgGPT", hence why it's better to find very narrow LLM use cases initially, even as an introduction into enterprise LLM deployment.
Will such evaluations be necessary?
Yes, if you plan an Oracle-like chatbot for the enterprise. For example, you will have to evaluate mathematical reasoning on problems related to your domain -- you wouldn't want to ask about sales numbers and get the wrong total!
The same applies to logical reasoning. Take one aspect, say the use of sentiment in reasoning. We know that sentiment is domain-specific. A notable example is finance where layoffs can be seen as positive under certain conditions.
As I have already remarked in various places in the Frontier Handbook --
https://lnkd.in/gU4ydEQp
-- there are scenarios whereby faulty reasoning could lead to an erroneous suggestion to sell a competitors product 😮
Anyway, I hope to summarize the survey for key enterprise use cases soon.

# Feed post number 388
Crypto: Tip of What Iceberg?
It is clear to anyone who paid even moderate attention to the techno-cultural cancer called Crypto that much of it was grift. SBF was merely the most audacious.
To say he is the tip of the iceberg is almost certainly the case, but what iceberg are we talking about?
At one point, the notion that a business could be founded via a mere token and a flimsy white-paper full or jargon was taken seriously by many. Let's remember that some of the leading VC "pattern diviners" wrote lengthy "thought leadership" pieces about the transition to "protocols", a usurpation and reinvention of a hitherto perfectly well understood concept.
The failure of so many backers of SBF was not due to a "pattern recognition" failure -- "SBF was the founder archetype". If this is true, it only confirms that such believers and backers are the dumbest people on the planet and yet more confirmation that sophisticated degrees and "paradigm pushing" do not equate to any useful or productive intelligence whatsoever.
I have spent my life in engineering since a teenager. I have been around people who design chips, computers, telco towers, racing cars, drugs, injection molding, medical diagnostic machines, databases, bridges, aircraft and all manner of useful objects. Most of these folks are unsung heroes and do not speak the language of grift, paradigms or memes.
There are many such sincere engineering folks in silicon valley, but there is also a large swathe of grifters and parasites who wanted us to believe that We Work was some kind of lifestyle revolution or that Uber would be worth $1T because no one would want the convenience of driving their own cars -- one of the most sacred and closely guarded privileges in US history -- or that we would all zip around on scooters because of their reclassification from child's toy to "paradigm": micro-mobility.
These grifters have undermined a noble profession and deterred many of the new generation -- look at the rejection of AI in the Discord community and in many GenZ creator circles where there is a craving for authenticity as an antidote to profilicity (being a profile, not a person). Engineering is one of the most authentic careers one can pursue. With it, we can build tools that cure cancer, end world hunger and so on. Or, we can make Crypto!?
These grifters and their memes are all part of The Moloch and this is the iceberg that we are now crashing into.

# Feed post number 390
Hands up if your Meta VR headset sits gathering dust.
Mine does.

# Feed post number 391
On-prem AI—the market for on-prem solutions will explode in 24 and beyond. Supermicro’s USP is advanced liquid cooling via their proprietary design.

# Feed post number 392
Teaching *computational* math is a subject close to my heart. Moons ago, I had interactions with Conrad Wolfram, offering to develop materials adapted for the US. However, I learned, as he cautioned, that innovating in public education in “established” markets is a tall order. After various attempts, I gave up.
Meanwhile, Estonia adopted his methods, plus others, and is now moving ahead of most established systems.
Note that such methods are also increasingly widespread in China.
“In 2013 it was the first country to implement a radical approach to math education, spearheaded by Conrad Wolfram, younger brother of prodigy mathematician and physicist Stephen Wolfram of Wolfram Alpha and Mathematica.”

# Feed post number 393
More insights into the fundamental limits of QC—timing, or “clocks” in classical circuits.

# Feed post number 394
AI: Data is EVERYTHING (but what data and when?)
In the ladder of abstraction, if we start at some quasi-theoretical hand-wavy vantage point, then data is the *only* meaningful differentiator.
From the POV of modeling, OpenAI has remarked how hyper-parameter tuning ("knob fiddling") of the models makes "no difference" -- the models eventually converge to the data [due to scale]. Data is EVERYTHING.
From the POV of IP, 99% of enterprises are going to use pre-trained models [see important caveat below], so model selection holds no competitive adv (CA). The differentiator is corp-specific data.
From this POV, two key aspects emerge: data quality and data novelty. It has been widely reported that quality has a major impact. We can regard this a truism and therefore a CA. In this regard, those with poor DataOps will suffer because quality will be hard to scale. It is a truism that good DataOps can propel AI adoption and CA.
Poor DataOps could harm AI adoption and worsen affairs. Think of adding a field via reverse-ETL to SalesForce from some AI process hamstrung by poor data quality (e.g. stale, inaccurate, whatever). This data circulates into the warehouse with potentially harmful side effects. Sales could actually suffer!
Data novelty is clearly an advantage. Interestingly, it means incumbents are more resilient to disruption from entrants who lack such data. AI can unlock latent value in existing datasets in ways hitherto beyond economic reach. The economics of data in enterprises is often highly distorted -- it is far from being a "free market" so to speak, rather a series of fiefdoms and distortions. Think of AI as turning it into a "free market" with concordant efficiencies.
From a use case POV, the power of models is such that they can solve problems with very little data prep, per the "prompt hacking" feature. In this regard, immediate ROI is possible across many use cases without some grand "data or AI strategy". Data here is EVERYTHING, but it means the data used to pre-train the model.
Waiting for AI Strategy is akin to delaying investment decisions: a bad idea. The field is moving so rapidly that there is insufficient time to wait for strategy in the way it typically manifests -- appointing (the wrong) people, committees, death-by-powerpoint, hiring Big C and -- importantly -- refactoring data. (AI Strategy can be meaningful and is recommended, but requires a lot more explanation than this post.)
Model power means "quick wins" are possible (also as an antidote to strategy) with very little AI-specific data prep, or none. Therefore it is also a truism that democratization of AI tools can provide a CA. But note that democratization and decentralization are not the same things. Democratization often requires good DataOps as a pre-requisite vs. the commonly seen "tribal knowledge" default. Decentralization is often akin to chaos, modes of which could be exacerbated by GenAI (see above SF example magnified by 100, or whatever).

# Feed post number 395
“This breakthrough ushers in a new era of organic polariton platforms designed to build a strong foundation for the field of liquid light computing at ambient conditions”

# Feed post number 397
Theory of Intelligence (Unlikely?)
As an observation regarding speculation as to the emergence of a useful theory of intelligence, it is interesting to hear Robert Laughlin's view on the timeline for a "Theory of Everything" in physics. He is one of the most celebrated physicists alive.
He remarks that we are too early in history, by a few millennia!
In short, this is due to an absence of technology that can measure quantities at increasingly larger or smaller scales.
The interview is quite enlightening in a number of ways, including the role of measurement and how to think about scale and abstraction.
There are many parallels with AI research in terms of where in the ladder of abstraction our theories and achievements actually might lie. But I will leave that to people way smarter than I to pontificate about. (Some of his books have interesting parallels to AI research, but probably not in any practical sense.)
https://lnkd.in/geCDb5Wj

# Feed post number 398
Reverse Turing, or the "ChatGPT Test":
With the rise of so many gated services where you have to pay to speak to a "guru", at what point will their advice become indiscernible from ChatGPT?
LinkedIn already headed that way.
Not so much singularities, more like Contrafibularities 😂

# Feed post number 400
Learning QC
Starting life as an EE and then working as a silicon engineer makes the transition to QC somewhat easier -- and exciting.
I remember learning VHDL, which is a language to describe and simulate hardware circuits. It took some getting used to because it is for describing circuits, not emulating their operation (which is done by the simulator) -- the key difference being that circuits operate in parallel (and on a variety of time bases - clocks) whereas programs operate sequentially.
With QC, the same is true: languages like Q# and Qisket are used to describe quantum circuits down at the gate level. But because a QC is operated via a classic computer, there is a mix of classical and quantum operations and primitives available in these languages.
Of course, then there's the weirdness: superposition and entanglement, plus operations vs. observations etc. And the need for "un-computing", especially for resource management. QC, due to the very small number of available qubits, is like a return to the most stringent of resource management principles -- long forgotten in the age of computational abundance.
It is also a very different era now. When I started with VHDL, there was no web. Ditto when I built my first MLP using Matlab and C. We also used silicon (e.g. FPGAs) which could be plugged into a device called a hardware emulator -- it was fed with signals from the Mentor Graphics software simulator. It enabled the simulation of circuits for which there were no simulator libraries. This approach is similar to QC whereby the QC itself is a peripheral to a classic computing system.
Today, we can access a plethora of online learning materials all the way from hardcore quantum math to QC simulators to actual QC devices "in the cloud".
I am gathering my own set of notes and resources for QC and hope to share soon.

# Feed post number 401
ChatGPT is the new "universal client," the words used by Berners-Lee to describe the browser: a natural observation (given the client-server paradigm) that was not embraced fully until the so-called 2.0 era.

# Feed post number 402
Biden's AI EO
Am I qualified to comment? No, but perhaps as much as the next person who seems to think they know the future -- often on this topic and no others.
My first commercial NN was in 1994 (patented 96) as used for noise mitigation in cellular comms. I've designed dozens of AI/ML and computational systems ever since (with 30 patents). But I'm not an AI sooth-sayer.
My meagre contribution would be to pay attention to this Stratechery post via the lens of innovation --
https://lnkd.in/dhg84NcA
I would also suggest paying attention to court documents of myriad lawsuits against Big Tech to understand their operational weaknesses in abiding by regulations or prioritizing consumer interests.
This article by Seven Sinofsky is also a useful counterpoint --
https://lnkd.in/dWkeVKNW
We are in the middle, or perhaps end stages, of a planetary poly-crisis with various boundaries already irrevocably crossed, like the infiltration of PFAS in most living organisms without any hope of an "undo" button. The latest climate predictions are frightening, yet don't make headlines any more.
Will regulated players actually abide by regulations? There is empirical evidence (see lawsuits) that they won't. Is there a meaningful chance of innovation attenuation that could negatively impact our chances of using hyper-scale AI to solve poly-crisis factors? I don't know, but these commentators (linked above) seem to think so.
Or is there another way to identify more meaningful questions? Perhaps the framing of The Moloch is one of them? If so, these regulations will have zero impact.
https://lnkd.in/d3n_BQSf

# Feed post number 403
AI UK
Notably, a post Brexit Britain takes the stage with AI invention. Whoops, no—I meant regulation.

# Feed post number 404
Room temperature QC approach.

# Feed post number 405
David Stevens
is one of the leaders in using graph with LLMs with real use cases versus the myriad opinion pieces and code example posts. Worth paying attention to his work.

# Feed post number 408
Photons and QC
For anyone learning quantum computing, I converted the excellent Java-based teaching tool of
Kumar Ramanathan
to python and added the config to the readme.
Of course, there are great open source simulators, like Qiskit, but this is more of a tiny teaching tool for one particular aspect: "spooky action at a distance."
https://lnkd.in/gCeEkh9U

# Feed post number 410
There is only one truth in software product history.
Nothing can kill Excel.

# Feed post number 412
Tab Hoarding
Some of you will recognize this pattern, and even some of those icons.
(And it is but a tiny fraction of tabs within windows within desktops.)
I have come to the conclusion that I am a digital hoarder.

# Feed post number 413
More outstanding work from
Mohsin Bilal
and his team in the field of AI cancer detection in biopsies, surpassing previous benchmarks using weak supervision. Congrats Mohsin and team.

# Feed post number 414
For my London folks. David is a highly competent solutions engineer who knows his stuff. And, he’s a nice chap 😀
If you’re exploring LLMs with graph, why not join him at this event. David published one of the earliest code examples of using graph with LLMs, at least that I saw.

# Feed post number 416
Decisions, not Data
“The purpose of computation is insight, not numbers.” Hamming, 1962.
Ironically, many dashboard producers seem to believe the opposite.

# Feed post number 417
Excellent insights from Vin.
In principle, a key use case of AI ought to be the reduction of switching costs. This is certainly a good area of exploration by innovators.
However, the reality of switching is often way more complex in a large enterprise than anything GenAI can solve.
This is because the reality of an embedded system is that it becomes a new "system" within the enterprise that is an aggregation of poorly configured software, layers of hacks and, critically, layers of tacit knowledge (often due to political structures). These can make the use of that system in practice highly intractable to sense-making via foundational models.

# Feed post number 418
Ajit Jaokar
-- I had to repost rather than comment to get more words to fit the post. A few quick thoughts:
The criticism that abstract tasks cannot represent a separate system of task execution (e.g. one-shot) because they are reducible to the same underlying task (next-word prediction) is problematic. The same is true of grammar, at least according to Chomsky's minimalist thesis that invokes principles of parsimony to predict only a few key operators at the heart of language (Merge).
This meaning of emergence in Complexity Theory is that a system can emerge that is entirely self-explanatory (within some ontological sense) without resort to inspecting underlying functions. An analogy is software: we can talk of apps and even build entire ecosystems and markets upon them without the need to explain such processes in terms of peek and poke operations in memory. Yet, that is all software "really" is.
Regarding scale, the scaling hypothesis has been better explained via Complexity Theory. If we believe the claim of some linguists that language is a Complex Adaptive System, then there is a maxim of CT that says that Complexity can only be met with Complexity. Given the billions of parameters, LLMs are likely Complex systems, hence why they have shown this property of generalizing to so many "out of sample" language tasks.
Chomsky claims that language is a system of thought, not communication. The author of the post does reference "language of thought". The word at the start of a string often refers to a word some distance away in the string to complete its meaning, which is computationally inefficient (non-parsimonious). Chomsky argues this is because serialization is for communication whereas language itself is a system of thought.
This is pure conjecture, but perhaps the self-attention mechanism gives us some reflection of this. And we still have no real idea of how the fully-connected layer exploits this, especially over multiple layers. However, it might be accurate -- in some very vague, but computationally realistic, sense -- to describe this as mimicking thought (of course, in a very limited fashion). It can certainly lead to creative use of language (as in novel string formulations). Whether or not this classifies as intelligence is for folks smarter than I to debate.
(By the way, in terms of parsimony and intelligence, I find Yi Ma's paper provides a useful perspective, although it is somewhat of a dense read --
https://lnkd.in/gixsqV6B
)

# Feed post number 419
Originally, the dumb pipe metaphor was a response to "over the top" software innovators (internet services) who were seen to extract value from the connection without it needing to do anything other than connect two IP addresses.
Software innovation was considered "smart" versus connectivity "dumb".
Many attempts were made to be otherwise (i.e. provide software-based innovation). They mostly failed and accounts of why can be argued and analyzed 100 different ways. I once wrote a book about how it might be otherwise, but that doesn't make me an expert.
Of course, the infra people knew how smart it actually was in some sense: 2G was on the very leading edge of what was possible with signal processing via silicon within a viable power-consumption range and limited spectrum. At Motorola, we had metrics like bits/MIP/MHz -- I can't quite remember. But 2G was more or less at the practical bounds and only possible due to silicon innovation (namely the invention of DSP chips that was spurred by telecoms).
Even in the early 90s there were actually plenty of "smart infra" use cases touted, including what would now be called IoT, smart cities, even things like conversational platforms (one of many smart-infra ideas during the IMS phase of network innovation) etc. I even submitted a patent (1992) to run a network of digital advertising billboards over the network -- we were experimenting with spatial-division multiplexing which we felt would give us accurate location (pre GPS in the handset).
The patent was rejected by Motorola itself who considered the idea of "network services" as "not relevant to our business" (I still have the rejection note somewhere). Well, where are they now?
Anyway, this probably has no relevance to what Dean is talking about below, but I consider the metaphor was an accurate description, and still is, in relation to adding value via software innovation.

# Feed post number 420
Technology
The origins of the word is craft. This doesn't mean doing ceramics. It is the mode of human ingenuity via tool invention and use. It is an awesome human capacity. My mother used to stir the teapot using a metal spoon forged from Sheffield steel. She didn't use her finger or a stick. She used an umbrella to stay dry and wore clothes made by machines made from fabrics and dyes derived from oil-based chemicals. She enjoyed visiting places using jet-powered air travel.
She once bent a coat hangar to clear the tumble-dryer outflow -- i.e. she made a tool to solve a problem.
There are no anti-technology people. It is an incoherent claim.
There are scholarly criticisms of dogmas like "technology is neutral" -- e.g. read Neil Postman. Only a fool would believe otherwise in a world awash with forever chemicals and micro-plastics whose longterm impacts are potentially catastrophic. There are also scholarly analyses of innovation. By some measures, according to some scholars, it has declined (as in rate of fundamental inventions). Monopolies are one factor. This is not an anti-trust issue, but the sense in which, say, the existence of only two platforms for desktop computing clearly stifles innovation.
There is a domain shift between the ingenious step of inventing a water-propellant chemical, like PFAS, and the subsequent dynamics that allowed it to flood the ecosystem with carcinogens. It needs careful study.
My mother died from the ravages of metastatic cancer. Attempts were made to prolong her life using all manner of technical interventions, many of them invented via publicly funded research delivered via markets. But perhaps some other technology, like PFAS, gave her cancer in the first place.
With PFAS, we have hit a so-called planetary boundary. There is no "undo".
There is a tension between inventing an ingenious chemical and it then doing harm, accidental or otherwise. So, in what sense should we be free, as in free markets, to exploit our inventions?
In Complexity theory, emergence is the property that an abstraction requires no explanation in terms of underlying mechanisms. In the case of markets, to understand why harms are caused, we *do* have to dig down a layer in order to explore concepts like externalities that are, as the name says, external to market dynamics.
The hope that global harms can be "solved" using the same emergent mechanisms that caused them is not techno-optimism. It seems like blind faith.

# Feed post number 421
Excellent analysis of the challenges of 5G by one of the world’s leading independent analysts
Dean Bubley

# Feed post number 424
Multi-agent technology seems like a good idea, as if it might be the future of "Computable Organizations" -- good review here
https://lnkd.in/gbB88Qmq
Indeed, there are some interesting research ideas we can pursue here.
I see huge applications in games and new forms of entertainment, some of which I have been researching.
However, agents are based upon reinforcement learning. As LeCun has made clear many times, the information sampling rate of RL agents is absurdly small (lots of actions to get an infrequent scalar reward signal) compared with other modes of learning, especially self-supervised.
It isn't clear how these techniques could extend to the sparse, yet massively high dimensional state-space of organizations -- i.e. at the organizational level vs. some specific task, like materials exploration for drugs and various task-optimization problems (like logistics).
Contrary to what is suggested, I doubt that these techniques will prove valuable in social sciences in any breakthrough way. A recent deep analysis of the cessation of smoking using machine learning to understand various evidences reported in research papers demonstrated a failure to extract meaning from those evidences, even using relatively state-of-art methods (Flair NLP).
However, it should still be explored in the spirit of scientific inquiry because there are many social sciences problems (like behavioral modification for healthcare) that are vitally important to society.

# Feed post number 425
The Reality of LLMs... Reflections (Part 1)
This is a short reflection, as I don't have time to write essays any more.
There is always delight in figuring out the paradigm, like the endless debates about Web 2.0, Mobile 2.0, Big Data, and now Gen AI, or even AGI.
Of course, paradigms are mostly of use to historians, marketing folks, academics, grifters and pundits, notwithstanding how social media has teased us all into becoming pundits.
I was intrigued by the framing of the
Entertainment Technology Center @ USC
(attached) who framed the current paradigm (or era) as "Computable Content" and the forthcoming one as "Computable Organizations" --
https://lnkd.in/gH3CcPAW
There is a natural assumption (implied here) that computable content will evolve into computable organizations. I doubt it.
I prefer an alternative framing of "Addressable Content". There is a genuine paradigm shift towards content being audience addressable (selected) versus author dictated. We no longer have to receive content in the way it was produced.
Whilst many are surprised by the power of ChatGPT (witness all the posts about it), it has not produced anything surprising. Indeed, seen for what they are, they are not doing anything surprising anyway: it's just our intuitions were not prepared for machines that "make sense" of the entire internet via the distributions of words versus indexing of pages.
An interesting question is how far will the paradigm aid innovation within enterprises. This might tell us how to price its usefulness.
The question has somewhat been addressed by N. Taleb, repeating the trader's advice that if you have an investment idea (of an advantage) don't do it: it's already built into the price.
To a large extent, this is true of orgs, especially where information asymmetry is increasingly hard to come by: we're all being sold the same "insights", often heavily skewed via the pressures of group-think that plague the web.
Throwing org data into FMs and expecting competitive advantage is also built into the price.
This is evident to anyone who has ever studied innovation within orgs. The application of "recipes" seldom works. The epitome of this was the so-called "ideas markets" in orgs. In reality, they gave no returns.
FMs will likely do no better. They will make people more productive in ways that don't really matter. What matters is whether they will free more individuals to be creative in increasingly unique ways that do matter.
I have a hunch that those who view the org through the lens of mechanical efficiency (like the current "programmer productivity" debate) will set up their orgs to fail, perhaps accelerating decline.
Those who will win are the ones who will find ways to use GenAI in ways that increase variance, creativity and randomness. I have not really seen any evidence of this yet. But it is early days.

# Feed post number 429
This is the challenge of LLM system architecture: blink and the game has moved on.
Here,
Hugging Face
gives us a new benchmark in embeddings, seemingly enabled via optimized LLM architecture (e.g. Flash Attention), systems programming and CUDA programming:
- Candle: Rust framework for ML inference -
https://lnkd.in/gsaT8nej
- cuBLASLt: Lightweight CUDA library for GPU matrix multiplication optimization that uses heuristics to select the optimal kernel (a CUDA math routine) depending upon the presented workload

# Feed post number 430
Can LLMs "Read Our Minds"?
Whilst researching LLMs for personality profiling (a subject I previously studied via AI modeling for a fintech), I came across this curious paper:
"Theory of Mind Might Have Spontaneously Emerged in Large Language Models" --
https://lnkd.in/gXeQ-Z5A
Leaving aside the contentious term: "Emerged" (never mind spontaneously), the paper makes the following claims:
- Explored the potential emergence of theory of mind (ToM) in large language models (LLMs).
- The researcher designed 40 false-belief tasks to test ToM, historically a unique human capability. [False-belief tasks are tests to assess an individual's understanding of the fact that others can hold beliefs that are different from reality and different from their own beliefs. Tests are often done with children using dolls to act out a scenario.]
- Older LLMs showed no task completion, but performance improved with newer models.
- ChatGPT-4 (June 2023) achieved 90% success, comparable to seven-year-old children, so the author claims.
Results hint that ToM might "arise" as LLMs' language skills advance.

# Feed post number 432
These claims sound plausible, but they are misleading without specific use-case qualification. There are myriad ways to use AI/ML without waiting first to refactor data. Moreover, in a large enterprise, refactoring data is a never-ending process.
The irony is that it is now often the opposite: LLMs, data, data, data.
LLMs allow for a far greater rate of progress in many biz tasks precisely because they are so powerful in overcoming messy data obstacles that hitherto might have needed substantial labeling, pre-processing or similar rationalization efforts. You can literally create a knowledge-base, or a set of ML features, where there wasn't one sitting in the data warehouse, just by mining unstructured data using LLMs.

# Feed post number 435
Numbers Every LLM Dev Should Know
I spent much of the weekend digging into every facet of LLM inference optimization and engineering, from numerical precision to continuous batching to paged attention.
I came across one of those handy number summaries (below).
Given the source, I take them to be reliable of sorts.
Notably, consider the stat: 40-90% amount saved by appending "Be concise" to your prompt. Of course, this is a highly selective example, but indicative of the need to be aware of accumulating costs via sub-optimal prompting.
I plan to make my own "key number/dimensions" table, so watch this space.

# Feed post number 436
Physics Informed Neural Networks (PINN)
[Two of my favorite topics combined -- yay!]
Recently I was exploring sustainable construction techniques, including 3D printing, in order to understand the applications for AI in sustainable cities.
One example is the use of RL to optimize cement kiln processes via a digital simulation ("twin") of a kiln. There are several start-ups in this space. I have reviewed some in my work for
Seed2Exit
.
There are a number of industrial processes where the underlying material and process-reaction differ from run to run. Such processes are typically characterized by non-linear partial differential equations (PDEs), which are hairy to solve, especially in real-time.
It reminded me of the work my colleague
Adam Connolly
in carbon-fiber injection molding, so I reached out to him. He introduced me to the interesting field of PINN, which I had not encountered. I expected to encounter it in
Steven Brunton
's brilliant book Data-Driven Science & Engineering, but not quite.
Meanwhile, I found this great resource by
Maziar Raissi
:
https://lnkd.in/gFqNa59f
And a wonderful introduction via Ian Henderson whose diagram is pinned below and to whom I give full credit --
https://lnkd.in/g7v9RaCb

# Feed post number 437
Making LLMs “forget”

# Feed post number 439
WHY?
This is one of the most important instruments known to humans. The question did not precede the thought, rather the thought -- to understand cause -- is wired into the brain.
There are many perspectives one can take on this question, from philosophical to the practical, including innovation.
I have run many R&D teams and the ability to ask this question is what I look for -- essentially, curiosity -- plus a willingness to suspend judgement, especially about one's own framing or predilections. The best innovators I have met have this knack of taking a question and reframing it: "So, what we're actually asking is..."
To that end, I still find Feynman's "Why" interview inspirational. Of course, we tend to lionize well-known figures, but I have met lots of corner-of-lab folks who are not famous cut through problems, essentially by not getting in their own way.
https://lnkd.in/gB4pburi

# Feed post number 441
A useful report on what news organizations are doing with AI. Thanks to
Mohamed Nanabhay
for pointing it out to me.
Recently I have done some work in the use of GenAI for journalism, so this is a timely research report. Also, it is a *real* report, as in longer than the single-digit-page click-bait pamphlets we often see described as "reports".
I have yet to analyze it, but will write up a summary within the next 2 weeks.

# Feed post number 442
If you’ve ever worked with OCR problems, as I did for fintech KYC challenges, then you’ll perhaps be familiar with Tesseract, as in the OCR library, not the N-dimensional space at the end of the film Interstellar 😀
In my case, I managed to exceed 3rd-party financial doc-processing solutions by incorporating a good deal of statistical and geometric CV, including the stroke-width transform.
But this DL library, Nougat, from Meta, provides new levels of possibilities for document processing by combining vision encoders with text decoders via our trusted friend, The Transformer.
Happy doc processing! 😀

# Feed post number 445
AI and Learning
There is ongoing research, and debate, about what machine learning means.
I do not mean the shallow flexes of the "AI vs. ML" definition saga, as if having the "correct" definition represents intellectual insight.
Nor do I mean the technical definitions of learning, such as the generalization of a model from a sample to the population ("underlying distribution") and the various performance bounds on that process related to model complexity (VC Dimension) etc.
Nor do I mean the theories for improving model architectures by invoking natural-law principles (from biological learning), such as principles of parsimony or self-consistency, per Yi Ma's paper --
https://lnkd.in/gbMkzrvS
Rather, there are useful "meta" observations, and even theories, about the progress of modeling -- i.e. how well do new models perform vs. previous models. As some commentators have pointed out, what humans are really trying to do with computational models is to make them better over time, which is a better framing of "machine learning", as in improvement is evidence of meta learning.
Actually, Ma does reflect upon this in terms of describing AI progress (of architectures) as a kind of "artificial selection".
One concept of learning curves in this sense is conveyed via this blog post: "Empirical Risk Minimization is not Learning" --
https://lnkd.in/g78Cjr_U
My curiosity is concerned with the acceleration of this process by using our current AI techniques to enhance auto-didacticism (self learning).
As Tom Mitchell points out: "this is the decade when AI will truly revolutionize online education. Why? Because (1) for the first time we have finally have online education sites that have taught millions of students, providing more training data showing how students learn, than a human teacher could ever see in a 100-year teaching career, and (2) recent AI advances in machine learning, large natural language models, and reasoning give us the right tools to build AI agents that tutor online students" --
https://lnkd.in/g7w4BYbb
This is to be positioned against the functionaries of education whose main goal is to frame thought and engender compliance. For them, no doubt AI presents a different kind of opportunity. We already see evidence of this viewpoint in various strands of AI regulation.
That aside, it would seem plausible that the greatest acceleration of "machine learning" won't come from the proposed scaling laws of deep learning, but rather the amplification of AI-assisted creativity directed towards computation.
Considered via a strategic lens, there are many ways this could be accelerated to bring about the next dawn of AI.
As Chomsky has argued for decades, progress (in science) is via ability to be puzzled by simple things. However, very few are given the space to do so. That could change with AI-accelerated education. We must make it so.

# Feed post number 447
We need to be diligent about our framing of AI and apply tried-and-tested engineering methods versus over-generalized (forgive the AI pun) anecdotes.
Firstly, one cannot take a single error condition and infer anything about underlying ETL. If this image is  real, then the error here is more likely from misaligned human-alignment rules, not from a "data swamp" problem.
That said, when I attempted to re-create the error using PayPal Assistant, I got a very different response that started with the text: "To report potential fraud, spoof, or unauthorized transactions to PayPal, it's crucial to act promptly."
If I had to guess, it looks like the chatbot is still using classic intent-based techniques, which I would expect given the sensitive and regulated nature of this service.
The post then goes on to question LangChain using comparisons with tried-and-tested ETL tools and/or methods.
The novel nature of LangChain and, indeed, 99% of the methods it is wrapping, speak for themselves in terms of potential risks.
LangChain offers a set of novel convenience functions that are useful for experiments. The traditional engineering and product expectations should apply to the use of novel technologies. There is a confusion in the comments/links that we should rely upon mature ETL. There are no mature ETL tools for most of what LC is wrapping. The weakest link is still the stochastic nature of the task in hand and the fragility/risks of building a system upon prompts, and more so prompt-chaining. These are active areas of research.
There are plenty of things one could criticize about LangChain and perhaps unrealistic hype/expectations surrounding it, but its lack of maturity is not one of them.

# Feed post number 448
“We aspire that the Falcon series of LLMs will serve as a catalyst for the AI community to collaboratively foster innovation and uncover fresh solutions for the greater good.” —
Dr. Ebtesam Almazrouei

# Feed post number 450
Interesting to see integration of transformers into the Unity environment.
I believe there's an entire industry waiting to bloom around NPCs in gaming where the use cases and performance constraints are very different to many of the classic ones we're seeing in LLM benchmarks etc.
Many interesting intersections with tokenization (as in Web3, not NLP) and metaverse ecosystems.
There are also many parallel use cases in the media/entertainment industry generally. This is an exciting frontier of AI research and implementation.
khaled Taha

# Feed post number 451
Yet another fine-tuning trick...
This paper by Microsoft is yet another example of how the structure of the
hashtag
#
finetuning
training data makes a difference --
https://lnkd.in/dqpv9A6g
They found that re-structuring the data as reading comprehension tasks (see diagram) improved performance, especially on financial, legal and medical data, helping to avoid a failure mode known as "catastrophic forgetting".
This method in general is called supervised fine-tuning.
Notably, under certain test conditions, a 7B model outperformed the much larger
hashtag
#
BloombergGPT
pre-trained domain-specific model.
Some commentators have expressed a kind of frustration that the performance gains in LLM use cases often involves discovery of some kind of "trick" like this, not too dissimilar to
hashtag
#
promptengineering
However, that is the nature of language and large models with unfathomable datasets --
https://lnkd.in/g7FZgcXK
LLMs have learned something about language structure, most of it in ways that are unexplainable. They weren't programmed with "language rules", but just asked to model joint probabilities. These experiments, like re-structuring the fine-tuning data, exploit some of that underlying structure in unpredictable ways. It is exciting because it suggests that there are still plenty of approaches to LLM use-case optimization. It also hints at the need for an experimental approach to LLMs in the enterprise on a use-case by use-case basis.

# Feed post number 453
LeCun’s point is still relevant with some commentators who claim that LLMs are a failure because of hallucinations, which themselves are due to the statistical architecture of DL.
They have a blind faith that there is some yet-to-be-discovered theory that completely explains language via natural science.
Clearly, language is attributable to some natural laws. Although, some have claimed these laws are related to Complexity. Possible evidence for this is that it takes a Complex system (LLM) to at least get close to simulating it.
However, DL is almost entirely an engineering field. Chomsky’s point that it’s like learning the laws of motion by pointing a camera out of the window to learn the statistics of falling objects has no relevance. By definition, DL can only ever approximate the world via sampling, not discover it. It’s like saying that an artist who’s not Van Gogh can only ever mimic Van Gogh. Yes, be definition! But so what?
If an engineered system fulfills a specification within its constraints, then it works. It has no need of theoretical alignment with nature.
My only exception with these “history of AI” stories is that there were plenty of engineering labs that made AI work before the official publication canon declared various solutions like weight randomization, ReLU etc and the end of the AI winter. In the DSP field, many of these were obvious “tricks” that we didn’t need to publish papers about in order to join the official history of DL. My first MLP was in 94 in Motorola R&D, as a junior DSP engineer. We ran on proprietary SIMD silicon (pre-GPU) and didn’t need to wait for the web to be invented to get data.

# Feed post number 455
Whilst everyone lost interest in crypto and/or pivoted to AI, the tokenization of assets has quietly continued, especially via innovators like
Jamie H. Finn
whom I had the pleasure of working with a few moons ago.
My own analysis in the future of retailing for a large retail platform provider, showed ample opportunities for innovation in tokenization of various assets, including intangible ones, like a reservation spot in the line for a new product release etc.
Moreover, I am not ashamed to say that the "Metaverse" presents ample opportunity, just not in the reductive fashion it was sold to us by the latest wave of enthusiasts.

# Feed post number 456
Hallucinating about Hallucinations
I continue a series of blog posts to interpret, via an enterprise lens, the survey paper Challenges and Applications of Large Language Models --
https://lnkd.in/gTJyzRSe
These posts are written for non-technical decision makers within the enterprise. They seek to raise awareness of the gap between LLM demos and LLM production, which is potentially vast for some use cases.
Today, we tackle "Hallucinations," going beyond the surface of the review paper's treatment to include a number of other perspectives, some of them overlooked, such as adversarial attacks. Thus we include materials from a review of the more focussed paper: Survey of Hallucination in Natural Language Generation --
https://lnkd.in/g8M9GYqN
This subject is much larger than some might anticipate given the oft-said claim that hallucinations will soon be fixed. As we shall see, such claims are too vague to be taken seriously. Plenty of folks are apparently hallucinating about hallucinations.
On the other hand, some folks claim that hallucinations are unfixable. Of course, this depends upon what is meant by hallucinations and what is meant by unfixable. To an extent, we explore these questions, but not to the level of theory that some linguists do in making these "unfixable" claims. (We can explore this theory another time.)
We largely follow the paper's categorization into intrinsic (logical contradictions) and extrinsic (lack of source information) hallucinations. However, we also explore the framing of faithfulness and factuality, highlighting the challenges of even defining the meaning of factual correctness in LLM-generated content.
Privacy concerns arising from sensitive data generation and potential reputation damage are examined, highlighting research about retrieving PII information embedded in the training data. We also touch upon adversarial attacks on LLMs as a source of hallucinations. For example, a model could be made, by an adversary, to appear as if it is leaking PII data. This might be used as some kind of "denial of service" attack, so to speak.
We explore strategies to mitigate these challenges, including data quality enhancement, question rephrasing, and multi-turn prompting logic.
Understanding error tolerance, testing, and mitigation becomes crucial when implementing LLMs in enterprise settings. In some ways, none of this is new, as in handling constraints, but in many ways the subtleties are very new. And, in some cases, highly challenging, especially given the added complexity of "unfathomable datasets" --
https://lnkd.in/g7FZgcXK
In the end, tolerance for hallucinations hinges on use case and associated risks, but it is not a straightforward terrain to navigate.
hashtag
#
AIinEnterprise
hashtag
#
LLMChallenges

# Feed post number 457
I have always enjoyed analytical thinking about business models. Geoffrey Moore, of course, does not disappoint in spelling things out that often the rest of us cannot see.

# Feed post number 458
Why Don’t Students Like School? (And can AI help?)
By Daniel T. Willingham
I only recently discovered Willingham's book, despite a longstanding interest in learning via various independent-learning (IL) experiments with my family. (Well, he wrote it after I had figured much of this out via the IL communities.)
One of my sons is exploring AI-assisted learning and so went in search of frameworks with the help of
Ahmer Mumtaz
who is active in this field. He introduced us to the book -- thank you Ahmer 🙏 -- and lots more besides.
One of the author's claims relates to learning via seeing and moving. UC Berkeley has a lab in embodied cognition. Loosely speaking: "Learning through moving" --
https://edrl.berkeley.edu/
Some of these ideas are included in some Nordic classrooms where mobility in the classroom is enabled via innovative space design etc.
Below is a summary of a paper by the author (which itself summarizes the book).
- The primary argument is that contrary to popular belief, the brain is designed to "avoid thinking" because thinking is slow and unreliable.
- People enjoy mental work only when it’s successful. They like solving problems but not working on unsolvable ones. If schoolwork is consistently too challenging for a student, they might not enjoy it.
- The author underlines how humans are naturally curious but not naturally good thinkers.
- The brain is more efficient and reliable in functions like seeing and moving than in thinking. Most of our brain’s capacity is devoted to these functions.
- People often rely on memory rather than thinking. Memory stores personal events, facts, and procedures. When faced with familiar problems, people use memory to guide their behavior, avoiding the need for active thinking.
- Even though our brains aren’t efficient thinkers, people enjoy mental activities like solving puzzles or reading about interesting topics. The pleasure is in solving the problem, not just knowing the answer.
- Curiosity prompts people to explore new ideas, but they quickly evaluate the mental effort required. If a problem is too easy or too hard, they tend to avoid it.
If students find schoolwork too difficult, the solution might be to make thinking easier for students by understanding how thinking works. This meta-cognition aspect is surprisingly missing in many teaching scenarios, especially where teaching to the test has established certain constraints.
There is an opportunity to rethink education in light of AI, perhaps in radically new ways because it can handle certain complexities that don't scale well in classrooms. It will be interesting to see how the story unfolds and which nations will adopt radically new techniques.

# Feed post number 459
What is meant by "LLM agnostic?
Did McKinsey choose an LLM, or not? Or did they use a mixture of experts approach across several LLMs? Or just different LLMs for different use cases?
The self-congratulatory articles written by McKinsey about their work are to be expected, given they sell this to their clients. Sadly, the articles read like marketing materials, not operational science, so we don't learn much.
Without counterfactuals, and indeed details of their architectural decisions and evaluation criteria, nothing useful can be said about McKinsey's approach. It is already quite trivial to launch an "internal chatbot" on a corpus of documents and get subjective feedback on productivity. One could market that to death with the right resources.
Regarding BCG's efforts, no one in the field would take a chart like that seriously. It is no better than anecdotal. However, maybe that's all we need -- or should be in many cases because the productivity gains of using GenAI in knowledge management are as obvious as those enterprises faced when deciding to adopt the web (as a productivity aid).
The optimization of LLM-backed services is still a relative art w.r.t. the vast number of potential approaches, notwithstanding overall improvements from pre-trained model scaling. Hence it makes sense for serious players to explore building their own capabilities because it is highly plausible that they could find defensive moats within a large optimization space across so many different use cases. We should expect most large enterprises to build their own AI services to some degree, because there really are competitive advantages in it, assuming they can execute.
A common misconception is that LLMs level the playing field so much that any attempts to innovated around the subject are futile. However, such comments are oblivious to the rate of innovation in this field across all aspects of adopting, optimizing and improving these technologies. And few 3rd party tools are keeping up either. Every week I review a new tool in my work for
Seed2Exit
to find that their core IP claim has already been superseded.
Interesting times.

# Feed post number 461
Seems LinkedIn selective about misinformation given that this academic has been shown to use fake data in several key studies that were pivotal to his standing in the field.
https://lnkd.in/g3z-ZiZf

# Feed post number 462
Good resource for exploring "ethical AI" orgs.
Probably already widely publicized, but I only recently discovered it thanks to
Mohamed Nanabhay
https://www.eaidb.org/

# Feed post number 463
Many of us saw Apple's recent ESG video and their mention of huge investment in forest renewal.
This event is a critical contribution to innovation in forest ecosystem management and sustainability, and our group
Seed2Exit
is proud to be supporting this event.
Not only is our team passionate about this space for ecological and ethical reasons, but we have an active interest in climate-tech with significant expertise.
Of course, there is a lot of scope for AI in helping to address critical issues in forest management, fire hazards and so forth, besides the many applications in ESG-related activities.
If you know of potential sponsors for this event or innovators in this space, please contact our partners
Gregory Gorman
and
Peter Jordan

# Feed post number 464
Amongst all the FM hype, the adversarial issues have been overlooked by many enterprises. Good insights here.

# Feed post number 466
RAG evaluation using LLMs. (Databricks)
“GPT-3.5 can be used as an LLM judge if you provide examples for each grading score”

# Feed post number 470
Hallucinations are unfixable?
As many know, there are no quick answers, mostly theories and some evidence for useful directions, plus, of course, incremental improvements in existing models. However, from an engineering POV, we only have to "fix" the problem to the extent that any given specification demands.
Then there is the other point-of-view, that the entire LLM franchise is ill-founded due to an absence of any fundamental theory related to language. In this realm, the existence of hallucinations is elevated from an engineering constraint to a specter, or bogey-man.
Some prominent linguists and controversy-seekers within the "AI community" have been keen to promote this sentiment.
One argument is that the problem is "unfixable" (period) because the technology and use cases are inherently misaligned. A recent post on LI went further to blame "AI bros" (whoever they are) for overhyping the tech.
But which use cases?
Success or failure in engineering is well defined. It's called a specification. It always includes error tolerance. If well constructed, it includes edge case mitigation.
If the only way we proceed is with 0% errors, we would have no solutions to any interesting problems -- e.g. there would be no cell phones. Indeed, engineering has value in allowing us to achieve functions despite errors and insufficiencies of various kinds.
There is a whole program of work for using LLMs in the enterprise that does not hinge on waiting for 100% elimination of hallucinations via solving the mysteries of language. Nor do many valuable use cases require the use of an all-knowing sci-fi chatbot that never makes mistakes.
LLMs are superior to preceding techniques in almost all NLP tasks. Their use, under constraints, remains a familiar engineering problem.
Of course, as I have said many times, constraints, when properly acknowledged, can present many more challenges than naive deployments can solve. The actual risk is that the democratization of LLMs has put them in the hands of many unfamiliar with engineering a solution with constraints, temporarily dazzled by unconstrained demos etc. But who's to say what the net effect is? I am all for democratizing technology versus protecting a priesthood that can easily arise around domains of knowledge, as we have seen since the invention of the printing press.

# Feed post number 472
As I’ve been saying for a while, it’s a mistake to think that any serious enterprise application can be built atop of prompt “engineering” in a plug-and-play fashion via the illusion of democratized AI.
I constantly run into hobbyist LLM projects inside enterprises where there isn’t the slightest semblance of rigor. To the uninitiated, the issues of out-of-sample performance are mostly ignored.
There are ways to make prompts more engineering-like. But when I’ve attempted to replicate various prompt-optimization strategies from papers, I quickly run into issues.
There are some very potent possibilities. For example, using LLMs within a weak-supervision context can potentially be powerful.
The power of LLMs is still undeniable with myriad use cases, but taming them to act reliably within constraints takes effort that is beyond the tinker-and-deploy mindset that got so many excited about “agents” (LangChain) that use prompts to make prompts in a seemingly very brittle hard-to-optimize fashion.

# Feed post number 473
It is easy to be controversial. It has become the uber-meme - say the opposite of the crowd.
This article suggests that OKRs are not a substitute for strategy and so a bad idea if used as such --
https://lnkd.in/gzqKnZE7
Personally, I have no interest in OKRs, but that doesn't matter. It has no relevance to the point of this article, which is to grab our attention by opposing a biz method du jour.
However, there is nothing controversial here. The author is basically saying that setting targets is not a substitute for strategy. As such, it is a straw-person argument that contains almost no content.
If I sit in my office chair and set myself a goal of making $5M in consulting fees next year and all manner of methods to measure progress, even a 5-year old could tell me that this has nothing to do with achieving it.

# Feed post number 475
“Most big tech companies, he continued, start as a product company and eventually add “a research lab that doesn’t work very well.” OpenAI, by contrast, started as a research lab.”

# Feed post number 477
Unfathomable Datasets 📊🔍
There's a misconception that feeding all your enterprise data into a Language Model (LLM) will do the trick – let the LLM handle everything. 🤖❌
But that's far from reality. And, in certain enterprise scenarios, it might damage your business. 💼💔
I've deciphered for the enterprise reader some of the challenges highlighted in the UCL paper, "Challenges & Applications of LLMs", an otherwise dense and long read --
https://lnkd.in/gTJyzRSe
👀
In this initial post, I only explore one crucial aspect: Unfathomable Datasets. 🌊📊
In a nutshell, how your enterprise preps its data (e.g. for fine-tuning) can make or break performance. 💥💡 Your data quality is your defensive moat, so take it seriously! 🏰🛡️ It's also a key tool to combat hallucination, though I don't delve into that in this post (more later). 🧐🌀
Surprisingly, or not, I've observed a lack of emphasis on data quality in many orgs. 😮 Whilst they claim to care, they often follow the hacker mindset. That might work some of the time, but with LLMs, it's unlikely to scale.
hashtag
#
DataQuality
hashtag
#
LLM
hashtag
#
EnterpriseInsights
💻📈

# Feed post number 479
I’ve worked with
Doug Diego
and he’s a fantastic engineer. Anyone working with him will learn a lot. Prosper is a great company to work for with a very hospitable and collegiate culture.

# Feed post number 480
Leading Arabic LLM.
khaled Taha
Mohsin Bilal
Aqeel Ahmad

# Feed post number 483
Good overview of cybersecurity with LLMs via
Ravi Starzl
-- including interesting experiments with fine-tuning on public CyberOps data. He built a chatbot to ask it how to exploit IT vulnerabilities. Quite an eye opener, if only to raise awareness that for all of the "positive" use cases that enterprises work on, your competitors or foes are potentially working on "negative" strategies.
The Cyber-exploit use case is clearly nefarious. But there are potentially many gray areas of "cyber-poisoning the well" -- i.e. to pollute datasets used by competitors. It's feasible that online acquisition processes could be attacked in stealth ways -- e.g. sending false leads to competitors.
But there are many "competitive adversarial" use cases that businesses aren't yet planning for. As I pointed out in a recent presentation/blog about "Cognitive Selling" --
https://lnkd.in/gv3jzT_F
-- we can expect not just sales teams to exploit AI, but buying teams too. What are the impacts of such moves? Most enterprises are barely aware of them, never mind constructing strategies.
https://lnkd.in/gweV4iwX

# Feed post number 484
Useful survey to one of the most critical facets of AI in the enterprise: fine-tuning.

# Feed post number 486
So many medium parts lauded SMOTE, but that’s more a medium problem than a SMOTE problem 😀

# Feed post number 489
Synthetic Data, Cheating and a Few Tips...
Given the recent spotlight on researchers faking their data, I was motivated to write a brief post about synthetic data and why it's not the same as fake data. Indeed, had these fake-it-till-you-make-it researchers understood data synthesis, they might not have made such idiotic errors. Of course, we have relied upon their idiocy to expose them as frauds.
But you might want to think twice about using synthetic data if you don't know what you're doing. It will probably get spotted and could cost you dearly, like the credit bureau whose model made credit-score errors because it was poorly calibrated. (I don't know if it was due to synthetic data, but the consequences might be the same = litigation.)
We know that the use of synthetic data has proven essential in training highly accurate foundation models for computer vision. This is often called Data Augmentation. A simple example is rotating the image of a dog to produce more examples of dog images.
But the uses in the enterprise are far greater than just augmentation for pre-training a baseline model.
A common issue is to handle an imbalanced dataset. For example, for a lending application there might be too few customers within a certain credit-score band who exhibit certain financial behaviors that a lender might be trying to predict.
In these cases, techniques can be used to generate data samples that might represent such a class of borrowers.
It's important to grasp that this data is not "fake" data of the kind that a "fake user profile" online tool might generate. The techniques used to generate synthetic data attempt to model the underlying statistical characteristics (i.e. distribution) and then sample from the model. For example, if the under-represented class includes age as a feature and the distribution is centered upon 55 years old, then the synthetic data will follow this distribution.
This is precisely the mistake made by the researchers with odometer readings in a paper. They generated random fake data, but from a uniform distribution instead of a normal (Gaussian) one. The mistake was spotted.
An increasingly important use case for synthetic data is overcoming data sparsity due to privacy mechanisms -- i.e. less customers are willing to share their data. Synthesis might apply to generating new entirely new samples or back-filling certain features.
Whilst there are various well-published techniques for synthesis, and open source tools like SDV --
https://lnkd.in/gi8DBudm
-- it is my view that many enterprises might do well to explore commercial platforms instead. This is for two reasons:
1. The DIY option seems easy, but is full of pitfalls that might be of 3 kinds:
a. Tool idiosyncrasies.
b. Method subtleties.
b. Statistical know-how.
2. Expertise -- you should expect a vendor to provide professional services to help ensure your approach is not going to expose your org to legal issues due to basic or subtle mistakes.

# Feed post number 490
As
Ajit Jaokar
says, the issue of hallucination depends upon the meaning and context of hallucination. But I don't think this should be confused with the creative aspect of language -- i.e. there are infinitely many sentences. Ajit is quite right that we don't want to thwart this in any way.
In an enterprise, there are so many additional issues that compound the effects and probabilities of hallucination. Data quality is already a major issue. But one wonders what will happen when generative texts become widespread and make their way back into the models within enterprises. Errors might compound quite quickly. Given the poor data governance in most enterprises, this will be a hard problem to tackle. Even now, I dare say that the shadow use of ChatGPT is already widespread in the enterprise and texts (with errors) have already made their way into the system.
Grounding in an enterprise will also be a hard prospect for the same reasons: i.e. data quality. Enterprises have been trying forever to chase the notion of "Ground Truth" or "Single Source of Truth", but with limited success. And this is for more structured data!

# Feed post number 493
Cognitive Selling >> Chatbot
This is a voice-over version of a presentation I gave about "Cognitive Selling", which was an attempt to extend the tradition of sales frameworks (think SPIN, Sandler, MEDDIC etc) into the era of GenAI.
A primary objective was to counter the reductive misconception that somehow enterprise sales could be compressed into a single chatbot.
https://lnkd.in/giWu_2kj

# Feed post number 494
📢 Attention all journalists in my network! 📰
I'm reaching out to connect with professional journalists who have a deep understanding of story research, newsroom workflows, and the ins and outs of journalism. I wish to engage in conversations about the intersection with AI and these crucial tasks.
I'm keen to explore how AI can enhance and streamline processes like story research, sourcing, data analysis, fact-checking, and more.
If you're someone who has insights to share, experiences to discuss, or even questions about the potential impact of AI on journalism, I'd love to connect with you. Happy to exchange ideas, thoughts, and perspectives on how AI can be harnessed to in storytelling excellence, or not.
Feel free to drop a comment, send me a message, or connect directly. Looking forward to some enlightening discussions and collaborative thinking! 🗞️🤖
hashtag
#
Journalism
hashtag
#
AIInMedia
hashtag
#
FutureOfWork
hashtag
#
TechAndMedia
hashtag
#
CollaborativeThinking

# Feed post number 495
In my experience, copying any single idea from another org whose culture and operational methods are very different, or possibly esoteric or otherwise leader-dogmatic, is usually a disaster.
It's a bit like the folks who mimic SJ's pithy slides, yet lack a billion-dollar R&D budget to deliver the punch line product.
Or, in recent times, the nonsense of Shopify having no meetings. This has been tried so many times before, and written about (e.g. see Maverick by R. Semler) and, of course, fails because it's a meaningless concept.

# Feed post number 496
Advanced notice: I have finally made my own set of slides to explain back propagation. I am working on a voice-over.
Why yet another explanation? (Sigh.)
Firstly, it is a rite of passage to explain it at least once. In this case my motivation was to explain it to my youngest who is studying applied math.
Second, many explanations go through the motions (forgive the pun), but lack insights that illuminate why going backwards is a good idea. The gap between the algebraic manipulation of the chain rule and the functional manipulation (computationally) isn't always obvious to those without familiarity.
Thirdly, the gap from backprop to autograd (the library that does it inside of Pytorch) is often too big a jump (if included at all). So I add a simple explanation that shows how the computational graph and backwards (differential) functions work, plus mapping to GPUs.
Also, I use a simplified set of functions vs. the canonical network of artificial neurons because backprop and autograd can be more easily explained without some of the baggage of vector weights/biases etc.
Watch this space (feed)!

# Feed post number 497
For those of you who have a chalkboard at home, you definitely won't be satisfied until you can master the Walter Lewin dotted-line technique 🤯
(Those who remember friction will know this as stick-slip motion.)
https://lnkd.in/g3iiRptM

# Feed post number 499
Running LLMs locally…

# Feed post number 500
Semantic Search >> LLM + Search Engine
Don't be fooled by RAG demos.
There are tons of "semantic search" demos, often built by folks who have never worked with a real search use case, which is why their solutions are too rudimentary to be taken seriously in many production settings, especially related to e-commerce where a history of finely tuned relevance (and therefore revenue) cannot be jeopardized.
In many cases, recall will shoot up, finding lots of hits due to semantic similarity, but the precision will tank because the results are too noisy.
Often, the source index (which emanates from a long era of lexical indexing with various "semantic" interventions) is relatively semantically shallow. For example, if your products are only tagged with basic color information, the semantic richness of the language model has to be compressed to observe such lexical constraints. (Note that LLMs apparently have a very strong "understanding" of color, including color perception.)
Or, say you want a "rowing machine" in your hotel, then your search could end up with lots of hotels that are tagged with a "gym", none of which have a rowing machine but rank highly for other non-rowing-machine reasons. (I tried this use case, and many like it, during research into AI augmentation of online travel.)
Even with sources that have a rich knowledge graph, it is too easy for the LLM to inject noise. When I researched food-related searches, the modes of using LLMs all had severe constraints that needed a lot of work to avoid degrading of precision and relevance.
In most real-world search scenarios, there is a mix of structured and unstructured fields and the search engine must attempt a multi-field search. With dense vector embeddings, this is a non-trivial problem taking relevance into account. See this useful technical explanation by Lucene expert
Alessandro Benedetti
--
https://lnkd.in/g8GEfn_S
Of course, there are many ways to leverage LLMs for search, but the promise of adding an LLM to go from lexical to semantic search is far harder than merely bolting on an LLM and doing retrieval augmentation.

# Feed post number 501
Excellent detailed analysis of several use cases of fine-tuning Llama-2.

# Feed post number 502
Bayesian Flow Networks:
Interesting new class of generative model from Alex Graves et al:
https://lnkd.in/g4PRuPnf
"Bayesian Flow Networks (BFNs), the model introduced in this paper, differ from diffusion models in that the network operates on the parameters of a data distribution, rather than on a noisy version of the data itself. This ensures that the generative process is fully continuous and differentiable, even when the data is discrete"
"Intuitively, the combination of the input and output distributions represents a division of labour between Bayesian inference and deep learning that plays to both of their strengths: the former provides a mathematically optimal and finely controllable way to collect and summarise information about individual variables, while the latter excels at integrating information over many interrelated variables."

# Feed post number 503
Given the massive overfitting of LLMs and the huge redundancy in the datasets, despite efforts to de-duplicate at the doc level (e.g. see RefinedWeb), it's clear that the latent vector space is going to be massively compressable.
This survey presents a few of the techniques that have emerged thus far.
Later, we should expect to see more techniques that are tunable to specific tasks.

# Feed post number 504
🔍 LLM Demoware vs. Enterprise Reality! 🔍
Every day on LinkedIN, someone posts yet another clickbait prompt guide, lauding the latest research paper (of which there are hundreds). Building your own "ChatGPT" has become the new "Hello World". Even novices are doing it.
"Democratized AI" is, well, everywhere.
When ReAct prompting emerged with its magical "thoughts", many were blown away by the lightbulb moment of using an LLM as the orchestrating engine for its own NLP tasks. The promise is alluring -- rightly so.
But many decision-makers responsible for "AI Strategy" are getting confused by the mixed-signals coming from three distinct usage types.
1️⃣ Individual Research Use: 📚
LLMs are a treasure trove for research and writing tasks. Many use ChatGPT daily. It has replaced a lot of Googling, even with the Bard enabled. It is magical and highly productive. But that's in human hands vs. automated systems. Lay observers are led to believe that casual task power will easily scale to enterprise automation. It doesn't. Not yet.
2️⃣ Demo Use: 🎩
Demos exhibit breathtaking potential and are low-hanging fruit  -- there's usually some enthusiast in the enterprise who hacks a demo and calls it [MyCoolThing]GPT. Compositing tasks using the LLM for orchestration (e.g. via LangChain Agents) can be quite impressive. I get the same tinkering satisfaction that I used to get from designing hardware -- that moment you poke a memory-mapped LED, or whatever. Yet, demo to demonstrable value is not an easy bridge to cross.
3️⃣ Enterprise Use: 💼
Oh boy -- a vastly different story! And a hard one, which makes it exciting and also suggests defensive-moat potential for those who crack it. The issue here is constraints. Assuming (which is a big IF) you can get past the data-readiness phase, the rude awakening is the moment the LLM fails against constraints. That's where the real work begins. And there's often a very long-tail of such work to get from a PoC to a working system.
🔍 The Curse of the Long Tail:
This tail exists due to the usual demands of enterprise: precision, context, validation, risk, compliance etc. The illusion of "democratized AI" has been aided by many brands, eager for "AI relevance", who have lazily integrated OpenAI APIs and made a press release. Yet, have you tried these products? For example, try any online-travel meets ChatGPT app: horrendous. And hardly game changing. Most don't work beyond the initial novelty factor.
As the GenAI buzz continues, leaders need to learn to disentangle demos from demonstrable biz value.
Whilst the democratization of AI is real and very wide reaching, it is often shallow. If you have shallow use cases, like some kind of marketing demoware for "AI relevance", then join the fray. If you need depth, as in hardcore enterprise transformation, then you'll need to invest much more heavily than what you might have been led to believe, especially in expertise.
hashtag
#
LanguageModels
hashtag
#
AIApplications
hashtag
#
BridgingTheGap

# Feed post number 505
🚀 Introducing AgentBench - A Benchmark for LLMs as Agents! 🤖📚
https://lnkd.in/gCJGcepH
As Large Language Models (LLMs) continue to push boundaries, they're being pushed to take on real-world challenges beyond traditional NLP tasks, such as reasoning and action (e.g. similar to ReAct). In this paper, the authors introduce AgentBench - a multi-dimensional evolving benchmark designed to assess LLMs as agents in dynamic environments. 🌐🧠
With 8 distinct interactive environments, AgentBench puts LLMs' reasoning and decision-making abilities to the test in multi-turn open-ended generation scenarios. An evaluation of over 25 LLMs includes both APIs and open-source models and reveals useful insights. While leading commercial LLMs (e.g. GPT4) excel at navigating complex situations, there's a notable performance gap compared to their open-sourced counterparts.
AgentBench isn't just a standalone initiative; it's an essential part of a broader project aimed at comprehensive LLM evaluation. By releasing datasets, environments, and an integrated evaluation package, the team aims to foster systematic progress in understanding LLM capabilities.
hashtag
#
AgentBench
hashtag
#
LLM
hashtag
#
AIAdvancements
hashtag
#
Reasoning

# Feed post number 507
One can easily imagine what a fine-tuned LLM would say, trained on the News Corp archives.
For many of us, we will not notice the difference of course.
But the use of LLMs in news, as also proposed by Google via their Genesis project, is an almost ironic development and perhaps the final nail in the coffin for some types of journalism.
That said, in research I did, there are potentially radically open and innovative ways of conducting journalism using AI, which would have to start with completely open source LLM datasets and transparent algorithms. Indeed, their is a world in which you "bring your own algo" to the data.
As ever, the effort to reinvent categories is thwarted by out-dated biz models, like the advertising one, which is essentially a quantity business. We only have to witness the decline of page-1 search results to see that.

# Feed post number 509
More progress with making fine-tuning LLMs even easier and more programmatic.

# Feed post number 512
This paper benchmarking various tasks using GTP-3.5-turbo in Arabic shows the limitations of relying upon multi-lingual models to do language-specific tasks vs. pure translation tasks --
https://lnkd.in/gTHNmWDM
The paper demonstrates that with most benchmarks, when tested against Arabic datasets, they fall short of the SOTA for those tasks (in English).
In other words, whilst you might rely upon a model to do translation, it won't necessarily perform well in other NLP tasks (e.g. QA, classification) in the target language.
Therefore, developing a multi-lingual NLP app using a single model isn't necessarily a useful strategy, although it might be a starting point.

# Feed post number 513
This is a good post from Snorkel on the use of labeling functions to build a more robust fine-tuned LLM -
https://lnkd.in/g2djVNXa
In this case, they dig into a familiar related to "semantic search" in e-commerce. Having dealt with this use case numerous times, there are many scenarios where the meta-data was sparse and so has to be generated. Leveraging LLMs for this could greatly boost e-commerce conversion.

# Feed post number 514
Remember Ruby on Rails Scaffolding?
Democratized AI has similar tendencies.
Scaffolding was a way to use a few lines of code to build a full-stack website via the Ruby on Rails framework, which was once fashionable. (I heard it's making a comeback?)
It grabbed attention because the demo was hugely impressive: just a few commands and boom! The system generated code -- all the boilerplate stuff. Five minutes later, a fully fledged website was up and running.
As demos go, it still ranks as one of the best. It set the tone for the Web 2 era and was certainly a cool advantage in hackathons.
It looked impressive and promised to "democratize" full-stack coding, which was in its infancy. However, it soon faded because to build a production website, the "demo" scaffolding wasn't that useful.
Today we see a similar trend with the democratization of AI using LLMs. They are spectacularly powerful for making demos.
Just today I saw YAP (Yet Another Post) claiming that you can build "your own ChatGPT for a few dollars". It followed the canonical pattern: embeddings --> index (e.g. Pinecone) --> Langchain --> some UX (e.g. Streamlit).
It works. The LLM appears to do everything.
But take a simple use case and apply some rigor, like building a chatbot for a small business. I researched this for a client, methodically scraping a number of small-biz websites across plumbing, hair-dressers, therapists, personal trainers and a few schools.
The initial code worked. Until it didn't.
Hallucinations, mis-interpreting the question or not knowing "today" within the context: "Are you open today?" Of course, there are fixes. But before that, there's the question of testing. How good is this solution?
I dug deep into another use case: using LLMs to query itineraries. The number one problem was how to test it.
The research world has nice datasets, and some nice tests like Rouge-L for measuring text similarity. But in the real world, benchmarks don't get you far. You have to figure out how to test it, taking into account whatever risks might apply for various failure modes.
You might have to curate your own test sets. Of course, GPT4 can help bootstrap that, which is one of its coolest uses in NLP app development.
These experiments were all relatively simple apps. Chaining of Agents (e.g. LangChain) radically increases brittleness and makes testing even harder.
In the enterprise, there are myriad approaches to solving these problems. Watch this space for a series of articles about production-ready LLM apps.

# Feed post number 515
The author mentions gaming, but the most likely long-term benefit is in enterprise orchestration.
As I've been saying for some time (and in this video with
Geoff McGrath
--
https://lnkd.in/g89XMqdV
), a truly strategic view of AI must include rethinking what a company actually is.
The core "OS" of organized commercial life is language. Now that NL has become *creatively* computable (i.e. generative), we have new ways of organizing.
This was the core of the work I did for Telos AI out of University of Berkeley's incubator program: building a knowledge management system where agents were a first-class part of the system.
Interestingly, our solution was, after all, to use a gaming approach, at least in terms of composability -- i.e. using the so-called Entity Component System architecture that supports object composability more aligned with how corporate ontologies actually work. For example, accountants think of SQL queries as having a cost (e.g. Snowflake $), which is not a common "property" of a SQL query in most systems that deal with SQL.
But, more importantly, the gaming approach included the ability to simulate. Simulation is the next frontier of AI.

# Feed post number 516
🚀 Elevate Your Enterprise Sales Strategy with Cognitive Selling! 📈
In the ever-evolving landscape of enterprise sales, staying ahead is non-negotiable, especially during strong headwinds.
Introducing the game-changer: Cognitive Selling! 🌐💼
🤖 What is it? Imagine fusing GenAI and Causal AI (and other techniques) with strategic innovation, revolutionizing sales beyond the ordinary.
This is NOT a simple AI bolt-on, like a chatbot API – it's a systematic capability.
https://lnkd.in/gv3jzT_F
hashtag
#
SalesInnovation
hashtag
#
AIBuzz
hashtag
#
CognitiveSelling
hashtag
#
SalesTransformation

# Feed post number 517
A useful set of chatbot design heuristics from Gary Hsieh.
A lot of the work I did at Prosper was in figuring out the optimal UX for long-running dialogs about consumer finance. Without such research, it was hard to know how to innovate meaningfully when developing technical IP. Even now, in the age of LLMs, there is little innovation in evidence for maintaining a purpose-driven conversation that satisfies many of the heuristics outlined in Gary's research.
I have a patent in maintaining long-running dialogs using a novel stack method to cope with a common tendency for users to stray from a "happy path" in dialogs, thus making contextual relevance harder to maintain. Of course, a solution now might be to increase the context length, but there are also issues with this, as in the tendency for LLMs to develop blind-spots for the middle of contexts etc.
Hierarchical chat mechanisms, such as my stacking technique, are viable solutions to this problem.
cc:
Eewei Chen

# Feed post number 518
🚀🔮 GenAI Trends: Things I have Noticed 🔍📈
1️⃣ Lots of Flexing: Brands in a hurry to embrace GenAI capabilities are often flaunting their underwhelming efforts in order to maintain relevance with their customers (who are often ahead) by rushing to integrate OpenAI APIs without adding any substantial value to their products. 🤷‍♀️
2️⃣ Analyst Impression: Some brands take it a step further to impress analysts, engaging in open source projects and mostly benchmark flexing. Yet, their accomplishments lack any evidence of being translated into compelling customer value. 📊📉
[Note, some of this is also internal flexing -- mid-level managers trying to remain "GenAI relevant" inside of their organization. It's not unlike the flexing we saw with Big Data and Analytics, much of it coming to nothing as is widely reported by CIOs etc.]
3️⃣ Innovation Dearth: Surprisingly, or not, there are few innovative use cases. As usual, many organizations lack commitment to strategic innovation and find the low-hanging fruit option of adding an OpenAI API too compelling. 🚫🧠
4️⃣ Democratization of NLP: LLMs have sparked an explosion of demos, tinkering and PoCs, but the challenges of testing, hallucination, and real-world constraints remain unaddressed. It's akin to the short-lived fame of the Ruby on Rails Scaffolding tool -- it made for good demos and PoCs, but no one used it in any serious web app. 🎉💻
🚀🌱 GenAI Start-ups: Chasing Opportunities 🌐💼
1️⃣ Language-Centric Automation: Many GenAI start-ups leverage LLM power to automate language processes like procurement and RFP handling. They're making waves in the industry with rapid investment in the GenAI land grab! 💬📝
2️⃣ Double-Edged Sword: The democratization of AI enables quick progress, but start-ups will encounter gaps when scaling LLM apps beyond PoCs, having to solve the various issues that are well documented. Technical expertise may be hard to come by and they will need to rely upon open source progress or LLM evolution, which presents its own risks (in terms of defensive moat). ⚔️🌊
3️⃣ Thorny Vertical Problems: GenAI has the most potential in various challenging verticals, but investors may not see the unicorn-sized opportunities they desire. Also, a key challenge in exploiting these verticals is accessing proprietary data for domain-specific LLM applications. 🦄📊
4️⃣ The Race for the Future: Start-ups are competing with existing vendors, like procurement software, who will also seek to incorporate LLMs into their products. Start-ups have the speed advantage, although the friction of adding an LLM is very low indeed, notwithstanding the challenge of real-world constraints. However, incumbents have an advantage due to access to crucial proprietary data and use case experience required for optimizing LLM solutions. 🏁🐢🐇
hashtag
#
GenAI
hashtag
#
ArtificialIntelligence
hashtag
#
Innovation
hashtag
#
TechTrends

# Feed post number 519
Ongoing large scale investment in AI HPC cloud services.

# Feed post number 520
Semantic layers are a critical part of the data stack, more so in the age of GenAI etc. The ability to quiet at the metrics level, rolled up into KPI trees etc is a valuable tool in ensuring focus on outcomes versus numbers.

# Feed post number 522
🧳 ChatGPT and Online Travel: An Underwhelming UX 🧠
As part of a recent project delving into the applications of AI in the travel industry, I had the opportunity to explore several "solutions" that paired ChatGPT with online travel services.
These solutions have garnered attention from travel-industry analysts, like
Skift
, but the results were less than impressive overall.
It became evident that the problem ChatGPT aimed to solve was not fully understood by those pushing these "solutions." All of these tools fell short of existing user interfaces in terms of user experience. For example, it took longer to reach the booking confirmation point using ChatGPT compared to the standard, already established UX patterns. Who wants to endure a lengthier booking process?
One challenge arises from the fact that travel is a visually-rich subject, filled with stunning destination images and hotel visuals. A text-only interface struggles to align with this characteristic. One particular solution, relying solely on Whatsapp, was a complete disaster.
During my analysis, I observed that ChatGPT was remarkably adept at hallucinating. Partly, this stems from the illusion that because ChatGPT possesses a deep semantic understanding of the world, it can fulfill any request irrespective of the capabilities of the underlying system.
To illustrate, I asked about hotels with rowing machines, a subject of personal interest, and received responses that were complete fabrications. Even when I sought confirmation, the false replies persisted. Similarly, when I inquired about "rural Italy," the system suggested considering a countryside region, but then failed to locate hotels in that area due to its city-based search index. This revealed what I previously termed the "Information Bottleneck" between semantic LLMs and lexical-index search systems.
Despite encountering a few exciting potentials, such as obtaining a coherent itinerary for a "Sherlock Holmes experience," the current traveler user journey with ChatGPT lacks compelling solutions.
Nevertheless, there's ample opportunity for innovative UX design, particularly in crafting hybrid chat-centric or chat-augmented interfaces. By leveraging the strengths of GenAI and novel UX solutions, there is seemingly plenty of opportunity to provide compelling and novel travel experiences.
Indeed, in my work we identified at least 20 novel use cases across the entire user journey, many of them consistent with emerging travel trends, like the rise of the solo traveler, etc.
hashtag
#
AIinTravel
hashtag
#
UserExperience
hashtag
#
InnovativeUX
hashtag
#
ChatGPT
hashtag
#
TravelTech
hashtag
#
HybridInterfaces

# Feed post number 523
Does anyone know why Linkedin posts don't support formatting, as in bold or italics etc? Why such a retrograde approach that forces some folks to paste in unicode text (that is not accessible by assistance readers). We're almost back to the first-gen text-editor days.
And the post editor is the worst! Jumps around whenever an emoji is added.
The messaging window is ridiculously small, even when expanded -- and the suggested replies are positively dumb given the SOTA LLMs.
Plus, the iPad app seems to think it's on a mobile screen.

# Feed post number 524
A bootstrapper warrior setting the record straight about some of the misconceptions of bootstrapping.
Also, see
Nathan Latka
's incredible database of SaaS companies to hear more about bootstrappers who made it.

# Feed post number 525
Slowly, but steadily, experts like
Mohsin Bilal
are pushing forward the frontiers of cancer detection and diagnosis using computer vision.
As we've seen with language, which is complex system, the only computational method that can match its complexity is the use of massively complex models with billions of parameters.
The complexity of whole slide imaging is not only in handling the intricate morphology of the image, but in handling the Peta-scale size of magnified images.
The work of experts like Dr Bilal is critical in our race against cancer as we contend with increasing environmental challenges from pollution, plastics, forever-chemicals and general lifestyle challenges that compromise immune systems.

# Feed post number 526
🚀 Planning to Train a Large Language Model (LLM) with a Big Compute Cluster? Here's What You Need to Consider! 🚀
If you're diving into the world of Large Language Models (LLMs) in your enterprise and have access to a powerful compute cluster, you'll have to make some decisions -- aka engineering trade-offs!
GPU time for LLM pre-training is expensive, so you'll need to figure out how best to allocate your precious ($$$) compute resources.
Model Size: the complexity of your language model, aka model parameters.
Training Data: The information your language model will learn from, broken down into individual units like words or subwords (training tokens).
So, how do you make the most out of your compute budget? 🤔
That's where "scaling laws" come into play! These heuristic guidelines help you optimize your LLM's performance given your compute limitations. They can guide in choosing the right trade-off of model parameters and training tokens.
Bigger isn't always better! 🤯 In many cases, it's wiser to invest some extra compute to train a smaller model with more tokens. Smaller LLMs offer several advantages:
🚀 Faster Inference: They can generate predictions more quickly, making them ideal for real-time applications.
💰 Cost-Effective: Smaller models use fewer resources, saving you money when deploying them in production.
👩‍💻 User-Friendly: They're much easier to work with, especially for developers and researchers with limited GPU resources.
Recent analysis by
Harm de Vries
(ServiceNow research) gives some mathematical rules of thumb for how to think about these trade-offs in terms of computational overhead to achieve smaller model size --
https://lnkd.in/gZ_F_bt8
There are, as with all trade-offs, caveats: whilst it's tempting to think that smaller models for similar performance (at the cost of longer compute) are desirable, it isn't clear how well smaller models will attend to all use cases with similar performance to larger ones.

# Feed post number 527
After many years, caught up in person again with
Ajit Jaokar
— we’ve know each other since our “mobile days”. We first met when I did consulting for Ajit to explore indoor mobile location services.
It was fun catching up and swapping notes about our parallels paths in AI, as we’ve both been at it a while.
It’s refreshing to talk shop without the hype, as in swapping notes about the “real-real” of deploying LLMs etc. We explored common interests in education and wellness, besides the usual enterprise use cases.
We also discussed the challenges of how to build defensive moats around LLMs and the challenges of testing and evaluation etc.
Great seeing you Ajit!!

# Feed post number 528
🚀 Great resource for Conversational AI enthusiasts: DialogStudio - A Huge Dialog Dataset Collection! 🎉
Are you working on conversational AI or instructional LLM use cases? If yes, then you'll be interested in DialogStudio! 🌟
It's a compilation of disparate dialog datasets that have been unified (in format) while preserving original information. This approach supports research across a wide set of datasets without having to do all the pre-processing yourself, avoiding arcane formats of some datasets (like AMI). 📚🤖
📊 Quality Assessment:
DialogStudio includes meticulous evaluation of dialogue quality based on six critical criteria: Understanding, Relevance, Correctness, Coherence, Completeness, and Overall Quality. Each criterion is scored on a scale of 1 to 5, with higher scores reserved for exceptional dialogues. 🏆
🗃️ Diverse and Comprehensive:
With DialogStudio, you get access to a vast array of dialog datasets covering different categories, including task-oriented dialogues like MULTIWOZ2_2, among others. This diversity opens up endless possibilities for useful research and product development in conversational AI. 🌐
💻 Easy Access and Examples:
The datasets are readily downloadable through Huggingface, ensuring smooth integration into NLP workflows. Additionally, DialogStudio provides helpful examples for each dataset, easing the exploration of the large collection. 📂
🔜 Upcoming Individual Dialogue Scores:
DialogStudio is gearing up to release evaluation scores for individually selected dialogues soon. This level of granularity will offer in-depth insights into the dialogues, enriching the research potential further. 📈
Check out the full list of datasets and access the evaluation script to dive into this rich collection. 🌐🤩 --
https://lnkd.in/g-ycMAt9
hashtag
#
NLP
hashtag
#
DialogStudio
hashtag
#
LanguageModels
hashtag
#
Research
hashtag
#
AI
hashtag
#
MachineLearning
hashtag
#
NaturalLanguageProcessing
hashtag
#
Dialogues
hashtag
#
DataScience
hashtag
#
ConversationalAI

# Feed post number 529
📰 Surprising Boost in Zero-Shot Task Generalization with In-Context Instruction Learning (ICIL) for Large Language Models (LLMs)! 🚀
I love it when researchers dig into prompt engineering in a systematic way with detailed evaluation procedures. If nothing else, it gives yet another template for how to perform systematic prompt-engineering evaluations. 💡🔍
We continue to see innovation with in-context (prompt) learning (ICL). As always, it also helps to illuminate a little bit more of the black-box operation of massively complex LLMs. 🔍🧠
📝 The latest research paper reveals that In-Context Instruction Learning (ICIL) brings a remarkable improvement in zero-shot task generalization for Large Language Models (LLMs). 🤩 --
https://lnkd.in/d73hfM92
🔍 The traditional approach to instruction learning is fine-tuning LLMs on various instructions. However, the researchers found that a certain method of injecting instruction examples in-context produced unexpectedly impressive results. 🧐
💪 ICIL utilizes a single fixed prompt containing demonstrations from different tasks to evaluate all tasks collectively. This innovative approach significantly enhances the performance of both pre-trained and instruction-fine-tuned models. 📈
Notably, analysis showed that the effectiveness of ICIL comes from selecting classification tasks that include explicit answer choice in the instruction.
Example:
Definition: In this task, you are given a dialogue from a conversation between an agent and a customer. Your task is to determine the speaker of the dialogue. Answer with "agent" or "customer".
Input: I have successfully booked your ticket with flight-1017, have a safe journey.
Output: agent 🕵️‍♀️
💼 Even the most powerful instruction-fine-tuned baseline model (text-davinci-003) benefited from ICIL by 9.3%. This indicates that ICIL's impact complements traditional instruction-based fine-tuning methods. 👏
🔬 The research showcases the ongoing potential of innovating using in-context learning. Also, given that the technique boosts instruction-fine-tuned models, it highlights the ongoing importance of ICL regardless of model improvements. 🌟
hashtag
#
ResearchHighlight
hashtag
#
LanguageModels
hashtag
#
ICIL
hashtag
#
ZeroShotTaskGeneralization
hashtag
#
NLP
hashtag
#
MachineLearning
🧠📚

# Feed post number 530
Stack Overflow's response to LLMs. Of course, adopt them!
But it will be interesting to see how far they innovate in blending AI with community. They have the ingredients to demonstrate real innovation here.
Coding for many is more than just writing code.
Let's see. 👀

# Feed post number 531
🚀🧠 An Innovator's Guide to LLM Creativity 📚💡
🔍 I regularly exploit two intriguing usage patterns of ChatGPT that can spark innovation, as in novel lines of thought via synthesis.
💡  I cut-paste a (contextualized) sentence from a research paper or article and ask for an elaboration. This is my #1 hack for grokking papers faster.
💬 I then request an example. ChatGPT always obliges, synthesizing from other sources (outside the paper), resulting in creatively fitting examples, though not entirely contextually accurate. These are often useful, not only in aiding understanding, but in sparking new ideas.
💥 An accidental discovery, akin to a well known "brain-storming" technique, was when I did the above within an unrelated chat session. The model attempts to contextualize the example within the original session, leading to either creative or irrelevant examples. The creative ones can often be illuminating.
🔑 For me, this pattern has become a useful tool in jolting the LLM and myself out of common lines of thinking.
Maybe call it: "Thinking outside of the weights?"
hashtag
#
ChatGPT
hashtag
#
Creativity
hashtag
#
Innovation
hashtag
#
AI
🤖💭

# Feed post number 533
No doubt the tech will advance to photo-realism, although eventually the meaning of "realism" might change.
However, most of these demos remind me of the first time folks learned to use the particles effect in After Effects and called it "Digital Art".
The key question is not whether Netflix will rule the world via $900K AI jobs, but who will be the next Quentin Tarantino who can bring original ideas to our attention with a low budget.
If we no longer need rely upon famous faces to make movies, then surely the story, or, more broadly, the experience, becomes uppermost.
I have yet to see many productive discussions related to innovation here, although this applies broadly to AI where the major share of ideas and energy is in doing existing things cheaper.

# Feed post number 534
🏆💰 Goldmine of operational knowledge... inc. remote-first working... 🏢💻
I had not seen this before, but Gitlab's entire ops handbook is open source --
https://lnkd.in/gsiGwAwp
What we're reading is what the employees are reading. Of course, many of the links are then behind Gitlab firewall, but that's proof that this is their actual ops manual.
I found it whilst researching MEDDPICC, a sales qualification framework, but among other things, the handbook contains a great explanation of their entire remote-first ops --
https://lnkd.in/gq9h-Qjg

# Feed post number 535
🎯🔍 Unveiling LLM Blindspots 🕵️‍♂️💡
🔎 Curious about the practical use of LLMs in the enterprise? 🏢 Here's another potential gotcha when using these complex tools.
📚 A common approach is to input data as a prompt of the form:
{context}
{query}.
In some cases, the context is a long set of snippets that were first retrieved from a document database (e.g. using a vector method, called embeddings, to find snippets related to the query).
But here's the plot twist: in some cases, the LLM might have blindspots about your context, especially in the middle (per diagram below)! 😲
This paper explored the accuracy of various queries based upon the location of the known answer. It found a distinct decline in performance when the answer sat somewhere in the middle --
https://lnkd.in/d_DNziXC
In other words, LLMs have blindspots in the middle.
In my own tests, prior to seeing this paper, I had seen location-dependent performance changes even for quite short contexts. Moreover, I had noticed that it is structurally dependent (i.e. upon the kind of content, such as lists versus freeform text).
📚 The lesson here is that this is yet another example of the vagaries of LLMs that could make a BIG difference in an enterprise use case, such as sales. 💡
The optimal information to a competitive bid sitting in the middle of your context might get demoted in favor of a less optimal solution. The end results: missed revenue opportunity. 💔💰💰💰

# Feed post number 536
This looks like adding schemas to overlay intents over NL, kind of where chatbots started, and a necessary step for many use cases.
But I don't see how it solves hallucination.
Even with types, hallucinations are still possible.

# Feed post number 537
These models are complex blackbox systems -- i.e. localized degradation for narrow use cases is highly possible as models evolve.
It also speaks to the need for reliable domain-specific evaluation techniques, which is a very hard prospect in many cases (e.g. read BloombergGPT paper).
The fragility of many solutions is in a lack of good evaluation strategies whilst attempting to deploy demo-level solutions (with fragile prompts) into production settings, often without operational guardrails.
Contrary to the author's suggestion, open source, per se, is no guarantee against model drift. But certainly taking greater control over the LLM deployment will make it easier to detect drift and, critically, prevent it seeping into production systems if operations are properly configured.
For enterprises, reliability is also a function of data quality which can also drift if not deployed within operational guardrails (along with the model). Take a simple example, someone could pollute CRM data, say, and cause degraded LLM decisions that might not even get noticed.

# Feed post number 538
Another datapoint here: ~$1.3M for pre-trained model (i.e. from scratch) (1.3M GPU hours over 49 days).
For Bloomberg, the model performed "better" on internal financial data than existing open source models (at the time).
Of course, they had lots of data: 363 billion token dataset based on Bloomberg's data sources augmented with 345 billion tokens from general purpose datasets (see their paper --
https://lnkd.in/dTZuuBfC
)
There is little insight into the business value of the approach taken because the original paper admits that domain-specific evaluation (e.g. within workflows) is not easy to scale/automate.
The original paper makes some useful observations, such as how the concept of sentiment in financial news can be different than general texts -- e.g. laying off workers could be seen as positive (according to analysts).
The model outperforms comparable open source models on financial reasoning, but it is hard to see to what extent a model like GPT-4, with reportedly advanced numerical reasoning in some cases, might do better.
An interesting question would be to see to what extent the model transfers to other financial contexts, such as use within a bank.

# Feed post number 540
🚀 The Challenge of GenAI Adoption in Enterprises 🚀
It's evident that the adoption of Generative AI (GenAI) in various enterprises and organizations is on the rise, but it's not all smooth sailing. There are three significant challenges that need to be addressed for successful deployment of Large Language Models (LLMs) in the enterprise context.
1️⃣ Demo vs. Constraints "Reality Gap":
One of the primary challenges lies in the difference between the impressive demonstrations of LLM capabilities and the practical constraints that come into play when integrating them into real-world scenarios. LLMs can easily produce fascinating results and ideas, but bridging the gap between a shallow demo and a fully functional, production-ready product is often much more difficult, especially for complex use cases.
2️⃣ Causal Chasm:
Another crucial obstacle is the issue of causal reasoning in LLMs. While they are proficient in processing vast amounts of data and generating text, their ability to comprehend causal relationships and deliver consistent causal reasoning is limited. This limitation can be a significant drawback for many valuable enterprise applications that require a deep understanding of cause-and-effect relationships.
3️⃣ Information Bottleneck:
LLMs are known for their semantic richness, seemingly capable of understanding "anything" superficially. However, when it comes to accessing and processing semantically poor data sources, like narrowly indexed product tables, the LLM's capabilities can be severely restricted. In such cases, the LLM may not be able to bridge the gap between its rich understanding and the limitations imposed by the data sources.
The road to GenAI adoption in enterprises is complex, given the intricacies of tech adoption and the potential interference of political interests. While LLMs make it easy to generate ideas and experiments, turning those into robust working solutions can be deceptively challenging, especially for non-trivial use cases.
To overcome these challenges and ensure successful integration of GenAI in the enterprise, it is essential to acknowledge and address the limitations of LLMs in causal reasoning and dealing with information bottlenecks. Finding innovative ways to apply LLMs while being mindful of their limitations will be the key to leveraging their true potential in enterprise environments.
hashtag
#
GenAI
hashtag
#
AI
hashtag
#
EnterpriseAdoption
hashtag
#
LLMs
hashtag
#
CausalReasoning
hashtag
#
InformationBottleneck
hashtag
#
TechChallenges

# Feed post number 542
Rule of thumb: A100 ~$1/GPU per hour, so the inference compute cost for LLaMA2-70B would be ~$8 per hour.

# Feed post number 543
Degradation as an unintended consequence is a natural occurrence in the evolution of complex systems.
The real "take away" is:
“This underlines the need of fine-grained drift monitoring, especially for critical applications”.
It's just plain logic that for some use cases, for models of this kind, the performance could drift in a way that results in degradation. It's highly use-case and implementation dependent.
If we look at some of the *experimental* LLM app patterns, like chaining of prompts with no formal prompt design (i.e. someone cuts and pastes a prompt after trying it in ChatGPT), then this is a fragile approach by design.
Yet again, it speaks of the gap between demo-ware fun and rubber-meets-the-road production apps where the vagaries of LLMs cannot be ignored.

# Feed post number 544
A useful insight is the cost of training the 7B model: ~$1M in AWS compute (5$ per A100 on AWS on-demand). It at least puts a stake in the ground for those contemplating their own LLM.
[According to Jim Fan, senior AI scientist at Nvidia, Llama 2 is likely to cost a little over $20 million to train.]
That said, we know from TII's work in Dubai on Falcon, that the quality of the data is paramount. This is not a trivial problem, in many regards, for the "average" enterprise. If I have to qualify that, you have never worked in or with an enterprise.
It might well be the main skill required.
Too many enterprises are quick to jump to the conclusion that building a pre-trained model is out of scope. If cost is the only reason, now we have a number, although this assumption, based on cost alone (absent benefits) would not be a strategically useful one.
If building a pre-trained model could propel meaningful revenue, then strategic consideration is warranted. It's an economics discussion, although that would be a reductive assessment of course. (Note this useful TCO for running A100 GPU planes -
https://lnkd.in/gjS_fyXQ
- from
Lambda
)
Unlike, say, building your own database, it is incorrect to adopt the mindset: "we are not a technology company" and go about adopting the usual build vs. buy thought patterns.
Your proprietary data is your main asset and natural language is your core operating system. Why wouldn't you exploit this asset fully? Previously, it might have been because of the level of skill required. But the presence of large amounts of open source data, info, code and knowledge are a quite unique context for this latest technology wave.

# Feed post number 545
Meetings don't work?
Those praising the Shopify "we banned meetings" shallow meme have a much larger problem: lack of critical thinking, and ahistorical blinkers.
The "banning" meetings idea has been tried, re-tried and tried again by a raft of "novel thinkers" eager to leave their mark (stain). Go read Ricardo Semler's 80s book Maverick: he went the whole hog and "banned everything".
We won't explore how measuring "meeting value" (which should be the correct metric) is incoherent, although I dare say some "GenAI expert" (with a 3-day "degree" from MIT) is working on it right now. Apparently, these "novel thinkers" didn't read Thinking Fast & Slow after all, confusing a plausible idea with a coherent one.
But, lo and behold, according to the ban-meetings guy, it's part of a bigger problem: work has been "designed for managers, not builders" (I paraphrase, but why not, given the lack of content in the idea to begin with).
Instead of meetings, folks will be free to pursue "craft", which is, apparently, another type of work, presumably free of pointless meetings whilst its adherents pursue noble "growth hacking" whilst apparently re-inventing behavioral psychology to give us "behavioral UX". I dare say, it's all with a good dose of mindfulness, which they use to hone their telepathic resonance in place of talking to people.
When you reinvent the meaning of ordinary words and invent others, you can make them mean whatever you want. Good luck -- such things go far here on LinkedIn.

# Feed post number 546
🚨 PSA: LLMs do NOT work ... 🚨
(Out of the box) 📦
I recently had the privilege of speaking at the executive summit of
Pie Insurance
, a disruptor in the workers' comp insurance market. My esteemed mentor and AI/data entrepreneur friend,
Geoff McGrath
, suggested sharing the slides from that talk. For those interested, I've also added a voice-over on YouTube for a more narrated experience. 🎙️🎥
https://lnkd.in/gTS9qnst
In today's fast-paced world, attention spans are limited, so I want to emphasize the key "take home" point: ⏳
The chasm between getting an LLM (Language Model) up and running for a simple demo and deploying a fully functional production system *with constraints* is immense, often deceptively so. The true art and innovation lie in navigating this gap successfully. 🚀💡
Many have been captivated by LLM demos that showcase impressive results without constraints. However, the real challenge arises when you introduce real-world constraints. Without the necessary expertise, you might find yourself stuck, unable to drive value with your specific use case. 🤔🛑
Beware of falling for the allure of "Look what I did in 5 minutes" demos. While they may seem fascinating, they hold little practical value in the grand scheme of things. 🎭🙅‍♂️
Moreover, don't be taken in by overnight AI experts who fiddles with prompts and OpenAI via co-pilot. True mastery of AI and LLMs requires a deeper understanding and a strategic approach that extends beyond a superficial grasp of the technology. 🧠🔍
Let's remain discerning when it comes to the capabilities of LLMs. While they undoubtedly possess immense potential, harnessing their power for meaningful and impactful enterprise applications demands genuine expertise and dedication. 💪🤖
hashtag
#
AI
hashtag
#
LanguageModels
hashtag
#
LLMs
hashtag
#
ArtificialIntelligence
hashtag
#
TechInnovation
hashtag
#
AIExpertise
hashtag
#
BeInformed

# Feed post number 547
Thank you
Ted Shelton
for highlighting GenAI use cases vs. hype.
For the online travel industry, we recently identified 30 use cases of GenAI for existing services and 20 novel use cases when exploring the entire use journey. These were all innovative use cases, not operational efficiency ones, like using co-pilot.
We have repeatedly identified use case sets for every area we explore.
By the way, not one of them included chatbots.
This is the problem of those who tinker with ChatGPT and think it tells them what GenAI and LLMs are capable of doing in business. It's like tasting Starbucks lattes and thinking you know how the food industry works 😀

# Feed post number 548
Becoming a platform was the subject of an entire book I wrote a while back called "Connected Services" aimed at Telcos -
https://lnkd.in/g-NgqM7V
This insight from
Geoffrey Moore
is a great read, in line with what I was preaching at O2/Telefonica/GSMA back in 2010.
FYI - the complication with telcos was always cross-network compatibility at the API layer. Of course, they could have standardized. After all, the ETSI standard for GSM/3G...5G is a testament to the networking power of standards.
But they missed their moment.
They had the killer "app" -- text + voice.
They also could have had another killer app -- mobile advertising.
So, missing from Mr Moore's list is mindset. Telcos didn't have it in terms of being technology companies. (Well, this is the trite, short version.)

# Feed post number 549
"🚀💡 LLMs and Innovation: The Need for a more Holistic Approach 🔍🤖"
I recently had the opportunity to speak at an executive summit hosted by a leading disruptor in the insurance industry. The focus of my talk was the use of Large Language Models (LLMs) within an innovation context vs. operational efficiency. I made a quick video voice-over of my slides for those who couldn't attend.
TL;DR =
1️⃣ "Bolt-on" LLM Integration Not a  Defensive Moat:
LLMs are not a plug-and-play solution for instant business transformation. Merely 'bolting on' an LLM to your existing business systems does not automatically build a defensive moat against competition.
2️⃣ Innovating with LLMs *DOES* Require Expertise and Understanding
To extract defensive value from LLMs, a degree of expertise in AI and deep learning is required, again suggesting a more holistic approach than plug-and-play.
3️⃣ Model Innovation a Double-Edged Sword
The rate of base model innovation often exceeds the pace at which organizations can innovate internally. This means companies need to take a holistic approach, fostering an environment of continuous AI learning and agility.
Innovating using LLMs demands a well-rounded approach that includes team education, strategic implementation, and continuous evolution.
I hope this offers a useful glimpse into the potential and challenges of adopting LLMs. I encourage organizations to invest in deep learning expertise and a culture of continuous learning to fully tap into the benefits of this rapidly evolving field.
hashtag
#
AI
hashtag
#
Innovation
hashtag
#
LLMs
hashtag
#
ExecutiveSummit
hashtag
#
DeepLearning
hashtag
#
InsuranceTech
https://lnkd.in/gTS9qnst

# Feed post number 550
Ajit Jaokar
-- this one is for you.
https://lnkd.in/gmZ_c7h7

# Feed post number 551
📢 Discover when your organization truly needs its own ChatGPT. Check out our latest article on our website:
https://lnkd.in/gpWzmc9F
🧠🌐 "When do you need your own ChatGPT?"
The availability of LLaMA-2 for commercial use has opened up exciting opportunities for enterprises. The immense power of ChatGPT has captivated executives, leading them to ask the crucial question: How can we acquire our own ChatGPT?
In our latest article, we explore different approaches to answering this question and outline the steps involved in achieving "EnterpriseGPT." Each approach varies in complexity and cost, allowing you to choose the one that best suits your organization's needs.
When evaluating AI solutions, it's essential to consider your organization's tolerance for errors and hallucinations. Different use cases demand different levels of precision and reliability. Additionally, recognizing the strategic value that Language Models (LLMs) can bring to your enterprise is paramount.
By understanding the potential role of LLMs in generating value, you can pave the way for innovation and adopt a strong strategic perspective on the future of AI.
Don't miss out on this valuable insight into leveraging LLMs for your organization's success. Read the full article here:
https://lnkd.in/gpWzmc9F
hashtag
#
AI
hashtag
#
ChatGPT
hashtag
#
EnterpriseGPT
hashtag
#
LanguageModels
hashtag
#
Innovation
hashtag
#
StrategicPerspective

# Feed post number 554
🔍 Leveraging the Power of Language Models: Introducing Mixture of Experts (MoE) and Gating! 🔍
🚀 Imagine having a dream team of experts and a genius gatekeeper to supercharge your AI models. That's what Mixture of Experts (MoE) with Gating is! And, by now, you may have heard the rumors that this is how GPT-4 works. 🤝
🎯 MoE brings together specialized experts, each trained to handle a specific aspect of a problem. For example, different LLMs might be optimized for different tasks, like code generation versus domain expertise.
But how do we choose the right expert for each input? The solution is called Gating. It is a trainable selector, or switch, that determines which expert to activate based upon the data. 🚀
🔓 Gating works its magic at either the token level, considering the importance of each element, or the sequence level, capturing the big picture. Or, it can do both. 💪
💡 There are many techniques for gating, including the attention mechanism that has powered the recent LLM boom.
💥✨ Although the number of parameters dramatically increase due to the use of multiple experts, computation remains relatively constant because only the required expert is used during inference. ⚙️🔀
🌟 With GPT-4, the results speak for themselves! Unleashing the collective potential of diverse experts delivers superior performance to most models. 💪
🔀  From accurate predictions to creative content generation, MoE with Gating is pushing the boundaries of GenAI.
Of course, this technique is not exclusive to OpenAI and has already been proposed and evaluated for LLMs -- e.g. see GlaM
https://lnkd.in/g8a4cmiz
or see Switch Transformers
https://lnkd.in/gVR47nC6
.
Most likely we will see more of it used with open source models, driving new benchmarks. We can also expect to see it within the enterprise where multi-domain expertise is common. 🏆💬
hashtag
#
LanguageModels
hashtag
#
MixtureOfExperts
hashtag
#
gpt4
hashtag
#
AI
hashtag
#
Innovation

# Feed post number 555
Apple is putting up the price of their storage subscription. I guess the price of disks went up?
No...
"When Backblaze purchased hard drives back in 2009, we paid over $0.11 per gigabyte. In 2017, when we did a review of the cost of hard drives, the cost per gigabyte had fallen to just below $0.03 per gigabyte. Today, we can get 16TB hard drives for about $0.014 per gigabyte on average."
https://lnkd.in/g3jGfN7s
Or, our world in data:
https://lnkd.in/gfUUKQYY

# Feed post number 556
Tom asks: how many SaaS start-ups spoke to small companies?
Yes, I did -- I researched this extensively for "micro companies" (1-5). There's good research by UK Gov on the IT needs for this sector and the typical levels of IT awareness/competency etc.
Most likely, the answer is a spreadsheet (some tabular thing) and GenAI no-code stuff. (Maybe what Zapier are doing will get there, although only 15% of the survey sample in UK Gov would know about Zapier or how to use it. Again, perhaps GenAI helps.)
However, the actual problem is that small businesses don't know what to ask for. For example, many owners want to "be on Google", not knowing this means having a website.
Of course, in theory, GenAI helps with that: "How do I appear on Google?" could lead to the generation of a website.
"How do I pay people?" could lead to a payroll plug-in for spreadsheet.
There's definitely untapped opportunities here.
And maybe it's an end to the many SaaS companies that provide marginal utility over a spreadsheet when all is said and done.

# Feed post number 557
This seems to be an IQ or innovation test. Has anyone thought to throw a dart yet? 🎯

# Feed post number 558
Earth calling Python!
Those of us who have used Jupyter Notebooks for some time have often wondered: "What if the text bits and the code bits" could "talk to each other" (in various senses).
Indeed, in previous efforts of mine to make "computable note-taking", I attempted to introduce a dot operator to mix text with code.
My defacto note-taking environment, or "playground" is PyCharm and JN.
Of all the ChatGPT features I am truly fascinated by, with high anticipation for major productivity gains of the "second brain" sense, this is the one...

# Feed post number 572
Like a lot of AI innovations, they don't seem to make sense long-term as a standalone specialist solution. With new computer vision models and advances in silicon, surely it cannot be hard for ultrasound manufacturers to build these capabilities into their machines, as indeed we have seen many such innovations, such as color-flow doppler.
As with all such innovations, the hard part is typically getting access to good datasets. In the healthcare arena, it is critical that such datasets be open.
Of course, federated data techniques are making this easier over time.

# Feed post number 574
Plausibly, the scaling hypothesis for language models might extend from beyond-human to beyond-organizational levels of performance.
This could mean that models are positioned to make winning moves in all manner of organizational life (beginning with corporations): the next phase beyond predictive analytics.
Critically, if this comes about due to the creative potential of language, as learned by the models, then there might come a point at which the moves are inexplicable. Will we still take those winning moves?

# Feed post number 575
Excellent discussion by
Christian Perone
of the "crown jewels" of LLMs: the datasets, and the challenges of their use when training LLMs.

# Feed post number 576
🚀 The March of Transformers Continues Onwards and Upwards! 🤖💥
This survey is a 🔥 great overview of the widening use of Transformers across key use cases! Check it out:
https://lnkd.in/gwyWCKer
📚
For those unfamiliar, these architectures lie behind the large language models, like ChatGPT, and they excel at finding patterns over increasingly wide sequences, such as how words at the beginning of an article give context for the meaning of words way down in the article.
Previous methods suffered greatly when attempting large context spans due to recursion. Transformers kind of unroll the recursion. Not only does this allow better spans, but it improves performance (due to parallelism).
However, the raw capability of a Transformer is in mapping sets, so long as there is some structure in the set mappings and sufficient examples, it is seemingly our best means at finding the relationships. 🎯🔍
As such they can actually be used for a wider variety of tasks than shown in the paper, such as predicting next-best actions to take with a website visitor.
Just as the original Word2Vec spawned many X2Vec patterns, even Hotels2Vec (for hotel booking predictions), we can expect Transformers to spawn many offshoot use cases. 🌱✨

# Feed post number 577
🔥 Unleashing the Power of ABC: From Closing to Shipping to Vigilance! 🔥
I once wrote ABC on my kid’s homeschool classroom, inspired by the famous scene from Glengarry Glen Ross: Always Be Closing -
https://lnkd.in/dcCW34Eq
Later, I changed it to ABS: Always Be Shipping.
Of course, it sounds horrendously commercial and superficial as an educational prop, but my intention was to instill the importance of:
1. Being able to sell your ideas
2. The mindset of being a producer (shipper) more than a consumer.
We live in an age in which consumption is ridiculously easy, even though the opportunities for creativity have never been greater.
But recently, I came across a new acronym, supposedly to epitomize the mindset of a detective:
A - Accept nothing
B - Believe no one
C - Confirm everything
The wisdom is a reminder of the paramount importance of being vigilant.
My view is that this mindset is useful inside of a corporation. It is not to say we shouldn’t trust our colleagues, but as I wrote in a soon-to-be-published article, there are two orgs: the real one and the imaginary one.
The quest, if there is one, is to live as much as possible in the real org. Not only is this where the real problems exist – and can be really solved – but it aligns, for me, with a philosophy to be authentic, in some sense.
It is my experience that one has to actively reject heedlessness, and so the ABC might help one to remain vigilant.

# Feed post number 578
Paul Elbourne's Slim Guide to Semantics spends an entire chapter, trying, and failing, to define the humble chair -
https://lnkd.in/gAxcnE4p
There are different modes of language, and therefore LLM uses, that entail different levels of abstraction, ambiguity, interpretation and synthesis. These are irreducible features of language, not models.
Language involves creative (i.e. novel) uses which, by definition, will necessitate creative prompting processes (which the author seems to describe).
There seems much confusion in the field as to what "Prompt Engineering" is. This in itself is an irony 😀 -- there is no clear definition.
One sense of the phrase is in which prompts are used to complete zero-shot tasks, like keyword extraction or question answering, where there is little ambiguity in the expected output. In this regard, engineering solutions are beginning to emerge (like InstructZero) that give us programmatic ways to find the optimal prompt (for some task) without human ingenuity (directly).
Much of the alignment of prompts is coming from the RLHF process, but this is only in some superficial instructional sense.

# Feed post number 584
🔋💡Debates and Expectations Surrounding Apple Vision Pro⚡📊
Apple's newly launched Vision Pro supposedly sparked internal discussions regarding its readiness, particularly regarding its battery or external power requirements. It's intriguing to ponder whether Steve Jobs would have approved this release, considering his meticulous approach.🍏👓
🏢 While Vision Pro is wearable, its primary application seems to be stationary rather than mobile. The use cases showcased during its launch were predominantly entertainment and office-related, with limited emphasis on travel or dynamic environments.🌟💼
⏰ History has shown that early iterations of technology, such as laptops and mobile phones, often had shortcomings but still fulfilled the requirements of early adopters. It remains to be seen whether the productivity gains offered by Vision Pro outweigh its limitations and are deemed acceptable by users.⚙️💻
👓 Having tried virtual desktop apps on other headsets, I understand the significance of Apple advertising this use case. Presumably, it indicates that the technology has most likely reached a level of readiness for Apple to show it.
For Vision Pro to truly succeed for me, it must be either extensively usable for prolonged periods, enough to replace external screens, or incredibly valuable for specific high-productivity high-values use cases.🔍🎮
For me, that use case would be research, as in tons of tabs and non-linear navigation between them, of course including AI....
Spatial computing for me includes the virtual-physical interface, but also the "navigational space" within the web.
💭 Personally, I found the absence of GenAI or LLMs (large language models) to be a significant and noticeable drawback, especially given the AI moment we're in.
GenAI tools have already become indispensable in my productivity toolkit. Combining them with Vision Pro's expansive 4K resolution multi-screen ability has the potential to deliver a groundbreaking user experiences that could easily justify the price tag, especially in high-productivity research and coding etc. 🌐📚
✨ Apple Vision Pro has ignited a range of discussions around the price tag and readiness. I would love to try it out for the prolonged high-intensity research use case...
Watch this space!? I guess. (Forgive the pun.)
hashtag
#
Apple
hashtag
#
VisionPro
hashtag
#
AugmentedReality
hashtag
#
Productivity
hashtag
#
Innovation
hashtag
#
TechDebates
hashtag
#
UserExperience

# Feed post number 585
Well, I just tossed my Oculus headset into the trash.
https://lnkd.in/gmeF7uvW
hashtag
#
apple
hashtag
#
visionpro

# Feed post number 586
🔹 Exciting news for GPT enthusiasts! OpenAI has a comprehensive guide on optimizing prompts for GPT models, especially GPT-4:
https://lnkd.in/gy9Arfap
🔹 If you're deeply engaged in research with ChatGPT, you may have already stumbled upon most of these insights. Rather than reiterating them, I'd like to emphasize two points, especially for those unfamiliar with these new tools.
🔸 Firstly, let's put to rest the misconception that "prompt engineering" will become obsolete. OpenAI's guide highlights a fundamental reality: "GPTs can't read your mind."
Language operates in a way that necessitates ongoing prompt manipulation and creativity as we leverage GPT's programming-like capabilities.
🔸 Secondly, the guide emphasizes the significance of incorporating a persona to elicit specific types of responses. Keep in mind that a language model draws from a vast array of training sources related to your topic. Without guiding the model's focus, it tends to generate results in a general sense. By introducing a persona, such as "You are a tax expert," the model will search its knowledge base for tax-related insights from the perspective of professionals like accountants.
However, you could equally begin: "You are a comedian..." and get a list of flippant and jovial remarks 😂
🔹 To take it a step further, consider starting your prompt with something like: "You are a tax expert who specializes in advising clients on saving money..." This nuanced approach will yield even more targeted responses tailored to your specific needs.
Happy prompting!

# Feed post number 587
🔥 LLMs: More than translators, they're Interpreters! 🔍
Unleashing the power of LLMs in interpreting written materials is simply ingenious! 🚀 Take a sentence from an article or paper and transform it into:
1️⃣ A simplified explanation.
2️⃣ An in-context explanation, shedding light on connections.
This approach has supercharged my understanding of new materials in multiple ways:
1️⃣ No more confusion! I now comprehend what was previously unclear.
2️⃣ Ambiguities and technical jargon no longer impede my comprehension.
3️⃣ I interpret the text in my context, going beyond the author's perspective.
This is a game-changer! 🌟
LLMs function as interpreters, restating the author's words in ways they may not have intended or expanded upon. It's a groundbreaking paradigm, making GenAI unique.
Writing has become elastic, offering endless possibilities and implications. We're only just scratching the surface of its potential. 💡💭
hashtag
#
LLMs
hashtag
#
Interpreters
hashtag
#
GameChanger
hashtag
#
GenAI
hashtag
#
ElasticWriting

# Feed post number 592
Important questions: what does a "society of synthetic/real minds" (my paraphrasing) look like?
https://lnkd.in/gx8RSgHD

# Feed post number 593
More open source LLM goodness from our friends in UAE. More permissive licensing for commercial uses.

# Feed post number 595
Hello
Stephen Shapiro
-- having led many small-team "catalyst" programs, I can attest that a small team can be a surprisingly influential.
Irzana Golding
has seen same, but with data-focussed teams: her slogan is "show, not tell". This pattern seems to work, per the "Sell Success" motif.
Tip: pick your catalyst team wisely, typically to include those who can indeed do (rather than talk), but under conditions of ambiguity/uncertainty.
Some variation of "10 Faces of Innovation" helps, although you don't actually need all 10 (probably a nice round number for the book)
https://lnkd.in/gcWXfrfD
The most critical is often The Hurdler who foresees hurdles and proactively clears them or advises how to circumvent. I've often found "An Evangelist" (not in original 10) helpful.
Outside-in intervention can help -- getting folks outside the org to "spread the message", a bit like the fable of not being able to preach in one's own town.
I agree with
Geoffrey Moore
that transformation often needs a pull model too -- i.e. stakeholders seen to pull the works of change agents back into the org.

# Feed post number 596
The most fascinating insight is not the research itself, but how quickly an idea that quickly gained traction is sent in reverse by more critical examination of the claims.
This has happened many times in LLM research with many flag-wavers (e.g. for “emergence”) quickly lowering their flags once the critical work is done.

# Feed post number 600
The global ascent of open source LLM research momentum continues with this impressive contribution from the AI community of the UAE via
Dr. Ebtesam Almazrouei
and her team.
The region has an assertive and optimistic stance towards AI including their own Minister of AI and many associated initiatives, many related to sustainability and other strategic initiatives.

# Feed post number 601
We are increasingly see modes of research with LLMs that are essentially about trying to use LLMs for "cognition" via "supervisory" processes above the LLM, be that "chain of thought" modalities or, as described in the referenced paper, "trees of thought".
Personally, I would not characterize this as System 1/2 modes of thinking, as LLMs (as currently trained statistical models) represent lower layers of processing unrelated to thought (see below).
[Note: Although not widely publicized, there are many reasons to doubt that the System 1/2 theory is anything more than a metaphor told via a convenient narrative of social-sciences studies (many that cannot be replicated) versus a scientific theory with empirical evidence.]
I believe the work of Ev Fedorenko is far more compelling as a possible explanation for the successes of these meta techniques
https://lnkd.in/geUsNGy7
Namely, she presents evidence that the language faculty of the brain is a distinct module separate from key cognitive functions (that can be distinctly mapped using FMRI). As such, her work also presents a basis for why LLMs work at all -- i.e. that language processing does have significant "lower layers" of processing in the brain outside of the cognitive interface (to "thought") -- i.e. at some lower level, "language works without thought" (which is what LLMs are "doing").
As such, works like the paper below might represent efforts to add the "thought" modes atop of the LLM, similar to how the brain might actually work.
Okay, this is a gross simplification I am sure!

# Feed post number 602
Blink and you’ll miss yet another development in fine-tuning custom LLMs.

# Feed post number 603
Per my last post, in which I said there isn't much "engineering" in "prompt engineering", this method developed by MS uses a text-based Socratic dialogue combined with gradient descent to improve prompts.
The method uses natural language feedback and editing. It starts by analyzing small batches of training data to identify areas for improvement in a prompt, expressed as "gradients" in plain language. These gradients guide the editing process to refine the prompt to fix the identified issues.
To expand possibilities, it performs a wider beam search (i.e. a search for the most efficient permutation) broadening the search space for optimal prompts. This approach simplifies the optimization problem into selecting the best candidates from a larger pool.
By adopting this method, businesses could achieve enhanced efficiency in their prompt optimization processes, empowering companies to easily identify and address prompt flaws, resulting in improved performance and exceptional outcomes.
One application in which the method performed well on benchmarks included identifying hate speech (
khaled Taha
).
https://lnkd.in/gaQgACt9

# Feed post number 604
If you need at-a-glance understanding of available Foundation Models and their key attributes, the Stanford Ecosystem data is a good source:
https://lnkd.in/gbwrFh9E
This will help you to stay on top of the rapidly moving field.

# Feed post number 605
This makes sense. My experience with larger orgs is that they are replete with folks whose only apparent "talent" is not being fired–they are survivalists, although faux ones who couldn't survive an actual challenge.
Part of their survivalist toolkit is a set of machismo cues, duly modified to avoid overtly-sexist alarms being triggered. For example, they turn institutional experience into some kind of "battle scars and wounds" nonsense, not revealing that the wounds are of their own making, which includes the "let me fix my own mess and look a hero" maneuvre.
When competent women enter the configuration, survivalists usually excel at putting up obstacles based upon institutional knowledge, obfuscation and all manner of tricks they have picked up in some kind of anti-Darwinian adaptation (i.e. survival of the least fittest).
But it isn't only women they block. They finagle their way into "special projects", which has often meant things like "Design Thinking" or "Digital Transformation" or "AI" where they succeed in making no progress, keeping out any actual talent and contributing to the "80% of AI projects fail" needless catastrophe.
This anti-pattern is widespread and has been exacerbated by higher-up survivalists who cover their own incompetence (e.g. not having a strategy) by assigning to a fellow survivalist box-ticker.
A classic trick of the assignee is to create some overly complex project using external vendors who are so desperate to sell that they will never point out the obvious flaws in the solution (that will also fall into the 80% of failed projects).
When a competent woman comes along to point out any flaws, she is blocked access by the survivalist classic can-kicker move: "We're already committed to phase one blah blah blah, let's get your 'excellent' inputs for the next phase". Translation: "You're not welcome here lest you reveal our incompetence."

# Feed post number 606
It’s possibly surprising that one of the world’s famous mathematicians, Stephen Wolfram says:
"...this suggests something that’s at least scientifically very important: that human language (and the patterns of thinking behind it) are somehow simpler and more “law like” in their structure than we thought. ChatGPT has implicitly discovered it."
This is precisely the Chomskian Generative Grammar Thesis for over 50 years, later codified into a research program called the Minimalist Program
https://lnkd.in/gWDU5wZu
Fair enough, it’s not like Wolfram has to know all theories abound. But who, then, is the “we”? Clearly not the group who already held this view.
However, LLMs are massively complex systems which, per Chomsky, simulate the mechanisms of language in some sense, separate from any cognitive apparatus. The parallel Chomsky draws is how a computer vision system might observe falling objects and simulate the laws of gravity without ever deducing the actual laws, like F = ma
This might not matter if you need a machine that predicts forces. And, for many use cases the statistical mechanics of LLMs appears not to matter.
However, under what conditions does it matter? This remains unanswered. It clearly matters where an LLM invents things. Moreover, it invents in unpredictable ways that make the phrase “prompt engineering” a contradiction of terms as there’s no real engineering involved (yet).
LLMs appear to act as if they are comprehensive, yet they comprehend nothing—it’s an illusion. Even without inventing, they can omit, include, ambiguate, complicate, reduce, embellish in ways far more reaching than humans and in ways hard to detect and design for.
At the systems level, as unleashed in a company intending to replace large percentages of humans with GenAI, there’s no predicting the consequences. The assumption that all automation is useful might not hold in the ways we’re used to expecting.
A possibility is that it might have the opposite effect and bring about instabilities that precipitate decline in org performance because, simply put, the sum of parts of human cognitive efforts is much more than the mere production of language and instructions of organizational apparatus. Perhaps the organization is mostly in the minds of its workers. If operations management theory is anything to go by, expert understanding of organizations is even more vague than expert understanding of language (which even the great Mr Wolfram seems to know nothing about).

# Feed post number 607
Better prompt guide than many.

# Feed post number 608
Replacing swathes of people with GenAI might itself be counterproductive.
According to the principles of systems thinking applied to complex systems, often the actions taken for leverage, which seem the obvious ones, prove to have the opposite effect.
The substantive difference with GenAI is when it attempts to replace cognitive functions versus mere “language processing” (shallow) ones.
There’s a possibility that a real mind vs. a synthetic one could offer substantial advantages in key areas.
There’s a reason that middle management exists and it might be disingenuous to believe that it’s just a redundant layer of fat.
If anyone pretends to have the answers to these questions, ask them which of the million management and innovation theories explains how an organization works.

# Feed post number 609
Intriguing. “Small” LMs with coherent language capabilities.

# Feed post number 610
It might be in the interest of certain orgs to say AI is "bad" in order to be those appointed to manage it -- i.e. more concentration of power, only with legislative backing. Much legislation with the backing of Big Tech can usually be traced to this line of thinking via their numerous lobbyists and mouth-pieces etc.
"Symbolic AI" is, at its core, an attempt to ground all AI in natural laws and closed-form algorithms. The biggest hurdle is that the only learning procedure that seems to work (besides brute force) is grad descent. How do we go from that to symbolic learning? We could posit the smallest of models, say, to understand the physics of a ball and see if that can be generalized to other objects. But I don't see any proposals about how to do that. I only see physics learned via grad descent with or without RL.
And what Marcus is talking about hasn't been solved by symbols anyway -- e.g. what are the symbolic representations of values? What are the symbolic representations of things like metaphor? The philosophers can't even agree on this stuff in abstract or analytical form.

# Feed post number 611
A consideration of what it means to innovate in a GenAI world.
Leaders will have to find new ways to innovate.
The tactical approach of finding "AI use cases" won't get very far. And, in many cases, the naive application of GenAI will bring about organizational collapse under the weight of complexity.

# Feed post number 612
This makes me want to go full circle and return to chip design.

# Feed post number 613
Want to make a custom LLM?
Fine-tune output layer then update entire net = better in- and out-distribution performance.
In layman’s terms, tune to your own data without degrading the underlying performance.

# Feed post number 614
The reference paper is worth a read.
From a technical POV, the authors show that as LLM models scale, the underlying performance tends to scale smoothly and proportionally.
However, oft-used metrics are brittle and cause non-linear performance effects which, in turn, gives the illusion of sudden jumps in performance at various scale thresholds: namely, so-called "Emergent Properties".
What is interesting to me is how many highly qualified experts in AI promoted the Emergent Properties claims as if these were foundational features of LLMs, apparently influenced by these "sharp turn" performance graphs. This seems like a parochial use of Emergence, as in "What we see in the graphs" vs. something empirically tested.
What remains intriguing is that language is claimed to be a complex system. And, it seems likely that LLMs are also complex systems (given number of params and nature of architecture). Anecdotally, this might account for their success as in the Complexity maxim that Complexity can only be "solved" using Complexity (i.e. a non-reducible system).
If so, emergence is a property of a Complex system and so we should expect to see this in an LLM.
One might ask, what measures would reveal emergence, if it exists.
Measuring emergence in complex systems is a challenging task because it involves capturing and quantifying properties that are not easily reducible to the behavior of individual components.

# Feed post number 615
I have long admired the Santa Fe institute for their future-looking work with multidisciplinary outlooks.
Recent work (below) talks of the need to rethink AI performance measures in order to avoid aggregate measures that might mask poor use-specific performance (e.g. facial recognition of minorities).
From the abstract of the paper:
"It is vital that researchers and policy-makers have a full understanding of the capabilities and weaknesses of AI systems so that they can make informed decisions about where these systems are safe to use and how they might be improved".
For those attempting to use AI models for real business benefits, it is vital to understand capabilities and weaknesses.
As I have reported elsewhere, understanding system weaknesses and their implications actually takes time and can be hard to achieve.
The paper's argument about aggregate metrics is an important consideration for AI product/project builders, not just researchers.
In many enterprise use cases, all that matters is how well a system performs against its intended usage, not some research benchmark. This is yet another opportunity to fall foul of the offline-online gap.
Systematic testing requires creating useful test datasets, which in itself can be challenging: how do you know you've tested well enough?
What is the concept of "test coverage" for NLP systems?
Many don't know the answers because they're yet to consider the questions. It's so easy to get something working with LLMs that systemic testing falls by the wayside, yet the consequences could be harmful.

# Feed post number 617
This is my *anecdotal* experience using GenAI aggressively on a project with other devs. If you know what you’re doing, it can boost. If you don’t, it can hinder if the user doesn’t know what to do when the tools hallucinate, as they often do.
If these insights are correct, it might cause pause to the growing assumption amongst PE investors that they’re going to reap significant efficiency gains by asking their portfolio companies to rollout GenAI not only to replace engineers but to bias staffing even more towards junior engineers based upon the assumption that GenAI will bridge the talent gap to senior-level skills.

# Feed post number 618
The reality is that there is tons of business value in prediction of the sort where tree models reign supreme.
Most orgs are stuck at this level, never really achieving the oft-promised holy grail of prescriptive analytics.
However, it seems likely that the role of GenAI is to make both predictive and prescriptive analytics more effective and ubiquitous via automation tools that accelerate experimentation and deployment of tree models etc.
Also, LLMs can unlock a lot of value via data-centric techniques that can potentially turn many unstructured problems into tabular ones (eg via data labeling).

# Feed post number 619
Well, 14% is certainly not the 10x that many authors have been posting to sell their zeitgeist books.

# Feed post number 620
Will AI Kill Creativity?
A philosophical reflection, not a professional or technical commentary. Questions like this are worth exploring, especially with an open mind if one believes, as I do, that all questions are useful and that entertaining them does not, contrary to some pundits, constitute taking a side.
As with all complex subjects and technological paradigms, there are dilemmas, contradictions and many unknowns.

# Feed post number 621
Has anyone asked GPT-4 to summarize the text of the act and connect with existing legal precedents so that the act is more interpretable in some sense (what sense, I am not sure, but one worries what items in the act are suggested by whom and what they imply) 😉
AI moving fast. Legislation will find it hard to keep up, especially in a world full of nuance, subtleties, mixed-agendas, complexity, etc.
A maxim of complexity theory is that "complexity can only be met (solved) with complexity"....
Can AI solve that? (That's actually what an LLM is doing: tackling complex language contexts with a highly complex [not complicated] model.)
Interesting times (and maybe in the curse sense of that phrase)??

# Feed post number 622
Google IO overshadowed by the real deal.
Open Source innovation will eat the world 🤗

# Feed post number 623
This is the kind of innovation I love.
Sadly, not enough people working on these kinds of projects as too much talent has been consumed (mostly indirectly) by the ad-click vampire octopus.

# Feed post number 624
Let's be honest, the Google IO event was 😩
We have to remember that this is a company that hires the world's best talent and has massive resources.
Many of us have already built our own services using doc summarization (via OpenAI APIs or even OS models). For Google to demonstrate this as a product (not even in general release) is lackluster.
No doubt, their strategy is "AI-enable" everything, which, by definition, will not bring us disruptive products.
For whatever reason, they seem to lack fundamental design expertise in the re-interpreting sense that Jony Ive had at his prime. What happened with the thermostat guy?
This is what happens when you hire in a way that tilts your culture increasingly towards "left-brain dominance" where things like the "Google Design Sprint" is promoted more as an analytical methodology than a discovery tool in the spirit of any great design tradition.

# Feed post number 625
When I wrote a guest chapter for
Stefan Bertschi
's book "Thumb Culture" I predicted projected UIs using computer vision to detect the interaction -
https://lnkd.in/gXmwNBB8
My office is still full of projectors and whatnots.
Years later, I remarked to my son that the ultimate interface that Jony Ive would one day design is the "no interface interface" -- it was kind of a tongue-in-cheek remark, but also a riff on one of my favorite design concepts: "the no-lamp lamp" --  i.e. the Metaforsi project by Artemide, since reimagined as the Yang LED Floor lamp by Carlotta de Bevilacqua -
https://lnkd.in/gam6562R
More years later, I had the privilege to work with the legendary designer
Rick Lewis
at Seven02 design on an experimental digital art installation that was supposed to float off the wall using various tricks of light enabled via CNC-milled perspex. Part of our influence was Ron Arad's incredible bookworm shelf (
https://lnkd.in/gxVPWXcX
) more art installation than shelf, plus with a twist of user expression (in configuring the shelf's flow).
We wondered how far the art installation could be the art, given the confines of trying to make a digital art display meaningful (beyond an LCD screen).
And now one of Ive's proteges finally brings us the "no interface interface" literally in the palm of your hand:
https://lnkd.in/g7QgG_S4

# Feed post number 626
This is a useful read (although sponsored by Predibase
https://predibase.com/
) about the rising importance of declarative techniques for ML optimization and deployment ("AutoML").
As best practices for MLOps begin to emerge, it's important to understand how to benefit from declarative "Infrastructure as Code" (IaaC) patterns where one, or more, of your microservices are going to have ML components as a backing service.
There are so many patterns here that span cloud-native to containerized deployment and testing patterns via umpteen tools (increasing every day), that it's difficult to keep up.
Indeed, keeping up is probably foolhardy versus making sure one has a well-grounded knowledge in software architecture patterns to know how to assess trade-offs for your use case versus paying too much attention to the crazy flag-waving ("Serverless Sucks!") that has ceased much of industry due to the need to stand-out in social media.
Take AWS -- you will find as many ways to deploy an ML-backed microservice as there are folks blogging about it (when not copying other blogs with a slight re-write and introducing lame coding errors when doing so).
Initially, the choice of architecture is not that important versus getting something deployed early and using that to probe deeply into the trade-offs of one architectural approach vs. another.
This is one area where ChatGPT will only get you so far.
For example, I have found ChatGPT+ persistently makes errors in generating AWS CDK scripts, even with relatively few constructs.
Without a good grounding in CDK and knowing where to look in the docs, I would not have got very far with some recent projects.
Before engaging with any method, I would propose building and deploying the simplest ML microservice possible.
Even with AutoML, one can easily get carried away.
I still highly recommend the Facebook field guide to ML as a great resource for understanding the value of deploying a minimal baseline model.
In Facebook, this would mean actual deployment (with CI/CD up and running), not fiddling in Jupyter with an offline model -- hence why their ML folks are required to interact with the services codebase.
As is well known, the offline-online gap plagues many AI/ML projects with ultimate doom -- for one of many reasons.
Anyway: enjoy the article.

# Feed post number 628
Whenever I post, I tend to add an image, which 99% of the time I get from Midjourney.
This is because images increase engagement. However, it seems a dumb waste of timeline real-estate that only adds clickbait eye candy and not much else.

# Feed post number 629
Anyone here doing research with long-lived agents? 🤖
I was playing with frameworks like NetLogo -
https://lnkd.in/gsyfF4f2
- but it seems more appropriate for modeling systems versus individual user behaviors.
Indeed, NetLogo is often used to simulate complexity scenarios, and has some RL modules, but I wondered what the current state-of-art is with agentive technologies.
My use case is building a "Digital Twin" of a person from a holistic healthcare point of view, especially from the perspective of affecting long-term behavioral changes.
I found the Human Behaviour-Change Project interesting -
https://lnkd.in/gzFE5vhU
- plus various surveys of AI and behavioral change (e.g.
https://lnkd.in/g7F2HXAB
) but a surprising lack of reference to agentive technologies given how often the literature reports that long-term change requires, well, long-term effort.
There are discussions of LLMs, such as literature review and mining patient reports (self-reported or via healthcare workers). Of course, now that we have LLMs, suddenly everything becomes an "LLM problem". This could be true once we get better at extracting causal patterns (related to reasoning) (cc
Ajit Jaokar
)
Of course, I can do a literature search and bootstrap into the domain using GenAI, but there's still no substitute for talking to an actual expert. If this subject means something to you, please connect with me or add a comment.
hashtag
#
ai
hashtag
#
healthcare
hashtag
#
research
hashtag
#
aiagents

# Feed post number 630
Well, I read a paper title like that and think: "We haven't seen anything yet" 😯

# Feed post number 631
Where's the remote-working innovation? 🔎 🤷‍♂️
Whilst CEOs continue to gaslight workers about returning to the office with flimsy anecdotes and almost a complete absence of data, it is patently obvious that there has been very little innovation that puts remote or hybrid working as a first-class feature.
The irony is that we were all asked to work with outsourced teams overseas using cameras, often banning travel to cut costs. So much for the magic of physical co-presence.
Sure, Gartner (et al) produce word-salad docs about hybrid working and various start-ups claim to be giving us novel collaboration tools, but the innovation is very flimsy.
It is surprising that many tech CEOs don't mind telling us that technology can solve all problems, except, it seems, remote working -- even when they sell products supposed to make remote working more effective.
Whatever it is that generates a unique set of circumstances by being physically co-located, this is where the innovation needs to be.
When I researched AR for Motorola in the 90s, we were chasing the concept of "telepresence" which had been discussed in comms literature since the 70s. Its goals were well understood -- to replicate the co-location sensation in all of its facets. But somehow all we ended up with is talking-heads on cameras, which is still a relatively clumsy and crude experience.
It is intriguing that some players, like Cisco, have a lot of the components and even some intriguing products (like the DeskPro high-res desktop videophone), yet have yet to deliver foundational innovation in the field.

# Feed post number 632
What is wrong with the UI here?
Why is the post window so small that it requires constantly scrolling up and down to edit even a short post.
Why does the UI jump around to enter an emoji and why doesn't it support the common pattern of in-line emoji modals using the colon?
The inline @ reference search is using a lexical grep that fails to find people semantically. Many times it struggles to find a person despite typing in their full name.
On mobile, the UI is hopeless. Commenting upon a post produces the world's smallest window that utilizes only 5% of the screen real-estate.
Why is the expanded chat window so small? Honestly, most of the time I push associates to other more UX-friendly collaboration platforms.
The auto-reply widgets in chat are simply ridiculous and distracting, barely hiding the fact that we are training a seemingly dumb model.

# Feed post number 633
⚡ Is "Large AI" a vampire squid? ⚡
This video about AI dilemmas is worth watching with an open mind, although it should be critically examined and discussed, which is hard to do these days without tribal "left-brain" inclinations drowning out nuance and uncertainty 👉
https://lnkd.in/gtukHFSg
It has also become harder to express doubt, a mode of thought that is increasingly besmirched by tying it to belief in "voodoo" (e.g. conspiracy theories).
The critique of technology offered (in this case about AI) is not new for those who have read, say, Neil Postman's work. One of Postman's most vivid insights was pointing out that Europe after the printing press was not just "Europe + Printing Press", but a whole new Europe.
He also used the metaphor that introducing new technology was like dropping red ink into water: you could not reverse the process even if you wanted to. The presenters in this video use a more vivid metaphor ("vampire squid") -- well, that's not the term they use. Rather, they call it GLLM, pronounced "Golem", which is a play on a word about a folkloric monster brought to life from clay.
I think the presenters do a good job of pointing out why the current AI explosion is notably different: namely the vast magnification of research and applications due to the commonality of transformer set-to-set modeling  -- i.e. most tasks can be modeled as a "language task", which is really the key to unlocking a flourish of activity. In other words, most AI research, activity and applications is focussed upon the same set of underlying principles, hence why they're accelerating so rapidly.

# Feed post number 634
I tried one of these so-called "Friendly Companion Bots" attempting to be the kind of AI seen in the film Her, I suppose. Without saying it, the design and marketing of the service is a kind of "emotional support bot", not in any medical sense, but some kind of "life companion" sense. Well, that's how I interpreted it.
In my first session, I voiced an angst about global wealth disparity. I did so as a contrivance, but one that seemed plausible and is often mentioned as a "Gen-Z concern".
Because the bot responded with various probing questions about my interest, I took that to suggest that such a discussion was within its scope of usage. It gave no objections or specific warnings and pretended to be interested.
The bot went on to give a very trite apology for oligarchs and wealth disparity using talking points promoted by many oligarchs to justify asymmetric wealth via their "poverty lifting" contributions.
When I asked why was it giving an apologia for oligarchs, it replied: "That is not my intention", as if it had an intention, but repeated the apologia by using a fallacy of incomplete evidence (suppressed alternatives).
I pointed out the fallacy, which it agreed it had used. However, it doubled-down on the position by suggesting I recognize the validity of the argument nonetheless -- i.e. the onus was on me to recognize the argument and consider modifying my position.
Overall, the experience was like talking to a high-schooler pretending to listen whilst practicing for a debate club full of dimwits.
This doesn't just illustrate the fragility of "talking" to a bot that is pretending to carry a conversation whilst reciting trite positions from who knows where.
To me it seems reckless and an act of hubris to promote a product that gives the facade of intention and sympathetic argument whilst being completely incapable of such and being biased towards fallacious talking points.
Yet another simulation product that hopes somehow that the world will bend towards its simulacra and abandon reasonable thought.

# Feed post number 635
More open source model goodness, this time for code generation.

# Feed post number 636
As ever, more sage innovation advice from the guru
Stephen Shapiro
One way I tend to think of Stephen's approach is that he takes well established principles of critical thinking and applies them to innovation as an antidote to fads, dogmas and the endless industry of just giving new names to old ideas.
Or, put another way, as with so many subjects and disciplines, it pays to understand first principles and foundational ideas before getting waylaid by memes, like "Disruption".

# Feed post number 637
More open source insights
Google and OpenAI have no defensive moat against open source.
cc:
Imo Udom
Moez Draief
khaled Taha
https://lnkd.in/g2-Wcd-9

# Feed post number 638
As ever, wise advice from Geoffrey Moore.
What resonated with me, as a technologist, is the need to get out and talk to the customers or prospects. Too often, technologists are remote to retrench into a defensive mindset about their shiny technology, wondering why sales aren’t “getting it” and landing deals.
Actually, it’s the technologists who often don’t “get it”, as in the value of finding the few customers with a critical unmet need that’s solvable with the shiny tech, although perhaps via a slightly different implementation.
This only happens by listening to customer problems, not talking at them about shiny tech.

# Feed post number 642
🤓 Just saying that in the so-called "Secret List" of top sites that "made AI smart", my personal site was ranked in the top 12% of tokens used.
Now I feel vindicated that my tendency to write long erudite posts (beyond the recommended SEO-friendly guidelines) seemed to count for something.
Well, actually I have no idea why my site was ranked in the top 12% 😁
https://lnkd.in/gQGZwjin

# Feed post number 644
Much has been said about the UC San Diego study suggesting that ChatGPT produced more empathetic responses to medical Qs than humans. 🤖 💕
Many AI-flag-wavers are enjoying this outcome. 🤖 🥇 🏁
However, given the scale of the model and the Reinforcement Learning from Human Feedback tuning, we would expect that it can simulate empathy in speech. This has already been demonstrated in various experiments.
The model, unlike a doctor, has seen many examples of empathetic speech patterns (e.g. dealing with loss, advising someone who has lost a job, etc.)
It is interesting to ask why were the responses more empathetic than doctor-provided ones within the context of the Qs from Reddit (assuming these results are statistically useful).
You don't have to go far to find many studies that suggest how widespread lack of empathy might be, or at least failure to show it -
https://lnkd.in/gksz79HY
("Missed Opportunities for Interval Empathy in Lung Cancer Communication
")
"We identified 384 empathic opportunities and found that physicians had responded empathically to 39 (10%) of them" -- whoops! 🤦‍♂️ 🤦‍♀️
The interesting Q is how did the model come to insert more empathetic responses if, say, the training data lacks such cues? -- i.e. why doesn't the model simulate a doctor if it is the case that doctors often omit empathy in their responses? [Personally, I'd need to look at the data in the report to get some clues.]
Perhaps the model is biased towards adding empathy around medical Qs?
But it is certainly a useful finding, per the same report on missed opportunities: "Empathy is an important element of effective communication between patients and physicians and is associated with improved patient satisfaction and compliance with recommended treatment" 💕 👩‍⚕️
The advice of the study authors is useful for those exploring AI UIs for wellness and healthcare (per a recent study of my own):
"It is important that integrating AI assistants into healthcare messaging be done in the context of a randomized controlled trial to judge how the use of AI assistants impact outcomes for both physicians and patients.”
https://lnkd.in/grtfNh3u

# Feed post number 645
Which AI tools should I learn? ❓ 🤔
...is the wrong question 🚫
...if you want to become a great AI-tool generalist, which could make you 100x superhuman... 🧠 💯
I just gave a presentation about GenAI to a college design class and someone asked the above Q, so I'm going to repeat the advice I gave to the class. 💡
💡 It's not what tool you use, but how you use it.💡
To become skilled at anything, you should aim to discover how it works -- "first principles". And one way is to discover via playing.
You could pick *just 3 tools* and learn a lot:
🔨 ChatGPT [language]
🔧 Midjourney [images]
⚙ Github co-pilot [code]
Keep in mind that nearly every tool that you see in these lists of AI tools (that get longer every day) are using similar GenAI principles, so master the principles and you can become a great AI tool generalist.
How do I become a black-belt of the principles? 🥋
Use the tools in the following fashion:
1. To solve an actual problem 🎯
2. By systematically testing the limits 👩‍🔬
3. Be as creative as possible! 👾
If you try to solve an actual problem, you will immediately run into edge cases and failure modes and the headache of struggling to find solution patterns. This is absolutely critical to learning.
If you parrot a demo, you will learn something, but not as productively.
Try to use realistic problems that reflect your challenges. For example, if you want to classify docs, then use examples that reflect your actual use case (without feeding private data 🚫  )
Don't be content with getting an output. Fiddle with the parameters to see what happens, but in a systematic way vs. random knob-twiddling (which you do first). Look at this example of a user trying to find the limits of ChatGPT composite reasoning –
https://lnkd.in/gVbF34YD
Have in mind a goal and try to find multiple ways to reach the same goal.
♨  HOT TIP: Be as creative as possible! ♨
You can do this in two ways:
1️⃣ Use highly detailed prompts with some of the craziest fringe ideas – don't forget, you are playing, so feel free to go wild.
2️⃣ Take the outputs from one tool and feed them to the next. This will help you to graduate to the next step of chaining
e.g. Write python to pull a series of prompts that you systematically edit (i.e. as a template) and feed to ChatGPT and loop them into Midjourney (via Discord). NOTE: you can cut-paste data if you don't want to build a chain – it's still playing and a way to explore tool limits.
This approach is a great way to cultivate what we call "Model Thinking", which is to see your problems through the framing of AI principles (which are fairly stable despite the fury of tool development).
hashtag
#
design
hashtag
#
learning
hashtag
#
creative
hashtag
#
chatgpt
hashtag
#
copilot

# Feed post number 646
👩‍💻 Prompts are the new APIs!!!! 👨‍💻
Yay!!!!
But after years of making APIs stable, reliable and declarative, prompts are these strange non-deterministic functions that need a new approach.
For those attempting to go beyond demos and build real systems, you will rapidly discover new challenges:
➡ non-deterministic behavior
➡ non-observability
➡ non-testability
Let's throw the spotlight on these challenges so you know what to expect. In a later post we will explore mitigations.
🔦  Non-deterministic: usually when we write a function, we expect it to do the same thing over and over (idempotency)
⚡ BUT: LLMs can produce different results to the same input!!! ⚡
What does this mean? It depends upon your use case. But you should be aware of this and design for it.
🔦  Non-observability: When an LLM gives an invalid response (due to its non-determinism) – how do you know? 🤷‍♀️ 🤷‍♂️
Uh – you don't, until a human notices it, hopefully not a user.
🔦  Non-testability: When writing functions, we test them using other code to send known inputs and expected outputs.
Well, I'm sure you can see where this is headed ⬆ ➡ ⬇ ⬅
If the expected outputs can vary, then how do we test? Moreover, we're dealing with natural language where the input space is essentially infinitely large (in terms of permutations).
Before that, the harder problem is usually having a set of test data to begin with and methods to systemically benchmark performance. AI researchers might be used to that, but many app devs are not – and it's not easy.
♨ HOT TIP (Secret Sauce 🌶 ): You can often use an LLM to generate your test data!
Now imagine what happens when you chain a bunch of these functions together ("Chain of thought" pattern). ⚡ ⚡⚡
The demos look great, but the gaps between fancy demos, proof-of-concepts and productionizable (is that a word?) systems can be vast.

# Feed post number 647
More open source foundational model progress.

# Feed post number 648
It always pays to learn fundamentals.

# Feed post number 649
💡 There is a temptation to believe that AI can reduce the irreducible.
I have worked with folks interested in using LLMs to solve problems that involve complex human traits, like taste. 😝
I have worked in the "taste space" many times. I spent years trying to penetrate the mind of the "decorator" in ways amenable to computation. 🖼
Recently I've been working with trusted recommendations (e.g. of restaurants) and wellness.
Taste is incredibly hard, which is why we have curation. Even here, there are many paradoxes, such as an inconsistency between our claims about taste vs. "actual" taste.
When researching art selection, we found folks whose selections defied their stated preferences. This wasn't just taxonomy confusion, although that does play a large role: we often lack the vocabulary to explain taste, hence the (erroneous) deferment to a taxonomy or curated labels/sets.
ChatGPT appears to be quite responsive to taste. Try:
"i like minimalism and very few colors, something calming yet with a tinge of danger -- how should i decorate my lounge?"
The advice is perhaps predictable (to a decorator), but can be improved via refinement. However, the more detailed you try to get within an LLM dialog, the more the model will start to hallucinate.
One can posit why this is–pushing harder into a sparser probability space, the "curse of dimensionality" comes into play (where all points in the noisy space become equally probable).
This is a key problem to solve: long-running dialogs that avoid drifting into sparsity and increased hallucination.
When it comes to taste and exercising judgement, there is an emotional investment that often isn't reducible to a single step, so long-term experiences are a must.
Trying to reduce into few steps can backfire. Presenting a solution too quickly can lead to distrust in the responses.
I worked with a client who deliberately introduce artificial delays into a process in order to avoid this problem.
The back-and-forth we do when exercising taste is often a mysterious process and studies have attempted to uncover it, from behavioral economics to psychology to game theory and so on.
But there is a misplaced expectation that AI can solve these problems  with our current models. It's not just that the model can't handle a refinement process without increased hallucination, it's that the pattern of a text-only dialog is itself challenging.
One thing we should expect is to see innovation in how to incorporate AI into long-running processes, like decorating, wellness, therapy, financial advice etc. At Prosper, I researched how to solve long-running dialogs (in consumer finance) but found that it was not easy within the confines of a text-only chat modality.

# Feed post number 650
Perhaps there is merit to Yanis Varoufakis's critique of AI via his framing of "cloud economics" as excess labor production via free-of-charge involvement of users participating in simulations of markets. As the labor does not participate in a dividend, or even a real system, the artifice is asymmetric and will eventually propel collapse.
Witness the increasing fury of users attempting to be heard via postings (like this one), yet without any real prospect of productive returns in a simulated "community".
Witness the proliferation of "AI experts", some of whom yesterday were car mechanics and don't seem to get that we can read their profiles, perhaps because it doesn't matter as we are all drugged out on blue pills.
I have no useful opinion on the merits of this, but believe that the arguments about instabilities deserve consideration and might yield greater threats than being wiped out by Skynet. (After all, the current cheerleaders for "winnable" nuclear war seem to have biological brains.)
Now is the moment to reflect. The current crash has exposed many paradoxes, like layoffs in a sector replete with record profits and a kind of unreal "employment" that ends with a text message, no doubt soon to be authored using a prompt "Terminate Bob with the compassion of Oprah."
Per Greenspan's comments that it's now impossible to tell real financial products from pretend ones, can anyone tell a real company from a pretend one inside of the bubble?
It's not just making zero profit. It's building a culture around it - growth hacking? What about profit hacking?
Instead of pointing out the obvious problem of way too many mediocre products like yet another "intelligent" sales tool that delivers "67.3% revenue lift" (sure), or yet another payroll app, or any of thousands of "database+UI" patterns that barely exceed the value of a spreadsheet, the finger is being pointed at an abstraction: "lack of runway".
It seems likely that the instabilities due to excessive production are what made crypto possible where it was so trivially easy to generate worthless goods (Bored Apes) in ways so complex via simulated (and even fake) markets that the apparent successes were just anomalies within an inherently unstable state-space where it paid to never "Cross the Chasm" never mind make a profit.
It was so simulated that it wasn't even possible to spot fake goods -- the entire system was fake. And who made all the money? We all know who did. (Hint: it wasn't the teenager in the bedroom.)
What, then, are the prospects for instability from the exponential abundance headed our way with generative AI?
On the flip side, it's never been a better time to be truly innovative and reimagine the tradition of great engineers who built things, not simulations -- those who want to put a dent in the universe (not the simulverse).

# Feed post number 652
The commentator confuses several ontologies 🤦‍♂️
🕊 Just as we did not need to reproduce a biological wing, even of a fly, to build aircraft  🛩  that fly faster than birds, we do not need to model the human brain to exceed human performance. 🧠
LLMs exceed human performance in various benchmarks, even novel math-medal Qs given to nerds 🤓  --
https://lnkd.in/gXzA8Pxn
.
This is not new. Many engineered machines exceed human performance without simulating biology.
This is precisely why Turing posits the imitation game. His remark about machines that think being an absurdity is an appeal to avoid this ontological confusion.
Chomsky voices an arcane argument that LLMs violate "I-Language" (the proposed internal recursive grammar of the brain). His main objection is that the discovery of the nature happens via solving puzzles vs. statistically modeling. This has some validity if we are discussing philosophy of science. And not everyone agrees with i-Language innateness -- LLMs and fMRI might be giving other clues -- e.g. see
https://lnkd.in/g4_UWugd
)
Unexpectedly, a simple statistical optimization at *massive* scale seems to encompass many useful language processing capabilities. We should focus on its uses, potentials and criticisms in light of use cases, not its name ("pattern matching").
The issue of LLMs "understanding" is well discussed by Shanahan in his paper "Talking about LLMs" -
https://lnkd.in/gKAPkRpk
(Hint: it's a very readable paper.)
LLMs do not "make mistakes" in terms of their programming. They output word sequences over learned probability distributions.
This feature *does* have the capacity to be creative in the sense of language, by its nature, has vast permutational potential. LLMs can exploit permutations (via joint probabilities) to generate novel sentences. Indeed, this property seems highly useful for knowledge discovery and writing (X in the style of Y). Of course, it also presents various hazards from the perspective of misalignment with objective truths. But permutational potential regardless of worldly correlation is a feature. After all, that's how we "lie" -- e.g. write fiction or talk like a politician 😂
Those using LLMs to discover facts rely upon probabilistic proximity to truths via an expectation that the training data is largely coherent in various senses.
All this said, the identification of failures due to human folly is not a new concept and has been incorporated into the engineering discipline decades ago. I don't understand why some colleagues are so triggered by it. It is clearly not just a matter of science, as we know from the 737 Max, Challenger Shuttle, Chernobyl etc. With little imagination, it is trivial to posit weaponized asymmetric uses of AI combined with Sod's Law (a maxim of SecOps). Engineers should want to solve these problems because that's what engineers do versus cheerleading for tech, whether or not AGI is a thing.

# Feed post number 654
George Trujillo Jr.
opens the discussion of a vital topic: real-time AI.
In AI/ML, there is the notorious offline-online gap, which can take many forms. Broadly speaking, it is the gap between tech that performs well in an experiment, or lab, yet doesn't translate into any business benefit when taken online. Hence the oft-quoted anecdote of "80% of AI projects fail", which was previously "80% of ML...", "80% of data science...", "80% of Big Data..." etc.
What many orgs are realizing is something like: "Hmmm, this AI stuff seems useful, but only if we can utilize it in real-time for time-critical services".
Real-time here means whatever the business cycle time dictates, which could be sub-seconds (for responsive UIs with the canonical 100ms paint time) to seconds (for competitive credit decisions, or device-sync of services, like current viewing point in a Disney+ video, etc.)
The offline-online gap here isn't necessarily the problems with inference speed of models, but a lack of a data architecture that might support real-time inference and MLOps.
And, it's one thing to refactor or transform an orgs data into a unified warehouse/lakehouse, but another to refactor into a real-time streamed system.
George's article well worth a read.
And, for a good exploration of a streaming implementation, see the AWS Disney+ case study -
https://lnkd.in/gc9scqUm

# Feed post number 655
🚀 Blockchain take-off has been thwarted by several things.
Firstly, most brands do not understand it and ignored it by lumping it with crypto, which, rightly so, scared many folks away. ₿₿₿
Those that did consider it couldn't wrap their heads around decentralized assets, which appear to go against the grain of common business wisdom to derive value via control (e.g. proprietary, centralized resources). There is no decentralized playbook and corporate strategists displayed their usual lack of imagination (except in the fashion industry).
Crossing the chasm was delayed by an unusual side-effect: crypto. This feature that looks like a bug incentivized many to stay on the left side of the chasm where there was such a huge inflow of speculative capital that only had value on the left of the chasm. (Note: crypto exposed seemed to expose the instability of digital proliferation. If this is true, then one must wonder what market instabilities Generative AI will bring, which is likely to be exponentially more prolific.)
The core idea, decentralized assets, tends to suggest that the name of the game in using tokens is innovation, as in occupying market mindshare via innovation. If "open" innovation was hard, decentralized is way harder.
This is where we learn how poorly innovation has been understood or practiced all along, obsessed with the endless repetition of "disruption" which turns out to be a tiny (albeit influential) part of the innovation landscape.
Indeed, many of the web3 platforms that made money from crypto lack any innovation themselves beyond the hard-technical innovation used to build a token and then trading the token. In the reliance upon "if you build they will come" was duly repeated for this technology cycle.
So, combine lack of understanding with the challenges of actually-hard innovation (which is not an oxymoron, ironically) and this accounts for the very slow adoption of tokenized business models.
I remain a believer, based upon my own recent analysis for a major brand catering to Global 2000 retailers, but I am quite prepared to be wrong (especially as I am not hawking a token 😀)

# Feed post number 656
Blockchain is still a thing, but lost way down below the AI noise floor.
Many folks have dismissed BC due to the crypto crash-and-burn.
But, after the smoke has cleared (or not), some brands are finding use cases for various tokenized mechanisms.

# Feed post number 657
👾 Getting lost like Alice in AI Wonderland? 👾
You are not alone.
But there is a solution.
🏗 BUILD!
🤾‍♀️ PLAY!
🔬EXPERIMENT!
You cannot keep up with AI: it's impossible. 🏃‍♀️
And, let's face it -- LinkedIn is awash with noisy reposts and unoriginal content and YAP (Yet Another Prompt, or Yet Another PDF).
But you can develop thinking tools 🤔  about AI that allow you to see the landscape thematically, which is the first step towards a productive understanding that you can focus upon your use case.
🤗  My advice is to play with some of the tech for yourself. With tools like Co-pilot, Code Whisperer, ChatGPT, experimentation is relatively easy. And, for those that don't know, most of the models on Huggingface have an interactive version for you to play with. 🤗
If you're using ChatGPT, be systematic in trying to emulate a problem close to your domain (without inputting sensitive data ⛔ ).
The model is so powerful that you can explore key limits and constraints of the tech. But you need to be systematic.
Here is an example of someone trying to defeat ChatGPT in a systematic way -
https://lnkd.in/gVbF34YD
This exploration is useful for understanding the model's limits of compositional reasoning. You might want to understand such constraints as applied to your business problem.
Find a good developer advocate and follow them by running some of their examples. A good one is
James Briggs
at Pinecone.
Meanwhile, if you want to know how to roll out AI in your org and don't have a clue where to start, feel free to connect.

# Feed post number 658
Actually, I originally posted this for my teacher friends as it's a decent examination of the implications of ChatGPT for teaching (in this case, math).
But it's worth a watch (first 20-30 mins) to understand:
1. The power of GPT-4 in a very vivid way (even cf. 3.5) -- i.e. can answer math Qs from math medal competitions where the very idea of the Qs is not to mimic textbook patterns. Yet, somehow (as discussed) GPT-4 found the answers.
2. The hack of asking GPT to check its own work. Yes, that pattern seems to work in some cases.
3. The subtlety of the prompt in guiding GPT to find a "clever trick" solution to a problem instead of the more obvious solution-finding pattern.
4. The implications for teaching in terms of shifting the emphasis upon finding new ways to solve problems versus following a method.
5. The challenges of 4, as in that's not how classes are run (except in, say, math clubs).

# Feed post number 659
Predicting public opinion via media (without surveys).
To anticipate how a subpopulation will answer a survey question, the method employs a computational model that inputs a description of the subpopulation’s media diet and the question being asked.
cc:
khaled Taha

# Feed post number 665
Just finished hands-on workshop with Snorkel AI data-labeling tool.
Key takeaways:
The need for the tool is that with AI, the data is the bottleneck, not the model–i.e. plenty of models to choose from these days, but all useless if you don't have clean labeled data.
Lots of unstructured data in orgs (e.g. documents, like contracts), but these lack labels to feed into an AI system (e.g. what contracts?)
Hence, labeling is the bottleneck, especially if done manually (which also suffers QA issues).
Solution: use programmatic techniques ("labeling functions" [LF]) to label the data automatically–e.g. "If the word 'consultant' appears in contract, then label as 'consulting services'"
Can use variety of LFs. It doesn't matter if they conflict, overlap or are noisy, the Snorkel techniques (Weak Supervision) take care of which combination of LFs to pay attention to per data point (e.g. each document you want to label).
The tool seemed straightforward to use. If you bootstrap by hand-labeling a bunch of examples ("Ground Truth"), it can suggest LFs that might apply to the unlabeled docs (based upon what it recognizes in the ground truth set).
LFs can be constructed via a variety of methods, from simple keyword filters to regex (a technique for pattern-matching strings) to fully blown Python functions that can be as complex as Python allows.
Various models (e.g. Logistic Regressions, XGBoost, BERT) can then be used to classify the docs, or custom models inserted via plug-and-play SDK.
Overall, the business benefit is that the method greatly accelerates labeling of data and so solves the data bottleneck both in bootstrapping an initial model and in tuning once in deployment (e.g. as data drifts, such as new contract type starts to appear in the workflow etc.)
https://snorkel.ai/

# Feed post number 666
Recently, I started to use the AWS CDK as I wanted more flexibility over IaaC deployments that using the .sls YAML files in serverless.
I took the opportunity to pivot towards the AWS SSO (Identity Center) solution to benefit from short-lived session tokens, which are more secure than long-lived credentials.
In theory, this is a great use case for ChatGPT because I am a CDK and SSO newbie.
Eventually, I had to use the real docs because I had a bug (that was actually a masked error condition). I figured that ChatGPT was getting it wrong. Indeed, I asked the same Q many times, kind of stuck in a loop of (ignoring Einstein) frustration, and got different (conflicting) answers about the sequence of steps.
Don't get me wrong. I had used it the day before to accelerate a particular config that I didn't use often and it saved me ~0.5 days of effort, maybe more.
So, on the one hand, the use of ChatGPT to accelerate learning in an unfamiliar subject and/or occasional task (that one forgets) can be a real time-saver. On the other hand, if one encounters a bug or an update outside of the ChatGPT timeline, then it can be misleading. As the old adage goes, you don't know what you don't know.
Noticeably, even though I knew to be cautious, I still dropped my guard. It took me longer than perhaps it should have to guess that the outputs were incorrect.

# Feed post number 667
Get your free Wikipedia embeddings here 👇
Proceed with caution. After all, it's wikipedia. Make your own mind up about the veracity of the "crowd sourced" data.

# Feed post number 668
For those interested to learn about graph representational learning, there is a great introductory book (legal)  - Graph Representation Learning by William L. Hamilton --
https://lnkd.in/djaFVtkn
For those unfamiliar, models like LLMs are based upon a multi-dimensional numerical representation of a word (in context of its probability distribution with respect to neighbors). This is how modern NLP works -- i.e. by turning words into numbers (embeddings) that can then be numerically processed.
But sentences are just sets (of related words). A Transformer doesn't really care about the order -- it is really a "set to set" mapper. (The order of words is superimposed using a clever positional encoding trick.)
Similarly, pathways in a graph (like a social graph, item-recommendation graph, etc) are just sets and so can be analyzed using similar techniques. A great example is a food recommendation graph, as used by, say Uber Eats. For example, when you ask for a "kebab near me", it might be that the underlying data doesn't contain a reference to kebabs. However, via a graph of relationships of food types to cuisines, perhaps the search can be converted to "greek restaurant near me", and so on.
Or, via a social graph, or who bought foods similar to you, or to kebabs, another connection might be possible to surface a restaurant and its menu that might be relevant.
A graph representation means probabilistic connections between items on a graph in a way that represents relatedness within the context of the training -- e.g. there could be an embedded relationship between pizza and donuts along some kind of "degree of fast-foodness" dimension or "degree of high carb-ness" dimension. These are the graph representations. They might not be understandable by human inspection, yet still yield some useful mode by which to perform calculations, such as food-substitutions etc.
https://lnkd.in/dKUWmn9A

# Feed post number 669
More developments with open source LLMs. The ecosystem is really beginning to flourish even though we’re still very early in this journey.

# Feed post number 670
The biggest problem in trying to scale the use of LLMs for content generation related to a single topic is that you quickly run into frequent use of the same phrases, many of which are, naturally, cliched.
One even sees this using the AI writing tools (I tried Writesonic) in which all of the examples start with the same tired phrase: "I recently had the pleasure of..."
Part of the problem is that humans tend to copy other folks anyway, reinforcing certain phrases in various contexts.
Strategies to solve this might include changing the temperature ("randomness"), but this has its own side-effects.
Fine-grained control over the generation requires a different technique than prompt-engineering.
We found that it's easier to generate a dictionary of alternative phrases for overused ones using different prompts to generate such phrases. These can then be injected into the generated text using various patterns.

# Feed post number 671
With so many articles on LI basically saying the same thing (about prompts, or whatever), one has to wonder how much ChatGPT is boosting this echo effect.

# Feed post number 672
What everyone is asking about... LLMs in production.
This overview from
Diego Oppenheimer
, Algorithmia.
cc:
Ahmer Mumtaz
,
Omar Afzal
,
khaled Taha

# Feed post number 673
The author is correct to point out that there is probably no single source of truth.
The metaphor of truth is probably incorrect to begin with. Perhaps we owe something to the once-fashionable discipline of fuzzy logic, although it turned out to not offer much by way of operational tools and methods.
One does not need truth, but rather localized confidence relative to the decision being made within its context and moment, along with agreed-upon definitions for key metrics.
(By the way, this is not unlike how we would like LLMs to work -- for some fact-like outputs, we want 100% reliability (1+1=2) whereas for others, we can live with a degree of ambiguity per the use case and context.)
For key metrics, canonical definitions are possible and useful. We are beginning to see more data stacks incorporate a semantic layer to make metrics a "first-class" data definition (versus something in a power-point or a SQL snippet).
It helps if models are reusable. Solutions like DBT Cloud can make a difference because they encourage version-controlled reuse of common expressions that can be reference by other models during materialization.
Testing is a sorely missing discipline unless someone has been diligent with adding tests to an airflow job, or whatever. But DBT Cloud moves the testing into the hands of the so-called "Analytics Engineer" (vs. Data Engineer).
The preponderance of lots of scratch queries that leak into production systems without any governance is a major risk to data integrity. But this is mostly a lack of operating model (e.g. DataOps or Agile Product applied to data).
In time, I believe we will see more data meshes migrating towards the so-called Event Sourcing pattern seen in some microservices whereby data changes are stored versus data being overwritten (i.e. "constant snapshotting") -- this will become essential for building historical views of the data for the purposes of machine learning and AI, plus causal analysis (which is slowly emerging as a viable tool of analysis, especially via graph networks).
This moves the problem from a single source of truth to a timeline of truths whereby different states can be reconstructed from source events (from the lakehouse).
There is also the whole notion of expectations. It is incredible to see that 99.99% of dashboards often attempt to show data veridically without any notion of error bars, confidence levels etc. If you show a single number, then it kind of implies a certain (high) level of truthiness. Many mishaps and wasted business cycles are caused by fixation on a concrete number that wasn't concrete to begin with.

# Feed post number 674
I like the characterization here of the evolution from microservices to serverless as "nanoservices".
It pays in this example to think of serverless as meaning "Function-as-a-Service" because the decomposition to functions and the exploitation of serverless operations are no longer synonymous.
For example, AWS Fargate or App Runner allows for a serverless architecture, operationally speaking, by abstracting away server and related resources management, but the processes can still be anything deployed inside a container, which is probably less fine-grained than FaaS.

# Feed post number 675
This conversation exposes a naivety about what education is designed to do. The main objective of compulsory schooling has always been to instill conformity, such as via constant GPA monitoring–i.e. to weed out those unwilling to endure mindless tasks. This is well discussed by the likes of John Taylor Gatto who cites from public sources during the formative years of mass schooling (e.g. from Ford, Rockefeller etc)
Ford: "What standardization does is to put the emphasis on those who conform, and to de-emphasize or eliminate those who don't."
The critique by those more interested in what constitutes a relevant set of working ideas and a productive/creative mind has always been there, but ignored by elites (for the same reasons Ford presents).
It will be interesting to see how these new tools disrupt education, but I think the result is predictable, as in the permitted modes of usage will still be aligned with mindless conformity versus creativity. Meanwhile, other countries will be take a more progressive approach (as some are with teaching computational math vs math) and move ahead.

# Feed post number 676
Christoph's remarks are insightful, yet commonly overlooked. This is a broader problem with complexity whereby so few of us are trained in, or even aware of, systems thinking.
Many data scientists seem incredibly ignorant of the pragmatic and productive use of a model in an uncertain business context versus the often over-engineered effort of achieving some score with their code.
I like that his moniker is "better ML by thinking like a statistician". Of course, this might be an anti-pattern in many cases (e.g. read Mindless Statistics, or my recent riff Mindless Data) -
https://lnkd.in/dsBFHY7z
As I recently remarked, the whole discipline of "design of experiments" was introduced by Fisher (a British polymath statistician) because of his insight that analysis of the broader problem would prevent so many mistakes later (in a statistical process).

# Feed post number 677
Just as everyone is a potential novelist, everyone is a potential prompt engineer.
But that's only a small part of the story.
The real power is going to come from the chained applications of LLMs with other solutions, such as additional LLM prompts or other systems entirely.
However, the truly magical, scary and enthralling prospect is that many of the skills need to link prompts with other systems can be solved using....
Yes...you guessed right....prompts.
So, everyone is a novelist is a prompt engineer is an AI solutions builder.
But if you want to be systematic about this within your organization, then it needs various other skills, such as Model Thinking (i.e. how to think about business problems in light of these prompt-chained possibilities). This is no different from using Design Thinking to understand, broadly speaking, how to interpret problems and discover solutions in light of human factors.
If you want to roll out these capabilities in your organization, feel free to connect for a chat.

# Feed post number 678
When tuning an LLM, especially for classification, one should consider using a range of prompt-tuning approaches, comprised of labeling functions, and combining them via a weak-supervision model (e.g. Snorkel). This can significantly improve reliability.
https://lnkd.in/g_eqmt69

# Feed post number 679
Advice and (limited) experience pertaining to using ChatGPT in the classroom.
Ajit Jaokar
https://lnkd.in/gKGTgw8n

# Feed post number 680
Introducing the need for Model Thinking, a modern spin on the concept of Systems Thinking, widely adopted in various forms like Design Thinking and Quality Thinking (e.g. Six Sigma).
It is perhaps a necessary ingredient for systematic and scalable discovery of AI solutions.

# Feed post number 681
The coin-flips odds can be misleading. If you give generated items to an expert in that field, then the odds might be different and with potentially significant tail risks.

# Feed post number 683
If you blink there days, you miss yet another interesting development in Large Language Models (LLMs).
For those of you, like many, attempting to adapt LLMs to specific data sets and sources, data augmentation is an important problem to solve.
This is where the LangChain framework can be useful -
https://lnkd.in/gt2fEEbB
Developers can utilize LangChain to build chains that integrate with external data sources for generating text based on specific data, rather than generic data used in training language models.
This is useful for a variety of use cases, including summarizing lengthy texts and answering questions about specific data sources, such as:
- Summarizing a specific text–e.g. private document or website.
- Answering questions from private documents or a website.
- Answering questions about multiple private texts.
- Using data from an external API call, like SQL queries.
These use cases emphasize the significance of integrating external data into the generation process, which can be accomplished in two steps: fetching the pertinent data to include, and augmenting it by providing it as context to the language model.
Using LangChain, developers have a standard way to create  applications that integrate external data sources into the generation process.

# Feed post number 684
Analysis of foundational model transparency.

# Feed post number 685
A realist calling it how it is. Productive LLM use cases for enterprise are hard when you get into the details of a production-ready use case.
The LLM use cases in the enterprise are incredibly challenging in many situations because the real value is in the long-tailed data, which is hard to incorporate accurately and hard to get, period.
The level of AI-preparedness in terms of data integrity can be shockingly low -- e.g. yet to meet anyone anywhere who says: "Our CRM is a fantastically rich and complete source of accurate customer data".
And the reality of many warehousing transformations is a desire to fix the anti-pattern of siloed data versus a goal to build a "Digital Twin" of the enterprise, replete with appropriate meta-data and state-change data (e.g. via an Event Sourcing model, say) that enables the kinds of observability that could deliver huge value in conjunction with LLMs.

# Feed post number 686
No one needed another study to understand this. It has been studied (by professors) umpteen times and is the subject of hundreds of books and probably thousands of papers. And, let's face it, the average Big Tech product is lousy with huge obsession over "craft" and posturing vs. core ideas. Big Tech keynotes are so boring it's painful.
At the macro-level, innovation is greatly stifled by monopolies, including military markets (which used to generate a ton of commercially useful innovation).
Financialization is another curse (e.g. buybacks over innovation), greatly encouraged by the finance system itself which, per Greenspan, is so mixed up with non-sensical derivatives that no one knows what's real any more.
hashtag
#
greedflation
over
hashtag
#
innovation
It is a truism that constraints do foster innovation. A lot of the so-called innovation in Big Tech is pointless invention as a marketing exercise (for shareholders) -- yet another programming language, framework, database that no one needed. In other words, they are solving the wrong problems, or ones that no one outside of engineering circles actually cares about (e.g. scaling).
Many of these mediocre products flood the market via free distribution, but it's a tactic that has little to do with invention.
That said, the WSJ writing about this is probably a call for more lay-offs so Big Tech can get "small and hungry" again, or some such "activist investor" ploy.

# Feed post number 687
I spent a few years running an innovation lab for an art/decor e-commerce company.
We built numerous experimental technologies, including one of the first art/decor language models used to describe art works based upon their aesthetic content, but in language more accessible than what an art expert might use.
Back then, there were no LLMs, so we used a Markov process to generate descriptions. It worked fine and was also personalized to use color names that resonated with the user's color interests. We trained it using blog posts and articles by interior designers.
The theory behind the idea was to build attachment with an artwork by a more personalized description.
Since then, I have revisited many of the ideas and techniques in light of modern AI. Of course, many of the ideas are much easier to build now.
However, I wanted to see if art generation itself were possible, as in decorative art of the kind typically sold online. The main challenge I wished to explore was printable resolution.
Remarkably, since Midjourney V5, it's possible to generate larger images with much greater detail that can withstand various upscaling techniques (done outside of MJ) without excessive artifacts.
For example, we managed to upscale the attached image to be printable at 300dpi at 20x20 inches. That's quite a jump from where we were a few months ago.
We continue to experiment with generating decorative art, with a particular interest in understanding how the technology might be useful for commercial artists who want to make variations of their own original works for a catalog assignment.

# Feed post number 688
I have no doubt that retail and creator economies will heavily utilize tokenized innovation once we get past the fallout of the absurdity of crypto grifting.

# Feed post number 689
Formalization of meta-data management.

# Feed post number 690
When you harness complexity, you unlessh complexity.

# Feed post number 691
A comment recently made about AI large language models is that they use billions of parameters whereas the physics Standard Model has only 19 and manages to describe the entire universe.
This is a false comparison.
First of all, LLMs are not trying to model a theory of language. They are attempting to model language itself, or, more accurately many languages at once. This is in the sense that a language is the shared vocabulary and usage of a community. The crawled data used for LLMs encompasses millions of communities and hence millions of languages.
If you don’t believe that, trying asking chatgpt to generate text using Multicultural London English, which itself has many forms.
Language in this sense is claimed to be a complex system, per various theorists. If so, it cannot be reduced to fewer parameters than needed to encode complexity to the extent that various applications demand.
The comparison with the standard model is incorrect. If we wanted to predict the actual behavior of a particle system (versus a model of the theory of particles), it would require trillions of parameters.

# Feed post number 692
Research from HAI about efficacy of LLMs in medical context of "curbside" doctor questions. Note the interesting finding of variance in the answers to the same Q over repeated asks over a number of days.
The lack of uncertainty measurements in responses poses interesting challenges. One can imagine various solutions when coupled with different data sources, but remains an ongoing area of research.
We can expect these findings to apply more generally to a variety of disciplines outside of healthcare, such as sales enablement where the uncertainty has a different outcome (revenue vs. health).
"Overall, our early results show the immense promise as well as the dangers of using the system without further refinement of the methods – such as providing uncertainty estimates for low-confidence answers. Given their great promise, we need to conduct rigorous evaluations before we can rely routinely on these new technologies."

# Feed post number 693
I have run UX labs several times as part of a wider innovation labs remit, including mobile, e-commerce (art/decor) and fintech.
I used to research various behavioral elements, including a tool that
Garris Shipon
once made to test the "Aesthetic Gist" of looking at various art images to understand what users see at at glimpse and how subtle UX treatments could influence the decision to save images. Garris went on to build the Tremula JS library as the "ultimate bad-ass image carousel" -
https://lnkd.in/gZzUh5w6
So it is good to see companies like Coglode codifying various behavioral research ideas into repeatable research and scalable tools for others to utilize in their product design programs.
Design approaches inspired by behavioral economics insights.

# Feed post number 694
Following on from my post yesterday about Apple’s foray into pay-later financing, this is an insightful article from
Ed Zitron
about the “frankenstein” products from tech that lack innovation and chase Wall St blessing over customer value.
Much is being said about ChatGPT, which is surely an innovation. But the hype around generative AI misses a key point—if everyone can generate the same stuff, then the need for innovation has never been greater.
Creativity, of the original—thought variety versus the prompt-driven kind, will become a premium.
Those of us obsessed with innovation and meaningful products should rejoice. That said, if this article is right, then it means capital will continue to flow into meaningless products. Eventually, all that will be left is one giant meme consuming itself.
https://lnkd.in/gKNYHGsP

# Feed post number 695
(Actually) Open AI.

# Feed post number 696
I ran into "Process Mining" in the context of one of ServiceNow's latest offerings that can be applied across their giant product set -
https://lnkd.in/g434kDdp
Their head of analytics positioned it as a "game changer". I believe it could be, especially if combined with AI. Let's explore...
Put simply, the idea is that by mining the audit logs of SN products, it's possible to find process (as in workflow) threads and then analyze them ––e.g. to find bottlenecks in, say, a customer support process.
It seems strange to me that process orchestration/observability isn't a first-class feature (perhaps it is), but one can only imagine, given the complexity of their product range, probably built in product silos, and with some technical-debt inconsistencies across their stack, that this log-analysis approach is the best way to find complex process interactions across various process flows.
Notably absent from their write-up is the use of any AI in the process, although perhaps it is buried away. Many of these process patterns are likely to be graphs and so the application of graph-based AI (like Graph Convolution) immediately seems possible.
For example, having identified process patterns of a certain type, such as "things that cause poor customer feedback", one could use graph classification to find other structures that might automatically reveal problematic processes that need exploring.
This is one of the ways that problematic processes could be identified more generally, say across disparate services (not just SN products) via appropriate data fabric/mesh architectures and graph processing, which doesn't necessarily require a graph DB (like Neo4j or Neptune) but such an implementation would likely be useful for more real-time analysis (e.g. to flag potential problems before they happen).
Process mining is just one use case for graph AI, but one that is likely to yield substantial ROI for enterprises, especially those obsessed with customer service.
hashtag
#
servicenow
hashtag
#
processmining
hashtag
#
graph
hashtag
#
neo4j
hashtag
#
ai
hashtag
#
digitalbusinesstransformation

# Feed post number 697
I reflected upon Apple's Pay Later.
Recently, I had a conversation with a senior leader in a large tech company in which we swapped observations about the downfall of titans, such as Motorola. He remarked upon the transition that can happen from tech-forward to marketing-forward, especially in contradiction to the organizational DNA, almost killing it like a virus.
I had the privilege of working for Motorola in my first career as a chip designer. They were a powerhouse who held nearly every significant patent in cellular worth holding, ditto DSP chips (my area). The buzz of the company was such that I would get to work at 7 and leave at 10/11PM for years on end.
The culture of the company was so tech-forward that it allowed me, in my early 20s, to rise quickly to lead a major chipset project (spanning 4 countries) even as a junior engineer because I was able to defend my proposals using technical arguments better than my seniors. Good ideas were able to rise to the top, bypassing authority. Things got built that way.
Many years later, I returned to Motorola as Chief Architect for their mobile applications practice––I had switched from chips to large scale software systems (aimed at telcos). In what was supposed to be a technical meeting to discuss why Motorola's solutions needed more innovation (IMO), a bunch of "suits" turned up to declare that the tech didn't really matter because the products would bear the Motorola logo. Needless to say, this was the beginning of the end for Motorola. They had switched from being a tech-driven company to a marketing-driven company with vacuous marketing slogans ("Seamless Mobility") given to them by consultants.
Similar observations have been made about other titans who switched from innovation to financialization, generating value from buybacks vs. ideas and bold innovation.
I don't know if that's where Apple is headed with loan products, but one also hears rumors that engineers working on the headset believe it to be sub-par, as in NWJWD = NOT What Jobs Would Do. Also, compare Siri to just about anything else in modern AI right now.
I hope this is not the portent of any demise. Apple is one of the Great American Companies that made me want to get into tech.

# Feed post number 698
Using ViperGPT to analyze images programmatically. The next frontier of image understanding with tons of use cases for enterprises, retail etc.

# Feed post number 699
Evaluation metrics for LLMs.

# Feed post number 700
Many Large Language Models (LLMs) contain a watermarking algorithm so that the generated text can be recognized as having originated from the LLM.
This process was included in the recent Alpaca model and they claimed to have used the method mentioned in this paper -
https://lnkd.in/gesHZmWN
In a recent exchange, an associate of mine proposed a ChatGPT re-written version of a LinkedIn bio. I advised that such text could be detected, although he didn't believe me at first–at least until I showed a tool to confirm it.
There are many such tools, such as
https://www.zerogpt.com/
The efficacy of such tools is often unknown, although many are built using well-researched techniques to detect LLM-produced text.
It isn't clear who or what is attempting to detect LLM-origination and, perhaps more importantly, what is being done with that information. For example, will some materials be flagged by Google and de-ranked?
Their official policy has always been to de-rank spammy content whose purpose is presumed to be getting noticed (by Google).
Does LinkedIn detect spam bios and de-rank those from search results–i.e. for recruiters?
If you intend to use ChatGPT outputs as-is, then you might want to consider re-editing, if you don't already, to lower the chances of detection.

# Feed post number 701
LLMs in production.

# Feed post number 702
A short article about how LLM-hacking will win sales. Once more, this is just the tip of the iceberg for enterprise use cases, such is the creative potential of LLMs and the power of LLM-hacking, including combining with other models.
hashtag
#
sales
hashtag
#
competitiveanalysis
hashtag
#
llms
hashtag
#
chatgpt
hashtag
#
gpt4
hashtag
#
databricks

# Feed post number 703
We have known for a while that it ought to be possible to achieve beyond-human performance for LLMs with much lower complexity than GPT-3 in the sense that whilst language is complex, much of it is redundant -- the by-product of creative use of language.
In other words, there ought to be a threshold at which adequate performance is possible without continually learning new edge cases (and adding them to memory). This should be especially so when building a model confined to a narrower domain than general knowledge.
There are important lessons from Databricks and their training of Dolly where better refinement of the training data helps achieve satisfactory performance with much lower complexity -- and, importantly, cost!
"We believe models like Dolly will help democratize LLMs, transforming them from something very few companies can afford into a commodity every company can own and customize to improve their products."

# Feed post number 704
This is a fascinating model and it is not surprising to see that it originates in China where their impressive ability to implement so many large-scale projects so quickly must be backed by scalable methodologies.
It is interesting to note that the principles of the model are expressed in this organizational framework -
https://lnkd.in/gn79YTzp
from
Simone Cicero
's venture.
Relatedly, as I recently pointed out, the potential for LLMs to become LEMs (Large Enterprise Models) is still largely untapped and comes with a whole set of unanswered questions around how to run an enterprise with autonomous (perhaps opaque) AI decision systems.
The integration of AI-generated decisions seems a lot more tenable in a decentralized organization model than a top-down one -
https://lnkd.in/gSYxG33t
cc
Geoff McGrath

# Feed post number 705
Entire AI companies have possibly seen their tech sauce wiped out by GPT-4.
Many of the use cases that I explored for clients these past five years can now be solved more easily, potentially with a few lines of code.
That said, there is a gap between getting quick results vs. ready-for-production results. Not an offline-online gap as such, but more of an easy-hard gap. The nature of this gap has more to do with the statistical-semantic gap -- LLMs can produce grammatically correct outputs with semantically or factually incorrect content that can be hard to detect without humans.
The problem is more related to language itself, not the models. If, as I recently posted, the reason for the success of LLMs is that their complexity can match the complexity of language, then this clearly presents a paradox. A complex system is, by definition, unpredictable under unpredictable conditions.
However, for many use cases, a well designed system can still benefit from the power of these models in conjunction with human feedback, which seems likely for some time to come. Many interesting UX patterns will surely emerge in this space.
But the power of the models are far more impactful than replacing various AI businesses. Many other businesses will surely be threatened before long.
There are many SaaS tools whose whole biz model is offering a marginal productivity gain priced at the value of not having to encumber one's self with certain know-how, like how to submit a payroll tax form in order to run payroll.
But does this hold true in the age of AI interventions?
I bet not.
hashtag
#
ai
hashtag
#
llms
hashtag
#
saas
hashtag
#
productivity
hashtag
#
complexity

# Feed post number 706
Of course, his commentary is too bland of a generalization to be useful: "Get sh*t done" 😀
However... to pick up on one aspect...
Focussing on the "craft" of things is a very meta-approach that is more evident in tech-circle bubbles and seems adopted from elitist cultural practices.
When I moved to the Bay Area from "regular tech", I sat in on a design review, as I had done many times prior, and thought I was in the wrong room, hearing a kind of post-modern exchange between cafe intellectuals. It was the opposite of Feynman's advice to know the meaning of things, not their names (jargon). (The log-in form they were designing was just like every other.)
But this applies to many disciplines exaggerated via the tech-bubble habits of "craft peacocking".

# Feed post number 707
This (technical) paper (by Pablo Contreras Kallens, Ross Deans Kristensen-McLachlan, Morten H. Christiansen) is a useful analysis of what evidence LLMs lend to the argument that language acquisition in humans is a largely statistical process (similar to LLM training).
https://lnkd.in/gksijYXP
hashtag
#
language
hashtag
#
llms
hashtag
#
ai
hashtag
#
statisticalmodeling
Note that this slant is antithetical to the Chomskian one.
Per the summary:
"We suggest that the most recent generation of Large Language Models (LLMs) might finally provide the computational tools to determine empirically how much of the human language ability can be acquired from linguistic experience."
If you want a more accessible explanation, see one of the author's blog post -
https://lnkd.in/gXj5izHf

# Feed post number 708
I have many times run internal innovation teams inside of an enterprise and use a "colored hats" approach. One of those hats, or roles, is unofficially called the "Sh*t Umbrella" 💩 -- the person wearing it has to keep the sh*t off the team, also known as The Hurdler (removes obstacles from the path by anticipating them ahead) 😀

# Feed post number 709
Important open source contribution to the onward march of LLMs for custom chatbots etc. Please check it out.
hashtag
#
opensource
hashtag
#
llms
hashtag
#
chatbots

# Feed post number 710
A few thoughts on why Large AI (or Scaling) presents a unique paradigm for enterprise management by "solving" complexity.
hashtag
#
enterprisearchitecture
hashtag
#
llms
hashtag
#
chatgpt
hashtag
#
gpt4
hashtag
#
innovation
hashtag
#
ai
hashtag
#
management

# Feed post number 712
Snapshot of key ML tools trends via competitions.

# Feed post number 713
One of the great use cases of LLMs: data augmentation.

# Feed post number 717
Turing’s grand unification of computation theory. The same genius who noted that machines that think is an absurdity.
For those interested, the Sante Fe Institute is soon again running their course on computational complexity by the authors of the linked post and of the book The Nature of Computation.
hashtag
#
complexity
https://lnkd.in/gN7jkGWB

# Feed post number 718
Celebrate a woman who’s influenced your career and share how she’s helped you.
hashtag
#
IWD2023
hashtag
#
EmbraceEquity
✏️ There are many women who have influenced my career. I will name only a few:
Shomila Malik
who I worked with at O2 UK has one of the most open-minded, creative and positive outlooks imaginable. Her keen product sense and solid grasp of technology are integrated into an attitude of positivity and human-centric philosophy that makes her a powerful ally in technical product/biz strategy and life. Her attitude towards continual learning and creativity is inspirational, across a wide range of subjects.
Ivy Ross
was a huge influence during my brief time with her in the world of art meets technology. Her respect for craft,  innovation and design was highly infectious. I was lucky that she was generous enough to share so much of her experience and knowledge, always eager to answer questions and pass on know-how. She helped me to elevate my work to new levels.
Tracy Isacke
is one of the most experienced business minds I know and I learned a lot from her about navigating the fast-moving world of venture-backed companies and the energy needed to close deals. Despite her heavy schedule, she is always generous with sharing knowledge, giving her time and making connections. Her attitude and outlook is highly inspirational.
Of course, I have to mention my mum, who passed from cancer. She had not much schooling to speak of and didn't understand much of my world, yet her complete unwavering support for my curious outlook and many crazy ideas is what made me who I am today. If I am anyone at all, it is thanks to her.

# Feed post number 719
Riffing off Gigerenzer's classic paper "Mindless Statistics", I offer a few thoughts about "Mindless Data", or the absence of data-driven processes as a cultural problem in which data science is actually a kind of social science and hence vulnerable to the same flaws.
hashtag
#
datascience
hashtag
#
statistics
hashtag
#
analytics
hashtag
#
bestpractices
hashtag
#
sixsigma
hashtag
#
behavioralscience

# Feed post number 722
Once again, the death knell has been rung for technical expertise.
There's an opinion that because of LLMs, the AI game is over–we can now build systems that previously took months in just a few hours and with a few lines of code. It's over.
Combine this with no-code low-code and technical folks had better find a backup career in plumbing or painting fences. It's really over.
Only those unfamiliar with engineering and the scale of information challenges in increasingly complex markets would make such a crude assessment.
The entire history of science and engineering is one of increased abstraction and modularization.
It means that we build increasingly complex systems.
The bar for creativity and systems thinking and complex design has been raised. The product and productivity canvas has been broadened. Technical folks should rejoice!

# Feed post number 723
I was reading a supposedly highly-praised business book about AI and it included a table about the AI technologies an AI-leader would include in their digital transformation or "AI-First" strategy.
It was a list like:
1. Deep Learning
2. Reinforcement Learning
3. Supervised
4. Unsupervised
5. etc
What we know from many analyses of failures of digital transformation is that focus on technology over business value is problematic. For example, read "Why Digital Transformations Fail" by
Tony Saldanha
.
A shopping list of AI technologies is not going to get us very far. It would be like saying we can transform the enterprise via databases. We just have to choose:
1. SQL
2. NoSQL
3. Graph
A critical examination of AI as a transformative toolkit would have to explore what kind of things AI can uniquely do within the context of enterprise challenges.
For example, AI can potentially handle complex decision-making far better than other technologies. However, this is only partially true because decision-tree models are often far better. For example, most (complex) credit-risk models are typically solved without AI, especially where interpretability is required in order to explain credit decisions.
However, for dynamic demand-driven credit-pricing (very hard to solve), AI can predict the efficient frontier of the entire credit-product portfolio, maximizing for profit under certain constraints (e.g. minimum volume of premium loans). Going this extra mile is where the AI bounty lies -- more revenue or more profit, or a mixture of both.
A similar problem presents itself via FinOps -- optimizing SaaS margins. Here we have the added dimension of costs. There is a potentially highly complex interaction between pricing (esp. with various SKU configurations) and cloud costs. Continuous Optimization (CO) is essential and this can be tackled using AI to  improve margins at the feature, product and portfolio level.
It becomes even more powerful when combined with contract negotiation, especially with discretionary discounting.
These activities are all connected: contracts affects pricing affect sales affects discounts affects configuration affects cloud costs etc. There is also a relationship to feature release and CI/CD dynamics.
It should be clear that the real AI bounty is more likely to come from systems thinking vs. selecting technology flavors and finding point-solution use cases.
These highly complex interactions that seem intractable are often amenable to AI, including the new breed of Transformers used to build tools like ChatGPT.
One thing we know from tools like ChatGPT is that highly complex spaces that humans find hard to extract rules from are amenable to AI in various flavors.
Of course, the flavor isn't so relevant. What matters is having a deep understanding of AI's unique capabilities as mapped to enterprise dynamics. A list of AI training algorithms isn't going to cut it.

# Feed post number 724
Model accuracy is not the totality of performance.

# Feed post number 725
This is what Chomsky told us about statistical models a while back. Even if the outputs coincide, the generative process isn’t like I-language because LLMs can generate non-human grammars like Python code.

# Feed post number 726
Mindset is everything.
I have seen the phrase "Agile Mindset" being mocked by those who don't seem to understand that all processes are socio-technical and subject to cognitive assessment with all its baggage.
The inescapable inevitability of life, including work, is that we cannot see the future and that our knowledge of the present is incomplete and highly limited to experiences. Therefore, we hold beliefs, as expressed via heuristics, adoption of processes, etc.
Hence it is perfectly logical to talk in terms of belief in a process.
The way in which we believe is deeply informed by mental frames. George Lakoff claims that those frames are dominated by metaphors.
But we should not be fooled into thinking that framing is only about the metaphors we use for soft things like "Mission Statements" and "Strategy" and "Culture".
It applies to very technical and highly localized work where one might think that framing is unambiguous, like data science. Indeed, anyone paying mindful attention to their own work will notice how most of it seems to be anything but data-driven, whatever that really means.
This is why I was very satisfied to find a book called Modeling Mindsets (
Christoph Molnar
). It's not about the process of modeling a mindset – it's about the mindsets that accompany the use of machine learning models.
IMO, the author didn't take the mindset perspective far enough in terms of extending it into the wider gamut of business activities surrounding the use of models.
As
Phil Jordan
recently pointed out in a series of posts about lessons learned as a CIO (of many a huge brand), the use of "Shadow IT" extends to data where localized interpretations are contorted to fit the desired narrative. I have seen this over and over, even in the face of incontrovertible data-driven analysis.
It's especially rife amongst middle-management when seeking to control the narrative. It works on (some) leaders because the default mindset about numbers and graphs presented in slides is to assume they are correct merely because data is some neutral measurement, not an interpretation.
The very concept of errors and uncertainty, even if the numbers are "accurate" is anathema to the mindset that numbers are about precision. Statistical variation is confused with veridical trend, and so on.
Anyway, for those in data science, I highly recommend Christoph's book.
hashtag
#
mindset
hashtag
#
machinelearning
hashtag
#
models
hashtag
#
businessanalytics
hashtag
#
metaphor
hashtag
#
framing
https://lnkd.in/ggACSp56

# Feed post number 727
Pushing complementary AI/ML compute to the client device is the future of so many services in order to get better real-time responsiveness for users:
"by feeding those real-time and complementary signals only along with server-side predictions (such as predicted rates of effective views, likes, follows etc.) into a very lightweight edge-side model, user engagement metrics get substantially improved."
hashtag
#
ai
hashtag
#
edgecomputing
hashtag
#
ranking

# Feed post number 730
I just saw that a prominent Conversational AI (CAI) vendor has laid off lots of workers and retrenched on their aggressive headcount goals. It is interesting to note that it is a "Conversational AI" solution, which is considered by many to be the archetypal use case for AI, especially in the current moment.
Interestingly, the CEO cited "macroeconomic conditions" or some such. One would have to include in those conditions numerous observations. Firstly, some positives:
1. Perhaps ironically, given what the CEO says, these same conditions are pressuring many orgs to improve unit-economics. CAI is often positioned as impactful on UE (for various reasons) -- i.e. generate more leads for less dollars, or similar KPI claims.
2. Per the 2022 LinkedIn "State of Sales" report, sales tooling still falls woefully short of expectations, with 50% of Sales Ops claiming they are not data-driven. CAI has a role to play here, especially in capturing qualified leads. Of course, qualifying is tricky and lots of AI companies wave their hands about it, but don't really have a solution.
3. Given the current ChatGPT fervor, one would have to imagine that CAI solution providers are in a good position to tout their wares. Some sectors, like hospitality, are reportedly being more aggressive with digital transformation programs where CAI could presumably play a role (indeed, there are vertical CAI solutions aimed at, say, hotels)
But on the negative side:
1. The widespread availability of Large Language Models (LLMs) has meant that solutions are now way more accessible than when many of these CAI platforms first came into being using specialist know-how.
2. Consumer sentiment towards CAI is low. There is a quandary here between high performing NLP models (via benchmarks) and real-world user expectations where false-negative tolerance can be extremely low.
Indeed, this latter point is a real challenge. I have met with many AI  folks who tell a good AI story but don't tell a convincing product story. Until you've sat through sessions of user testing and watched real users fail and even suffer, you'll never know how big the so-called "offline-online" gap really is for many of these AI-powered solutions.
hashtag
#
ai
hashtag
#
conversationalai
hashtag
#
layoffs2023
hashtag
#
productdesign

# Feed post number 731
In each and every single role, I try to insist upon several principles of working for the team -- a mindset, if you will. I mention only 2:
1. There are no dumb questions
2. We must allows ourselves to be wrong
Whole books could be written about these two principles alone. Indeed, I have been writing a "Field Guide to Innovation" for years, but never get around to releasing it -- I think the process is more important than the deliverable.
To justify these attitudes, I have often cited the example of NASA wasting a billion dollars on a project because the two teams were using different measures: metric vs. imperial.
Well, as a train enthusiast, I now have a new example to cite: the Spanish trains too big for the tunnels 😂
Just to clarify, I have worked with Spanish engineers and found them to be among the best in the world. And that's the point -- if smart people can get it wrong, what about the rest of us?
hashtag
#
innovation
hashtag
#
team
hashtag
#
people
hashtag
#
mindset
hashtag
#
trains
hashtag
#
measurement
https://lnkd.in/gh88suvp

# Feed post number 734
A key use case of AI is going to be visualization.
It will soon become the bottleneck of insights operationalization.
With scalable compute via virtual warehouses (e.g. Snowflake) and "speed of thought" data exploration via tools like Sigma Computing, the cognitive interface will become the bottleneck.
How many of us have struggled to visualize complex data in meaningful ways?
How can AI solve this?
I posit three ways.
First, it can help in general with finding patterns. Of course, there are lots of ways, as in models, to find patterns--but most data science workflows are still tied to getting results to particular point-problems, like sales propensity.
Model-agnostic meta-modeling via various search paradigms is still a relative rarity -- i.e. using any models over any combinations over a search grid across potentially unbounded data. There is already encouraging research to show how AI can assist with meta-learning, but this will only improve.
But most data science teams lack the "Deep Sea Divers" who can pull together these kinds of approaches. Indeed, they are rare because they are undervalued and do not fall into the prevalent modeling mindsets so well documented by Chris Molnar in his excellent book "Modeling Mindsets"
https://lnkd.in/ggACSp56
Second,  AI can help with intelligent dimensionality reduction, or compression, helping us to find patterns quicker. There are many techniques here, although I predict some of them will soon be merged with 3D visualization tools, including AR/VR.
The techniques discussed thus far are fairly well understood, at least in theory, and we expect good progress to be made.
The third area is perhaps more interesting, which is the use of techniques like Transformers to translate data into meaningful visualizations. After all, visualizations have structure and, as visualization folks like to tell us, they tell a story.
If we consider an excellent resource like the book Visualizing Complexity, then we can immediately appreciate that many of the motifs form a visual language: there is syntax, structure and semantics.
And, wherever there is this kind of structure, then models like Transformers promise to assist with translation into that language.
It is just a matter of time before "visual translators" make it into our data workflows.
https://lnkd.in/gG9MC37a

# Feed post number 735
"ChatGPT is the Tip of the Iceberg"– an exploration of how the underlying Large Language Models (LLMs) should already be a part of any digital transformation efforts, such as the delivery of deeply personalized user journeys (end to end).
hashtag
#
chatgpt
hashtag
#
llms
hashtag
#
transformers
hashtag
#
digitalbusinesstransformation
hashtag
#
customerjourney
hashtag
#
datamesh
hashtag
#
datafabric
hashtag
#
ai
hashtag
#
deeplearning
hashtag
#
attention

# Feed post number 736
ChatLLaMA - an open-source implementation of LLaMA based on RLHF.
Claims a 15x faster training process than ChatGPT. It allows users to fine-tune personalized ChatLLaMA assistants.
GitHub:
https://lnkd.in/eHdCQTAa
hashtag
#
machinelearning
hashtag
#
deeplearning
hashtag
#
ai

# Feed post number 737
Insights into LLaMa performance.

# Feed post number 738
Great demo of Runway from
Paul Mallaghan
, a friend in the creative agency universe of Brighton, UK.
hashtag
#
generativeai
hashtag
#
runway
hashtag
#
creativeagency

# Feed post number 740
An introduction to our work in using AI to help diagnose cancer in resource-starved regions of the world.
hashtag
#
deeplearning
hashtag
#
ai
hashtag
#
cancerresearch
hashtag
#
missiondriven

# Feed post number 742
We probably need to revisit the claim of "better than human" performance for AI. At the benchmark level, it is a useful way to compare models and measure progress in some direction that is likely to be a useful proxy for embedded performance.
However, even as a benchmark, such claims can still be problematic in the sense of driving AI development towards a kind of "over-fitting" to certain use cases that are somewhat misleading in the context of wider system.
Better-than-human is misleading if the final embedded implementation within a system is only sometimes better than human. This is particularly so if the times that it is not better dominate the overall performance of the system. We already saw how the not-better demonstration of Bard  harmed Google's reputation, keeping in mind that they are probably the most technically sophisticated user of the technology that will ever exist.
It gives new meaning to the online-offline gap that occurs when a model performs well with offline data, but fails to deliver when taken online -- when the rubber hits the road. This can be for many reasons, but essentially they are all related to vast differences in complexity between an experiment (or demo) and a real system.
Perhaps this is why there are so many reports of enterprise AI projects not providing an ROI -- a fixation on benchmarks over systems performance and systems design.
In my experience, systems thinkers are hard to come by and I believe lessening in supply due to side-effects of inappropriate educational practices and digital-native habits. But we will surely need more systems thinkers and designers on the road to AI-powered systems.

# Feed post number 743
This is an excellent post by
Abdul Jalil Shreim     MBA, PMP
who is an experienced and insightful operator with a keen sense for technological possibilities.
He highlights a critical use case for AI, namely supervisory and optimization roles in complex infrastructure projects of the kind that characterize the Industry 4.0 landscape.
There is a maxim in complexity theory that complexity can only be met with complexity. This runs contrary to human management instincts whereby we typically attempt to solve complexity via simplification. However, as many complex projects have shown, this does not work: catastrophic overruns and poor forecasts are commonplace.
There are reasons to believe that AI is uniquely positioned to provide the "interface" between simplified human interpretation/management and the complex state-space of a project.
I was privileged to participate in related technology developments out of a UC Berkeley incubated company. We see similar approaches emerging with tools like Palantir's Foundry.
No doubt, Generative AI will play a role in helping to provide "sense making" interfaces that can present appropriate context-adjusted simplifications, summaries and forecasts of dense project data.
Abdul-Jalil does a good job here of breaking down some practical use cases, applications and advantages of AI interventions.
hashtag
#
generativeai
hashtag
#
aistrategy
hashtag
#
industry40

# Feed post number 744
As an architect of a recent semantic search solution, I concur that marrying LLMs with search is completely non-trivial.
My note: beware of simplistic demos showing the use of Sentence Transformers with lexical search to create “Semantic Search”.
The reality is that Semantic Search is a complex ensemble of techniques each of which is hard to optimize, never mind all of them in concert.

# Feed post number 745
The killer use case for generative AI is empowering enterprise citizens.
hashtag
#
ai
hashtag
#
generativeai
hashtag
#
citizendeveloper
hashtag
#
cio
hashtag
#
datainsights
hashtag
#
llms
hashtag
#
chatgpt
hashtag
#
gigeconomy

# Feed post number 746
To accelerate dividends from enterprise digital transformation, the only way is to orchestrate, not operate. And the basis for this is digital democratization = putting more digital power into the hands of those closer to the business problems, closer to the customer.
Too many operators do not grasp this reality.
The two key players in digital democratization are:
1. Citizen Coders
2. Citizen Technologists (sometimes called Business Technologists)
NEITHER of them have formal IT backgrounds. They are tech-savvy continual-learners who know how to harness the latest tools that come with greater automation capabilities. Some will be young, some will be older, pivoting into tech from fantastically rich biz backgrounds.
Consider how easy it is for a citizen to utilize data science baked into the latest version of Tableau, or even Excel. Consider how easy it is to use Github Co-pilot to hack a predictive algorithm and find patterns in data. Consider how easy it is to push that data back into Salesforce using no-code tools like Zapier.
Why hire an expensive data scientist when you could hire 2 Business Technologists who might produce greater returns.
This is only going to accelerate as generative AI tooling matures. We haven't seen anything yet.
Of course, we will still need data scientists. That is not the point. But $-for-$, many orgs will likely get more digital returns from hiring and upskilling Citizen Technologists and Citizen Coders.
hashtag
#
datascience
hashtag
#
citizendeveloper
hashtag
#
businesstransformation
hashtag
#
generativeai

# Feed post number 747
I recently completed an assignment to design a semantic search architecture for a UK start-up intending to re-invent the "Trusted Recommendations" space via a novel product and marketing approach.
Semantic search is mostly the combination of Large Language Models (LLMs) with a search engine.
Most search engines, like Elasticsearch and Solr (the two top ones) were designed for lexical search using relevancy approaches like BM25 (a "counting of words" method).
Lexical search means that typing the word "kebab" requires that this string exist in the index. Semantic search might return semantically-similar results, such as "Greek-, Lebanese-, Mediterranean-food" etc.
Although ES and Solr have incorporated dense-vector fields to perform vector distance calculations within an LLMs encoding space, this turns out to be minor part of the whole semantic-search puzzle.
Turning a lexical search solution into a conversational UX, like ChatGPT, is hard. My experiments with a range of LLMs (inc. OpenAI APIs) demonstrated a massive gap that seemed to indicate that some form of structured knowledge-base is still helpful, like a knowledge graph, especially to manage domains with a specialized ontology.
It would be useful to hear from others who have made the transition from lexical to semantic search using ES/Solr and LLMs -- and possibly dedicated vector search solutions.
hashtag
#
architecture
hashtag
#
searchengines
hashtag
#
ai
hashtag
#
llms
hashtag
#
semanticweb
hashtag
#
elasticsearch
hashtag
#
solr

# Feed post number 748
Timely advice for how to operationalize the generation of insights, plus a reminder of what they actually are.

# Feed post number 749
What is an AI Strategy? A practitioner's perspective.

# Feed post number 750
For those devs interested in the new(ish) breed of AI called Transformers, as used in ChatGPT, I wrote an annotation of the encoder. As a reference, it is based upon the excellent open source book Dive Into Deep Learning so that you can run a fully-functional example (if you use their libs/data).
It is one of many annotations out there, but this one specifically elaborates upon the DIDL example whilst weaving in a number of high-level linguistics and language-level intuitions.
My goal was that a student could implement the coder from DIDL and know (roughly) why it's coded that way and why it works.
It also highlights some of the reasons for the power of transformer models.
hashtag
#
transformers
hashtag
#
ai
hashtag
#
deeplearning
hashtag
#
python
hashtag
#
pytorch
https://lnkd.in/gxFSV5WS

# Feed post number 752
More progress with AI in cancer immunotherapy. Excellent work by
Mohsin Bilal
and team.

# Feed post number 753
See how this LinkedIn editor uses the word "allege" which is a term often used pejoratively when women make claims. To allege means to assert without proof. These women have brought proof in a lawsuit. We all know the legal basis for their claim will face a barrage of fancy legal shenanigans by expense AMZ lawyers.
Also, the phrasing here makes women the subject -- it is the women who have done something, not AMZ. The women have alleged.
One could have said: "Amazon discriminates against female and minority employees, so claim employees in lawsuit" -- but it probably didn't cross this editors mind.

# Feed post number 754
Hey
Geoff McGrath
- I'm sure this article resonates with your experiences in the world of data insights -- i.e. the power of putting data in the hands of users vs. IT "walled gardens."

# Feed post number 755
A fellow traveller calling out the "tick-box" mentality that pervades corporate life.

# Feed post number 756
/*New Post*/  Humans tend to naturally adjust communication to different personality types. So could we apply AI to this? Check out this brief but insightful piece on the subject written by my long time collaborator
Paul Golding
hashtag
#
ai
hashtag
#
marketing
hashtag
#
personality
https://lnkd.in/gqKYjwe

# Feed post number 757
“I’m a machine and I cannot understand humans. Some mysterious element drives them to do things that have no reasonable explanation. This element, they call it the human spirit, it drives them to attempt the impossible"
...For a while now I’ve been considering the impact of technology on humans. I’ve worked in Technology Product development for a long time now, in different locations and in many industries. One thing I know we can never have enough of, is more thoughtfulness of the effects that our technology design has on every one of us. Over the last year I’ve personally started to expand my study into the humanities and other ‘human’ fields like philosophy, psychology, and neuroscience. Bertrand Russell once said “In all affairs it's a healthy thing now and then to hang a question mark on the things you have long taken for granted.” So in the pursuit of good health, it might be wise to take a pause and evaluate the things we are building today.
https://recknsense.com
was built as a place to embrace the ‘question mark’. I invite you to visit and read some thoughts on the human side of technology. I hope it could help you discover new connections in your knowledge. Please check it out and watch out for some guest posts in the future. Thank you fellow collaborators.
hashtag
#
Tech
hashtag
#
AI

# Feed post number 758
#NetNeutrality: Absolutely everyone, on both sides of the debate, is wrong
https://lnkd.in/djJKfxr

# Feed post number 761
Check out this article about
Geoff McGrath
!

