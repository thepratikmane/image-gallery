import React from 'react';

//destrucing the imageObj variable and using it as it is, no need use the keyword "props"
const ImageCard = ({ imageObj }) => {
    const tagsArr = imageObj.tags.split(',');
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            {/* imageObj.webformatURL is the actual image */}
            <img src={imageObj.webformatURL} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">Photo by {imageObj.user}</div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {imageObj.views}
                    </li>

                    <li>
                        <strong>Downloads: </strong>
                        {imageObj.downloads}
                    </li>

                    <li>
                        <strong>Likes: </strong>
                        {imageObj.likes}
                    </li>
                </ul>
            </div>

            <div className="px-6 py-4">
                {tagsArr.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#{tag}
                    </span>
                ))}

            </div>
        </div>

    );
};

export default ImageCard;