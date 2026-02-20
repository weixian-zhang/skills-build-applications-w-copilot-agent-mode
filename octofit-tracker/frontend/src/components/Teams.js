import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:8000/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/teams/`)
      .then(res => res.json())
      .then(data => {
        setTeams(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching teams:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center"><div className="spinner-border" role="status"></div></div>;

  return (
    <div>
      <h2>Teams</h2>
      <div className="row">
        {teams.map(team => (
          <div key={team._id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Members</h6>
                <ul className="list-group list-group-flush">
                  {team.members && team.members.map(member => (
                    <li key={member._id} className="list-group-item">{member.username}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
