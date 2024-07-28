---
title: The Master Algorithm | How The Quest For The Ultimate Learning Machine Will Remake Our World by Pedro Domingos
date: "2024-07-24"
path: "/bookshelf/the-master-algorithm.md"
---
## I. Brief Summary
The book was recommended by Mark Cuban when I had emailed him out of the blue on his book recommendation on the topic of Artificial Intelligence. It took me several years before I picked it up. Domingos argues that the master algorithm is probably going to be a combination of the five schools of thought in the world of machine learning. I found this book really insightful.

## II. Big Ideas
- The concept of a master algorithm is the unity of all knowledge.
- Machine learning is sometimes confused with artificial intelligence (or AI for short). Technically, machine learning is a subfield of AI, but it’s grown so large and successful that it now eclipses its proud parent.
- Every algorithm has an input and an output: the data goes into the computer, the algorithm does what it will with it, and out comes the result. Machine learning turns this around: in goes the data and the desired result and out comes the algorithm that turns one into the other. Learning algorithms—also known as learners—are algorithms that make other algorithms. With machine learning, computers write their own programs, so we don’t have to.
- How do we learn? Is there a better way? What can we predict? Can we trust what we’ve learned? Rival schools of thought within machine learning have very different answers to these questions. The main ones are five in number. Each tribe has a set of core beliefs, and a particular problem that it cares most about. It has found a solution to that problem, based on ideas from its allied fields of science, and it has a master algorithm that embodies it.
    - The symbolists’ master algorithm is inverse deduction: Symbolists view learning as the inverse of deduction and take ideas from philosophy, psychology, and logic. For symbolists, all intelligence can be reduced to manipulating symbols, in the same way that a mathematician solves equations by replacing expressions by other expressions. Symbolists understand that you can’t learn from scratch: you need some initial knowledge to go with the data. 
    - The connectionists’ is backpropagation: Connectionists reverse engineer the brain and are inspired by neuroscience and physics. For connectionists, learning is what the brain does, and so what we need to do is reverse engineer it. The brain learns by adjusting the strengths of connections between neurons, and the crucial problem is figuring out which connections are to blame for which errors and changing them accordingly. 
    - The evolutionaries’ is genetic programming: Evolutionaries simulate evolution on the computer and draw on genetics and evolutionary biology. Evolutionaries believe that the mother of all learning is natural selection. If it made us, it can make anything, and all we need to do is simulate it on the computer. The key problem that evolutionaries solve is learning structure: not just adjusting parameters, like backpropagation does, but creating the brain that those adjustments can then fine-tune. 
    - The Bayesians’ is Bayesian inference: Bayesians believe learning is a form of probabilistic inference and have their roots in statistics. Bayesians are concerned above all with uncertainty. All learned knowledge is uncertain, and learning itself is a form of uncertain inference. The problem then becomes how to deal with noisy, incomplete, and even contradictory information without falling apart. The solution is probabilistic inference. Bayes’ theorem tells us how to incorporate new evidence into our beliefs, and probabilistic inference algorithms do that as efficiently as possible. 
    - The analogizers’ is the support vector machine: Analogizers learn by extrapolating from similarity judgments and are influenced by psychology and mathematical optimization. For analogizers, the key to learning is recognizing similarities between situations and thereby inferring other similarities. If two patients have similar symptoms, perhaps they have the same disease. The key problem is judging how similar two things are.
- Evolutionaries and connectionists have something important in common: they both design learning algorithms inspired by nature. But then they part ways. Evolutionaries focus on learning structure; to them, fine-tuning an evolved structure by optimizing parameters is of secondary importance. In contrast, connectionists prefer to take a simple, hand-coded structure with lots of connections and let weight learning do all the work. This is machine learning’s version of the nature versus nurture controversy, and there are good arguments on both sides.
- Machine learning takes many different forms and goes by many different names: pattern recognition, statistical modeling, data mining, knowledge discovery, predictive analytics, data science, adaptive systems, self-organizing systems, and more.

