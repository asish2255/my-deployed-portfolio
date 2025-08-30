import React from 'react'
import { Music, Camera, BookOpen, Dumbbell } from 'lucide-react'

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Music",
      description: "I enjoy listening to and playing different genres of music in my free time.",
      icon: <Music size={32} />
    },
    {
      id: 2,
      title: "Photography",
      description: "Capturing nature, portraits, and street moments is something I love doing.",
      icon: <Camera size={32} />
    },
    {
      id: 3,
      title: "Reading",
      description: "I like reading books on technology, personal growth, and science fiction.",
      icon: <BookOpen size={32} />
    },
    {
      id: 4,
      title: "Fitness",
      description: "Staying active through workouts and outdoor activities keeps me energized.",
      icon: <Dumbbell size={32} />
    }
  ]

  return (
    <section className="section">
      <h2>Hobbies & Interests</h2>
      <div className="projects-grid">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="project-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
