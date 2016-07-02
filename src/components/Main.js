require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas  = require('../data/imageData.json')

imageDatas = (function(imageDataArr){
    for(var i = 0,j=imageDataArr.length;i<j;i++){
        var sImgData = imageDataArr[i];
        sImgData.imageUrl = require('../img/' + sImgData.fileName )

        imageDataArr[i] = sImgData
    }
    return imageDataArr;
})(imageDatas)

class ImageFigure extends React.Component {
    render(){
        return (
            <figure>
                <img/>
                <figcaption>
                      <h2></h2>
                </figcaption>
            </figure>
        )

    }
}

class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(function(item){
        imgFigures.push(<ImageFigure data={item}>)
    })
    return (
      <section className="stage">
            <section className="img-sec">
                {imgFigures}
            </section>
            <nav className="controller-nav">
                {controllerUnits}
            </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
