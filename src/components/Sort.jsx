import { useState } from "react";


const Sort = ({sortParamenter}) => {
const options = ["views", "likes", "downloads"];
const [selected, setSelected] = useState(options[0]);
   

    const onSubmit = (e) => {
        e.preventDefault();
        sortParamenter(selected); 
    };

    return (
        <form onSubmit={onSubmit}>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}>
                {options.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Sort;