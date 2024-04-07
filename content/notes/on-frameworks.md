---
title: "On Frameworks"
tags: ["general"]
date: "2024-04-04"
draft: false
path: "/notes/on-frameworks"
---

A structured thinking is required to solve problems and to conduct deep analysis. Without hard parameters, it is difficult to manage scope of the problem and create actionable steps. 

Frameworks are not immediately applicable to the real world because the real world doesn't share all the assumptions and parameters. 

All frameworks have complementary weaknesses. And vice versa. It is wise to use caution to stay adaptable while using frameworks. A few frameworks I often use in my day of managing products.

| Framework | Description |
| -------------|:-------------:|
| _S.P.A.D.E_ | A decision-making framework to help synchronize and speed up collaboration to make difficult choices. An acronym for Setting, People, Alternatives, Decide and Explain. |
| _Eisenhower Matrix_ | The Eisenhower box includes one axis that is important, the other axis is urgent. It is a two by two matrix to help with prioritization. |
| _Domain Model_| It is about the practice of software design which puts domain users, its behavior and problems first. There are no technical considerations as this is purely driven by business logic. The basic idea is that the Domain is the problem domain, and the Model is the model of the problem. |
| _OKR_ | OKR is a goal setting framework that was popularized in Silicon Valley. It stands for Objective and Key Results. Objective answers the WHAT is to be achieved. Key Results answers the HOW is it going to be achieved. |


<details>
    <summary><strong>S.P.A.D.E</strong></summary>
    <br>

Consensus doesn't work and when time comes to make hard decisions, there should be a person in-charge of it. So how do you do that? S.P.A.D.E—a technique for making difficult decisions—formed by Gokul Rajaram at Google and Facebook, and widely deployed at Square.

- S is for Setting: Precisely define the “what.” Show the why of the “when.” Clarify the “why.”
- P is for People: People come first. The first thing you do for every S.P.A.D.E. is identify the people who should consult (give input), approve, and most importantly, a single person who is responsible. Responsible means accountable. Consult maximally.
- A is for Alternatives: It’s the job of the responsible person—the decision maker—to come up with a set of alternatives that are feasible and realistic; diverse—they should not all be micro-variants of the same situation; and comprehensive—they should maximally cover the problem space. Brainstorm publicly.
- D is for Decide: Once you've laid out all the alternatives—complete with their respective pros and cons and quantitative modelーit is time to get your consultants to vote. Get feedback privately.
- E is for Explain: Once you've decided, now the real work begins. Go to the approver and lay out the alternatives and your argument.  If you created a high-quality decision framework, they're unlikely to veto it. Call a commitment meeting. Broadcast your decision. Add it to the S.P.A.D.E. log. Keep a log that links to your S.P.A.D.E. and marks the date of the decision. It will be much easier than relying on Gmail search or Slack when you want to reference or amend a past decision.

#### Further reading

