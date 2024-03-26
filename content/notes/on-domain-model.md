---
title: "On Domain Model"
tags: ["general"]
date: "2024-03-25"
draft: false
path: "/notes/on-domain-model"
---

Recent encounters on my current team has led to several discussions on whether a feature has a bug or whether it was poorly designed.

A **bug** is when a feature in not functioning the way it is expected to.

A **feature gap** is a gap in the system due to a miss during initial design.

Who is to be blamed for this—business, engineering or design? It depends!

Based on the two statements above, if it is a _bug_, engineering came short on executing requirements. If it is a feature gap, both engineering and design didn't get enough requirements from product. Product didn't think through the requirements. Lastly, neither product nor engineering control reality as business dynamics are always changing. This would require enhancing feature based on new rules.

In software development, incorrect relationships determines the amount of complexity. Features collapse under the weight of its own complexity. Context is everything. Domain driven design can avoid much of this trouble to ensure context is captured before any line of code is written.

However, there should be room for randomness and moving parts because reality is not static. Business requirements can change because there is a new CEO or due to new industry-wide regulations.

A solution model will always need to be adjusted over time and refined into a better representation of reality. Skilled engineers are always refactoring. And, skilled product managers are always communicating what is coming next.

Learning about your domain, writing it down and driving consistency on terminologies have clear communication benefits. If product managers are domain experts then they should work with engineering and design teams to formalize shared understanding on domain.

> One of the miseries of life is that everyone names everything a little bit wrong, and so it makes everything a little harder to understand in the world than it would be if it were named differently. A computer does not primarily compute in the sense of doing arithmetic. Strange. Although they call them computers, that's not what they primarily do. They primarily are filing systems. People in the computer business say they're not really computers, they are "data handlers". All right. That's nice. Data handlers would have been a better name because it gives a better idea of the idea of a filing system. — Richard Feynman

## Domain model

The concept of Domain Models come from Domain Driven Design (DDD) which is a software design approach.

At its core, domain model is about the practice of software design which puts domain users, its behavior and problems first. There are no technical considerations as this is purely driven by business logic. The basic idea is that the **Domain** is the problem domain, and the **Model** is the model of the problem.

It is a system of abstraction. Product managers should be well-equipped to understand this business context and be able to communicate to the teams.

The domain model has the following elements:

1. **Domain Objects**: Entities with an ID which can be indexed
2. **Values**: A property value wrapped in a class 
3. **Aggregates**: A group of related Entities

These elements represent the domain (business logic) in which the problem is solved. In a domain model, you model objects and draw associations between them so that you have high level idea on how the system will work and how they will interact with each other. 

Imagine an e-commerce store. For that store, you want to build billing system. You should ask yourself, what are all the components of a billing system? Billing, invoice and customer accounts are a few components of a billing system. Each one of those has contact (domain object) and address (value). Each one of these components interact with another by association and rules. (REMINDER: I will later expand on this example in depth.)

To summarize, why domain models are critical for product management: 

- The domain model is a representation of real-world concepts including the data involved in the business and rules the business uses in relation to that data. The domain model is organized and structured knowledge of the problem. 
- Every system (or product) has people, things, and relationships between things and people along with workflows.
- Domain model is a conceptual schema or a map of concepts and their relationships.
- Domain models are richer than simple data models as they capture the behavior and domain logic. 
- It is a visual representation of situation objects in a domain. The term domain model does not mean a set of diagrams describing software classes. Domain model can be represented by a diagram, code example or written documentation of the problem.
- The important thing is that the domain model should be accessible and understandable by everyone who is involved with the project. One of the downfalls of many software development projects is the misunderstanding of terms, objectives and proposed solutions that are scoped at the beginning of development.
- In software, a domain model is a conceptual model of the domain that incorporates both behavior and data. This is critical for PMs to pay attention to because they are responsible for driving requirements. And requirements cannot be defined without understanding the core behavior and data of a domain. There are plenty of what ifs and buts for PM to help answer.
- A domain model is implemented as an object model within a layer that uses a lower-level layer for persistence and publishes an API to a higher-level layer to gain access to the data and behavior of the model. An object model consists of the following important features—object reference, interface (API or UI), actions and exception handling to account for various errors and warnings.

## Further reading
<details>
    <summary><strong>References</strong></summary>
    <br>

- [37 Signals Domain Driven](https://dev.37signals.com/domain-driven-boldness/)
- [Notion's Data Model](https://www.notion.so/blog/data-model-behind-notion)
- [Stack Overflow Thread](https://stackoverflow.com/questions/3507671/whats-the-difference-between-data-modelling-and-domain-modelling)

</details>
<br />
