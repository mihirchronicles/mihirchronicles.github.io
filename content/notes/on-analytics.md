---
title: "On Analytics"
tags: ["general"]
date: "2024-05-02"
draft: false
path: "/notes/on-analytics"
---

_**UNDER CONSTRUCTION**_

Data is powerful but it is addictive causing analysis paralysis. A/B testing colors at Google generate them billions, but that doesn't mean you run A/B testing before deciding what pants to put on before you go to work.

Critics argue too much data driven isn't healthy. To them being data informed is enough. They are right because optimizing one part of your business can harm another part of business without taking a step back to look at the bigger picture. But that does not warrant to skip the hard work of data analytics.

I know this because I shipped a feature to solve one pain-point to cause increase in call volumes causing frustration for my operation team. I oversold on data and dropped the ball on understanding the full picture.

Data-driven and optimization should co-exist, but too much optimization without human judgement can cause problems.

In mathematics, a local maximum is the largest value of a function within given parameters. That does not mean it is the largest possible value, the largest in a particular range. Consider a lake on a mountainside. The water isn't at its lowest level. It would be sea level, but it is at the lowest possible level in the area.

Optimization is all about finding the lowest or highest values, but within constrained range. If you tell a machine to build a bike with 3 tires, with the most stable layout, it will come up with a tricycle-like configuration. It is the most optimal solution. However, there is another option. Four wheels would be better to provide the most stability. Math is good at optimizing a known system. Human judgement is good at finding a new one. 

Optimizing without a soul misses the bigger picture. Quantitative data is great for testing hypotheses, but it is lousy to generate new ones unless you combine with human judgement.

It is all about developing healthy skepticism and curiosity to get closer to the truth. You need to be opportunistic and data analytics will help you get faster to making your vision into a reality.

## Data pitfalls 

1. *Assuming data is clean.* Before you can analyze, you need to ensure data is clean and accounts for all business logic. For example, empty fields such as "Null" account for 30% of the values, you are miscalculating. Or if you are granting dollars to charities. But if a donor has multiple accounts, transferring funds from one account to another is considered granting which is not true because charities have not received anything.
2. *Not normalizing.* Let's say you are looking for popular destinations to take vacation with your family. Is it popular based on airport business or in fact people travel a lot there for a tourist attraction.
3. *Excluding outliers.* If a small selection of people, say 50 users out of thousands are using your product or bots crawling on your site for content, not ignoring them is a mistake.
4. *Including outliers.* While you might want to ignore 50 users, you might also want to include them to understand why they are heavy users of your product. It might be a feature that they understood, but the average users don't. It could be a marketing campaign opportunity. 
5. *Ignoring seasonality.* Of course, "intern" is the fastest growing job in the month of June. But all things equal, is it? Failure to account for time can lead to misunderstanding of a pattern and making poor decisions.
6. *Ignoring size when reporting growth.* Context is key. Your friends and family signing-up for product is not a sign of growth, but a sign of support because they want to show support. 
7. *Data vomit.* A dashboard isn't much use if you don't know where to look or is not friendly enough.
8. *Metrics that cry wolf.* To be responsive, you need alerts so you can be proactive about fixing it quickly. But if your thresholds are too sensitive, they get louder, and you'll start to ignore them.
9. *The Not Collected Here Syndrome.* Mashing up your data with other data sources can lead to valuable insights. For example, do your best customers come from zip codes with a high concentration of sushi restaurants? This might give you growth ideas about what experiments to run next or even influence growth strategy. 
10. *Focusing on noise.* We are hardwired to see patterns where there are none. For example, seeing a joker shaped cloud. It helps to set aside vanity metrics, step back and look at the bigger picture.

*Source: Lean Analytics, Monica Rogati, Data Scientist at Linkedin*

## Actionable tips
- Retrieve: First, you need to learn how to get data. SQL is most common in work places. Divide data gathering into three buckets:
    - Business data: revenue, market share, etc.
    - Product data: product portfolio, features, etc.
    - Customers data: target group, reviews, etc.
- Analyze: Analytical thinking is to crunch numbers understand the why and execute at lightning speed. To do so you need the following basic understanding.
    - Patterns: See the norm, what sticks out, what needs a second look. Get a lay of the land, so you can start developing a point of view. To solve the puzzle, ask yourself the following questions:
        - What is “normal” around here? 
        - What sticks out?
        - Why is it sticking out?
        - How much does it stick out vs everything else?
    - Nuances: It is powerful to see nuances when other people just see a binary yes or no. You want to be able to say— “This works for x situations, but not for y situations.”
    - Absolute numbers & percentages: If you only look at absolute numbers, big numbers will seem good and small numbers will seem bad. If you look at percentages, you’ll see the relationship between the parts and the whole.
    - Variance: Variance is about change. Change from the baseline & changes over time. 
        - How much did this change month over month? 
        - This month vs this month last year? 
        - Was the variance in line with industry growth—or did it outpace or lag comparatively?
    - Expected vs actual: “Wow, we drove 19% growth!” might seem like good news, unless you forecasted 30% growth. This is where looking at expected vs actual numbers is useful. If you compare the two, you can better understand how good performance really is.
    - Percent contribution to whole: 
        - Money: “This accounts for 70% of total $.”
        - Volume: “This accounts for 17% of units.”
        - Top hits: “These 10 items drove 80% of new visitors.”
    - Peaks: Identify peaks and valleys, i.e. the highest or lowest something has ever been. This helps you see the range, which helps you get grounded. If you have new assets or levers to pull, you can say, “We'll beat the highest we've done because x.”
    - Check in on margins: revenues don't alone matter much without cash flows. 
    - Verify your biases by analyzing your data processing mechanics to ensure you are not building a data set to validate your own assumptions.
    - Look for clues by asking:
        - Why is this happening?
        - What is the impact?
        - What should we do about it (if anything)?