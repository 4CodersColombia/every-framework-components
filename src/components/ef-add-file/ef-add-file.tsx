import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../EVERYFRAMEWORKICONS/EVERYFRAMEWORKICONS';

@Component({
  tag: 'ef-add-file',
  styleUrl: 'ef-add-file.css',
  shadow: true,
})
export class EfAddFile {
  @Prop() title: string = 'add file here';
  @Prop() buttonText: string = 'Add Files';
  @State() error: string;
  @State() files: File[]=[];
  @Event() event: EventEmitter<File[]>;
  async eventUpload(files: File[]) {
    this.event.emit(files);
  }

  uploadFile(files: File[]) {
    // create a new instance of HTML5 FileReader api to handle uploading
    this.files = Object.keys(files).map(item => files[item]);
    this.eventUpload(files);
  }

  deleteFile(nameFile: string) {
    this.files = this.files.filter(item => {
      return item.name !== nameFile;
    });
  }
  renderCardInfoFile = (file: File) => {
    const buttons = [
      {
        urlIcon: EVERYFRAMEWORKICONS['COMUNITY'],
        id: file.name,
      },
      { urlIcon: EVERYFRAMEWORKICONS['TRASH'], id: file.name },
    ];
    return (
      <div class="ef-add-archive__card-info-file">
        <img src={EVERYFRAMEWORKICONS['ICON_PDF']} alt="icon_pdf" />
        <span class="ef-add-archive__card-info-file-name ">{file.name.slice(0, 8)}</span>
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
            onChange={($event: any) => this.uploadFile($event.target.files)}
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
