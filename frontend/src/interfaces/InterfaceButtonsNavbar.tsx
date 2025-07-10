export default interface NavbarButtonsConfig {
  key: string;
  isLoggedIn: boolean;
  isAdmin: boolean;
  func?: () => void;
}
