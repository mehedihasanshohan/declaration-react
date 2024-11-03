/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

function Profile({ userId }) {
  // Initialize state based on the userId prop
  const [userData, setUserData] = useState(() => fetchUserData(userId));

  return (
    <div>
      <h2>Profile for User ID: {userId}</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Additional profile data */}
    </div>
  );
}

// Simulated data fetch function
function fetchUserData(userId) {
  // In a real app, you might fetch data from an API here
  return { name: `User ${userId}`, email: `user${userId}@example.com` };
}

export default function KeyChange() {
  const [currentUser, setCurrentUser] = useState(1);

  return (
    <div>
      <button onClick={() => setCurrentUser(currentUser + 1)}>
        Load Next User
      </button>
      {/* Changing the key here causes the Profile component to reset */}
      <Profile key={currentUser} userId={currentUser} />
    </div>
  );
}
