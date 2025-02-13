import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

export class Menu extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <Pivot linkSize={PivotLinkSize.large}  onLinkClick={this.onLinkClick}>
          <PivotItem headerText="Projects" itemKey="#" >
          </PivotItem>
          <PivotItem headerText="About" itemKey="#/about">
          </PivotItem>
        </Pivot>
      </div>
    );
  }

  public onLinkClick(item?: PivotItem, ev?: React.MouseEvent<HTMLElement>): void {
    if (item) {
      console.log(item.props.itemKey);
      window.open(item.props.itemKey, '_self');
    }
  }
}