## III. Quotes
- It’s not man versus machine; it’s man versus man with machine.
- Just because computers can learn doesn’t mean they magically acquire a will of their own. Learners learn to achieve the goals we set them; they don’t get to change the goals.
- Society is changing, one learning algorithm at a time.
- Learning algorithms are artifacts that design other artifacts.
- People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.
- Our beliefs are based on our experience, which gives us a very incomplete picture of the world, and it’s easy to jump to false conclusions.
- Learning algorithms are the seeds, data is the soil, and the learned programs are the grown plants. The machine-learning expert is like a farmer, sowing the seeds, irrigating and fertilizing the soil, and keeping an eye on the health of the crop but otherwise staying out of the way.
- Words become worlds.
- Your job in a world of intelligent machines is to keep making sure they do what you want, both at the input (setting the goals) and at the output (checking that you got what you asked for).
- Believe it or not, every algorithm, no matter how complex, can be reduced to just these three operations: AND, OR, and NOT.
- A good learner is forever walking the narrow path between blindness and hallucination.
- Learning is forgetting the details as much as it is remembering the important parts.
- A learner that uses Bayes’ theorem and assumes the effects are independent given the cause is called a Naïve Bayes classifier. That’s because, well, that’s such a naïve assumption.
- For a Bayesian, in fact, there is no such thing as the truth; you have a prior distribution over hypotheses, after seeing the data it becomes the posterior distribution, as given by Bayes’ theorem, and that’s all.
- Our beliefs are based on our experience, which gives us a very incomplete picture of the world, and it's easy to jump to false conclusions.
- People often think computers are all about numbers, but they’re not. Computers are all about logic.
- The second simplest algorithm is: combine two bits. Claude Shannon, better known as the father of information theory, was the first to realize that what transistors are doing, as they switch on and off in response to other transistors, is reasoning. (That was his master’s thesis at MIT—the most important master’s thesis of all time.)
- Homo sapiens is the species that adapts the world to itself instead of adapting itself to the world.
- “Listen to your customers, not to the HiPPO,” HiPPO being short for “highest paid person’s opinion.” 
- As so often happens in computer science, we’re willing to sacrifice efficiency for generality.
- Whoever has the best algorithms and the most data wins. A new type of network effect takes hold: whoever has the most customers accumulates the most data, learns the best models, wins the most new customers, and so on in a virtuous circle (or a vicious one, if you’re the competition).
- Common sense is important not just because your mom taught you so, but because computers don’t have it.
- Every time I fire a linguist, the recognizer’s performance goes up.
- Machine learners, like all scientists, resemble the blind men and the elephant: one feels the trunk and thinks it’s a snake, another leans against the leg and thinks it’s a tree, yet another touches the tusk and thinks it’s a bull. Our aim is to touch each part without jumping to conclusions; and once we’ve touched all of them, we will try to picture the whole elephant.
- Our goal is to figure out the simplest program we can write such that it will continue to write itself by reading data, without limit, until it knows everything there is to know.
- Data alone is not enough. Starting from scratch will only get you to scratch.
- Knowledge is traded in both directions—manually entered knowledge for use in learners, induced knowledge for addition to knowledge bases—but at the end of the day the rationalist-empiricist fault line runs right down that border, and crossing it is not easy.
- Knowing how to do something isn’t much use if you can’t do it within the available time and memory.
- Richard Feynman said, “What I cannot create, I do not understand.”
- “Computers are useless,” said Picasso. “They can only give you answers.” 
- How many Bayesians does it take to change a lightbulb? They’re not sure.
- Skills are often in the form of procedures: if the road curves left, turn the wheel left; if a deer jumps in front of you, slam on the brakes. (Unfortunately, as of this writing Google’s self-driving cars still confuse windblown plastic bags with deer.)
- If it exists, the Master Algorithm can derive all knowledge in the world—past, present, and future—from data.
- Evolution is the ultimate example of how much a simple learning algorithm can achieve given enough data.
- One of the most important problems in machine learning—and life—is the exploration-exploitation dilemma. If you’ve found something that works, should you just keep doing it? Or is it better to try new things, knowing it could be a waste of time but also might lead to a better solution? Would you rather be a cowboy or a farmer? Start a company or run an existing one? Go steady or play the field? A midlife crisis is the yearning to explore after many years spent exploiting.
- Some thinkers are foxes—they know many small things—and some are hedgehogs—they know one big thing. — Isaiah Berlin
- Dimensionality reduction is necessary for the scaling down features for analysis.
- I’d like to give you a parting gift … the great undiscovered ocean stretches into the distance, the gift is a boat-Machine Learning- and it’s time to set sail.
- Before we can discover deep truths with machine learning, we have to discover deep truths about machine learning.
- A related, frequently heard objection is “Data can’t replace human intuition.” In fact, it’s the other way around: human intuition can’t replace data. Intuition is what you use when you don’t know the facts, and since you often don’t, intuition is precious. But when the evidence is before you, why would you deny it?
- If you want to be tomorrow’s authority, ride the data, don’t fight it.
- He who controls the data controls the learner.
- Most science consists of Brahe- and Kepler-like work; Newton moments are rare.
- The human hand is simple—four fingers, one opposable thumb—and yet it can make and use an infinite variety of tools. The Master Algorithm is to algorithms what the hand is to pens, swords, screwdrivers, and forks.
- The computer is your tool, not your adversary. Armed with machine learning, a manager becomes a supermanager, a scientist a superscientist, an engineer a superengineer.
- Are you a rationalist or an empiricist? Rationalists believe that the senses deceive and that logical reasoning is the only sure path to knowledge. Empiricists believe that all reasoning is fallible and that knowledge must come from observation and experimentation. The French are rationalists; the Anglo-Saxons (as the French call them) are empiricists. Pundits, lawyers, and mathematicians are rationalists; journalists, doctors, and scientists are empiricists. Murder, She Wrote is a rationalist TV crime show; CSI: Crime Scene Investigation is an empiricist one. In computer science, theorists and knowledge engineers are rationalists; hackers and machine learners are empiricists.
- Rationalism versus empiricism is a favorite question of philosophers. Plato was an early rationalist, and Aristotle an early empiricist.