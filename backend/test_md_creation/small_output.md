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
