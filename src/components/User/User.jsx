import './User.css';

const User = (props) => {
  const {
    avatar_url: avatarUrl,
    name,
    login,
    followers,
    public_repos: reposCount,
    repos = [],
  } = props;

  //Prevents user shown at initial render
  if (Object.keys(props).length === 0) {
    return null;
  }

  return (
    <article className="user">
      <img
        className="user__avatar"
        src={avatarUrl}
        alt="User's profile picture"
        width={200}
        height={200}
      />
      <div className="user__content">
        <h2 className="user__title">User details:</h2>
        <div className="user__list">
          {name && <li className="user__item">Name: {name}</li>}
          {login && <li className="user__item">Username: {login}</li>}
          {followers >= 0 && (
            <li className="user__item">Followers count: {followers}</li>
          )}
          {reposCount >= 0 && (
            <li className="user__item">Repositories count: {reposCount}</li>
          )}
        </div>
      </div>
      <div className="user__content">
        {repos.length > 0 && (
          <h2 className="user__title">User's repositories:</h2>
        )}
        <ul className="user__list">
          {repos.length > 0 &&
            repos.map((repo) => (
              <li
                key={repo.id}
                className="user__item"
              >
                <a
                  href={repo.clone_url}
                  className="user__link"
                  target="_blank"
                >
                  {repo.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default User;
