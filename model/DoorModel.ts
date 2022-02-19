class DoorModel {
  #number: number
  #hasPresent: boolean
  #isSelected: boolean
  #isOpened: boolean

  constructor(
    number: number,
    hasPresent = false,
    isSelected = false,
    isOpened = false
  ) {
    this.#number = number;
    this.#hasPresent = hasPresent;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get number() {
    return this.#number;
  }

  get hasPresent() {
    return this.#hasPresent;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpened() {
    return this.#isOpened;
  }

  removeSelect() {
    const isSelected = false;
    return new DoorModel(
      this.number,
      this.hasPresent,
      isSelected,
      this.isOpened
    );
  }

  changeIsSelected() {
    const isSelected = !this.isSelected;
    return new DoorModel(
      this.number,
      this.hasPresent,
      isSelected,
      this.isOpened
    );
  }

  open() {
    const isOpened = true;
    return new DoorModel(
      this.number,
      this.hasPresent,
      this.isSelected,
      isOpened
    );
  }
}
  

export default DoorModel;