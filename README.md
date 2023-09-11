# Teams Carnival
Teams Carnival is an MIT licensed project developed by a team of 6 students as a part of UCL MSc Computer Science program. It comprises 8 Unity-made games integrated into a React application for use within Microsoft Teams meetings. The primary objective of the project was to investigate the functionalities of Microsoft's Live Share SDK for multiplayer game integration within Teams and document the process for the benefit of future developers.  The games demonstrate increasing levels of implementation complexity based on their utilization of Live Share SDK data structures. 

## Kickstart Your Microsoft Teams Adventure with Trivia and Snakes & Ladders
  
Trivia Race and Snakes and Ladders provide semi-synchronous and asynchronous experience, respectively, through use of a singular Distributed Data Structure. The emphasis was put on providing highly readable and customizable code for beginner developers unfamiliar with Live Share SDK and Fluid Framework. Trivia Race code base exemplifies the most straightforward use of Fluid for score-based games with leader board updated in real-time; Snakes and Ladders demonstrates a framework for development of fully synchronized turn-based board games. 




https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/ec3c0e7a-efda-493d-b79c-c08a816063a5


https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/739b9186-30bc-4843-b2ef-688af42d0d69



## Level Up in MS Teams: T-Rex, Space Shooter, and LiveShare SDK

T-Rex is a horizontal scrolling adventure game developed using Live Share SDK (Shared Map), Unity, and React JS. Players can initiate and join the game through the Teams side panel and Unity interface, respectively. Once joined, player names and statuses are displayed and synchronized on the side panel. Players can set their status to "Ready" via the button in the Unity interface, and once all are ready, a T-Rex championship competition begins. After the game concludes, player scores are displayed and synchronized on the side panel, with all player information changes managed by the shared map. In addition, Space Shooter is a vertical scrolling adventure game that employs Unity, React JS and all core capabilities of the Live Share SDK. While it shares a similar game progression with T-Rex, its use of the complete set of Live Share SDK functions makes it more advanced. Features like Live Presence grant the game host higher control privileges, while Live Timer ensures synchronized game starts and avoid confusion. After gameplay, the player scores in Shared Map will be processed to determine the highest scorer, and Live Notification announces the result. Essentially, the incorporation of all core Live Share SDK features makes Space Shooter feel like a more comprehensive game. The development of both games emphasizes the integration of classic game mechanics with modern collaboration tools. While T-Rex offers a foundational development experience with fewer SDK features, Space Shooter showcases the full range of Live Share SDK capabilities. Their codebases are structured to provide a gradual learning experience, guiding developers from the simpler T-Rex to the more advanced Space Shooter, ensuring an optimized user developing experience. 

https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/2a6a9125-d896-45e2-bc82-fea707b29456

https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/1e6870fb-c334-4ef4-8448-30fa371cb974


## Battle Your Way to Victory with Might & Malice in MS Teams
 
Might and Malice provides proof of concept for a synchronised, two player turn-based combat experience built using Live Share, Unity and React JS. The code base provides a complete framework for implementing real-time, synchronised game actions and results for participants of an MS Teams meeting, including player health, damage and animation synchronisation. The framework also allows for ‘Join in progress’ functionality using Live Share that lets meeting participants switch into the roles of either player while the game is running. The implementation primarily uses the Fluid Shared Map distributed data structure with a synchronisation relay that passes relevant game data back and forth between Unity and React, ensuring all meeting participants see the same outcome in their own clients. 

https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/966c03c2-d562-44f2-8cec-9bbbeffa7d6e


## Get Your Game On in MS Teams: Jenga 3D, Pac-Man FHIR, and More
 
Jenga, a 3D strategic block-stacking game, and Pacman are classic games seamlessly integrated into the Teams environment using React and Unity. Jenga is initiated through a Teams side panel, transitioning players to the immersive Unity interface. Pacman offers each participant their unique game experience but ensures player scores and health data are synchronized across all clients. Both games leverage the Live Share SDK for real-time synchronization. Their codebases are tailored for clarity, aiding developers unfamiliar with the Live Share SDK and Fluid Framework and emphasize the blend of classic game mechanics with modern collaboration tools, ensuring an enhanced user experience. 


https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/15bc6298-f920-49b6-bf3f-55cd05a6dc30



https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/ea912b81-8d65-4e50-95b9-c91bb7fcc4fd


  
## Burst Balloons and Create Explosive Fun in MS Teams 
 
Balloon Bomb is a turn-based multiplayer application, providing users a synchronized experience by  leveraging the capabilities of Live Share SDK. Positioned to stand as a benchmark for Unity-Teams application developers,  the project diminishes unity-specific traits to magnify its widespread adaptability. In the application, players, distinguished by roles, are accorded distinct privileges. The role-based distinction seamlessly transitions into a synchronized framework divided into six modules:  Application State, Gamer Manipulation, Game Setting, Game Data, Game Animation, and Live Notifications. Mirroring their designations, each encapsulates distinct functions. Beneath the surface, each module is implemented through varying collaborations among sharedMaps, LiveEvent, and LivePresence, which manifests the expansive scope of Live Share SDK. 



https://github.com/Teams-Carnival-Games/Trivia-Race/assets/83135521/3fa0e8bb-92bc-4c6e-bd84-475795943f20



## Revolutionizing MS Teams: A Game-Changing Launcher Approach
 
Finally, Teams Carnival presents all the games developed thus far in a single application. It offers Teams meeting participants a library of multiplayer experiences to choose from, as well as brief guidance on the gameplay of each. Its implementation addresses the challenge of handling multiple container schemas within one application, while working around the mutual exclusion which forbids the creation of multiple Fluid containers during a meeting. Version 1 explores the approach whereby the application can be configured to display a particular game in a meeting, while Version 2 offers the choice of loading multiple games within a singular session. 

