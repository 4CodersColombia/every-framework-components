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
  @Prop() files: string[] = [];
  @State() error: string;
  @Event({ eventName: 'change-value' }) changeValue: EventEmitter<File[]>;
  @Event({ eventName: 'delete-file' }) deleteFile: EventEmitter<number>;
  async eventUpload(files: File[]) {
    this.changeValue.emit(files);
  }
  uploadFile(files: File[]) {
    // create a new instance of HTML5 FileReader api to handle uploading
    const newFiles = [];
    Array.from(files).forEach(item => {
      if (!this.files.filter(file => file == item.name).length) {
        newFiles.push(item);
      }
    });
    this.eventUpload(newFiles);
  }

  deleteFileFuntion(nameFile: string) {
    const index = this.files.indexOf(nameFile);
    this.deleteFile.emit(index);
  }

  getTextFile(textName: string) {
    if (textName.length >= 20) return textName.slice(0, 20) + '...';
    return textName;
  }
  renderCardInfoFile = (file: string) => {
    const buttons = [{ urlIcon: EVERYFRAMEWORKICONS['TRASH'], id: file }];
    return (
      <div class="ef-add-archive__card-info-file">
        <div class="ef-add-archive__card-info-file-icon">
          <img src={EVERYFRAMEWORKICONS['ICON_PDF']} alt="icon_pdf" />
          <span class="ef-add-archive__card-info-file-name">{this.getTextFile(file)}</span>
        </div>
        <ef-buttons-icon
          onEvent={value => {
            this.deleteFileFuntion(value.detail);
          }}
          buttons={buttons}
        ></ef-buttons-icon>
      </div>
    );
  };

  renderInfo = (files: string[]) => {
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
