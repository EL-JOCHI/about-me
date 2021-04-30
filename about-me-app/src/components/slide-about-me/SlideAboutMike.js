import { Segment, Image, Label, Icon, List } from "semantic-ui-react";
import "./SlideAboutMike.css";

export const SlideAboutMike = () => {
  const src = "/images/mike-profile.jpg";

  return (
    <Segment>
      <Image src={src} size="small" floated="left" />
      <h4 className="glass-text">About Me</h4>
      <hr />
      <p className="glass-text">
        I’m an enthusiastic and passionate software enginner willing to cope in
        any situation.
      </p>
      <p className="glass-text">
        Creative and always ready to learn something new.
      </p>
      <List horizontal relaxed>
        <List.Item>
          <Image
            avatar
            src="/images/bolivian_flag.png"
          />
          <List.Content>
            <List.Header><a className="glass-text">Spanish (Native)</a></List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="/images/usa_flag.png"
          />
          <List.Content>
            <List.Header><a className="glass-text">English (Fluent)</a></List.Header>
          </List.Content>
        </List.Item>
      </List>
      <br />
      <div>
        <Label className="label-glass">
          <Icon name="mail" color="teal" />
          <Label.Detail>
            <a href="mailto:miguelalejandrohurtadoorellana@gmail.com">
              miguelalejandrohurtadoorellana@gmail.com
            </a>
          </Label.Detail>
        </Label>
        <Label className="label-glass">
          <Icon name="address card outline" />
          <Label.Detail>
            <a href="https://www.upwork.com/freelancers/~01de836b37fb5a6e88">
              Upwork Profile
            </a>
          </Label.Detail>
        </Label>
      </div>
      <div className="margin-top-1em">
        <Label className="label-glass">
          <Icon name="phone" color="green" />
          <Label.Detail>(+591) 79903277</Label.Detail>
        </Label>
      </div>
    </Segment>
  );
};
