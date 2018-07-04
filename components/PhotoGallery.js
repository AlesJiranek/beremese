import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { photos } from './Photos';

const thumbnails = photos.map(image => {
  const size = 0.25;
  const height = Math.floor(image.height * size);
  const width = Math.floor(image.width * size);

  const src = image.src
    .replace(`w${image.width}`, `w${width}`)
    .replace(`h${image.height}`, `h${height}`);

  return { src, width, height };
});

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      open: false,
      thumbnails: thumbnails.slice(0, 20)
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 1000) {
      this.loadMorePhotos();
    }
  }

  loadMorePhotos() {
    if (this.state.thumbnails.length >= thumbnails.length) {
      this.setState({ loadedAll: true });
      return;
    }
    this.setState({
      thumbnails: this.state.thumbnails.concat(
        thumbnails.slice(
          this.state.thumbnails.length,
          this.state.thumbnails.length + 20
        )
      )
    });
  }

  handleClickPrev = () => {
    this.setState({ index: this.state.index - 1 });
  };

  handleClickNext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickGallery = (e, data) => {
    this.setState({ open: true, index: data.index });
  };

  render() {
    const { open, index } = this.state;

    return (
      <React.Fragment>
        <Gallery
          columns={4}
          photos={this.state.thumbnails}
          onClick={this.handleClickGallery}
        />
        <Lightbox
          images={photos}
          onClose={this.handleClose}
          onClickPrev={this.handleClickPrev}
          onClickNext={this.handleClickNext}
          currentImage={index}
          isOpen={open}
        />
      </React.Fragment>
    );
  }
}

export default PhotoGallery;
