import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Image,
} from "react-bootstrap";

import user5 from "@/assets/images/users/user-5.jpg";
import { FiSettings, FiUser } from "react-icons/fi";

const ProfileDropdown = () => {
  return (
    <Dropdown as="li">
      <DropdownToggle
        as="a"
        className="nav-link waves-effect waves-light nav-user"
      >
        <span className="ms-1 nav-user-name hidden-sm">Nick</span>
        <Image
          src={user5}
          alt="profile-user"
          className="rounded-circle thumb-xs "
        />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <DropdownItem>
          <FiUser className="align-self-center icon-xs icon-dual me-1" />{" "}
          Profile
        </DropdownItem>
        <DropdownItem>
          <FiSettings className="align-self-center icon-xs icon-dual me-1" />{" "}
          Settings
        </DropdownItem>
        <div className="dropdown-divider mb-0"></div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
