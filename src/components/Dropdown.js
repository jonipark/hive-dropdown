import React from 'react';
import './Dropdown.css';
import '../App.css';

// check dropdown is clicked
// if clicked, open dropdown
// if clicked outside, close dropdown



const Dropdown = ({ options, isMulti }) => {
    const [open, setOpen] = React.useState(false);
    const [showOptions, setShowOptions] = React.useState(false);
    const [selected, setSelected] = React.useState([]);

    // get display value
    // if selected is not empty, get selected value, else get placeholder
    function getDisplay() {
        if (selected.length > 0) {
            if (isMulti) {
                return selected.map((item) => item.value).join(', ');
            } else {
                return selected[0].value;
            }
        } else {
            return 'Select...';
        }
    };

    function handleDropdownClick() {
        setOpen(!open)
        setShowOptions(!showOptions)
    }

    function handleSelected(option) {
        if (!selected.includes(option)) {
            if (isMulti) {
                setSelected([...selected, option])
            } else {
                setSelected([option])
            }
        } else {
            // if selected option is already in selected array, remove it
            setSelected(selected.filter((item) => item !== option))
        }
    }

    // use effect to check if icon is clicked
    // if clicked, open dropdown and icon changes
    //TODO: if clicked outside, close dropdown and icon changes
    // function handleOutsideClick() {
    //     setOpen(!open)
    //     setShowOptions(!showOptions)
    // }

    return (
        <div className="dropdown-container">
            <div className="dropdown-input flex column">
                <div className="flex spacebtw" onClick={handleDropdownClick}>
                    <div className="dropdown-placeholder">{getDisplay()}</div>
                    <div className="dropdown-tool" >
                        <i className={open? 'fas fa-chevron-up gray' : 'fas fa-chevron-down gray'}></i>
                    </div> 
                </div>

                {showOptions &&
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div className={ (selected.includes(option))?
                            "dropdown-menu-item flex column selected"
                            : "dropdown-menu-item flex column"}
                            onClick={() => handleSelected(option)}>
                            {option.value}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default Dropdown;