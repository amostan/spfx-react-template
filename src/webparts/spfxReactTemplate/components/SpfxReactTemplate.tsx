import * as React from 'react';
import styles from './SpfxReactTemplate.module.scss';
import { ISpfxReactTemplateProps } from './ISpfxReactTemplateProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxReactTemplate extends React.Component<ISpfxReactTemplateProps, {}> {
  public render(): React.ReactElement<ISpfxReactTemplateProps> {
    return (
      <div className={ styles.spfxReactTemplate }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.listName)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
