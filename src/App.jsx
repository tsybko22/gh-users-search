import { useEffect, useState } from 'react';

import { useAlert } from './context/AlertContext';

import Alert from './components/Alert';
import Container from './components/Container';
import Header from './components/Header';
import User from './components/User';

import { API_BASE_URL } from './config.js';

import { MoonLoader } from 'react-spinners';

const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { handleToggleAlert } = useAlert();

  const handleSearch = (username) => setUsername(username);

  const getUser = async (username) => {
    const userResponse = await fetch(API_BASE_URL + username);
    const reposResponse = await fetch(API_BASE_URL + username + '/repos');

    userResponse.json().then((userInfo) => {
      if (userInfo.message) {
        setIsError(true);
        setIsLoading(false);
        handleToggleAlert();
        return;
      }
      setUser(userInfo);
      reposResponse.json().then((repos) => {
        const topRepos = repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        console.log(topRepos);
        setUser({ ...userInfo, repos: topRepos });
        setIsLoading(false);
        setIsError(false);
      });
    });
  };

  useEffect(() => {
    if (username !== '') {
      setIsLoading(true);
      getUser(username);
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
          {!isError && !isLoading && <User {...user} />}
          <Alert alertMessage={`User "${username}" not found`} />
        </Container>
      </main>
    </>
  );
};

export default App;
