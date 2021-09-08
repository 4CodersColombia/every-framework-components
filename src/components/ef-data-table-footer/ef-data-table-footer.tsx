import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-data-table-footer',
  styleUrl: 'ef-data-table-footer.css',
  shadow: true,
})
export class EfDataTableFooter {
  @Prop() dataType: string = 'Usuarios';
  @Prop() leftText: string = 'Mostrando:';
  @Prop() rightText: string = 'Total';
  @Prop({ mutable: true }) pageActive: number = 1;
  @Prop() pages: number = 1;
  @Prop() visiblePages: number = 1;
  @Prop({ mutable: true }) valueFilter: number = 10;
  @Prop() errorMessageFilter: string;
  @Prop() labelFilter: string;
  @Prop() iconFilter: string;
  @Prop() disabledFilter: boolean = false;
  @Prop() itemsFilter: { id: string | number; text: string }[] = [
    { id: 0, text: '10' },
    { id: 1, text: '20' },
    { id: 2, text: '30' },
    { id: 3, text: '40' },
    { id: 4, text: '40' },
    { id: 5, text: '50' },
  ];
  @Prop() itemsCount: string = '200';

  @Event() valueChangeFilter: EventEmitter<object>;
  @Event() valueChangePageActive: EventEmitter<number>;

  onValeChangePageActive(newValue: number) {
    this.pageActive = newValue;
    this.valueChangePageActive.emit(newValue);
  }

  onDropdownChangeValue(newValue: { [key: string]: unknown }) {
    this.valueFilter = newValue.text as number;
    this.valueChangeFilter.emit(newValue);
  }
  render() {
    return (
      <div class="ef-data-table-footer__container ef-data-table-footer__text">
        <div class="ef-data-table-footer__left">
          <span>{this.leftText}</span>
          <ef-dropdown
            value={this.valueFilter + ''}
            disabled={this.disabledFilter}
            items={this.itemsFilter}
            errorMessage={this.errorMessageFilter}
            label={this.labelFilter}
            icon={this.iconFilter}
            onValueChange={value => {
              this.onDropdownChangeValue(value.detail as { [key: string]: unknown });
            }}
            class="ef-data-table-footer__dropdown"
          ></ef-dropdown>
          <span class="ef-data-table-footer__text-bold"> {this.dataType} </span>
        </div>
        <div class="ef-data-table-center">
          <ef-paginator
            onEvent={value => {
              console.log(value);
            }}
            pageActive={this.pageActive}
            pages={this.pages}
            visiblePages={this.visiblePages}
          ></ef-paginator>
        </div>
        <div class="ef-data-table-right">
          <span>
            {this.rightText} {this.dataType}: <span class="ef-data-table-footer__text-bold"> {this.itemsCount}</span>
          </span>
        </div>
      </div>
    );
  }
}