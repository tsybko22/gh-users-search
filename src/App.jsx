import { useEffect, useState } from 'react';

import { MoonLoader } from 'react-spinners';

import Alert from './components/Alert';
import Container from './components/Container';
import Header from './components/Header';
import User from './components/User';

import { getUser, getUserRepos } from './api/config.js';

const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const handleSearch = (username) => setUsername(username);

  useEffect(() => {
    if (username !== '') {
      setIsLoading(true);

      Promise.all([getUser(username), getUserRepos(username)])
        .then((results) => {
          const userData = results[0].data;
          //Sort repos by popular and leave only 4 repos
          const reposData = results[1].data
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4);

          setUser({ ...userData, repos: reposData });
          setIsLoading(false);
          setError({ isError: false });
        })
        .catch((err) => {
          if (err.response) {
            setUser({});
            setError({
              isError: true,
              message: err.response.data.message,
            });
            setIsLoading(false);
          } else {
            setUser({});
            setError({
              isError: true,
              message: err.message,
            });
            setIsLoading(false);
          }
        });
    }
  }, [username]);

  return (
    <>
      <Header handleSearch={handleSearch} />
      <main>
        <Container>
          {isLoading && (
            <MoonLoader
              color="#2a84fe"
              loading
              size={100}
              cssOverride={{
                margin: '5rem auto',
              }}
              speedMultiplier={0.7}
            />
          )}
          {!error.isError && !isLoading && <User {...user} />}
          {error.isError && !isLoading && (
            <Alert alertMessage={error.message} />
          )}
        </Container>
      </main>
    </>
  );
};

export default App;
