import React, { useEffect, useRef, useState } from 'react';
import Matter, { Body } from 'matter-js';
import ProjectCard from './ProjectCard';

const FloatingProjects = ({ projects }) => {
  const sceneRef = useRef(null);
  const [engine] = useState(Matter.Engine.create());
  const [gravityOn, setGravityOn] = useState(true); // Starts with gravity on
  const [positions, setPositions] = useState([]);
  const turbulenceInterval = useRef(null);

  useEffect(() => {
    if (gravityOn) return; // Skip Matter.js setup if gravity is on

    const { Engine, Render, World, Bodies, Runner } = Matter;

    // Create Renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#f0f0f0',
      },
    });

    // Create Runner for continuous updates
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create Bodies for Each Project
    const projectBodies = projects.map((_, index) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return Bodies.rectangle(x, y, 200, 300, {
        restitution: 0.8,
        friction: 0.2,
      });
    });

    // Add Ground, Walls, and Ceiling
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 1, { isStatic: true });
    const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true });
    const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true });
    const ceiling = Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 1, { isStatic: true });

    // Add all elements to the world
    World.add(engine.world, [...projectBodies, ground, leftWall, rightWall, ceiling]);

    // Sync positions with React state
    const updatePositions = () => {
      const updatedPositions = projectBodies.map((body) => ({
        x: body.position.x,
        y: body.position.y,
        angle: body.angle,
      }));
      setPositions(updatedPositions);
    };

    // Run Engine and Renderer
    Engine.run(engine);
    Render.run(render);

    // Update positions at every tick
    const interval = setInterval(updatePositions, 16); // ~60fps

    return () => {
      // Cleanup
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      clearInterval(interval);
      clearInterval(turbulenceInterval.current);
    };
  }, [engine, projects, gravityOn]);

  const toggleGravity = () => {
    setGravityOn(!gravityOn);

    // Add turbulence when gravity is off
    if (!gravityOn) {
      turbulenceInterval.current = setInterval(() => {
        const bodies = Matter.Composite.allBodies(engine.world);
        bodies.forEach((body) => {
          if (!body.isStatic) {
            const forceMagnitude = 0.1 * body.mass; // Adjust force strength
            const randomX = (Math.random() - 0.5) * forceMagnitude;
            const randomY = (Math.random() - 0.5) * forceMagnitude;

            Body.applyForce(body, body.position, { x: randomX, y: randomY });
          }
        });
      }, 100); // Apply forces every 100ms
    } else {
      clearInterval(turbulenceInterval.current); // Stop turbulence when gravity is on
    }
  };

  return (
    <div>
      <button onClick={toggleGravity}>
        {gravityOn ? 'Turn Off Gravity' : 'Turn On Gravity'}
      </button>
      {gravityOn ? (
        <div className="max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold text-gray-800 mb-6">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      ) : (
        <div ref={sceneRef} style={{ position: 'relative', overflow: 'hidden' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: positions[index]?.x || 0,
                top: positions[index]?.y || 0,
                transform: `rotate(${positions[index]?.angle || 0}rad)`,
                width: '200px',
                height: '300px',
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FloatingProjects;
