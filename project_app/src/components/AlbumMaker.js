import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries.json';

class AlbumMaker extends React.Component {

    render() {
        // Debugging Techniques
        var radius = 27;
        const pi = 3.14;
        // debugger will stop the code and allow one to fully analyze it and debugg it in dev tools
        debugger;
        var area = radius ** 2 * pi;

        return (

            <div className='flex-container'>
                {
                    // Map function takes the entries inside an array an calls them using 'photo'
                    entries.itemlist.map((photo) => {
                        return <PhotoEntry key={photo.src} src={photo.src} composition={photo.composition} caption={photo.caption} />
                    })
                }
            </div>

        )
    }

}

// Always export a class
export default AlbumMaker