interface IProps {
  name: string;
  abilities?: string[];
}

export class Pokemon {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
  }

  public get abilities() {
    return this.props.abilities;
  }

  public set abilities(abilities: string[]) {
    this.props.abilities = abilities;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name) {
    this.props.name = name;
  }
}
