import { Component, Host, h, Prop } from '@stencil/core';
import { COUNTRIES_INFO } from './infoCountries';
import { countries } from 'country-flags-svg';

@Component({
  tag: 'ef-country-picker',
  styleUrl: 'ef-country-picker.css',
  shadow: true,
})
export class EfCountryPicker {
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop({ attribute: 'error-message' }) errorMessage: string;
  @Prop() label: string;
  @Prop() flag: boolean = true;
  @Prop() countryName: boolean = true;
  @Prop() CountryCode: boolean = true;

  getFlagUrl(countryCode) {
    try {
      return countries.find(country => country.iso2 === countryCode).flag;
    } catch (error) {
      return null;
    }
  }
  getCountriesInfo() {
    return COUNTRIES_INFO.map(item => {
      const flag = this.flag ? this.getFlagUrl(item.code) : null;
      return {
        text: (this.countryName ? item.name + ' ' : '') + (this.CountryCode ? item.dial_code + '' : ''),
        id: item.code,
        iconUrl: flag,
      };
    });
  }
  getWidthSelectCountryPicker() {
    if (this.countryName && (this.CountryCode || this.flag))
      return {
        'min-width': 450 + 'px',
      };
    return {
      'min-width': 110 + 'px',
    };
  }
  updateValue(newValue) {
    this.value = newValue.text;
  }
  render() {
    return (
      <Host>
        <ef-dropdown
          style={this.getWidthSelectCountryPicker()}
          disabled={this.disabled}
          value={this.value}
          items={this.getCountriesInfo()}
          errorMessage={this.errorMessage}
          label={this.label}
          onChange-value={value => this.updateValue(value.detail)}
        />
      </Host>
    );
  }
}
