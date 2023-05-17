interface IProps {
  name: string;
  abilities?: string[];
}

export class Pokemon {
  props: IProps;

  private validateName(name: string) {
    return name.length;
  }

  constructor(props: IProps) {
    this.props = props;

    const isValidName = this.validateName(this.props.name);

    if (!isValidName) {
      throw new Error('Invalid pokemon name error.');
    }
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
