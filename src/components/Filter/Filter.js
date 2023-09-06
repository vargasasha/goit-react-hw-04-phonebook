export const Filter = ({ filter, onFilter }) => {
    return (  <div>
        <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => onFilter(evt.target.value)}
      />
      
    </div>)

};
