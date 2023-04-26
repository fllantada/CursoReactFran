const Select = ({options, defaultValue, onSelect}) => {
    return (
        <select
            onChange={(e) => onSelect(e.target.value)}
            value={defaultValue}
        >
            {options.map(option => <option key={option.id} value={option.value}>{option.text}</option>)}
        </select>
    )
}

export default Select