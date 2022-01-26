import AuthenticationService from "../services/AuthenticationService";

export default function Logout() {
  return (
    AuthenticationService.handleLogout() && window.document.location.reload()
  );
}
