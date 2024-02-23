import "./dropdownList.css";

const DropdownList = (props) => {
  const createDropdownItems = () => {
    const arr = Array(props.data.length);
    for (let i = 0; i < props.data.length; i++) {
      const data = props.data[i];
      arr[i] = (
        <li key={`${props.keyName}_dropdown_${i}`} tabIndex="0">
          {data.img ? (
            <img
              className="dropdown-list-icons"
              src={data.img}
              alt={`${data.name} icon`}
            ></img>
          ) : null}
          <div className="dropdown-list-title">{data.name}</div>
        </li>
      );
    }

    return arr;
  };
  return <ul className="dropdown-container">{createDropdownItems()}</ul>;
};

export default DropdownList;
