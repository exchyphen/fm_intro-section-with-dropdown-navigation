import "./menuModal.css";

import IconCloseMenu from "../assets/images/icon-close-menu.svg";

const MenuModal = (props) => {
  return (
    <div className="menu-modal-container">
      <div className="icon-close-wrapper">
        <img
          className="icon-menu close-menu"
          src={IconCloseMenu}
          alt="icon-close"
          onClick={props.onClick}
        ></img>
      </div>
      {props.createNavItems()}
      <div className="account-container">
        <a href="#">Login</a>
        <button className="register-button register-button-stretch">
          Register
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
