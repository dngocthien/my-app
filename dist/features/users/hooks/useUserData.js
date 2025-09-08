"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserData = useUserData;
function useUserData() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setUser);
  }, []);
  return user;
}