![Space Traveler Game](https://github.com/meljaszuk/SpaceTraveler-Game-in-React/blob/main/space-1.jpg)

**A game fully designed and developed by me in React**, where players control a spaceship to rescue astronauts lost in a meteor field. The game features a comprehensive collision detection system, dynamic scoring, pausing functionality, and smooth keyboard-based controls. Additionally, the game includes engaging animations and immersive sound effects, all crafted to enhance the player's experience.

**Demo**: [Play the Game](https://meljaszuk.github.io/SpaceTraveler-Game-in-React/)  
**Source Code**: [View on GitHub](https://github.com/meljaszuk/SpaceTraveler-Game-in-React)

**Design and Graphics**  
During the development process, I focused on my own design by building graphics using canvas components. I carefully selected fonts that complement the game’s aesthetic, ensuring a cohesive and immersive visual experience for players.

![Space Traveler Game](https://github.com/meljaszuk/SpaceTraveler-Game-in-React/blob/main/space-2.jpg)

**Collision System**  
The collision system checks for meteors within a vertical "collision zone" since the spaceship moves only up and down. For every collision point, the distance between the point and the center of the meteor (a circular object) is calculated. If the distance is less than the meteor's radius, a collision is detected.

![Space Traveler Game](https://github.com/meljaszuk/SpaceTraveler-Game-in-React/blob/main/space-3.jpg)

**Scoring System**

- **Astronaut rescued**: +500 points.
- **Rescue entire crew**: Additional bonus points.
- **Lose a life**: Points are deducted, representing the loss of all astronauts.

**Keyboard Controls**

- **Move up/down**: Arrow keys.
- **Pause the game**: Spacebar.
- **Access information**: "I" key.
- **Exit game**: Escape key.

**Performance Considerations**

- **Image optimization**: Images are stored in WebP format.
- **Efficient rendering**: Only game objects (meteors, astronauts) with an `x` coordinate between 0 and 1200 (screen width) are rendered, optimizing performance.
- **Selective collision detection**: Only meteors within the collision zone are checked, preventing unnecessary, memory-consuming calculations.

**Limitations**  
The current animation is based on `setTimeout`, which has limitations such as inconsistent frame rates and performance bottlenecks. I am working on implementing `requestAnimationFrame` to provide smoother animations and better performance.
