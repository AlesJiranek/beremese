import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { photos } from './Photos';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      open: false,
      photos: photos.slice(0, 20)
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
    if (this.state.photos.length >= photos.length) {
      this.setState({ loadedAll: true });
      return;
    }
    this.setState({
      photos: this.state.photos.concat(
        photos.slice(this.state.photos.length, this.state.photos.length + 20)
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
          photos={this.state.photos}
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
