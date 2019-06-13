import Anchor from './../../../../atoms/Anchor';

export default () => (
  <ul className="container" role="navigation">
    <li>
      <Anchor href="javascript: void(0);" className="active">
        <span className="pgicon pgicon-overview"></span>
        Overview            </Anchor>
    </li>
    <li>
      <Anchor href="javascript: void(0);">
        <span className="pgicon pgicon-insights"></span>
        Price Insights            </Anchor>
    </li>
    <li>
      <Anchor href="javascript: void(0);">
        <span className="pgicon pgicon-location-o"></span>
        Location            </Anchor>
    </li>
  </ul>
);
