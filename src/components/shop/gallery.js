import Carousel from "nuka-carousel";
import React from "react";

export default class Gallery extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Carousel
          autoplay="true"
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          autoplayReverse="true"
          autoplayInterval="1000"
        >
          <img src="https://img2.akspic.ru/image/21212-biom-hudozhnik-artist-graficeskij_dizajn-art-1920x1080.jpg" />
          <img src="https://www.hdwallpapers.net/previews/neon-sunset-1170.jpg" />
        </Carousel>
      </div>
    );
  }
}
