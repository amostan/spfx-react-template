import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxReactTemplateWebPartStrings';
import SpfxReactTemplate from './components/SpfxReactTemplate';
import { ISpfxReactTemplateProps } from './components/ISpfxReactTemplateProps';

export interface ISpfxReactTemplateWebPartProps {
  listName: string;
}

export default class SpfxReactTemplateWebPart extends BaseClientSideWebPart<ISpfxReactTemplateWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxReactTemplateProps > = React.createElement(
      SpfxReactTemplate,
      {
        listName: this.properties.listName
      }
    );

    ReactDom.render(element, this.domElement);
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
                PropertyPaneTextField('listName', {
                  label: strings.ListNameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
