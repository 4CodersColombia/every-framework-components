import { Component, getAssetPath, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import imageCompression from 'browser-image-compression';

@Component({
  tag: 'ef-add-file-image',
  styleUrl: 'ef-add-file-image.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class EfAddFileImage {
  @Prop() title: string = 'Title';
  @Prop() subTitle: string = 'subtitle';
  @Prop() infoIcon: string = 'add';
  @Prop() circle: boolean = false;
  @Prop() width: number = 100;
  @Prop() height: number = 100;
  @Prop() multiple: boolean = false;

  @State() previewImage: string;
  @State() error: string;
  //Event to emit any action from of parent
  @Event() event: EventEmitter<File>;
  async eventUpload(file: File) {
    this.event.emit(await this.compressImage(file));
  }
  async compressImage(photoP: File) {
    var options = {
      maxSizeMB: 0.7,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      return imageCompression(photoP, options);
    } catch (error) {
      this.error = error;
    }
  }
  onInputChange(files: FileList) {
    // check if 1 image is uploaded
    if (files.length === 1) {
      const imageFile = files[0];
      this.uploadImage(imageFile);
    } else {
      this.error = files.length === 0 ? 'NO IMAGE UPLOADED' : 'YOU CAN ONLY UPLOAD ONE IMAGE AT THE TIME';
      return false;
    }
  }

  uploadImage(file: File) {
    // create a new instance of HTML5 FileReader api to handle uploading
    const reader = new FileReader();

    reader.onload = () => {
      this.previewImage = URL.createObjectURL(file);
      this.eventUpload(file);
    };

    reader.onerror = err => {
      this.error = 'something went wrong...' + err;
    };
    reader.readAsDataURL(file);
  }
  getStyleArchive() {
    if (this.circle) return { 'width': this.width + 'px', 'height': this.height + 'px', 'border-radius': '100%' };
    return {
      width: this.width + 'px',
      height: this.height + 'px',
    };
  }
  renderImagePreview() {
    if (this.previewImage)
      return (
        <label htmlFor={'add-file'} class="ef-add-archive__archive" style={this.getStyleArchive()}>
          <img class="ef-add-archive__archive-img-upload" style={this.getStyleArchive()} src={this.previewImage} alt="addArchive" />
        </label>
      );
    return (
      <label htmlFor={'add-file'} class="ef-add-archive__archive" style={this.getStyleArchive()}>
        <img class="ef-add-archive__archive-img" src={getAssetPath(`./assets/addArchive.png`)} alt="addArchive" />
        <span class="ef-add-archive__archive-info">{this.infoIcon}</span>
      </label>
    );
  }
  render() {
    return (
      <div class="ef-add-archive__contentainer">
        <span class="ef-add-archive__archive-title">
          {this.title} <span class="ef-add-archive__archive-subtitle">{this.subTitle}</span>
        </span>
        <div class="ef-add-archive__content ">{this.renderImagePreview()}</div>
        <input
          onChange={($event: any) => this.onInputChange($event.target.files)}
          accept="image/*"
          type="file"
          id={'add-file'}
          style={{ display: 'none', visibility: 'none' }}
        ></input>
        <span class="ef-add-archive__archive-error ">{this.error}</span>
      </div>
    );
  }
}
