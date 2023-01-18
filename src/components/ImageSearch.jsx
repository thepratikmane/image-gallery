import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text); // calling searchText function defined in app.jsx and setting up as search Term 
    };
    return (
        <div class="flex items-center justify-center my-4">
            <form onSubmit={onSubmit} >
                <div class="flex border-2 border-gray-200 rounded">
                    {/**wheenever the value of the input is changes, set the text */}
                    <input onChange={e => setText(e.target.value)} type="text" class="px-4 py-2 w-80" placeholder="Search..." />
                    <button class="px-4 text-white bg-gray-600 border-l " type='submit'>Search</button>
                </div>
            </form>

        </div>
    );
};

export default ImageSearch;