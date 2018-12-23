import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PnpspfxWebPartStrings';

import 'pnpspfx/dist/pnpspfx/bundle.js';

export interface IPnpspfxWebPartProps {
  description: string;
}

export default class PnpspfxWebPart extends BaseClientSideWebPart<IPnpspfxWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-pnpspfx-web-part description="${ this.properties.description }"></app-pnpspfx-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
