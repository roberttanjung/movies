'use client';

import { useEffect, useMemo, useState } from "react";

export default function ReactHooks() {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const checkUser = useMemo(() => {
    let isVanda = false;

    if (username === 'vanda') isVanda = true;

    return isVanda;
  }, [username]);

  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  useEffect(() => {
    if (checkUser) setPassword('SPE123');
  }, [checkUser]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100dvh' }}>
      <div>
        {checkUser && <h1>Welcome, Vanda!</h1>}
        <div>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
