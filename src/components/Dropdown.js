import React from 'react';
import './Dropdown.css';
import '../App.css';

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

    function handleMultiAllClick() {
        if (selected.length === options.length) {
            setSelected([])
        } else {
            setSelected(options)
        }
    }

    return (
        <div>
            {isMulti &&
            <div className="flex justify-right pb-05" onClick={handleMultiAllClick}>
                {(selected.length === options.length) ?
                    <i className="flex fas fa-trash multi-all"><div className="pl-03">deselect all</div></i>
                    :<i className="flex fas fa-check multi-all"><div className="pl-03">select all</div></i>
                }
            </div>
            }
            <div className="dropdown-container">
                <div className="dropdown-input flex column">
                    <div className="flex spacebtw" onClick={handleDropdownClick}>
                        <div className="dropdown-placeholder">{getDisplay()}</div>
                        <div className="dropdown-tool flex icon-container" >
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
        </div>
    );
}

export default Dropdown;