- [Gokul's S.P.A.D.E. Toolkit: How to implement Square's famous decision-making framework](https://coda.io/@gokulrajaram/gokuls-spade-toolkit)

</details>
<br>

<details>
    <summary><strong>Eisenhower Matrix</strong></summary>
    <br>

A decision-making framework designed and named after the 34th President of the United States of America—Dwight Eisenhower. He launched one of the most successful programs that are critical to our society today—highways, space exploration, internet (DARPA) and energy alternatives. He accomplished a ton! How did he do it?

The Eisenhower box includes one axis that is important, the other axis is urgent. You put each task in one of the four quadrants:

- Urgent and important: tasks you will do immediately
- Important, but not urgent: tasks you will schedule to do later
- Urgent, but not important: tasks you will delegate to someone else
- Neither urgent nor important: tasks that you will delete

The most important quadrant is the last one because it challenges me to question whether an action is really necessary. Mindlessly doing something is lazy thinking and procrastinating.

It isn't perfect because urgent can mean different things to different people. But it is intuitive and adaptive framework to help with prioritization.

> What is important is seldom urgent and what is urgent is seldom important. — Dwight Eisenhower

#### Further reading

- [The Eisenhower Matrix | Avoid the "Urgency Trap" with Dwight D. Eisenhower's famous prioritization framework](https://todoist.com/productivity-methods/eisenhower-matrix)

</details>
<br>

<details>
    <summary><strong>Domain Model</strong></summary>
    <br>

Recent encounters on my current team has led to several discussions on whether a feature has a bug or whether it was poorly designed.

A **bug** is when a feature in not functioning the way it is expected to.

A **feature gap** is a gap in the system due to a miss during initial design.

Who is to be blamed for this—business, engineering or design? It depends!

Based on the two statements above, if it is a _bug_, engineering came short on executing requirements. If it is a feature gap, both engineering and design didn't get enough requirements from product. Product didn't think through the requirements. Lastly, neither product nor engineering control reality as business dynamics are always changing. This would require enhancing feature based on new rules.

In software development, incorrect relationships determines the amount of complexity. Features collapse under the weight of its own complexity. Context is everything. Domain driven design can avoid much of this trouble to ensure context is captured before any line of code is written.

However, there should be room for randomness and moving parts because reality is not static. Business requirements can change because there is a new CEO or due to new industry-wide regulations.

A solution model will always need to be adjusted over time and refined into a better representation of reality. Skilled engineers are always refactoring. And, skilled product managers are always communicating what is coming next.

Learning about your domain, writing it down and driving consistency on terminologies have clear communication benefits. If product managers are domain experts then they should work with engineering and design teams to formalize shared understanding on domain.

> One of the miseries of life is that everyone names everything a litle bit wrong, and so it makes everything a little harder to understand in the world than it would be if it were named differently. A computer does not primarily compute in the sense of doing arithmetic. Strange. Although they call them computers, that's not what they primarily do. They primarily are filing systems. People in the computer business say they're not really computers, they are "data handlers". All right. That's nice. Data handlers would have been a better name because it gives a better idea of the idea of a filing system. — Richard Feynman

## Domain model

The concept of Domain Models come from Domain Driven Design (DDD) which is a software design approach.

At its core, domain model is about the practice of software design which puts domain users, its behavior and problems first. There are no technical considerations as this is purely driven by business logic. The basic idea is that the **Domain** is the problem domain, and the **Model** is the model of the problem.

It is a system of abstraction. Product managers should be well-equipped to understand this business context and be able to communicate to the teams.

The domain model has the following elements:

1. **Domain Objects**: Entities with an ID which can be indexed
2. **Values**: A property value wrapped in a class 
3. **Aggregates**: A group of related Entities

These elements represent the domain (business logic) in which the problem is solved. In a domain model, you model objects and draw associations between them so that you have high level idea on how the system will work and how they will interact with each other.

Let's take a look at an example. Imagine you are building a research product and an analyst is searching for a company to invest in $10 million. This analyst is looking for insights on a research platform to conduct the due-diligence. As you build a research product for this analyst, you want to consider the following:

- Who is your target customer? And who are your customer types? It could be an investor. Investor can be broken down into a retail investor, institutional investor or a venture investor. There can of course be different type of customers—investor, analyst, media analyst, etc., but we'll focus on the analyst for this example.
- What is the job to be done and workflows? A venture investor wants to learn about new technologies. A retail investor wants to learn about the balance sheet health of a company. An institutional investor wants to find the best in class company within energy sector for its pension portfolio.
- What are the domains (entities) they interact with? There are several—companies, industries, sectors, topics, competitors, events, SEC filings and expert interviews.
- What is the relationship between these domains? How do they behave with each other? Is it a one-on-one or many relationships? Is there an overlap between multiple domains? Investor might want to learn about an industry landscape and how the players stack against each other to compete against one another.

Thinking through a customer's point-of-view to design a solution can be highly effective for the entire team. To summarize why domain models are critical for product managers:

- The domain model is a representation of real-world concepts including the data involved in the business and rules the business uses in relation to that data. The domain model is organized and structured knowledge of the problem. 
- Every system (or product) has people, things, and relationships between things and people along with workflows.
- Domain model is a conceptual schema or a map of concepts and their relationships.
- Domain models are richer than simple data models as they capture the behavior and domain logic. 
- It is a visual representation of situation objects in a domain. The term domain model does not mean a set of diagrams describing software classes. Domain model can be represented by a diagram, code example or written documentation of the problem.
- The important thing is that the domain model should be accessible and understandable by everyone who is involved with the project. One of the downfalls of software development projects is the misunderstanding of terms, objectives and proposed solutions that are scoped at the beginning of development.
- In software, a domain model is a conceptual model of the domain that incorporates both behavior and data. This is critical for PMs to pay attention to because they are responsible for driving requirements. And requirements cannot be defined without understanding the core behavior and data of a domain. There are plenty of what ifs and buts for PM to help answer.
- A domain model is implemented as an object model within a layer that uses a lower-level layer for persistence and publishes an API to a higher-level layer to gain access to the data and behavior of the model. An object model consists of the following important features—object reference, interface (API or UI), actions and exception handling to account for various errors and warnings.

#### Further reading

- [37 Signals Domain Driven](https://dev.37signals.com/domain-driven-boldness/)
- [Notion's Data Model](https://www.notion.so/blog/data-model-behind-notion)
- [Stack Overflow Thread](https://stackoverflow.com/questions/3507671/whats-the-difference-between-data-modelling-and-domain-modelling)

</details>
<br>

<details>
    <summary><strong>Objective Key Results (OKR)</strong></summary>
    <br>

Objective Key Results (OKR)—a goal setting framework that was popularized in Silicon Valley has been widely adopted beyond the West Coast. OKR has been a better part of my professional journey, but the implementation of the methodology has always been messy because they do not cascade through the entire organization as they are intended to.

This led me to study the topic from the father of OKR who came up with the methodology—John Doer.

> A lot of companies create organization-wide objectives, but they don’t translate them down into personal OKRs. That’s right — and creating that cascade is one of the powerful parts of the system. The book says that there are four superpowers. On reflection, I think there are really five benefits that you get out of this. Focus is the first, because these are limited in number. Alignment is the one you’re talking about — you get everybody aligned. Commitment is third. When you’ve transparently set these goals, and all your colleagues see them, commitment clears that up quickly. And then the fourth superpower is tracking the progress. This is why Bill Gates uses the system at the Gates Foundation. Then the fifth superpower is stretching. Larry Page of Google is the high priest of 10x-ing everything, stretching further. He’ll say, I’d rather have the objective be to go to Mars, and if we fall short, we’ll get to the moon. This is how you make moonshots. Focus, alignment, commitment, tracking and stretching, I love that because it spells FACTS. And I can remember it. How do OKRs differ from, or complement, an Agile system? Agile guides your day-to-day work. OKRs don’t govern your day-to-day behavior. I’d say this is more of a weekly check-in. But it’s not set the goals and then stuff them away in a drawer and ignore them. People really care whether or not the CEO is watching their goals or cheering them on. If a leader wants a way to reach down into an organization, this is a great tool for doing it. You even use OKRs in your personal life? Yes, it can work against any agenda. I have had a set of personal objectives and key results. Most of mine have been around family. Now both daughters are off to school, but years ago I read and believed that having family dinners together was a key to having a happy family. So my key result was to get home for dinner by 6PM at least 20 nights a month, and be present, with our phones in another room. And that’s pretty hard to do. I was living in the 70% threshold is a good result — that would mean 14 or 15 nights a month. That’s an example of how OKRs can span any range of human activity. They’re transparent vessels that describe the “what” and the “how.” The values we pour into those vessels are the answers for the question, “Why?” — John Doer

If implemented right, OKRs can drive 5 things—focus, alignment, commitment, tracking progress and stretching (FACTS).

OKRs are not perfect. In the absence of strong leadership or the absence of a visionary leader, the entire organization could be working on wrong things if objectives are not bold enough for the business. OKRs also do not allow for what isn't under your control. Self-worth is tied into objective and key results, but the individual does not have full control over its environment. Though Doerr argues against tying performance into key results, but hardly seen this in practical world. A system is equally responsible for failure to meet its objective.

Nonetheless, OKRs are valuable in driving focus for the entire organization and measure progress against set objectives.

## Background

John Doerr is the father of OKR who is responsible for bringing OKRs to Google and the world. He transformed Andy Grove's managerial system from Intel and made the process formal through OKR. Andy Grove was best known for driving operational excellence at Intel during its peak. Following were Grove's managerial philosophy:

- Less is more–each objective should be tied to no more than five key results.
- Set goals from the bottom up—team members are motivated when individuals set their own OKRs.
- No dictating—OKRs are “a cooperative social contract,” so there should always be space for debating and negotiations.
- Stay flexible–in a fast changing environment, objectives can stop being relevant, so it should always be easy to modify them, together with the key results.
- Dare to fail—some OKRs should be uncomfortable, even unattainable, which means you’d need to be ready to fail.
- A tool, not a weapon—OKRs are not legal documents according to which you’re expected to measure your performance.
- Be patient—it’s next to impossible to fully understand the mechanism of the system in one cycle (1 quarter); five quarterly cycles should be enough to see how the goals actually perform.

## Definition 

OKR is short for *Objective and Key Results*. Both are collaboratively driven by an entire organization to execute on the vision and strategic goals.

- **Objective**: answers the WHAT is to be achieved.
- **Key Results**: answers the HOW is it going to be achieved.

If implemented correctly, it drives focus and transparency while eliminating conflicting priorities. 

An illustrative example of OKRs in an organization:

**CEO**
- Objective: gain ice-cream market share in Chicago.
- Key Results: sell 5000 pallets of vanilla ice-cream a week in neighborhoods with large population.

**Head of Manufacturing**
- Objective: produce 5000 pallets of vanilla ice-cream a week.
- Key Result: make 150,000 gallons of vanilla ice-cream a week.

**Head of Sales**
- Objective: sell 5000 pallets of vanilla ice-cream a week.
- Key Result 1: create a referral program to achieve >90% brand recommendation from existing buyers.
- Key Result 2: create a brand promotion with summer camp organizations to sell ice-cream during game days.

This is simple, but an illustrative example of OKR in action. It ties back into CEO's objective which cascades down to every business unit.

The secret sauce of OKRs is in the Key Results. 

Performance should be measured by results (note, not tied to employee compensation). Each key result is measurable and verifiable. This is the best way to align incentives. Results should be regularly updated every quarter. If results are not achieved within a defined timeframe, it is time to reassess.

A key point to remember—progress should be measured by outcome not an output otherwise goals are up for gamification. For example, Wells Fargo's organizational goals led personal bankers to open fake customer accounts to meet the quota. The goals backfired and took Wells Fargo into compliance trouble. Key results should be set intentional to ensure they cannot be tricked.

Lastly, the goal is not to create a feature factory machine, but to solve a business problem and create organizational value. If organization is structured and aligned correctly, OKRs can be extremely effective by ensuring all members of the organization are working toward the same goals.

## OKR superpowers

The 5 superpowers of OKRs—focus, alignment, commitment, tracking progress and stretching.

- Focus—the organization on what matters for the company to survive and function.
- Align—OKRs to individual goals and the company’s game plan. Identify cross-team dependencies that require collaboration. For sound decision-making, and superior performance, top-line goals must be clearly understood throughout the organization and shared throughout the entire organization.
- Commit—to goals 100% which are supposed to be achieved within a specific time limit.
- Track for accountability—OKRs are driven by data and require periodic check-ins for objective grading, done in a spirit of no-judgment accountability. Google scores on 0 to 1.0 system: 
	- 0.7 to 1.0 is green
	- 0.4 to 0.6 is yellow
	- 0.0 to 0.3 is red
- Stretch your goals—aspirational objectives are those that go beyond your everyday routine and are more about your vision of the company’s future. They are not always attainable, but necessary for management and contributors to challenge themselves. 

> If companies don’t continue to innovate, they’re going to die—and I didn’t say iterate, I said innovate. — Bill Campbell

## Continuous performance management

> Feedback is an opinion, grounded in observations and experiences, which allows us to know what impression we make on others. — Sheryl Sandberg

OKRs set the context for Continuous Performance Management (CFR). CFRs help promote transparency, accountability, empowerment, and teamwork. 

- Conversations—an authentic, richly textured exchange between manager and individual contributor aimed at driving performance.
- Feedback—bidirectional or networked communication among peers to evaluate progress and guide future improvement. For example, “We are constantly surrounded by positive reinforcement and feedback, but many of us haven’t been trained to seek it out. Say you give a presentation to your team. After the fact, somebody comes up to you and says, ‘Hey, nice job.’ Most of us would say, ‘Oh great, thanks,’ and move on. But we want to probe a little deeper: ‘Thank you. What one thing did you like about it?’ The idea is to capture more specific feedback in real time.”
- Recognition—expressions of appreciation to deserving individuals for contributions of all sizes.

## Relationship between OKRs and culture

Culture eats strategy for breakfast. OKRs are the raw ingredients to make that breakfast.

> Culture is a set of values and beliefs, as well as familiarity with the way things are done and should be done in a company. The point is that a strong and positive corporate culture is absolutely essential. — Andy Grove

A culture that drives focus, alignment and meaning will always win. If an organization believes the work they are doing, members of the organization will feel empowered and motivated to show up. OKRs should be set in a way that answer the following:

- Structure and clarity—are goals, roles, and execution plans on our team clear? 
- Psychological safety—can we take risks on this team without feeling insecure or embarrassed? 
- Meaning of work—are we working on something that is personally important for each of us? 
- Dependability—can we count on each other to do high-quality work on time? 
- Impact of work—do we fundamentally believe that the work we are doing matters?

#### Further reading

- [Measure What Matters Book Summary](/measure-what-matters/)
- [High Output Management Book Summary](/high-output-management/)
- [John Doerr Ted Talk](https://www.ted.com/talks/john_doerr_why_the_secret_to_success_is_setting_the_right_goals?language=en)
- [What Matters](https://www.whatmatters.com/faqs/company-wide-okr-ideas-examples)
- [OKR Examples](https://okrexamples.co)
- [OKR Mistakes by Adobe](https://business.adobe.com/blog/basics/okr-mistakes)
- [Alternative of an OKR](https://www.sachinrekhi.com/bill-walsh-the-score-takes-care-of-itself)

</details>
<br>
