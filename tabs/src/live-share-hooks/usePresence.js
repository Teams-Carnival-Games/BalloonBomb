export const usePresence = (
  presence,
  allowedRoles
) => {
  const startedInitializingRef = useRef(false);
  const usersRef = useRef([]);
  const [users, setUsers] = useState(usersRef.current);
  const [localUser, setLocalUser] = useState();
  const [presenceStarted, setStarted] = useState(false);

  // Local user is an eligible presenter
  const localUserIsEligiblePresenter = useMemo(() => {
    if (allowedRoles.length === 0) {
      return true;
    }
    if (!presence || !localUser) {
      return false;
    }
    return (
      localUser.roles.filter((role) =>
        allowedRoles.includes(role)
      ).length > 0
    );
  }, [allowedRoles, presence, localUser]);

  // Effect which registers SharedPresence event listeners before joining space
  useEffect(() => {
    if (
      (presence && presence.presence === null) ||
      //!context ||
      startedInitializingRef.current
    ) {
      return;
    }

    startedInitializingRef.current = true;
    // Register presenceChanged event listener
    presence.presence.on("presenceChanged", (userPresence, local) => {
      console.log("usePresence: presence received", userPresence, local);
      if (local) {
        setLocalUser(userPresence);
      }
      const updatedUsers = presence.presence
      .getUsers(PresenceState.online)
      .map((userPresence) => ({
        userId: userPresence.userId,
        state: userPresence.state,
        data: userPresence.data,
        name: userPresence.displayName,
        roles: userPresence.roles,
      }));
      setUsers([...updatedUsers]);
    });

    presence.presence
      .initialize()
      .then(() => {
        console.log("usePresence: started presence");
        setStarted(true);
      })
      .catch((error) => console.error(error));
  }, [presence, setUsers, setLocalUser]);

  return {
    presenceStarted,
    localUser,
    users,
    localUserIsEligiblePresenter,
  };
};