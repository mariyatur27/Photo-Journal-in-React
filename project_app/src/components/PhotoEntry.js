import React from 'react';
import './master.css';

class PhotoEntry extends React.Component{

    render() {

        // Properties that get passed into components (caption, composition, source) from App.js
        console.log(this.props.caption);
        console.log(this.props.composition);
        console.log(this.props.src);

        // Dynamicly generates a path for an image that was passed from App.js
        const image_path = "./images/" + this.props.src;
        // {image_path} is a JavaScript expression

        return <div className='photo-entry-block'>
            <a href= {image_path}>
                <img className='photo-img' src={image_path} alt={image_path}/>
            </a>
            <h5>{this.props.caption}</h5>
            <h6>{this.props.composition}</h6>
        </div>

    }

}

// Always export the classes
export default PhotoEntry;