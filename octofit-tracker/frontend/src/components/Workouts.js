import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:8000/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/workouts/`)
      .then(res => res.json())
      .then(data => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching workouts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center"><div className="spinner-border" role="status"></div></div>;

  return (
    <div>
      <h2>Workout Suggestions</h2>
      <div className="row">
        {workouts.map(workout => (
          <div key={workout._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
                <ul className="list-unstyled">
                  <li><strong>Duration:</strong> {workout.duration} minutes</li>
                  <li><strong>Difficulty:</strong> <span className={`badge bg-${workout.difficulty === 'easy' ? 'success' : workout.difficulty === 'medium' ? 'warning' : 'danger'}`}>{workout.difficulty}</span></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
