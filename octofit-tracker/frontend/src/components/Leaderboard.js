import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:8000/api';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/leaderboard/`)
      .then(res => res.json())
      .then(data => {
        setEntries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching leaderboard:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center"><div className="spinner-border" role="status"></div></div>;

  return (
    <div>
      <h2>Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry._id}>
              <td>{entry.rank}</td>
              <td>{entry.username}</td>
              <td>{entry.total_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
