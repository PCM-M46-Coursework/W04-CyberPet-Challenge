# Week 04 - Cyber Pet Challenge

**Authors:**
 - Peter C. Matthews - (*Team Lead*, *Head of JS OOP*)
 - Stephen McKeown - (*Head of HTML*)
 - Mauricio Banados-Cornejo - (*Head of CSS*)
 - Ramon Merrell - (*Head of JS DOM*)

This repository contains our submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

Create a retro cyberpet website with HTML, CSS, and JavaScript, using object-oriented programming.

Users will be able to choose a pet (dog, cat, rabbit) and will have to play with it, and feed it to keep it alive.

### Requirements
 - A choice of animals (it’s up to you what animals) that are set in a generic Animal class and unique subclasses for each specific animal.
 - Properties and Methods unique to each animal e.g., Dog could have a happy stat and playFetch method, Cat could have a content stat and playWool method.
 - Display decreasing stats over time.
 - Buttons for each method (Feed, Drink, Play etc.) that changes the stats of your cyberpet.

## Implementation

After initial market research, we decided to base the inspiration, and theme of the project around a game called ***Megaquarium***, by Twice Circled. This is an aquarium management and tycoon style game, where you have to keep aquatic creatures, and display them for the public. From here, we were able to determine a theme, a style, and determine which creatures to use as pets.

### Game Mechanics

The game contains four available creatures, each with unique statistics, and characteristics.

 - Decorator Crab
 - Peacock Mantis Shrimp
 - Ocean Sunfish
 - Picasso Triggerfish

Each creature has four statistics; ***Health***, ***Hunger***, ***Boredom***, and ***Happiness***. Each of these stats will either increase, or decrease over time. Health is recovered by satiating the other three stats, using the *Feed*, *Play*, and *Pet* actions, respectively for each stat.

Each creature also has a special ability, which give a large boost to its favoured statistic; in keeping with the characteristics of the animal. The worse the condition of your pet, the faster their stats will drop, and the more health they will lose, so you have to balance your actions to keep them in as good a condition as possible. On top of that, the longer your pet stays alive, the faster their stats will degrade. There is also a big red "Terminate" button, if you wish to end the game early.

The game comes fully featured with sound effects, background music, and animated creature avatars.

### Project Staging

The project was undertaken in multiple phases:

 1. The first phase involved discussing the base game mechanics; determining the win, and loss conditions; and delegating overall responsibility between the teams.

 2. The second phase involved creating a prototype site, on Figma. This enabled all members of the team to have input into the overall design, and feel of the website.

 3. Once we were happy with the prototype, we planned to take the site from Figma, into production. We split into two groups to work on the front-end, and the code-behind, and then re-formed to bring the two sections of the site together.

### Project Management

This project has been managed using Matrix Teams. This being where each member of the team is a "head" of their own department. When working within a specific field, the dept. head will have a power of veto, and take responsibility for that department. Each member's own strengths and prior experience was taken into account, as well as their personal preference of department.

 - ***Styling & Prototyping:*** With his background in Graphical Design, and experience with Figma, *Mauricio* took the lead with CSS, and building the prototype site.

 - ***Layout & Structure:*** With a background in Computer Aided Design, *Stephen* took the lead with HTML, and designing the overall layout, and structure of each page of the site.

 - ***Game Mechanics & Integration:*** With a background in Software Development, *Ramon* took the lead with JS DOM, and integrating the elements within the page.

 - ***Framework Code & Project Management:*** With a background in Software Architecture and experience with and Project Management, *Peter* took the lead with JS OOP, and the overall Team Lead position.

Initial duties and delegations were discussed, and added to a backlog within Trello. However, as the project went on, it was found we were working so close, and at such a fast pace, that we often overtook Trello. We relied on it less and less, as the project went on. With Figma especially, we were all able to work on the same prototype, and share our own input. This meant that everyone was largely on the same page, when it came to building the site from the prototype.

 - **Figma Project:** [https://www.figma.com/file/PvqObiUwLGeO5uxh...](https://www.figma.com/file/PvqObiUwLGeO5uxhPH5Kfc/Untitled?node-id=0-1&t=9u0fX8l6OEEm0Kf0-0)
 - **Trello Board:** [https://trello.com/b/fvquepan/w04-cyberpet-challenge](https://trello.com/b/fvquepan/w04-cyberpet-challenge)
 - **GitHub Page:** [https://m46-codenation.github.io/W04-CyberPet-Challenge/](https://m46-codenation.github.io/W04-CyberPet-Challenge/) 
     
### Attribution

The mini-game we have produced is heavily inspired by *Megaquarium*; a game by *Twice Circled*. All audio and visual assets from Megaquarium are copyrighted to *Time Wicksteed*, under the trading name of *Twice Circled*. They are used under fair dealing, as part of an original derived work, for educational purposes. *Twice Circled* licences use of audio, and visual content from the game, for content creation purposes.

 - Megaquarium is available at: [https://www.twicecircled.com/](https://www.twicecircled.com/megaquarium/)
 - Additional graphics have been produced, using the CoolText Graphics Generator, available at: [https://cooltext.com/](https://cooltext.com/Logo-Design-Easy).
 - Favicon courtesy of: [https://www.iconarchive.com](https://www.iconarchive.com/show/seaside-icons-by-iconarchive/Fish-2-icon.html).

## Retrospective

This project has been the first of its kind, for all members of the team, and has been a learning experience for all of us.

Some observations on various aspects:
 
 - **Figma:** - Figma has been a massively useful tool for designing, prototyping, styling, and structuring the site. Within a project on Figma, everyone can work on the same project at once. You can see each other's cursors, and all have input as to how the site looks, and feels. However, when it comes to building the site from the prototype, it seems to be a lot less useful. At least without paying for premium services, and plugins. The HTML that it produces is heavily nested, and doesn't lend itself to an educational setting, where we need to understand, and learn from the experience.
 
 - **Trello:** - With a project of this size, and with the short amount of time we had, Trello has not been overly useful. We started placing things on the backlog on the first day, but because we have been in constant communication, and the tasks have been either very long-terms tasks, or very short tasks, there's been little reason to add tasks to the board, just to put them in the "Doing" column until the end of the project, or immediately put them in the "Done" section. There's also a lot of things that haven't been taught within project management, such as "*the definition of Done*" that would have made the process of using Trello a lot more worthwhile.

 - **GitHub:** - This has been a good exercise in using GitHub for collaborative projects. However, it has slowed down progress a lot, compared to the ways we have been used to working. Because we've been in constant communication, it's been easier, faster, and more productive to send files to each other manually, or verbally give instructions for bug fixes, rather than checking out a new branch, making a miniscule change, committing that change, pushing the change, creating a pull request to merge back into main, merging the changes, deleting the branch, syncing the changes, and then finally merging the changes back into the branch for the other team member. When all we needed to do was say out loud, "You need a semi-colon at the end of line 54.".
