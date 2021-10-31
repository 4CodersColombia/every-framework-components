import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';

@Component({
  tag: 'ef-add-file',
  styleUrl: 'ef-add-file.css',
  shadow: true,
})
export class EfAddFile {
  @Prop() title: string = 'add file here';
  @Prop() buttonText: string = 'Add Files';
  @Prop() files: File[] = [];
  @State() error: string;
  @Event({ eventName: 'change-value' }) changeValue: EventEmitter<File[]>;
  async eventUpload(files: File[]) {
    this.changeValue.emit(files);
  }
  uploadFile(files: File[]) {
    // create a new instance of HTML5 FileReader api to handle uploading
    Array.from(files).forEach(item => {
      if (!this.files.filter(file => file.name == item.name).length) this.files = this.files.concat(item);
    });
    this.eventUpload(this.files);
  }

  deleteFile(nameFile: string) {
    this.files = this.files.filter(item => {
      return item.name !== nameFile;
    });
    this.eventUpload(this.files);
  }

  getTextFile(textName: string) {
    if (textName.length >= 20) return textName.slice(0, 20) + '...';
    return textName;
  }
  renderCardInfoFile = (file: File) => {
    const buttons = [{ urlIcon: EVERYFRAMEWORKICONS['TRASH'], id: file.name }];
    return (
      <div class="ef-add-archive__card-info-file">
        <div class="ef-add-archive__card-info-file-icon">
          <img src={EVERYFRAMEWORKICONS['ICON_PDF']} alt="icon_pdf" />
          <span class="ef-add-archive__card-info-file-name">{this.getTextFile(file.name)}</span>
        </div>
        <ef-buttons-icon
          onEvent={value => {
            this.deleteFile(value.detail);
          }}
          buttons={buttons}
        ></ef-buttons-icon>
      </div>
    );
  };

  renderInfo = (files: File[]) => {
    if (files.length)
      return files.map(item => {
        return this.renderCardInfoFile(item);
      });
    return <span class="ef-add-file_title"> {this.title}</span>;
  };
  render() {
    return (
      <Host>
        <div class="ef-add-file_container">
          {this.renderInfo(this.files)}
          <input
            onChange={($event: any) => {
              this.uploadFile($event.target.files);
              $event.target.value = null;
            }}
            accept=".pdf"
            type="file"
            multiple
            id={'add-file'}
            style={{ display: 'none', visibility: 'none' }}
          ></input>
          <label htmlFor={'add-file'} class="ef-add-archive_ef-button">
            {this.buttonText}
          </label>
        </div>
        <span class="ef-add-archive__archive-error ">{this.error}</span>
      </Host>
    );
  }
}
